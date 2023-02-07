<template>
  <div>
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
      v-model="selectedDate"
    />
  </div>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import CalendarNavigation from "./CalendarNavigation.vue";
import MonthWrapper from "./MonthWrapper.vue";
import { AllProps } from "../utils/props";

const emit = defineEmits(["update:modelValue"]);

const monthPicker = ref(false);
const yearPicker = ref(false);
const selectedMonth = ref(props.month);
const selectedYear = ref(props.year);

const props = defineProps({
  ...AllProps,
});

const selectedDate = computed({
  get() {
    return props.modelValue;
  },
  set(date) {
    emit("update:modelValue", date);
  },
});

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
