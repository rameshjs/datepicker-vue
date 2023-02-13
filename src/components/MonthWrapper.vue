<template>
  <div class="max-h-[350px] overflow-visible overflow-x-hidden">
    <Month
      v-if="!showMonthPicker && !showYearPicker"
      :month="month"
      :year="year"
      @selectDate="selectedDate"
      :allow-range="allowRange"
      :selectedDateRange="selectedDateRange"
    />
    <MonthPicker v-if="showMonthPicker" v-model="month" />
    <YearPicker v-if="showYearPicker" v-model="year" />
  </div>
</template>
<script setup>
import MonthPicker from "./MonthPicker.vue";
import YearPicker from "./YearPicker.vue";
import Month from "./Month.vue";
import { computed } from "vue";
import { AllProps } from "../utils/props";

const emit = defineEmits([
  "update:month",
  "update:year",
  "close-picker",
  "selectDate",
]);

const props = defineProps({
  ...AllProps,
  showMonthPicker: {
    type: Boolean,
    default: false,
  },
  showYearPicker: {
    type: Boolean,
    default: false,
  },
});

/**Emits selected date */
const selectedDate = (date) => {
  emit("selectDate", date);
};

/** Emits selected month and close picker event. */
const month = computed({
  get() {
    return props.month;
  },
  set(month) {
    emit("update:month", month);
    emit("close-picker");
  },
});

/** Emits selected year and close picker event. */
const year = computed({
  get() {
    return props.year;
  },
  set(year) {
    emit("update:year", year);
    emit("close-picker");
  },
});
</script>
