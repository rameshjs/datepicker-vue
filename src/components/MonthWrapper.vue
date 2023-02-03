<template>
  <div class="max-h-[310px] overflow-visible overflow-x-hidden">
    <MonthPicker v-if="showMonthPicker" v-model="month" />
    <YearPicker v-if="showYearPicker" v-model="year" />
  </div>
</template>
<script setup>
import MonthPicker from "./MonthPicker.vue";
import YearPicker from "./YearPicker.vue";
import { computed } from "vue";

const emit = defineEmits(["update:month", "update:year", "close-picker"]);

const props = defineProps({
  month: {
    type: Number,
    default: new Date().getMonth(),
  },
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
  showMonthPicker: {
    type: Boolean,
    default: false,
  },
  showYearPicker: {
    type: Boolean,
    default: false,
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
