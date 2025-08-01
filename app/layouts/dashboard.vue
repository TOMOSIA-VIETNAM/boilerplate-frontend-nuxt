<template>
  <div class="flex bg-gray-50">
    <Sidebar />

    <!-- Main Content -->
    <main :class="'flex-1 flex flex-col py-2 px-4 ' + (isOpen ? 'ml-[308px]' : 'ml-[88px]')">
      <Header />
      <!-- Dashboard Content -->
      <div class="flex-1 max-w-[1200px] mx-auto w-full">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/ui/Header.vue';
const { isOpen } = useSidebar();
</script>
