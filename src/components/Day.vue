<template>
  <button
    :class="[allowRange ? rangeClasses : defaultClasses]"
    @click="selectDate"
  >
    {{ formattedDate }}
  </button>
</template>
<script>
export default {
  name: "BaseDay",
};
</script>
<script setup>
import { computed } from "vue";
import { AllProps } from "../utils/props";

const emit = defineEmits(["selectDate"]);

const props = defineProps({
  ...AllProps,
  day: {
    type: Date,
    default: null,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  today: {
    type: Boolean,
    default: false,
  },
  isStart: {
    type: Boolean,
    default: false,
  },
  isEnd: {
    type: Boolean,
    default: false,
  },
});

const formattedDate = computed(() => props.day.getDate());

/**Emits selected date */
const selectDate = () => {
  emit("selectDate", props.day);
};

const defaultClasses = computed(() => ({
  "dp-single-month-day": true,
  "bg-blue-700 hover:bg-blue-800 text-white": props.selected,
  "bg-slate-200": props.today && !props.selected,
}));

const rangeClasses = computed(() => ({
  "dp-multi-month-day": true,
  "dp-multi-month-day-selected": props.selected,
  "dp-multi-month-day-start": props.isStart,
  "dp-multi-month-day-end": props.isEnd,
}));
</script>
