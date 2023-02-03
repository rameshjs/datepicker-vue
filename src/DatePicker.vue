<template>
  <SingleView :month="month" :year="year" />
</template>
<script setup>
import SingleView from "./components/SingleView.vue";
defineProps({
  month: {
    type: Number,
    default: new Date().getMonth(),
  },
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
});
</script>
