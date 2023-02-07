<template>
  <div class="p-3">
    <DatePicker allowRange v-model="selectedDate" :inline="false" />
    {{ selectedDate }}
  </div>
</template>
<script setup>
import { ref } from "vue";
import DatePicker from "./DatePicker.vue";

const selectedDate = ref({ start: null, end: null });
</script>
