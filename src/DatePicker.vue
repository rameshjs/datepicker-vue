<template>
  <SingleView :month="month" :year="year" v-model="selectedDate" />
</template>
<script setup>
import { computed } from "vue";
import SingleView from "./components/SingleView.vue";
import { AllProps } from "./utils/props";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({ ...AllProps });

const selectedDate = computed({
  get() {
    return props.modelValue;
  },
  set(date) {
    emit("update:modelValue", date);
  },
});
</script>
