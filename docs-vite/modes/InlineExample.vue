<template>
  <DatePicker v-model="date" />
</template>

<script setup>
import DatePicker from "@rameshjs/datepicker-vue";
import "@rameshjs/datepicker-vue/dist/style.css";
import { ref } from "vue";

const date = ref({ start: null, end: null });
</script>
