<template>
  <div v-if="inline">
    <MultiView
      v-if="multiMonth"
      :month="month"
      :year="year"
      v-model="selectedDate"
    />
    <SingleView
      v-else
      :month="month"
      :year="year"
      v-model="selectedDate"
      :allowRange="allowRange"
    />
  </div>
  <Popper v-else ref="popover" :show="isOpen">
    <slot name="trigger-datepicker" :toggle="toggle">
      <slot
        name="datepicker-input"
        :start-date="startDate"
        :end-date="endDate"
        :toggle="toggle"
        :showPopover="showPopover"
        :hidePopover="hidePopover"
      >
        <div class="w-full flex flex-col lg:flex-row">
          <Input
            :label="startDateLabel"
            :placeholder="startDatePlaceholder"
            v-model="startDate"
            @focus="showPopover"
          />
          <Input
            v-if="allowRange"
            :label="endDateLabel"
            :placeholder="endDatePlaceholder"
            v-model="endDate"
            @focus="showPopover"
          />
        </div>
      </slot>
    </slot>
    <template #content>
      <div class="w-[400px] drop-shadow-lg">
        <MultiView
          v-if="multiMonth"
          :month="month"
          :year="year"
          v-model="selectedDate"
        />
        <SingleView
          v-else
          :month="month"
          :year="year"
          v-model="selectedDate"
          :allowRange="allowRange"
        />
      </div>
    </template>
  </Popper>
</template>
<script setup>
import { computed, ref, watch } from "vue";
import SingleView from "./components/SingleView.vue";
import MultiView from "./components/MultiView.vue";
import Input from "./components/Input.vue";
import Popper from "vue3-popper";
import { AllProps } from "./utils/props";
import { formatDateInput, parseTextToDate } from "./utils/datepicker";
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  ...AllProps,
  startDateLabel: {
    type: String,
    default: "",
  },
  endDateLabel: {
    type: String,
    default: "",
  },
  startDatePlaceholder: {
    type: String,
    default: "",
  },
  endDatePlaceholder: {
    type: String,
    default: "",
  },
  formatDateInput: {
    type: String,
    default: "dd-MM-yyyy",
  },
});

const popover = ref(null);
const isOpen = ref(false);

const startDate = ref(
  formatDateInput(props.modelValue.start, props.formatDateInput)
);
const endDate = ref(
  formatDateInput(props.modelValue.end, props.formatDateInput)
);

watch([startDate, endDate], ([newStartDate, newEndDate]) => {
  updateModel(
    parseTextToDate(newStartDate, props.formatDateInput),
    parseTextToDate(newEndDate, props.formatDateInput)
  );
});

const updateModel = (start, end) => {
  if (props.allowRange || props.multiMonth) {
    emit("update:modelValue", {
      start: start,
      end: end,
    });
  } else {
    emit("update:modelValue", {
      start: start,
      end: start,
    });
  }
};

const updateInput = (start, end) => {
  startDate.value = formatDateInput(start, props.formatDateInput);
  endDate.value = formatDateInput(end, props.formatDateInput);
};

const selectedDate = computed({
  get() {
    return props.modelValue;
  },
  set(date) {
    updateModel(date.start, date.end);
    updateInput(date.start, date.end);
  },
});

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const showPopover = () => {
  isOpen.value = true;
};

const hidePopover = () => {
  isOpen.value = false;
};

onClickOutside(popover, () => {
  hidePopover();
});
</script>
