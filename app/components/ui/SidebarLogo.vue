<template>
  <div class="flex items-center mb-6">
    <div class="flex-shrink-0 w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center mr-3 text-white text-xl font-bold">T</div>
    <span v-if="isOpen" class="text-xl font-bold text-gray-900">Tomosia</span>
    <div :class="isOpen ? 'ml-auto' : 'ml-0'">
      <button
        class="w-6 h-6 bg-gray-200 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
        @click="toggle"
      >
        <UIcon :name="isOpen ? 'i-heroicons-chevron-left' : 'i-heroicons-chevron-right'" class="w-4 h-4 text-gray-600" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isOpen, toggle } = useSidebar();
</script>
