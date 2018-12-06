import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from './users/user.entity';

interface Props {
  itemIdName: string;
  type: 'Param' | 'Body';
  itemsFieldName: string;
}

@Injectable()
export class UserBelongsToResourceGuard implements CanActivate {
  constructor(private readonly props: Props) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const args: any = context.getArgs();
    const user: User = request.user;

    let itemId: number;

    if (this.props.type === 'Param') {
      itemId = request.params[this.props.itemIdName];
    }

    console.log(itemId);

    return true;
  }
}
