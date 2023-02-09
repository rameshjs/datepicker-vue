## @ramesh-exe/datepicker-vue


### Complete and highly customizable datepicker for vue3

## [DOCUMENTATION](https://datepicker-vue-docs.readthedocs.io/en/latest/index.html){:target="_blank"}

[StackBlitz Playground](https://stackblitz.com/edit/ramesh-exedatepicker-vue?file=src%2Fcomponents%2FPlayground.vue){:target="_blank"}

## Features

- Single view date picker
- Single view date picker with text field for displaying the selected date
- Single view date range picker for selecting a range of dates
- Single view date range picker with text fields for displaying the selected start and end dates
- Slots for customizing the trigger and input fields, allowing users to add their own elements for triggering the datepicker and displaying the selected date(s)
- Month select feature, which allows users to select a specific month within a year
- Year select feature, which allows users to select a specific year.

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



| Props           | Description                                                                                            |
|-----------------|--------------------------------------------------------------------------------------------------------|
| inline          | Whether the datepicker is shown inline or as a popover with text fields.                                                |
| allowRange      | Whether a date range can be selected or only a single date.                                            |
| startDateLabel  | The label for the start date input.                                                                    |
| endDateLabel    | The label for the end date input.                                                                      |
| startDatePlaceholder | The placeholder for the start date input.                                                          |
| endDatePlaceholder   | The placeholder for the end date input.                                                        |
| month   | Defaut month to be selected when datepicker is loaded.                                                        |
| year   | Defaut year to be selected when datepicker is loaded.                                                            |

| Slots           | Description                                                                                            |
|-----------------|--------------------------------------------------------------------------------------------------------|
| trigger-datepicker | The custom datepicker trigger slot will have a `toggle` method available.                           |
| datepicker-input   | The datepicker input customization slot will have `toggle`, `showPopover`, and `hidePopover` methods available and the input values can be accessed using `start-date` and `end-date`.                                                     |


