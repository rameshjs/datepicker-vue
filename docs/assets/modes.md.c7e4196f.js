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
  u = e(
    '<h1 id="modes" tabindex="-1">Modes <a class="header-anchor" href="#modes" aria-hidden="true">#</a></h1><p>Default mode for the datepicker</p><h2 id="inline" tabindex="-1">inline <a class="header-anchor" href="#inline" aria-hidden="true">#</a></h2><p>Whether the datepicker is shown inline or as a popover with text fields.</p><ul><li><p>Type <code>Boolean</code></p></li><li><p>Default <code>true</code></p></li></ul><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h4>',
    6
  ),
  A = e(
    `<h4 id="code-example" tabindex="-1">Code example <a class="header-anchor" href="#code-example" aria-hidden="true">#</a></h4><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">DatePicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> DatePicker </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@rameshjs/datepicker-vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@rameshjs/datepicker-vue/dist/style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="allowrange" tabindex="-1">allowRange <a class="header-anchor" href="#allowrange" aria-hidden="true">#</a></h2><p>Whether a date range can be selected or only a single date.</p><ul><li><p>Type <code>Boolean</code></p></li><li><p>Default <code>false</code></p></li></ul><h4 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-hidden="true">#</a></h4>`,
    6
  ),
  h = e(
    `<h4 id="code-example-1" tabindex="-1">Code example <a class="header-anchor" href="#code-example-1" aria-hidden="true">#</a></h4><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">DatePicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:inline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">allow-range</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">startDatePlaceholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Start date</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">endDatePlaceholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">End date</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> DatePicker </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@rameshjs/datepicker-vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@rameshjs/datepicker-vue/dist/style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="multimonth" tabindex="-1">multiMonth <a class="header-anchor" href="#multimonth" aria-hidden="true">#</a></h2><p>Shows two calendars side by side.</p><ul><li><p>Type <code>Boolean</code></p></li><li><p>Default <code>false</code></p></li></ul><h4 id="example-2" tabindex="-1">Example <a class="header-anchor" href="#example-2" aria-hidden="true">#</a></h4>`,
    6
  ),
  m = e(
    `<h4 id="code-example-2" tabindex="-1">Code example <a class="header-anchor" href="#code-example-2" aria-hidden="true">#</a></h4><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">DatePicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:inline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">multi-month</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">startDatePlaceholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Start date</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">endDatePlaceholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">End date</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> DatePicker </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@rameshjs/datepicker-vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@rameshjs/datepicker-vue/dist/style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,
    2
  ),
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
