<template>
  <Box class="bg-white shadow">
    <Box class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Box class="flex justify-between items-center py-6">
        <Box class="flex items-center">
          <UButtonGroup>
            <UButton
              color="primary"
              variant="solid"
              icon="i-heroicons-clipboard-document-list"
              class="text-white px-4 py-2 rounded-md shadow-sm hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:outline-none transition-colors"
              @click="$router.push('/menu-form')"
            >
              {{ $t('example') }}
            </UButton>
            <UDropdownMenu :items="formMenuItems">
              <UButton
                color="primary"
                variant="outline"
                icon="i-lucide-chevron-down"
                aria-label="Open forms menu"
                class="text-primary-700"
              />
              <template #item="{ item }">
                <NuxtLink
                  :key="item.to"
                  class="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 hover:bg-primary-100 hover:text-primary-700 focus-visible:bg-primary-200 focus-visible:text-primary-900 transition-colors"
                  :to="item.to"
                >
                  <UIcon :name="item.icon" class="w-5 h-5" />
                  <Text as="span" class="text-gray-900">{{ item.label }}</Text>
                </NuxtLink>
              </template>
            </UDropdownMenu>
          </UButtonGroup>
        </Box>

        <Box class="flex items-center space-x-4">
          <!-- Language Switcher -->
          <UButtonGroup>
            <UButton color="neutral" variant="subtle" :label="$t('language')" icon="i-heroicons-language" />
            <UDropdownMenu :items="languageItems">
              <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" aria-label="Switch language" />
              <template #item="{ item }">
                <NuxtLink
                  :key="item.code"
                  class="flex items-center gap-2"
                  :class="item.active ? 'font-bold text-primary' : ''"
                  :to="switchLocalePath(item.code as any)"
                >
                  <UIcon :name="item.icon" class="w-5 h-5" />
                  <Text as="span" class="text-gray-900">{{ item.label }}</Text>
                  <UIcon v-if="item.active" name="i-heroicons-check" class="w-4 h-4 text-primary ml-2" />
                </NuxtLink>
              </template>
            </UDropdownMenu>
          </UButtonGroup>

          <!-- User Menu -->
          <Box v-if="isAuthenticated()" class="flex items-center space-x-3">
            <UAvatar :alt="user?.email" size="sm" />
            <Box class="hidden md:block">
              <Text as="p" class="text-sm font-medium text-gray-900">
                {{ user?.email }}
              </Text>
              <Text as="p" class="text-xs text-gray-700">
                {{ user?.role }}
              </Text>
            </Box>
            <UButton color="error" variant="ghost" size="sm" icon="i-heroicons-arrow-right-on-rectangle" @click="logout">
              {{ $t('auth.logout') }}
            </UButton>
          </Box>

          <!-- Login Button -->
          <UButton
            v-else
            color="primary"
            variant="solid"
            icon="i-heroicons-arrow-right-on-rectangle"
            class="text-white"
            @click="$router.push('/login')"
          >
            {{ $t('auth.login') }}
          </UButton>

          <!-- Dark/Light Mode Toggle Button (outermost right) -->
          <UButton
            :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'"
            color="primary"
            variant="soft"
            aria-label="Toggle dark mode"
            class="transition-all ml-2 text-gray-900"
            @click="colorMode.preference = isDark ? 'light' : 'dark'"
          >
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </UButton>
        </Box>
      </Box>
    </Box>
  </Box>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { LOCALES } from '~/constants/i18n.constant';
import type { LocaleCode } from '~/types/common.type';

const { $i18n } = useNuxtApp();
const { user, isAuthenticated, logout } = useAuth();
const switchLocalePath = useSwitchLocalePath();
const colorMode = useColorMode();

const currentLocale = computed(() => $i18n.locale.value);
const isDark = computed(() => colorMode.preference === 'dark');

const languageItems = LOCALES.map((locale) => ({
  code: locale.code,
  label: locale.name,
  icon: String(locale.icon),
  click: () => $i18n.setLocale(locale.code as LocaleCode),
  active: locale.code === currentLocale.value,
}));

const formMenuItems = [
  {
    label: 'Menu Form',
    to: '/menu-form',
    icon: 'i-heroicons-clipboard-document-list',
  },
  {
    label: 'Advanced Form',
    to: '/advanced-form',
    icon: 'i-heroicons-cog-6-tooth',
  },
  {
    label: 'Demo Counter',
    to: '/counter-demo',
    icon: 'i-heroicons-calculator',
  },
];
</script>
