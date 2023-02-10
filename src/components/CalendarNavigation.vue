<template>
  <div class="w-full flex justify-between border-b-2">
    <button class="p-2 hover:bg-slate-100 rounded" @click="prevMonthNav">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </button>
    <div class="flex">
      <button
        class="p-2 hover:bg-slate-100 rounded mr-2 flex items-center font-bold text-slate-600"
        @click="selectMonth"
      >
        {{ months[month] }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <button
        class="p-2 hover:bg-slate-100 rounded flex items-center font-bold text-slate-600"
        @click="selectYear"
      >
        {{ year }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
    <button class="p-2 hover:bg-slate-100 rounded" @click="nextMonthNav">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </button>
  </div>
</template>
<script setup>
import { months, nextMonth, prevMonth } from "../utils/datepicker";
import { AllProps } from "../utils/props";

const emit = defineEmits([
  "toggle",
  "month-select",
  "year-select",
  "update:month",
  "update:year",
]);

const props = defineProps({
  ...AllProps,
});

// Emits nextMonth event.
const nextMonthNav = () => {
  const { month, year } = nextMonth(props.month, props.year);
  emit("update:month", month);
  emit("update:year", year);
};

// Emits prevMonth event.
const prevMonthNav = () => {
  const { month, year } = prevMonth(props.month, props.year);
  emit("update:month", month);
  emit("update:year", year);
};

const selectMonth = () => {
  emit("toggle", "month-select");
};

const selectYear = () => {
  emit("toggle", "year-select");
};
</script>
