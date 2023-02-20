function Us(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let o = 0; o < s.length; o++) n[s[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function js(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        o = we(s) ? zi(s) : js(s);
      if (o) for (const r in o) t[r] = o[r];
    }
    return t;
  } else {
    if (we(e)) return e;
    if (ge(e)) return e;
  }
}
const Di = /;(?![^(]*\))/g,
  Ui = /:([^]+)/,
  ji = /\/\*.*?\*\//gs;
function zi(e) {
  const t = {};
  return (
    e
      .replace(ji, "")
      .split(Di)
      .forEach((n) => {
        if (n) {
          const s = n.split(Ui);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function me(e) {
  let t = "";
  if (we(e)) t = e;
  else if (q(e))
    for (let n = 0; n < e.length; n++) {
      const s = me(e[n]);
      s && (t += s + " ");
    }
  else if (ge(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Ki =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  qi = Us(Ki);
function mr(e) {
  return !!e || e === "";
}
const ae = (e) =>
    we(e)
      ? e
      : e == null
      ? ""
      : q(e) || (ge(e) && (e.toString === wr || !J(e.toString)))
      ? JSON.stringify(e, gr, 2)
      : String(e),
  gr = (e, t) =>
    t && t.__v_isRef
      ? gr(e, t.value)
      : Rt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, o]) => ((n[`${s} =>`] = o), n),
            {}
          ),
        }
      : br(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ge(t) && !q(t) && !xr(t)
      ? String(t)
      : t,
  ve = {},
  Ht = [],
  Ke = () => {},
  Wi = () => !1,
  Gi = /^on[^a-z]/,
  bn = (e) => Gi.test(e),
  zs = (e) => e.startsWith("onUpdate:"),
  Pe = Object.assign,
  Ks = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Yi = Object.prototype.hasOwnProperty,
  re = (e, t) => Yi.call(e, t),
  q = Array.isArray,
  Rt = (e) => Wn(e) === "[object Map]",
  br = (e) => Wn(e) === "[object Set]",
  J = (e) => typeof e == "function",
  we = (e) => typeof e == "string",
  qs = (e) => typeof e == "symbol",
  ge = (e) => e !== null && typeof e == "object",
  yr = (e) => ge(e) && J(e.then) && J(e.catch),
  wr = Object.prototype.toString,
  Wn = (e) => wr.call(e),
  Qi = (e) => Wn(e).slice(8, -1),
  xr = (e) => Wn(e) === "[object Object]",
  Ws = (e) =>
    we(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  sn = Us(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Gn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Xi = /-(\w)/g,
  Je = Gn((e) => e.replace(Xi, (t, n) => (n ? n.toUpperCase() : ""))),
  Ji = /\B([A-Z])/g,
  Mt = Gn((e) => e.replace(Ji, "-$1").toLowerCase()),
  Yn = Gn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  hs = Gn((e) => (e ? `on${Yn(e)}` : "")),
  un = (e, t) => !Object.is(e, t),
  An = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Nn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  $s = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Zi = (e) => {
    const t = we(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let ko;
const el = () =>
  ko ||
  (ko =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let Ne;
class tl {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ne),
      !t && Ne && (this.index = (Ne.scopes || (Ne.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ne;
      try {
        return (Ne = this), t();
      } finally {
        Ne = n;
      }
    }
  }
  on() {
    Ne = this;
  }
  off() {
    Ne = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function nl(e, t = Ne) {
  t && t.active && t.effects.push(e);
}
function $r() {
  return Ne;
}
function sl(e) {
  Ne && Ne.cleanups.push(e);
}
const Gs = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  kr = (e) => (e.w & _t) > 0,
  Pr = (e) => (e.n & _t) > 0,
  ol = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= _t;
  },
  rl = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const o = t[s];
        kr(o) && !Pr(o) ? o.delete(e) : (t[n++] = o),
          (o.w &= ~_t),
          (o.n &= ~_t);
      }
      t.length = n;
    }
  },
  On = new WeakMap();
let nn = 0,
  _t = 1;
const ks = 30;
let je;
const Et = Symbol(""),
  Ps = Symbol("");
class Ys {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      nl(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = je,
      n = dt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = je),
        (je = this),
        (dt = !0),
        (_t = 1 << ++nn),
        nn <= ks ? ol(this) : Po(this),
        this.fn()
      );
    } finally {
      nn <= ks && rl(this),
        (_t = 1 << --nn),
        (je = this.parent),
        (dt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    je === this
      ? (this.deferStop = !0)
      : this.active &&
        (Po(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Po(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let dt = !0;
const Cr = [];
function Xt() {
  Cr.push(dt), (dt = !1);
}
function Jt() {
  const e = Cr.pop();
  dt = e === void 0 ? !0 : e;
}
function Ae(e, t, n) {
  if (dt && je) {
    let s = On.get(e);
    s || On.set(e, (s = new Map()));
    let o = s.get(n);
    o || s.set(n, (o = Gs())), Sr(o);
  }
}
function Sr(e, t) {
  let n = !1;
  nn <= ks ? Pr(e) || ((e.n |= _t), (n = !kr(e))) : (n = !e.has(je)),
    n && (e.add(je), je.deps.push(e));
}
function st(e, t, n, s, o, r) {
  const i = On.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && q(e)) {
    const a = Number(s);
    i.forEach((u, d) => {
      (d === "length" || d >= a) && l.push(u);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        q(e)
          ? Ws(n) && l.push(i.get("length"))
          : (l.push(i.get(Et)), Rt(e) && l.push(i.get(Ps)));
        break;
      case "delete":
        q(e) || (l.push(i.get(Et)), Rt(e) && l.push(i.get(Ps)));
        break;
      case "set":
        Rt(e) && l.push(i.get(Et));
        break;
    }
  if (l.length === 1) l[0] && Cs(l[0]);
  else {
    const a = [];
    for (const u of l) u && a.push(...u);
    Cs(Gs(a));
  }
}
function Cs(e, t) {
  const n = q(e) ? e : [...e];
  for (const s of n) s.computed && Co(s);
  for (const s of n) s.computed || Co(s);
}
function Co(e, t) {
  (e !== je || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function il(e, t) {
  var n;
  return (n = On.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
const ll = Us("__proto__,__v_isRef,__isVue"),
  Tr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(qs)
  ),
  al = Qs(),
  cl = Qs(!1, !0),
  ul = Qs(!0),
  So = fl();
function fl() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = ie(this);
        for (let r = 0, i = this.length; r < i; r++) Ae(s, "get", r + "");
        const o = s[t](...n);
        return o === -1 || o === !1 ? s[t](...n.map(ie)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Xt();
        const s = ie(this)[t].apply(this, n);
        return Jt(), s;
      };
    }),
    e
  );
}
function dl(e) {
  const t = ie(this);
  return Ae(t, "has", e), t.hasOwnProperty(e);
}
function Qs(e = !1, t = !1) {
  return function (s, o, r) {
    if (o === "__v_isReactive") return !e;
    if (o === "__v_isReadonly") return e;
    if (o === "__v_isShallow") return t;
    if (o === "__v_raw" && r === (e ? (t ? Tl : Mr) : t ? Ar : Lr).get(s))
      return s;
    const i = q(s);
    if (!e) {
      if (i && re(So, o)) return Reflect.get(So, o, r);
      if (o === "hasOwnProperty") return dl;
    }
    const l = Reflect.get(s, o, r);
    return (qs(o) ? Tr.has(o) : ll(o)) || (e || Ae(s, "get", o), t)
      ? l
      : $e(l)
      ? i && Ws(o)
        ? l
        : l.value
      : ge(l)
      ? e
        ? Zs(l)
        : Xn(l)
      : l;
  };
}
const hl = Vr(),
  _l = Vr(!0);
function Vr(e = !1) {
  return function (n, s, o, r) {
    let i = n[s];
    if (Gt(i) && $e(i) && !$e(o)) return !1;
    if (
      !e &&
      (!Bn(o) && !Gt(o) && ((i = ie(i)), (o = ie(o))), !q(n) && $e(i) && !$e(o))
    )
      return (i.value = o), !0;
    const l = q(n) && Ws(s) ? Number(s) < n.length : re(n, s),
      a = Reflect.set(n, s, o, r);
    return (
      n === ie(r) && (l ? un(o, i) && st(n, "set", s, o) : st(n, "add", s, o)),
      a
    );
  };
}
function pl(e, t) {
  const n = re(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && st(e, "delete", t, void 0), s;
}
function vl(e, t) {
  const n = Reflect.has(e, t);
  return (!qs(t) || !Tr.has(t)) && Ae(e, "has", t), n;
}
function ml(e) {
  return Ae(e, "iterate", q(e) ? "length" : Et), Reflect.ownKeys(e);
}
const Er = { get: al, set: hl, deleteProperty: pl, has: vl, ownKeys: ml },
  gl = {
    get: ul,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  bl = Pe({}, Er, { get: cl, set: _l }),
  Xs = (e) => e,
  Qn = (e) => Reflect.getPrototypeOf(e);
function $n(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = ie(e),
    r = ie(t);
  n || (t !== r && Ae(o, "get", t), Ae(o, "get", r));
  const { has: i } = Qn(o),
    l = s ? Xs : n ? to : fn;
  if (i.call(o, t)) return l(e.get(t));
  if (i.call(o, r)) return l(e.get(r));
  e !== o && e.get(t);
}
function kn(e, t = !1) {
  const n = this.__v_raw,
    s = ie(n),
    o = ie(e);
  return (
    t || (e !== o && Ae(s, "has", e), Ae(s, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function Pn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Ae(ie(e), "iterate", Et), Reflect.get(e, "size", e)
  );
}
function To(e) {
  e = ie(e);
  const t = ie(this);
  return Qn(t).has.call(t, e) || (t.add(e), st(t, "add", e, e)), this;
}
function Vo(e, t) {
  t = ie(t);
  const n = ie(this),
    { has: s, get: o } = Qn(n);
  let r = s.call(n, e);
  r || ((e = ie(e)), (r = s.call(n, e)));
  const i = o.call(n, e);
  return (
    n.set(e, t), r ? un(t, i) && st(n, "set", e, t) : st(n, "add", e, t), this
  );
}
function Eo(e) {
  const t = ie(this),
    { has: n, get: s } = Qn(t);
  let o = n.call(t, e);
  o || ((e = ie(e)), (o = n.call(t, e))), s && s.call(t, e);
  const r = t.delete(e);
  return o && st(t, "delete", e, void 0), r;
}
function Lo() {
  const e = ie(this),
    t = e.size !== 0,
    n = e.clear();
  return t && st(e, "clear", void 0, void 0), n;
}
function Cn(e, t) {
  return function (s, o) {
    const r = this,
      i = r.__v_raw,
      l = ie(i),
      a = t ? Xs : e ? to : fn;
    return (
      !e && Ae(l, "iterate", Et), i.forEach((u, d) => s.call(o, a(u), a(d), r))
    );
  };
}
function Sn(e, t, n) {
  return function (...s) {
    const o = this.__v_raw,
      r = ie(o),
      i = Rt(r),
      l = e === "entries" || (e === Symbol.iterator && i),
      a = e === "keys" && i,
      u = o[e](...s),
      d = n ? Xs : t ? to : fn;
    return (
      !t && Ae(r, "iterate", a ? Ps : Et),
      {
        next() {
          const { value: p, done: v } = u.next();
          return v
            ? { value: p, done: v }
            : { value: l ? [d(p[0]), d(p[1])] : d(p), done: v };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function it(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function yl() {
  const e = {
      get(r) {
        return $n(this, r);
      },
      get size() {
        return Pn(this);
      },
      has: kn,
      add: To,
      set: Vo,
      delete: Eo,
      clear: Lo,
      forEach: Cn(!1, !1),
    },
    t = {
      get(r) {
        return $n(this, r, !1, !0);
      },
      get size() {
        return Pn(this);
      },
      has: kn,
      add: To,
      set: Vo,
      delete: Eo,
      clear: Lo,
      forEach: Cn(!1, !0),
    },
    n = {
      get(r) {
        return $n(this, r, !0);
      },
      get size() {
        return Pn(this, !0);
      },
      has(r) {
        return kn.call(this, r, !0);
      },
      add: it("add"),
      set: it("set"),
      delete: it("delete"),
      clear: it("clear"),
      forEach: Cn(!0, !1),
    },
    s = {
      get(r) {
        return $n(this, r, !0, !0);
      },
      get size() {
        return Pn(this, !0);
      },
      has(r) {
        return kn.call(this, r, !0);
      },
      add: it("add"),
      set: it("set"),
      delete: it("delete"),
      clear: it("clear"),
      forEach: Cn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (e[r] = Sn(r, !1, !1)),
        (n[r] = Sn(r, !0, !1)),
        (t[r] = Sn(r, !1, !0)),
        (s[r] = Sn(r, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [wl, xl, $l, kl] = yl();
function Js(e, t) {
  const n = t ? (e ? kl : $l) : e ? xl : wl;
  return (s, o, r) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? s
      : Reflect.get(re(n, o) && o in s ? n : s, o, r);
}
const Pl = { get: Js(!1, !1) },
  Cl = { get: Js(!1, !0) },
  Sl = { get: Js(!0, !1) },
  Lr = new WeakMap(),
  Ar = new WeakMap(),
  Mr = new WeakMap(),
  Tl = new WeakMap();
function Vl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function El(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vl(Qi(e));
}
function Xn(e) {
  return Gt(e) ? e : eo(e, !1, Er, Pl, Lr);
}
function Ll(e) {
  return eo(e, !1, bl, Cl, Ar);
}
function Zs(e) {
  return eo(e, !0, gl, Sl, Mr);
}
function eo(e, t, n, s, o) {
  if (!ge(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = o.get(e);
  if (r) return r;
  const i = El(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return o.set(e, l), l;
}
function Dt(e) {
  return Gt(e) ? Dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Gt(e) {
  return !!(e && e.__v_isReadonly);
}
function Bn(e) {
  return !!(e && e.__v_isShallow);
}
function Ir(e) {
  return Dt(e) || Gt(e);
}
function ie(e) {
  const t = e && e.__v_raw;
  return t ? ie(t) : e;
}
function on(e) {
  return Nn(e, "__v_skip", !0), e;
}
const fn = (e) => (ge(e) ? Xn(e) : e),
  to = (e) => (ge(e) ? Zs(e) : e);
function Nr(e) {
  dt && je && ((e = ie(e)), Sr(e.dep || (e.dep = Gs())));
}
function Or(e, t) {
  e = ie(e);
  const n = e.dep;
  n && Cs(n);
}
function $e(e) {
  return !!(e && e.__v_isRef === !0);
}
function ce(e) {
  return Br(e, !1);
}
function Al(e) {
  return Br(e, !0);
}
function Br(e, t) {
  return $e(e) ? e : new Ml(e, t);
}
class Ml {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ie(t)),
      (this._value = n ? t : fn(t));
  }
  get value() {
    return Nr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Bn(t) || Gt(t);
    (t = n ? t : ie(t)),
      un(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : fn(t)), Or(this));
  }
}
function _(e) {
  return $e(e) ? e.value : e;
}
const Il = {
  get: (e, t, n) => _(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return $e(o) && !$e(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Fr(e) {
  return Dt(e) ? e : new Proxy(e, Il);
}
function P1(e) {
  const t = q(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Ol(e, n);
  return t;
}
class Nl {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return il(ie(this._object), this._key);
  }
}
function Ol(e, t, n) {
  const s = e[t];
  return $e(s) ? s : new Nl(e, t, n);
}
var Hr;
class Bl {
  constructor(t, n, s, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Hr] = !1),
      (this._dirty = !0),
      (this.effect = new Ys(t, () => {
        this._dirty || ((this._dirty = !0), Or(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = ie(this);
    return (
      Nr(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
Hr = "__v_isReadonly";
function Fl(e, t, n = !1) {
  let s, o;
  const r = J(e);
  return (
    r ? ((s = e), (o = Ke)) : ((s = e.get), (o = e.set)),
    new Bl(s, o, r || !o, n)
  );
}
function ht(e, t, n, s) {
  let o;
  try {
    o = s ? e(...s) : e();
  } catch (r) {
    Jn(r, t, n);
  }
  return o;
}
function Re(e, t, n, s) {
  if (J(e)) {
    const r = ht(e, t, n, s);
    return (
      r &&
        yr(r) &&
        r.catch((i) => {
          Jn(i, t, n);
        }),
      r
    );
  }
  const o = [];
  for (let r = 0; r < e.length; r++) o.push(Re(e[r], t, n, s));
  return o;
}
function Jn(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy,
      l = n;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, i, l) === !1) return;
      }
      r = r.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      ht(a, null, 10, [e, i, l]);
      return;
    }
  }
  Hl(e, n, o, s);
}
function Hl(e, t, n, s = !0) {
  console.error(e);
}
let dn = !1,
  Ss = !1;
const Se = [];
let Qe = 0;
const Ut = [];
let nt = null,
  Pt = 0;
const Rr = Promise.resolve();
let no = null;
function so(e) {
  const t = no || Rr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rl(e) {
  let t = Qe + 1,
    n = Se.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    hn(Se[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function oo(e) {
  (!Se.length || !Se.includes(e, dn && e.allowRecurse ? Qe + 1 : Qe)) &&
    (e.id == null ? Se.push(e) : Se.splice(Rl(e.id), 0, e), Dr());
}
function Dr() {
  !dn && !Ss && ((Ss = !0), (no = Rr.then(Ur)));
}
function Dl(e) {
  const t = Se.indexOf(e);
  t > Qe && Se.splice(t, 1);
}
function Ul(e) {
  q(e)
    ? Ut.push(...e)
    : (!nt || !nt.includes(e, e.allowRecurse ? Pt + 1 : Pt)) && Ut.push(e),
    Dr();
}
function Ao(e, t = dn ? Qe + 1 : 0) {
  for (; t < Se.length; t++) {
    const n = Se[t];
    n && n.pre && (Se.splice(t, 1), t--, n());
  }
}
function Fn(e) {
  if (Ut.length) {
    const t = [...new Set(Ut)];
    if (((Ut.length = 0), nt)) {
      nt.push(...t);
      return;
    }
    for (nt = t, nt.sort((n, s) => hn(n) - hn(s)), Pt = 0; Pt < nt.length; Pt++)
      nt[Pt]();
    (nt = null), (Pt = 0);
  }
}
const hn = (e) => (e.id == null ? 1 / 0 : e.id),
  jl = (e, t) => {
    const n = hn(e) - hn(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Ur(e) {
  (Ss = !1), (dn = !0), Se.sort(jl);
  const t = Ke;
  try {
    for (Qe = 0; Qe < Se.length; Qe++) {
      const n = Se[Qe];
      n && n.active !== !1 && ht(n, null, 14);
    }
  } finally {
    (Qe = 0),
      (Se.length = 0),
      Fn(),
      (dn = !1),
      (no = null),
      (Se.length || Ut.length) && Ur();
  }
}
function zl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ve;
  let o = n;
  const r = t.startsWith("update:"),
    i = r && t.slice(7);
  if (i && i in s) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: v } = s[d] || ve;
    v && (o = n.map((k) => (we(k) ? k.trim() : k))), p && (o = n.map($s));
  }
  let l,
    a = s[(l = hs(t))] || s[(l = hs(Je(t)))];
  !a && r && (a = s[(l = hs(Mt(t)))]), a && Re(a, e, 6, o);
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Re(u, e, 6, o);
  }
}
function jr(e, t, n = !1) {
  const s = t.emitsCache,
    o = s.get(e);
  if (o !== void 0) return o;
  const r = e.emits;
  let i = {},
    l = !1;
  if (!J(e)) {
    const a = (u) => {
      const d = jr(u, t, !0);
      d && ((l = !0), Pe(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !r && !l
    ? (ge(e) && s.set(e, null), null)
    : (q(r) ? r.forEach((a) => (i[a] = null)) : Pe(i, r),
      ge(e) && s.set(e, i),
      i);
}
function Zn(e, t) {
  return !e || !bn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      re(e, t[0].toLowerCase() + t.slice(1)) || re(e, Mt(t)) || re(e, t));
}
let ke = null,
  es = null;
function Hn(e) {
  const t = ke;
  return (ke = e), (es = (e && e.type.__scopeId) || null), t;
}
function Ze(e) {
  es = e;
}
function et() {
  es = null;
}
function A(e, t = ke, n) {
  if (!t || e._n) return e;
  const s = (...o) => {
    s._d && Uo(-1);
    const r = Hn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Hn(r), s._d && Uo(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function _s(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    props: r,
    propsOptions: [i],
    slots: l,
    attrs: a,
    emit: u,
    render: d,
    renderCache: p,
    data: v,
    setupState: k,
    ctx: H,
    inheritAttrs: N,
  } = e;
  let X, b;
  const V = Hn(e);
  try {
    if (n.shapeFlag & 4) {
      const Y = o || s;
      (X = Ue(d.call(Y, Y, p, r, k, v, H))), (b = a);
    } else {
      const Y = t;
      (X = Ue(
        Y.length > 1 ? Y(r, { attrs: a, slots: l, emit: u }) : Y(r, null)
      )),
        (b = t.props ? a : Kl(a));
    }
  } catch (Y) {
    (ln.length = 0), Jn(Y, e, 1), (X = E(Oe));
  }
  let I = X;
  if (b && N !== !1) {
    const Y = Object.keys(b),
      { shapeFlag: te } = I;
    Y.length && te & 7 && (i && Y.some(zs) && (b = ql(b, i)), (I = pt(I, b)));
  }
  return (
    n.dirs && ((I = pt(I)), (I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (I.transition = n.transition),
    (X = I),
    Hn(V),
    X
  );
}
const Kl = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || bn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  ql = (e, t) => {
    const n = {};
    for (const s in e) (!zs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Wl(e, t, n) {
  const { props: s, children: o, component: r } = e,
    { props: i, children: l, patchFlag: a } = t,
    u = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? Mo(s, i, u) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const v = d[p];
        if (i[v] !== s[v] && !Zn(u, v)) return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? Mo(s, i, u)
        : !0
      : !!i;
  return !1;
}
function Mo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !Zn(n, r)) return !0;
  }
  return !1;
}
function Gl({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Yl = (e) => e.__isSuspense;
function zr(e, t) {
  t && t.pendingBranch
    ? q(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ul(e);
}
function jt(e, t) {
  if (ye) {
    let n = ye.provides;
    const s = ye.parent && ye.parent.provides;
    s === n && (n = ye.provides = Object.create(s)), (n[e] = t);
  }
}
function qe(e, t, n = !1) {
  const s = ye || ke;
  if (s) {
    const o =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && J(t) ? t.call(s.proxy) : t;
  }
}
function At(e, t) {
  return ts(e, null, t);
}
function Kr(e, t) {
  return ts(e, null, { flush: "post" });
}
const Tn = {};
function Xe(e, t, n) {
  return ts(e, t, n);
}
function ts(
  e,
  t,
  { immediate: n, deep: s, flush: o, onTrack: r, onTrigger: i } = ve
) {
  const l = $r() === (ye == null ? void 0 : ye.scope) ? ye : null;
  let a,
    u = !1,
    d = !1;
  if (
    ($e(e)
      ? ((a = () => e.value), (u = Bn(e)))
      : Dt(e)
      ? ((a = () => e), (s = !0))
      : q(e)
      ? ((d = !0),
        (u = e.some((I) => Dt(I) || Bn(I))),
        (a = () =>
          e.map((I) => {
            if ($e(I)) return I.value;
            if (Dt(I)) return Vt(I);
            if (J(I)) return ht(I, l, 2);
          })))
      : J(e)
      ? t
        ? (a = () => ht(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return p && p(), Re(e, l, 3, [v]);
          })
      : (a = Ke),
    t && s)
  ) {
    const I = a;
    a = () => Vt(I());
  }
  let p,
    v = (I) => {
      p = b.onStop = () => {
        ht(I, l, 4);
      };
    },
    k;
  if (vn)
    if (
      ((v = Ke),
      t ? n && Re(t, l, 3, [a(), d ? [] : void 0, v]) : a(),
      o === "sync")
    ) {
      const I = Da();
      k = I.__watcherHandles || (I.__watcherHandles = []);
    } else return Ke;
  let H = d ? new Array(e.length).fill(Tn) : Tn;
  const N = () => {
    if (b.active)
      if (t) {
        const I = b.run();
        (s || u || (d ? I.some((Y, te) => un(Y, H[te])) : un(I, H))) &&
          (p && p(),
          Re(t, l, 3, [I, H === Tn ? void 0 : d && H[0] === Tn ? [] : H, v]),
          (H = I));
      } else b.run();
  };
  N.allowRecurse = !!t;
  let X;
  o === "sync"
    ? (X = N)
    : o === "post"
    ? (X = () => Le(N, l && l.suspense))
    : ((N.pre = !0), l && (N.id = l.uid), (X = () => oo(N)));
  const b = new Ys(a, X);
  t
    ? n
      ? N()
      : (H = b.run())
    : o === "post"
    ? Le(b.run.bind(b), l && l.suspense)
    : b.run();
  const V = () => {
    b.stop(), l && l.scope && Ks(l.scope.effects, b);
  };
  return k && k.push(V), V;
}
function Ql(e, t, n) {
  const s = this.proxy,
    o = we(e) ? (e.includes(".") ? qr(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  J(t) ? (r = t) : ((r = t.handler), (n = t));
  const i = ye;
  Qt(this);
  const l = ts(o, r.bind(s), n);
  return i ? Qt(i) : Lt(), l;
}
function qr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++) s = s[n[o]];
    return s;
  };
}
function Vt(e, t) {
  if (!ge(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), $e(e))) Vt(e.value, t);
  else if (q(e)) for (let n = 0; n < e.length; n++) Vt(e[n], t);
  else if (br(e) || Rt(e))
    e.forEach((n) => {
      Vt(n, t);
    });
  else if (xr(e)) for (const n in e) Vt(e[n], t);
  return e;
}
function Xl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Be(() => {
      e.isMounted = !0;
    }),
    Xr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Fe = [Function, Array],
  Jl = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Fe,
      onEnter: Fe,
      onAfterEnter: Fe,
      onEnterCancelled: Fe,
      onBeforeLeave: Fe,
      onLeave: Fe,
      onAfterLeave: Fe,
      onLeaveCancelled: Fe,
      onBeforeAppear: Fe,
      onAppear: Fe,
      onAfterAppear: Fe,
      onAppearCancelled: Fe,
    },
    setup(e, { slots: t }) {
      const n = rs(),
        s = Xl();
      let o;
      return () => {
        const r = t.default && Yr(t.default(), !0);
        if (!r || !r.length) return;
        let i = r[0];
        if (r.length > 1) {
          for (const N of r)
            if (N.type !== Oe) {
              i = N;
              break;
            }
        }
        const l = ie(e),
          { mode: a } = l;
        if (s.isLeaving) return ps(i);
        const u = Io(i);
        if (!u) return ps(i);
        const d = Ts(u, l, s, n);
        Vs(u, d);
        const p = n.subTree,
          v = p && Io(p);
        let k = !1;
        const { getTransitionKey: H } = u.type;
        if (H) {
          const N = H();
          o === void 0 ? (o = N) : N !== o && ((o = N), (k = !0));
        }
        if (v && v.type !== Oe && (!Ct(u, v) || k)) {
          const N = Ts(v, l, s, n);
          if ((Vs(v, N), a === "out-in"))
            return (
              (s.isLeaving = !0),
              (N.afterLeave = () => {
                (s.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              ps(i)
            );
          a === "in-out" &&
            u.type !== Oe &&
            (N.delayLeave = (X, b, V) => {
              const I = Gr(s, v);
              (I[String(v.key)] = v),
                (X._leaveCb = () => {
                  b(), (X._leaveCb = void 0), delete d.delayedLeave;
                }),
                (d.delayedLeave = V);
            });
        }
        return i;
      };
    },
  },
  Wr = Jl;
function Gr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function Ts(e, t, n, s) {
  const {
      appear: o,
      mode: r,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: u,
      onEnterCancelled: d,
      onBeforeLeave: p,
      onLeave: v,
      onAfterLeave: k,
      onLeaveCancelled: H,
      onBeforeAppear: N,
      onAppear: X,
      onAfterAppear: b,
      onAppearCancelled: V,
    } = t,
    I = String(e.key),
    Y = Gr(n, e),
    te = (M, ee) => {
      M && Re(M, s, 9, ee);
    },
    he = (M, ee) => {
      const Q = ee[1];
      te(M, ee),
        q(M) ? M.every((le) => le.length <= 1) && Q() : M.length <= 1 && Q();
    },
    oe = {
      mode: r,
      persisted: i,
      beforeEnter(M) {
        let ee = l;
        if (!n.isMounted)
          if (o) ee = N || l;
          else return;
        M._leaveCb && M._leaveCb(!0);
        const Q = Y[I];
        Q && Ct(e, Q) && Q.el._leaveCb && Q.el._leaveCb(), te(ee, [M]);
      },
      enter(M) {
        let ee = a,
          Q = u,
          le = d;
        if (!n.isMounted)
          if (o) (ee = X || a), (Q = b || u), (le = V || d);
          else return;
        let O = !1;
        const ne = (M._enterCb = (D) => {
          O ||
            ((O = !0),
            D ? te(le, [M]) : te(Q, [M]),
            oe.delayedLeave && oe.delayedLeave(),
            (M._enterCb = void 0));
        });
        ee ? he(ee, [M, ne]) : ne();
      },
      leave(M, ee) {
        const Q = String(e.key);
        if ((M._enterCb && M._enterCb(!0), n.isUnmounting)) return ee();
        te(p, [M]);
        let le = !1;
        const O = (M._leaveCb = (ne) => {
          le ||
            ((le = !0),
            ee(),
            ne ? te(H, [M]) : te(k, [M]),
            (M._leaveCb = void 0),
            Y[Q] === e && delete Y[Q]);
        });
        (Y[Q] = e), v ? he(v, [M, O]) : O();
      },
      clone(M) {
        return Ts(M, t, n, s);
      },
    };
  return oe;
}
function ps(e) {
  if (ns(e)) return (e = pt(e)), (e.children = null), e;
}
function Io(e) {
  return ns(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Vs(e, t) {
  e.shapeFlag & 6 && e.component
    ? Vs(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Yr(e, t = !1, n) {
  let s = [],
    o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === Z
      ? (i.patchFlag & 128 && o++, (s = s.concat(Yr(i.children, t, l))))
      : (t || i.type !== Oe) && s.push(l != null ? pt(i, { key: l }) : i);
  }
  if (o > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
function R(e) {
  return J(e) ? { setup: e, name: e.name } : e;
}
const zt = (e) => !!e.type.__asyncLoader,
  ns = (e) => e.type.__isKeepAlive;
function Zl(e, t) {
  Qr(e, "a", t);
}
function ea(e, t) {
  Qr(e, "da", t);
}
function Qr(e, t, n = ye) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((ss(t, s, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      ns(o.parent.vnode) && ta(s, t, n, o), (o = o.parent);
  }
}
function ta(e, t, n, s) {
  const o = ss(t, e, s, !0);
  vt(() => {
    Ks(s[t], o);
  }, n);
}
function ss(e, t, n = ye, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Xt(), Qt(n);
          const l = Re(t, n, e, i);
          return Lt(), Jt(), l;
        });
    return s ? o.unshift(r) : o.push(r), r;
  }
}
const ot =
    (e) =>
    (t, n = ye) =>
      (!vn || e === "sp") && ss(e, (...s) => t(...s), n),
  na = ot("bm"),
  Be = ot("m"),
  sa = ot("bu"),
  ro = ot("u"),
  Xr = ot("bum"),
  vt = ot("um"),
  oa = ot("sp"),
  ra = ot("rtg"),
  ia = ot("rtc");
function la(e, t = ye) {
  ss("ec", e, t);
}
function C1(e, t) {
  const n = ke;
  if (n === null) return e;
  const s = is(n) || n.proxy,
    o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, l, a, u = ve] = t[r];
    i &&
      (J(i) && (i = { mounted: i, updated: i }),
      i.deep && Vt(l),
      o.push({
        dir: i,
        instance: s,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: u,
      }));
  }
  return e;
}
function Ye(e, t, n, s) {
  const o = e.dirs,
    r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (Xt(), Re(a, n, 8, [e.el, l, e, t]), Jt());
  }
}
const io = "components";
function It(e, t) {
  return Zr(io, e, !0, t) || e;
}
const Jr = Symbol();
function _n(e) {
  return we(e) ? Zr(io, e, !1) || e : e || Jr;
}
function Zr(e, t, n = !0, s = !1) {
  const o = ke || ye;
  if (o) {
    const r = o.type;
    if (e === io) {
      const l = Oa(r, !1);
      if (l && (l === t || l === Je(t) || l === Yn(Je(t)))) return r;
    }
    const i = No(o[e] || r[e], t) || No(o.appContext[e], t);
    return !i && s ? r : i;
  }
}
function No(e, t) {
  return e && (e[t] || e[Je(t)] || e[Yn(Je(t))]);
}
function Ee(e, t, n, s) {
  let o;
  const r = n && n[s];
  if (q(e) || we(e)) {
    o = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      o[i] = t(e[i], i, void 0, r && r[i]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, r && r[i]);
  } else if (ge(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (i, l) => t(i, l, void 0, r && r[l]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const u = i[l];
        o[l] = t(e[u], u, l, r && r[l]);
      }
    }
  else o = [];
  return n && (n[s] = o), o;
}
function S(e, t, n = {}, s, o) {
  if (ke.isCE || (ke.parent && zt(ke.parent) && ke.parent.isCE))
    return t !== "default" && (n.name = t), E("slot", n, s && s());
  let r = e[t];
  r && r._c && (r._d = !1), h();
  const i = r && ei(r(n)),
    l = W(
      Z,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (s ? s() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    l
  );
}
function ei(e) {
  return e.some((t) =>
    Un(t) ? !(t.type === Oe || (t.type === Z && !ei(t.children))) : !0
  )
    ? e
    : null;
}
const Es = (e) => (e ? (fi(e) ? is(e) || e.proxy : Es(e.parent)) : null),
  rn = Pe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Es(e.parent),
    $root: (e) => Es(e.root),
    $emit: (e) => e.emit,
    $options: (e) => lo(e),
    $forceUpdate: (e) => e.f || (e.f = () => oo(e.update)),
    $nextTick: (e) => e.n || (e.n = so.bind(e.proxy)),
    $watch: (e) => Ql.bind(e),
  }),
  vs = (e, t) => e !== ve && !e.__isScriptSetup && re(e, t),
  aa = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: o,
        props: r,
        accessCache: i,
        type: l,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== "$") {
        const k = i[t];
        if (k !== void 0)
          switch (k) {
            case 1:
              return s[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (vs(s, t)) return (i[t] = 1), s[t];
          if (o !== ve && re(o, t)) return (i[t] = 2), o[t];
          if ((u = e.propsOptions[0]) && re(u, t)) return (i[t] = 3), r[t];
          if (n !== ve && re(n, t)) return (i[t] = 4), n[t];
          Ls && (i[t] = 0);
        }
      }
      const d = rn[t];
      let p, v;
      if (d) return t === "$attrs" && Ae(e, "get", t), d(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== ve && re(n, t)) return (i[t] = 4), n[t];
      if (((v = a.config.globalProperties), re(v, t))) return v[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: o, ctx: r } = e;
      return vs(o, t)
        ? ((o[t] = n), !0)
        : s !== ve && re(s, t)
        ? ((s[t] = n), !0)
        : re(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: o,
          propsOptions: r,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== ve && re(e, i)) ||
        vs(t, i) ||
        ((l = r[0]) && re(l, i)) ||
        re(s, i) ||
        re(rn, i) ||
        re(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : re(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Ls = !0;
function ca(e) {
  const t = lo(e),
    n = e.proxy,
    s = e.ctx;
  (Ls = !1), t.beforeCreate && Oo(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: u,
    created: d,
    beforeMount: p,
    mounted: v,
    beforeUpdate: k,
    updated: H,
    activated: N,
    deactivated: X,
    beforeDestroy: b,
    beforeUnmount: V,
    destroyed: I,
    unmounted: Y,
    render: te,
    renderTracked: he,
    renderTriggered: oe,
    errorCaptured: M,
    serverPrefetch: ee,
    expose: Q,
    inheritAttrs: le,
    components: O,
    directives: ne,
    filters: D,
  } = t;
  if ((u && ua(u, s, null, e.appContext.config.unwrapInjectedRef), i))
    for (const be in i) {
      const _e = i[be];
      J(_e) && (s[be] = _e.bind(n));
    }
  if (o) {
    const be = o.call(n, n);
    ge(be) && (e.data = Xn(be));
  }
  if (((Ls = !0), r))
    for (const be in r) {
      const _e = r[be],
        bt = J(_e) ? _e.bind(n, n) : J(_e.get) ? _e.get.bind(n, n) : Ke,
        wn = !J(_e) && J(_e.set) ? _e.set.bind(n) : Ke,
        yt = K({ get: bt, set: wn });
      Object.defineProperty(s, be, {
        enumerable: !0,
        configurable: !0,
        get: () => yt.value,
        set: (We) => (yt.value = We),
      });
    }
  if (l) for (const be in l) ti(l[be], s, n, be);
  if (a) {
    const be = J(a) ? a.call(n) : a;
    Reflect.ownKeys(be).forEach((_e) => {
      jt(_e, be[_e]);
    });
  }
  d && Oo(d, e, "c");
  function fe(be, _e) {
    q(_e) ? _e.forEach((bt) => be(bt.bind(n))) : _e && be(_e.bind(n));
  }
  if (
    (fe(na, p),
    fe(Be, v),
    fe(sa, k),
    fe(ro, H),
    fe(Zl, N),
    fe(ea, X),
    fe(la, M),
    fe(ia, he),
    fe(ra, oe),
    fe(Xr, V),
    fe(vt, Y),
    fe(oa, ee),
    q(Q))
  )
    if (Q.length) {
      const be = e.exposed || (e.exposed = {});
      Q.forEach((_e) => {
        Object.defineProperty(be, _e, {
          get: () => n[_e],
          set: (bt) => (n[_e] = bt),
        });
      });
    } else e.exposed || (e.exposed = {});
  te && e.render === Ke && (e.render = te),
    le != null && (e.inheritAttrs = le),
    O && (e.components = O),
    ne && (e.directives = ne);
}
function ua(e, t, n = Ke, s = !1) {
  q(e) && (e = As(e));
  for (const o in e) {
    const r = e[o];
    let i;
    ge(r)
      ? "default" in r
        ? (i = qe(r.from || o, r.default, !0))
        : (i = qe(r.from || o))
      : (i = qe(r)),
      $e(i) && s
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[o] = i);
  }
}
function Oo(e, t, n) {
  Re(q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ti(e, t, n, s) {
  const o = s.includes(".") ? qr(n, s) : () => n[s];
  if (we(e)) {
    const r = t[e];
    J(r) && Xe(o, r);
  } else if (J(e)) Xe(o, e.bind(n));
  else if (ge(e))
    if (q(e)) e.forEach((r) => ti(r, t, n, s));
    else {
      const r = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(r) && Xe(o, r, e);
    }
}
function lo(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: o,
      optionsCache: r,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = r.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !o.length && !n && !s
      ? (a = t)
      : ((a = {}), o.length && o.forEach((u) => Rn(a, u, i, !0)), Rn(a, t, i)),
    ge(t) && r.set(t, a),
    a
  );
}
function Rn(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Rn(e, r, n, !0), o && o.forEach((i) => Rn(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = fa[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const fa = {
  data: Bo,
  props: kt,
  emits: kt,
  methods: kt,
  computed: kt,
  beforeCreate: Ve,
  created: Ve,
  beforeMount: Ve,
  mounted: Ve,
  beforeUpdate: Ve,
  updated: Ve,
  beforeDestroy: Ve,
  beforeUnmount: Ve,
  destroyed: Ve,
  unmounted: Ve,
  activated: Ve,
  deactivated: Ve,
  errorCaptured: Ve,
  serverPrefetch: Ve,
  components: kt,
  directives: kt,
  watch: ha,
  provide: Bo,
  inject: da,
};
function Bo(e, t) {
  return t
    ? e
      ? function () {
          return Pe(
            J(e) ? e.call(this, this) : e,
            J(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function da(e, t) {
  return kt(As(e), As(t));
}
function As(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function kt(e, t) {
  return e ? Pe(Pe(Object.create(null), e), t) : t;
}
function ha(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(Object.create(null), e);
  for (const s in t) n[s] = Ve(e[s], t[s]);
  return n;
}
function _a(e, t, n, s = !1) {
  const o = {},
    r = {};
  Nn(r, os, 1), (e.propsDefaults = Object.create(null)), ni(e, t, o, r);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = s ? o : Ll(o)) : e.type.props ? (e.props = o) : (e.props = r),
    (e.attrs = r);
}
function pa(e, t, n, s) {
  const {
      props: o,
      attrs: r,
      vnode: { patchFlag: i },
    } = e,
    l = ie(o),
    [a] = e.propsOptions;
  let u = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        let v = d[p];
        if (Zn(e.emitsOptions, v)) continue;
        const k = t[v];
        if (a)
          if (re(r, v)) k !== r[v] && ((r[v] = k), (u = !0));
          else {
            const H = Je(v);
            o[H] = Ms(a, l, H, k, e, !1);
          }
        else k !== r[v] && ((r[v] = k), (u = !0));
      }
    }
  } else {
    ni(e, t, o, r) && (u = !0);
    let d;
    for (const p in l)
      (!t || (!re(t, p) && ((d = Mt(p)) === p || !re(t, d)))) &&
        (a
          ? n &&
            (n[p] !== void 0 || n[d] !== void 0) &&
            (o[p] = Ms(a, l, p, void 0, e, !0))
          : delete o[p]);
    if (r !== l)
      for (const p in r) (!t || !re(t, p)) && (delete r[p], (u = !0));
  }
  u && st(e, "set", "$attrs");
}
function ni(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let a in t) {
      if (sn(a)) continue;
      const u = t[a];
      let d;
      o && re(o, (d = Je(a)))
        ? !r || !r.includes(d)
          ? (n[d] = u)
          : ((l || (l = {}))[d] = u)
        : Zn(e.emitsOptions, a) ||
          ((!(a in s) || u !== s[a]) && ((s[a] = u), (i = !0)));
    }
  if (r) {
    const a = ie(n),
      u = l || ve;
    for (let d = 0; d < r.length; d++) {
      const p = r[d];
      n[p] = Ms(o, a, p, u[p], e, !re(u, p));
    }
  }
  return i;
}
function Ms(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = re(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && J(a)) {
        const { propsDefaults: u } = o;
        n in u ? (s = u[n]) : (Qt(o), (s = u[n] = a.call(null, t)), Lt());
      } else s = a;
    }
    i[0] &&
      (r && !l ? (s = !1) : i[1] && (s === "" || s === Mt(n)) && (s = !0));
  }
  return s;
}
function si(e, t, n = !1) {
  const s = t.propsCache,
    o = s.get(e);
  if (o) return o;
  const r = e.props,
    i = {},
    l = [];
  let a = !1;
  if (!J(e)) {
    const d = (p) => {
      a = !0;
      const [v, k] = si(p, t, !0);
      Pe(i, v), k && l.push(...k);
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!r && !a) return ge(e) && s.set(e, Ht), Ht;
  if (q(r))
    for (let d = 0; d < r.length; d++) {
      const p = Je(r[d]);
      Fo(p) && (i[p] = ve);
    }
  else if (r)
    for (const d in r) {
      const p = Je(d);
      if (Fo(p)) {
        const v = r[d],
          k = (i[p] = q(v) || J(v) ? { type: v } : Object.assign({}, v));
        if (k) {
          const H = Do(Boolean, k.type),
            N = Do(String, k.type);
          (k[0] = H > -1),
            (k[1] = N < 0 || H < N),
            (H > -1 || re(k, "default")) && l.push(p);
        }
      }
    }
  const u = [i, l];
  return ge(e) && s.set(e, u), u;
}
function Fo(e) {
  return e[0] !== "$";
}
function Ho(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ro(e, t) {
  return Ho(e) === Ho(t);
}
function Do(e, t) {
  return q(t) ? t.findIndex((n) => Ro(n, e)) : J(t) && Ro(t, e) ? 0 : -1;
}
const oi = (e) => e[0] === "_" || e === "$stable",
  ao = (e) => (q(e) ? e.map(Ue) : [Ue(e)]),
  va = (e, t, n) => {
    if (t._n) return t;
    const s = A((...o) => ao(t(...o)), n);
    return (s._c = !1), s;
  },
  ri = (e, t, n) => {
    const s = e._ctx;
    for (const o in e) {
      if (oi(o)) continue;
      const r = e[o];
      if (J(r)) t[o] = va(o, r, s);
      else if (r != null) {
        const i = ao(r);
        t[o] = () => i;
      }
    }
  },
  ii = (e, t) => {
    const n = ao(t);
    e.slots.default = () => n;
  },
  ma = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = ie(t)), Nn(t, "_", n)) : ri(t, (e.slots = {}));
    } else (e.slots = {}), t && ii(e, t);
    Nn(e.slots, os, 1);
  },
  ga = (e, t, n) => {
    const { vnode: s, slots: o } = e;
    let r = !0,
      i = ve;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (r = !1)
          : (Pe(o, t), !n && l === 1 && delete o._)
        : ((r = !t.$stable), ri(t, o)),
        (i = t);
    } else t && (ii(e, t), (i = { default: 1 }));
    if (r) for (const l in o) !oi(l) && !(l in i) && delete o[l];
  };
function li() {
  return {
    app: null,
    config: {
      isNativeTag: Wi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let ba = 0;
function ya(e, t) {
  return function (s, o = null) {
    J(s) || (s = Object.assign({}, s)), o != null && !ge(o) && (o = null);
    const r = li(),
      i = new Set();
    let l = !1;
    const a = (r.app = {
      _uid: ba++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Ua,
      get config() {
        return r.config;
      },
      set config(u) {},
      use(u, ...d) {
        return (
          i.has(u) ||
            (u && J(u.install)
              ? (i.add(u), u.install(a, ...d))
              : J(u) && (i.add(u), u(a, ...d))),
          a
        );
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), a;
      },
      component(u, d) {
        return d ? ((r.components[u] = d), a) : r.components[u];
      },
      directive(u, d) {
        return d ? ((r.directives[u] = d), a) : r.directives[u];
      },
      mount(u, d, p) {
        if (!l) {
          const v = E(s, o);
          return (
            (v.appContext = r),
            d && t ? t(v, u) : e(v, u, p),
            (l = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            is(v.component) || v.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, d) {
        return (r.provides[u] = d), a;
      },
    });
    return a;
  };
}
function Dn(e, t, n, s, o = !1) {
  if (q(e)) {
    e.forEach((v, k) => Dn(v, t && (q(t) ? t[k] : t), n, s, o));
    return;
  }
  if (zt(s) && !o) return;
  const r = s.shapeFlag & 4 ? is(s.component) || s.component.proxy : s.el,
    i = o ? null : r,
    { i: l, r: a } = e,
    u = t && t.r,
    d = l.refs === ve ? (l.refs = {}) : l.refs,
    p = l.setupState;
  if (
    (u != null &&
      u !== a &&
      (we(u)
        ? ((d[u] = null), re(p, u) && (p[u] = null))
        : $e(u) && (u.value = null)),
    J(a))
  )
    ht(a, l, 12, [i, d]);
  else {
    const v = we(a),
      k = $e(a);
    if (v || k) {
      const H = () => {
        if (e.f) {
          const N = v ? (re(p, a) ? p[a] : d[a]) : a.value;
          o
            ? q(N) && Ks(N, r)
            : q(N)
            ? N.includes(r) || N.push(r)
            : v
            ? ((d[a] = [r]), re(p, a) && (p[a] = d[a]))
            : ((a.value = [r]), e.k && (d[e.k] = a.value));
        } else
          v
            ? ((d[a] = i), re(p, a) && (p[a] = i))
            : k && ((a.value = i), e.k && (d[e.k] = i));
      };
      i ? ((H.id = -1), Le(H, n)) : H();
    }
  }
}
let lt = !1;
const Vn = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
  En = (e) => e.nodeType === 8;
function wa(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: o,
        nextSibling: r,
        parentNode: i,
        remove: l,
        insert: a,
        createComment: u,
      },
    } = e,
    d = (b, V) => {
      if (!V.hasChildNodes()) {
        n(null, b, V), Fn(), (V._vnode = b);
        return;
      }
      (lt = !1),
        p(V.firstChild, b, null, null, null),
        Fn(),
        (V._vnode = b),
        lt && console.error("Hydration completed but contains mismatches.");
    },
    p = (b, V, I, Y, te, he = !1) => {
      const oe = En(b) && b.data === "[",
        M = () => N(b, V, I, Y, te, oe),
        { type: ee, ref: Q, shapeFlag: le, patchFlag: O } = V;
      let ne = b.nodeType;
      (V.el = b), O === -2 && ((he = !1), (V.dynamicChildren = null));
      let D = null;
      switch (ee) {
        case Yt:
          ne !== 3
            ? V.children === ""
              ? (a((V.el = o("")), i(b), b), (D = b))
              : (D = M())
            : (b.data !== V.children && ((lt = !0), (b.data = V.children)),
              (D = r(b)));
          break;
        case Oe:
          ne !== 8 || oe ? (D = M()) : (D = r(b));
          break;
        case Kt:
          if ((oe && ((b = r(b)), (ne = b.nodeType)), ne === 1 || ne === 3)) {
            D = b;
            const Me = !V.children.length;
            for (let fe = 0; fe < V.staticCount; fe++)
              Me && (V.children += D.nodeType === 1 ? D.outerHTML : D.data),
                fe === V.staticCount - 1 && (V.anchor = D),
                (D = r(D));
            return oe ? r(D) : D;
          } else M();
          break;
        case Z:
          oe ? (D = H(b, V, I, Y, te, he)) : (D = M());
          break;
        default:
          if (le & 1)
            ne !== 1 || V.type.toLowerCase() !== b.tagName.toLowerCase()
              ? (D = M())
              : (D = v(b, V, I, Y, te, he));
          else if (le & 6) {
            V.slotScopeIds = te;
            const Me = i(b);
            if (
              (t(V, Me, null, I, Y, Vn(Me), he),
              (D = oe ? X(b) : r(b)),
              D && En(D) && D.data === "teleport end" && (D = r(D)),
              zt(V))
            ) {
              let fe;
              oe
                ? ((fe = E(Z)),
                  (fe.anchor = D ? D.previousSibling : Me.lastChild))
                : (fe = b.nodeType === 3 ? Te("") : E("div")),
                (fe.el = b),
                (V.component.subTree = fe);
            }
          } else
            le & 64
              ? ne !== 8
                ? (D = M())
                : (D = V.type.hydrate(b, V, I, Y, te, he, e, k))
              : le & 128 &&
                (D = V.type.hydrate(b, V, I, Y, Vn(i(b)), te, he, e, p));
      }
      return Q != null && Dn(Q, null, Y, V), D;
    },
    v = (b, V, I, Y, te, he) => {
      he = he || !!V.dynamicChildren;
      const { type: oe, props: M, patchFlag: ee, shapeFlag: Q, dirs: le } = V,
        O = (oe === "input" && le) || oe === "option";
      if (O || ee !== -1) {
        if ((le && Ye(V, null, I, "created"), M))
          if (O || !he || ee & 48)
            for (const D in M)
              ((O && D.endsWith("value")) || (bn(D) && !sn(D))) &&
                s(b, D, null, M[D], !1, void 0, I);
          else M.onClick && s(b, "onClick", null, M.onClick, !1, void 0, I);
        let ne;
        if (
          ((ne = M && M.onVnodeBeforeMount) && He(ne, I, V),
          le && Ye(V, null, I, "beforeMount"),
          ((ne = M && M.onVnodeMounted) || le) &&
            zr(() => {
              ne && He(ne, I, V), le && Ye(V, null, I, "mounted");
            }, Y),
          Q & 16 && !(M && (M.innerHTML || M.textContent)))
        ) {
          let D = k(b.firstChild, V, b, I, Y, te, he);
          for (; D; ) {
            lt = !0;
            const Me = D;
            (D = D.nextSibling), l(Me);
          }
        } else
          Q & 8 &&
            b.textContent !== V.children &&
            ((lt = !0), (b.textContent = V.children));
      }
      return b.nextSibling;
    },
    k = (b, V, I, Y, te, he, oe) => {
      oe = oe || !!V.dynamicChildren;
      const M = V.children,
        ee = M.length;
      for (let Q = 0; Q < ee; Q++) {
        const le = oe ? M[Q] : (M[Q] = Ue(M[Q]));
        if (b) b = p(b, le, Y, te, he, oe);
        else {
          if (le.type === Yt && !le.children) continue;
          (lt = !0), n(null, le, I, null, Y, te, Vn(I), he);
        }
      }
      return b;
    },
    H = (b, V, I, Y, te, he) => {
      const { slotScopeIds: oe } = V;
      oe && (te = te ? te.concat(oe) : oe);
      const M = i(b),
        ee = k(r(b), V, M, I, Y, te, he);
      return ee && En(ee) && ee.data === "]"
        ? r((V.anchor = ee))
        : ((lt = !0), a((V.anchor = u("]")), M, ee), ee);
    },
    N = (b, V, I, Y, te, he) => {
      if (((lt = !0), (V.el = null), he)) {
        const ee = X(b);
        for (;;) {
          const Q = r(b);
          if (Q && Q !== ee) l(Q);
          else break;
        }
      }
      const oe = r(b),
        M = i(b);
      return l(b), n(null, V, M, oe, I, Y, Vn(M), te), oe;
    },
    X = (b) => {
      let V = 0;
      for (; b; )
        if (
          ((b = r(b)), b && En(b) && (b.data === "[" && V++, b.data === "]"))
        ) {
          if (V === 0) return r(b);
          V--;
        }
      return b;
    };
  return [d, p];
}
const Le = zr;
function xa(e) {
  return $a(e, wa);
}
function $a(e, t) {
  const n = el();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: o,
      patchProp: r,
      createElement: i,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: d,
      parentNode: p,
      nextSibling: v,
      setScopeId: k = Ke,
      insertStaticContent: H,
    } = e,
    N = (
      c,
      f,
      m,
      x = null,
      w = null,
      C = null,
      L = !1,
      P = null,
      T = !!f.dynamicChildren
    ) => {
      if (c === f) return;
      c && !Ct(c, f) && ((x = xn(c)), We(c, w, C, !0), (c = null)),
        f.patchFlag === -2 && ((T = !1), (f.dynamicChildren = null));
      const { type: $, ref: j, shapeFlag: B } = f;
      switch ($) {
        case Yt:
          X(c, f, m, x);
          break;
        case Oe:
          b(c, f, m, x);
          break;
        case Kt:
          c == null && V(f, m, x, L);
          break;
        case Z:
          O(c, f, m, x, w, C, L, P, T);
          break;
        default:
          B & 1
            ? te(c, f, m, x, w, C, L, P, T)
            : B & 6
            ? ne(c, f, m, x, w, C, L, P, T)
            : (B & 64 || B & 128) && $.process(c, f, m, x, w, C, L, P, T, Ot);
      }
      j != null && w && Dn(j, c && c.ref, C, f || c, !f);
    },
    X = (c, f, m, x) => {
      if (c == null) s((f.el = l(f.children)), m, x);
      else {
        const w = (f.el = c.el);
        f.children !== c.children && u(w, f.children);
      }
    },
    b = (c, f, m, x) => {
      c == null ? s((f.el = a(f.children || "")), m, x) : (f.el = c.el);
    },
    V = (c, f, m, x) => {
      [c.el, c.anchor] = H(c.children, f, m, x, c.el, c.anchor);
    },
    I = ({ el: c, anchor: f }, m, x) => {
      let w;
      for (; c && c !== f; ) (w = v(c)), s(c, m, x), (c = w);
      s(f, m, x);
    },
    Y = ({ el: c, anchor: f }) => {
      let m;
      for (; c && c !== f; ) (m = v(c)), o(c), (c = m);
      o(f);
    },
    te = (c, f, m, x, w, C, L, P, T) => {
      (L = L || f.type === "svg"),
        c == null ? he(f, m, x, w, C, L, P, T) : ee(c, f, w, C, L, P, T);
    },
    he = (c, f, m, x, w, C, L, P) => {
      let T, $;
      const { type: j, props: B, shapeFlag: z, transition: G, dirs: se } = c;
      if (
        ((T = c.el = i(c.type, C, B && B.is, B)),
        z & 8
          ? d(T, c.children)
          : z & 16 &&
            M(c.children, T, null, x, w, C && j !== "foreignObject", L, P),
        se && Ye(c, null, x, "created"),
        oe(T, c, c.scopeId, L, x),
        B)
      ) {
        for (const de in B)
          de !== "value" &&
            !sn(de) &&
            r(T, de, null, B[de], C, c.children, x, w, tt);
        "value" in B && r(T, "value", null, B.value),
          ($ = B.onVnodeBeforeMount) && He($, x, c);
      }
      se && Ye(c, null, x, "beforeMount");
      const pe = (!w || (w && !w.pendingBranch)) && G && !G.persisted;
      pe && G.beforeEnter(T),
        s(T, f, m),
        (($ = B && B.onVnodeMounted) || pe || se) &&
          Le(() => {
            $ && He($, x, c), pe && G.enter(T), se && Ye(c, null, x, "mounted");
          }, w);
    },
    oe = (c, f, m, x, w) => {
      if ((m && k(c, m), x)) for (let C = 0; C < x.length; C++) k(c, x[C]);
      if (w) {
        let C = w.subTree;
        if (f === C) {
          const L = w.vnode;
          oe(c, L, L.scopeId, L.slotScopeIds, w.parent);
        }
      }
    },
    M = (c, f, m, x, w, C, L, P, T = 0) => {
      for (let $ = T; $ < c.length; $++) {
        const j = (c[$] = P ? ut(c[$]) : Ue(c[$]));
        N(null, j, f, m, x, w, C, L, P);
      }
    },
    ee = (c, f, m, x, w, C, L) => {
      const P = (f.el = c.el);
      let { patchFlag: T, dynamicChildren: $, dirs: j } = f;
      T |= c.patchFlag & 16;
      const B = c.props || ve,
        z = f.props || ve;
      let G;
      m && wt(m, !1),
        (G = z.onVnodeBeforeUpdate) && He(G, m, f, c),
        j && Ye(f, c, m, "beforeUpdate"),
        m && wt(m, !0);
      const se = w && f.type !== "foreignObject";
      if (
        ($
          ? Q(c.dynamicChildren, $, P, m, x, se, C)
          : L || _e(c, f, P, null, m, x, se, C, !1),
        T > 0)
      ) {
        if (T & 16) le(P, f, B, z, m, x, w);
        else if (
          (T & 2 && B.class !== z.class && r(P, "class", null, z.class, w),
          T & 4 && r(P, "style", B.style, z.style, w),
          T & 8)
        ) {
          const pe = f.dynamicProps;
          for (let de = 0; de < pe.length; de++) {
            const xe = pe[de],
              De = B[xe],
              Bt = z[xe];
            (Bt !== De || xe === "value") &&
              r(P, xe, De, Bt, w, c.children, m, x, tt);
          }
        }
        T & 1 && c.children !== f.children && d(P, f.children);
      } else !L && $ == null && le(P, f, B, z, m, x, w);
      ((G = z.onVnodeUpdated) || j) &&
        Le(() => {
          G && He(G, m, f, c), j && Ye(f, c, m, "updated");
        }, x);
    },
    Q = (c, f, m, x, w, C, L) => {
      for (let P = 0; P < f.length; P++) {
        const T = c[P],
          $ = f[P],
          j =
            T.el && (T.type === Z || !Ct(T, $) || T.shapeFlag & 70)
              ? p(T.el)
              : m;
        N(T, $, j, null, x, w, C, L, !0);
      }
    },
    le = (c, f, m, x, w, C, L) => {
      if (m !== x) {
        if (m !== ve)
          for (const P in m)
            !sn(P) && !(P in x) && r(c, P, m[P], null, L, f.children, w, C, tt);
        for (const P in x) {
          if (sn(P)) continue;
          const T = x[P],
            $ = m[P];
          T !== $ && P !== "value" && r(c, P, $, T, L, f.children, w, C, tt);
        }
        "value" in x && r(c, "value", m.value, x.value);
      }
    },
    O = (c, f, m, x, w, C, L, P, T) => {
      const $ = (f.el = c ? c.el : l("")),
        j = (f.anchor = c ? c.anchor : l(""));
      let { patchFlag: B, dynamicChildren: z, slotScopeIds: G } = f;
      G && (P = P ? P.concat(G) : G),
        c == null
          ? (s($, m, x), s(j, m, x), M(f.children, m, j, w, C, L, P, T))
          : B > 0 && B & 64 && z && c.dynamicChildren
          ? (Q(c.dynamicChildren, z, m, w, C, L, P),
            (f.key != null || (w && f === w.subTree)) && ai(c, f, !0))
          : _e(c, f, m, j, w, C, L, P, T);
    },
    ne = (c, f, m, x, w, C, L, P, T) => {
      (f.slotScopeIds = P),
        c == null
          ? f.shapeFlag & 512
            ? w.ctx.activate(f, m, x, L, T)
            : D(f, m, x, w, C, L, T)
          : Me(c, f, T);
    },
    D = (c, f, m, x, w, C, L) => {
      const P = (c.component = Aa(c, x, w));
      if ((ns(c) && (P.ctx.renderer = Ot), Ma(P), P.asyncDep)) {
        if ((w && w.registerDep(P, fe), !c.el)) {
          const T = (P.subTree = E(Oe));
          b(null, T, f, m);
        }
        return;
      }
      fe(P, c, f, m, w, C, L);
    },
    Me = (c, f, m) => {
      const x = (f.component = c.component);
      if (Wl(c, f, m))
        if (x.asyncDep && !x.asyncResolved) {
          be(x, f, m);
          return;
        } else (x.next = f), Dl(x.update), x.update();
      else (f.el = c.el), (x.vnode = f);
    },
    fe = (c, f, m, x, w, C, L) => {
      const P = () => {
          if (c.isMounted) {
            let { next: j, bu: B, u: z, parent: G, vnode: se } = c,
              pe = j,
              de;
            wt(c, !1),
              j ? ((j.el = se.el), be(c, j, L)) : (j = se),
              B && An(B),
              (de = j.props && j.props.onVnodeBeforeUpdate) && He(de, G, j, se),
              wt(c, !0);
            const xe = _s(c),
              De = c.subTree;
            (c.subTree = xe),
              N(De, xe, p(De.el), xn(De), c, w, C),
              (j.el = xe.el),
              pe === null && Gl(c, xe.el),
              z && Le(z, w),
              (de = j.props && j.props.onVnodeUpdated) &&
                Le(() => He(de, G, j, se), w);
          } else {
            let j;
            const { el: B, props: z } = f,
              { bm: G, m: se, parent: pe } = c,
              de = zt(f);
            if (
              (wt(c, !1),
              G && An(G),
              !de && (j = z && z.onVnodeBeforeMount) && He(j, pe, f),
              wt(c, !0),
              B && ds)
            ) {
              const xe = () => {
                (c.subTree = _s(c)), ds(B, c.subTree, c, w, null);
              };
              de
                ? f.type.__asyncLoader().then(() => !c.isUnmounted && xe())
                : xe();
            } else {
              const xe = (c.subTree = _s(c));
              N(null, xe, m, x, c, w, C), (f.el = xe.el);
            }
            if ((se && Le(se, w), !de && (j = z && z.onVnodeMounted))) {
              const xe = f;
              Le(() => He(j, pe, xe), w);
            }
            (f.shapeFlag & 256 ||
              (pe && zt(pe.vnode) && pe.vnode.shapeFlag & 256)) &&
              c.a &&
              Le(c.a, w),
              (c.isMounted = !0),
              (f = m = x = null);
          }
        },
        T = (c.effect = new Ys(P, () => oo($), c.scope)),
        $ = (c.update = () => T.run());
      ($.id = c.uid), wt(c, !0), $();
    },
    be = (c, f, m) => {
      f.component = c;
      const x = c.vnode.props;
      (c.vnode = f),
        (c.next = null),
        pa(c, f.props, x, m),
        ga(c, f.children, m),
        Xt(),
        Ao(),
        Jt();
    },
    _e = (c, f, m, x, w, C, L, P, T = !1) => {
      const $ = c && c.children,
        j = c ? c.shapeFlag : 0,
        B = f.children,
        { patchFlag: z, shapeFlag: G } = f;
      if (z > 0) {
        if (z & 128) {
          wn($, B, m, x, w, C, L, P, T);
          return;
        } else if (z & 256) {
          bt($, B, m, x, w, C, L, P, T);
          return;
        }
      }
      G & 8
        ? (j & 16 && tt($, w, C), B !== $ && d(m, B))
        : j & 16
        ? G & 16
          ? wn($, B, m, x, w, C, L, P, T)
          : tt($, w, C, !0)
        : (j & 8 && d(m, ""), G & 16 && M(B, m, x, w, C, L, P, T));
    },
    bt = (c, f, m, x, w, C, L, P, T) => {
      (c = c || Ht), (f = f || Ht);
      const $ = c.length,
        j = f.length,
        B = Math.min($, j);
      let z;
      for (z = 0; z < B; z++) {
        const G = (f[z] = T ? ut(f[z]) : Ue(f[z]));
        N(c[z], G, m, null, w, C, L, P, T);
      }
      $ > j ? tt(c, w, C, !0, !1, B) : M(f, m, x, w, C, L, P, T, B);
    },
    wn = (c, f, m, x, w, C, L, P, T) => {
      let $ = 0;
      const j = f.length;
      let B = c.length - 1,
        z = j - 1;
      for (; $ <= B && $ <= z; ) {
        const G = c[$],
          se = (f[$] = T ? ut(f[$]) : Ue(f[$]));
        if (Ct(G, se)) N(G, se, m, null, w, C, L, P, T);
        else break;
        $++;
      }
      for (; $ <= B && $ <= z; ) {
        const G = c[B],
          se = (f[z] = T ? ut(f[z]) : Ue(f[z]));
        if (Ct(G, se)) N(G, se, m, null, w, C, L, P, T);
        else break;
        B--, z--;
      }
      if ($ > B) {
        if ($ <= z) {
          const G = z + 1,
            se = G < j ? f[G].el : x;
          for (; $ <= z; )
            N(null, (f[$] = T ? ut(f[$]) : Ue(f[$])), m, se, w, C, L, P, T),
              $++;
        }
      } else if ($ > z) for (; $ <= B; ) We(c[$], w, C, !0), $++;
      else {
        const G = $,
          se = $,
          pe = new Map();
        for ($ = se; $ <= z; $++) {
          const Ie = (f[$] = T ? ut(f[$]) : Ue(f[$]));
          Ie.key != null && pe.set(Ie.key, $);
        }
        let de,
          xe = 0;
        const De = z - se + 1;
        let Bt = !1,
          wo = 0;
        const Zt = new Array(De);
        for ($ = 0; $ < De; $++) Zt[$] = 0;
        for ($ = G; $ <= B; $++) {
          const Ie = c[$];
          if (xe >= De) {
            We(Ie, w, C, !0);
            continue;
          }
          let Ge;
          if (Ie.key != null) Ge = pe.get(Ie.key);
          else
            for (de = se; de <= z; de++)
              if (Zt[de - se] === 0 && Ct(Ie, f[de])) {
                Ge = de;
                break;
              }
          Ge === void 0
            ? We(Ie, w, C, !0)
            : ((Zt[Ge - se] = $ + 1),
              Ge >= wo ? (wo = Ge) : (Bt = !0),
              N(Ie, f[Ge], m, null, w, C, L, P, T),
              xe++);
        }
        const xo = Bt ? ka(Zt) : Ht;
        for (de = xo.length - 1, $ = De - 1; $ >= 0; $--) {
          const Ie = se + $,
            Ge = f[Ie],
            $o = Ie + 1 < j ? f[Ie + 1].el : x;
          Zt[$] === 0
            ? N(null, Ge, m, $o, w, C, L, P, T)
            : Bt && (de < 0 || $ !== xo[de] ? yt(Ge, m, $o, 2) : de--);
        }
      }
    },
    yt = (c, f, m, x, w = null) => {
      const { el: C, type: L, transition: P, children: T, shapeFlag: $ } = c;
      if ($ & 6) {
        yt(c.component.subTree, f, m, x);
        return;
      }
      if ($ & 128) {
        c.suspense.move(f, m, x);
        return;
      }
      if ($ & 64) {
        L.move(c, f, m, Ot);
        return;
      }
      if (L === Z) {
        s(C, f, m);
        for (let B = 0; B < T.length; B++) yt(T[B], f, m, x);
        s(c.anchor, f, m);
        return;
      }
      if (L === Kt) {
        I(c, f, m);
        return;
      }
      if (x !== 2 && $ & 1 && P)
        if (x === 0) P.beforeEnter(C), s(C, f, m), Le(() => P.enter(C), w);
        else {
          const { leave: B, delayLeave: z, afterLeave: G } = P,
            se = () => s(C, f, m),
            pe = () => {
              B(C, () => {
                se(), G && G();
              });
            };
          z ? z(C, se, pe) : pe();
        }
      else s(C, f, m);
    },
    We = (c, f, m, x = !1, w = !1) => {
      const {
        type: C,
        props: L,
        ref: P,
        children: T,
        dynamicChildren: $,
        shapeFlag: j,
        patchFlag: B,
        dirs: z,
      } = c;
      if ((P != null && Dn(P, null, m, c, !0), j & 256)) {
        f.ctx.deactivate(c);
        return;
      }
      const G = j & 1 && z,
        se = !zt(c);
      let pe;
      if ((se && (pe = L && L.onVnodeBeforeUnmount) && He(pe, f, c), j & 6))
        Ri(c.component, m, x);
      else {
        if (j & 128) {
          c.suspense.unmount(m, x);
          return;
        }
        G && Ye(c, null, f, "beforeUnmount"),
          j & 64
            ? c.type.remove(c, f, m, w, Ot, x)
            : $ && (C !== Z || (B > 0 && B & 64))
            ? tt($, f, m, !1, !0)
            : ((C === Z && B & 384) || (!w && j & 16)) && tt(T, f, m),
          x && bo(c);
      }
      ((se && (pe = L && L.onVnodeUnmounted)) || G) &&
        Le(() => {
          pe && He(pe, f, c), G && Ye(c, null, f, "unmounted");
        }, m);
    },
    bo = (c) => {
      const { type: f, el: m, anchor: x, transition: w } = c;
      if (f === Z) {
        Hi(m, x);
        return;
      }
      if (f === Kt) {
        Y(c);
        return;
      }
      const C = () => {
        o(m), w && !w.persisted && w.afterLeave && w.afterLeave();
      };
      if (c.shapeFlag & 1 && w && !w.persisted) {
        const { leave: L, delayLeave: P } = w,
          T = () => L(m, C);
        P ? P(c.el, C, T) : T();
      } else C();
    },
    Hi = (c, f) => {
      let m;
      for (; c !== f; ) (m = v(c)), o(c), (c = m);
      o(f);
    },
    Ri = (c, f, m) => {
      const { bum: x, scope: w, update: C, subTree: L, um: P } = c;
      x && An(x),
        w.stop(),
        C && ((C.active = !1), We(L, c, f, m)),
        P && Le(P, f),
        Le(() => {
          c.isUnmounted = !0;
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve());
    },
    tt = (c, f, m, x = !1, w = !1, C = 0) => {
      for (let L = C; L < c.length; L++) We(c[L], f, m, x, w);
    },
    xn = (c) =>
      c.shapeFlag & 6
        ? xn(c.component.subTree)
        : c.shapeFlag & 128
        ? c.suspense.next()
        : v(c.anchor || c.el),
    yo = (c, f, m) => {
      c == null
        ? f._vnode && We(f._vnode, null, null, !0)
        : N(f._vnode || null, c, f, null, null, null, m),
        Ao(),
        Fn(),
        (f._vnode = c);
    },
    Ot = {
      p: N,
      um: We,
      m: yt,
      r: bo,
      mt: D,
      mc: M,
      pc: _e,
      pbc: Q,
      n: xn,
      o: e,
    };
  let fs, ds;
  return (
    t && ([fs, ds] = t(Ot)), { render: yo, hydrate: fs, createApp: ya(yo, fs) }
  );
}
function wt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ai(e, t, n = !1) {
  const s = e.children,
    o = t.children;
  if (q(s) && q(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = o[r] = ut(o[r])), (l.el = i.el)),
        n || ai(i, l)),
        l.type === Yt && (l.el = i.el);
    }
}
function ka(e) {
  const t = e.slice(),
    n = [0];
  let s, o, r, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (((o = n[n.length - 1]), e[o] < u)) {
        (t[s] = o), n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        (l = (r + i) >> 1), e[n[l]] < u ? (r = l + 1) : (i = l);
      u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; ) (n[r] = i), (i = t[i]);
  return n;
}
const Pa = (e) => e.__isTeleport,
  Z = Symbol(void 0),
  Yt = Symbol(void 0),
  Oe = Symbol(void 0),
  Kt = Symbol(void 0),
  ln = [];
let ze = null;
function h(e = !1) {
  ln.push((ze = e ? null : []));
}
function Ca() {
  ln.pop(), (ze = ln[ln.length - 1] || null);
}
let pn = 1;
function Uo(e) {
  pn += e;
}
function ci(e) {
  return (
    (e.dynamicChildren = pn > 0 ? ze || Ht : null),
    Ca(),
    pn > 0 && ze && ze.push(e),
    e
  );
}
function g(e, t, n, s, o, r) {
  return ci(y(e, t, n, s, o, r, !0));
}
function W(e, t, n, s, o) {
  return ci(E(e, t, n, s, o, !0));
}
function Un(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const os = "__vInternal",
  ui = ({ key: e }) => e ?? null,
  Mn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? we(e) || $e(e) || J(e)
        ? { i: ke, r: e, k: t, f: !!n }
        : e
      : null;
function y(
  e,
  t = null,
  n = null,
  s = 0,
  o = null,
  r = e === Z ? 0 : 1,
  i = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ui(t),
    ref: t && Mn(t),
    scopeId: es,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ke,
  };
  return (
    l
      ? (co(a, n), r & 128 && e.normalize(a))
      : n && (a.shapeFlag |= we(n) ? 8 : 16),
    pn > 0 &&
      !i &&
      ze &&
      (a.patchFlag > 0 || r & 6) &&
      a.patchFlag !== 32 &&
      ze.push(a),
    a
  );
}
const E = Sa;
function Sa(e, t = null, n = null, s = 0, o = null, r = !1) {
  if (((!e || e === Jr) && (e = Oe), Un(e))) {
    const l = pt(e, t, !0);
    return (
      n && co(l, n),
      pn > 0 &&
        !r &&
        ze &&
        (l.shapeFlag & 6 ? (ze[ze.indexOf(e)] = l) : ze.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Ba(e) && (e = e.__vccOpts), t)) {
    t = Ta(t);
    let { class: l, style: a } = t;
    l && !we(l) && (t.class = me(l)),
      ge(a) && (Ir(a) && !q(a) && (a = Pe({}, a)), (t.style = js(a)));
  }
  const i = we(e) ? 1 : Yl(e) ? 128 : Pa(e) ? 64 : ge(e) ? 4 : J(e) ? 2 : 0;
  return y(e, t, n, s, o, i, r, !0);
}
function Ta(e) {
  return e ? (Ir(e) || os in e ? Pe({}, e) : e) : null;
}
function pt(e, t, n = !1) {
  const { props: s, ref: o, patchFlag: r, children: i } = e,
    l = t ? In(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ui(l),
    ref:
      t && t.ref ? (n && o ? (q(o) ? o.concat(Mn(t)) : [o, Mn(t)]) : Mn(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Z ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && pt(e.ssContent),
    ssFallback: e.ssFallback && pt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Te(e = " ", t = 0) {
  return E(Yt, null, e, t);
}
function Va(e, t) {
  const n = E(Kt, null, e);
  return (n.staticCount = t), n;
}
function U(e = "", t = !1) {
  return t ? (h(), W(Oe, null, e)) : E(Oe, null, e);
}
function Ue(e) {
  return e == null || typeof e == "boolean"
    ? E(Oe)
    : q(e)
    ? E(Z, null, e.slice())
    : typeof e == "object"
    ? ut(e)
    : E(Yt, null, String(e));
}
function ut(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : pt(e);
}
function co(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (q(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), co(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(os in t)
        ? (t._ctx = ke)
        : o === 3 &&
          ke &&
          (ke.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    J(t)
      ? ((t = { default: t, _ctx: ke }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Te(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function In(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = me([t.class, s.class]));
      else if (o === "style") t.style = js([t.style, s.style]);
      else if (bn(o)) {
        const r = t[o],
          i = s[o];
        i &&
          r !== i &&
          !(q(r) && r.includes(i)) &&
          (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function He(e, t, n, s = null) {
  Re(e, t, 7, [n, s]);
}
const Ea = li();
let La = 0;
function Aa(e, t, n) {
  const s = e.type,
    o = (t ? t.appContext : e.appContext) || Ea,
    r = {
      uid: La++,
      vnode: e,
      type: s,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new tl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: si(s, o),
      emitsOptions: jr(s, o),
      emit: null,
      emitted: null,
      propsDefaults: ve,
      inheritAttrs: s.inheritAttrs,
      ctx: ve,
      data: ve,
      props: ve,
      attrs: ve,
      slots: ve,
      refs: ve,
      setupState: ve,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = zl.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let ye = null;
const rs = () => ye || ke,
  Qt = (e) => {
    (ye = e), e.scope.on();
  },
  Lt = () => {
    ye && ye.scope.off(), (ye = null);
  };
function fi(e) {
  return e.vnode.shapeFlag & 4;
}
let vn = !1;
function Ma(e, t = !1) {
  vn = t;
  const { props: n, children: s } = e.vnode,
    o = fi(e);
  _a(e, n, o, t), ma(e, s);
  const r = o ? Ia(e, t) : void 0;
  return (vn = !1), r;
}
function Ia(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = on(new Proxy(e.ctx, aa)));
  const { setup: s } = n;
  if (s) {
    const o = (e.setupContext = s.length > 1 ? hi(e) : null);
    Qt(e), Xt();
    const r = ht(s, e, 0, [e.props, o]);
    if ((Jt(), Lt(), yr(r))) {
      if ((r.then(Lt, Lt), t))
        return r
          .then((i) => {
            jo(e, i, t);
          })
          .catch((i) => {
            Jn(i, e, 0);
          });
      e.asyncDep = r;
    } else jo(e, r, t);
  } else di(e, t);
}
function jo(e, t, n) {
  J(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ge(t) && (e.setupState = Fr(t)),
    di(e, n);
}
let zo;
function di(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && zo && !s.render) {
      const o = s.template || lo(e).template;
      if (o) {
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = s,
          u = Pe(Pe({ isCustomElement: r, delimiters: l }, i), a);
        s.render = zo(o, u);
      }
    }
    e.render = s.render || Ke;
  }
  Qt(e), Xt(), ca(e), Jt(), Lt();
}
function Na(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ae(e, "get", "$attrs"), t[n];
    },
  });
}
function hi(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Na(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function is(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Fr(on(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in rn) return rn[n](e);
        },
        has(t, n) {
          return n in t || n in rn;
        },
      }))
    );
}
function Oa(e, t = !0) {
  return J(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Ba(e) {
  return J(e) && "__vccOpts" in e;
}
const K = (e, t) => Fl(e, t, vn);
function Fa() {
  return Ha().slots;
}
function Ha() {
  const e = rs();
  return e.setupContext || (e.setupContext = hi(e));
}
function jn(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? ge(t) && !q(t)
      ? Un(t)
        ? E(e, null, [t])
        : E(e, t)
      : E(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Un(n) && (n = [n]),
      E(e, t, n));
}
const Ra = Symbol(""),
  Da = () => qe(Ra),
  Ua = "3.2.47",
  ja = "http://www.w3.org/2000/svg",
  St = typeof document < "u" ? document : null,
  Ko = St && St.createElement("template"),
  za = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const o = t
        ? St.createElementNS(ja, e)
        : St.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          o.setAttribute("multiple", s.multiple),
        o
      );
    },
    createText: (e) => St.createTextNode(e),
    createComment: (e) => St.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => St.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, o, r) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === r || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === r || !(o = o.nextSibling));

        );
      else {
        Ko.innerHTML = s ? `<svg>${e}</svg>` : e;
        const l = Ko.content;
        if (s) {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Ka(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function qa(e, t, n) {
  const s = e.style,
    o = we(n);
  if (n && !o) {
    if (t && !we(t)) for (const r in t) n[r] == null && Is(s, r, "");
    for (const r in n) Is(s, r, n[r]);
  } else {
    const r = s.display;
    o ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (s.display = r);
  }
}
const qo = /\s*!important$/;
function Is(e, t, n) {
  if (q(n)) n.forEach((s) => Is(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Wa(e, t);
    qo.test(n)
      ? e.setProperty(Mt(s), n.replace(qo, ""), "important")
      : (e[s] = n);
  }
}
const Wo = ["Webkit", "Moz", "ms"],
  ms = {};
function Wa(e, t) {
  const n = ms[t];
  if (n) return n;
  let s = Je(t);
  if (s !== "filter" && s in e) return (ms[t] = s);
  s = Yn(s);
  for (let o = 0; o < Wo.length; o++) {
    const r = Wo[o] + s;
    if (r in e) return (ms[t] = r);
  }
  return t;
}
const Go = "http://www.w3.org/1999/xlink";
function Ga(e, t, n, s, o) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Go, t.slice(6, t.length))
      : e.setAttributeNS(Go, t, n);
  else {
    const r = qi(t);
    n == null || (r && !mr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : n);
  }
}
function Ya(e, t, n, s, o, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, o, r), (e[t] = n ?? "");
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const a = n ?? "";
    (e.value !== a || e.tagName === "OPTION") && (e.value = a),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = mr(n))
      : n == null && a === "string"
      ? ((n = ""), (l = !0))
      : a === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function Ft(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Qa(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Xa(e, t, n, s, o = null) {
  const r = e._vei || (e._vei = {}),
    i = r[t];
  if (s && i) i.value = s;
  else {
    const [l, a] = Ja(t);
    if (s) {
      const u = (r[t] = tc(s, o));
      Ft(e, l, u, a);
    } else i && (Qa(e, l, i, a), (r[t] = void 0));
  }
}
const Yo = /(?:Once|Passive|Capture)$/;
function Ja(e) {
  let t;
  if (Yo.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Yo)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Mt(e.slice(2)), t];
}
let gs = 0;
const Za = Promise.resolve(),
  ec = () => gs || (Za.then(() => (gs = 0)), (gs = Date.now()));
function tc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Re(nc(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = ec()), n;
}
function nc(e, t) {
  if (q(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (o) => !o._stopped && s && s(o))
    );
  } else return t;
}
const Qo = /^on[a-z]/,
  sc = (e, t, n, s, o = !1, r, i, l, a) => {
    t === "class"
      ? Ka(e, s, o)
      : t === "style"
      ? qa(e, n, s)
      : bn(t)
      ? zs(t) || Xa(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : oc(e, t, s, o)
        )
      ? Ya(e, t, s, r, i, l, a)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Ga(e, t, s, o));
  };
function oc(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Qo.test(t) && J(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Qo.test(t) && we(n))
    ? !1
    : t in e;
}
function rc(e) {
  const t = rs();
  if (!t) return;
  const n = (t.ut = (o = e(t.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
      ).forEach((r) => Os(r, o));
    }),
    s = () => {
      const o = e(t.proxy);
      Ns(t.subTree, o), n(o);
    };
  Kr(s),
    Be(() => {
      const o = new MutationObserver(s);
      o.observe(t.subTree.el.parentNode, { childList: !0 }),
        vt(() => o.disconnect());
    });
}
function Ns(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          Ns(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Os(e.el, t);
  else if (e.type === Z) e.children.forEach((n) => Ns(n, t));
  else if (e.type === Kt) {
    let { el: n, anchor: s } = e;
    for (; n && (Os(n, t), n !== s); ) n = n.nextSibling;
  }
}
function Os(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const s in t) n.setProperty(`--${s}`, t[s]);
  }
}
const at = "transition",
  en = "animation",
  ls = (e, { slots: t }) => jn(Wr, ic(e), t);
ls.displayName = "Transition";
const _i = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
ls.props = Pe({}, Wr.props, _i);
const xt = (e, t = []) => {
    q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Xo = (e) => (e ? (q(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ic(e) {
  const t = {};
  for (const O in e) O in _i || (t[O] = e[O]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: o,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = r,
      appearActiveClass: u = i,
      appearToClass: d = l,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: v = `${n}-leave-active`,
      leaveToClass: k = `${n}-leave-to`,
    } = e,
    H = lc(o),
    N = H && H[0],
    X = H && H[1],
    {
      onBeforeEnter: b,
      onEnter: V,
      onEnterCancelled: I,
      onLeave: Y,
      onLeaveCancelled: te,
      onBeforeAppear: he = b,
      onAppear: oe = V,
      onAppearCancelled: M = I,
    } = t,
    ee = (O, ne, D) => {
      $t(O, ne ? d : l), $t(O, ne ? u : i), D && D();
    },
    Q = (O, ne) => {
      (O._isLeaving = !1), $t(O, p), $t(O, k), $t(O, v), ne && ne();
    },
    le = (O) => (ne, D) => {
      const Me = O ? oe : V,
        fe = () => ee(ne, O, D);
      xt(Me, [ne, fe]),
        Jo(() => {
          $t(ne, O ? a : r), ct(ne, O ? d : l), Xo(Me) || Zo(ne, s, N, fe);
        });
    };
  return Pe(t, {
    onBeforeEnter(O) {
      xt(b, [O]), ct(O, r), ct(O, i);
    },
    onBeforeAppear(O) {
      xt(he, [O]), ct(O, a), ct(O, u);
    },
    onEnter: le(!1),
    onAppear: le(!0),
    onLeave(O, ne) {
      O._isLeaving = !0;
      const D = () => Q(O, ne);
      ct(O, p),
        uc(),
        ct(O, v),
        Jo(() => {
          O._isLeaving && ($t(O, p), ct(O, k), Xo(Y) || Zo(O, s, X, D));
        }),
        xt(Y, [O, D]);
    },
    onEnterCancelled(O) {
      ee(O, !1), xt(I, [O]);
    },
    onAppearCancelled(O) {
      ee(O, !0), xt(M, [O]);
    },
    onLeaveCancelled(O) {
      Q(O), xt(te, [O]);
    },
  });
}
function lc(e) {
  if (e == null) return null;
  if (ge(e)) return [bs(e.enter), bs(e.leave)];
  {
    const t = bs(e);
    return [t, t];
  }
}
function bs(e) {
  return Zi(e);
}
function ct(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function $t(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Jo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ac = 0;
function Zo(e, t, n, s) {
  const o = (e._endId = ++ac),
    r = () => {
      o === e._endId && s();
    };
  if (n) return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = cc(e, t);
  if (!i) return s();
  const u = i + "end";
  let d = 0;
  const p = () => {
      e.removeEventListener(u, v), r();
    },
    v = (k) => {
      k.target === e && ++d >= a && p();
    };
  setTimeout(() => {
    d < a && p();
  }, l + 1),
    e.addEventListener(u, v);
}
function cc(e, t) {
  const n = window.getComputedStyle(e),
    s = (H) => (n[H] || "").split(", "),
    o = s(`${at}Delay`),
    r = s(`${at}Duration`),
    i = er(o, r),
    l = s(`${en}Delay`),
    a = s(`${en}Duration`),
    u = er(l, a);
  let d = null,
    p = 0,
    v = 0;
  t === at
    ? i > 0 && ((d = at), (p = i), (v = r.length))
    : t === en
    ? u > 0 && ((d = en), (p = u), (v = a.length))
    : ((p = Math.max(i, u)),
      (d = p > 0 ? (i > u ? at : en) : null),
      (v = d ? (d === at ? r.length : a.length) : 0));
  const k =
    d === at && /\b(transform|all)(,|$)/.test(s(`${at}Property`).toString());
  return { type: d, timeout: p, propCount: v, hasTransform: k };
}
function er(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => tr(n) + tr(e[s])));
}
function tr(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function uc() {
  return document.body.offsetHeight;
}
const nr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return q(t) ? (n) => An(t, n) : t;
};
function fc(e) {
  e.target.composing = !0;
}
function sr(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const S1 = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
      e._assign = nr(o);
      const r = s || (o.props && o.props.type === "number");
      Ft(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), r && (l = $s(l)), e._assign(l);
      }),
        n &&
          Ft(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (Ft(e, "compositionstart", fc),
          Ft(e, "compositionend", sr),
          Ft(e, "change", sr));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: s, number: o } },
      r
    ) {
      if (
        ((e._assign = nr(r)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== "range" &&
            (n ||
              (s && e.value.trim() === t) ||
              ((o || e.type === "number") && $s(e.value) === t))))
      )
        return;
      const i = t ?? "";
      e.value !== i && (e.value = i);
    },
  },
  dc = ["ctrl", "shift", "alt", "meta"],
  hc = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => dc.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  _c =
    (e, t) =>
    (n, ...s) => {
      for (let o = 0; o < t.length; o++) {
        const r = hc[t[o]];
        if (r && r(n, t)) return;
      }
      return e(n, ...s);
    },
  pc = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  T1 = (e, t) => (n) => {
    if (!("key" in n)) return;
    const s = Mt(n.key);
    if (t.some((o) => o === s || pc[o] === s)) return e(n);
  },
  V1 = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : tn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), tn(e, !0), s.enter(e))
            : s.leave(e, () => {
                tn(e, !1);
              })
          : tn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      tn(e, t);
    },
  };
function tn(e, t) {
  e.style.display = t ? e._vod : "none";
}
const vc = Pe({ patchProp: sc }, za);
let ys,
  or = !1;
function mc() {
  return (ys = or ? ys : xa(vc)), (or = !0), ys;
}
const gc = (...e) => {
  const t = mc().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const o = bc(s);
      if (o) return n(o, !0, o instanceof SVGElement);
    }),
    t
  );
};
function bc(e) {
  return we(e) ? document.querySelector(e) : e;
}
const F = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, o] of t) n[s] = o;
    return n;
  },
  yc = "modulepreload",
  wc = function (e) {
    return "/datepicker-vue/" + e;
  },
  rr = {},
  xc = function (t, n, s) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(
      n.map((r) => {
        if (((r = wc(r)), r in rr)) return;
        rr[r] = !0;
        const i = r.endsWith(".css"),
          l = i ? '[rel="stylesheet"]' : "";
        if (s)
          for (let d = o.length - 1; d >= 0; d--) {
            const p = o[d];
            if (p.href === r && (!i || p.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${r}"]${l}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = i ? "stylesheet" : yc),
          i || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = r),
          document.head.appendChild(u),
          i)
        )
          return new Promise((d, p) => {
            u.addEventListener("load", d),
              u.addEventListener("error", () =>
                p(new Error(`Unable to preload CSS for ${r}`))
              );
          });
      })
    ).then(() => t());
  };
const $c = R({
  __name: "VPBadge",
  props: { text: null, type: null },
  setup(e) {
    return (t, n) => (
      h(),
      g(
        "span",
        { class: me(["VPBadge", e.type ?? "tip"]) },
        [S(t.$slots, "default", {}, () => [Te(ae(e.text), 1)], !0)],
        2
      )
    );
  },
});
const kc = F($c, [["__scopeId", "data-v-350d3852"]]),
  Pc = JSON.parse(
    '{"lang":"en-US","dir":"ltr","title":"Datepicker vue","description":"Vue.js 3 date picker component","base":"/datepicker-vue/","head":[],"appearance":true,"themeConfig":{"repo":"rameshjs/datepicker-vue","docsRepo":"rameshjs/datepicker-vue","docsDir":"docs","docsBranch":"master","editLinks":true,"nav":[{"text":"Guide","link":"/getting-started"}],"sidebar":[{"text":"Getting Started","items":[{"text":"Installation","link":"/installation"}]},{"text":"Props","items":[{"text":"General configuration","link":"/general-configuration"},{"text":"Modes","link":"/modes"},{"text":"Formatting","link":"/formatting"}]},{"text":"Slots","items":[{"text":"Trigger","link":"/trigger"},{"text":"Input","link":"/input"}]},{"text":"Customization","items":[{"text":"css","link":"/css"}]}]},"locales":{},"scrollOffset":90,"cleanUrls":false}'
  ),
  as = /^[a-z]+:/i,
  Cc = /^pathname:\/\//,
  ir = "vitepress-theme-appearance",
  pi = /#.*$/,
  Sc = /(index)?\.(md|html)$/,
  Ce = typeof document < "u",
  vi = {
    relativePath: "",
    title: "404",
    description: "Not Found",
    headers: [],
    frontmatter: { sidebar: !1, layout: "page" },
    lastUpdated: 0,
  };
function Nt(e, t, n = !1) {
  if (t === void 0) return !1;
  if (((e = lr(`/${e}`)), n)) return new RegExp(t).test(e);
  if (lr(t) !== e) return !1;
  const s = t.match(pi);
  return s ? (Ce ? location.hash : "") === s[0] : !0;
}
function lr(e) {
  return decodeURI(e).replace(pi, "").replace(Sc, "");
}
function mi(e) {
  return as.test(e);
}
function Tc(e, t) {
  var s, o, r, i, l, a, u;
  const n =
    Object.keys(e.locales).find(
      (d) => d !== "root" && !mi(d) && Nt(t, `/${d}/`, !0)
    ) || "root";
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((o = e.locales[n]) == null ? void 0 : o.dir) ?? e.dir,
    title: ((r = e.locales[n]) == null ? void 0 : r.title) ?? e.title,
    titleTemplate:
      ((i = e.locales[n]) == null ? void 0 : i.titleTemplate) ??
      e.titleTemplate,
    description:
      ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: bi(e.head, ((a = e.locales[n]) == null ? void 0 : a.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...((u = e.locales[n]) == null ? void 0 : u.themeConfig),
    },
  });
}
function gi(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate;
  if (typeof s == "string" && s.includes(":title"))
    return s.replace(/:title/g, n);
  const o = Vc(e.title, s);
  return `${n}${o}`;
}
function Vc(e, t) {
  return t === !1
    ? ""
    : t === !0 || t === void 0
    ? ` | ${e}`
    : e === t
    ? ""
    : ` | ${t}`;
}
function Ec(e, t) {
  const [n, s] = t;
  if (n !== "meta") return !1;
  const o = Object.entries(s)[0];
  return o == null ? !1 : e.some(([r, i]) => r === n && i[o[0]] === o[1]);
}
function bi(e, t) {
  return [...e.filter((n) => !Ec(t, n)), ...t];
}
const Lc = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  Ac = /^[a-z]:/i;
function ar(e) {
  const t = Ac.exec(e),
    n = t ? t[0] : "";
  return (
    n +
    e
      .slice(n.length)
      .replace(Lc, "_")
      .replace(/(^|\/)_+(?=[^/]*$)/, "$1")
  );
}
const yi = Symbol(),
  ft = Al(Pc);
function Mc(e) {
  const t = K(() => Tc(ft.value, e.data.relativePath));
  return {
    site: t,
    theme: K(() => t.value.themeConfig),
    page: K(() => e.data),
    frontmatter: K(() => e.data.frontmatter),
    lang: K(() => t.value.lang),
    dir: K(() => t.value.dir),
    localeIndex: K(() => t.value.localeIndex || "root"),
    title: K(() => gi(t.value, e.data)),
    description: K(() => e.data.description || t.value.description),
    isDark: ce(!1),
  };
}
function wi() {
  const e = qe(yi);
  if (!e) throw new Error("vitepress data not properly injected in app");
  return e;
}
function Ic(e, t) {
  return `${e}${t}`.replace(/\/+/g, "/");
}
function mn(e) {
  return as.test(e) || e.startsWith(".") ? e : Ic(ft.value.base, e);
}
function xi(e) {
  let t = e.replace(/\.html$/, "");
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, "/index")), Ce)) {
    const n = "/datepicker-vue/";
    t = ar(t.slice(n.length).replace(/\//g, "_") || "index") + ".md";
    let s = __VP_HASH_MAP__[t.toLowerCase()];
    s ||
      ((t = t.endsWith("_index.md")
        ? t.slice(0, -9) + ".md"
        : t.slice(0, -3) + "_index.md"),
      (s = __VP_HASH_MAP__[t.toLowerCase()])),
      (t = `${n}assets/${t}.${s}.js`);
  } else t = `./${ar(t.slice(1).replace(/\//g, "_"))}.md.js`;
  return t;
}
const $i = Symbol(),
  cr = "http://a.com",
  Nc = () => ({ path: "/", component: null, data: vi });
function Oc(e, t) {
  const n = Xn(Nc()),
    s = { route: n, go: o };
  async function o(l = Ce ? location.href : "/") {
    var u, d;
    await ((u = s.onBeforeRouteChange) == null ? void 0 : u.call(s, l));
    const a = new URL(l, cr);
    ft.value.cleanUrls ||
      (!a.pathname.endsWith("/") &&
        !a.pathname.endsWith(".html") &&
        ((a.pathname += ".html"), (l = a.pathname + a.search + a.hash))),
      Ce &&
        l !== location.href &&
        (history.replaceState(
          { scrollPosition: window.scrollY },
          document.title
        ),
        history.pushState(null, "", l)),
      await i(l),
      await ((d = s.onAfterRouteChanged) == null ? void 0 : d.call(s, l));
  }
  let r = null;
  async function i(l, a = 0, u = !1) {
    const d = new URL(l, cr),
      p = (r = d.pathname);
    try {
      let v = await e(p);
      if (r === p) {
        r = null;
        const { default: k, __pageData: H } = v;
        if (!k) throw new Error(`Invalid route component: ${k}`);
        (n.path = Ce ? p : mn(p)),
          (n.component = on(k)),
          (n.data = on(H)),
          Ce &&
            so(() => {
              let N =
                ft.value.base +
                H.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
              if (
                (!ft.value.cleanUrls && !N.endsWith("/") && (N += ".html"),
                N !== d.pathname &&
                  ((d.pathname = N),
                  (l = N + d.search + d.hash),
                  history.replaceState(null, "", l)),
                d.hash && !a)
              ) {
                let X = null;
                try {
                  X = document.querySelector(decodeURIComponent(d.hash));
                } catch (b) {
                  console.warn(b);
                }
                if (X) {
                  ur(X, d.hash);
                  return;
                }
              }
              window.scrollTo(0, a);
            });
      }
    } catch (v) {
      if (
        (!/fetch/.test(v.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(v),
        !u)
      )
        try {
          const k = await fetch(ft.value.base + "hashmap.json");
          (window.__VP_HASH_MAP__ = await k.json()), await i(l, a, !0);
          return;
        } catch {}
      r === p &&
        ((r = null),
        (n.path = Ce ? p : mn(p)),
        (n.component = t ? on(t) : null),
        (n.data = vi));
    }
  }
  return (
    Ce &&
      (window.addEventListener(
        "click",
        (l) => {
          if (l.target.closest("button")) return;
          const u = l.target.closest("a");
          if (
            u &&
            !u.closest(".vp-raw") &&
            (u instanceof SVGElement || !u.download)
          ) {
            const { target: d } = u,
              {
                href: p,
                origin: v,
                pathname: k,
                hash: H,
                search: N,
              } = new URL(
                u.href instanceof SVGAnimatedString ? u.href.animVal : u.href,
                u.baseURI
              ),
              X = window.location,
              b = k.match(/\.\w+$/);
            !l.ctrlKey &&
              !l.shiftKey &&
              !l.altKey &&
              !l.metaKey &&
              d !== "_blank" &&
              v === X.origin &&
              !(b && b[0] !== ".html") &&
              (l.preventDefault(),
              k === X.pathname && N === X.search
                ? H &&
                  H !== X.hash &&
                  (history.pushState(null, "", H),
                  window.dispatchEvent(new Event("hashchange")),
                  ur(u, H, u.classList.contains("header-anchor")))
                : o(p));
          }
        },
        { capture: !0 }
      ),
      window.addEventListener("popstate", (l) => {
        i(location.href, (l.state && l.state.scrollPosition) || 0);
      }),
      window.addEventListener("hashchange", (l) => {
        l.preventDefault();
      })),
    s
  );
}
function Bc() {
  const e = qe($i);
  if (!e) throw new Error("useRouter() is called without provider.");
  return e;
}
function mt() {
  return Bc().route;
}
function ur(e, t, n = !1) {
  let s = null;
  try {
    s = e.classList.contains("header-anchor")
      ? e
      : document.querySelector(decodeURIComponent(t));
  } catch (o) {
    console.warn(o);
  }
  if (s) {
    let o = ft.value.scrollOffset;
    typeof o == "string" &&
      (o = document.querySelector(o).getBoundingClientRect().bottom + 24);
    const r = parseInt(window.getComputedStyle(s).paddingTop, 10),
      i = window.scrollY + s.getBoundingClientRect().top - o + r;
    !n || Math.abs(i - window.scrollY) > window.innerHeight
      ? window.scrollTo(0, i)
      : window.scrollTo({ left: 0, top: i, behavior: "smooth" });
  }
}
const Fc = R({
    name: "VitePressContent",
    props: { onContentUpdated: Function },
    setup(e) {
      const t = mt();
      return (
        ro(() => {
          var n;
          (n = e.onContentUpdated) == null || n.call(e);
        }),
        () =>
          jn("div", { style: { position: "relative" } }, [
            t.component ? jn(t.component) : null,
          ])
      );
    },
  }),
  ue = wi;
var fr;
const ki = typeof window < "u",
  Hc = (e) => typeof e == "string",
  Rc = () => {};
ki &&
  (fr = window == null ? void 0 : window.navigator) != null &&
  fr.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Pi(e) {
  return typeof e == "function" ? e() : _(e);
}
function Dc(e) {
  return e;
}
function Ci(e) {
  return $r() ? (sl(e), !0) : !1;
}
function Uc(e) {
  return typeof e == "function" ? K(e) : ce(e);
}
function jc(e, t = !0) {
  rs() ? Be(e) : t ? e() : so(e);
}
function zc(e) {
  var t;
  const n = Pi(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const uo = ki ? window : void 0;
function Kc(...e) {
  let t, n, s, o;
  if (
    (Hc(e[0]) || Array.isArray(e[0])
      ? (([n, s, o] = e), (t = uo))
      : ([t, n, s, o] = e),
    !t)
  )
    return Rc;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [],
    i = () => {
      r.forEach((d) => d()), (r.length = 0);
    },
    l = (d, p, v, k) => (
      d.addEventListener(p, v, k), () => d.removeEventListener(p, v, k)
    ),
    a = Xe(
      () => [zc(t), Pi(o)],
      ([d, p]) => {
        i(), d && r.push(...n.flatMap((v) => s.map((k) => l(d, v, k, p))));
      },
      { immediate: !0, flush: "post" }
    ),
    u = () => {
      a(), i();
    };
  return Ci(u), u;
}
function qc(e, t = !1) {
  const n = ce(),
    s = () => (n.value = Boolean(e()));
  return s(), jc(s, t), n;
}
function Bs(e, t = {}) {
  const { window: n = uo } = t,
    s = qc(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const r = ce(!1),
    i = () => {
      o &&
        ("removeEventListener" in o
          ? o.removeEventListener("change", l)
          : o.removeListener(l));
    },
    l = () => {
      s.value &&
        (i(),
        (o = n.matchMedia(Uc(e).value)),
        (r.value = o.matches),
        "addEventListener" in o
          ? o.addEventListener("change", l)
          : o.addListener(l));
    };
  return At(l), Ci(() => i()), r;
}
const Fs =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Hs = "__vueuse_ssr_handlers__";
Fs[Hs] = Fs[Hs] || {};
Fs[Hs];
var dr;
(function (e) {
  (e.UP = "UP"),
    (e.RIGHT = "RIGHT"),
    (e.DOWN = "DOWN"),
    (e.LEFT = "LEFT"),
    (e.NONE = "NONE");
})(dr || (dr = {}));
var Wc = Object.defineProperty,
  hr = Object.getOwnPropertySymbols,
  Gc = Object.prototype.hasOwnProperty,
  Yc = Object.prototype.propertyIsEnumerable,
  _r = (e, t, n) =>
    t in e
      ? Wc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Qc = (e, t) => {
    for (var n in t || (t = {})) Gc.call(t, n) && _r(e, n, t[n]);
    if (hr) for (var n of hr(t)) Yc.call(t, n) && _r(e, n, t[n]);
    return e;
  };
const Xc = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
Qc({ linear: Dc }, Xc);
function Jc({ window: e = uo } = {}) {
  if (!e) return { x: ce(0), y: ce(0) };
  const t = ce(e.scrollX),
    n = ce(e.scrollY);
  return (
    Kc(
      e,
      "scroll",
      () => {
        (t.value = e.scrollX), (n.value = e.scrollY);
      },
      { capture: !1, passive: !0 }
    ),
    { x: t, y: n }
  );
}
function Zc(e, t) {
  let n,
    s = !1;
  return () => {
    n && clearTimeout(n),
      s
        ? (n = setTimeout(e, t))
        : (e(),
          (s = !0),
          setTimeout(() => {
            s = !1;
          }, t));
  };
}
function Rs(e) {
  return /^\//.test(e) ? e : `/${e}`;
}
function gn(e) {
  if (mi(e)) return e.replace(Cc, "");
  const { site: t } = ue(),
    { pathname: n, search: s, hash: o } = new URL(e, "http://example.com"),
    r =
      n.endsWith("/") || n.endsWith(".html")
        ? e
        : e.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${n.replace(
              /(\.md)?$/,
              t.value.cleanUrls ? "" : ".html"
            )}${s}${o}`
          );
  return mn(r);
}
function Si(e, t) {
  if (Array.isArray(e)) return e;
  if (e == null) return [];
  t = Rs(t);
  const n = Object.keys(e)
    .sort((s, o) => o.split("/").length - s.split("/").length)
    .find((s) => t.startsWith(Rs(s)));
  return n ? e[n] : [];
}
function eu(e) {
  const t = [];
  let n = 0;
  for (const s in e) {
    const o = e[s];
    if (o.items) {
      n = t.push(o);
      continue;
    }
    t[n] || t.push({ items: [] }), t[n].items.push(o);
  }
  return t;
}
function tu(e) {
  const t = [];
  function n(s) {
    for (const o of s)
      o.text && o.link && t.push({ text: o.text, link: o.link }),
        o.items && n(o.items);
  }
  return n(e), t;
}
function Ds(e, t) {
  return Array.isArray(t)
    ? t.some((n) => Ds(e, n))
    : Nt(e, t.link)
    ? !0
    : t.items
    ? Ds(e, t.items)
    : !1;
}
function rt() {
  const e = mt(),
    { theme: t, frontmatter: n } = ue(),
    s = Bs("(min-width: 960px)"),
    o = ce(!1),
    r = K(() => {
      const k = t.value.sidebar,
        H = e.data.relativePath;
      return k ? Si(k, H) : [];
    }),
    i = K(
      () =>
        n.value.sidebar !== !1 &&
        r.value.length > 0 &&
        n.value.layout !== "home"
    ),
    l = K(() =>
      n.value.layout === "home"
        ? !1
        : n.value.aside != null
        ? !!n.value.aside
        : t.value.aside !== !1
    ),
    a = K(() => i.value && s.value),
    u = K(() => (i.value ? eu(r.value) : []));
  function d() {
    o.value = !0;
  }
  function p() {
    o.value = !1;
  }
  function v() {
    o.value ? p() : d();
  }
  return {
    isOpen: o,
    sidebar: r,
    sidebarGroups: u,
    hasSidebar: i,
    hasAside: l,
    isSidebarEnabled: a,
    open: d,
    close: p,
    toggle: v,
  };
}
function nu(e, t) {
  let n;
  At(() => {
    n = e.value ? document.activeElement : void 0;
  }),
    Be(() => {
      window.addEventListener("keyup", s);
    }),
    vt(() => {
      window.removeEventListener("keyup", s);
    });
  function s(o) {
    o.key === "Escape" && e.value && (t(), n == null || n.focus());
  }
}
function su(e) {
  const { page: t } = ue(),
    n = ce(!1),
    s = K(() => e.value.collapsed != null),
    o = K(() => !!e.value.link),
    r = K(() => Nt(t.value.relativePath, e.value.link)),
    i = K(() =>
      r.value
        ? !0
        : e.value.items
        ? Ds(t.value.relativePath, e.value.items)
        : !1
    ),
    l = K(() => !!(e.value.items && e.value.items.length));
  At(() => {
    n.value = !!(s.value && e.value.collapsed);
  }),
    At(() => {
      (r.value || i.value) && (n.value = !1);
    });
  function a() {
    s.value && (n.value = !n.value);
  }
  return {
    collapsed: n,
    collapsible: s,
    isLink: o,
    isActiveLink: r,
    hasActiveLink: i,
    hasChildren: l,
    toggle: a,
  };
}
const ou = R({
  __name: "VPSkipLink",
  setup(e) {
    const t = mt(),
      n = ce();
    Xe(
      () => t.path,
      () => n.value.focus()
    );
    function s({ target: o }) {
      const r = document.querySelector(o.hash);
      if (r) {
        const i = () => {
          r.removeAttribute("tabindex"), r.removeEventListener("blur", i);
        };
        r.setAttribute("tabindex", "-1"),
          r.addEventListener("blur", i),
          r.focus(),
          window.scrollTo(0, 0);
      }
    }
    return (o, r) => (
      h(),
      g(
        Z,
        null,
        [
          y(
            "span",
            { ref_key: "backToTop", ref: n, tabindex: "-1" },
            null,
            512
          ),
          y(
            "a",
            {
              href: "#VPContent",
              class: "VPSkipLink visually-hidden",
              onClick: s,
            },
            " Skip to content "
          ),
        ],
        64
      )
    );
  },
});
const ru = F(ou, [["__scopeId", "data-v-151f2593"]]),
  iu = { key: 0, class: "VPBackdrop" },
  lu = R({
    __name: "VPBackdrop",
    props: { show: { type: Boolean } },
    setup(e) {
      return (t, n) => (
        h(),
        W(
          ls,
          { name: "fade" },
          { default: A(() => [e.show ? (h(), g("div", iu)) : U("", !0)]), _: 1 }
        )
      );
    },
  });
const au = F(lu, [["__scopeId", "data-v-c79a1216"]]);
function cu() {
  const e = ce(!1);
  function t() {
    (e.value = !0), window.addEventListener("resize", o);
  }
  function n() {
    (e.value = !1), window.removeEventListener("resize", o);
  }
  function s() {
    e.value ? n() : t();
  }
  function o() {
    window.outerWidth >= 768 && n();
  }
  const r = mt();
  return (
    Xe(() => r.path, n),
    { isScreenOpen: e, openScreen: t, closeScreen: n, toggleScreen: s }
  );
}
function yn({ removeCurrent: e = !0, correspondingLink: t = !1 } = {}) {
  const { site: n, localeIndex: s, page: o, theme: r } = ue(),
    i = K(() => {
      var a, u;
      return {
        label: (a = n.value.locales[s.value]) == null ? void 0 : a.label,
        link:
          ((u = n.value.locales[s.value]) == null ? void 0 : u.link) ||
          (s.value === "root" ? "/" : `/${s.value}/`),
      };
    });
  return {
    localeLinks: K(() =>
      Object.entries(n.value.locales).flatMap(([a, u]) =>
        e && i.value.label === u.label
          ? []
          : {
              text: u.label,
              link: uu(
                u.link || (a === "root" ? "/" : `/${a}/`),
                r.value.i18nRouting !== !1 && t,
                o.value.relativePath.slice(i.value.link.length - 1),
                !n.value.cleanUrls
              ),
            }
      )
    ),
    currentLang: i,
  };
}
function uu(e, t, n, s) {
  return t
    ? e.replace(/\/$/, "") +
        Rs(
          n.replace(/(^|\/)?index.md$/, "$1").replace(/\.md$/, s ? ".html" : "")
        )
    : e;
}
const fu = ["src", "alt"],
  du = { inheritAttrs: !1 },
  hu = R({
    ...du,
    __name: "VPImage",
    props: { image: null, alt: null },
    setup(e) {
      return (t, n) => {
        const s = It("VPImage", !0);
        return e.image
          ? (h(),
            g(
              Z,
              { key: 0 },
              [
                typeof e.image == "string" || "src" in e.image
                  ? (h(),
                    g(
                      "img",
                      In(
                        { key: 0, class: "VPImage" },
                        typeof e.image == "string"
                          ? t.$attrs
                          : { ...e.image, ...t.$attrs },
                        {
                          src: _(mn)(
                            typeof e.image == "string" ? e.image : e.image.src
                          ),
                          alt:
                            e.alt ??
                            (typeof e.image == "string"
                              ? ""
                              : e.image.alt || ""),
                        }
                      ),
                      null,
                      16,
                      fu
                    ))
                  : (h(),
                    g(
                      Z,
                      { key: 1 },
                      [
                        E(
                          s,
                          In(
                            {
                              class: "dark",
                              image: e.image.dark,
                              alt: e.image.alt,
                            },
                            t.$attrs
                          ),
                          null,
                          16,
                          ["image", "alt"]
                        ),
                        E(
                          s,
                          In(
                            {
                              class: "light",
                              image: e.image.light,
                              alt: e.image.alt,
                            },
                            t.$attrs
                          ),
                          null,
                          16,
                          ["image", "alt"]
                        ),
                      ],
                      64
                    )),
              ],
              64
            ))
          : U("", !0);
      };
    },
  });
const fo = F(hu, [["__scopeId", "data-v-6db2186b"]]),
  _u = ["href"],
  pu = R({
    __name: "VPNavBarTitle",
    setup(e) {
      const { site: t, theme: n } = ue(),
        { hasSidebar: s } = rt(),
        { currentLang: o } = yn();
      return (r, i) => (
        h(),
        g(
          "div",
          { class: me(["VPNavBarTitle", { "has-sidebar": _(s) }]) },
          [
            y(
              "a",
              { class: "title", href: _(gn)(_(o).link) },
              [
                S(r.$slots, "nav-bar-title-before", {}, void 0, !0),
                _(n).logo
                  ? (h(),
                    W(
                      fo,
                      { key: 0, class: "logo", image: _(n).logo },
                      null,
                      8,
                      ["image"]
                    ))
                  : U("", !0),
                _(n).siteTitle
                  ? (h(), g(Z, { key: 1 }, [Te(ae(_(n).siteTitle), 1)], 64))
                  : _(n).siteTitle === void 0
                  ? (h(), g(Z, { key: 2 }, [Te(ae(_(t).title), 1)], 64))
                  : U("", !0),
                S(r.$slots, "nav-bar-title-after", {}, void 0, !0),
              ],
              8,
              _u
            ),
          ],
          2
        )
      );
    },
  });
const vu = F(pu, [["__scopeId", "data-v-6d2fb2d9"]]);
const mu = { key: 0, class: "VPNavBarSearch" },
  gu = {
    type: "button",
    class: "DocSearch DocSearch-Button",
    "aria-label": "Search",
  },
  bu = { class: "DocSearch-Button-Container" },
  yu = y(
    "svg",
    {
      class: "DocSearch-Search-Icon",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
    },
    [
      y("path", {
        d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
        stroke: "currentColor",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ],
    -1
  ),
  wu = { class: "DocSearch-Button-Placeholder" },
  xu = y(
    "span",
    { class: "DocSearch-Button-Keys" },
    [
      y("kbd", { class: "DocSearch-Button-Key" }),
      y("kbd", { class: "DocSearch-Button-Key" }, "K"),
    ],
    -1
  ),
  $u = R({
    __name: "VPNavBarSearch",
    setup(e) {
      rc((d) => ({ "636b0e38": r.value }));
      const t = () => null,
        { theme: n, localeIndex: s } = ue(),
        o = ce(!1),
        r = ce("'Meta'"),
        i = K(() => {
          var d, p, v, k, H, N, X, b;
          return (
            ((H =
              (k =
                (v =
                  (p = (d = n.value.algolia) == null ? void 0 : d.locales) ==
                  null
                    ? void 0
                    : p[s.value]) == null
                  ? void 0
                  : v.translations) == null
                ? void 0
                : k.button) == null
              ? void 0
              : H.buttonText) ||
            ((b =
              (X = (N = n.value.algolia) == null ? void 0 : N.translations) ==
              null
                ? void 0
                : X.button) == null
              ? void 0
              : b.buttonText) ||
            "Search"
          );
        }),
        l = () => {
          const d = "VPAlgoliaPreconnect";
          (window.requestIdleCallback || setTimeout)(() => {
            const v = document.createElement("link");
            (v.id = d),
              (v.rel = "preconnect"),
              (v.href = `https://${n.value.algolia.appId}-dsn.algolia.net`),
              (v.crossOrigin = ""),
              document.head.appendChild(v);
          });
        };
      Be(() => {
        if (!n.value.algolia) return;
        l(),
          (r.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
            ? "'⌘'"
            : "'Ctrl'");
        const d = (v) => {
            v.key === "k" &&
              (v.ctrlKey || v.metaKey) &&
              (v.preventDefault(), a(), p());
          },
          p = () => {
            window.removeEventListener("keydown", d);
          };
        window.addEventListener("keydown", d), vt(p);
      });
      function a() {
        o.value || ((o.value = !0), setTimeout(u, 16));
      }
      function u() {
        const d = new Event("keydown");
        (d.key = "k"),
          (d.metaKey = !0),
          window.dispatchEvent(d),
          setTimeout(() => {
            document.querySelector(".DocSearch-Modal") || u();
          }, 16);
      }
      return (d, p) =>
        _(n).algolia
          ? (h(),
            g("div", mu, [
              o.value
                ? (h(),
                  W(_(t), { key: 0, algolia: _(n).algolia }, null, 8, [
                    "algolia",
                  ]))
                : (h(),
                  g("div", { key: 1, id: "docsearch", onClick: a }, [
                    y("button", gu, [
                      y("span", bu, [yu, y("span", wu, ae(_(i)), 1)]),
                      xu,
                    ]),
                  ])),
            ]))
          : U("", !0);
    },
  });
const ku = {},
  Pu = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
  },
  Cu = y("path", { d: "M0 0h24v24H0V0z", fill: "none" }, null, -1),
  Su = y(
    "path",
    { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" },
    null,
    -1
  ),
  Tu = [Cu, Su];
function Vu(e, t) {
  return h(), g("svg", Pu, Tu);
}
const Eu = F(ku, [["render", Vu]]),
  Lu = R({
    __name: "VPLink",
    props: { tag: null, href: null, noIcon: { type: Boolean } },
    setup(e) {
      const t = e,
        n = K(() => (t.tag ?? t.href ? "a" : "span")),
        s = K(() => t.href && as.test(t.href));
      return (o, r) => (
        h(),
        W(
          _n(_(n)),
          {
            class: me(["VPLink", { link: e.href }]),
            href: e.href ? _(gn)(e.href) : void 0,
            target: _(s) ? "_blank" : void 0,
            rel: _(s) ? "noreferrer" : void 0,
          },
          {
            default: A(() => [
              S(o.$slots, "default", {}, void 0, !0),
              _(s) && !e.noIcon
                ? (h(), W(Eu, { key: 0, class: "icon" }))
                : U("", !0),
            ]),
            _: 3,
          },
          8,
          ["class", "href", "target", "rel"]
        )
      );
    },
  });
const gt = F(Lu, [["__scopeId", "data-v-30c06bd3"]]),
  Au = R({
    __name: "VPNavBarMenuLink",
    props: { item: null },
    setup(e) {
      const { page: t } = ue();
      return (n, s) => (
        h(),
        W(
          gt,
          {
            class: me({
              VPNavBarMenuLink: !0,
              active: _(Nt)(
                _(t).relativePath,
                e.item.activeMatch || e.item.link,
                !!e.item.activeMatch
              ),
            }),
            href: e.item.link,
            noIcon: !0,
          },
          { default: A(() => [Te(ae(e.item.text), 1)]), _: 1 },
          8,
          ["class", "href"]
        )
      );
    },
  });
const Mu = F(Au, [["__scopeId", "data-v-95f5d58b"]]),
  ho = ce();
let Ti = !1,
  ws = 0;
function Iu(e) {
  const t = ce(!1);
  if (Ce) {
    !Ti && Nu(), ws++;
    const n = Xe(ho, (s) => {
      var o, r, i;
      s === e.el.value || ((o = e.el.value) != null && o.contains(s))
        ? ((t.value = !0), (r = e.onFocus) == null || r.call(e))
        : ((t.value = !1), (i = e.onBlur) == null || i.call(e));
    });
    vt(() => {
      n(), ws--, ws || Ou();
    });
  }
  return Zs(t);
}
function Nu() {
  document.addEventListener("focusin", Vi),
    (Ti = !0),
    (ho.value = document.activeElement);
}
function Ou() {
  document.removeEventListener("focusin", Vi);
}
function Vi() {
  ho.value = document.activeElement;
}
const Bu = {},
  Fu = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Hu = y(
    "path",
    {
      d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z",
    },
    null,
    -1
  ),
  Ru = [Hu];
function Du(e, t) {
  return h(), g("svg", Fu, Ru);
}
const Ei = F(Bu, [["render", Du]]),
  Uu = {},
  ju = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  zu = y("circle", { cx: "12", cy: "12", r: "2" }, null, -1),
  Ku = y("circle", { cx: "19", cy: "12", r: "2" }, null, -1),
  qu = y("circle", { cx: "5", cy: "12", r: "2" }, null, -1),
  Wu = [zu, Ku, qu];
function Gu(e, t) {
  return h(), g("svg", ju, Wu);
}
const Yu = F(Uu, [["render", Gu]]),
  Qu = { class: "VPMenuLink" },
  Xu = R({
    __name: "VPMenuLink",
    props: { item: null },
    setup(e) {
      const { page: t } = ue();
      return (n, s) => (
        h(),
        g("div", Qu, [
          E(
            gt,
            {
              class: me({
                active: _(Nt)(
                  _(t).relativePath,
                  e.item.activeMatch || e.item.link,
                  !!e.item.activeMatch
                ),
              }),
              href: e.item.link,
            },
            { default: A(() => [Te(ae(e.item.text), 1)]), _: 1 },
            8,
            ["class", "href"]
          ),
        ])
      );
    },
  });
const cs = F(Xu, [["__scopeId", "data-v-a5bbb52c"]]),
  Ju = { class: "VPMenuGroup" },
  Zu = { key: 0, class: "title" },
  ef = R({
    __name: "VPMenuGroup",
    props: { text: null, items: null },
    setup(e) {
      return (t, n) => (
        h(),
        g("div", Ju, [
          e.text ? (h(), g("p", Zu, ae(e.text), 1)) : U("", !0),
          (h(!0),
          g(
            Z,
            null,
            Ee(
              e.items,
              (s) => (
                h(),
                g(
                  Z,
                  null,
                  [
                    "link" in s
                      ? (h(), W(cs, { key: 0, item: s }, null, 8, ["item"]))
                      : U("", !0),
                  ],
                  64
                )
              )
            ),
            256
          )),
        ])
      );
    },
  });
const tf = F(ef, [["__scopeId", "data-v-b66affaf"]]),
  nf = { class: "VPMenu" },
  sf = { key: 0, class: "items" },
  of = R({
    __name: "VPMenu",
    props: { items: null },
    setup(e) {
      return (t, n) => (
        h(),
        g("div", nf, [
          e.items
            ? (h(),
              g("div", sf, [
                (h(!0),
                g(
                  Z,
                  null,
                  Ee(
                    e.items,
                    (s) => (
                      h(),
                      g(
                        Z,
                        { key: s.text },
                        [
                          "link" in s
                            ? (h(),
                              W(cs, { key: 0, item: s }, null, 8, ["item"]))
                            : (h(),
                              W(
                                tf,
                                { key: 1, text: s.text, items: s.items },
                                null,
                                8,
                                ["text", "items"]
                              )),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]))
            : U("", !0),
          S(t.$slots, "default", {}, void 0, !0),
        ])
      );
    },
  });
const rf = F(of, [["__scopeId", "data-v-e7ea1737"]]),
  lf = ["aria-expanded", "aria-label"],
  af = { key: 0, class: "text" },
  cf = { class: "menu" },
  uf = R({
    __name: "VPFlyout",
    props: { icon: null, button: null, label: null, items: null },
    setup(e) {
      const t = ce(!1),
        n = ce();
      Iu({ el: n, onBlur: s });
      function s() {
        t.value = !1;
      }
      return (o, r) => (
        h(),
        g(
          "div",
          {
            class: "VPFlyout",
            ref_key: "el",
            ref: n,
            onMouseenter: r[1] || (r[1] = (i) => (t.value = !0)),
            onMouseleave: r[2] || (r[2] = (i) => (t.value = !1)),
          },
          [
            y(
              "button",
              {
                type: "button",
                class: "button",
                "aria-haspopup": "true",
                "aria-expanded": t.value,
                "aria-label": e.label,
                onClick: r[0] || (r[0] = (i) => (t.value = !t.value)),
              },
              [
                e.button || e.icon
                  ? (h(),
                    g("span", af, [
                      e.icon
                        ? (h(), W(_n(e.icon), { key: 0, class: "option-icon" }))
                        : U("", !0),
                      Te(" " + ae(e.button) + " ", 1),
                      E(Ei, { class: "text-icon" }),
                    ]))
                  : (h(), W(Yu, { key: 1, class: "icon" })),
              ],
              8,
              lf
            ),
            y("div", cf, [
              E(
                rf,
                { items: e.items },
                {
                  default: A(() => [S(o.$slots, "default", {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ["items"]
              ),
            ]),
          ],
          544
        )
      );
    },
  });
const _o = F(uf, [["__scopeId", "data-v-96001b6b"]]),
  ff = R({
    __name: "VPNavBarMenuGroup",
    props: { item: null },
    setup(e) {
      const { page: t } = ue();
      return (n, s) => (
        h(),
        W(
          _o,
          {
            class: me({
              VPNavBarMenuGroup: !0,
              active: _(Nt)(
                _(t).relativePath,
                e.item.activeMatch,
                !!e.item.activeMatch
              ),
            }),
            button: e.item.text,
            items: e.item.items,
          },
          null,
          8,
          ["class", "button", "items"]
        )
      );
    },
  }),
  df = (e) => (Ze("data-v-bdedfc22"), (e = e()), et(), e),
  hf = {
    key: 0,
    "aria-labelledby": "main-nav-aria-label",
    class: "VPNavBarMenu",
  },
  _f = df(() =>
    y(
      "span",
      { id: "main-nav-aria-label", class: "visually-hidden" },
      "Main Navigation",
      -1
    )
  ),
  pf = R({
    __name: "VPNavBarMenu",
    setup(e) {
      const { theme: t } = ue();
      return (n, s) =>
        _(t).nav
          ? (h(),
            g("nav", hf, [
              _f,
              (h(!0),
              g(
                Z,
                null,
                Ee(
                  _(t).nav,
                  (o) => (
                    h(),
                    g(
                      Z,
                      { key: o.text },
                      [
                        "link" in o
                          ? (h(), W(Mu, { key: 0, item: o }, null, 8, ["item"]))
                          : (h(),
                            W(ff, { key: 1, item: o }, null, 8, ["item"])),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : U("", !0);
    },
  });
const vf = F(pf, [["__scopeId", "data-v-bdedfc22"]]),
  mf = {},
  gf = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  bf = y("path", { d: "M0 0h24v24H0z", fill: "none" }, null, -1),
  yf = y(
    "path",
    {
      d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
      class: "css-c4d79v",
    },
    null,
    -1
  ),
  wf = [bf, yf];
function xf(e, t) {
  return h(), g("svg", gf, wf);
}
const Li = F(mf, [["render", xf]]),
  $f = { class: "items" },
  kf = { class: "title" },
  Pf = R({
    __name: "VPNavBarTranslations",
    setup(e) {
      const { localeLinks: t, currentLang: n } = yn({ correspondingLink: !0 });
      return (s, o) =>
        _(t).length && _(n).label
          ? (h(),
            W(
              _o,
              { key: 0, class: "VPNavBarTranslations", icon: Li },
              {
                default: A(() => [
                  y("div", $f, [
                    y("p", kf, ae(_(n).label), 1),
                    (h(!0),
                    g(
                      Z,
                      null,
                      Ee(
                        _(t),
                        (r) => (
                          h(),
                          W(cs, { key: r.link, item: r }, null, 8, ["item"])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              }
            ))
          : U("", !0);
    },
  });
const Cf = F(Pf, [["__scopeId", "data-v-fdaf79b7"]]);
const Sf = {},
  Tf = { class: "VPSwitch", type: "button", role: "switch" },
  Vf = { class: "check" },
  Ef = { key: 0, class: "icon" };
function Lf(e, t) {
  return (
    h(),
    g("button", Tf, [
      y("span", Vf, [
        e.$slots.default
          ? (h(), g("span", Ef, [S(e.$slots, "default", {}, void 0, !0)]))
          : U("", !0),
      ]),
    ])
  );
}
const Af = F(Sf, [
    ["render", Lf],
    ["__scopeId", "data-v-f3c41672"],
  ]),
  Mf = {},
  If = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Nf = Va(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9
  ),
  Of = [Nf];
function Bf(e, t) {
  return h(), g("svg", If, Of);
}
const Ff = F(Mf, [["render", Bf]]),
  Hf = {},
  Rf = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Df = y(
    "path",
    {
      d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z",
    },
    null,
    -1
  ),
  Uf = [Df];
function jf(e, t) {
  return h(), g("svg", Rf, Uf);
}
const zf = F(Hf, [["render", jf]]),
  Kf = R({
    __name: "VPSwitchAppearance",
    setup(e) {
      const { site: t, isDark: n } = ue(),
        s = ce(!1),
        o = typeof localStorage < "u" ? r() : () => {};
      Be(() => {
        s.value = document.documentElement.classList.contains("dark");
      });
      function r() {
        const i = window.matchMedia("(prefers-color-scheme: dark)"),
          l = document.documentElement.classList;
        let a = localStorage.getItem(ir),
          u =
            (t.value.appearance === "dark" && a == null) ||
            (a === "auto" || a == null ? i.matches : a === "dark");
        i.onchange = (v) => {
          a === "auto" && p((u = v.matches));
        };
        function d() {
          p((u = !u)),
            (a = u
              ? i.matches
                ? "auto"
                : "dark"
              : i.matches
              ? "light"
              : "auto"),
            localStorage.setItem(ir, a);
        }
        function p(v) {
          const k = document.createElement("style");
          (k.type = "text/css"),
            k.appendChild(
              document.createTextNode(`:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`)
            ),
            document.head.appendChild(k),
            (s.value = v),
            l[v ? "add" : "remove"]("dark"),
            window.getComputedStyle(k).opacity,
            document.head.removeChild(k);
        }
        return d;
      }
      return (
        Xe(s, (i) => {
          n.value = i;
        }),
        (i, l) => (
          h(),
          W(
            Af,
            {
              class: "VPSwitchAppearance",
              "aria-label": "toggle dark mode",
              "aria-checked": s.value,
              onClick: _(o),
            },
            {
              default: A(() => [
                E(Ff, { class: "sun" }),
                E(zf, { class: "moon" }),
              ]),
              _: 1,
            },
            8,
            ["aria-checked", "onClick"]
          )
        )
      );
    },
  });
const po = F(Kf, [["__scopeId", "data-v-0d529b6d"]]),
  qf = { key: 0, class: "VPNavBarAppearance" },
  Wf = R({
    __name: "VPNavBarAppearance",
    setup(e) {
      const { site: t } = ue();
      return (n, s) =>
        _(t).appearance ? (h(), g("div", qf, [E(po)])) : U("", !0);
    },
  });
const Gf = F(Wf, [["__scopeId", "data-v-da3f667a"]]),
  Yf = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  Qf = ["href", "innerHTML"],
  Xf = R({
    __name: "VPSocialLink",
    props: { icon: null, link: null },
    setup(e) {
      const t = e,
        n = K(() => (typeof t.icon == "object" ? t.icon.svg : Yf[t.icon]));
      return (s, o) => (
        h(),
        g(
          "a",
          {
            class: "VPSocialLink",
            href: e.link,
            target: "_blank",
            rel: "noopener",
            innerHTML: _(n),
          },
          null,
          8,
          Qf
        )
      );
    },
  });
const Jf = F(Xf, [["__scopeId", "data-v-e57698f6"]]),
  Zf = { class: "VPSocialLinks" },
  ed = R({
    __name: "VPSocialLinks",
    props: { links: null },
    setup(e) {
      return (t, n) => (
        h(),
        g("div", Zf, [
          (h(!0),
          g(
            Z,
            null,
            Ee(
              e.links,
              ({ link: s, icon: o }) => (
                h(),
                W(Jf, { key: s, icon: o, link: s }, null, 8, ["icon", "link"])
              )
            ),
            128
          )),
        ])
      );
    },
  });
const vo = F(ed, [["__scopeId", "data-v-f6988cfb"]]),
  td = R({
    __name: "VPNavBarSocialLinks",
    setup(e) {
      const { theme: t } = ue();
      return (n, s) =>
        _(t).socialLinks
          ? (h(),
            W(
              vo,
              { key: 0, class: "VPNavBarSocialLinks", links: _(t).socialLinks },
              null,
              8,
              ["links"]
            ))
          : U("", !0);
    },
  });
const nd = F(td, [["__scopeId", "data-v-2ab2a029"]]),
  sd = { key: 0, class: "group translations" },
  od = { class: "trans-title" },
  rd = { key: 1, class: "group" },
  id = { class: "item appearance" },
  ld = { class: "label" },
  ad = { class: "appearance-action" },
  cd = { key: 2, class: "group" },
  ud = { class: "item social-links" },
  fd = R({
    __name: "VPNavBarExtra",
    setup(e) {
      const { site: t, theme: n } = ue(),
        { localeLinks: s, currentLang: o } = yn({ correspondingLink: !0 }),
        r = K(
          () =>
            (s.value.length && o.value.label) ||
            t.value.appearance ||
            n.value.socialLinks
        );
      return (i, l) =>
        _(r)
          ? (h(),
            W(
              _o,
              { key: 0, class: "VPNavBarExtra", label: "extra navigation" },
              {
                default: A(() => [
                  _(s).length && _(o).label
                    ? (h(),
                      g("div", sd, [
                        y("p", od, ae(_(o).label), 1),
                        (h(!0),
                        g(
                          Z,
                          null,
                          Ee(
                            _(s),
                            (a) => (
                              h(),
                              W(cs, { key: a.link, item: a }, null, 8, ["item"])
                            )
                          ),
                          128
                        )),
                      ]))
                    : U("", !0),
                  _(t).appearance
                    ? (h(),
                      g("div", rd, [
                        y("div", id, [
                          y(
                            "p",
                            ld,
                            ae(_(n).darkModeSwitchLabel || "Appearance"),
                            1
                          ),
                          y("div", ad, [E(po)]),
                        ]),
                      ]))
                    : U("", !0),
                  _(n).socialLinks
                    ? (h(),
                      g("div", cd, [
                        y("div", ud, [
                          E(
                            vo,
                            {
                              class: "social-links-list",
                              links: _(n).socialLinks,
                            },
                            null,
                            8,
                            ["links"]
                          ),
                        ]),
                      ]))
                    : U("", !0),
                ]),
                _: 1,
              }
            ))
          : U("", !0);
    },
  });
const dd = F(fd, [["__scopeId", "data-v-66bb1f24"]]),
  hd = (e) => (Ze("data-v-e5dd9c1c"), (e = e()), et(), e),
  _d = ["aria-expanded"],
  pd = hd(() =>
    y(
      "span",
      { class: "container" },
      [
        y("span", { class: "top" }),
        y("span", { class: "middle" }),
        y("span", { class: "bottom" }),
      ],
      -1
    )
  ),
  vd = [pd],
  md = R({
    __name: "VPNavBarHamburger",
    props: { active: { type: Boolean } },
    emits: ["click"],
    setup(e) {
      return (t, n) => (
        h(),
        g(
          "button",
          {
            type: "button",
            class: me(["VPNavBarHamburger", { active: e.active }]),
            "aria-label": "mobile navigation",
            "aria-expanded": e.active,
            "aria-controls": "VPNavScreen",
            onClick: n[0] || (n[0] = (s) => t.$emit("click")),
          },
          vd,
          10,
          _d
        )
      );
    },
  });
const gd = F(md, [["__scopeId", "data-v-e5dd9c1c"]]),
  bd = (e) => (Ze("data-v-be450ad9"), (e = e()), et(), e),
  yd = { class: "container" },
  wd = { class: "title" },
  xd = { class: "content" },
  $d = bd(() => y("div", { class: "curtain" }, null, -1)),
  kd = { class: "content-body" },
  Pd = R({
    __name: "VPNavBar",
    props: { isScreenOpen: { type: Boolean } },
    emits: ["toggle-screen"],
    setup(e) {
      const { y: t } = Jc(),
        { hasSidebar: n } = rt(),
        s = K(() => ({ "has-sidebar": n.value, fill: t.value > 0 }));
      return (o, r) => (
        h(),
        g(
          "div",
          { class: me(["VPNavBar", _(s)]) },
          [
            y("div", yd, [
              y("div", wd, [
                E(vu, null, {
                  "nav-bar-title-before": A(() => [
                    S(o.$slots, "nav-bar-title-before", {}, void 0, !0),
                  ]),
                  "nav-bar-title-after": A(() => [
                    S(o.$slots, "nav-bar-title-after", {}, void 0, !0),
                  ]),
                  _: 3,
                }),
              ]),
              y("div", xd, [
                $d,
                y("div", kd, [
                  S(o.$slots, "nav-bar-content-before", {}, void 0, !0),
                  E($u, { class: "search" }),
                  E(vf, { class: "menu" }),
                  E(Cf, { class: "translations" }),
                  E(Gf, { class: "appearance" }),
                  E(nd, { class: "social-links" }),
                  E(dd, { class: "extra" }),
                  S(o.$slots, "nav-bar-content-after", {}, void 0, !0),
                  E(
                    gd,
                    {
                      class: "hamburger",
                      active: e.isScreenOpen,
                      onClick: r[0] || (r[0] = (i) => o.$emit("toggle-screen")),
                    },
                    null,
                    8,
                    ["active"]
                  ),
                ]),
              ]),
            ]),
          ],
          2
        )
      );
    },
  });
const Cd = F(Pd, [["__scopeId", "data-v-be450ad9"]]);
function Sd(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  } else return Array.from(e);
}
var mo = !1;
if (typeof window < "u") {
  var pr = {
    get passive() {
      mo = !0;
    },
  };
  window.addEventListener("testPassive", null, pr),
    window.removeEventListener("testPassive", null, pr);
}
var zn =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  qt = [],
  Kn = !1,
  go = -1,
  an = void 0,
  Tt = void 0,
  cn = void 0,
  Ai = function (t) {
    return qt.some(function (n) {
      return !!(n.options.allowTouchMove && n.options.allowTouchMove(t));
    });
  },
  qn = function (t) {
    var n = t || window.event;
    return Ai(n.target) || n.touches.length > 1
      ? !0
      : (n.preventDefault && n.preventDefault(), !1);
  },
  Td = function (t) {
    if (cn === void 0) {
      var n = !!t && t.reserveScrollBarGap === !0,
        s = window.innerWidth - document.documentElement.clientWidth;
      if (n && s > 0) {
        var o = parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("padding-right"),
          10
        );
        (cn = document.body.style.paddingRight),
          (document.body.style.paddingRight = o + s + "px");
      }
    }
    an === void 0 &&
      ((an = document.body.style.overflow),
      (document.body.style.overflow = "hidden"));
  },
  Vd = function () {
    cn !== void 0 && ((document.body.style.paddingRight = cn), (cn = void 0)),
      an !== void 0 && ((document.body.style.overflow = an), (an = void 0));
  },
  Ed = function () {
    return window.requestAnimationFrame(function () {
      if (Tt === void 0) {
        Tt = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
        };
        var t = window,
          n = t.scrollY,
          s = t.scrollX,
          o = t.innerHeight;
        (document.body.style.position = "fixed"),
          (document.body.style.top = -n),
          (document.body.style.left = -s),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var r = o - window.innerHeight;
              r && n >= o && (document.body.style.top = -(n + r));
            });
          }, 300);
      }
    });
  },
  Ld = function () {
    if (Tt !== void 0) {
      var t = -parseInt(document.body.style.top, 10),
        n = -parseInt(document.body.style.left, 10);
      (document.body.style.position = Tt.position),
        (document.body.style.top = Tt.top),
        (document.body.style.left = Tt.left),
        window.scrollTo(n, t),
        (Tt = void 0);
    }
  },
  Ad = function (t) {
    return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
  },
  Md = function (t, n) {
    var s = t.targetTouches[0].clientY - go;
    return Ai(t.target)
      ? !1
      : (n && n.scrollTop === 0 && s > 0) || (Ad(n) && s < 0)
      ? qn(t)
      : (t.stopPropagation(), !0);
  },
  Mi = function (t, n) {
    if (!t) {
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
      return;
    }
    if (
      !qt.some(function (o) {
        return o.targetElement === t;
      })
    ) {
      var s = { targetElement: t, options: n || {} };
      (qt = [].concat(Sd(qt), [s])),
        zn ? Ed() : Td(n),
        zn &&
          ((t.ontouchstart = function (o) {
            o.targetTouches.length === 1 && (go = o.targetTouches[0].clientY);
          }),
          (t.ontouchmove = function (o) {
            o.targetTouches.length === 1 && Md(o, t);
          }),
          Kn ||
            (document.addEventListener(
              "touchmove",
              qn,
              mo ? { passive: !1 } : void 0
            ),
            (Kn = !0)));
    }
  },
  Ii = function () {
    zn &&
      (qt.forEach(function (t) {
        (t.targetElement.ontouchstart = null),
          (t.targetElement.ontouchmove = null);
      }),
      Kn &&
        (document.removeEventListener(
          "touchmove",
          qn,
          mo ? { passive: !1 } : void 0
        ),
        (Kn = !1)),
      (go = -1)),
      zn ? Ld() : Vd(),
      (qt = []);
  };
const Id = R({
  __name: "VPNavScreenMenuLink",
  props: { text: null, link: null },
  setup(e) {
    const t = qe("close-screen");
    return (n, s) => (
      h(),
      W(
        gt,
        { class: "VPNavScreenMenuLink", href: e.link, onClick: _(t) },
        { default: A(() => [Te(ae(e.text), 1)]), _: 1 },
        8,
        ["href", "onClick"]
      )
    );
  },
});
const Nd = F(Id, [["__scopeId", "data-v-c328f34f"]]),
  Od = {},
  Bd = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Fd = y(
    "path",
    {
      d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z",
    },
    null,
    -1
  ),
  Hd = [Fd];
function Rd(e, t) {
  return h(), g("svg", Bd, Hd);
}
const Dd = F(Od, [["render", Rd]]),
  Ud = R({
    __name: "VPNavScreenMenuGroupLink",
    props: { text: null, link: null },
    setup(e) {
      const t = qe("close-screen");
      return (n, s) => (
        h(),
        W(
          gt,
          { class: "VPNavScreenMenuGroupLink", href: e.link, onClick: _(t) },
          { default: A(() => [Te(ae(e.text), 1)]), _: 1 },
          8,
          ["href", "onClick"]
        )
      );
    },
  });
const Ni = F(Ud, [["__scopeId", "data-v-3d20956d"]]),
  jd = { class: "VPNavScreenMenuGroupSection" },
  zd = { key: 0, class: "title" },
  Kd = R({
    __name: "VPNavScreenMenuGroupSection",
    props: { text: null, items: null },
    setup(e) {
      return (t, n) => (
        h(),
        g("div", jd, [
          e.text ? (h(), g("p", zd, ae(e.text), 1)) : U("", !0),
          (h(!0),
          g(
            Z,
            null,
            Ee(
              e.items,
              (s) => (
                h(),
                W(Ni, { key: s.text, text: s.text, link: s.link }, null, 8, [
                  "text",
                  "link",
                ])
              )
            ),
            128
          )),
        ])
      );
    },
  });
const qd = F(Kd, [["__scopeId", "data-v-7478538b"]]),
  Wd = ["aria-controls", "aria-expanded"],
  Gd = { class: "button-text" },
  Yd = ["id"],
  Qd = { key: 1, class: "group" },
  Xd = R({
    __name: "VPNavScreenMenuGroup",
    props: { text: null, items: null },
    setup(e) {
      const t = e,
        n = ce(!1),
        s = K(() => `NavScreenGroup-${t.text.replace(" ", "-").toLowerCase()}`);
      function o() {
        n.value = !n.value;
      }
      return (r, i) => (
        h(),
        g(
          "div",
          { class: me(["VPNavScreenMenuGroup", { open: n.value }]) },
          [
            y(
              "button",
              {
                class: "button",
                "aria-controls": _(s),
                "aria-expanded": n.value,
                onClick: o,
              },
              [y("span", Gd, ae(e.text), 1), E(Dd, { class: "button-icon" })],
              8,
              Wd
            ),
            y(
              "div",
              { id: _(s), class: "items" },
              [
                (h(!0),
                g(
                  Z,
                  null,
                  Ee(
                    e.items,
                    (l) => (
                      h(),
                      g(
                        Z,
                        { key: l.text },
                        [
                          "link" in l
                            ? (h(),
                              g("div", { key: l.text, class: "item" }, [
                                E(Ni, { text: l.text, link: l.link }, null, 8, [
                                  "text",
                                  "link",
                                ]),
                              ]))
                            : (h(),
                              g("div", Qd, [
                                E(
                                  qd,
                                  { text: l.text, items: l.items },
                                  null,
                                  8,
                                  ["text", "items"]
                                ),
                              ])),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ],
              8,
              Yd
            ),
          ],
          2
        )
      );
    },
  });
const Jd = F(Xd, [["__scopeId", "data-v-a9a19324"]]),
  Zd = { key: 0, class: "VPNavScreenMenu" },
  eh = R({
    __name: "VPNavScreenMenu",
    setup(e) {
      const { theme: t } = ue();
      return (n, s) =>
        _(t).nav
          ? (h(),
            g("nav", Zd, [
              (h(!0),
              g(
                Z,
                null,
                Ee(
                  _(t).nav,
                  (o) => (
                    h(),
                    g(
                      Z,
                      { key: o.text },
                      [
                        "link" in o
                          ? (h(),
                            W(
                              Nd,
                              { key: 0, text: o.text, link: o.link },
                              null,
                              8,
                              ["text", "link"]
                            ))
                          : (h(),
                            W(
                              Jd,
                              { key: 1, text: o.text || "", items: o.items },
                              null,
                              8,
                              ["text", "items"]
                            )),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : U("", !0);
    },
  }),
  th = { key: 0, class: "VPNavScreenAppearance" },
  nh = { class: "text" },
  sh = R({
    __name: "VPNavScreenAppearance",
    setup(e) {
      const { site: t, theme: n } = ue();
      return (s, o) =>
        _(t).appearance
          ? (h(),
            g("div", th, [
              y("p", nh, ae(_(n).darkModeSwitchLabel || "Appearance"), 1),
              E(po),
            ]))
          : U("", !0);
    },
  });
const oh = F(sh, [["__scopeId", "data-v-7e6603c2"]]),
  rh = { class: "list" },
  ih = R({
    __name: "VPNavScreenTranslations",
    setup(e) {
      const { localeLinks: t, currentLang: n } = yn({ correspondingLink: !0 }),
        s = ce(!1);
      function o() {
        s.value = !s.value;
      }
      return (r, i) =>
        _(t).length && _(n).label
          ? (h(),
            g(
              "div",
              {
                key: 0,
                class: me(["VPNavScreenTranslations", { open: s.value }]),
              },
              [
                y("button", { class: "title", onClick: o }, [
                  E(Li, { class: "icon lang" }),
                  Te(" " + ae(_(n).label) + " ", 1),
                  E(Ei, { class: "icon chevron" }),
                ]),
                y("ul", rh, [
                  (h(!0),
                  g(
                    Z,
                    null,
                    Ee(
                      _(t),
                      (l) => (
                        h(),
                        g("li", { key: l.link, class: "item" }, [
                          E(
                            gt,
                            { class: "link", href: l.link },
                            { default: A(() => [Te(ae(l.text), 1)]), _: 2 },
                            1032,
                            ["href"]
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ],
              2
            ))
          : U("", !0);
    },
  });
const lh = F(ih, [["__scopeId", "data-v-8982effe"]]),
  ah = R({
    __name: "VPNavScreenSocialLinks",
    setup(e) {
      const { theme: t } = ue();
      return (n, s) =>
        _(t).socialLinks
          ? (h(),
            W(
              vo,
              {
                key: 0,
                class: "VPNavScreenSocialLinks",
                links: _(t).socialLinks,
              },
              null,
              8,
              ["links"]
            ))
          : U("", !0);
    },
  }),
  ch = { class: "container" },
  uh = R({
    __name: "VPNavScreen",
    props: { open: { type: Boolean } },
    setup(e) {
      const t = ce(null);
      function n() {
        Mi(t.value, { reserveScrollBarGap: !0 });
      }
      function s() {
        Ii();
      }
      return (o, r) => (
        h(),
        W(
          ls,
          { name: "fade", onEnter: n, onAfterLeave: s },
          {
            default: A(() => [
              e.open
                ? (h(),
                  g(
                    "div",
                    { key: 0, class: "VPNavScreen", ref_key: "screen", ref: t },
                    [
                      y("div", ch, [
                        S(
                          o.$slots,
                          "nav-screen-content-before",
                          {},
                          void 0,
                          !0
                        ),
                        E(eh, { class: "menu" }),
                        E(lh, { class: "translations" }),
                        E(oh, { class: "appearance" }),
                        E(ah, { class: "social-links" }),
                        S(o.$slots, "nav-screen-content-after", {}, void 0, !0),
                      ]),
                    ],
                    512
                  ))
                : U("", !0),
            ]),
            _: 3,
          }
        )
      );
    },
  });
const fh = F(uh, [["__scopeId", "data-v-724636ae"]]),
  dh = { class: "VPNav" },
  hh = R({
    __name: "VPNav",
    setup(e) {
      const { isScreenOpen: t, closeScreen: n, toggleScreen: s } = cu();
      return (
        jt("close-screen", n),
        (o, r) => (
          h(),
          g("header", dh, [
            E(
              Cd,
              { "is-screen-open": _(t), onToggleScreen: _(s) },
              {
                "nav-bar-title-before": A(() => [
                  S(o.$slots, "nav-bar-title-before", {}, void 0, !0),
                ]),
                "nav-bar-title-after": A(() => [
                  S(o.$slots, "nav-bar-title-after", {}, void 0, !0),
                ]),
                "nav-bar-content-before": A(() => [
                  S(o.$slots, "nav-bar-content-before", {}, void 0, !0),
                ]),
                "nav-bar-content-after": A(() => [
                  S(o.$slots, "nav-bar-content-after", {}, void 0, !0),
                ]),
                _: 3,
              },
              8,
              ["is-screen-open", "onToggleScreen"]
            ),
            E(
              fh,
              { open: _(t) },
              {
                "nav-screen-content-before": A(() => [
                  S(o.$slots, "nav-screen-content-before", {}, void 0, !0),
                ]),
                "nav-screen-content-after": A(() => [
                  S(o.$slots, "nav-screen-content-after", {}, void 0, !0),
                ]),
                _: 3,
              },
              8,
              ["open"]
            ),
          ])
        )
      );
    },
  });
const _h = F(hh, [["__scopeId", "data-v-0fa0e57d"]]),
  ph = {},
  vh = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  mh = y(
    "path",
    {
      d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z",
    },
    null,
    -1
  ),
  gh = y(
    "path",
    { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" },
    null,
    -1
  ),
  bh = y(
    "path",
    {
      d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z",
    },
    null,
    -1
  ),
  yh = y(
    "path",
    {
      d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z",
    },
    null,
    -1
  ),
  wh = [mh, gh, bh, yh];
function xh(e, t) {
  return h(), g("svg", vh, wh);
}
const $h = F(ph, [["render", xh]]),
  kh = { key: 0, class: "VPLocalNav" },
  Ph = ["aria-expanded"],
  Ch = { class: "menu-text" },
  Sh = R({
    __name: "VPLocalNav",
    props: { open: { type: Boolean } },
    emits: ["open-menu"],
    setup(e) {
      const { theme: t } = ue(),
        { hasSidebar: n } = rt();
      function s() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return (o, r) =>
        _(n)
          ? (h(),
            g("div", kh, [
              y(
                "button",
                {
                  class: "menu",
                  "aria-expanded": e.open,
                  "aria-controls": "VPSidebarNav",
                  onClick: r[0] || (r[0] = (i) => o.$emit("open-menu")),
                },
                [
                  E($h, { class: "menu-icon" }),
                  y("span", Ch, ae(_(t).sidebarMenuLabel || "Menu"), 1),
                ],
                8,
                Ph
              ),
              y(
                "a",
                { class: "top-link", href: "#", onClick: s },
                ae(_(t).returnToTopLabel || "Return to top"),
                1
              ),
            ]))
          : U("", !0);
    },
  });
const Th = F(Sh, [["__scopeId", "data-v-2817d72e"]]),
  Vh = {},
  Eh = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Lh = y(
    "path",
    {
      d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z",
    },
    null,
    -1
  ),
  Ah = [Lh];
function Mh(e, t) {
  return h(), g("svg", Eh, Ah);
}
const Ih = F(Vh, [["render", Mh]]),
  Nh = (e) => (Ze("data-v-b05232f3"), (e = e()), et(), e),
  Oh = ["role"],
  Bh = Nh(() => y("div", { class: "indicator" }, null, -1)),
  Fh = { key: 1, class: "items" },
  Hh = R({
    __name: "VPSidebarItem",
    props: { item: null, depth: null },
    setup(e) {
      const t = e,
        {
          collapsed: n,
          collapsible: s,
          isLink: o,
          isActiveLink: r,
          hasActiveLink: i,
          hasChildren: l,
          toggle: a,
        } = su(K(() => t.item)),
        u = K(() => (l.value ? "section" : "div")),
        d = K(() => (o.value ? "a" : "div")),
        p = K(() =>
          l.value ? (t.depth + 2 === 7 ? "p" : `h${t.depth + 2}`) : "p"
        ),
        v = K(() => (o.value ? void 0 : "button")),
        k = K(() => [
          [`level-${t.depth}`],
          { collapsible: s.value },
          { collapsed: n.value },
          { "is-link": o.value },
          { "is-active": r.value },
          { "has-active": i.value },
        ]);
      function H() {
        !t.item.link && a();
      }
      function N() {
        t.item.link && a();
      }
      return (X, b) => {
        const V = It("VPSidebarItem", !0);
        return (
          h(),
          W(
            _n(_(u)),
            { class: me(["VPSidebarItem", _(k)]) },
            {
              default: A(() => [
                e.item.text
                  ? (h(),
                    g(
                      "div",
                      { key: 0, class: "item", role: _(v), onClick: H },
                      [
                        Bh,
                        E(
                          gt,
                          { tag: _(d), class: "link", href: e.item.link },
                          {
                            default: A(() => [
                              (h(),
                              W(
                                _n(_(p)),
                                { class: "text", innerHTML: e.item.text },
                                null,
                                8,
                                ["innerHTML"]
                              )),
                            ]),
                            _: 1,
                          },
                          8,
                          ["tag", "href"]
                        ),
                        e.item.collapsed != null
                          ? (h(),
                            g(
                              "div",
                              {
                                key: 0,
                                class: "caret",
                                role: "button",
                                onClick: N,
                              },
                              [E(Ih, { class: "caret-icon" })]
                            ))
                          : U("", !0),
                      ],
                      8,
                      Oh
                    ))
                  : U("", !0),
                e.item.items && e.item.items.length
                  ? (h(),
                    g("div", Fh, [
                      e.depth < 5
                        ? (h(!0),
                          g(
                            Z,
                            { key: 0 },
                            Ee(
                              e.item.items,
                              (I) => (
                                h(),
                                W(
                                  V,
                                  { key: I.text, item: I, depth: e.depth + 1 },
                                  null,
                                  8,
                                  ["item", "depth"]
                                )
                              )
                            ),
                            128
                          ))
                        : U("", !0),
                    ]))
                  : U("", !0),
              ]),
              _: 1,
            },
            8,
            ["class"]
          )
        );
      };
    },
  });
const Rh = F(Hh, [["__scopeId", "data-v-b05232f3"]]),
  Oi = (e) => (Ze("data-v-c79ccefa"), (e = e()), et(), e),
  Dh = Oi(() => y("div", { class: "curtain" }, null, -1)),
  Uh = {
    class: "nav",
    id: "VPSidebarNav",
    "aria-labelledby": "sidebar-aria-label",
    tabindex: "-1",
  },
  jh = Oi(() =>
    y(
      "span",
      { class: "visually-hidden", id: "sidebar-aria-label" },
      " Sidebar Navigation ",
      -1
    )
  ),
  zh = R({
    __name: "VPSidebar",
    props: { open: { type: Boolean } },
    setup(e) {
      const t = e,
        { sidebarGroups: n, hasSidebar: s } = rt();
      let o = ce(null);
      function r() {
        Mi(o.value, { reserveScrollBarGap: !0 });
      }
      function i() {
        Ii();
      }
      return (
        Kr(async () => {
          var l;
          t.open ? (r(), (l = o.value) == null || l.focus()) : i();
        }),
        (l, a) =>
          _(s)
            ? (h(),
              g(
                "aside",
                {
                  key: 0,
                  class: me(["VPSidebar", { open: e.open }]),
                  ref_key: "navEl",
                  ref: o,
                  onClick: a[0] || (a[0] = _c(() => {}, ["stop"])),
                },
                [
                  Dh,
                  y("nav", Uh, [
                    jh,
                    S(l.$slots, "sidebar-nav-before", {}, void 0, !0),
                    (h(!0),
                    g(
                      Z,
                      null,
                      Ee(
                        _(n),
                        (u) => (
                          h(),
                          g("div", { key: u.text, class: "group" }, [
                            E(Rh, { item: u, depth: 0 }, null, 8, ["item"]),
                          ])
                        )
                      ),
                      128
                    )),
                    S(l.$slots, "sidebar-nav-after", {}, void 0, !0),
                  ]),
                ],
                2
              ))
            : U("", !0)
      );
    },
  });
const Kh = F(zh, [["__scopeId", "data-v-c79ccefa"]]),
  qh = {},
  Wh = { class: "VPPage" };
function Gh(e, t) {
  const n = It("Content");
  return h(), g("div", Wh, [E(n)]);
}
const Yh = F(qh, [["render", Gh]]),
  Qh = R({
    __name: "VPButton",
    props: { tag: null, size: null, theme: null, text: null, href: null },
    setup(e) {
      const t = e,
        n = K(() => [t.size ?? "medium", t.theme ?? "brand"]),
        s = K(() => t.href && as.test(t.href)),
        o = K(() => (t.tag ? t.tag : t.href ? "a" : "button"));
      return (r, i) => (
        h(),
        W(
          _n(_(o)),
          {
            class: me(["VPButton", _(n)]),
            href: e.href ? _(gn)(e.href) : void 0,
            target: _(s) ? "_blank" : void 0,
            rel: _(s) ? "noreferrer" : void 0,
          },
          { default: A(() => [Te(ae(e.text), 1)]), _: 1 },
          8,
          ["class", "href", "target", "rel"]
        )
      );
    },
  });
const Xh = F(Qh, [["__scopeId", "data-v-a7c4128c"]]),
  Jh = (e) => (Ze("data-v-45916f1d"), (e = e()), et(), e),
  Zh = { class: "container" },
  e0 = { class: "main" },
  t0 = { key: 0, class: "name" },
  n0 = { class: "clip" },
  s0 = { key: 1, class: "text" },
  o0 = { key: 2, class: "tagline" },
  r0 = { key: 3, class: "actions" },
  i0 = { key: 0, class: "image" },
  l0 = { class: "image-container" },
  a0 = Jh(() => y("div", { class: "image-bg" }, null, -1)),
  c0 = R({
    __name: "VPHero",
    props: {
      name: null,
      text: null,
      tagline: null,
      image: null,
      actions: null,
    },
    setup(e) {
      const t = qe("hero-image-slot-exists");
      return (n, s) => (
        h(),
        g(
          "div",
          { class: me(["VPHero", { "has-image": e.image || _(t) }]) },
          [
            y("div", Zh, [
              y("div", e0, [
                e.name
                  ? (h(), g("h1", t0, [y("span", n0, ae(e.name), 1)]))
                  : U("", !0),
                e.text ? (h(), g("p", s0, ae(e.text), 1)) : U("", !0),
                e.tagline ? (h(), g("p", o0, ae(e.tagline), 1)) : U("", !0),
                e.actions
                  ? (h(),
                    g("div", r0, [
                      (h(!0),
                      g(
                        Z,
                        null,
                        Ee(
                          e.actions,
                          (o) => (
                            h(),
                            g("div", { key: o.link, class: "action" }, [
                              E(
                                Xh,
                                {
                                  tag: "a",
                                  size: "medium",
                                  theme: o.theme,
                                  text: o.text,
                                  href: o.link,
                                },
                                null,
                                8,
                                ["theme", "text", "href"]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : U("", !0),
              ]),
              e.image || _(t)
                ? (h(),
                  g("div", i0, [
                    y("div", l0, [
                      a0,
                      S(
                        n.$slots,
                        "home-hero-image",
                        {},
                        () => [
                          e.image
                            ? (h(),
                              W(
                                fo,
                                { key: 0, class: "image-src", image: e.image },
                                null,
                                8,
                                ["image"]
                              ))
                            : U("", !0),
                        ],
                        !0
                      ),
                    ]),
                  ]))
                : U("", !0),
            ]),
          ],
          2
        )
      );
    },
  });
const u0 = F(c0, [["__scopeId", "data-v-45916f1d"]]),
  f0 = R({
    __name: "VPHomeHero",
    setup(e) {
      const { frontmatter: t } = ue();
      return (n, s) =>
        _(t).hero
          ? (h(),
            W(
              u0,
              {
                key: 0,
                class: "VPHomeHero",
                name: _(t).hero.name,
                text: _(t).hero.text,
                tagline: _(t).hero.tagline,
                image: _(t).hero.image,
                actions: _(t).hero.actions,
              },
              {
                "home-hero-image": A(() => [S(n.$slots, "home-hero-image")]),
                _: 3,
              },
              8,
              ["name", "text", "tagline", "image", "actions"]
            ))
          : U("", !0);
    },
  }),
  d0 = {},
  h0 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  _0 = y(
    "path",
    {
      d: "M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z",
    },
    null,
    -1
  ),
  p0 = [_0];
function v0(e, t) {
  return h(), g("svg", h0, p0);
}
const m0 = F(d0, [["render", v0]]),
  g0 = { class: "box" },
  b0 = { key: 1, class: "icon" },
  y0 = ["innerHTML"],
  w0 = ["innerHTML"],
  x0 = { key: 2, class: "link-text" },
  $0 = { class: "link-text-value" },
  k0 = R({
    __name: "VPFeature",
    props: {
      icon: null,
      title: null,
      details: null,
      link: null,
      linkText: null,
    },
    setup(e) {
      return (t, n) => (
        h(),
        W(
          gt,
          { class: "VPFeature", href: e.link, "no-icon": !0 },
          {
            default: A(() => [
              y("article", g0, [
                typeof e.icon == "object"
                  ? (h(),
                    W(
                      fo,
                      {
                        key: 0,
                        image: e.icon,
                        alt: e.icon.alt,
                        height: e.icon.height,
                        width: e.icon.width,
                      },
                      null,
                      8,
                      ["image", "alt", "height", "width"]
                    ))
                  : e.icon
                  ? (h(), g("div", b0, ae(e.icon), 1))
                  : U("", !0),
                y("h2", { class: "title", innerHTML: e.title }, null, 8, y0),
                y("p", { class: "details", innerHTML: e.details }, null, 8, w0),
                e.linkText
                  ? (h(),
                    g("div", x0, [
                      y("p", $0, [
                        Te(ae(e.linkText) + " ", 1),
                        E(m0, { class: "link-text-icon" }),
                      ]),
                    ]))
                  : U("", !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ["href"]
        )
      );
    },
  });
const P0 = F(k0, [["__scopeId", "data-v-1ef28411"]]),
  C0 = { key: 0, class: "VPFeatures" },
  S0 = { class: "container" },
  T0 = { class: "items" },
  V0 = R({
    __name: "VPFeatures",
    props: { features: null },
    setup(e) {
      const t = e,
        n = K(() => {
          const s = t.features.length;
          if (s) {
            if (s === 2) return "grid-2";
            if (s === 3) return "grid-3";
            if (s % 3 === 0) return "grid-6";
            if (s % 2 === 0) return "grid-4";
          } else return;
        });
      return (s, o) =>
        e.features
          ? (h(),
            g("div", C0, [
              y("div", S0, [
                y("div", T0, [
                  (h(!0),
                  g(
                    Z,
                    null,
                    Ee(
                      e.features,
                      (r) => (
                        h(),
                        g(
                          "div",
                          { key: r.title, class: me(["item", [_(n)]]) },
                          [
                            E(
                              P0,
                              {
                                icon: r.icon,
                                title: r.title,
                                details: r.details,
                                link: r.link,
                                "link-text": r.linkText,
                              },
                              null,
                              8,
                              ["icon", "title", "details", "link", "link-text"]
                            ),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]))
          : U("", !0);
    },
  });
const E0 = F(V0, [["__scopeId", "data-v-6816157f"]]),
  L0 = R({
    __name: "VPHomeFeatures",
    setup(e) {
      const { frontmatter: t } = ue();
      return (n, s) =>
        _(t).features
          ? (h(),
            W(
              E0,
              { key: 0, class: "VPHomeFeatures", features: _(t).features },
              null,
              8,
              ["features"]
            ))
          : U("", !0);
    },
  }),
  A0 = { class: "VPHome" },
  M0 = R({
    __name: "VPHome",
    setup(e) {
      return (t, n) => {
        const s = It("Content");
        return (
          h(),
          g("div", A0, [
            S(t.$slots, "home-hero-before", {}, void 0, !0),
            E(f0, null, {
              "home-hero-image": A(() => [
                S(t.$slots, "home-hero-image", {}, void 0, !0),
              ]),
              _: 3,
            }),
            S(t.$slots, "home-hero-after", {}, void 0, !0),
            S(t.$slots, "home-features-before", {}, void 0, !0),
            E(L0),
            S(t.$slots, "home-features-after", {}, void 0, !0),
            E(s),
          ])
        );
      };
    },
  });
const I0 = F(M0, [["__scopeId", "data-v-b07783ac"]]);
function N0() {
  const { hasSidebar: e } = rt(),
    t = Bs("(min-width: 960px)"),
    n = Bs("(min-width: 1280px)");
  return {
    isAsideEnabled: K(() =>
      !n.value && !t.value ? !1 : e.value ? n.value : t.value
    ),
  };
}
const O0 = 71;
function B0(e, t) {
  if (e === !1) return [];
  let n = [];
  return (
    document.querySelectorAll("h2, h3, h4, h5, h6").forEach((s) => {
      if (s.textContent && s.id) {
        let o = s.textContent;
        if (t === !1) {
          const r = s.cloneNode(!0);
          for (const i of r.querySelectorAll(".VPBadge")) i.remove();
          o = r.textContent || "";
        }
        n.push({
          level: Number(s.tagName[1]),
          title: o.replace(/\s+#\s*$/, ""),
          link: `#${s.id}`,
        });
      }
    }),
    F0(n, e)
  );
}
function F0(e, t) {
  const n = (typeof t == "object" && !Array.isArray(t) ? t.level : t) || 2;
  return H0(e, typeof n == "number" ? [n, n] : n === "deep" ? [2, 6] : n);
}
function H0(e, t) {
  const n = [];
  return (
    (e = e.map((s) => ({ ...s }))),
    e.forEach((s, o) => {
      s.level >= t[0] && s.level <= t[1] && R0(o, e, t) && n.push(s);
    }),
    n
  );
}
function R0(e, t, n) {
  if (e === 0) return !0;
  const s = t[e];
  for (let o = e - 1; o >= 0; o--) {
    const r = t[o];
    if (r.level < s.level && r.level >= n[0] && r.level <= n[1])
      return r.children == null && (r.children = []), r.children.push(s), !1;
  }
  return !0;
}
function D0(e, t) {
  const { isAsideEnabled: n } = N0(),
    s = Zc(r, 100);
  let o = null;
  Be(() => {
    requestAnimationFrame(r), window.addEventListener("scroll", s);
  }),
    ro(() => {
      i(location.hash);
    }),
    vt(() => {
      window.removeEventListener("scroll", s);
    });
  function r() {
    if (!n.value) return;
    const l = [].slice.call(e.value.querySelectorAll(".outline-link")),
      a = [].slice
        .call(document.querySelectorAll(".content .header-anchor"))
        .filter((k) =>
          l.some((H) => H.hash === k.hash && k.offsetParent !== null)
        ),
      u = window.scrollY,
      d = window.innerHeight,
      p = document.body.offsetHeight,
      v = Math.abs(u + d - p) < 1;
    if (a.length && v) {
      i(a[a.length - 1].hash);
      return;
    }
    for (let k = 0; k < a.length; k++) {
      const H = a[k],
        N = a[k + 1],
        [X, b] = U0(k, H, N);
      if (X) {
        i(b);
        return;
      }
    }
  }
  function i(l) {
    o && o.classList.remove("active"),
      l !== null &&
        (o = e.value.querySelector(`a[href="${decodeURIComponent(l)}"]`));
    const a = o;
    a
      ? (a.classList.add("active"),
        (t.value.style.top = a.offsetTop + 33 + "px"),
        (t.value.style.opacity = "1"))
      : ((t.value.style.top = "33px"), (t.value.style.opacity = "0"));
  }
}
function vr(e) {
  return e.parentElement.offsetTop - O0;
}
function U0(e, t, n) {
  const s = window.scrollY;
  return e === 0 && s === 0
    ? [!0, null]
    : s < vr(t)
    ? [!1, null]
    : !n || s < vr(n)
    ? [!0, t.hash]
    : [!1, null];
}
const j0 = ["href"],
  z0 = R({
    __name: "VPDocAsideOutlineItem",
    props: {
      headers: null,
      onClick: { type: Function },
      root: { type: Boolean },
    },
    setup(e) {
      return (t, n) => {
        const s = It("VPDocAsideOutlineItem", !0);
        return (
          h(),
          g(
            "ul",
            { class: me(e.root ? "root" : "nested") },
            [
              (h(!0),
              g(
                Z,
                null,
                Ee(
                  e.headers,
                  ({ children: o, link: r, title: i }) => (
                    h(),
                    g("li", null, [
                      y(
                        "a",
                        {
                          class: "outline-link",
                          href: r,
                          onClick:
                            n[0] ||
                            (n[0] = (...l) => e.onClick && e.onClick(...l)),
                        },
                        ae(i),
                        9,
                        j0
                      ),
                      o != null && o.length
                        ? (h(),
                          W(
                            s,
                            { key: 0, headers: o, onClick: e.onClick },
                            null,
                            8,
                            ["headers", "onClick"]
                          ))
                        : U("", !0),
                    ])
                  )
                ),
                256
              )),
            ],
            2
          )
        );
      };
    },
  });
const K0 = F(z0, [["__scopeId", "data-v-1188541a"]]),
  q0 = (e) => (Ze("data-v-5dd9d5f6"), (e = e()), et(), e),
  W0 = { class: "content" },
  G0 = { class: "outline-title" },
  Y0 = { "aria-labelledby": "doc-outline-aria-label" },
  Q0 = q0(() =>
    y(
      "span",
      { class: "visually-hidden", id: "doc-outline-aria-label" },
      " Table of Contents for current page ",
      -1
    )
  ),
  X0 = R({
    __name: "VPDocAsideOutline",
    setup(e) {
      const { frontmatter: t, theme: n } = ue(),
        s = K(() => t.value.outline ?? n.value.outline),
        o = qe("onContentUpdated");
      o.value = () => {
        r.value = B0(s.value, n.value.outlineBadges);
      };
      const r = ce([]),
        i = K(() => r.value.length > 0),
        l = ce(),
        a = ce();
      D0(l, a);
      function u({ target: d }) {
        const p = "#" + d.href.split("#")[1],
          v = document.querySelector(decodeURIComponent(p));
        v == null || v.focus();
      }
      return (d, p) => (
        h(),
        g(
          "div",
          {
            class: me(["VPDocAsideOutline", { "has-outline": _(i) }]),
            ref_key: "container",
            ref: l,
          },
          [
            y("div", W0, [
              y(
                "div",
                { class: "outline-marker", ref_key: "marker", ref: a },
                null,
                512
              ),
              y(
                "div",
                G0,
                ae(
                  (typeof _(n).outline == "object" &&
                    !Array.isArray(_(n).outline) &&
                    _(n).outline.label) ||
                    _(n).outlineTitle ||
                    "On this page"
                ),
                1
              ),
              y("nav", Y0, [
                Q0,
                E(K0, { headers: r.value, root: !0, onClick: u }, null, 8, [
                  "headers",
                ]),
              ]),
            ]),
          ],
          2
        )
      );
    },
  });
const J0 = F(X0, [["__scopeId", "data-v-5dd9d5f6"]]),
  Z0 = { class: "VPDocAsideCarbonAds" },
  e_ = R({
    __name: "VPDocAsideCarbonAds",
    props: { carbonAds: null },
    setup(e) {
      const t = () => null;
      return (n, s) => (
        h(),
        g("div", Z0, [
          E(_(t), { "carbon-ads": e.carbonAds }, null, 8, ["carbon-ads"]),
        ])
      );
    },
  }),
  t_ = (e) => (Ze("data-v-cdc66372"), (e = e()), et(), e),
  n_ = { class: "VPDocAside" },
  s_ = t_(() => y("div", { class: "spacer" }, null, -1)),
  o_ = R({
    __name: "VPDocAside",
    setup(e) {
      const { theme: t } = ue();
      return (n, s) => (
        h(),
        g("div", n_, [
          S(n.$slots, "aside-top", {}, void 0, !0),
          S(n.$slots, "aside-outline-before", {}, void 0, !0),
          E(J0),
          S(n.$slots, "aside-outline-after", {}, void 0, !0),
          s_,
          S(n.$slots, "aside-ads-before", {}, void 0, !0),
          _(t).carbonAds
            ? (h(),
              W(e_, { key: 0, "carbon-ads": _(t).carbonAds }, null, 8, [
                "carbon-ads",
              ]))
            : U("", !0),
          S(n.$slots, "aside-ads-after", {}, void 0, !0),
          S(n.$slots, "aside-bottom", {}, void 0, !0),
        ])
      );
    },
  });
const r_ = F(o_, [["__scopeId", "data-v-cdc66372"]]);
function i_() {
  const { theme: e, page: t } = ue();
  return K(() => {
    const { text: n = "Edit this page", pattern: s = "" } =
        e.value.editLink || {},
      { relativePath: o } = t.value;
    return { url: s.replace(/:path/g, o), text: n };
  });
}
function l_() {
  const { page: e, theme: t, frontmatter: n } = ue();
  return K(() => {
    const s = Si(t.value.sidebar, e.value.relativePath),
      o = tu(s),
      r = o.findIndex((i) => Nt(e.value.relativePath, i.link));
    return {
      prev: n.value.prev ? { ...o[r - 1], text: n.value.prev } : o[r - 1],
      next: n.value.next ? { ...o[r + 1], text: n.value.next } : o[r + 1],
    };
  });
}
const a_ = {},
  c_ = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  u_ = y(
    "path",
    {
      d: "M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z",
    },
    null,
    -1
  ),
  f_ = y(
    "path",
    {
      d: "M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z",
    },
    null,
    -1
  ),
  d_ = [u_, f_];
function h_(e, t) {
  return h(), g("svg", c_, d_);
}
const __ = F(a_, [["render", h_]]),
  p_ = { class: "VPLastUpdated" },
  v_ = ["datetime"],
  m_ = R({
    __name: "VPDocFooterLastUpdated",
    setup(e) {
      const { theme: t, page: n } = ue(),
        s = K(() => new Date(n.value.lastUpdated)),
        o = K(() => s.value.toISOString()),
        r = ce("");
      return (
        Be(() => {
          At(() => {
            r.value = s.value.toLocaleString(window.navigator.language);
          });
        }),
        (i, l) => (
          h(),
          g("p", p_, [
            Te(ae(_(t).lastUpdatedText || "Last updated") + ": ", 1),
            y("time", { datetime: _(o) }, ae(r.value), 9, v_),
          ])
        )
      );
    },
  });
const g_ = F(m_, [["__scopeId", "data-v-355aa5ef"]]),
  b_ = { key: 0, class: "VPDocFooter" },
  y_ = { key: 0, class: "edit-info" },
  w_ = { key: 0, class: "edit-link" },
  x_ = { key: 1, class: "last-updated" },
  $_ = { key: 1, class: "prev-next" },
  k_ = { class: "pager" },
  P_ = ["href"],
  C_ = ["innerHTML"],
  S_ = ["innerHTML"],
  T_ = ["href"],
  V_ = ["innerHTML"],
  E_ = ["innerHTML"],
  L_ = R({
    __name: "VPDocFooter",
    setup(e) {
      const { theme: t, page: n, frontmatter: s } = ue(),
        o = i_(),
        r = l_(),
        i = K(() => t.value.editLink && s.value.editLink !== !1),
        l = K(() => n.value.lastUpdated && s.value.lastUpdated !== !1),
        a = K(() => i.value || l.value || r.value.prev || r.value.next);
      return (u, d) => {
        var p, v;
        return _(a)
          ? (h(),
            g("footer", b_, [
              _(i) || _(l)
                ? (h(),
                  g("div", y_, [
                    _(i)
                      ? (h(),
                        g("div", w_, [
                          E(
                            gt,
                            {
                              class: "edit-link-button",
                              href: _(o).url,
                              "no-icon": !0,
                            },
                            {
                              default: A(() => [
                                E(__, { class: "edit-link-icon" }),
                                Te(" " + ae(_(o).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["href"]
                          ),
                        ]))
                      : U("", !0),
                    _(l) ? (h(), g("div", x_, [E(g_)])) : U("", !0),
                  ]))
                : U("", !0),
              _(r).prev || _(r).next
                ? (h(),
                  g("div", $_, [
                    y("div", k_, [
                      _(r).prev
                        ? (h(),
                          g(
                            "a",
                            {
                              key: 0,
                              class: "pager-link prev",
                              href: _(gn)(_(r).prev.link),
                            },
                            [
                              y(
                                "span",
                                {
                                  class: "desc",
                                  innerHTML:
                                    ((p = _(t).docFooter) == null
                                      ? void 0
                                      : p.prev) || "Previous page",
                                },
                                null,
                                8,
                                C_
                              ),
                              y(
                                "span",
                                { class: "title", innerHTML: _(r).prev.text },
                                null,
                                8,
                                S_
                              ),
                            ],
                            8,
                            P_
                          ))
                        : U("", !0),
                    ]),
                    y(
                      "div",
                      { class: me(["pager", { "has-prev": _(r).prev }]) },
                      [
                        _(r).next
                          ? (h(),
                            g(
                              "a",
                              {
                                key: 0,
                                class: "pager-link next",
                                href: _(gn)(_(r).next.link),
                              },
                              [
                                y(
                                  "span",
                                  {
                                    class: "desc",
                                    innerHTML:
                                      ((v = _(t).docFooter) == null
                                        ? void 0
                                        : v.next) || "Next page",
                                  },
                                  null,
                                  8,
                                  V_
                                ),
                                y(
                                  "span",
                                  { class: "title", innerHTML: _(r).next.text },
                                  null,
                                  8,
                                  E_
                                ),
                              ],
                              8,
                              T_
                            ))
                          : U("", !0),
                      ],
                      2
                    ),
                  ]))
                : U("", !0),
            ]))
          : U("", !0);
      };
    },
  });
const A_ = F(L_, [["__scopeId", "data-v-e033cd21"]]),
  M_ = (e) => (Ze("data-v-c5936a1e"), (e = e()), et(), e),
  I_ = { class: "container" },
  N_ = { key: 0, class: "aside" },
  O_ = M_(() => y("div", { class: "aside-curtain" }, null, -1)),
  B_ = { class: "aside-container" },
  F_ = { class: "aside-content" },
  H_ = { class: "content" },
  R_ = { class: "content-container" },
  D_ = { class: "main" },
  U_ = R({
    __name: "VPDoc",
    setup(e) {
      const t = mt(),
        { hasSidebar: n, hasAside: s } = rt(),
        o = K(() => t.path.replace(/[./]+/g, "_").replace(/_html$/, "")),
        r = ce();
      return (
        jt("onContentUpdated", r),
        (i, l) => {
          const a = It("Content");
          return (
            h(),
            g(
              "div",
              {
                class: me([
                  "VPDoc",
                  { "has-sidebar": _(n), "has-aside": _(s) },
                ]),
              },
              [
                y("div", I_, [
                  _(s)
                    ? (h(),
                      g("div", N_, [
                        O_,
                        y("div", B_, [
                          y("div", F_, [
                            E(r_, null, {
                              "aside-top": A(() => [
                                S(i.$slots, "aside-top", {}, void 0, !0),
                              ]),
                              "aside-bottom": A(() => [
                                S(i.$slots, "aside-bottom", {}, void 0, !0),
                              ]),
                              "aside-outline-before": A(() => [
                                S(
                                  i.$slots,
                                  "aside-outline-before",
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              "aside-outline-after": A(() => [
                                S(
                                  i.$slots,
                                  "aside-outline-after",
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              "aside-ads-before": A(() => [
                                S(i.$slots, "aside-ads-before", {}, void 0, !0),
                              ]),
                              "aside-ads-after": A(() => [
                                S(i.$slots, "aside-ads-after", {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ]))
                    : U("", !0),
                  y("div", H_, [
                    y("div", R_, [
                      S(i.$slots, "doc-before", {}, void 0, !0),
                      y("main", D_, [
                        E(
                          a,
                          {
                            class: me(["vp-doc", _(o)]),
                            onContentUpdated: r.value,
                          },
                          null,
                          8,
                          ["class", "onContentUpdated"]
                        ),
                      ]),
                      S(i.$slots, "doc-footer-before", {}, void 0, !0),
                      E(A_),
                      S(i.$slots, "doc-after", {}, void 0, !0),
                    ]),
                  ]),
                ]),
              ],
              2
            )
          );
        }
      );
    },
  });
const j_ = F(U_, [["__scopeId", "data-v-c5936a1e"]]),
  z_ = R({
    __name: "VPContent",
    setup(e) {
      const t = mt(),
        { frontmatter: n } = ue(),
        { hasSidebar: s } = rt(),
        o = qe("NotFound");
      return (r, i) => (
        h(),
        g(
          "div",
          {
            class: me([
              "VPContent",
              { "has-sidebar": _(s), "is-home": _(n).layout === "home" },
            ]),
            id: "VPContent",
          },
          [
            _(t).component === _(o)
              ? (h(), W(_(o), { key: 0 }))
              : _(n).layout === "page"
              ? (h(), W(Yh, { key: 1 }))
              : _(n).layout === "home"
              ? (h(),
                W(
                  I0,
                  { key: 2 },
                  {
                    "home-hero-before": A(() => [
                      S(r.$slots, "home-hero-before", {}, void 0, !0),
                    ]),
                    "home-hero-image": A(() => [
                      S(r.$slots, "home-hero-image", {}, void 0, !0),
                    ]),
                    "home-hero-after": A(() => [
                      S(r.$slots, "home-hero-after", {}, void 0, !0),
                    ]),
                    "home-features-before": A(() => [
                      S(r.$slots, "home-features-before", {}, void 0, !0),
                    ]),
                    "home-features-after": A(() => [
                      S(r.$slots, "home-features-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }
                ))
              : (h(),
                W(
                  j_,
                  { key: 3 },
                  {
                    "doc-footer-before": A(() => [
                      S(r.$slots, "doc-footer-before", {}, void 0, !0),
                    ]),
                    "doc-before": A(() => [
                      S(r.$slots, "doc-before", {}, void 0, !0),
                    ]),
                    "doc-after": A(() => [
                      S(r.$slots, "doc-after", {}, void 0, !0),
                    ]),
                    "aside-top": A(() => [
                      S(r.$slots, "aside-top", {}, void 0, !0),
                    ]),
                    "aside-outline-before": A(() => [
                      S(r.$slots, "aside-outline-before", {}, void 0, !0),
                    ]),
                    "aside-outline-after": A(() => [
                      S(r.$slots, "aside-outline-after", {}, void 0, !0),
                    ]),
                    "aside-ads-before": A(() => [
                      S(r.$slots, "aside-ads-before", {}, void 0, !0),
                    ]),
                    "aside-ads-after": A(() => [
                      S(r.$slots, "aside-ads-after", {}, void 0, !0),
                    ]),
                    "aside-bottom": A(() => [
                      S(r.$slots, "aside-bottom", {}, void 0, !0),
                    ]),
                    _: 3,
                  }
                )),
          ],
          2
        )
      );
    },
  });
const K_ = F(z_, [["__scopeId", "data-v-0bd490fb"]]),
  q_ = { class: "container" },
  W_ = ["innerHTML"],
  G_ = ["innerHTML"],
  Y_ = R({
    __name: "VPFooter",
    setup(e) {
      const { theme: t } = ue(),
        { hasSidebar: n } = rt();
      return (s, o) =>
        _(t).footer
          ? (h(),
            g(
              "footer",
              { key: 0, class: me(["VPFooter", { "has-sidebar": _(n) }]) },
              [
                y("div", q_, [
                  _(t).footer.message
                    ? (h(),
                      g(
                        "p",
                        {
                          key: 0,
                          class: "message",
                          innerHTML: _(t).footer.message,
                        },
                        null,
                        8,
                        W_
                      ))
                    : U("", !0),
                  _(t).footer.copyright
                    ? (h(),
                      g(
                        "p",
                        {
                          key: 1,
                          class: "copyright",
                          innerHTML: _(t).footer.copyright,
                        },
                        null,
                        8,
                        G_
                      ))
                    : U("", !0),
                ]),
              ],
              2
            ))
          : U("", !0);
    },
  });
const Q_ = F(Y_, [["__scopeId", "data-v-d24360a6"]]),
  X_ = { key: 0, class: "Layout" },
  J_ = R({
    __name: "Layout",
    setup(e) {
      const { isOpen: t, open: n, close: s } = rt(),
        o = mt();
      Xe(() => o.path, s),
        nu(t, s),
        jt("close-sidebar", s),
        jt("is-sidebar-open", t);
      const { frontmatter: r } = ue(),
        i = Fa(),
        l = K(() => !!i["home-hero-image"]);
      return (
        jt("hero-image-slot-exists", l),
        (a, u) => {
          const d = It("Content");
          return _(r).layout !== !1
            ? (h(),
              g("div", X_, [
                S(a.$slots, "layout-top", {}, void 0, !0),
                E(ru),
                E(
                  au,
                  { class: "backdrop", show: _(t), onClick: _(s) },
                  null,
                  8,
                  ["show", "onClick"]
                ),
                E(_h, null, {
                  "nav-bar-title-before": A(() => [
                    S(a.$slots, "nav-bar-title-before", {}, void 0, !0),
                  ]),
                  "nav-bar-title-after": A(() => [
                    S(a.$slots, "nav-bar-title-after", {}, void 0, !0),
                  ]),
                  "nav-bar-content-before": A(() => [
                    S(a.$slots, "nav-bar-content-before", {}, void 0, !0),
                  ]),
                  "nav-bar-content-after": A(() => [
                    S(a.$slots, "nav-bar-content-after", {}, void 0, !0),
                  ]),
                  "nav-screen-content-before": A(() => [
                    S(a.$slots, "nav-screen-content-before", {}, void 0, !0),
                  ]),
                  "nav-screen-content-after": A(() => [
                    S(a.$slots, "nav-screen-content-after", {}, void 0, !0),
                  ]),
                  _: 3,
                }),
                E(Th, { open: _(t), onOpenMenu: _(n) }, null, 8, [
                  "open",
                  "onOpenMenu",
                ]),
                E(
                  Kh,
                  { open: _(t) },
                  {
                    "sidebar-nav-before": A(() => [
                      S(a.$slots, "sidebar-nav-before", {}, void 0, !0),
                    ]),
                    "sidebar-nav-after": A(() => [
                      S(a.$slots, "sidebar-nav-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ["open"]
                ),
                E(K_, null, {
                  "home-hero-before": A(() => [
                    S(a.$slots, "home-hero-before", {}, void 0, !0),
                  ]),
                  "home-hero-image": A(() => [
                    S(a.$slots, "home-hero-image", {}, void 0, !0),
                  ]),
                  "home-hero-after": A(() => [
                    S(a.$slots, "home-hero-after", {}, void 0, !0),
                  ]),
                  "home-features-before": A(() => [
                    S(a.$slots, "home-features-before", {}, void 0, !0),
                  ]),
                  "home-features-after": A(() => [
                    S(a.$slots, "home-features-after", {}, void 0, !0),
                  ]),
                  "doc-footer-before": A(() => [
                    S(a.$slots, "doc-footer-before", {}, void 0, !0),
                  ]),
                  "doc-before": A(() => [
                    S(a.$slots, "doc-before", {}, void 0, !0),
                  ]),
                  "doc-after": A(() => [
                    S(a.$slots, "doc-after", {}, void 0, !0),
                  ]),
                  "aside-top": A(() => [
                    S(a.$slots, "aside-top", {}, void 0, !0),
                  ]),
                  "aside-bottom": A(() => [
                    S(a.$slots, "aside-bottom", {}, void 0, !0),
                  ]),
                  "aside-outline-before": A(() => [
                    S(a.$slots, "aside-outline-before", {}, void 0, !0),
                  ]),
                  "aside-outline-after": A(() => [
                    S(a.$slots, "aside-outline-after", {}, void 0, !0),
                  ]),
                  "aside-ads-before": A(() => [
                    S(a.$slots, "aside-ads-before", {}, void 0, !0),
                  ]),
                  "aside-ads-after": A(() => [
                    S(a.$slots, "aside-ads-after", {}, void 0, !0),
                  ]),
                  _: 3,
                }),
                E(Q_),
                S(a.$slots, "layout-bottom", {}, void 0, !0),
              ]))
            : (h(), W(d, { key: 1 }));
        }
      );
    },
  });
const Z_ = F(J_, [["__scopeId", "data-v-93a960b4"]]),
  us = (e) => (Ze("data-v-63c9cdeb"), (e = e()), et(), e),
  e1 = { class: "NotFound" },
  t1 = us(() => y("p", { class: "code" }, "404", -1)),
  n1 = us(() => y("h1", { class: "title" }, "PAGE NOT FOUND", -1)),
  s1 = us(() => y("div", { class: "divider" }, null, -1)),
  o1 = us(() =>
    y(
      "blockquote",
      { class: "quote" },
      " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",
      -1
    )
  ),
  r1 = { class: "action" },
  i1 = ["href"],
  l1 = R({
    __name: "NotFound",
    setup(e) {
      const { site: t } = ue(),
        { localeLinks: n } = yn({ removeCurrent: !1 }),
        s = ce("/");
      return (
        Be(() => {
          var r;
          const o = window.location.pathname
            .replace(t.value.base, "")
            .replace(/(^.*?\/).*$/, "/$1");
          n.value.length &&
            (s.value =
              ((r = n.value.find(({ link: i }) => i.startsWith(o))) == null
                ? void 0
                : r.link) || n.value[0].link);
        }),
        (o, r) => (
          h(),
          g("div", e1, [
            t1,
            n1,
            s1,
            o1,
            y("div", r1, [
              y(
                "a",
                {
                  class: "link",
                  href: _(mn)(s.value),
                  "aria-label": "go to home",
                },
                " Take me home ",
                8,
                i1
              ),
            ]),
          ])
        )
      );
    },
  });
const a1 = F(l1, [["__scopeId", "data-v-63c9cdeb"]]);
const Wt = {
  Layout: Z_,
  NotFound: a1,
  enhanceApp: ({ app: e }) => {
    e.component("Badge", kc);
  },
};
function c1(e, t) {
  let n = [],
    s = !0;
  const o = (r) => {
    if (s) {
      s = !1;
      return;
    }
    n.forEach((i) => document.head.removeChild(i)),
      (n = []),
      r.forEach((i) => {
        const l = u1(i);
        document.head.appendChild(l), n.push(l);
      });
  };
  At(() => {
    const r = e.data,
      i = t.value,
      l = r && r.description,
      a = (r && r.frontmatter.head) || [];
    (document.title = gi(i, r)),
      document
        .querySelector("meta[name=description]")
        .setAttribute("content", l || i.description),
      o(bi(i.head, d1(a)));
  });
}
function u1([e, t, n]) {
  const s = document.createElement(e);
  for (const o in t) s.setAttribute(o, t[o]);
  return n && (s.innerHTML = n), s;
}
function f1(e) {
  return e[0] === "meta" && e[1] && e[1].name === "description";
}
function d1(e) {
  return e.filter((t) => !f1(t));
}
const xs = new Set(),
  Bi = () => document.createElement("link"),
  h1 = (e) => {
    const t = Bi();
    (t.rel = "prefetch"), (t.href = e), document.head.appendChild(t);
  },
  _1 = (e) => {
    const t = new XMLHttpRequest();
    t.open("GET", e, (t.withCredentials = !0)), t.send();
  };
let Ln;
const p1 =
  Ce &&
  (Ln = Bi()) &&
  Ln.relList &&
  Ln.relList.supports &&
  Ln.relList.supports("prefetch")
    ? h1
    : _1;
function v1() {
  if (!Ce || !window.IntersectionObserver) return;
  let e;
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return;
  const t = window.requestIdleCallback || setTimeout;
  let n = null;
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((r) => {
        r.forEach((i) => {
          if (i.isIntersecting) {
            const l = i.target;
            n.unobserve(l);
            const { pathname: a } = l;
            if (!xs.has(a)) {
              xs.add(a);
              const u = xi(a);
              p1(u);
            }
          }
        });
      })),
      t(() => {
        document.querySelectorAll("#app a").forEach((r) => {
          const { target: i } = r,
            { hostname: l, pathname: a } = new URL(
              r.href instanceof SVGAnimatedString ? r.href.animVal : r.href,
              r.baseURI
            ),
            u = a.match(/\.\w+$/);
          (u && u[0] !== ".html") ||
            (i !== "_blank" &&
              l === location.hostname &&
              (a !== location.pathname ? n.observe(r) : xs.add(a)));
        });
      });
  };
  Be(s);
  const o = mt();
  Xe(() => o.path, s),
    vt(() => {
      n && n.disconnect();
    });
}
const m1 = R({
  setup(e, { slots: t }) {
    const n = ce(!1);
    return (
      Be(() => {
        n.value = !0;
      }),
      () => (n.value && t.default ? t.default() : null)
    );
  },
});
function g1() {
  if (Ce) {
    const e = new Map();
    window.addEventListener("click", (t) => {
      var s;
      const n = t.target;
      if (n.matches('div[class*="language-"] > button.copy')) {
        const o = n.parentElement,
          r =
            (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling;
        if (!o || !r) return;
        const i = /language-(shellscript|shell|bash|sh|zsh)/.test(o.className);
        let l = "";
        r.querySelectorAll("span.line:not(.diff.remove)").forEach(
          (a) =>
            (l +=
              (a.textContent || "") +
              `
`)
        ),
          (l = l.slice(0, -1)),
          i && (l = l.replace(/^ *(\$|>) /gm, "").trim()),
          b1(l).then(() => {
            n.classList.add("copied"), clearTimeout(e.get(n));
            const a = setTimeout(() => {
              n.classList.remove("copied"), n.blur(), e.delete(n);
            }, 2e3);
            e.set(n, a);
          });
      }
    });
  }
}
async function b1(e) {
  try {
    return navigator.clipboard.writeText(e);
  } catch {
    const t = document.createElement("textarea"),
      n = document.activeElement;
    (t.value = e),
      t.setAttribute("readonly", ""),
      (t.style.contain = "strict"),
      (t.style.position = "absolute"),
      (t.style.left = "-9999px"),
      (t.style.fontSize = "12pt");
    const s = document.getSelection(),
      o = s ? s.rangeCount > 0 && s.getRangeAt(0) : null;
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand("copy"),
      document.body.removeChild(t),
      o && (s.removeAllRanges(), s.addRange(o)),
      n && n.focus();
  }
}
function y1() {
  Ce &&
    window.addEventListener("click", (e) => {
      var n, s;
      const t = e.target;
      if (t.matches(".vp-code-group input")) {
        const o = (n = t.parentElement) == null ? void 0 : n.parentElement,
          r = Array.from(
            (o == null ? void 0 : o.querySelectorAll("input")) || []
          ).indexOf(t),
          i =
            o == null
              ? void 0
              : o.querySelector('div[class*="language-"].active'),
          l =
            (s =
              o == null
                ? void 0
                : o.querySelectorAll('div[class*="language-"]')) == null
              ? void 0
              : s[r];
        i &&
          l &&
          i !== l &&
          (i.classList.remove("active"), l.classList.add("active"));
      }
    });
}
const Fi = Wt.NotFound || (() => "404 Not Found"),
  w1 = R({
    name: "VitePressApp",
    setup() {
      const { site: e } = wi();
      return (
        Be(() => {
          At(() => {
            (document.documentElement.lang = e.value.lang),
              (document.documentElement.dir = e.value.dir);
          });
        }),
        v1(),
        g1(),
        y1(),
        Wt.setup && Wt.setup(),
        () => jn(Wt.Layout)
      );
    },
  });
async function x1() {
  const e = k1(),
    t = $1();
  t.provide($i, e);
  const n = Mc(e.route);
  return (
    t.provide(yi, n),
    t.provide("NotFound", Fi),
    t.component("Content", Fc),
    t.component("ClientOnly", m1),
    Object.defineProperty(t.config.globalProperties, "$frontmatter", {
      get() {
        return n.frontmatter.value;
      },
    }),
    Wt.enhanceApp && (await Wt.enhanceApp({ app: t, router: e, siteData: ft })),
    { app: t, router: e, data: n }
  );
}
function $1() {
  return gc(w1);
}
function k1() {
  let e = Ce,
    t;
  return Oc((n) => {
    let s = xi(n);
    return (
      e && (t = s),
      (e || t === s) && (s = s.replace(/\.js$/, ".lean.js")),
      Ce && (e = !1),
      xc(() => import(s), [])
    );
  }, Fi);
}
Ce &&
  x1().then(({ app: e, router: t, data: n }) => {
    t.go().then(() => {
      c1(t.route, n.site), e.mount("#app");
    });
  });
export {
  so as A,
  $e as B,
  me as C,
  S1 as D,
  Ee as E,
  Z as F,
  $r as G,
  sl as H,
  ls as T,
  F as _,
  Va as a,
  W as b,
  g as c,
  x1 as createApp,
  E as d,
  y as e,
  rc as f,
  Fa as g,
  Be as h,
  K as i,
  Xe as j,
  At as k,
  S as l,
  T1 as m,
  C1 as n,
  h as o,
  Te as p,
  ae as q,
  ce as r,
  U as s,
  P1 as t,
  _ as u,
  V1 as v,
  A as w,
  js as x,
  Xr as y,
  Xn as z,
};
