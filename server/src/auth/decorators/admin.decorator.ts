import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AdminAuthorization implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const httpRequest = context.switchToHttp().getRequest();

    const data = httpRequest.user;
    if (data?.role === 'admin') {
      return true;
    }
    throw new UnauthorizedException('Acesso Restrito');
  }
}
