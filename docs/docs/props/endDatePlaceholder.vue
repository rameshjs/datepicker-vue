<template>
  <DatePicker
    v-model="date"
    allow-range
    startDatePlaceholder="Start date placeholder"
    endDatePlaceholder="End date placeholder"
  />
</template>

<script setup>
import DatePicker from "@rameshjs/datepicker-vue";
import "@rameshjs/datepicker-vue/dist/style.css";
import { ref } from "vue";

const date = ref({ start: null, end: null });
</script>
