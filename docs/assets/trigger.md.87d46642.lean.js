import { r as t } from "./chunks/style.3dcca13a.js";
import {
  r,
  o as l,
  b as c,
  w as D,
  u as F,
  e as y,
  c as i,
  d as C,
  a as p,
} from "./app.7bd6ba26.js";
const d = ["onClick"],
  A = {
    __name: "TriggerExample",
    setup(e) {
      const s = r({ start: null, end: null });
      return (o, n) => (
        l(),
        c(
          F(t),
          {
            modelValue: s.value,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => (s.value = a)),
            inline: !1,
          },
          {
            "trigger-datepicker": D(({ toggle: a }) => [
              y("button", { onClick: a }, "Open date picker", 8, d),
            ]),
            _: 1,
          },
          8,
          ["modelValue"]
        )
      );
    },
  },
  u = p("", 4),
  _ = p("", 2),
  f = JSON.parse(
    '{"title":"trigger-datepicker","description":"","frontmatter":{},"headers":[],"relativePath":"trigger.md"}'
  ),
  g = { name: "trigger.md" },
  k = Object.assign(g, {
    setup(e) {
      return (s, o) => (l(), i("div", null, [u, C(A), _]));
    },
  });
export { f as __pageData, k as default };
