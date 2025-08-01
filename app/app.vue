<template>
  <UApp>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
    <VitePwaManifest />
  </UApp>
</template>

<script setup lang="ts">
const route = useRoute();
const { isAuthenticated } = useAuth();

const layout = computed(() => {
  // Use auth layout for login page, dashboard layout for authenticated pages
  if (route.path === '/login') {
    return 'auth';
  }
  return isAuthenticated() ? 'dashboard' : 'auth';
});
</script>
