export const AllProps = {
  month: {
    type: Number,
    default: new Date().getMonth(),
  },
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
  modelValue: {
    type: [Object, Number, Date],
    default: null,
  },
  inline: {
    type: Boolean,
    default: true,
  },
  allowRange: {
    type: Boolean,
    default: false,
  },
  multiMonth: {
    type: Boolean,
    default: false,
  },
  selectedDateRange: {
    tyoe: Object,
    default: null,
  },
};
