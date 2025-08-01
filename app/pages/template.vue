<template>
  <div class="p-6 space-y-8">
    <!-- Page Header -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">UI Components Template</h1>
      <p class="text-gray-600">A comprehensive collection of reusable UI components for dashboard applications</p>
    </div>

    <!-- Buttons Section -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Buttons</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="space-y-3">
          <h3 class="text-sm font-medium text-gray-700">Primary Buttons</h3>
          <div class="space-y-2">
            <button class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Primary Button</button>
            <button
              class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <UIcon name="i-heroicons-plus" class="w-4 h-4" />
              With Icon
            </button>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-sm font-medium text-gray-700">Secondary Buttons</h3>
          <div class="space-y-2">
            <button class="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
              Secondary Button
            </button>
            <button class="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Outline Button
            </button>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-sm font-medium text-gray-700">Danger Buttons</h3>
          <div class="space-y-2">
            <button class="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">Delete</button>
            <button class="w-full border border-red-300 text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">Cancel</button>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-sm font-medium text-gray-700">Success Buttons</h3>
          <div class="space-y-2">
            <button class="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">Save</button>
            <button
              class="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <UIcon name="i-heroicons-check" class="w-4 h-4" />
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Controls Section -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Form Controls</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Input Fields -->
        <div class="space-y-4">
          <h3 class="text-sm font-medium text-gray-700">Input Fields</h3>
          <div class="space-y-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Text Input</label>
              <input
                type="text"
                placeholder="Enter your text"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email Input</label>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Password Input</label>
              <input
                type="password"
                placeholder="Enter your password"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <!-- Select Dropdowns -->
        <div class="space-y-4">
          <h3 class="text-sm font-medium text-gray-700">Select Dropdowns</h3>
          <div class="space-y-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Single Select</label>
              <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Multi Select</label>
              <select
                multiple
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search and Filter Section -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Search & Filter</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Search Bar -->
        <div class="space-y-4">
          <h3 class="text-sm font-medium text-gray-700">Search Components</h3>
          <div class="space-y-3">
            <div class="relative">
              <UIcon name="i-heroicons-magnifying-glass" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div class="relative">
              <UIcon name="i-heroicons-magnifying-glass" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Advanced search..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <!-- Filter Controls -->
        <div class="space-y-4">
          <h3 class="text-sm font-medium text-gray-700">Filter Controls</h3>
          <div class="space-y-3">
            <div class="flex gap-2">
              <select class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Department</option>
                <option>HR</option>
                <option>IT</option>
                <option>Sales</option>
              </select>
              <select class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <div class="flex gap-2">
              <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">Clear Filters</button>
              <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Apply Filters</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Table Section -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Data Table</h2>
      <div class="space-y-4">
        <!-- Table Header with Search -->
        <div class="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div class="relative">
            <UIcon name="i-heroicons-magnifying-glass" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search employees..."
              class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
            />
          </div>
          <div class="flex gap-2">
            <select class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Departments</option>
              <option>HR</option>
              <option>IT</option>
              <option>Sales</option>
            </select>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <UIcon name="i-heroicons-plus" class="w-4 h-4" />
              Add Employee
            </button>
          </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">JD</div>
                    <div class="ml-3">
                      <div class="text-sm font-medium text-gray-900">John Doe</div>
                      <div class="text-sm text-gray-500">john@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">IT</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-01-15</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex gap-2">
                    <button class="text-blue-600 hover:text-blue-900">Edit</button>
                    <button class="text-red-600 hover:text-red-900">Delete</button>
                  </div>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium">JS</div>
                    <div class="ml-3">
                      <div class="text-sm font-medium text-gray-900">Jane Smith</div>
                      <div class="text-sm text-gray-500">jane@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">HR</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-02-20</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex gap-2">
                    <button class="text-blue-600 hover:text-blue-900">Edit</button>
                    <button class="text-red-600 hover:text-red-900">Delete</button>
                  </div>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">MJ</div>
                    <div class="ml-3">
                      <div class="text-sm font-medium text-gray-900">Mike Johnson</div>
                      <div class="text-sm text-gray-500">mike@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Sales</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Inactive</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-03-10</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex gap-2">
                    <button class="text-blue-600 hover:text-blue-900">Edit</button>
                    <button class="text-red-600 hover:text-red-900">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-700">
            Showing <span class="font-medium">1</span> to <span class="font-medium">3</span> of <span class="font-medium">12</span> results
          </div>
          <div class="flex gap-2">
            <button class="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Previous</button>
            <button class="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">1</button>
            <button class="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">2</button>
            <button class="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">3</button>
            <button class="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Cards Section -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Cards</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Stat Card -->
        <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-blue-100 text-sm">Total Employees</p>
              <p class="text-3xl font-bold">1,234</p>
              <p class="text-blue-100 text-sm">+12% from last month</p>
            </div>
            <UIcon name="i-heroicons-users" class="w-12 h-12 text-blue-200" />
          </div>
        </div>

        <!-- Info Card -->
        <div class="border border-gray-200 rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <UIcon name="i-heroicons-bell" class="w-5 h-5 text-gray-400" />
          </div>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full" />
              <p class="text-sm text-gray-600">New employee joined</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-green-600 rounded-full" />
              <p class="text-sm text-gray-600">Payroll processed</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-yellow-600 rounded-full" />
              <p class="text-sm text-gray-600">Training scheduled</p>
            </div>
          </div>
        </div>

        <!-- Action Card -->
        <div class="bg-gray-50 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div class="space-y-3">
            <button class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Add New Employee
            </button>
            <button class="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              Generate Report
            </button>
            <button class="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Alerts Section -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Alerts & Notifications</h2>
      <div class="space-y-4">
        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-600" />
            <div>
              <h3 class="text-sm font-medium text-green-800">Success</h3>
              <p class="text-sm text-green-700">Your changes have been saved successfully.</p>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-yellow-600" />
            <div>
              <h3 class="text-sm font-medium text-yellow-800">Warning</h3>
              <p class="text-sm text-yellow-700">Please review your information before proceeding.</p>
            </div>
          </div>
        </div>

        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-x-circle" class="w-5 h-5 text-red-600" />
            <div>
              <h3 class="text-sm font-medium text-red-800">Error</h3>
              <p class="text-sm text-red-700">There was an error processing your request.</p>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-information-circle" class="w-5 h-5 text-blue-600" />
            <div>
              <h3 class="text-sm font-medium text-blue-800">Information</h3>
              <p class="text-sm text-blue-700">This is an informational message for your reference.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});
</script>
