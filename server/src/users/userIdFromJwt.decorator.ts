import { createParamDecorator } from '@nestjs/common';
import { decode } from 'jsonwebtoken';

export const UserIdFromJwt = createParamDecorator((data, req) => {
  const authorization = req.headers.authorization;
  const jwt = authorization.split(' ')[1];
  const decodedJwt: any = decode(jwt);
  return decodedJwt.id;
});
