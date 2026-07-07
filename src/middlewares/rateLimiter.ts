import rateLimit from "express-rate-limit";

import { handleRateLimitError } from "../errors/rateLimit";

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5,

  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res, next) => {
    next(handleRateLimitError("login"));
  },
});

export const signupLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 3,

  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res, next) => {
    next(handleRateLimitError("signup"));
  },
});

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,

  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res, next) => {
    next(handleRateLimitError("api"));
  },
});

export const chatLimiter = rateLimit({
  windowMs: 1000, // 1 second
  limit: 10,

  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res, next) => {
    next(handleRateLimitError("chat"));
  },
});

export const otpLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 3,

  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res, next) => {
    next(handleRateLimitError("otp"));
  },
});
