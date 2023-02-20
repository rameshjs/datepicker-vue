<template>
  <div class="p-3 w-[50%]">
    <DatePicker
      v-model="date"
      multi-month
      startDateLabel="label"
      endDateLabel="label"
    />
  </div>
</template>
<script setup>
import DatePicker from "./DatePicker.vue";
import { ref } from "vue";

const date = ref({ start: new Date(), end: new Date() });
</script>
