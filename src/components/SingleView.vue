<template>
  <div class="bg-white rounded" ref="singleViewRef">
    <CalendarNavigation
      v-model:month="selectedMonth"
      v-model:year="selectedYear"
      @toggle="toggle"
    />
    <MonthWrapper
      v-model:month="selectedMonth"
      v-model:year="selectedYear"
      :showMonthPicker="monthPicker"
      :showYearPicker="yearPicker"
      @close-picker="closePicker"
      @selectDate="selectedDate"
      :selectedDateRange="modelValue"
      :allow-range="allowRange"
    />
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import CalendarNavigation from "./CalendarNavigation.vue";
import MonthWrapper from "./MonthWrapper.vue";
import { AllProps } from "../utils/props";
import { rangeSelect } from "../utils/datepicker";
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits(["update:modelValue"]);

const monthPicker = ref(false);
const yearPicker = ref(false);
const selectedMonth = ref(props.month);
const selectedYear = ref(props.year);
const singleViewRef = ref(null);

const props = defineProps({
  ...AllProps,
});

/**
 * Emits selected date in start and end date object.
 * Incase of single view calendar both start and end date are same.
 * Incase of multiMonth calendar start and end dates selected date range.
 * rangeSelect takes selected date and modelValue with previously selected dates and returns date range.
 */
const selectedDate = (date) => {
  if (props.allowRange) {
    emit("update:modelValue", rangeSelect(date, props.modelValue));
  } else {
    emit("update:modelValue", { start: date, end: date });
  }
};

/** When date is changed month and year in navigation is updated. */
watch(
  () => props.modelValue,
  (newModelValue) => {
    if (props.modelValue.start) {
      selectedMonth.value = newModelValue.start.getMonth();
      selectedYear.value = newModelValue.start.getFullYear();
    }
  }
);

/** Enable month or year picker. */
const toggle = (event) => {
  if (event === "month-select") {
    monthPicker.value = !monthPicker.value;
    yearPicker.value = false;
  } else {
    yearPicker.value = !yearPicker.value;
    monthPicker.value = false;
  }
};

/** Close month and year picker */
const closePicker = () => {
  monthPicker.value = false;
  yearPicker.value = false;
};

/** Close month and year picker when clicked outside */
onClickOutside(singleViewRef, () => {
  closePicker();
});
</script>
