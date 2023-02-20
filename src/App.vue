<template>
  <div class="p-3">
    <DatePicker v-model="date" multi-month />
    {{ date }}
  </div>
</template>
<script setup>
import DatePicker from "./DatePicker.vue";
import { ref } from "vue";

const date = ref({ start: new Date(), end: new Date() });
</script>
