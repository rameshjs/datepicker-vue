<script setup>
import InlineExample from "./modes/InlineExample.vue"
import RangeExample from "./modes/RangeExample.vue"
import MultiMonthExample from "./modes/MultiMonthExample.vue"
</script>

# Modes

Default mode for the datepicker

## inline

Whether the datepicker is shown inline or as a popover with text fields.

- Type `Boolean`

- Default `true`

#### Example

<InlineExample/>

#### Code example

<<< @/modes/InlineExample.vue

## allowRange

Whether a date range can be selected or only a single date.

- Type `Boolean`

- Default `false`

#### Example

<RangeExample/>

#### Code example

<<< @/modes/RangeExample.vue

## multiMonth

Shows two calendars side by side.

- Type `Boolean`

- Default `false`

#### Example

<MultiMonthExample/>

#### Code example

<<< @/modes/MultiMonthExample.vue
