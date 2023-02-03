<template>
  <CalendarNavigation />
</template>
<script setup>
import CalendarNavigation from "./CalendarNavigation.vue";
defineProps({
  month: {
    type: Number,
    default: new Date().getMonth(),
  },
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
});
</script>
