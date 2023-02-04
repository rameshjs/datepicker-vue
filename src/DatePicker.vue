<template>
  <SingleView
    v-if="inline"
    :month="month"
    :year="year"
    v-model="selectedDate"
  />
  <Popper v-else>
    <Input label="Start Date" placeholder="Start date" />
    <template #content>
      <div class="w-[400px]">
        <SingleView :month="month" :year="year" v-model="selectedDate" />
      </div>
    </template>
  </Popper>
</template>
<script setup>
import { computed } from "vue";
import SingleView from "./components/SingleView.vue";
import Input from "./components/Input.vue";
import Popper from "vue3-popper";
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
