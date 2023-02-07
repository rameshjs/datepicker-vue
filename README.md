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

```js
import { createApp } from 'vue';
import App from './App.vue';

import {DatePicker} from '@ramesh-exe/datepicker-vue';
import '@ramesh-exe/datepicker-vue/dist/style.css';

const app = createApp(App);
app.component('DatePicker', DatePicker);
```

**Local**

```vue
<script>
    import {DatePicker} from '@ramesh-exe/datepicker-vue';
    import '@ramesh-exe/datepicker-vue/dist/style.css';
    
    export default {
        components: { DatePicker }
    }
</script>
```
