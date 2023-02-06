import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import DatePicker from "@/DatePicker.vue";

/**
 * Function to get component wrapper
 */
const getWrapper = (props = {}) => {
  return mount(DatePicker, {
    props: { ...props },
  });
};

describe("DatePicker", () => {
  let wrapper;

  it("renders Default date picker and check wrapper exists", () => {
    wrapper = getWrapper({
      modelValue: { start: null, end: null },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
