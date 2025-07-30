<script setup lang="ts">
import { useAuth } from '~/composables/useAuth';

const { user, isAuthenticated } = useAuth();
</script>

<template>
  <Container>
    <Box tag="main" class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <Box class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Box class="h-96 flex items-center justify-center rounded-lg border bg-white p-4 shadow-sm">
          <Box class="text-center">
            <UIcon name="i-heroicons-home" class="mx-auto h-12 w-12 text-gray-400" />
            <Text as="h3" custom-class="mt-2 text-sm font-semibold text-gray-900">
              {{ $t('welcome') }}
            </Text>
            <Text v-if="isAuthenticated()" as="p" custom-class="mt-1 text-sm text-gray-500">
              {{ $t('auth.welcomeBack') }}, {{ user?.email }}
            </Text>
            <Text v-else as="p" custom-class="mt-1 text-sm text-gray-500">
              {{ $t('auth.notAuthenticated') }}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  </Container>
</template>
