<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-6 max-w-md">
    <!-- Title -->
    <h3 class="text-lg font-bold text-gray-900 mb-4">What's on in January?</h3>

    <!-- Tabs -->
    <div class="flex mb-6 border border-gray-200 rounded-xl overflow-hidden w-full max-w-xs">
      <button
        :class="[
          'flex-1 px-4 py-2 text-sm font-medium transition-colors',
          activeTab === 'timeOff' ? 'text-blue-600 bg-white' : 'text-gray-500 bg-gray-50',
        ]"
        @click="activeTab = 'timeOff'"
      >
        Time Off
      </button>
      <button
        :class="[
          'flex-1 px-4 py-2 text-sm font-medium transition-colors',
          activeTab === 'birthday' ? 'text-blue-600 bg-white' : 'text-gray-500 bg-gray-50',
        ]"
        @click="activeTab = 'birthday'"
      >
        Birthday
      </button>
    </div>

    <!-- Employee List -->
    <div>
      <div
        v-for="(employee, idx) in filteredEmployees"
        :key="employee.id"
        class="flex items-center gap-4 py-4"
        :class="{ 'border-b border-gray-200': idx !== filteredEmployees.length - 1 }"
      >
        <!-- Profile Picture -->
        <img :src="employee.avatar" :alt="employee.name" class="w-12 h-12 rounded-full object-cover border border-gray-200" />
        <!-- Employee Info -->
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-gray-900 text-base truncate">{{ employee.name }}</div>
          <div class="text-sm text-gray-500 truncate">
            {{ employee.role }}
            <span class="mx-1">•</span>
            <span>{{ employee.status }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('timeOff');

const employees = [
  {
    id: 1,
    name: 'Elanoire Maggie',
    role: 'UI UX Designer',
    status: 'Sick Leave',
    type: 'timeOff',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Kevin Malona',
    role: 'UI UX Designer',
    status: 'Annual Leave',
    type: 'timeOff',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Jeremy Gemoy',
    role: 'Graphic Design',
    status: 'Work From Home',
    type: 'timeOff',
    avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
  },
  // Thêm ví dụ cho tab Birthday
  {
    id: 4,
    name: 'Anna Smith',
    role: 'Product Manager',
    status: 'Jan 15',
    type: 'birthday',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 5,
    name: 'John Doe',
    role: 'Backend Developer',
    status: 'Jan 20',
    type: 'birthday',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
];

const filteredEmployees = computed(() => {
  return employees.filter((employee) => employee.type === activeTab.value);
});
</script>
