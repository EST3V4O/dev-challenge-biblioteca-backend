import { BaseError } from './base-error'

export class ResourceNotFound extends BaseError {
  constructor() {
    super('Resource not found')
  }
}
