<template>
  <DatePicker
    v-model="date"
    allow-range
    startDateLabel="Start date label"
    endDateLabel="End date label"
  />
</template>

<script setup>
import DatePicker from "@rameshjs/datepicker-vue";
import "@rameshjs/datepicker-vue/dist/style.css";
import { ref } from "vue";

const date = ref({ start: new Date(), end: new Date() });
</script>
