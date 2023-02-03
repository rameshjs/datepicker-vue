<template>
  <div class="h-[450px]">
    <CalendarNavigation @month-select="monthPicker = !monthPicker" />
    <MonthPicker v-if="monthPicker" v-model="selectedMonth" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import CalendarNavigation from "./CalendarNavigation.vue";
import MonthPicker from "./MonthPicker.vue";

const monthPicker = ref(false);
const selectedMonth = ref(null);

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
