// UI Constants
export const UI_CONFIG = {
  // Theme configuration
  DEFAULT_THEME: 'light',
  THEMES: ['light', 'dark', 'system'] as const,

  // Layout configuration
  SIDEBAR_WIDTH: 280,
  HEADER_HEIGHT: 64,
  FOOTER_HEIGHT: 60,

  // Breakpoints
  BREAKPOINTS: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  } as const,

  // Animation durations
  TRANSITION_DURATION: {
    fast: 150,
    normal: 300,
    slow: 500,
  } as const,

  // Z-index layers
  Z_INDEX: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal_backdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    toast: 1080,
  } as const,
} as const;

export const UI_COLORS = {
  // Primary colors
  PRIMARY: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // Success colors
  SUCCESS: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },

  // Warning colors
  WARNING: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  // Error colors
  ERROR: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
} as const;

export const UI_ICONS = {
  // Navigation icons
  HOME: 'i-heroicons-home',
  USER: 'i-heroicons-user',
  SETTINGS: 'i-heroicons-cog-6-tooth',
  LOGOUT: 'i-heroicons-arrow-right-on-rectangle',

  // Action icons
  ADD: 'i-heroicons-plus',
  EDIT: 'i-heroicons-pencil-square',
  DELETE: 'i-heroicons-trash',
  SAVE: 'i-heroicons-check',
  CANCEL: 'i-heroicons-x-mark',

  // Status icons
  SUCCESS: 'i-heroicons-check-circle',
  ERROR: 'i-heroicons-exclamation-circle',
  WARNING: 'i-heroicons-exclamation-triangle',
  INFO: 'i-heroicons-information-circle',

  // Form icons
  EMAIL: 'i-heroicons-envelope',
  PASSWORD: 'i-heroicons-lock-closed',
  SEARCH: 'i-heroicons-magnifying-glass',
  FILTER: 'i-heroicons-funnel',
} as const;

export const UI_MESSAGES = {
  // Common messages
  LOADING: 'ui.loading',
  SAVING: 'ui.saving',
  SUCCESS: 'ui.success',
  ERROR: 'ui.error',
  WARNING: 'ui.warning',
  INFO: 'ui.info',

  // Form messages
  REQUIRED_FIELD: 'ui.form.required',
  INVALID_EMAIL: 'ui.form.invalid_email',
  PASSWORD_TOO_SHORT: 'ui.form.password_too_short',
  PASSWORDS_DONT_MATCH: 'ui.form.passwords_dont_match',

  // Confirmation messages
  CONFIRM_DELETE: 'ui.confirm.delete',
  CONFIRM_LOGOUT: 'ui.confirm.logout',
  CONFIRM_DISCARD: 'ui.confirm.discard',
} as const;
