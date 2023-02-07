import "./assets/main.css";

import DatePicker from "./DatePicker.vue";

export const Plugin = {
  install(Vue) {
    Vue.component("DatePicker", DatePicker);
  },
};

export default DatePicker;
