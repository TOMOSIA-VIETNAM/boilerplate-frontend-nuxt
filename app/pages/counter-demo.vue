<template>
  <Container class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 flex items-center justify-center">
    <Box class="w-full max-w-md mx-auto p-6 sm:p-8 bg-white/90 rounded-2xl shadow-2xl space-y-7 relative">
      <Text as="h2" class="text-3xl font-extrabold text-center mb-2 tracking-tight">Counter Playground</Text>
      <Box class="flex flex-col items-center gap-2 mb-2">
        <Box class="flex gap-2 mb-1">
          <UBadge v-if="counter.isEven" color="primary">Even</UBadge>
          <UBadge v-else color="neutral">Odd</UBadge>
          <UBadge v-if="counter.isPositive" color="success">Positive</UBadge>
          <UBadge v-if="counter.isNegative" color="error">Negative</UBadge>
          <UBadge v-if="counter.isRound" color="warning">Round</UBadge>
        </Box>
        <Text as="p" class="text-6xl font-mono font-bold text-gray-800 drop-shadow-lg select-none">{{ counter.count }}</Text>
      </Box>
      <Box class="flex flex-wrap justify-center gap-3 mt-2">
        <UButton color="primary" size="lg" class="font-bold shadow-md" @click="counter.increment">+1</UButton>
        <UButton color="primary" size="lg" class="font-bold shadow-md" @click="counter.decrement">-1</UButton>
        <UButton color="primary" size="lg" class="font-bold shadow-md" @click="counter.double">x2</UButton>
        <UButton color="primary" size="lg" class="font-bold shadow-md" @click="counter.reset">Reset</UButton>
        <UButton color="primary" size="lg" class="font-bold shadow-md" @click="counter.random">Random</UButton>
      </Box>
      <Box class="flex flex-wrap justify-center gap-3 mt-2">
        <UButton color="secondary" size="md" :loading="loading" class="shadow" @click="incrementAsync">+1 (Async)</UButton>
        <UButton color="info" size="md" :disabled="!counter.canUndo" class="shadow" @click="counter.undo">Undo</UButton>
        <UButton color="info" size="md" :disabled="!counter.canRedo" class="shadow" @click="counter.redo">Redo</UButton>
        <UButton :color="counter.autoIncrementing ? 'warning' : 'success'" size="md" class="shadow" @click="toggleAutoIncrement">
          <UIcon :name="counter.autoIncrementing ? 'i-heroicons-pause' : 'i-heroicons-play'" class="w-4 h-4 mr-1" />
          {{ counter.autoIncrementing ? 'Stop Auto' : 'Auto +1/s' }}
        </UButton>
      </Box>
      <Box class="flex items-center gap-2 justify-center mt-3">
        <UInput v-model.number="inputValue" type="number" class="w-28" placeholder="Set value" size="md" />
        <UButton color="primary" size="md" class="shadow" @click="setValue">Set</UButton>
      </Box>
      <Box class="flex justify-center mt-2">
        <UButton color="neutral" variant="soft" size="sm" class="rounded-full px-4" @click="counter.clearLog">Clear Log</UButton>
      </Box>
      <Box class="mt-6">
        <Text as="h3" class="font-semibold mb-2 text-gray-700">History Log</Text>
        <ul class="max-h-40 overflow-auto text-xs bg-gray-50 rounded-lg p-2 border border-gray-200 space-y-1">
          <li v-for="(item, idx) in counter.log.slice().reverse()" :key="idx" class="px-2 py-1 rounded hover:bg-primary-50 transition">
            {{ item }}
          </li>
        </ul>
      </Box>
    </Box>
  </Container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCounterStore } from '~/stores/counter';

const counter = useCounterStore();
const loading = ref(false);
const inputValue = ref<number | null>(null);

const setValue = () => {
  if (typeof inputValue.value === 'number') {
    counter.setValue(inputValue.value);
    inputValue.value = null;
  }
};

const incrementAsync = async () => {
  loading.value = true;
  await counter.incrementAsync();
  loading.value = false;
};

const toggleAutoIncrement = () => {
  if (counter.autoIncrementing) counter.stopAutoIncrement();
  else counter.startAutoIncrement();
};

// Toast logic
const showToast = ref(false);
const toastTitle = ref('');
const toastDesc = ref('');

watch(
  () => counter.count,
  (val) => {
    if (val === 10 || val === 100 || val === 0) {
      showToast.value = true;
      toastTitle.value = 'Special Number!';
      toastDesc.value = `Counter reached ${val}`;
      setTimeout(() => (showToast.value = false), 2000);
    }
  },
);
</script>
