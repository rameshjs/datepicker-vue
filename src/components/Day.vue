<template>
  <button class="p-4 w-full h-full">
    {{ formattedDate }}
  </button>
</template>
<script>
export default {
  name: "BaseDay",
};
</script>
<script setup>
import { computed } from "vue";

const props = defineProps({
  day: {
    type: Date,
    default: null,
  },
});

const formattedDate = computed(() => props.day.getDate());
</script>
