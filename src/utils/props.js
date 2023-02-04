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
    type: [Object, Number],
    default: null,
  },
  inline: {
    type: Boolean,
    default: true,
  }
};
