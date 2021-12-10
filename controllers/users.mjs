import * as globals from '../globals.mjs';
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
        response.send({
          message: 'User found, success!',
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

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    onboard,
  };
}
