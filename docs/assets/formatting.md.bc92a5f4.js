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
  d = l(
    '<h1 id="modes" tabindex="-1">Modes <a class="header-anchor" href="#modes" aria-hidden="true">#</a></h1><p>Default mode for the datepicker</p><h2 id="formatdateinput" tabindex="-1">formatDateInput <a class="header-anchor" href="#formatdateinput" aria-hidden="true">#</a></h2><p>To change default text field date format pass your desired date format.</p><ul><li><p>Type <code>String</code></p></li><li><p>Default <code>dd-MM-yyyy</code></p></li></ul><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h4>',
    6
  ),
  C = l(
    `<h4 id="code-example" tabindex="-1">Code example <a class="header-anchor" href="#code-example" aria-hidden="true">#</a></h4><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">DatePicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:inline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">formatDateInput</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yyyy-MM-dd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> DatePicker </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@rameshjs/datepicker-vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@rameshjs/datepicker-vue/dist/style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,
    2
  ),
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
