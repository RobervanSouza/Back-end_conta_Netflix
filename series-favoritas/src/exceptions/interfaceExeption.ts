import { Exceptions } from './exceptions.Erro';

export interface Exception {
  message?: string;
  exception: Exceptions;
}
