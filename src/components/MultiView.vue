<template>
  <div class="flex w-full flex-col lg:flex-row" ref="multiViewRef">
    <div
      :class="{
        'dp-background': true,
        'w-full': inline,
        'w-[370px]': !inline,
      }"
    >
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
        @close-picker="closeFirstSelecter"
      />
    </div>
    <div
      :class="{ 'dp-background': true, 'w-full': inline, 'w-[370px]': !inline }"
    >
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
        @close-picker="closeSecondSelecter"
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
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  ...AllProps,
});

const emit = defineEmits(["update:modelValue"]);

const firstCalendarToggleState = ref({ month: false, year: false });
const secondCalendarToggleState = ref({ month: false, year: false });
const firstCalendarMonthAndYear = ref({ month: props.month, year: props.year });
const multiViewRef = ref(null);

/** Passing month and year props to nextMonth method to ensure second calendar
 *  does not render same month and year as first calendat.
 */
const secondCalendarMonthAndYear = ref(nextMonth(props.month, props.year));

/**Emits selected date to modelValue */
const selectedDate = (date) => {
  emit("update:modelValue", rangeSelect(date, props.modelValue));
};

/**First calendar navigation logic
 * Checks second calendar selected year and month and renders month and year.
 */
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

/**Second calendar navigation logic
 * Checks first calendar selected year and month and renders month and year.
 */
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

/** Toggle state of month and year of first calendar */
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

/** Toggle state of month and year of second calendar */
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

/** Close first calendar month and year picker */
const closeFirstSelecter = () => {
  firstCalendarToggleState.value = { month: false, year: false };
  firstCalendarNav();
};

/** Close second calendar month and year picker */
const closeSecondSelecter = () => {
  secondCalendarToggleState.value = { month: false, year: false };
  secondCalendarNav();
};

/** Watch selected date and update month and year in navigation. */
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
    /** Calling navigation control to ensure month and year is rendered in order. */
    firstCalendarNav();
    secondCalendarNav();
  }
);

/** Close month and year picker when clicked outside */
onClickOutside(multiViewRef, () => {
  closeFirstSelecter();
  closeSecondSelecter();
});
</script>
