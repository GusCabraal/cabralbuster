export default class MissingParamError extends Error {
    private status;
    constructor(message: string) {
      super(message);
      this.name = 'MissingParamError';
      this.status = 400;
    }
  }