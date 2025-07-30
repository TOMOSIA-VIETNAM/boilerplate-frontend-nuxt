<template>
  <Container class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
    <Box class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <Box class="text-center mb-8">
        <Box class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
          <UIcon name="i-heroicons-clipboard-document-list" class="h-8 w-8 text-primary" />
        </Box>
        <Text class="text-4xl font-bold text-gray-900 mb-3">
          {{ $t('menuForm.title') }}
        </Text>
        <Text class="text-lg text-gray-600 max-w-md mx-auto">
          {{ $t('menuForm.subtitle') }}
        </Text>
      </Box>

      <!-- Form Card -->
      <UCard class="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <Box class="p-8">
          <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
            <!-- Menu Name -->
            <UFormField :label="$t('menuForm.name')" name="name">
              <UInput v-model="state.name" name="name" type="text" :placeholder="$t('menuForm.name')" class="w-full" />
            </UFormField>

            <!-- Description -->
            <UFormField :label="$t('menuForm.description')" name="description">
              <UTextarea v-model="state.description" :placeholder="$t('menuForm.description')" class="w-full" :rows="3" />
            </UFormField>

            <!-- Price -->
            <UFormField :label="$t('menuForm.price')" name="price">
              <UInput v-model="state.price" type="number" step="any" :placeholder="$t('menuForm.placeholders.price')" class="w-full" />
            </UFormField>

            <!-- Category -->
            <UFormField :label="$t('menuForm.category')" name="category">
              <USelect v-model="state.category" :items="CATEGORY_OPTIONS" :placeholder="$t('menuForm.category')" class="w-full z-10" />
            </UFormField>

            <!-- Image URL -->
            <UFormField :label="$t('menuForm.imageUrl')" name="imageUrl">
              <UInput
                v-model="state.imageUrl"
                type="text"
                name="imageUrl"
                :placeholder="$t('menuForm.placeholders.imageUrl')"
                class="w-full"
              />
            </UFormField>

            <!-- Available Toggle -->
            <UFormField :label="$t('menuForm.isAvailable')" name="isAvailable">
              <Box class="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-green-600">
                <USwitch v-model="state.isAvailable" class="ml-4" />
              </Box>
            </UFormField>

            <!-- Form Actions -->
            <Box class="flex gap-4">
              <UButton
                type="button"
                variant="outline"
                :disabled="isSubmitting"
                class="flex-1 justify-center h-12 text-base font-semibold"
                size="lg"
                @click="resetFormHandler"
              >
                <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 mr-2" />
                {{ $t('menuForm.buttons.reset') }}
              </UButton>
              <UButton
                type="submit"
                :loading="isSubmitting"
                :disabled="isSubmitting"
                class="flex-1 justify-center h-12 text-base font-semibold"
                size="lg"
                color="primary"
              >
                <UIcon v-if="!isSubmitting" name="i-heroicons-check" class="w-5 h-5 mr-2" />
                {{ $t('menuForm.buttons.reset') }}
              </UButton>
            </Box>
          </UForm>
        </Box>
      </UCard>

      <!-- Form Data Preview (for demo) -->
      <UCard v-if="showFormData" class="mt-8 shadow-lg border-0 bg-white/90">
        <template #header>
          <Box class="flex items-center gap-2">
            <UIcon name="i-heroicons-code-bracket" class="w-5 h-5 text-primary" />
            <Text class="text-lg font-semibold">{{ $t('menuForm.preview.title') }}</Text>
          </Box>
        </template>
        <Box class="bg-gray-50 rounded-lg p-4">
          <pre class="text-sm text-gray-700 overflow-auto">{{ JSON.stringify(state, null, 2) }}</pre>
        </Box>
      </UCard>
    </Box>
  </Container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import * as z from 'zod';
import Container from '~/components/ui/Container.vue';
import { CATEGORY_OPTIONS } from '~/constants/options.constant';

const toast = useToast();

// Get i18n instance
const { t } = useI18n();

// Form validation schema
const schema = z.object({
  name: z.string().min(2, t('menuForm.validation.nameMin')).max(50, t('menuForm.validation.nameMax')),
  description: z.string().min(10, t('menuForm.validation.descriptionMin')).max(200, t('menuForm.validation.descriptionMax')),
  price: z.number().min(0.01, t('menuForm.validation.priceMin')).max(999.99, t('menuForm.validation.priceMax')),
  category: z.string().min(1, t('menuForm.validation.categoryRequired')),
  imageUrl: z.string().url(t('menuForm.validation.imageUrlInvalid')),
  isAvailable: z.boolean(),
});

// Form state
const isSubmitting = ref(false);
const showFormData = ref(false);

// Form state for UForm
const state = reactive({
  name: '',
  description: '',
  price: 0,
  category: '',
  imageUrl: '',
  isAvailable: true,
});

// Form submission handler
const onSubmit = async (_event: Event) => {
  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.add({
      title: t('menuForm.messages.success'),
      color: 'success',
      icon: 'i-heroicons-check-circle',
    });

    showFormData.value = true;

    setTimeout(() => {
      Object.assign(state, {
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: '',
        isAvailable: true,
      });
      showFormData.value = false;
    }, 3000);
  } catch {
    toast.add({
      title: t('menuForm.messages.error'),
      description: t('menuForm.messages.errorDescription'),
      color: 'error',
      icon: 'i-heroicons-exclamation-triangle',
    });
  } finally {
    isSubmitting.value = false;
  }
};

const resetFormHandler = () => {
  Object.assign(state, {
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
    isAvailable: true,
  });
  showFormData.value = false;
};
</script>
