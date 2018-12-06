import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  USER = 'USER',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(AppRoles.USER) // define new or modify existing role. also takes an array.
  .createOwn('link') // equivalent to .createOwn('video', ['*'])
  .deleteOwn('link')
  .updateOwn('link')
  .readOwn('link');
