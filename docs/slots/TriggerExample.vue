<template>
  <DatePicker v-model="date" :inline="false">
    <template #trigger-datepicker="{ toggle }">
      <button @click="toggle">Open date picker</button>
    </template>
  </DatePicker>
</template>

<script setup>
import DatePicker from "@rameshjs/datepicker-vue";
import "@rameshjs/datepicker-vue/dist/style.css";
import { ref } from "vue";

const date = ref({ start: null, end: null });
</script>
