<template>
  <div v-if="inline" :id="id">
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
  <Popper v-else class="w-full m-0 b-0" ref="popover" :show="isOpen" :id="id">
    <slot name="trigger-datepicker" :toggle="toggle">
      <slot
        name="datepicker-input"
        :startDate="startDate"
        :endDate="endDate"
        :toggle="toggle"
        :showPopover="showPopover"
        :hidePopover="hidePopover"
      >
        <div class="w-full flex flex-col lg:flex-row">
          <Input
            class="mr-0 mb-3 lg:mr-3 lg:mb-0"
            :label="startDateLabel"
            :placeholder="startDatePlaceholder"
            :name="startDateName"
            v-model="startDate"
            @focus="showPopover"
          />
          <Input
            v-if="allowRange || multiMonth"
            :label="endDateLabel"
            :placeholder="endDatePlaceholder"
            :name="endDateName"
            v-model="endDate"
            @focus="showPopover"
          />
        </div>
      </slot>
    </slot>
    <template #content>
      <div
        :class="{
          'drop-shadow-lg': true,
          'w-[400px]': !multiMonth,
        }"
      >
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
import Popper from "vue3-popper/dist/popper.esm";
import { AllProps } from "./utils/props";
import {
  formatDateInput,
  parseTextToDate,
  parseModelValue,
} from "./utils/datepicker";
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  ...AllProps,
  id: {
    type: String,
    default: "",
  },
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
  startDateName: {
    type: String,
    default: "",
  },
  endDateName: {
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

/** formatDateInput formats date object to readable format provided. */
const startDate = ref(
  formatDateInput(props.modelValue.start, props.formatDateInput)
);
const endDate = ref(
  formatDateInput(props.modelValue.end, props.formatDateInput)
);

/** When text field is changed provided date is converted
 *  to date object and modelValue is updated.
 */
watch([startDate, endDate], ([newStartDate, newEndDate]) => {
  updateModel(
    parseTextToDate(newStartDate, props.formatDateInput),
    parseTextToDate(newEndDate, props.formatDateInput)
  );
});

/** Updates modelValue with provided start and end date.
 * Incase of singleview calendar start and end date are same.
 * Incase of multiMonth or range select start and end date are selected date range.
 */
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

/** Update text field with readable format. */
const updateInput = (start, end) => {
  startDate.value = formatDateInput(start, props.formatDateInput);
  endDate.value = formatDateInput(end, props.formatDateInput);
};

/** Emits selected date */
const selectedDate = computed({
  get() {
    return parseModelValue(props.modelValue);
  },
  set(date) {
    updateModel(date.start, date.end);
    updateInput(date.start, date.end);
  },
});

/** Toggles popover */
const toggle = () => {
  isOpen.value = !isOpen.value;
};

/** Open popover */
const showPopover = () => {
  isOpen.value = true;
};

/** Close popover */
const hidePopover = () => {
  isOpen.value = false;
};

/** Close popover when clicked outside */
onClickOutside(popover, () => {
  hidePopover();
});
</script>
