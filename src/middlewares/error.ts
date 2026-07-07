import { Request, Response, NextFunction } from "express";

import { normalizeError } from "../errors/normalizeError";

const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const error = normalizeError(err);

  return res.status(error.statusCode).json({
    success: error.success,
    message: error.message,
    errors: error.errors,
    data: error.data,
  });
};

export { errorHandler };
