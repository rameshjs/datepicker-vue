<template>
  <div class="max-h-[250px] grid grid-cols-4 gap-1 bg-slate-200">
    <button
      v-for="year in years"
      :key="year"
      :class="{
        'w-full h-[76px] hover:bg-slate-100 flex justify-center items-center bg-white capitalize font-bold text-slate-600': true,
        'bg-slate-200': year === modelValue,
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

const selectYear = (year) => {
  emit("update:modelValue", year);
};

const years = computed(() => yearRange(1972, props.year));
</script>
