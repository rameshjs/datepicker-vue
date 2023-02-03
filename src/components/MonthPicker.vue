<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
    <button
      v-for="(month, index) in months"
      :key="index"
      class="w-full h-[76px] hover:bg-slate-100 flex justify-center items-center bg-white capitalize"
      @click="selectMonth(index)"
    >
      {{ month }}
    </button>
  </div>
</template>
<script setup>
import { months } from "../utils/datepicker";

const emit = defineEmits(["update:modelValue"]);

defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});

const selectMonth = (monthIndex) => {
  emit("update:modelValue", monthIndex);
};
</script>
