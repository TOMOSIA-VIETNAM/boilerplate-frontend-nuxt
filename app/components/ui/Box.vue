<template>
  <component :is="props.tag || 'div'" :class="[props.class]" :style="props.customStyle" v-bind="attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
const props = defineProps<{
  tag?: string;
  class?: string;
  customStyle?: string | Record<string, string>;
}>();
const attrs = useAttrs();
</script>
