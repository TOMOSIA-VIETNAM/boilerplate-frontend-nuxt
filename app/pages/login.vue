<template>
  <Container class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
    <Box class="sm:mx-auto sm:w-full sm:max-w-md">
      <Box class="flex justify-center">
        <UIcon name="i-heroicons-lock-closed" class="h-12 w-12 text-primary" />
      </Box>
      <Text as="h2" class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {{ $t('auth.loginTitle') }}
      </Text>
    </Box>

    <Box class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <UCard class="py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <UForm :schema="schema" :state="state" class="space-y-6" @submit="onLogin">
          <Box>
            <UFormField :label="$t('auth.email')" name="email">
              <UInput v-model="state.email" class="w-full" type="text" :placeholder="$t('auth.email')" autocomplete="email" />
            </UFormField>
          </Box>

          <Box>
            <UFormField :label="$t('auth.password')" name="password">
              <UInput
                v-model="state.password"
                type="password"
                class="w-full"
                :placeholder="$t('auth.password')"
                autocomplete="current-password"
              />
            </UFormField>
          </Box>

          <Box>
            <UButton type="submit" :loading="loading" :disabled="loading" class="w-full flex justify-center" size="lg">
              {{ $t('auth.loginButton') }}
            </UButton>
          </Box>

          <UAlert
            v-if="error"
            :title="$t('auth.loginError')"
            :description="error"
            color="error"
            variant="soft"
            icon="i-heroicons-exclamation-triangle"
          />
        </UForm>

        <Box class="mt-6">
          <Box class="relative">
            <Box class="absolute inset-0 flex items-center">
              <Box class="w-full border-t border-gray-300" />
            </Box>
            <Box class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-gray-500">{{ $t('auth.demoCredentials') }}</span>
            </Box>
          </Box>
          <Box class="mt-4 text-center text-sm text-gray-600">
            <Text>{{ $t('auth.email') }}: admin@example.com</Text>
            <Text>{{ $t('auth.password') }}: admin</Text>
          </Box>
        </Box>
      </UCard>
    </Box>
  </Container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { z } from 'zod';
import { useAuth } from '~/composables/useAuth';

const { t } = useI18n();

const error = ref('');
const loading = ref(false);
const { login } = useAuth();

const schema = z.object({
  email: z.string().min(1, t('auth.emailRequired')).email(t('auth.emailInvalid')),
  password: z.string().min(1, t('auth.passwordRequired')).min(4, t('auth.passwordMin')).max(32, t('auth.passwordMax')),
});

const state = ref({
  email: '',
  password: '',
});

const onLogin = async () => {
  await login(state.value.email, state.value.password);
};
</script>
