import { ApiError } from "../utils/ApiError";

export const userNotFound = () => new ApiError(404, "User not found");

export const chatNotFound = () => new ApiError(404, "Chat not found");

export const messageNotFound = () => new ApiError(404, "Message not found");

export const userAlreadyExists = () => new ApiError(409, "User already exists");

export const emailAlreadyExists = () =>
  new ApiError(409, "Email already registered");

export const invalidCredentials = () =>
  new ApiError(401, "Invalid email or password");

export const unauthorized = () => new ApiError(401, "Unauthorized");

export const forbidden = () => new ApiError(403, "Forbidden");

export const cannotMessageYourself = () =>
  new ApiError(400, "You cannot message yourself");

export const roomFull = () => new ApiError(400, "Chat room is full");

export const alreadyMember = () =>
  new ApiError(409, "User is already a member");
