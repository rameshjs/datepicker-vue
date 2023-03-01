<template>
  <div>
    <DatePicker v-model="date" multi-month start-date-label="hello" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import DatePicker from "./DatePicker.vue";

const date = ref({ start: null, end: null });
</script>
