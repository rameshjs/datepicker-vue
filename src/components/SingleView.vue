<template>
  <div>
    <CalendarNavigation @toggle="toggle" />
    <MonthWrapper
      v-model:month="selectedMonth"
      v-model:year="selectedYear"
      :showMonthPicker="monthPicker"
      :showYearPicker="yearPicker"
      @close-picker="closePicker"
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

const toggle = (event) => {
  if (event === "month-select") {
    monthPicker.value = true;
    yearPicker.value = false;
  } else {
    yearPicker.value = true;
    monthPicker.value = false;
  }
};

const closePicker = () => {
  monthPicker.value = false;
  yearPicker.value = false;
};
</script>
