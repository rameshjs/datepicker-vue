Slots
=====


trigger-datepicker
------------

Pass custom trigger for date picker popover replacing the text field when ``inline`` props is ``false``

We will have access to the popover ``toggle`` property.

.. code-block:: html

  <template>
      <Datepicker v-model="date">
          <template #trigger-datepicker={ toggle }>
              <button @click="toggle">Open date picker</button>
          </template>
      </Datepicker>
  </template>

  <script>
  import { ref } from 'vue';

  export default {
      setup() {
          const date = ref({start: null, end: null});

          return {
              date,
          }
      }
  }
  </script>

datepicker-input	
------------

The datepicker input customization slot will have ``toggle``, ``showPopover``, and ``hidePopover`` 
methods available and the input values can be accessed using ``start-date`` and ``end-date``.


.. code-block:: html

  <template>
      <Datepicker v-model="date">
          <template #datepicker-input="{ toggle, showPopover, hidePopover, start-date, end-date }">
            <input type="text" @focus="showPopover" @blur="hidePopover" :value="start-date" />
          </template>
      </Datepicker>
  </template>

  <script>
  import { ref } from 'vue';

  export default {
      setup() {
          const date = ref({start: null, end: null});

          return {
              date,
          }
      }
  }
  </script>
