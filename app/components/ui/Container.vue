<template>
  <div :class="['w-full mx-auto min-h-screen bg-gray-50', customClass]" :style="customStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  customClass?: string;
  customStyle?: string | Record<string, string>;
}>();
</script>
