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

const selectDate = () => {
  emit("selectDate", props.day);
};

const defaultClasses = computed(() => ({
  "p-3 w-full h-full hover:bg-slate-100 rounded font-medium": true,
  "bg-blue-700 hover:bg-blue-800 text-white": props.selected,
  "bg-slate-200": props.today && !props.selected,
}));

const rangeClasses = computed(() => ({
  "p-3 w-full h-full hover:bg-blue-500 rounded font-medium": true,
  "rounded-none bg-blue-200 border-none": props.selected,
  "bg-blue-500": props.isStart || props.isEnd,
  "rounded-l-full text-white": props.isStart,
  "rounded-r-full text-white": props.isEnd,
}));
</script>
