import {
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Exception } from './interfaceExeption';

export enum Exceptions {
  InvaliData,
  DataBaseException,
  NotFoundData,
  UnauthorizedException,
}

export function HandleException({ message, exception }: Exception) {
  if (
    exception === Exceptions.InvaliData ||
    exception === Exceptions.NotFoundData
  ) {
    throw new BadRequestException(message ? message : 'data invalid');
  }
  if (exception === Exceptions.DataBaseException) {
    throw new InternalServerErrorException(
      message ? message : 'erro no data base',
    );
  }
  if (exception === Exceptions.UnauthorizedException) {
    throw new UnauthorizedException(
      message ? message : 'você não tem autorização',
    );
  }
}
