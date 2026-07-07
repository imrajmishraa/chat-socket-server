import { ApiError } from "../utils/ApiError";

import { handleMongooseError } from "./mongoose";
import { handleJwtError } from "./jwt";
import { handleZodError } from "./zod";
import { handleRedisError } from "./redis";

export const normalizeError = (err: unknown): ApiError => {
  if (err instanceof ApiError) {
    return err;
  }

  return (
    handleMongooseError(err) ??
    handleJwtError(err) ??
    handleZodError(err) ??
    handleRedisError(err) ??
    new ApiError(500, "Internal Server Error")
  );
};
