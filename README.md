## @ramesh-exe/datepicker-vue


### Complete and highly customizable datepicker for vue3


[StackBlitz Playground](https://stackblitz.com/edit/ramesh-exedatepicker-vue?file=src%2Fcomponents%2FPlayground.vue)

## Features

- Single date picker
- Single date picker with text field
- Single date range picker
- Single date range picker with text field
- Month picker
- Year picker

## Install

```shell
yarn add @ramesh-exe/datepicker-vue

# or

npm i @ramesh-exe/datepicker-vue
```

Import and register component

**Global**

To import and register the component globally in your Vue application, use the following code:

```js
import { createApp } from 'vue';
import App from './App.vue';

import DatePicker from '@ramesh-exe/datepicker-vue';
import '@ramesh-exe/datepicker-vue/dist/style.css';

const app = createApp(App);
app.component('DatePicker', DatePicker);
```

**Local**

To import and register the component locally in a Vue component, use the following code:


```vue
<script>
    import DatePicker from '@ramesh-exe/datepicker-vue';
    import '@ramesh-exe/datepicker-vue/dist/style.css';
    
    export default {
        components: { DatePicker }
    }
</script>
```

**Usage**


To use the component in your template, add the DatePicker component with the desired props and slots.

```vue
<template>
    <DatePicker v-model="date" />
</template>

<script setup>
import DatePicker from "@ramesh-exe/datepicker-vue";
import "/node_modules/@ramesh-exe/datepicker-vue/dist/style.css";
import { ref } from "vue";

const date = ref({ start: null, end: null });
</script>


```

In this example, a reactive object `date` is defined using the `ref` function from the Vue.js library. The `date` object contains properties `start` and `end` for representing the selected date range. By default, both `start` and `end` are set to `null`.

The selected date range can be updated using the date picker component, which provides options for selecting a single date or a range of dates. When a single date is selected, the `start` and `end` properties of the `date` object will be set to the same date. When a range of dates is selected, the `start` and `end` properties will be set to the respective start and end dates of the range.


## Props
- modelValue: The selected date range, which is an object with properties start and end.
- inline: Whether the datepicker is shown inline or as a popover.
- allowRange: Whether a date range can be selected or only a single date.
- startDateLabel: The label for the start date input.
- endDateLabel: The label for the end date input.
- startDatePlaceholder: The placeholder for the start date input.
- endDatePlaceholder: The placeholder for the end date input.

## Slots
- trigger-datepicker: The slot for the custom datepicker trigger.
- datepicker-input: The slot for the datepicker input customization.

