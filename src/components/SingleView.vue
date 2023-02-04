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
import { ref, computed } from "vue";
import CalendarNavigation from "./CalendarNavigation.vue";
import MonthWrapper from "./MonthWrapper.vue";

const emit = defineEmits(["update:modelValue"]);

const monthPicker = ref(false);
const yearPicker = ref(false);
const selectedMonth = ref(props.month);
const selectedYear = ref(props.year);

const props = defineProps({
  month: {
    type: Number,
    default: new Date().getMonth(),
  },
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
  modelValue: {
    type: Object,
    default: () => ({ start: null, end: null }),
  },
});

const selectedDate = computed({
  get() {
    return props.modelValue;
  },
  set(date) {
    emit("update:modelValue", date);
  },
});

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
