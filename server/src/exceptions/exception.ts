import { Exceptions } from './exceptions.Erro';

export class Exception {
  constructor(readonly exception: Exceptions, readonly message?: string) {}
}
