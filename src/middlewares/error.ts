import { ApiError } from "../utils/ApiError";
import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
      errors: err.errors,
      data: err.data,
    });
  }

  return res.status(500).json({
    success: false,
    message: "internal server error",
    errors: [],
    data: null,
  });
};

export { errorHandler };
