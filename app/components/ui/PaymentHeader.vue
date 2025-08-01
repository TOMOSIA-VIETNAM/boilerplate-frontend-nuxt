<template>
  <div class="bg-white border-b border-gray-200 p-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <UIcon name="i-heroicons-information-circle" class="w-5 h-5 text-gray-400 mr-2" />
        <h2 class="text-lg font-semibold text-gray-900">Payment Method</h2>
      </div>
      <UButton color="primary" variant="outline" size="sm"> Change Payment Method </UButton>
    </div>
    <div class="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
      <div>
        <span class="text-gray-500">Cardholder name:</span>
        <span class="ml-2 font-medium">Rocks Company Ltd</span>
      </div>
      <div>
        <span class="text-gray-500">Account Number:</span>
        <span class="ml-2 font-medium">**** **** 6273</span>
      </div>
      <div>
        <span class="text-gray-500">Expiration:</span>
        <span class="ml-2 font-medium">12/28</span>
      </div>
      <div>
        <span class="text-gray-500">Payment Method:</span>
        <span class="ml-2 font-medium">VISA Debit Card Visa</span>
      </div>
    </div>
  </div>
</template>
