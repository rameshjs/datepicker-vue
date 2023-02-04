<template>
  <button :class="classes" @click="selectDate">
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

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
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
  ...AllProps,
});

const formattedDate = computed(() => props.day.getDate());

const selectDate = () => {
  emit("update:modelValue", { start: props.day, end: props.day });
};

const classes = computed(() => ({
  "p-4 w-full h-full hover:bg-slate-100 rounded": true,
  "bg-blue-500 hover:bg-blue-600": props.selected,
  "bg-slate-200": props.today && !props.selected,
}));
</script>
