# Nuxt UI Boilerplate

A modern, production-ready Nuxt 3 boilerplate with comprehensive features for building scalable web applications.

## Features

### Core Features

- [x] **Authentication & Authorization** - Built-in auth system with middleware
- [x] **API Layer** - Axios/Fetch integration with interceptors
- [x] **Internationalization (i18n)** - Multi-language support with lazy loading
- [x] **State Management** - Pinia for reactive state management
- [x] **Theming & Dark Mode** - Nuxt Color Mode with system preference
- [x] **Component Library** - Nuxt UI with comprehensive component set
- [x] **Form Validation** - Zod schema validation with Nuxt UI forms
- [x] **Notifications** - Toast notifications with Nuxt UI
- [ ] **Error Handling** - Global error boundary and error pages
- [x] **Testing** - Unit and E2E testing with Playwright
- [x] **CI & Linting** - ESLint, Prettier, and GitHub workflows
- [x] **Performance & SEO** - Optimized for Core Web Vitals
- [x] **PWA Support** - Progressive Web App capabilities
- [x] **Analytics** - Built-in analytics tracking
- [x] **Documentation** - Comprehensive documentation

### Tech Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (via Nuxt UI)
- **State Management**: Pinia
- **Testing**: Playwright (E2E), Vitest (Unit)
- **Package Manager**: Yarn
- **Linting**: ESLint + Prettier
- **Icons**: Iconify (Lucide, Heroicons, Simple Icons)

## 📦 Installation

### Prerequisites

- Node.js 18+
- Yarn (recommended) or npm

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd boilerplate-frontend-nuxt

# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env

# Start development server
yarn dev
```

## Development

### Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn preview      # Preview production build
yarn generate     # Generate static site

# Code Quality
yarn lint         # Run ESLint
yarn lint:fix     # Fix ESLint errors
yarn format       # Format code with Prettier
yarn format:check # Check code formatting

# Testing
yarn test:e2e     # Run E2E tests
yarn test:e2e:ui  # Run E2E tests with UI

# Type Generation
yarn nuxi:schema-type # Generate Nuxt schema types
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## 📁 Project Structure

```
├── app/                    # Application source code
│   ├── assets/            # Static assets (CSS, images, locales)
│   ├── components/        # Vue components
│   │   └── ui/           # UI components (Nuxt UI)
│   ├── composables/      # Vue composables
│   ├── constants/        # Application constants
│   ├── layouts/          # Layout components
│   ├── middleware/       # Route middleware
│   ├── pages/            # Application pages
│   ├── stores/           # Pinia stores
│   ├── types/            # TypeScript type definitions
│   ├── app.config.ts     # App configuration
│   └── app.vue           # Root component
├── server/               # Server-side code
├── tests/                # Test files
├── workflows/            # GitHub Actions workflows
├── public/               # Public static files
├── nuxt.config.ts        # Nuxt configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
├── .prettierrc           # Prettier configuration
└── package.json          # Dependencies and scripts
```

## Code Conventions

### File Naming

- **Components**: PascalCase (e.g., `UserProfile.vue`)
- **Pages**: kebab-case (e.g., `user-profile.vue`)
- **Composables**: camelCase with `use` prefix (e.g., `useAuth.ts`)
- **Stores**: camelCase (e.g., `userStore.ts`)
- **Types**: PascalCase (e.g., `UserTypes.ts`)

### Component Structure

```vue
<template>
  <!-- Template content -->
</template>

<script setup lang="ts">
// Imports
import { ref, computed } from 'vue';

// Props
interface Props {
  title: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
});

// Emits
const emit = defineEmits<{
  click: [value: string];
}>();

// Reactive data
const isLoading = ref(false);

// Computed properties
const displayTitle = computed(() => props.title.toUpperCase());

// Methods
const handleClick = () => {
  emit('click', 'clicked');
};
</script>

<style scoped>
/* Component styles */
</style>
```

### TypeScript Conventions

- Use strict TypeScript configuration
- Define interfaces for all data structures
- Use type assertions sparingly
- Prefer `interface` over `type` for object shapes
- Use generic types when appropriate

### State Management (Pinia)

```typescript
// stores/userStore.ts
export const useUserStore = defineStore('user', () => {
  // State
  const user = ref<User | null>(null);
  const isAuthenticated = computed(() => !!user.value);

  // Actions
  const login = async (credentials: LoginCredentials) => {
    // Implementation
  };

  const logout = () => {
    user.value = null;
  };

  return {
    user: readonly(user),
    isAuthenticated,
    login,
    logout,
  };
});
```

### API Layer

```typescript
// composables/useApi.ts
export const useApi = () => {
  const { $fetch } = useNuxtApp();

  const get = async <T>(url: string): Promise<T> => {
    return await $fetch(url);
  };

  const post = async <T>(url: string, data: any): Promise<T> => {
    return await $fetch(url, {
      method: 'POST',
      body: data,
    });
  };

  return { get, post };
};
```

## Internationalization

### Adding New Languages

1. Add locale configuration in `nuxt.config.ts`
2. Create translation file in `app/assets/locales/`
3. Use `useI18n()` composable in components

```typescript
// nuxt.config.ts
i18n: {
  locales: [
    { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    { code: 'vi', iso: 'vi-VN', name: 'Tiếng Việt', file: 'vi.json' },
    { code: 'ja', iso: 'ja-JP', name: 'Japanese', file: 'ja.json' },
  ];
}
```

### Usage in Components

```vue
<script setup>
const { t, locale } = useI18n();
</script>

<template>
  <h1>{{ t('welcome') }}</h1>
  <UButton @click="locale = 'vi'">Tiếng Việt</UButton>
</template>
```

## Testing

### E2E Testing with Playwright

```typescript
// tests/e2e/home.spec.ts
import { test, expect } from '@playwright/test';

test('home page loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Nuxt Boilerplate/);
});
```

### Running Tests

```bash
yarn test:e2e        # Run all E2E tests
yarn test:e2e:ui     # Run tests with UI
```

## Deployment

### Build for Production

```bash
yarn build
yarn preview
```

### Environment Variables

Create `.env` file with required variables:

```env
NUXT_PUBLIC_API_BASE_URL=https://api.example.com
NUXT_PUBLIC_APP_NAME=My App
```

### Deployment Platforms

- **Vercel**: Zero-config deployment
- **Netlify**: Static site deployment
- **Docker**: Containerized deployment

## Documentation

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com)
- [Vue 3 Documentation](https://vuejs.org)
- [Pinia Documentation](https://pinia.vuejs.org)
- [Playwright Documentation](https://playwright.dev)

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build process or auxiliary tool changes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
