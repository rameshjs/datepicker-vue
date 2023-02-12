<template>
  <div class="flex w-full flex-col lg:flex-row">
    <div :class="{ 'w-full': inline, 'w-[400px]': !inline }">
      <CalendarNavigation
        v-model:month="firstCalendarMonthAndYear.month"
        v-model:year="firstCalendarMonthAndYear.year"
        @prev-month="firstCalendarNav"
        @next-month="firstCalendarNav"
        @toggle="firstCalendarToggle"
      />
      <MonthWrapper
        v-model:month="firstCalendarMonthAndYear.month"
        v-model:year="firstCalendarMonthAndYear.year"
        allow-range
        :selectedDateRange="modelValue"
        :showMonthPicker="firstCalendarToggleState.month"
        :showYearPicker="firstCalendarToggleState.year"
        @selectDate="selectedDate"
        @toggle="closeFirstSelecter"
      />
    </div>
    <div :class="{ 'w-full': inline, 'w-[400px]': !inline }">
      <CalendarNavigation
        v-model:month="secondCalendarMonthAndYear.month"
        v-model:year="secondCalendarMonthAndYear.year"
        @next-month="secondCalendarNav"
        @prev-month="secondCalendarNav"
        @toggle="secondCalendarToggle"
      />
      <MonthWrapper
        v-model:month="secondCalendarMonthAndYear.month"
        v-model:year="secondCalendarMonthAndYear.year"
        allow-range
        :selectedDateRange="modelValue"
        :showMonthPicker="secondCalendarToggleState.month"
        :showYearPicker="secondCalendarToggleState.year"
        @selectDate="selectedDate"
        @toggle="closeSecondSelecter"
      />
    </div>
  </div>
</template>
<script setup>
import { AllProps } from "../utils/props";
import MonthWrapper from "./MonthWrapper.vue";
import CalendarNavigation from "./CalendarNavigation.vue";
import { rangeSelect, nextMonth, prevMonth } from "../utils/datepicker";
import { ref, watch } from "vue";
const props = defineProps({
  ...AllProps,
});

const emit = defineEmits(["update:modelValue"]);

const firstCalendarToggleState = ref({ month: false, year: false });
const secondCalendarToggleState = ref({ month: false, year: false });
const firstCalendarMonthAndYear = ref({ month: props.month, year: props.year });
const secondCalendarMonthAndYear = ref(nextMonth(props.month, props.year));

// Gets selected date from Month component and emits back to Datepicker component.
const selectedDate = (date) => {
  console.log(date);
  emit("update:modelValue", rangeSelect(date, props.modelValue));
};

const firstCalendarNav = () => {
  const { month, year } = firstCalendarMonthAndYear.value;
  if (
    month >= secondCalendarMonthAndYear.value.month &&
    year >= secondCalendarMonthAndYear.value.year
  ) {
    secondCalendarMonthAndYear.value = nextMonth(
      firstCalendarMonthAndYear.value.month,
      firstCalendarMonthAndYear.value.year
    );
  }
};

const secondCalendarNav = () => {
  const { month, year } = secondCalendarMonthAndYear.value;
  if (
    month <= firstCalendarMonthAndYear.value.month &&
    year <= firstCalendarMonthAndYear.value.year
  ) {
    firstCalendarMonthAndYear.value = prevMonth(
      secondCalendarMonthAndYear.value.month,
      secondCalendarMonthAndYear.value.year
    );
  }
};

//When a modelValue is changes this updates the month and year from selected date.
watch(
  () => props.modelValue,
  (newModelValue) => {
    if (newModelValue.start) {
      firstCalendarMonthAndYear.value = {
        month: newModelValue.start.getMonth(),
        year: newModelValue.start.getFullYear(),
      };
    }
    if (newModelValue.end) {
      secondCalendarMonthAndYear.value = {
        month: newModelValue.end.getMonth(),
        year: newModelValue.end.getFullYear(),
      };
    }
    //This makes sure month is rendered in order.
    firstCalendarNav();
    secondCalendarNav();
  }
);

// Changes state of month and year picker.
const firstCalendarToggle = (event) => {
  if (event === "month-select") {
    firstCalendarToggleState.value.year = false;
    firstCalendarToggleState.value.month =
      !firstCalendarToggleState.value.month;
  } else {
    firstCalendarToggleState.value.month = false;
    firstCalendarToggleState.value.year = !firstCalendarToggleState.value.year;
  }
};

// Changes state of month and year picker.
const secondCalendarToggle = (event) => {
  if (event === "month-select") {
    secondCalendarToggleState.value.year = false;
    secondCalendarToggleState.value.month =
      !secondCalendarToggleState.value.month;
  } else {
    secondCalendarToggleState.value.month = false;
    secondCalendarToggleState.value.year =
      !secondCalendarToggleState.value.year;
  }
};

const closeFirstSelecter = () => {
  firstCalendarToggleState.value = { month: false, year: false };
  firstCalendarNav();
};
const closeSecondSelecter = () => {
  secondCalendarToggleState.value = { month: false, year: false };
  secondCalendarNav();
};
</script>
