<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    <EmployeeStatusCard />
    <TodayScheduleCard />
    <EmployeeListCard />
    <WorkHoursCard />
    <QuickStatsCard />
    <TodayScheduleCard />
    <WorkHoursCard />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
