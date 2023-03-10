<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="id"
      :class="{
        'block p-2 text-sm font-medium flex': true,
        'text-gray-900 dark:text-white': !error,
        'text-red-500': error,
      }"
    >
      {{ label }}
      <span v-if="required" class="ml-2"> * </span>
    </label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <slot
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            /></svg
        ></slot>
      </div>
      <input
        type="text"
        :id="id"
        :class="{
          'bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500': true,
          'border-gray-300 dark:border-gray-600': !error,
          'border-red-500': error,
        }"
        :placeholder="placeholder"
        :name="name"
        v-model="inputData"
        @focus="focus"
        @blur="blur"
      />
    </div>
    <span v-if="error" class="block p-2 text-xs font-medium text-red-500">
      {{ error }}
    </span>
  </div>
</template>
<script>
export default {
  name: "BaseInput",
};
</script>
<script setup>
import { computed } from "vue";

const emit = defineEmits(["update:modelValue", "focus", "blur"]);

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
});

const inputData = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const focus = (event) => {
  emit("focus", event);
};

const blur = (event) => {
  emit("blur", event);
};
</script>
