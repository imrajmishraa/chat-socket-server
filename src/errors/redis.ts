import { ApiError } from "../utils/ApiError";

export const handleRedisError = (err: unknown): ApiError | null => {
  if (!(err instanceof Error)) {
    return null;
  }

  if (
    err.message.includes("ECONNREFUSED") ||
    err.message.includes("Connection") ||
    err.message.includes("Socket")
  ) {
    return new ApiError(503, "Redis service is currently unavailable");
  }

  return null;
};
