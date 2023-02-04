<template>
  <div>
    <div class="grid grid-cols-7">
      <div
        v-for="weekDay in weekdayName"
        :key="weekDay"
        class="flex align-center justify-center font-bold capitalize p-3 text-slate-600"
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
          :today="isToday(day)"
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
import { isToday } from "date-fns";
import {
  weekdayName,
  getWeeksForMonth,
  getDatesInRange,
  isSelected,
} from "../utils/datepicker";
import Day from "./Day.vue";
import { AllProps } from "../utils/props";

const emit = defineEmits(["update:modelValue"]);

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

const weeks = computed(() => getWeeksForMonth(props.month, props.year));
const dateRange = computed(() => getDatesInRange(props.modelValue));
</script>
