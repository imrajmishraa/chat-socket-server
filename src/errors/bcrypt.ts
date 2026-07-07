import { ApiError } from "../utils/ApiError";

export const handleBcryptError = (err: unknown): ApiError | null => {
  if (!(err instanceof Error)) {
    return null;
  }

  if (err.message.includes("bcrypt")) {
    return new ApiError(500, "Password encryption failed");
  }

  return null;
};
