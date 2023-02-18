<template>
  <div class="dp-month-select-wrapper">
    <button
      v-for="(month, index) in months"
      :key="index"
      :class="{
        'dp-month-select-cell': true,
        'dp-month-select-active-cell': index === modelValue,
      }"
      @click="selectMonth(index)"
    >
      {{ month }}
    </button>
  </div>
</template>
<script setup>
import { months } from "../utils/datepicker";
import { AllProps } from "../utils/props";

const emit = defineEmits(["update:modelValue"]);

defineProps({
  ...AllProps,
});

/** Emits selected month index. */
const selectMonth = (monthIndex) => {
  emit("update:modelValue", monthIndex);
};
</script>
