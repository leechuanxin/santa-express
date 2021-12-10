import * as globals from '../globals.mjs';
import * as util from '../utils.mjs';
import * as validation from '../validation.mjs';
// db is an argument to this function so
// that we can make db queries inside
export default function initUsersController(db) {
  const onboard = async (request, response) => {
    const { address } = request.body;

    try {
      if (!address || typeof address !== 'string' || address.trim() === '') {
        throw new Error(globals.INVALID_ADDRESS_ERROR_MESSAGE);
      }

      const user = await db.User.findOne({
        where: {
          walletAddress: address,
        },
      });

      // create user
      if (!user) {
        const newUser = await db.User.create({
          displayName: null,
          walletAddress: address,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        const successMessage = `New user added with the cryptowallet address ${newUser.walletAddress}!`;

        response.send({
          id: newUser.id,
          message: successMessage,
          address: newUser.walletAddress,
        });
      } else if (user && !user.displayName) {
        const successMessage = `User with the cryptowallet address ${user.walletAddress} not yet onboarded!`;

        response.send({
          id: user.id,
          message: successMessage,
          address: user.walletAddress,
        });
      } else {
        const successMessage = `User with the cryptowallet address ${user.walletAddress} has been onboarded!`;
        response.send({
          id: user.id,
          displayName: user.displayName,
          message: successMessage,
          address: user.walletAddress,
        });
      }
    } catch (error) {
      let errorMessage = '';
      errorMessage = error.message;

      const resObj = {
        error: errorMessage,
        message: errorMessage,
        address,
      };

      response.send(resObj);
    }
  };

  const update = async (request, response) => {
    const userInfo = request.body;
    const validatedUserSettings = validation.validateUserSettings(userInfo);
    const invalidRequests = util.getInvalidFormRequests(validatedUserSettings);

    try {
      if (
        !userInfo.address
        || typeof userInfo.address !== 'string'
        || userInfo.address.trim() === ''
        || userInfo.address !== userInfo.address2
      ) {
        throw new Error(globals.INVALID_ADDRESS_ERROR_MESSAGE);
      }

      if (invalidRequests.length > 0) {
        throw new Error(globals.INVALID_SETTINGS_REQUEST_MESSAGE);
      }

      let user = await db.User.findOne({
        where: {
          [db.Sequelize.Op.and]: [
            { id: userInfo.userId },
            { walletAddress: userInfo.address },
          ],
        },
      });

      if (!user) {
        throw new Error(globals.SETTINGS_USER_NO_EXIST_ERROR_MESSAGE);
      }

      user = user.dataValues;

      const toUpdateUser = {
        ...user,
        displayName: userInfo.username,
        updatedAt: new Date(),
      };

      let updatedUser = await db.User.update(
        toUpdateUser,
        {
          where: { id: user.id },
          returning: true,
        },
      );

      updatedUser = updatedUser[1][0].dataValues;

      const successMessage = 'You have changed your profile successfully!';

      const obj = {
        id: updatedUser.id,
        message: successMessage,
        address: updatedUser.walletAddress,
        displayName: updatedUser.displayName,
      };

      response.send(obj);
    } catch (error) {
      let errorMessage = '';
      if (error.message === globals.INVALID_SETTINGS_REQUEST_MESSAGE) {
        errorMessage = 'There has been an error. Settings input validation failed!';
      } else {
        errorMessage = error.message;
      }

      const resObj = {
        error: errorMessage,
        message: errorMessage,
        ...validatedUserSettings,
      };

      response.send(resObj);
    }
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    onboard,
    update,
  };
}
