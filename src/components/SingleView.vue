<template>
  <div class="bg-white rounded">
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

const emit = defineEmits(["update:modelValue"]);

const monthPicker = ref(false);
const yearPicker = ref(false);
const selectedMonth = ref(props.month);
const selectedYear = ref(props.year);

const props = defineProps({
  ...AllProps,
});

const selectedDate = (date) => {
  if (props.allowRange) {
    emit("update:modelValue", rangeSelect(date, props.modelValue));
  } else {
    emit("update:modelValue", { start: date, end: date });
  }
};

watch(
  () => props.modelValue,
  (newModelValue) => {
    if (props.modelValue.start) {
      selectedMonth.value = newModelValue.start.getMonth();
      selectedYear.value = newModelValue.start.getFullYear();
    }
  }
);

const toggle = (event) => {
  if (event === "month-select") {
    monthPicker.value = !monthPicker.value;
    yearPicker.value = false;
  } else {
    yearPicker.value = !yearPicker.value;
    monthPicker.value = false;
  }
};

const closePicker = () => {
  monthPicker.value = false;
  yearPicker.value = false;
};
</script>
