import { HttpInterceptorFn } from '@angular/common/http';
import {backendApiUrl} from '../app/app.config';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedRequest = req.url.startsWith('http')
  ? req
    :req.clone({url: `${backendApiUrl}${req.url}`})
  return next(modifiedRequest);
};
