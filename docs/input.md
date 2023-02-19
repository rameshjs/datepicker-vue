<script setup>
    import InputExample from "./slots/InputExample.vue"
</script>

# datepicker-input

This slot replaces the input field. The difference from the `trigger-datepicker` slot is that you will have access to the input field properties.

- `startDate`: Value displayed in start date.

  - type: `Date`

- `endDate`: Value displayed in end date.

  - type: `Date`

- `toggle`: Method called on `@focus` event.

  - type: `() => void`

- `showPopover`: Method can be used to open popover.

  - type: `() => void`

- `hidePopover`: Method can be used to close popover.
  - type: `() => void`

#### Code example

<<< @/slots/InputExample.vue
