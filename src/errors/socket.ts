import { ApiError } from "../utils/ApiError";

export const handleSocketError = (err: unknown): ApiError | null => {
  if (!(err instanceof Error)) return null;

  switch (err.message) {
    case "SOCKET_UNAUTHORIZED":
      return new ApiError(401, "Socket authentication failed");

    case "ROOM_NOT_FOUND":
      return new ApiError(404, "Chat room not found");

    case "USER_NOT_IN_ROOM":
      return new ApiError(403, "You are not a member of this room");

    default:
      return null;
  }
};
