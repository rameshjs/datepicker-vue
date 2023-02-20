## @rameshjs/datepicker-vue

### Complete and highly customizable datepicker for vue3

[![License](https://img.shields.io/npm/l/@rameshjs/datepicker-vue)](https://github.com/rameshjs/datepicker-vue/blob/main/LICENCE)
[![npm](https://img.shields.io/npm/v/@rameshjs/datepicker-vue)](https://www.npmjs.com/package/@rameshjs/datepicker-vue)
![Downloads](https://img.shields.io/npm/dt/@rameshjs/datepicker-vue)

## [DOCUMENTATION](https://rameshjs.github.io/datepicker-vue/)

### [Demo](https://stackblitz.com/edit/rameshjsdatepicker-vue?file=src%2Fcomponents%2FPlayground.vue)

## Features

- Single view date picker
- Single view date picker with text field for displaying the selected date
- Single view date range picker for selecting a range of dates
- Single view date range picker with text fields for displaying the selected start and end dates
- Multi month date picker
- Multi month date picker with text field for displaying the selected date range
- Slots for customizing the trigger and input fields, allowing users to add their own elements for triggering the datepicker and displaying the selected date(s)
- Month select feature, which allows users to select a specific month within a year
- Year select feature, which allows users to select a specific year.

## Install

```shell
yarn add @rameshjs/datepicker-vue

# or

npm i @rameshjs/datepicker-vue
```

Import and register component

**Global**

To import and register the component globally in your Vue application, use the following code:

```js
import { createApp } from "vue";
import App from "./App.vue";

import DatePicker from "@rameshjs/datepicker-vue";
import "@rameshjs/datepicker-vue/dist/style.css";

const app = createApp(App);
app.component("DatePicker", DatePicker);
```

**Local**

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

**Usage**

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

In this example, a reactive object `date` is defined using the `ref` function from the Vue.js library. The `date` object contains properties `start` and `end` for representing the selected date range. By default, both `start` and `end` are set to `null`.

When a single date is selected, the `start` and `end` properties of the date object will be set to the same date. When a range of dates is selected, the `start` and `end` properties will be set to the respective `start` and `end` dates of the range.
