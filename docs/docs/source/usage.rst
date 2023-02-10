Getting Started
=====

.. _installation:

Installation
------------

.. code-block:: console

   yarn add @ramesh-exe/datepicker-vue
   
   or 
   
   npm i @ramesh-exe/datepicker-vue
   
Then import and register component


Global
----------------

To import and register the component globally in your Vue application, use the following code:

.. code-block:: js

   import { createApp } from 'vue';
   import App from './App.vue';

   import DatePicker from '@ramesh-exe/datepicker-vue';
   import '@ramesh-exe/datepicker-vue/dist/style.css';

   const app = createApp(App);
   app.component('DatePicker', DatePicker);
   

Local
----------------

To import and register the component locally in a Vue component, use the following code:

.. code-block:: javascript

   <script>
       import DatePicker from '@ramesh-exe/datepicker-vue';
       import '@ramesh-exe/datepicker-vue/dist/style.css';

       export default {
           components: { DatePicker }
       }
   </script>

Usage
----------------

To use the component in your template, add the DatePicker component with the desired props and slots.

.. code-block:: html

   <template>
      <DatePicker v-model="date" />
   </template>

   <script setup>
      import DatePicker from "@ramesh-exe/datepicker-vue";
      import "/node_modules/@ramesh-exe/datepicker-vue/dist/style.css";
      import { ref } from "vue";

      const date = ref({ start: null, end: null });
   </script>
   
In this example, a reactive object ``date`` is defined using the ``ref`` function from the Vue.js library. The date object contains properties ``start`` and ``end`` for representing the selected date range. By default, both ``start`` and ``end`` are set to null.

When a single date is selected, the ``start`` and ``end`` properties of the date object will be set to the same date. When a range of dates is selected, the ``start`` and ``end`` properties will be set to the respective ``start`` and ``end`` dates of the range.
