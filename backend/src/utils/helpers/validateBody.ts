import MissingParamError from "../errors/MissingParamError";

const validateBody = (obj:any, requiredFields: string[]) => {
  for (const field of requiredFields) {
    if (!obj[field]) {
      throw new MissingParamError(`O campo "${field}" é obrigatório`)
    }
  }
  return null;
}

export { validateBody }