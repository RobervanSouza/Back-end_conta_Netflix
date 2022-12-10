import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Exception } from 'src/exceptions/exception';
import { Exceptions } from 'src/exceptions/exceptions.Erro';

@Injectable()
export class AdminAuthorization implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const httpRequest = context.switchToHttp().getRequest();

    const data = httpRequest.user;
    if (data?.role === 'admin') {
      return true;
    }
    throw new Exception(Exceptions.UnauthorizedException, 'Acesso Restrito');
  }
}
