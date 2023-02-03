<template>
  <div>
    <CalendarNavigation
      @month-select="monthPicker = !monthPicker"
      @year-select="yearPicker = !yearPicker"
    />
    <MonthWrapper
      v-model:month="selectedMonth"
      v-model:year="selectedYear"
      :showMonthPicker="monthPicker"
      :showYearPicker="yearPicker"
    />
    {{ selectedYear }}
  </div>
</template>
<script setup>
import { ref } from "vue";
import CalendarNavigation from "./CalendarNavigation.vue";
import MonthWrapper from "./MonthWrapper.vue";

const monthPicker = ref(false);
const yearPicker = ref(false);
const selectedMonth = ref(null);
const selectedYear = ref(null);

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
