<template>
  <div>
    <div class="grid grid-cols-7">
      <div
        v-for="weekDay in weekdayName"
        :key="weekDay"
        class="flex align-center justify-center font-bold capitalize p-3"
      >
        {{ weekDay.slice(0, 3) }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseMonth",
};
</script>
<script setup>
import { weekdayName } from "../utils/datepicker";
</script>
