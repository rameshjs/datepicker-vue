# Installation

## Installation

First step is to install it using `yarn` or `npm`:

```bash
yarn add @rameshjs/datepicker-vue
```

or

```bash
npm i @rameshjs/datepicker-vue
```

## Global

To import and register the component globally in your Vue application, use the following code:

```js
import { createApp } from "vue";
import App from "./App.vue";
import DatePicker from "@rameshjs/datepicker-vue";
import "@rameshjs/datepicker-vue/dist/style.css";

const app = createApp(App);
app.component("DatePicker", DatePicker);
```

## Local

To import and register the component locally in a Vue component, use the following code:

```vue
<script>
import DatePicker from "@rameshjs/datepicker-vue";
import "@rameshjs/datepicker-vue/dist/style.css";

export default {
  components: { DatePicker },
};
</script>
```

## Usage

To use the component in your template, add the DatePicker component with the desired props and slots.

```vue
<template>
  <DatePicker v-model="date" />
</template>

<script setup>
import DatePicker from "@rameshjs/datepicker-vue";
import "@rameshjs/datepicker-vue/dist/style.css";
import { ref } from "vue";

const date = ref({ start: null, end: null });
</script>
```

In this example, a reactive object `date` is defined using the `ref` function from the Vue.js library. The date object contains properties `start` and `end` for representing the selected date range. By default, both `start` and `end` are set to null.

When a single date is selected, the `start` and `end` properties of the date object will be set to the same date. When a range of dates is selected, the `start` and `end` properties will be set to the respective `start` and `end` dates of the range.
