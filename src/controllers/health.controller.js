import httpStatus from 'http-status';
import autobind from 'es6-autobind';

export class HealthController {
  constructor() {
    autobind(this);
  }

  checkHealth(req, res) {
    return res.status(httpStatus.OK).json({ message: 'Api Working' });
  }
}
