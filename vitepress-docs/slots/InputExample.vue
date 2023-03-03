<template>
  <Datepicker v-model="date">
    <template
      #datepicker-input="{
        toggle,
        showPopover,
        hidePopover,
        startDate,
        endDate,
      }"
    >
      <input
        type="text"
        @focus="showPopover"
        @blur="hidePopover"
        :value="startDate"
      />
      <input
        type="text"
        @focus="showPopover"
        @blur="hidePopover"
        :value="endDate"
      />
    </template>
  </Datepicker>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const date = ref({ start: null, end: null });

    return {
      date,
    };
  },
};
</script>
