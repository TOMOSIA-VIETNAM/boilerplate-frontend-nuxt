<template>
  <div>
    <aside
      :class="[
        'fixed h-[calc(100vh-1rem)] bg-white shadow-lg rounded-2xl m-2 mr-0 flex flex-col p-4 transition-all duration-300 ease-in-out',
        isOpen ? 'w-[300px]' : 'w-[80px]',
      ]"
    >
      <SidebarLogo />

      <!-- Main Menu -->
      <div class="my-6">
        <div v-if="isOpen" class="text-xs font-semibold text-gray-400 mb-2 tracking-widest">MAIN MENU</div>
        <nav class="flex flex-col gap-1">
          <NuxtLink
            to="/dashboard"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/dashboard') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/dashboard')"
          >
            <UIcon name="i-heroicons-home" class="w-5 h-5" />
            <span v-if="isOpen">Dashboard</span>
            <span v-if="isOpen" class="ml-auto text-xs font-semibold">88</span>
          </NuxtLink>
          <NuxtLink
            to="/template"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/template') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/template')"
          >
            <UIcon name="i-heroicons-squares-2x2" class="w-5 h-5" />
            <span v-if="isOpen">Template</span>
          </NuxtLink>
          <NuxtLink
            to="/employee"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/employee') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/employee')"
          >
            <UIcon name="i-heroicons-user" class="w-5 h-5" />
            <span v-if="isOpen">Employee</span>
          </NuxtLink>
          <NuxtLink
            to="/recruitment"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/recruitment') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/recruitment')"
          >
            <UIcon name="i-heroicons-user-plus" class="w-5 h-5" />
            <span v-if="isOpen">Recruitment</span>
          </NuxtLink>
          <NuxtLink
            to="/payroll"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/payroll') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/payroll')"
          >
            <UIcon name="i-heroicons-document" class="w-5 h-5" />
            <span v-if="isOpen">Payroll</span>
          </NuxtLink>
          <NuxtLink
            to="/schedule"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/schedule') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/schedule')"
          >
            <UIcon name="i-heroicons-calendar" class="w-5 h-5" />
            <span v-if="isOpen">Schedule</span>
          </NuxtLink>
          <NuxtLink
            to="/analytics"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/analytics') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/analytics')"
          >
            <UIcon name="i-heroicons-chart-bar" class="w-5 h-5" />
            <span v-if="isOpen">Analytics</span>
          </NuxtLink>
          <NuxtLink
            to="/training"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/training') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/training')"
          >
            <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
            <span v-if="isOpen">Training</span>
          </NuxtLink>
          <NuxtLink
            to="/time-tracking"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/time-tracking') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/time-tracking')"
          >
            <UIcon name="i-heroicons-clock" class="w-5 h-5" />
            <span v-if="isOpen">Time Tracking</span>
          </NuxtLink>
        </nav>
      </div>

      <!-- HR Management -->
      <div class="mb-6">
        <div v-if="isOpen" class="text-xs font-semibold text-gray-400 mb-2 tracking-widest">HR MANAGEMENT</div>
        <nav class="flex flex-col gap-1">
          <NuxtLink
            to="/benefits"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/benefits') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/benefits')"
          >
            <UIcon name="i-heroicons-heart" class="w-5 h-5" />
            <span v-if="isOpen">Benefits</span>
          </NuxtLink>
          <NuxtLink
            to="/performance"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/performance') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/performance')"
          >
            <UIcon name="i-heroicons-identification" class="w-5 h-5" />
            <span v-if="isOpen">Performance</span>
          </NuxtLink>
          <NuxtLink
            to="/company"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/company') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/company')"
          >
            <UIcon name="i-heroicons-building-office" class="w-5 h-5" />
            <span v-if="isOpen">Company</span>
          </NuxtLink>
          <NuxtLink
            to="/reports"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/reports') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/reports')"
          >
            <UIcon name="i-heroicons-flag" class="w-5 h-5" />
            <span v-if="isOpen">Reports</span>
          </NuxtLink>
        </nav>
      </div>

      <!-- Other Menu -->
      <div class="mt-auto">
        <div v-if="isOpen" class="text-xs font-semibold text-gray-400 mb-2 tracking-widest">OTHER</div>
        <nav class="flex flex-col gap-1">
          <NuxtLink
            to="/settings"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/settings') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/settings')"
          >
            <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5" />
            <span v-if="isOpen">Settings</span>
          </NuxtLink>
          <NuxtLink
            to="/help"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/help') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/help')"
          >
            <UIcon name="i-heroicons-question-mark-circle" class="w-5 h-5" />
            <span v-if="isOpen">Help Center</span>
          </NuxtLink>
          <NuxtLink
            to="/notifications"
            :class="[
              'flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              isActiveRoute('/notifications') ? 'text-blue-600 bg-blue-50 border border-blue-200' : 'text-gray-700 hover:bg-gray-50',
            ]"
            @click="setActiveRoute('/notifications')"
          >
            <UIcon name="i-heroicons-bell" class="w-5 h-5" />
            <span v-if="isOpen">Notifications</span>
          </NuxtLink>
          <button
            class="flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 text-gray-700 hover:bg-gray-50 w-full text-left"
            @click="handleLogout"
          >
            <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-5 h-5" />
            <span v-if="isOpen">Logout</span>
          </button>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { isOpen, setActiveRoute, isActiveRoute } = useSidebar();
const { logout } = useAuth();

// Watch for route changes and update active menu item
watch(
  () => route.path,
  (newPath) => {
    setActiveRoute(newPath);
  },
  { immediate: true },
);

const handleLogout = () => {
  logout();
};
</script>
