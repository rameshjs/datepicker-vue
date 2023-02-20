<script setup>
import MonthExample from './props/MonthExample.vue'
import YearExample from './props/YearExample.vue'
import StartDateLabelExample from "./props/StartDateLabelExample.vue"
import EndDateLabelExample from "./props/EndDateLabelExample.vue"
import startDatePlaceholder from "./props/startDatePlaceholder.vue"
import endDatePlaceholder from "./props/endDatePlaceholder.vue"
</script>

# General configuration

General props configuration.

## v-model

Defaut month to be selected when datepicker is loaded.

- Type:

  - Single month: `{start: Date, end: Date} | Object`
    - Incase of single month date picker both `start` and `end` will be of same date.

- Multi month: `{start: Date, end: Date} | Object`
  - Incase of multi month date picker both `start` and `end` will be of selected date ranges.

#### Example:

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

## month

Defaut month to be selected when datepicker is loaded.

- Type `Number`

- Default `Current month`

#### Example

<MonthExample/>

#### Code example

<<< @/props/MonthExample.vue

## Year

Defaut year to be selected when datepicker is loaded.

- Type `Number`

- Default `Current year`

#### Example

<YearExample/>

#### Code example

<<< @/props/YearExample.vue

## startDateLabel

The label for the start date input.

Note: Incase of `allowRange` is false this props will be used as primary label for input.

- Type `String`

- Default `""`

#### Example

<StartDateLabelExample/>

#### Code example

<<< @/props/StartDateLabelExample.vue

## endDateLabel

The label for the end date input.

- Type `String`

- Default `""`

#### Example

<EndDateLabelExample/>

#### Code example

<<< @/props/EndDateLabelExample.vue

## startDatePlaceholder

The placeholder for the start date input.

Note: Incase of `allowRange` is false this props will be used as primary placeholder.

- Type `String`

- Default `""`

#### Example

<startDatePlaceholder/>

#### Code example

<<< @/props/startDatePlaceholder.vue

## endDatePlaceholder

The placeholder for the end date input.

- Type `String`

- Default `""`

#### Example

<endDatePlaceholder/>

#### Code example

<<< @/props/endDatePlaceholder.vue
