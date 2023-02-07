<template>
  <div class="max-h-[350px] overflow-visible overflow-x-hidden">
    <Month
      v-if="!showMonthPicker && !showYearPicker"
      :month="month"
      :year="year"
      v-model="selectedDate"
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
  "update:modelValue",
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

const selectedDate = computed({
  get() {
    return props.modelValue;
  },
  set(date) {
    emit("update:modelValue", date);
  },
});

const month = computed({
  get() {
    return props.month;
  },
  set(month) {
    emit("update:month", month);
    emit("close-picker");
  },
});

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
