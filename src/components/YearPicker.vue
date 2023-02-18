<template>
  <div class="dp-year-select-wrapper">
    <button
      v-for="year in years"
      :key="year"
      :class="{
        'dp-year-select-cell': true,
        'dp-year-select-active-cell': year === modelValue,
      }"
      @click="selectYear(year)"
    >
      {{ year }}
    </button>
  </div>
</template>
<script setup>
import { yearRange } from "../utils/datepicker";
import { computed } from "vue";
import { AllProps } from "../utils/props";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  ...AllProps,
});

/** Emit selected year. */
const selectYear = (year) => {
  emit("update:modelValue", year);
};

/** Generates range of years provided */
const years = computed(() => yearRange(1972, props.modelValue).reverse());
</script>
