// Validation Constants
export const VALIDATION_RULES = {
  // Email validation
  EMAIL_PATTERN: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  EMAIL_MAX_LENGTH: 254,

  // Password validation
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  PASSWORD_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,

  // Username validation
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 30,
  USERNAME_PATTERN: /^[a-zA-Z0-9_-]+$/,

  // Name validation
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  NAME_PATTERN: /^[a-zA-Z\s'-]+$/,

  // Phone validation
  PHONE_PATTERN: /^\+?[\d\s\-()]+$/,
  PHONE_MIN_LENGTH: 10,
  PHONE_MAX_LENGTH: 15,

  // URL validation
  URL_PATTERN: /^https?:\/\/.+/,

  // File validation
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
} as const;

export const VALIDATION_MESSAGES = {
  // Common messages
  REQUIRED: 'validation.required',
  INVALID_FORMAT: 'validation.invalid_format',
  TOO_SHORT: 'validation.too_short',
  TOO_LONG: 'validation.too_long',
  INVALID_VALUE: 'validation.invalid_value',

  // Email messages
  INVALID_EMAIL: 'validation.invalid_email',
  EMAIL_TOO_LONG: 'validation.email_too_long',

  // Password messages
  PASSWORD_TOO_SHORT: 'validation.password_too_short',
  PASSWORD_TOO_LONG: 'validation.password_too_long',
  PASSWORD_WEAK: 'validation.password_weak',
  PASSWORD_MISMATCH: 'validation.password_mismatch',

  // Username messages
  USERNAME_TOO_SHORT: 'validation.username_too_short',
  USERNAME_TOO_LONG: 'validation.username_too_long',
  USERNAME_INVALID: 'validation.username_invalid',

  // Name messages
  NAME_TOO_SHORT: 'validation.name_too_short',
  NAME_TOO_LONG: 'validation.name_too_long',
  NAME_INVALID: 'validation.name_invalid',

  // Phone messages
  INVALID_PHONE: 'validation.invalid_phone',
  PHONE_TOO_SHORT: 'validation.phone_too_short',
  PHONE_TOO_LONG: 'validation.phone_too_long',

  // File messages
  FILE_TOO_LARGE: 'validation.file_too_large',
  INVALID_FILE_TYPE: 'validation.invalid_file_type',
  FILE_REQUIRED: 'validation.file_required',
} as const;

export const VALIDATION_SCHEMAS = {
  // Common field schemas
  EMAIL: {
    type: 'string',
    format: 'email',
    maxLength: VALIDATION_RULES.EMAIL_MAX_LENGTH,
  },

  PASSWORD: {
    type: 'string',
    minLength: VALIDATION_RULES.PASSWORD_MIN_LENGTH,
    maxLength: VALIDATION_RULES.PASSWORD_MAX_LENGTH,
    pattern: VALIDATION_RULES.PASSWORD_PATTERN,
  },

  USERNAME: {
    type: 'string',
    minLength: VALIDATION_RULES.USERNAME_MIN_LENGTH,
    maxLength: VALIDATION_RULES.USERNAME_MAX_LENGTH,
    pattern: VALIDATION_RULES.USERNAME_PATTERN,
  },

  NAME: {
    type: 'string',
    minLength: VALIDATION_RULES.NAME_MIN_LENGTH,
    maxLength: VALIDATION_RULES.NAME_MAX_LENGTH,
    pattern: VALIDATION_RULES.NAME_PATTERN,
  },

  PHONE: {
    type: 'string',
    minLength: VALIDATION_RULES.PHONE_MIN_LENGTH,
    maxLength: VALIDATION_RULES.PHONE_MAX_LENGTH,
    pattern: VALIDATION_RULES.PHONE_PATTERN,
  },

  URL: {
    type: 'string',
    format: 'uri',
    pattern: VALIDATION_RULES.URL_PATTERN,
  },
} as const;

export const VALIDATION_ERROR_CODES = {
  // Common error codes
  REQUIRED: 'REQUIRED',
  INVALID_FORMAT: 'INVALID_FORMAT',
  TOO_SHORT: 'TOO_SHORT',
  TOO_LONG: 'TOO_LONG',
  INVALID_VALUE: 'INVALID_VALUE',

  // Field-specific error codes
  INVALID_EMAIL: 'INVALID_EMAIL',
  WEAK_PASSWORD: 'WEAK_PASSWORD',
  INVALID_USERNAME: 'INVALID_USERNAME',
  INVALID_NAME: 'INVALID_NAME',
  INVALID_PHONE: 'INVALID_PHONE',
  INVALID_URL: 'INVALID_URL',
  FILE_TOO_LARGE: 'FILE_TOO_LARGE',
  INVALID_FILE_TYPE: 'INVALID_FILE_TYPE',
} as const;
