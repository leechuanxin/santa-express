import db from './models/index.mjs';

// import your controllers here
import initUsersController from './controllers/users.mjs';
import initTestController from './controllers/test.mjs';

export default function bindRoutes(app) {
  // pass in the db for all items callbacks
  const UsersController = initUsersController(db);
  const TestController = initTestController();

  app.get('/testapi', TestController.index);
  app.get('/user/:idAddress/users', UsersController.showAll);
  app.post('/user/onboard', UsersController.onboard);
  app.put('/user/update', UsersController.update);
}
