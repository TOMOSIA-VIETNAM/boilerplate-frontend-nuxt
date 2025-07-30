<template>
  <Container class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 flex items-center justify-center">
    <Box class="text-center">
      <UIcon name="i-heroicons-exclamation-triangle" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <Text as="h1" class="text-2xl font-bold text-gray-900 mb-2">Page Not Found</Text>
      <Text class="text-gray-600 mb-6">The page you're looking for doesn't exist.</Text>
      <UButton color="primary" @click="$router.push('/')">Go Home</UButton>
    </Box>
  </Container>
</template>

<script setup lang="ts">
// This is a catch-all route for handling 404s and service worker routes
</script>
