<template>
  <div>
    <div class="dp-weekday-wrapper">
      <div v-for="weekDay in weekdayName" :key="weekDay" class="dp-weekday">
        {{ weekDay.slice(0, 3) }}
      </div>
    </div>
    <div v-for="week in weeks" :key="week" class="dp-days-wrapper">
      <div
        v-for="day in week"
        :key="day"
        class="flex align-center justify-center"
      >
        <Day
          v-if="day"
          :day="day"
          @selectDate="selectedDate"
          :is-start="isSameDay(selectedDateRange?.start, day)"
          :is-end="isSameDay(selectedDateRange?.end, day)"
          :selected="isSelected(dateRange, day)"
          :today="isToday(day)"
          :allow-range="allowRange"
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
  isSameDay,
} from "../utils/datepicker";
import Day from "./Day.vue";
import { AllProps } from "../utils/props";

const emit = defineEmits(["selectDate"]);

const props = defineProps({
  ...AllProps,
});

/**Emits selected date */
const selectedDate = (date) => {
  emit("selectDate", date);
};

/** Generates weeks for a provided month and year. */
const weeks = computed(() => getWeeksForMonth(props.month, props.year));
/** Generates range of dates between two date range. */
const dateRange = computed(() => getDatesInRange(props.selectedDateRange));
</script>
