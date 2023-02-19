<template>
  <DatePicker v-model="date" :year="1990" />
</template>

<script setup>
import DatePicker from "@rameshjs/datepicker-vue";
import "@rameshjs/datepicker-vue/dist/style.css";
import { ref } from "vue";

const date = ref({ start: new Date(), end: new Date() });
</script>
