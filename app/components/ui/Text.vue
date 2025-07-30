<template>
  <component :is="as || 'p'" :class="customClass" :style="customStyle">
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps<{
  as?: string;
  customClass?: string;
  customStyle?: string | Record<string, string>;
}>();
</script>
