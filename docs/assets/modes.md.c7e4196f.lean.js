import { r as c } from "./chunks/style.3dcca13a.js";
import {
  r,
  o as l,
  b as D,
  u as F,
  c as y,
  d as t,
  a as e,
} from "./app.7bd6ba26.js";
const i = {
    __name: "InlineExample",
    setup(o) {
      const s = r({ start: null, end: null });
      return (p, a) => (
        l(),
        D(
          F(c),
          {
            modelValue: s.value,
            "onUpdate:modelValue": a[0] || (a[0] = (n) => (s.value = n)),
          },
          null,
          8,
          ["modelValue"]
        )
      );
    },
  },
  d = {
    __name: "RangeExample",
    setup(o) {
      const s = r({ start: null, end: null });
      return (p, a) => (
        l(),
        D(
          F(c),
          {
            modelValue: s.value,
            "onUpdate:modelValue": a[0] || (a[0] = (n) => (s.value = n)),
            inline: !1,
            "allow-range": "",
            startDatePlaceholder: "Start date",
            endDatePlaceholder: "End date",
          },
          null,
          8,
          ["modelValue"]
        )
      );
    },
  },
  C = {
    __name: "MultiMonthExample",
    setup(o) {
      const s = r({ start: null, end: null });
      return (p, a) => (
        l(),
        D(
          F(c),
          {
            modelValue: s.value,
            "onUpdate:modelValue": a[0] || (a[0] = (n) => (s.value = n)),
            inline: !1,
            "multi-month": "",
            startDatePlaceholder: "Start date",
            endDatePlaceholder: "End date",
          },
          null,
          8,
          ["modelValue"]
        )
      );
    },
  },
  u = e("", 6),
  A = e("", 6),
  h = e("", 6),
  m = e("", 2),
  g = JSON.parse(
    '{"title":"Modes","description":"","frontmatter":{},"headers":[{"level":2,"title":"inline","slug":"inline","link":"#inline","children":[]},{"level":2,"title":"allowRange","slug":"allowrange","link":"#allowrange","children":[]},{"level":2,"title":"multiMonth","slug":"multimonth","link":"#multimonth","children":[]}],"relativePath":"modes.md"}'
  ),
  _ = { name: "modes.md" },
  x = Object.assign(_, {
    setup(o) {
      return (s, p) => (l(), y("div", null, [u, t(i), A, t(d), h, t(C), m]));
    },
  });
export { g as __pageData, x as default };
