<template>
  <SingleView
    v-if="inline"
    :month="month"
    :year="year"
    v-model="selectedDate"
  />
  <Popper v-else>
    <Input label="Start Date" placeholder="Start date" v-model="startDate" />
    <template #content>
      <div class="w-[400px]">
        <SingleView :month="month" :year="year" v-model="selectedDate" />
      </div>
    </template>
  </Popper>
</template>
<script setup>
import { computed, ref, watch } from "vue";
import SingleView from "./components/SingleView.vue";
import Input from "./components/Input.vue";
import Popper from "vue3-popper";
import { AllProps } from "./utils/props";
import { formatDateInput, parseTextToDate } from "./utils/datepicker";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({ ...AllProps });

const startDate = ref(formatDateInput(props.modelValue.start));

watch([startDate], ([newStartDate]) => {
  updateModel(parseTextToDate(newStartDate), parseTextToDate(newStartDate));
});

const updateModel = (start, end) => {
  emit("update:modelValue", {
    start: start,
    end: end,
  });
};

const updateInput = (start, end) => {
  startDate.value = formatDateInput(start);
};

const selectedDate = computed({
  get() {
    return props.modelValue;
  },
  set(date) {
    emit("update:modelValue", date);
    updateInput(date.start, date.end);
  },
});
</script>
