import { ApiError } from "../utils/ApiError";

export const handleCloudinaryError = (err: unknown): ApiError | null => {
  if (!(err instanceof Error)) return null;

  if (err.message.includes("Invalid image")) {
    return new ApiError(400, "Invalid image format");
  }

  if (err.message.includes("File size")) {
    return new ApiError(413, "Image exceeds maximum size");
  }

  if (err.message.includes("Rate limit")) {
    return new ApiError(429, "Cloudinary rate limit exceeded");
  }

  return null;
};
