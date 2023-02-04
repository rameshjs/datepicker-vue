<template>
  <SingleView :month="month" :year="year" v-model="selectedDate" />
</template>
<script setup>
import { computed } from "vue";
import SingleView from "./components/SingleView.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  month: {
    type: Number,
    default: new Date().getMonth(),
  },
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
  modelValue: {
    type: Object,
    default: () => ({ start: null, end: null }),
  },
});

const selectedDate = computed({
  get() {
    return props.modelValue;
  },
  set(date) {
    emit("update:modelValue", date);
  },
});
</script>
