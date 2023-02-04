<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
    <button
      v-for="year in years"
      :key="year"
      class="w-full h-[76px] hover:bg-slate-100 flex justify-center items-center bg-white capitalize"
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
