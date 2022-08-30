import express from 'express';
import { HealthController } from '../controllers';

const router = express.Router();

const CreateHealthRoutes = app => {
  const healthController = new HealthController();

  app.use('/healthz', router);
  router.get('/', healthController.checkHealth);

  return router;
};

export { CreateHealthRoutes };
