import { getProperty } from '../helpers/enums.helper';

export const Environments = new Proxy(['development', 'prod', 'local', 'test', 'qa', 'uat-wash', 'uat'], getProperty);
export const LoggerLevel = new Proxy(['debug', 'info', 'error'], getProperty);
