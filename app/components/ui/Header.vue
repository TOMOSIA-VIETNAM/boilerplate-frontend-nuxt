<template>
  <header
    class="sticky top-0 z-30 flex items-center justify-between p-4 bg-white border-b border-gray-100 mb-4 rounded-xl border border-gray-200"
  >
    <!-- Search -->
    <div class="flex-1 flex">
      <div class="relative w-full max-w-xs">
        <UIcon name="i-heroicons-magnifying-glass" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          class="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 bg-gray-50"
        />
      </div>
    </div>

    <!-- Actions & User -->
    <div class="flex items-center gap-4">
      <button class="relative">
        <UIcon name="i-heroicons-bell" class="w-6 h-6 text-gray-600" />
        <span class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
      </button>
      <div class="h-8 w-px bg-gray-200" />
      <button class="flex items-center gap-2">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          class="w-8 h-8 rounded-full object-cover border border-gray-200"
          alt="User avatar"
        />
        <span class="text-sm font-medium text-gray-700">John Doe</span>
      </button>
    </div>
  </header>
</template>
