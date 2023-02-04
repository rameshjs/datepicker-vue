<template>
  <div>
    <div class="grid grid-cols-7">
      <div
        v-for="weekDay in weekdayName"
        :key="weekDay"
        class="flex align-center justify-center font-bold capitalize p-3"
      >
        {{ weekDay.slice(0, 3) }}
      </div>
    </div>
    <div v-for="week in weeks" :key="week" class="grid grid-cols-7">
      <div
        v-for="day in week"
        :key="day"
        class="flex align-center justify-center"
      >
        <Day
          v-if="day"
          :day="day"
          v-model="selectedDate"
          :selected="isSelected(dateRange, day)"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseMonth",
};
</script>
<script setup>
import { computed } from "vue";
import {
  weekdayName,
  getWeeksForMonth,
  getDatesInRange,
  isSelected,
} from "../utils/datepicker";
import Day from "./Day.vue";

const emit = defineEmits(["update:modelValue"]);

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
    emit("update:modelValue", { start: date, end: date });
  },
});

const weeks = computed(() => getWeeksForMonth(props.month, props.year));
const dateRange = computed(() => getDatesInRange(props.modelValue));
</script>
