<template>
  <div class="flex h-screen bg-gray-50 w-screen justify-center items-center">
    <slot />
  </div>
</template>

<script setup lang="ts">
const { isAuthenticated } = useAuth();

// Handle root path redirect
onMounted(() => {
  if (isAuthenticated()) {
    navigateTo('/dashboard');
  }
});
</script>
