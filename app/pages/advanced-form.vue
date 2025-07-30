<template>
  <Container class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
    <Box class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <Box class="text-center mb-8">
        <Box class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
          <UIcon name="i-heroicons-clipboard-document-list" class="h-8 w-8 text-primary" />
        </Box>
        <Text class="text-4xl font-bold text-gray-900 mb-3">{{ $t('advancedForm.title') }}</Text>
        <Text class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ $t('advancedForm.subtitle') }}
        </Text>
      </Box>

      <!-- Progress Indicator -->
      <Box class="mb-8">
        <Box class="flex items-center justify-between">
          <Box class="flex items-center space-x-2">
            <Box class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">1</Box>
            <Text as="span" class="text-sm font-medium text-gray-700">{{ $t('advancedForm.progress.personalInfo') }}</Text>
          </Box>
          <Text class="flex-1 h-0.5 bg-gray-200 mx-4" />
          <Box class="flex items-center space-x-2">
            <Box class="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">2</Box>
            <Text as="span" class="text-sm font-medium text-gray-500">{{ $t('advancedForm.progress.address') }}</Text>
          </Box>
          <Text class="flex-1 h-0.5 bg-gray-200 mx-4" />
          <Box class="flex items-center space-x-2">
            <Box class="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">3</Box>
            <Text as="span" class="text-sm font-medium text-gray-500">{{ $t('advancedForm.progress.preferences') }}</Text>
          </Box>
        </Box>
      </Box>

      <!-- Form Card -->
      <UCard class="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <UForm :schema="schema" :state="state" class="space-y-8" @submit="onSubmit">
          <!-- Personal Information Section -->
          <Box class="border-b border-gray-200 pb-8">
            <Box class="flex items-center gap-3 mb-6">
              <Box class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <UIcon name="i-heroicons-user" class="h-5 w-5 text-primary" />
              </Box>
              <Box>
                <Text as="h3" class="text-xl font-semibold text-gray-900">
                  {{ $t('advancedForm.sections.personalInfo.title') }}
                </Text>
                <Text as="p" class="text-sm text-gray-500">
                  {{ $t('advancedForm.sections.personalInfo.subtitle') }}
                </Text>
              </Box>
            </Box>

            <Box class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Full Name -->
              <UFormField v-model="state.fullName" :label="$t('advancedForm.fields.fullName')" name="fullName">
                <UInput
                  v-model="state.fullName"
                  :placeholder="$t('advancedForm.placeholders.fullName')"
                  class="w-full"
                  icon="i-heroicons-user"
                />
              </UFormField>

              <!-- Email -->
              <UFormField v-model="state.email" :label="$t('advancedForm.fields.email')" name="email">
                <UInput
                  v-model="state.email"
                  type="email"
                  :placeholder="$t('advancedForm.placeholders.email')"
                  class="w-full"
                  icon="i-heroicons-envelope"
                />
              </UFormField>

              <!-- Phone Number -->
              <UFormField v-model="state.phone" :label="$t('advancedForm.fields.phone')" name="phone">
                <UInput
                  v-model="state.phone"
                  type="tel"
                  :placeholder="$t('advancedForm.placeholders.phone')"
                  class="w-full"
                  icon="i-heroicons-phone"
                />
              </UFormField>

              <!-- Date of Birth -->
              <UFormField v-model="state.dateOfBirth" :label="$t('advancedForm.fields.dateOfBirth')" name="dateOfBirth">
                <UInput v-model="state.dateOfBirth" type="date" class="w-full" icon="i-heroicons-calendar" />
              </UFormField>
            </Box>
          </Box>

          <!-- Address Section -->
          <Box class="border-b border-gray-200 pb-8">
            <Box class="flex items-center gap-6 mb-6">
              <Box class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <UIcon name="i-heroicons-map-pin" class="h-5 w-5 text-blue-600" />
              </Box>
              <Box>
                <Text as="h3" class="text-xl font-semibold text-gray-900">
                  {{ $t('advancedForm.sections.address.title') }}
                </Text>
                <Text as="p" class="text-sm text-gray-500">
                  {{ $t('advancedForm.sections.address.subtitle') }}
                </Text>
              </Box>
            </Box>

            <Box class="space-y-6">
              <!-- Street Address -->
              <UFormField v-model="state.streetAddress" :label="$t('advancedForm.fields.streetAddress')" name="streetAddress" class="mb-4">
                <UInput
                  v-model="state.streetAddress"
                  :placeholder="$t('advancedForm.placeholders.streetAddress')"
                  class="w-full"
                  icon="i-heroicons-home"
                />
              </UFormField>

              <Box class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- City -->
                <UFormField v-model="state.city" :label="$t('advancedForm.fields.city')" name="city" class="mb-4">
                  <UInput v-model="state.city" :placeholder="$t('advancedForm.placeholders.city')" class="w-full" />
                </UFormField>

                <!-- State/Province -->
                <UFormField v-model="state.state" :label="$t('advancedForm.fields.state')" name="state" class="mb-4">
                  <USelect
                    v-model="state.state"
                    :items="STATE_OPTIONS"
                    :placeholder="$t('advancedForm.placeholders.state')"
                    class="w-full"
                    icon="i-heroicons-map"
                  />
                </UFormField>

                <!-- ZIP/Postal Code -->
                <UFormField v-model="state.zipCode" :label="$t('advancedForm.fields.zipCode')" name="zipCode" class="mb-4">
                  <UInput v-model="state.zipCode" :placeholder="$t('advancedForm.placeholders.zipCode')" class="w-full" />
                </UFormField>
              </Box>
            </Box>
          </Box>

          <!-- Preferences Section -->
          <Box class="pb-8">
            <Box class="flex items-center gap-3 mb-6">
              <Box class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <UIcon name="i-heroicons-heart" class="h-5 w-5 text-green-600" />
              </Box>
              <Box>
                <Text as="h3" class="text-xl font-semibold text-gray-900">
                  {{ $t('advancedForm.sections.preferences.title') }}
                </Text>
                <Text as="p" class="text-sm text-gray-500">
                  {{ $t('advancedForm.sections.preferences.subtitle') }}
                </Text>
              </Box>
            </Box>

            <Box class="space-y-6">
              <!-- Newsletter Subscription -->
              <Box class="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-green-600">
                <Box>
                  <Text as="h4" class="font-medium text-gray-900">
                    {{ $t('advancedForm.fields.newsletter') }}
                  </Text>
                  <Text as="p" class="text-sm text-gray-500">
                    {{ $t('advancedForm.fields.newsletterDesc') }}
                  </Text>
                </Box>
                <UFormField v-model="state.newsletter" name="newsletter">
                  <USwitch v-model="state.newsletter" />
                </UFormField>
              </Box>

              <!-- Marketing Communications (conditional) -->
              <Box v-if="state.newsletter" class="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-green-600">
                <Box>
                  <Text as="h4" class="font-medium text-gray-900">
                    {{ $t('advancedForm.fields.marketing') }}
                  </Text>
                  <Text as="p" class="text-sm text-gray-500">{{ $t('advancedForm.fields.marketingDesc') }}</Text>
                </Box>
                <UFormField v-model="state.marketing" name="marketing">
                  <UCheckbox v-model="state.marketing" label="" />
                </UFormField>
              </Box>

              <!-- Interests -->
              <UFormField v-model="state.interests" :label="$t('advancedForm.fields.interests')" name="interests" class="mb-4">
                <Box class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <UCheckboxGroup v-model="state.interests" :items="INTEREST_OPTIONS" />
                </Box>
              </UFormField>

              <!-- Comments -->
              <UFormField v-model="state.comments" :label="$t('advancedForm.fields.comments')" name="comments" class="mb-4">
                <UTextarea v-model="state.comments" :placeholder="$t('advancedForm.placeholders.comments')" class="w-full" :rows="4" />
              </UFormField>
            </Box>
          </Box>

          <!-- Form Actions -->
          <Box class="flex gap-4 pt-6 border-t border-gray-200">
            <UButton
              type="button"
              variant="outline"
              :disabled="isSubmitting"
              class="flex-1 justify-center h-12 text-base font-semibold"
              size="lg"
              @click="resetForm"
            >
              <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 mr-2" />
              {{ $t('advancedForm.buttons.reset') }}
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
              {{ $t('advancedForm.buttons.submit') }}
            </UButton>
          </Box>
        </UForm>
      </UCard>

      <!-- Form Data Preview -->
      <UCard v-if="showFormData" class="mt-8 shadow-xl border-0">
        <template #header>
          <Box class="flex items-center gap-2">
            <UIcon name="i-heroicons-code-bracket" class="w-5 h-5 text-primary" />
            <Text as="h3" class="text-lg font-semibold">{{ $t('advancedForm.preview.title') }}</Text>
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
import { z } from 'zod';
import { INTEREST_OPTIONS, STATE_OPTIONS } from '~/constants/options.constant';

const { t } = useI18n();
const toast = useToast();

// Zod schema for form validation
const schema = z.object({
  fullName: z
    .string()
    .min(1, t('advancedForm.validation.fullNameRequired'))
    .min(2, t('advancedForm.validation.fullNameMin'))
    .max(50, t('advancedForm.validation.fullNameMax')),
  email: z.string().min(1, t('advancedForm.validation.emailRequired')).email(t('advancedForm.validation.emailInvalid')),
  phone: z
    .string()
    .min(1, t('advancedForm.validation.phoneRequired'))
    .refine((val) => {
      const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
      return phoneRegex.test(val);
    }, t('advancedForm.validation.phoneInvalid')),
  dateOfBirth: z
    .string()
    .min(1, t('advancedForm.validation.dobRequired'))
    .refine((val) => {
      const birthDate = new Date(val);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const adjustedAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
      return adjustedAge >= 18 && adjustedAge <= 120;
    }, t('advancedForm.validation.dobInvalid')),
  streetAddress: z.string().min(1, t('advancedForm.validation.streetRequired')).min(5, t('advancedForm.validation.streetMin')),
  city: z.string().min(1, t('advancedForm.validation.cityRequired')).min(2, t('advancedForm.validation.cityMin')),
  state: z.string().min(1, t('advancedForm.validation.stateRequired')),
  zipCode: z
    .string()
    .min(1, t('advancedForm.validation.zipRequired'))
    .refine((val) => {
      const zipRegex = /^\d{5}(-\d{4})?$/;
      return zipRegex.test(val);
    }, t('advancedForm.validation.zipInvalid')),
  newsletter: z.boolean(),
  marketing: z.boolean().optional(),
  interests: z.array(z.string()).min(1, t('advancedForm.validation.interestsMin')).max(5, t('advancedForm.validation.interestsMax')),
  comments: z.string().max(500, t('advancedForm.validation.commentsMax')).optional(),
});

type FormData = z.infer<typeof schema>;

// Form state
const isSubmitting = ref(false);
const showFormData = ref(false);

// Form state for UForm
const state = reactive<FormData>({
  fullName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
  newsletter: false,
  marketing: false,
  interests: [],
  comments: '',
});

// Form submission handler
const onSubmit = async (_event: Event) => {
  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success toast
    toast.add({
      title: 'Success!',
      description: t('advancedForm.messages.success'),
      color: 'success',
    });

    showFormData.value = true;

    // Reset form after successful submission
    setTimeout(() => {
      resetForm();
      showFormData.value = false;
    }, 5000);
  } catch {
    toast.add({
      title: 'Error',
      description: t('advancedForm.messages.error'),
      color: 'error',
    });
  } finally {
    isSubmitting.value = false;
  }
};

// Reset form function
const resetForm = () => {
  Object.assign(state, {
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    newsletter: false,
    marketing: false,
    interests: [],
    comments: '',
  });

  showFormData.value = false;

  toast.add({
    title: 'Form Reset',
    description: t('advancedForm.messages.reset'),
    color: 'info',
  });
};
</script>
