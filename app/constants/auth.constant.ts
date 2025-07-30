// Authentication Constants
export const AUTH_CONFIG = {
  // Token configuration
  ACCESS_TOKEN_KEY: 'access_token',
  REFRESH_TOKEN_KEY: 'refresh_token',
  TOKEN_EXPIRY_KEY: 'token_expiry',

  // Session configuration
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  REFRESH_THRESHOLD: 5 * 60 * 1000, // 5 minutes before expiry

  // Password requirements
  MIN_PASSWORD_LENGTH: 8,
  REQUIRE_UPPERCASE: true,
  REQUIRE_LOWERCASE: true,
  REQUIRE_NUMBERS: true,
  REQUIRE_SPECIAL_CHARS: true,

  // Login attempts
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes
} as const;

export const AUTH_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
  MODERATOR: 'moderator',
} as const;

export const AUTH_PERMISSIONS = {
  // User permissions
  READ_PROFILE: 'read:profile',
  UPDATE_PROFILE: 'update:profile',
  DELETE_PROFILE: 'delete:profile',

  // Admin permissions
  MANAGE_USERS: 'manage:users',
  MANAGE_ROLES: 'manage:roles',
  MANAGE_SYSTEM: 'manage:system',

  // Content permissions
  CREATE_CONTENT: 'create:content',
  UPDATE_CONTENT: 'update:content',
  DELETE_CONTENT: 'delete:content',
  PUBLISH_CONTENT: 'publish:content',
} as const;

export const AUTH_MESSAGES = {
  LOGIN_SUCCESS: 'auth.login.success',
  LOGIN_FAILED: 'auth.login.failed',
  LOGOUT_SUCCESS: 'auth.logout.success',
  SESSION_EXPIRED: 'auth.session.expired',
  INVALID_CREDENTIALS: 'auth.invalid.credentials',
  ACCOUNT_LOCKED: 'auth.account.locked',
  PASSWORD_RESET_SENT: 'auth.password.reset.sent',
  PASSWORD_RESET_SUCCESS: 'auth.password.reset.success',
} as const;
