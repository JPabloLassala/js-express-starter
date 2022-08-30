import express from 'express';
import httpStatus from 'http-status';
import { config, logger } from './config';
import { successHandler as morganSuccessHandler, errorHandler as morganErrorHandler } from './config/morgan.js';
import { errorConverter, errorHandler } from './middlewares/error.js';
import ApiError from './utils/apiError.js';
import { Environments } from './constants';
import { createRoutes } from './routes';

export default class Api {
  async bootstrap(app) {
    logger.info('Express app starting...');

    if (config.env !== Environments.test) {
      app.use(morganSuccessHandler);
      app.use(morganErrorHandler);
    }

    // parse json request body
    app.use(express.json());

    // parse urlencoded request body
    app.use(express.urlencoded({ extended: true }));

    // v1 api routes
    createRoutes(app);

    // send back a 404 error for any unknown api request
    app.use((req, res, next) => {
      next(new ApiError({ statusCode: httpStatus.NOT_FOUND, message: 'Not found' }));
    });

    // convert error to ApiError, if needed
    app.use(errorConverter);

    // handle error
    app.use(errorHandler);

    return app;
  }
}
