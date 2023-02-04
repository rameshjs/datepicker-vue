<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-1 bg-slate-200"
  >
    <button
      v-for="(month, index) in months"
      :key="index"
      :class="{
        'w-full h-[76px] hover:bg-slate-100 flex justify-center items-center bg-white capitalize font-bold text-slate-600': true,
        'bg-slate-200': index === modelValue,
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

const selectMonth = (monthIndex) => {
  emit("update:modelValue", monthIndex);
};
</script>
