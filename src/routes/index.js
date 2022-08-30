import { CreateHealthRoutes } from './health.routes';

const createRoutes = app => {
  CreateHealthRoutes(app);

  return app;
};

export { createRoutes };
