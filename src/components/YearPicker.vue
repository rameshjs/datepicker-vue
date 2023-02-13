<template>
  <div
    class="grid grid-cols-4 gap-1 bg-slate-200 max-h-[250px] overflow-visible overflow-x-hidden"
  >
    <button
      v-for="year in years"
      :key="year"
      :class="{
        'w-full h-[76px] hover:bg-slate-100 flex justify-center items-center bg-white capitalize font-bold text-slate-600': true,
        'bg-slate-100': year === modelValue,
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
const years = computed(() => yearRange(1972, props.year));
</script>
