import db from './models/index.mjs';

// import your controllers here
import initUsersController from './controllers/users.mjs';

export default function bindRoutes(app) {
  // pass in the db for all items callbacks
  const UsersController = initUsersController(db);

  app.post('/user/onboard', UsersController.onboard);
}
