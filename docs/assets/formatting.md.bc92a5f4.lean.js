import { r as t } from "./chunks/style.3dcca13a.js";
import {
  r,
  o as n,
  b as c,
  u as D,
  c as y,
  d as F,
  a as l,
} from "./app.7bd6ba26.js";
const i = {
    __name: "FormattingExample",
    setup(e) {
      const s = r({ start: new Date(), end: new Date() });
      return (o, a) => (
        n(),
        c(
          D(t),
          {
            modelValue: s.value,
            "onUpdate:modelValue": a[0] || (a[0] = (p) => (s.value = p)),
            inline: !1,
            formatDateInput: "yyyy-MM-dd",
          },
          null,
          8,
          ["modelValue"]
        )
      );
    },
  },
  d = l("", 6),
  C = l("", 2),
  _ = JSON.parse(
    '{"title":"Modes","description":"","frontmatter":{},"headers":[{"level":2,"title":"formatDateInput","slug":"formatdateinput","link":"#formatdateinput","children":[]}],"relativePath":"formatting.md"}'
  ),
  A = { name: "formatting.md" },
  f = Object.assign(A, {
    setup(e) {
      return (s, o) => (n(), y("div", null, [d, F(i), C]));
    },
  });
export { _ as __pageData, f as default };
