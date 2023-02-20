import {
  f as Ei,
  g as Mi,
  r as q,
  h as Zn,
  t as Ga,
  i as J,
  j as he,
  k as go,
  o as P,
  c as U,
  e as N,
  l as Xe,
  m as Ci,
  d as _e,
  w as Cr,
  n as Ka,
  u as S,
  p as Nr,
  q as $e,
  b as fe,
  s as De,
  v as Ni,
  T as Ii,
  x as Bi,
  y as eo,
  z as Ui,
  A as Ai,
  B as Oe,
  C as Ce,
  D as Yi,
  F as Fe,
  E as ze,
  G as ji,
  H as Wi,
} from "../app.7bd6ba26.js";
function Z(t) {
  if (t === null || t === !0 || t === !1) return NaN;
  var e = Number(t);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function Y(t, e) {
  if (e.length < t)
    throw new TypeError(
      t +
        " argument" +
        (t > 1 ? "s" : "") +
        " required, but only " +
        e.length +
        " present"
    );
}
function ut(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ut = function (r) {
          return typeof r;
        })
      : (ut = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    ut(t)
  );
}
function X(t) {
  Y(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || (ut(t) === "object" && e === "[object Date]")
    ? new Date(t.getTime())
    : typeof t == "number" || e === "[object Number]"
    ? new Date(t)
    : ((typeof t == "string" || e === "[object String]") &&
        typeof console < "u" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function Li(t, e) {
  Y(2, arguments);
  var r = X(t).getTime(),
    n = Z(e);
  return new Date(r + n);
}
var Hi = {};
function Ae() {
  return Hi;
}
function Ja(t) {
  var e = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
function wo(t) {
  Y(1, arguments);
  var e = X(t);
  return e.setHours(0, 0, 0, 0), e;
}
var qi = 6e4,
  Vi = 36e5,
  Fi = 1e3;
function zi(t, e) {
  Y(2, arguments);
  var r = wo(t),
    n = wo(e);
  return r.getTime() === n.getTime();
}
function ft(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ft = function (r) {
          return typeof r;
        })
      : (ft = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    ft(t)
  );
}
function Za(t) {
  return (
    Y(1, arguments),
    t instanceof Date ||
      (ft(t) === "object" &&
        Object.prototype.toString.call(t) === "[object Date]")
  );
}
function ei(t) {
  if ((Y(1, arguments), !Za(t) && typeof t != "number")) return !1;
  var e = X(t);
  return !isNaN(Number(e));
}
function ti(t, e) {
  Y(2, arguments);
  var r = Z(e);
  return Li(t, -r);
}
var Qi = 864e5;
function Xi(t) {
  Y(1, arguments);
  var e = X(t),
    r = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var n = e.getTime(),
    o = r - n;
  return Math.floor(o / Qi) + 1;
}
function Ne(t) {
  Y(1, arguments);
  var e = 1,
    r = X(t),
    n = r.getUTCDay(),
    o = (n < e ? 7 : 0) + n - e;
  return r.setUTCDate(r.getUTCDate() - o), r.setUTCHours(0, 0, 0, 0), r;
}
function ri(t) {
  Y(1, arguments);
  var e = X(t),
    r = e.getUTCFullYear(),
    n = new Date(0);
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var o = Ne(n),
    a = new Date(0);
  a.setUTCFullYear(r, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = Ne(a);
  return e.getTime() >= o.getTime()
    ? r + 1
    : e.getTime() >= i.getTime()
    ? r
    : r - 1;
}
function Gi(t) {
  Y(1, arguments);
  var e = ri(t),
    r = new Date(0);
  r.setUTCFullYear(e, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var n = Ne(r);
  return n;
}
var Ki = 6048e5;
function ni(t) {
  Y(1, arguments);
  var e = X(t),
    r = Ne(e).getTime() - Gi(e).getTime();
  return Math.round(r / Ki) + 1;
}
function Ee(t, e) {
  var r, n, o, a, i, u, f, c;
  Y(1, arguments);
  var l = Ae(),
    y = Z(
      (r =
        (n =
          (o =
            (a = e == null ? void 0 : e.weekStartsOn) !== null && a !== void 0
              ? a
              : e == null ||
                (i = e.locale) === null ||
                i === void 0 ||
                (u = i.options) === null ||
                u === void 0
              ? void 0
              : u.weekStartsOn) !== null && o !== void 0
            ? o
            : l.weekStartsOn) !== null && n !== void 0
          ? n
          : (f = l.locale) === null ||
            f === void 0 ||
            (c = f.options) === null ||
            c === void 0
          ? void 0
          : c.weekStartsOn) !== null && r !== void 0
        ? r
        : 0
    );
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = X(t),
    s = p.getUTCDay(),
    v = (s < y ? 7 : 0) + s - y;
  return p.setUTCDate(p.getUTCDate() - v), p.setUTCHours(0, 0, 0, 0), p;
}
function to(t, e) {
  var r, n, o, a, i, u, f, c;
  Y(1, arguments);
  var l = X(t),
    y = l.getUTCFullYear(),
    p = Ae(),
    s = Z(
      (r =
        (n =
          (o =
            (a = e == null ? void 0 : e.firstWeekContainsDate) !== null &&
            a !== void 0
              ? a
              : e == null ||
                (i = e.locale) === null ||
                i === void 0 ||
                (u = i.options) === null ||
                u === void 0
              ? void 0
              : u.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : p.firstWeekContainsDate) !== null && n !== void 0
          ? n
          : (f = p.locale) === null ||
            f === void 0 ||
            (c = f.options) === null ||
            c === void 0
          ? void 0
          : c.firstWeekContainsDate) !== null && r !== void 0
        ? r
        : 1
    );
  if (!(s >= 1 && s <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var v = new Date(0);
  v.setUTCFullYear(y + 1, 0, s), v.setUTCHours(0, 0, 0, 0);
  var d = Ee(v, e),
    h = new Date(0);
  h.setUTCFullYear(y, 0, s), h.setUTCHours(0, 0, 0, 0);
  var m = Ee(h, e);
  return l.getTime() >= d.getTime()
    ? y + 1
    : l.getTime() >= m.getTime()
    ? y
    : y - 1;
}
function Ji(t, e) {
  var r, n, o, a, i, u, f, c;
  Y(1, arguments);
  var l = Ae(),
    y = Z(
      (r =
        (n =
          (o =
            (a = e == null ? void 0 : e.firstWeekContainsDate) !== null &&
            a !== void 0
              ? a
              : e == null ||
                (i = e.locale) === null ||
                i === void 0 ||
                (u = i.options) === null ||
                u === void 0
              ? void 0
              : u.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : l.firstWeekContainsDate) !== null && n !== void 0
          ? n
          : (f = l.locale) === null ||
            f === void 0 ||
            (c = f.options) === null ||
            c === void 0
          ? void 0
          : c.firstWeekContainsDate) !== null && r !== void 0
        ? r
        : 1
    ),
    p = to(t, e),
    s = new Date(0);
  s.setUTCFullYear(p, 0, y), s.setUTCHours(0, 0, 0, 0);
  var v = Ee(s, e);
  return v;
}
var Zi = 6048e5;
function oi(t, e) {
  Y(1, arguments);
  var r = X(t),
    n = Ee(r, e).getTime() - Ji(r, e).getTime();
  return Math.round(n / Zi) + 1;
}
function D(t, e) {
  for (var r = t < 0 ? "-" : "", n = Math.abs(t).toString(); n.length < e; )
    n = "0" + n;
  return r + n;
}
var eu = {
  y: function (e, r) {
    var n = e.getUTCFullYear(),
      o = n > 0 ? n : 1 - n;
    return D(r === "yy" ? o % 100 : o, r.length);
  },
  M: function (e, r) {
    var n = e.getUTCMonth();
    return r === "M" ? String(n + 1) : D(n + 1, 2);
  },
  d: function (e, r) {
    return D(e.getUTCDate(), r.length);
  },
  a: function (e, r) {
    var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  h: function (e, r) {
    return D(e.getUTCHours() % 12 || 12, r.length);
  },
  H: function (e, r) {
    return D(e.getUTCHours(), r.length);
  },
  m: function (e, r) {
    return D(e.getUTCMinutes(), r.length);
  },
  s: function (e, r) {
    return D(e.getUTCSeconds(), r.length);
  },
  S: function (e, r) {
    var n = r.length,
      o = e.getUTCMilliseconds(),
      a = Math.floor(o * Math.pow(10, n - 3));
    return D(a, r.length);
  },
};
const we = eu;
var Me = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  tu = {
    G: function (e, r, n) {
      var o = e.getUTCFullYear() > 0 ? 1 : 0;
      switch (r) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(o, { width: "abbreviated" });
        case "GGGGG":
          return n.era(o, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(o, { width: "wide" });
      }
    },
    y: function (e, r, n) {
      if (r === "yo") {
        var o = e.getUTCFullYear(),
          a = o > 0 ? o : 1 - o;
        return n.ordinalNumber(a, { unit: "year" });
      }
      return we.y(e, r);
    },
    Y: function (e, r, n, o) {
      var a = to(e, o),
        i = a > 0 ? a : 1 - a;
      if (r === "YY") {
        var u = i % 100;
        return D(u, 2);
      }
      return r === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : D(i, r.length);
    },
    R: function (e, r) {
      var n = ri(e);
      return D(n, r.length);
    },
    u: function (e, r) {
      var n = e.getUTCFullYear();
      return D(n, r.length);
    },
    Q: function (e, r, n) {
      var o = Math.ceil((e.getUTCMonth() + 1) / 3);
      switch (r) {
        case "Q":
          return String(o);
        case "QQ":
          return D(o, 2);
        case "Qo":
          return n.ordinalNumber(o, { unit: "quarter" });
        case "QQQ":
          return n.quarter(o, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(o, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(o, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, r, n) {
      var o = Math.ceil((e.getUTCMonth() + 1) / 3);
      switch (r) {
        case "q":
          return String(o);
        case "qq":
          return D(o, 2);
        case "qo":
          return n.ordinalNumber(o, { unit: "quarter" });
        case "qqq":
          return n.quarter(o, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(o, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(o, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, r, n) {
      var o = e.getUTCMonth();
      switch (r) {
        case "M":
        case "MM":
          return we.M(e, r);
        case "Mo":
          return n.ordinalNumber(o + 1, { unit: "month" });
        case "MMM":
          return n.month(o, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(o, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(o, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, r, n) {
      var o = e.getUTCMonth();
      switch (r) {
        case "L":
          return String(o + 1);
        case "LL":
          return D(o + 1, 2);
        case "Lo":
          return n.ordinalNumber(o + 1, { unit: "month" });
        case "LLL":
          return n.month(o, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(o, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(o, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, r, n, o) {
      var a = oi(e, o);
      return r === "wo" ? n.ordinalNumber(a, { unit: "week" }) : D(a, r.length);
    },
    I: function (e, r, n) {
      var o = ni(e);
      return r === "Io" ? n.ordinalNumber(o, { unit: "week" }) : D(o, r.length);
    },
    d: function (e, r, n) {
      return r === "do"
        ? n.ordinalNumber(e.getUTCDate(), { unit: "date" })
        : we.d(e, r);
    },
    D: function (e, r, n) {
      var o = Xi(e);
      return r === "Do"
        ? n.ordinalNumber(o, { unit: "dayOfYear" })
        : D(o, r.length);
    },
    E: function (e, r, n) {
      var o = e.getUTCDay();
      switch (r) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(o, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(o, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(o, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(o, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, r, n, o) {
      var a = e.getUTCDay(),
        i = (a - o.weekStartsOn + 8) % 7 || 7;
      switch (r) {
        case "e":
          return String(i);
        case "ee":
          return D(i, 2);
        case "eo":
          return n.ordinalNumber(i, { unit: "day" });
        case "eee":
          return n.day(a, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(a, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(a, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(a, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, r, n, o) {
      var a = e.getUTCDay(),
        i = (a - o.weekStartsOn + 8) % 7 || 7;
      switch (r) {
        case "c":
          return String(i);
        case "cc":
          return D(i, r.length);
        case "co":
          return n.ordinalNumber(i, { unit: "day" });
        case "ccc":
          return n.day(a, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(a, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(a, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(a, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, r, n) {
      var o = e.getUTCDay(),
        a = o === 0 ? 7 : o;
      switch (r) {
        case "i":
          return String(a);
        case "ii":
          return D(a, r.length);
        case "io":
          return n.ordinalNumber(a, { unit: "day" });
        case "iii":
          return n.day(o, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(o, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(o, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(o, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, r, n) {
      var o = e.getUTCHours(),
        a = o / 12 >= 1 ? "pm" : "am";
      switch (r) {
        case "a":
        case "aa":
          return n.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(a, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(a, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(a, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, r, n) {
      var o = e.getUTCHours(),
        a;
      switch (
        (o === 12
          ? (a = Me.noon)
          : o === 0
          ? (a = Me.midnight)
          : (a = o / 12 >= 1 ? "pm" : "am"),
        r)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(a, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(a, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(a, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, r, n) {
      var o = e.getUTCHours(),
        a;
      switch (
        (o >= 17
          ? (a = Me.evening)
          : o >= 12
          ? (a = Me.afternoon)
          : o >= 4
          ? (a = Me.morning)
          : (a = Me.night),
        r)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(a, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(a, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, r, n) {
      if (r === "ho") {
        var o = e.getUTCHours() % 12;
        return o === 0 && (o = 12), n.ordinalNumber(o, { unit: "hour" });
      }
      return we.h(e, r);
    },
    H: function (e, r, n) {
      return r === "Ho"
        ? n.ordinalNumber(e.getUTCHours(), { unit: "hour" })
        : we.H(e, r);
    },
    K: function (e, r, n) {
      var o = e.getUTCHours() % 12;
      return r === "Ko" ? n.ordinalNumber(o, { unit: "hour" }) : D(o, r.length);
    },
    k: function (e, r, n) {
      var o = e.getUTCHours();
      return (
        o === 0 && (o = 24),
        r === "ko" ? n.ordinalNumber(o, { unit: "hour" }) : D(o, r.length)
      );
    },
    m: function (e, r, n) {
      return r === "mo"
        ? n.ordinalNumber(e.getUTCMinutes(), { unit: "minute" })
        : we.m(e, r);
    },
    s: function (e, r, n) {
      return r === "so"
        ? n.ordinalNumber(e.getUTCSeconds(), { unit: "second" })
        : we.s(e, r);
    },
    S: function (e, r) {
      return we.S(e, r);
    },
    X: function (e, r, n, o) {
      var a = o._originalDate || e,
        i = a.getTimezoneOffset();
      if (i === 0) return "Z";
      switch (r) {
        case "X":
          return Oo(i);
        case "XXXX":
        case "XX":
          return ke(i);
        case "XXXXX":
        case "XXX":
        default:
          return ke(i, ":");
      }
    },
    x: function (e, r, n, o) {
      var a = o._originalDate || e,
        i = a.getTimezoneOffset();
      switch (r) {
        case "x":
          return Oo(i);
        case "xxxx":
        case "xx":
          return ke(i);
        case "xxxxx":
        case "xxx":
        default:
          return ke(i, ":");
      }
    },
    O: function (e, r, n, o) {
      var a = o._originalDate || e,
        i = a.getTimezoneOffset();
      switch (r) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + _o(i, ":");
        case "OOOO":
        default:
          return "GMT" + ke(i, ":");
      }
    },
    z: function (e, r, n, o) {
      var a = o._originalDate || e,
        i = a.getTimezoneOffset();
      switch (r) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + _o(i, ":");
        case "zzzz":
        default:
          return "GMT" + ke(i, ":");
      }
    },
    t: function (e, r, n, o) {
      var a = o._originalDate || e,
        i = Math.floor(a.getTime() / 1e3);
      return D(i, r.length);
    },
    T: function (e, r, n, o) {
      var a = o._originalDate || e,
        i = a.getTime();
      return D(i, r.length);
    },
  };
function _o(t, e) {
  var r = t > 0 ? "-" : "+",
    n = Math.abs(t),
    o = Math.floor(n / 60),
    a = n % 60;
  if (a === 0) return r + String(o);
  var i = e || "";
  return r + String(o) + i + D(a, 2);
}
function Oo(t, e) {
  if (t % 60 === 0) {
    var r = t > 0 ? "-" : "+";
    return r + D(Math.abs(t) / 60, 2);
  }
  return ke(t, e);
}
function ke(t, e) {
  var r = e || "",
    n = t > 0 ? "-" : "+",
    o = Math.abs(t),
    a = D(Math.floor(o / 60), 2),
    i = D(o % 60, 2);
  return n + a + r + i;
}
const ru = tu;
var Po = function (e, r) {
    switch (e) {
      case "P":
        return r.date({ width: "short" });
      case "PP":
        return r.date({ width: "medium" });
      case "PPP":
        return r.date({ width: "long" });
      case "PPPP":
      default:
        return r.date({ width: "full" });
    }
  },
  ai = function (e, r) {
    switch (e) {
      case "p":
        return r.time({ width: "short" });
      case "pp":
        return r.time({ width: "medium" });
      case "ppp":
        return r.time({ width: "long" });
      case "pppp":
      default:
        return r.time({ width: "full" });
    }
  },
  nu = function (e, r) {
    var n = e.match(/(P+)(p+)?/) || [],
      o = n[1],
      a = n[2];
    if (!a) return Po(e, r);
    var i;
    switch (o) {
      case "P":
        i = r.dateTime({ width: "short" });
        break;
      case "PP":
        i = r.dateTime({ width: "medium" });
        break;
      case "PPP":
        i = r.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        i = r.dateTime({ width: "full" });
        break;
    }
    return i.replace("{{date}}", Po(o, r)).replace("{{time}}", ai(a, r));
  },
  ou = { p: ai, P: nu };
const Ir = ou;
var au = ["D", "DD"],
  iu = ["YY", "YYYY"];
function ii(t) {
  return au.indexOf(t) !== -1;
}
function ui(t) {
  return iu.indexOf(t) !== -1;
}
function Ft(t, e, r) {
  if (t === "YYYY")
    throw new RangeError(
      "Use `yyyy` instead of `YYYY` (in `"
        .concat(e, "`) for formatting years to the input `")
        .concat(
          r,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (t === "YY")
    throw new RangeError(
      "Use `yy` instead of `YY` (in `"
        .concat(e, "`) for formatting years to the input `")
        .concat(
          r,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (t === "D")
    throw new RangeError(
      "Use `d` instead of `D` (in `"
        .concat(e, "`) for formatting days of the month to the input `")
        .concat(
          r,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (t === "DD")
    throw new RangeError(
      "Use `dd` instead of `DD` (in `"
        .concat(e, "`) for formatting days of the month to the input `")
        .concat(
          r,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
}
var uu = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  fu = function (e, r, n) {
    var o,
      a = uu[e];
    return (
      typeof a == "string"
        ? (o = a)
        : r === 1
        ? (o = a.one)
        : (o = a.other.replace("{{count}}", r.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + o
          : o + " ago"
        : o
    );
  };
const cu = fu;
function Sr(t) {
  return function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = e.width ? String(e.width) : t.defaultWidth,
      n = t.formats[r] || t.formats[t.defaultWidth];
    return n;
  };
}
var lu = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  su = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  pu = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  yu = {
    date: Sr({ formats: lu, defaultWidth: "full" }),
    time: Sr({ formats: su, defaultWidth: "full" }),
    dateTime: Sr({ formats: pu, defaultWidth: "full" }),
  };
const du = yu;
var vu = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  hu = function (e, r, n, o) {
    return vu[e];
  };
const mu = hu;
function Le(t) {
  return function (e, r) {
    var n = r != null && r.context ? String(r.context) : "standalone",
      o;
    if (n === "formatting" && t.formattingValues) {
      var a = t.defaultFormattingWidth || t.defaultWidth,
        i = r != null && r.width ? String(r.width) : a;
      o = t.formattingValues[i] || t.formattingValues[a];
    } else {
      var u = t.defaultWidth,
        f = r != null && r.width ? String(r.width) : t.defaultWidth;
      o = t.values[f] || t.values[u];
    }
    var c = t.argumentCallback ? t.argumentCallback(e) : e;
    return o[c];
  };
}
var bu = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  gu = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  wu = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  _u = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Ou = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  Pu = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  $u = function (e, r) {
    var n = Number(e),
      o = n % 100;
    if (o > 20 || o < 10)
      switch (o % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  Tu = {
    ordinalNumber: $u,
    era: Le({ values: bu, defaultWidth: "wide" }),
    quarter: Le({
      values: gu,
      defaultWidth: "wide",
      argumentCallback: function (e) {
        return e - 1;
      },
    }),
    month: Le({ values: wu, defaultWidth: "wide" }),
    day: Le({ values: _u, defaultWidth: "wide" }),
    dayPeriod: Le({
      values: Ou,
      defaultWidth: "wide",
      formattingValues: Pu,
      defaultFormattingWidth: "wide",
    }),
  };
const xu = Tu;
function He(t) {
  return function (e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = r.width,
      o = (n && t.matchPatterns[n]) || t.matchPatterns[t.defaultMatchWidth],
      a = e.match(o);
    if (!a) return null;
    var i = a[0],
      u = (n && t.parsePatterns[n]) || t.parsePatterns[t.defaultParseWidth],
      f = Array.isArray(u)
        ? Ru(u, function (y) {
            return y.test(i);
          })
        : Su(u, function (y) {
            return y.test(i);
          }),
      c;
    (c = t.valueCallback ? t.valueCallback(f) : f),
      (c = r.valueCallback ? r.valueCallback(c) : c);
    var l = e.slice(i.length);
    return { value: c, rest: l };
  };
}
function Su(t, e) {
  for (var r in t) if (t.hasOwnProperty(r) && e(t[r])) return r;
}
function Ru(t, e) {
  for (var r = 0; r < t.length; r++) if (e(t[r])) return r;
}
function ku(t) {
  return function (e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = e.match(t.matchPattern);
    if (!n) return null;
    var o = n[0],
      a = e.match(t.parsePattern);
    if (!a) return null;
    var i = t.valueCallback ? t.valueCallback(a[0]) : a[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    var u = e.slice(o.length);
    return { value: i, rest: u };
  };
}
var Du = /^(\d+)(th|st|nd|rd)?/i,
  Eu = /\d+/i,
  Mu = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Cu = { any: [/^b/i, /^(a|c)/i] },
  Nu = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Iu = { any: [/1/i, /2/i, /3/i, /4/i] },
  Bu = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Uu = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Au = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Yu = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  ju = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Wu = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  Lu = {
    ordinalNumber: ku({
      matchPattern: Du,
      parsePattern: Eu,
      valueCallback: function (e) {
        return parseInt(e, 10);
      },
    }),
    era: He({
      matchPatterns: Mu,
      defaultMatchWidth: "wide",
      parsePatterns: Cu,
      defaultParseWidth: "any",
    }),
    quarter: He({
      matchPatterns: Nu,
      defaultMatchWidth: "wide",
      parsePatterns: Iu,
      defaultParseWidth: "any",
      valueCallback: function (e) {
        return e + 1;
      },
    }),
    month: He({
      matchPatterns: Bu,
      defaultMatchWidth: "wide",
      parsePatterns: Uu,
      defaultParseWidth: "any",
    }),
    day: He({
      matchPatterns: Au,
      defaultMatchWidth: "wide",
      parsePatterns: Yu,
      defaultParseWidth: "any",
    }),
    dayPeriod: He({
      matchPatterns: ju,
      defaultMatchWidth: "any",
      parsePatterns: Wu,
      defaultParseWidth: "any",
    }),
  };
const Hu = Lu;
var qu = {
  code: "en-US",
  formatDistance: cu,
  formatLong: du,
  formatRelative: mu,
  localize: xu,
  match: Hu,
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
const fi = qu;
var Vu = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Fu = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  zu = /^'([^]*?)'?$/,
  Qu = /''/g,
  Xu = /[a-zA-Z]/;
function Gu(t, e, r) {
  var n, o, a, i, u, f, c, l, y, p, s, v, d, h, m, _, O, b;
  Y(2, arguments);
  var x = String(e),
    g = Ae(),
    w =
      (n =
        (o = r == null ? void 0 : r.locale) !== null && o !== void 0
          ? o
          : g.locale) !== null && n !== void 0
        ? n
        : fi,
    $ = Z(
      (a =
        (i =
          (u =
            (f = r == null ? void 0 : r.firstWeekContainsDate) !== null &&
            f !== void 0
              ? f
              : r == null ||
                (c = r.locale) === null ||
                c === void 0 ||
                (l = c.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && u !== void 0
            ? u
            : g.firstWeekContainsDate) !== null && i !== void 0
          ? i
          : (y = g.locale) === null ||
            y === void 0 ||
            (p = y.options) === null ||
            p === void 0
          ? void 0
          : p.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    );
  if (!($ >= 1 && $ <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var T = Z(
    (s =
      (v =
        (d =
          (h = r == null ? void 0 : r.weekStartsOn) !== null && h !== void 0
            ? h
            : r == null ||
              (m = r.locale) === null ||
              m === void 0 ||
              (_ = m.options) === null ||
              _ === void 0
            ? void 0
            : _.weekStartsOn) !== null && d !== void 0
          ? d
          : g.weekStartsOn) !== null && v !== void 0
        ? v
        : (O = g.locale) === null ||
          O === void 0 ||
          (b = O.options) === null ||
          b === void 0
        ? void 0
        : b.weekStartsOn) !== null && s !== void 0
      ? s
      : 0
  );
  if (!(T >= 0 && T <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!w.localize)
    throw new RangeError("locale must contain localize property");
  if (!w.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var B = X(t);
  if (!ei(B)) throw new RangeError("Invalid time value");
  var H = Ja(B),
    G = ti(B, H),
    I = {
      firstWeekContainsDate: $,
      weekStartsOn: T,
      locale: w,
      _originalDate: B,
    },
    ee = x
      .match(Fu)
      .map(function (E) {
        var M = E[0];
        if (M === "p" || M === "P") {
          var z = Ir[M];
          return z(E, w.formatLong);
        }
        return E;
      })
      .join("")
      .match(Vu)
      .map(function (E) {
        if (E === "''") return "'";
        var M = E[0];
        if (M === "'") return Ku(E);
        var z = ru[M];
        if (z)
          return (
            !(r != null && r.useAdditionalWeekYearTokens) &&
              ui(E) &&
              Ft(E, e, String(t)),
            !(r != null && r.useAdditionalDayOfYearTokens) &&
              ii(E) &&
              Ft(E, e, String(t)),
            z(G, E, w.localize, I)
          );
        if (M.match(Xu))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              M +
              "`"
          );
        return E;
      })
      .join("");
  return ee;
}
function Ku(t) {
  var e = t.match(zu);
  return e ? e[1].replace(Qu, "'") : t;
}
function Ju(t, e) {
  if (t == null)
    throw new TypeError(
      "assign requires that input parameter not be null or undefined"
    );
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t;
}
function ct(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ct = function (r) {
          return typeof r;
        })
      : (ct = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    ct(t)
  );
}
function ci(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Br(t, e);
}
function Br(t, e) {
  return (
    (Br =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Br(t, e)
  );
}
function li(t) {
  var e = ef();
  return function () {
    var n = zt(t),
      o;
    if (e) {
      var a = zt(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Zu(this, o);
  };
}
function Zu(t, e) {
  return e && (ct(e) === "object" || typeof e == "function") ? e : Ur(t);
}
function Ur(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function ef() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function zt(t) {
  return (
    (zt = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    zt(t)
  );
}
function ro(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $o(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function no(t, e, r) {
  return e && $o(t.prototype, e), r && $o(t, r), t;
}
function Ar(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var tf = 10,
  si = (function () {
    function t() {
      ro(this, t), Ar(this, "subPriority", 0);
    }
    return (
      no(t, [
        {
          key: "validate",
          value: function (r, n) {
            return !0;
          },
        },
      ]),
      t
    );
  })(),
  rf = (function (t) {
    ci(r, t);
    var e = li(r);
    function r(n, o, a, i, u) {
      var f;
      return (
        ro(this, r),
        (f = e.call(this)),
        (f.value = n),
        (f.validateValue = o),
        (f.setValue = a),
        (f.priority = i),
        u && (f.subPriority = u),
        f
      );
    }
    return (
      no(r, [
        {
          key: "validate",
          value: function (o, a) {
            return this.validateValue(o, this.value, a);
          },
        },
        {
          key: "set",
          value: function (o, a, i) {
            return this.setValue(o, a, this.value, i);
          },
        },
      ]),
      r
    );
  })(si),
  nf = (function (t) {
    ci(r, t);
    var e = li(r);
    function r() {
      var n;
      ro(this, r);
      for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
        a[i] = arguments[i];
      return (
        (n = e.call.apply(e, [this].concat(a))),
        Ar(Ur(n), "priority", tf),
        Ar(Ur(n), "subPriority", -1),
        n
      );
    }
    return (
      no(r, [
        {
          key: "set",
          value: function (o, a) {
            if (a.timestampIsSet) return o;
            var i = new Date(0);
            return (
              i.setFullYear(
                o.getUTCFullYear(),
                o.getUTCMonth(),
                o.getUTCDate()
              ),
              i.setHours(
                o.getUTCHours(),
                o.getUTCMinutes(),
                o.getUTCSeconds(),
                o.getUTCMilliseconds()
              ),
              i
            );
          },
        },
      ]),
      r
    );
  })(si);
function of(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function To(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function af(t, e, r) {
  return e && To(t.prototype, e), r && To(t, r), t;
}
var R = (function () {
  function t() {
    of(this, t);
  }
  return (
    af(t, [
      {
        key: "run",
        value: function (r, n, o, a) {
          var i = this.parse(r, n, o, a);
          return i
            ? {
                setter: new rf(
                  i.value,
                  this.validate,
                  this.set,
                  this.priority,
                  this.subPriority
                ),
                rest: i.rest,
              }
            : null;
        },
      },
      {
        key: "validate",
        value: function (r, n, o) {
          return !0;
        },
      },
    ]),
    t
  );
})();
function lt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (lt = function (r) {
          return typeof r;
        })
      : (lt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    lt(t)
  );
}
function uf(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function ff(t, e, r) {
  return e && xo(t.prototype, e), r && xo(t, r), t;
}
function cf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Yr(t, e);
}
function Yr(t, e) {
  return (
    (Yr =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Yr(t, e)
  );
}
function lf(t) {
  var e = pf();
  return function () {
    var n = Qt(t),
      o;
    if (e) {
      var a = Qt(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return sf(this, o);
  };
}
function sf(t, e) {
  return e && (lt(e) === "object" || typeof e == "function") ? e : jr(t);
}
function jr(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function pf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Qt(t) {
  return (
    (Qt = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Qt(t)
  );
}
function So(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var yf = (function (t) {
    cf(r, t);
    var e = lf(r);
    function r() {
      var n;
      uf(this, r);
      for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
        a[i] = arguments[i];
      return (
        (n = e.call.apply(e, [this].concat(a))),
        So(jr(n), "priority", 140),
        So(jr(n), "incompatibleTokens", ["R", "u", "t", "T"]),
        n
      );
    }
    return (
      ff(r, [
        {
          key: "parse",
          value: function (o, a, i) {
            switch (a) {
              case "G":
              case "GG":
              case "GGG":
                return (
                  i.era(o, { width: "abbreviated" }) ||
                  i.era(o, { width: "narrow" })
                );
              case "GGGGG":
                return i.era(o, { width: "narrow" });
              case "GGGG":
              default:
                return (
                  i.era(o, { width: "wide" }) ||
                  i.era(o, { width: "abbreviated" }) ||
                  i.era(o, { width: "narrow" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, a, i) {
            return (
              (a.era = i),
              o.setUTCFullYear(i, 0, 1),
              o.setUTCHours(0, 0, 0, 0),
              o
            );
          },
        },
      ]),
      r
    );
  })(R),
  W = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  pe = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function L(t, e) {
  return t && { value: e(t.value), rest: t.rest };
}
function A(t, e) {
  var r = e.match(t);
  return r ? { value: parseInt(r[0], 10), rest: e.slice(r[0].length) } : null;
}
function ye(t, e) {
  var r = e.match(t);
  if (!r) return null;
  if (r[0] === "Z") return { value: 0, rest: e.slice(1) };
  var n = r[1] === "+" ? 1 : -1,
    o = r[2] ? parseInt(r[2], 10) : 0,
    a = r[3] ? parseInt(r[3], 10) : 0,
    i = r[5] ? parseInt(r[5], 10) : 0;
  return { value: n * (o * Vi + a * qi + i * Fi), rest: e.slice(r[0].length) };
}
function pi(t) {
  return A(W.anyDigitsSigned, t);
}
function j(t, e) {
  switch (t) {
    case 1:
      return A(W.singleDigit, e);
    case 2:
      return A(W.twoDigits, e);
    case 3:
      return A(W.threeDigits, e);
    case 4:
      return A(W.fourDigits, e);
    default:
      return A(new RegExp("^\\d{1," + t + "}"), e);
  }
}
function Xt(t, e) {
  switch (t) {
    case 1:
      return A(W.singleDigitSigned, e);
    case 2:
      return A(W.twoDigitsSigned, e);
    case 3:
      return A(W.threeDigitsSigned, e);
    case 4:
      return A(W.fourDigitsSigned, e);
    default:
      return A(new RegExp("^-?\\d{1," + t + "}"), e);
  }
}
function oo(t) {
  switch (t) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function yi(t, e) {
  var r = e > 0,
    n = r ? e : 1 - e,
    o;
  if (n <= 50) o = t || 100;
  else {
    var a = n + 50,
      i = Math.floor(a / 100) * 100,
      u = t >= a % 100;
    o = t + i - (u ? 100 : 0);
  }
  return r ? o : 1 - o;
}
function di(t) {
  return t % 400 === 0 || (t % 4 === 0 && t % 100 !== 0);
}
function st(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (st = function (r) {
          return typeof r;
        })
      : (st = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    st(t)
  );
}
function df(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ro(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function vf(t, e, r) {
  return e && Ro(t.prototype, e), r && Ro(t, r), t;
}
function hf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Wr(t, e);
}
function Wr(t, e) {
  return (
    (Wr =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Wr(t, e)
  );
}
function mf(t) {
  var e = gf();
  return function () {
    var n = Gt(t),
      o;
    if (e) {
      var a = Gt(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return bf(this, o);
  };
}
function bf(t, e) {
  return e && (st(e) === "object" || typeof e == "function") ? e : Lr(t);
}
function Lr(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function gf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Gt(t) {
  return (
    (Gt = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Gt(t)
  );
}
function ko(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var wf = (function (t) {
  hf(r, t);
  var e = mf(r);
  function r() {
    var n;
    df(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      ko(Lr(n), "priority", 130),
      ko(Lr(n), "incompatibleTokens", [
        "Y",
        "R",
        "u",
        "w",
        "I",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    vf(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          var u = function (c) {
            return { year: c, isTwoDigitYear: a === "yy" };
          };
          switch (a) {
            case "y":
              return L(j(4, o), u);
            case "yo":
              return L(i.ordinalNumber(o, { unit: "year" }), u);
            default:
              return L(j(a.length, o), u);
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a.isTwoDigitYear || a.year > 0;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          var u = o.getUTCFullYear();
          if (i.isTwoDigitYear) {
            var f = yi(i.year, u);
            return o.setUTCFullYear(f, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          }
          var c = !("era" in a) || a.era === 1 ? i.year : 1 - i.year;
          return o.setUTCFullYear(c, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function pt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (pt = function (r) {
          return typeof r;
        })
      : (pt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    pt(t)
  );
}
function _f(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Do(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function Of(t, e, r) {
  return e && Do(t.prototype, e), r && Do(t, r), t;
}
function Pf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Hr(t, e);
}
function Hr(t, e) {
  return (
    (Hr =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Hr(t, e)
  );
}
function $f(t) {
  var e = xf();
  return function () {
    var n = Kt(t),
      o;
    if (e) {
      var a = Kt(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Tf(this, o);
  };
}
function Tf(t, e) {
  return e && (pt(e) === "object" || typeof e == "function") ? e : qr(t);
}
function qr(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function xf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Kt(t) {
  return (
    (Kt = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Kt(t)
  );
}
function Eo(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Sf = (function (t) {
  Pf(r, t);
  var e = $f(r);
  function r() {
    var n;
    _f(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Eo(qr(n), "priority", 130),
      Eo(qr(n), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "Q",
        "q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    Of(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          var u = function (c) {
            return { year: c, isTwoDigitYear: a === "YY" };
          };
          switch (a) {
            case "Y":
              return L(j(4, o), u);
            case "Yo":
              return L(i.ordinalNumber(o, { unit: "year" }), u);
            default:
              return L(j(a.length, o), u);
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a.isTwoDigitYear || a.year > 0;
        },
      },
      {
        key: "set",
        value: function (o, a, i, u) {
          var f = to(o, u);
          if (i.isTwoDigitYear) {
            var c = yi(i.year, f);
            return (
              o.setUTCFullYear(c, 0, u.firstWeekContainsDate),
              o.setUTCHours(0, 0, 0, 0),
              Ee(o, u)
            );
          }
          var l = !("era" in a) || a.era === 1 ? i.year : 1 - i.year;
          return (
            o.setUTCFullYear(l, 0, u.firstWeekContainsDate),
            o.setUTCHours(0, 0, 0, 0),
            Ee(o, u)
          );
        },
      },
    ]),
    r
  );
})(R);
function yt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (yt = function (r) {
          return typeof r;
        })
      : (yt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    yt(t)
  );
}
function Rf(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Mo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function kf(t, e, r) {
  return e && Mo(t.prototype, e), r && Mo(t, r), t;
}
function Df(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Vr(t, e);
}
function Vr(t, e) {
  return (
    (Vr =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Vr(t, e)
  );
}
function Ef(t) {
  var e = Cf();
  return function () {
    var n = Jt(t),
      o;
    if (e) {
      var a = Jt(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Mf(this, o);
  };
}
function Mf(t, e) {
  return e && (yt(e) === "object" || typeof e == "function") ? e : Fr(t);
}
function Fr(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Cf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Jt(t) {
  return (
    (Jt = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Jt(t)
  );
}
function Co(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Nf = (function (t) {
  Df(r, t);
  var e = Ef(r);
  function r() {
    var n;
    Rf(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Co(Fr(n), "priority", 130),
      Co(Fr(n), "incompatibleTokens", [
        "G",
        "y",
        "Y",
        "u",
        "Q",
        "q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "e",
        "c",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    kf(r, [
      {
        key: "parse",
        value: function (o, a) {
          return Xt(a === "R" ? 4 : a.length, o);
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          var u = new Date(0);
          return u.setUTCFullYear(i, 0, 4), u.setUTCHours(0, 0, 0, 0), Ne(u);
        },
      },
    ]),
    r
  );
})(R);
function dt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (dt = function (r) {
          return typeof r;
        })
      : (dt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    dt(t)
  );
}
function If(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function No(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function Bf(t, e, r) {
  return e && No(t.prototype, e), r && No(t, r), t;
}
function Uf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && zr(t, e);
}
function zr(t, e) {
  return (
    (zr =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    zr(t, e)
  );
}
function Af(t) {
  var e = jf();
  return function () {
    var n = Zt(t),
      o;
    if (e) {
      var a = Zt(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Yf(this, o);
  };
}
function Yf(t, e) {
  return e && (dt(e) === "object" || typeof e == "function") ? e : Qr(t);
}
function Qr(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function jf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Zt(t) {
  return (
    (Zt = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Zt(t)
  );
}
function Io(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Wf = (function (t) {
  Uf(r, t);
  var e = Af(r);
  function r() {
    var n;
    If(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Io(Qr(n), "priority", 130),
      Io(Qr(n), "incompatibleTokens", [
        "G",
        "y",
        "Y",
        "R",
        "w",
        "I",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    Bf(r, [
      {
        key: "parse",
        value: function (o, a) {
          return Xt(a === "u" ? 4 : a.length, o);
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCFullYear(i, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function vt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (vt = function (r) {
          return typeof r;
        })
      : (vt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    vt(t)
  );
}
function Lf(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Bo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function Hf(t, e, r) {
  return e && Bo(t.prototype, e), r && Bo(t, r), t;
}
function qf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Xr(t, e);
}
function Xr(t, e) {
  return (
    (Xr =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Xr(t, e)
  );
}
function Vf(t) {
  var e = zf();
  return function () {
    var n = er(t),
      o;
    if (e) {
      var a = er(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Ff(this, o);
  };
}
function Ff(t, e) {
  return e && (vt(e) === "object" || typeof e == "function") ? e : Gr(t);
}
function Gr(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function zf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function er(t) {
  return (
    (er = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    er(t)
  );
}
function Uo(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Qf = (function (t) {
  qf(r, t);
  var e = Vf(r);
  function r() {
    var n;
    Lf(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Uo(Gr(n), "priority", 120),
      Uo(Gr(n), "incompatibleTokens", [
        "Y",
        "R",
        "q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    Hf(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "Q":
            case "QQ":
              return j(a.length, o);
            case "Qo":
              return i.ordinalNumber(o, { unit: "quarter" });
            case "QQQ":
              return (
                i.quarter(o, { width: "abbreviated", context: "formatting" }) ||
                i.quarter(o, { width: "narrow", context: "formatting" })
              );
            case "QQQQQ":
              return i.quarter(o, { width: "narrow", context: "formatting" });
            case "QQQQ":
            default:
              return (
                i.quarter(o, { width: "wide", context: "formatting" }) ||
                i.quarter(o, { width: "abbreviated", context: "formatting" }) ||
                i.quarter(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 1 && a <= 4;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCMonth((i - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function ht(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ht = function (r) {
          return typeof r;
        })
      : (ht = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    ht(t)
  );
}
function Xf(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ao(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function Gf(t, e, r) {
  return e && Ao(t.prototype, e), r && Ao(t, r), t;
}
function Kf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Kr(t, e);
}
function Kr(t, e) {
  return (
    (Kr =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Kr(t, e)
  );
}
function Jf(t) {
  var e = ec();
  return function () {
    var n = tr(t),
      o;
    if (e) {
      var a = tr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Zf(this, o);
  };
}
function Zf(t, e) {
  return e && (ht(e) === "object" || typeof e == "function") ? e : Jr(t);
}
function Jr(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function ec() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function tr(t) {
  return (
    (tr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    tr(t)
  );
}
function Yo(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var tc = (function (t) {
  Kf(r, t);
  var e = Jf(r);
  function r() {
    var n;
    Xf(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Yo(Jr(n), "priority", 120),
      Yo(Jr(n), "incompatibleTokens", [
        "Y",
        "R",
        "Q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    Gf(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "q":
            case "qq":
              return j(a.length, o);
            case "qo":
              return i.ordinalNumber(o, { unit: "quarter" });
            case "qqq":
              return (
                i.quarter(o, { width: "abbreviated", context: "standalone" }) ||
                i.quarter(o, { width: "narrow", context: "standalone" })
              );
            case "qqqqq":
              return i.quarter(o, { width: "narrow", context: "standalone" });
            case "qqqq":
            default:
              return (
                i.quarter(o, { width: "wide", context: "standalone" }) ||
                i.quarter(o, { width: "abbreviated", context: "standalone" }) ||
                i.quarter(o, { width: "narrow", context: "standalone" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 1 && a <= 4;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCMonth((i - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function mt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (mt = function (r) {
          return typeof r;
        })
      : (mt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    mt(t)
  );
}
function rc(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function jo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function nc(t, e, r) {
  return e && jo(t.prototype, e), r && jo(t, r), t;
}
function oc(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Zr(t, e);
}
function Zr(t, e) {
  return (
    (Zr =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Zr(t, e)
  );
}
function ac(t) {
  var e = uc();
  return function () {
    var n = rr(t),
      o;
    if (e) {
      var a = rr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return ic(this, o);
  };
}
function ic(t, e) {
  return e && (mt(e) === "object" || typeof e == "function") ? e : en(t);
}
function en(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function uc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function rr(t) {
  return (
    (rr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    rr(t)
  );
}
function Wo(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var fc = (function (t) {
  oc(r, t);
  var e = ac(r);
  function r() {
    var n;
    rc(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Wo(en(n), "incompatibleTokens", [
        "Y",
        "R",
        "q",
        "Q",
        "L",
        "w",
        "I",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      Wo(en(n), "priority", 110),
      n
    );
  }
  return (
    nc(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          var u = function (c) {
            return c - 1;
          };
          switch (a) {
            case "M":
              return L(A(W.month, o), u);
            case "MM":
              return L(j(2, o), u);
            case "Mo":
              return L(i.ordinalNumber(o, { unit: "month" }), u);
            case "MMM":
              return (
                i.month(o, { width: "abbreviated", context: "formatting" }) ||
                i.month(o, { width: "narrow", context: "formatting" })
              );
            case "MMMMM":
              return i.month(o, { width: "narrow", context: "formatting" });
            case "MMMM":
            default:
              return (
                i.month(o, { width: "wide", context: "formatting" }) ||
                i.month(o, { width: "abbreviated", context: "formatting" }) ||
                i.month(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 0 && a <= 11;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCMonth(i, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function bt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (bt = function (r) {
          return typeof r;
        })
      : (bt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    bt(t)
  );
}
function cc(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Lo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function lc(t, e, r) {
  return e && Lo(t.prototype, e), r && Lo(t, r), t;
}
function sc(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && tn(t, e);
}
function tn(t, e) {
  return (
    (tn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    tn(t, e)
  );
}
function pc(t) {
  var e = dc();
  return function () {
    var n = nr(t),
      o;
    if (e) {
      var a = nr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return yc(this, o);
  };
}
function yc(t, e) {
  return e && (bt(e) === "object" || typeof e == "function") ? e : rn(t);
}
function rn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function dc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function nr(t) {
  return (
    (nr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    nr(t)
  );
}
function Ho(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var vc = (function (t) {
  sc(r, t);
  var e = pc(r);
  function r() {
    var n;
    cc(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Ho(rn(n), "priority", 110),
      Ho(rn(n), "incompatibleTokens", [
        "Y",
        "R",
        "q",
        "Q",
        "M",
        "w",
        "I",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    lc(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          var u = function (c) {
            return c - 1;
          };
          switch (a) {
            case "L":
              return L(A(W.month, o), u);
            case "LL":
              return L(j(2, o), u);
            case "Lo":
              return L(i.ordinalNumber(o, { unit: "month" }), u);
            case "LLL":
              return (
                i.month(o, { width: "abbreviated", context: "standalone" }) ||
                i.month(o, { width: "narrow", context: "standalone" })
              );
            case "LLLLL":
              return i.month(o, { width: "narrow", context: "standalone" });
            case "LLLL":
            default:
              return (
                i.month(o, { width: "wide", context: "standalone" }) ||
                i.month(o, { width: "abbreviated", context: "standalone" }) ||
                i.month(o, { width: "narrow", context: "standalone" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 0 && a <= 11;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCMonth(i, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function hc(t, e, r) {
  Y(2, arguments);
  var n = X(t),
    o = Z(e),
    a = oi(n, r) - o;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function gt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (gt = function (r) {
          return typeof r;
        })
      : (gt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    gt(t)
  );
}
function mc(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function qo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function bc(t, e, r) {
  return e && qo(t.prototype, e), r && qo(t, r), t;
}
function gc(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && nn(t, e);
}
function nn(t, e) {
  return (
    (nn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    nn(t, e)
  );
}
function wc(t) {
  var e = Oc();
  return function () {
    var n = or(t),
      o;
    if (e) {
      var a = or(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return _c(this, o);
  };
}
function _c(t, e) {
  return e && (gt(e) === "object" || typeof e == "function") ? e : on(t);
}
function on(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Oc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function or(t) {
  return (
    (or = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    or(t)
  );
}
function Vo(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Pc = (function (t) {
  gc(r, t);
  var e = wc(r);
  function r() {
    var n;
    mc(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Vo(on(n), "priority", 100),
      Vo(on(n), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    bc(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "w":
              return A(W.week, o);
            case "wo":
              return i.ordinalNumber(o, { unit: "week" });
            default:
              return j(a.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 1 && a <= 53;
        },
      },
      {
        key: "set",
        value: function (o, a, i, u) {
          return Ee(hc(o, i, u), u);
        },
      },
    ]),
    r
  );
})(R);
function $c(t, e) {
  Y(2, arguments);
  var r = X(t),
    n = Z(e),
    o = ni(r) - n;
  return r.setUTCDate(r.getUTCDate() - o * 7), r;
}
function wt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (wt = function (r) {
          return typeof r;
        })
      : (wt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    wt(t)
  );
}
function Tc(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Fo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function xc(t, e, r) {
  return e && Fo(t.prototype, e), r && Fo(t, r), t;
}
function Sc(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && an(t, e);
}
function an(t, e) {
  return (
    (an =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    an(t, e)
  );
}
function Rc(t) {
  var e = Dc();
  return function () {
    var n = ar(t),
      o;
    if (e) {
      var a = ar(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return kc(this, o);
  };
}
function kc(t, e) {
  return e && (wt(e) === "object" || typeof e == "function") ? e : un(t);
}
function un(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Dc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ar(t) {
  return (
    (ar = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ar(t)
  );
}
function zo(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Ec = (function (t) {
  Sc(r, t);
  var e = Rc(r);
  function r() {
    var n;
    Tc(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      zo(un(n), "priority", 100),
      zo(un(n), "incompatibleTokens", [
        "y",
        "Y",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "e",
        "c",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    xc(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "I":
              return A(W.week, o);
            case "Io":
              return i.ordinalNumber(o, { unit: "week" });
            default:
              return j(a.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 1 && a <= 53;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return Ne($c(o, i));
        },
      },
    ]),
    r
  );
})(R);
function _t(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (_t = function (r) {
          return typeof r;
        })
      : (_t = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    _t(t)
  );
}
function Mc(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Qo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function Cc(t, e, r) {
  return e && Qo(t.prototype, e), r && Qo(t, r), t;
}
function Nc(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && fn(t, e);
}
function fn(t, e) {
  return (
    (fn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    fn(t, e)
  );
}
function Ic(t) {
  var e = Uc();
  return function () {
    var n = ir(t),
      o;
    if (e) {
      var a = ir(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Bc(this, o);
  };
}
function Bc(t, e) {
  return e && (_t(e) === "object" || typeof e == "function") ? e : Ot(t);
}
function Ot(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Uc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ir(t) {
  return (
    (ir = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ir(t)
  );
}
function Rr(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Ac = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Yc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  jc = (function (t) {
    Nc(r, t);
    var e = Ic(r);
    function r() {
      var n;
      Mc(this, r);
      for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
        a[i] = arguments[i];
      return (
        (n = e.call.apply(e, [this].concat(a))),
        Rr(Ot(n), "priority", 90),
        Rr(Ot(n), "subPriority", 1),
        Rr(Ot(n), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      Cc(r, [
        {
          key: "parse",
          value: function (o, a, i) {
            switch (a) {
              case "d":
                return A(W.date, o);
              case "do":
                return i.ordinalNumber(o, { unit: "date" });
              default:
                return j(a.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, a) {
            var i = o.getUTCFullYear(),
              u = di(i),
              f = o.getUTCMonth();
            return u ? a >= 1 && a <= Yc[f] : a >= 1 && a <= Ac[f];
          },
        },
        {
          key: "set",
          value: function (o, a, i) {
            return o.setUTCDate(i), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      r
    );
  })(R);
function Pt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Pt = function (r) {
          return typeof r;
        })
      : (Pt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Pt(t)
  );
}
function Wc(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Xo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function Lc(t, e, r) {
  return e && Xo(t.prototype, e), r && Xo(t, r), t;
}
function Hc(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && cn(t, e);
}
function cn(t, e) {
  return (
    (cn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    cn(t, e)
  );
}
function qc(t) {
  var e = Fc();
  return function () {
    var n = ur(t),
      o;
    if (e) {
      var a = ur(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Vc(this, o);
  };
}
function Vc(t, e) {
  return e && (Pt(e) === "object" || typeof e == "function") ? e : $t(t);
}
function $t(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Fc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ur(t) {
  return (
    (ur = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ur(t)
  );
}
function kr(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var zc = (function (t) {
  Hc(r, t);
  var e = qc(r);
  function r() {
    var n;
    Wc(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      kr($t(n), "priority", 90),
      kr($t(n), "subpriority", 1),
      kr($t(n), "incompatibleTokens", [
        "Y",
        "R",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "E",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    Lc(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "D":
            case "DD":
              return A(W.dayOfYear, o);
            case "Do":
              return i.ordinalNumber(o, { unit: "date" });
            default:
              return j(a.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          var i = o.getUTCFullYear(),
            u = di(i);
          return u ? a >= 1 && a <= 366 : a >= 1 && a <= 365;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCMonth(0, i), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function ao(t, e, r) {
  var n, o, a, i, u, f, c, l;
  Y(2, arguments);
  var y = Ae(),
    p = Z(
      (n =
        (o =
          (a =
            (i = r == null ? void 0 : r.weekStartsOn) !== null && i !== void 0
              ? i
              : r == null ||
                (u = r.locale) === null ||
                u === void 0 ||
                (f = u.options) === null ||
                f === void 0
              ? void 0
              : f.weekStartsOn) !== null && a !== void 0
            ? a
            : y.weekStartsOn) !== null && o !== void 0
          ? o
          : (c = y.locale) === null ||
            c === void 0 ||
            (l = c.options) === null ||
            l === void 0
          ? void 0
          : l.weekStartsOn) !== null && n !== void 0
        ? n
        : 0
    );
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = X(t),
    v = Z(e),
    d = s.getUTCDay(),
    h = v % 7,
    m = (h + 7) % 7,
    _ = (m < p ? 7 : 0) + v - d;
  return s.setUTCDate(s.getUTCDate() + _), s;
}
function Tt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Tt = function (r) {
          return typeof r;
        })
      : (Tt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Tt(t)
  );
}
function Qc(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Go(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function Xc(t, e, r) {
  return e && Go(t.prototype, e), r && Go(t, r), t;
}
function Gc(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && ln(t, e);
}
function ln(t, e) {
  return (
    (ln =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    ln(t, e)
  );
}
function Kc(t) {
  var e = Zc();
  return function () {
    var n = fr(t),
      o;
    if (e) {
      var a = fr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Jc(this, o);
  };
}
function Jc(t, e) {
  return e && (Tt(e) === "object" || typeof e == "function") ? e : sn(t);
}
function sn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Zc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function fr(t) {
  return (
    (fr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    fr(t)
  );
}
function Ko(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var el = (function (t) {
  Gc(r, t);
  var e = Kc(r);
  function r() {
    var n;
    Qc(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Ko(sn(n), "priority", 90),
      Ko(sn(n), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
      n
    );
  }
  return (
    Xc(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "E":
            case "EE":
            case "EEE":
              return (
                i.day(o, { width: "abbreviated", context: "formatting" }) ||
                i.day(o, { width: "short", context: "formatting" }) ||
                i.day(o, { width: "narrow", context: "formatting" })
              );
            case "EEEEE":
              return i.day(o, { width: "narrow", context: "formatting" });
            case "EEEEEE":
              return (
                i.day(o, { width: "short", context: "formatting" }) ||
                i.day(o, { width: "narrow", context: "formatting" })
              );
            case "EEEE":
            default:
              return (
                i.day(o, { width: "wide", context: "formatting" }) ||
                i.day(o, { width: "abbreviated", context: "formatting" }) ||
                i.day(o, { width: "short", context: "formatting" }) ||
                i.day(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 0 && a <= 6;
        },
      },
      {
        key: "set",
        value: function (o, a, i, u) {
          return (o = ao(o, i, u)), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function xt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (xt = function (r) {
          return typeof r;
        })
      : (xt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    xt(t)
  );
}
function tl(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Jo(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function rl(t, e, r) {
  return e && Jo(t.prototype, e), r && Jo(t, r), t;
}
function nl(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && pn(t, e);
}
function pn(t, e) {
  return (
    (pn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    pn(t, e)
  );
}
function ol(t) {
  var e = il();
  return function () {
    var n = cr(t),
      o;
    if (e) {
      var a = cr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return al(this, o);
  };
}
function al(t, e) {
  return e && (xt(e) === "object" || typeof e == "function") ? e : yn(t);
}
function yn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function il() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function cr(t) {
  return (
    (cr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    cr(t)
  );
}
function Zo(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var ul = (function (t) {
  nl(r, t);
  var e = ol(r);
  function r() {
    var n;
    tl(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Zo(yn(n), "priority", 90),
      Zo(yn(n), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "E",
        "i",
        "c",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    rl(r, [
      {
        key: "parse",
        value: function (o, a, i, u) {
          var f = function (l) {
            var y = Math.floor((l - 1) / 7) * 7;
            return ((l + u.weekStartsOn + 6) % 7) + y;
          };
          switch (a) {
            case "e":
            case "ee":
              return L(j(a.length, o), f);
            case "eo":
              return L(i.ordinalNumber(o, { unit: "day" }), f);
            case "eee":
              return (
                i.day(o, { width: "abbreviated", context: "formatting" }) ||
                i.day(o, { width: "short", context: "formatting" }) ||
                i.day(o, { width: "narrow", context: "formatting" })
              );
            case "eeeee":
              return i.day(o, { width: "narrow", context: "formatting" });
            case "eeeeee":
              return (
                i.day(o, { width: "short", context: "formatting" }) ||
                i.day(o, { width: "narrow", context: "formatting" })
              );
            case "eeee":
            default:
              return (
                i.day(o, { width: "wide", context: "formatting" }) ||
                i.day(o, { width: "abbreviated", context: "formatting" }) ||
                i.day(o, { width: "short", context: "formatting" }) ||
                i.day(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 0 && a <= 6;
        },
      },
      {
        key: "set",
        value: function (o, a, i, u) {
          return (o = ao(o, i, u)), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function St(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (St = function (r) {
          return typeof r;
        })
      : (St = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    St(t)
  );
}
function fl(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ea(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function cl(t, e, r) {
  return e && ea(t.prototype, e), r && ea(t, r), t;
}
function ll(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && dn(t, e);
}
function dn(t, e) {
  return (
    (dn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    dn(t, e)
  );
}
function sl(t) {
  var e = yl();
  return function () {
    var n = lr(t),
      o;
    if (e) {
      var a = lr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return pl(this, o);
  };
}
function pl(t, e) {
  return e && (St(e) === "object" || typeof e == "function") ? e : vn(t);
}
function vn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function yl() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function lr(t) {
  return (
    (lr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    lr(t)
  );
}
function ta(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var dl = (function (t) {
  ll(r, t);
  var e = sl(r);
  function r() {
    var n;
    fl(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      ta(vn(n), "priority", 90),
      ta(vn(n), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "E",
        "i",
        "e",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    cl(r, [
      {
        key: "parse",
        value: function (o, a, i, u) {
          var f = function (l) {
            var y = Math.floor((l - 1) / 7) * 7;
            return ((l + u.weekStartsOn + 6) % 7) + y;
          };
          switch (a) {
            case "c":
            case "cc":
              return L(j(a.length, o), f);
            case "co":
              return L(i.ordinalNumber(o, { unit: "day" }), f);
            case "ccc":
              return (
                i.day(o, { width: "abbreviated", context: "standalone" }) ||
                i.day(o, { width: "short", context: "standalone" }) ||
                i.day(o, { width: "narrow", context: "standalone" })
              );
            case "ccccc":
              return i.day(o, { width: "narrow", context: "standalone" });
            case "cccccc":
              return (
                i.day(o, { width: "short", context: "standalone" }) ||
                i.day(o, { width: "narrow", context: "standalone" })
              );
            case "cccc":
            default:
              return (
                i.day(o, { width: "wide", context: "standalone" }) ||
                i.day(o, { width: "abbreviated", context: "standalone" }) ||
                i.day(o, { width: "short", context: "standalone" }) ||
                i.day(o, { width: "narrow", context: "standalone" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 0 && a <= 6;
        },
      },
      {
        key: "set",
        value: function (o, a, i, u) {
          return (o = ao(o, i, u)), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function vl(t, e) {
  Y(2, arguments);
  var r = Z(e);
  r % 7 === 0 && (r = r - 7);
  var n = 1,
    o = X(t),
    a = o.getUTCDay(),
    i = r % 7,
    u = (i + 7) % 7,
    f = (u < n ? 7 : 0) + r - a;
  return o.setUTCDate(o.getUTCDate() + f), o;
}
function Rt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Rt = function (r) {
          return typeof r;
        })
      : (Rt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Rt(t)
  );
}
function hl(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ra(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function ml(t, e, r) {
  return e && ra(t.prototype, e), r && ra(t, r), t;
}
function bl(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && hn(t, e);
}
function hn(t, e) {
  return (
    (hn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    hn(t, e)
  );
}
function gl(t) {
  var e = _l();
  return function () {
    var n = sr(t),
      o;
    if (e) {
      var a = sr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return wl(this, o);
  };
}
function wl(t, e) {
  return e && (Rt(e) === "object" || typeof e == "function") ? e : mn(t);
}
function mn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function _l() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function sr(t) {
  return (
    (sr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    sr(t)
  );
}
function na(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Ol = (function (t) {
  bl(r, t);
  var e = gl(r);
  function r() {
    var n;
    hl(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      na(mn(n), "priority", 90),
      na(mn(n), "incompatibleTokens", [
        "y",
        "Y",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "E",
        "e",
        "c",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    ml(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          var u = function (c) {
            return c === 0 ? 7 : c;
          };
          switch (a) {
            case "i":
            case "ii":
              return j(a.length, o);
            case "io":
              return i.ordinalNumber(o, { unit: "day" });
            case "iii":
              return L(
                i.day(o, { width: "abbreviated", context: "formatting" }) ||
                  i.day(o, { width: "short", context: "formatting" }) ||
                  i.day(o, { width: "narrow", context: "formatting" }),
                u
              );
            case "iiiii":
              return L(i.day(o, { width: "narrow", context: "formatting" }), u);
            case "iiiiii":
              return L(
                i.day(o, { width: "short", context: "formatting" }) ||
                  i.day(o, { width: "narrow", context: "formatting" }),
                u
              );
            case "iiii":
            default:
              return L(
                i.day(o, { width: "wide", context: "formatting" }) ||
                  i.day(o, { width: "abbreviated", context: "formatting" }) ||
                  i.day(o, { width: "short", context: "formatting" }) ||
                  i.day(o, { width: "narrow", context: "formatting" }),
                u
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 1 && a <= 7;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return (o = vl(o, i)), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function kt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (kt = function (r) {
          return typeof r;
        })
      : (kt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    kt(t)
  );
}
function Pl(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function oa(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function $l(t, e, r) {
  return e && oa(t.prototype, e), r && oa(t, r), t;
}
function Tl(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && bn(t, e);
}
function bn(t, e) {
  return (
    (bn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    bn(t, e)
  );
}
function xl(t) {
  var e = Rl();
  return function () {
    var n = pr(t),
      o;
    if (e) {
      var a = pr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Sl(this, o);
  };
}
function Sl(t, e) {
  return e && (kt(e) === "object" || typeof e == "function") ? e : gn(t);
}
function gn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Rl() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function pr(t) {
  return (
    (pr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    pr(t)
  );
}
function aa(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var kl = (function (t) {
  Tl(r, t);
  var e = xl(r);
  function r() {
    var n;
    Pl(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      aa(gn(n), "priority", 80),
      aa(gn(n), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
      n
    );
  }
  return (
    $l(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "a":
            case "aa":
            case "aaa":
              return (
                i.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) || i.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
            case "aaaaa":
              return i.dayPeriod(o, { width: "narrow", context: "formatting" });
            case "aaaa":
            default:
              return (
                i.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                i.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                i.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCHours(oo(i), 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function Dt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Dt = function (r) {
          return typeof r;
        })
      : (Dt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Dt(t)
  );
}
function Dl(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ia(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function El(t, e, r) {
  return e && ia(t.prototype, e), r && ia(t, r), t;
}
function Ml(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && wn(t, e);
}
function wn(t, e) {
  return (
    (wn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    wn(t, e)
  );
}
function Cl(t) {
  var e = Il();
  return function () {
    var n = yr(t),
      o;
    if (e) {
      var a = yr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Nl(this, o);
  };
}
function Nl(t, e) {
  return e && (Dt(e) === "object" || typeof e == "function") ? e : _n(t);
}
function _n(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Il() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function yr(t) {
  return (
    (yr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    yr(t)
  );
}
function ua(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Bl = (function (t) {
  Ml(r, t);
  var e = Cl(r);
  function r() {
    var n;
    Dl(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      ua(_n(n), "priority", 80),
      ua(_n(n), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
      n
    );
  }
  return (
    El(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "b":
            case "bb":
            case "bbb":
              return (
                i.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) || i.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
            case "bbbbb":
              return i.dayPeriod(o, { width: "narrow", context: "formatting" });
            case "bbbb":
            default:
              return (
                i.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                i.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                i.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCHours(oo(i), 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function Et(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Et = function (r) {
          return typeof r;
        })
      : (Et = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Et(t)
  );
}
function Ul(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function fa(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function Al(t, e, r) {
  return e && fa(t.prototype, e), r && fa(t, r), t;
}
function Yl(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && On(t, e);
}
function On(t, e) {
  return (
    (On =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    On(t, e)
  );
}
function jl(t) {
  var e = Ll();
  return function () {
    var n = dr(t),
      o;
    if (e) {
      var a = dr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Wl(this, o);
  };
}
function Wl(t, e) {
  return e && (Et(e) === "object" || typeof e == "function") ? e : Pn(t);
}
function Pn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Ll() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function dr(t) {
  return (
    (dr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    dr(t)
  );
}
function ca(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Hl = (function (t) {
  Yl(r, t);
  var e = jl(r);
  function r() {
    var n;
    Ul(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      ca(Pn(n), "priority", 80),
      ca(Pn(n), "incompatibleTokens", ["a", "b", "t", "T"]),
      n
    );
  }
  return (
    Al(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "B":
            case "BB":
            case "BBB":
              return (
                i.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) || i.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
            case "BBBBB":
              return i.dayPeriod(o, { width: "narrow", context: "formatting" });
            case "BBBB":
            default:
              return (
                i.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                i.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                i.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCHours(oo(i), 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function Mt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Mt = function (r) {
          return typeof r;
        })
      : (Mt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Mt(t)
  );
}
function ql(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function la(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function Vl(t, e, r) {
  return e && la(t.prototype, e), r && la(t, r), t;
}
function Fl(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && $n(t, e);
}
function $n(t, e) {
  return (
    ($n =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    $n(t, e)
  );
}
function zl(t) {
  var e = Xl();
  return function () {
    var n = vr(t),
      o;
    if (e) {
      var a = vr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Ql(this, o);
  };
}
function Ql(t, e) {
  return e && (Mt(e) === "object" || typeof e == "function") ? e : Tn(t);
}
function Tn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Xl() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function vr(t) {
  return (
    (vr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    vr(t)
  );
}
function sa(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Gl = (function (t) {
  Fl(r, t);
  var e = zl(r);
  function r() {
    var n;
    ql(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      sa(Tn(n), "priority", 70),
      sa(Tn(n), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
      n
    );
  }
  return (
    Vl(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "h":
              return A(W.hour12h, o);
            case "ho":
              return i.ordinalNumber(o, { unit: "hour" });
            default:
              return j(a.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 1 && a <= 12;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          var u = o.getUTCHours() >= 12;
          return (
            u && i < 12
              ? o.setUTCHours(i + 12, 0, 0, 0)
              : !u && i === 12
              ? o.setUTCHours(0, 0, 0, 0)
              : o.setUTCHours(i, 0, 0, 0),
            o
          );
        },
      },
    ]),
    r
  );
})(R);
function Ct(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ct = function (r) {
          return typeof r;
        })
      : (Ct = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Ct(t)
  );
}
function Kl(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function pa(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function Jl(t, e, r) {
  return e && pa(t.prototype, e), r && pa(t, r), t;
}
function Zl(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && xn(t, e);
}
function xn(t, e) {
  return (
    (xn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    xn(t, e)
  );
}
function es(t) {
  var e = rs();
  return function () {
    var n = hr(t),
      o;
    if (e) {
      var a = hr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return ts(this, o);
  };
}
function ts(t, e) {
  return e && (Ct(e) === "object" || typeof e == "function") ? e : Sn(t);
}
function Sn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function rs() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function hr(t) {
  return (
    (hr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    hr(t)
  );
}
function ya(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var ns = (function (t) {
  Zl(r, t);
  var e = es(r);
  function r() {
    var n;
    Kl(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      ya(Sn(n), "priority", 70),
      ya(Sn(n), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
      n
    );
  }
  return (
    Jl(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "H":
              return A(W.hour23h, o);
            case "Ho":
              return i.ordinalNumber(o, { unit: "hour" });
            default:
              return j(a.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 0 && a <= 23;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCHours(i, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function Nt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Nt = function (r) {
          return typeof r;
        })
      : (Nt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Nt(t)
  );
}
function os(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function da(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function as(t, e, r) {
  return e && da(t.prototype, e), r && da(t, r), t;
}
function is(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Rn(t, e);
}
function Rn(t, e) {
  return (
    (Rn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Rn(t, e)
  );
}
function us(t) {
  var e = cs();
  return function () {
    var n = mr(t),
      o;
    if (e) {
      var a = mr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return fs(this, o);
  };
}
function fs(t, e) {
  return e && (Nt(e) === "object" || typeof e == "function") ? e : kn(t);
}
function kn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function cs() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function mr(t) {
  return (
    (mr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    mr(t)
  );
}
function va(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var ls = (function (t) {
  is(r, t);
  var e = us(r);
  function r() {
    var n;
    os(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      va(kn(n), "priority", 70),
      va(kn(n), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
      n
    );
  }
  return (
    as(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "K":
              return A(W.hour11h, o);
            case "Ko":
              return i.ordinalNumber(o, { unit: "hour" });
            default:
              return j(a.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 0 && a <= 11;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          var u = o.getUTCHours() >= 12;
          return (
            u && i < 12
              ? o.setUTCHours(i + 12, 0, 0, 0)
              : o.setUTCHours(i, 0, 0, 0),
            o
          );
        },
      },
    ]),
    r
  );
})(R);
function It(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (It = function (r) {
          return typeof r;
        })
      : (It = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    It(t)
  );
}
function ss(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ha(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function ps(t, e, r) {
  return e && ha(t.prototype, e), r && ha(t, r), t;
}
function ys(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Dn(t, e);
}
function Dn(t, e) {
  return (
    (Dn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Dn(t, e)
  );
}
function ds(t) {
  var e = hs();
  return function () {
    var n = br(t),
      o;
    if (e) {
      var a = br(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return vs(this, o);
  };
}
function vs(t, e) {
  return e && (It(e) === "object" || typeof e == "function") ? e : En(t);
}
function En(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function hs() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function br(t) {
  return (
    (br = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    br(t)
  );
}
function ma(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var ms = (function (t) {
  ys(r, t);
  var e = ds(r);
  function r() {
    var n;
    ss(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      ma(En(n), "priority", 70),
      ma(En(n), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
      n
    );
  }
  return (
    ps(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "k":
              return A(W.hour24h, o);
            case "ko":
              return i.ordinalNumber(o, { unit: "hour" });
            default:
              return j(a.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 1 && a <= 24;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          var u = i <= 24 ? i % 24 : i;
          return o.setUTCHours(u, 0, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function Bt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Bt = function (r) {
          return typeof r;
        })
      : (Bt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Bt(t)
  );
}
function bs(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ba(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function gs(t, e, r) {
  return e && ba(t.prototype, e), r && ba(t, r), t;
}
function ws(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Mn(t, e);
}
function Mn(t, e) {
  return (
    (Mn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Mn(t, e)
  );
}
function _s(t) {
  var e = Ps();
  return function () {
    var n = gr(t),
      o;
    if (e) {
      var a = gr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Os(this, o);
  };
}
function Os(t, e) {
  return e && (Bt(e) === "object" || typeof e == "function") ? e : Cn(t);
}
function Cn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Ps() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function gr(t) {
  return (
    (gr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    gr(t)
  );
}
function ga(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var $s = (function (t) {
  ws(r, t);
  var e = _s(r);
  function r() {
    var n;
    bs(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      ga(Cn(n), "priority", 60),
      ga(Cn(n), "incompatibleTokens", ["t", "T"]),
      n
    );
  }
  return (
    gs(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "m":
              return A(W.minute, o);
            case "mo":
              return i.ordinalNumber(o, { unit: "minute" });
            default:
              return j(a.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 0 && a <= 59;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCMinutes(i, 0, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function Ut(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ut = function (r) {
          return typeof r;
        })
      : (Ut = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Ut(t)
  );
}
function Ts(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function wa(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function xs(t, e, r) {
  return e && wa(t.prototype, e), r && wa(t, r), t;
}
function Ss(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Nn(t, e);
}
function Nn(t, e) {
  return (
    (Nn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Nn(t, e)
  );
}
function Rs(t) {
  var e = Ds();
  return function () {
    var n = wr(t),
      o;
    if (e) {
      var a = wr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return ks(this, o);
  };
}
function ks(t, e) {
  return e && (Ut(e) === "object" || typeof e == "function") ? e : In(t);
}
function In(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Ds() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function wr(t) {
  return (
    (wr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    wr(t)
  );
}
function _a(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Es = (function (t) {
  Ss(r, t);
  var e = Rs(r);
  function r() {
    var n;
    Ts(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      _a(In(n), "priority", 50),
      _a(In(n), "incompatibleTokens", ["t", "T"]),
      n
    );
  }
  return (
    xs(r, [
      {
        key: "parse",
        value: function (o, a, i) {
          switch (a) {
            case "s":
              return A(W.second, o);
            case "so":
              return i.ordinalNumber(o, { unit: "second" });
            default:
              return j(a.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, a) {
          return a >= 0 && a <= 59;
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCSeconds(i, 0), o;
        },
      },
    ]),
    r
  );
})(R);
function At(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (At = function (r) {
          return typeof r;
        })
      : (At = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    At(t)
  );
}
function Ms(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Oa(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function Cs(t, e, r) {
  return e && Oa(t.prototype, e), r && Oa(t, r), t;
}
function Ns(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Bn(t, e);
}
function Bn(t, e) {
  return (
    (Bn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Bn(t, e)
  );
}
function Is(t) {
  var e = Us();
  return function () {
    var n = _r(t),
      o;
    if (e) {
      var a = _r(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Bs(this, o);
  };
}
function Bs(t, e) {
  return e && (At(e) === "object" || typeof e == "function") ? e : Un(t);
}
function Un(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Us() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function _r(t) {
  return (
    (_r = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    _r(t)
  );
}
function Pa(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var As = (function (t) {
  Ns(r, t);
  var e = Is(r);
  function r() {
    var n;
    Ms(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Pa(Un(n), "priority", 30),
      Pa(Un(n), "incompatibleTokens", ["t", "T"]),
      n
    );
  }
  return (
    Cs(r, [
      {
        key: "parse",
        value: function (o, a) {
          var i = function (f) {
            return Math.floor(f * Math.pow(10, -a.length + 3));
          };
          return L(j(a.length, o), i);
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return o.setUTCMilliseconds(i), o;
        },
      },
    ]),
    r
  );
})(R);
function Yt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Yt = function (r) {
          return typeof r;
        })
      : (Yt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Yt(t)
  );
}
function Ys(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $a(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function js(t, e, r) {
  return e && $a(t.prototype, e), r && $a(t, r), t;
}
function Ws(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && An(t, e);
}
function An(t, e) {
  return (
    (An =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    An(t, e)
  );
}
function Ls(t) {
  var e = qs();
  return function () {
    var n = Or(t),
      o;
    if (e) {
      var a = Or(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Hs(this, o);
  };
}
function Hs(t, e) {
  return e && (Yt(e) === "object" || typeof e == "function") ? e : Yn(t);
}
function Yn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function qs() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Or(t) {
  return (
    (Or = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Or(t)
  );
}
function Ta(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Vs = (function (t) {
  Ws(r, t);
  var e = Ls(r);
  function r() {
    var n;
    Ys(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Ta(Yn(n), "priority", 10),
      Ta(Yn(n), "incompatibleTokens", ["t", "T", "x"]),
      n
    );
  }
  return (
    js(r, [
      {
        key: "parse",
        value: function (o, a) {
          switch (a) {
            case "X":
              return ye(pe.basicOptionalMinutes, o);
            case "XX":
              return ye(pe.basic, o);
            case "XXXX":
              return ye(pe.basicOptionalSeconds, o);
            case "XXXXX":
              return ye(pe.extendedOptionalSeconds, o);
            case "XXX":
            default:
              return ye(pe.extended, o);
          }
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return a.timestampIsSet ? o : new Date(o.getTime() - i);
        },
      },
    ]),
    r
  );
})(R);
function jt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (jt = function (r) {
          return typeof r;
        })
      : (jt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    jt(t)
  );
}
function Fs(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xa(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function zs(t, e, r) {
  return e && xa(t.prototype, e), r && xa(t, r), t;
}
function Qs(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && jn(t, e);
}
function jn(t, e) {
  return (
    (jn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    jn(t, e)
  );
}
function Xs(t) {
  var e = Ks();
  return function () {
    var n = Pr(t),
      o;
    if (e) {
      var a = Pr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Gs(this, o);
  };
}
function Gs(t, e) {
  return e && (jt(e) === "object" || typeof e == "function") ? e : Wn(t);
}
function Wn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function Ks() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Pr(t) {
  return (
    (Pr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Pr(t)
  );
}
function Sa(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var Js = (function (t) {
  Qs(r, t);
  var e = Xs(r);
  function r() {
    var n;
    Fs(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      Sa(Wn(n), "priority", 10),
      Sa(Wn(n), "incompatibleTokens", ["t", "T", "X"]),
      n
    );
  }
  return (
    zs(r, [
      {
        key: "parse",
        value: function (o, a) {
          switch (a) {
            case "x":
              return ye(pe.basicOptionalMinutes, o);
            case "xx":
              return ye(pe.basic, o);
            case "xxxx":
              return ye(pe.basicOptionalSeconds, o);
            case "xxxxx":
              return ye(pe.extendedOptionalSeconds, o);
            case "xxx":
            default:
              return ye(pe.extended, o);
          }
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return a.timestampIsSet ? o : new Date(o.getTime() - i);
        },
      },
    ]),
    r
  );
})(R);
function Wt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Wt = function (r) {
          return typeof r;
        })
      : (Wt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Wt(t)
  );
}
function Zs(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ra(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function ep(t, e, r) {
  return e && Ra(t.prototype, e), r && Ra(t, r), t;
}
function tp(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && Ln(t, e);
}
function Ln(t, e) {
  return (
    (Ln =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Ln(t, e)
  );
}
function rp(t) {
  var e = op();
  return function () {
    var n = $r(t),
      o;
    if (e) {
      var a = $r(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return np(this, o);
  };
}
function np(t, e) {
  return e && (Wt(e) === "object" || typeof e == "function") ? e : Hn(t);
}
function Hn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function op() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function $r(t) {
  return (
    ($r = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    $r(t)
  );
}
function ka(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var ap = (function (t) {
  tp(r, t);
  var e = rp(r);
  function r() {
    var n;
    Zs(this, r);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(a))),
      ka(Hn(n), "priority", 40),
      ka(Hn(n), "incompatibleTokens", "*"),
      n
    );
  }
  return (
    ep(r, [
      {
        key: "parse",
        value: function (o) {
          return pi(o);
        },
      },
      {
        key: "set",
        value: function (o, a, i) {
          return [new Date(i * 1e3), { timestampIsSet: !0 }];
        },
      },
    ]),
    r
  );
})(R);
function Lt(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Lt = function (r) {
          return typeof r;
        })
      : (Lt = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Lt(t)
  );
}
function ip(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Da(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function up(t, e, r) {
  return e && Da(t.prototype, e), r && Da(t, r), t;
}
function fp(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && qn(t, e);
}
function qn(t, e) {
  return (
    (qn =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    qn(t, e)
  );
}
function cp(t) {
  var e = sp();
  return function () {
    var n = Tr(t),
      o;
    if (e) {
      var a = Tr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return lp(this, o);
  };
}
function lp(t, e) {
  return e && (Lt(e) === "object" || typeof e == "function") ? e : Vn(t);
}
function Vn(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function sp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Tr(t) {
  return (
    (Tr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Tr(t)
  );
}
function Ea(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
var pp = (function (t) {
    fp(r, t);
    var e = cp(r);
    function r() {
      var n;
      ip(this, r);
      for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
        a[i] = arguments[i];
      return (
        (n = e.call.apply(e, [this].concat(a))),
        Ea(Vn(n), "priority", 20),
        Ea(Vn(n), "incompatibleTokens", "*"),
        n
      );
    }
    return (
      up(r, [
        {
          key: "parse",
          value: function (o) {
            return pi(o);
          },
        },
        {
          key: "set",
          value: function (o, a, i) {
            return [new Date(i), { timestampIsSet: !0 }];
          },
        },
      ]),
      r
    );
  })(R),
  yp = {
    G: new yf(),
    y: new wf(),
    Y: new Sf(),
    R: new Nf(),
    u: new Wf(),
    Q: new Qf(),
    q: new tc(),
    M: new fc(),
    L: new vc(),
    w: new Pc(),
    I: new Ec(),
    d: new jc(),
    D: new zc(),
    E: new el(),
    e: new ul(),
    c: new dl(),
    i: new Ol(),
    a: new kl(),
    b: new Bl(),
    B: new Hl(),
    h: new Gl(),
    H: new ns(),
    K: new ls(),
    k: new ms(),
    m: new $s(),
    s: new Es(),
    S: new As(),
    X: new Vs(),
    x: new Js(),
    t: new ap(),
    T: new pp(),
  };
function Ht(t) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ht = function (r) {
          return typeof r;
        })
      : (Ht = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Ht(t)
  );
}
function Ma(t, e) {
  var r;
  if (typeof Symbol > "u" || t[Symbol.iterator] == null) {
    if (
      Array.isArray(t) ||
      (r = dp(t)) ||
      (e && t && typeof t.length == "number")
    ) {
      r && (t = r);
      var n = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0,
    i = !1,
    u;
  return {
    s: function () {
      r = t[Symbol.iterator]();
    },
    n: function () {
      var c = r.next();
      return (a = c.done), c;
    },
    e: function (c) {
      (i = !0), (u = c);
    },
    f: function () {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i) throw u;
      }
    },
  };
}
function dp(t, e) {
  if (t) {
    if (typeof t == "string") return Ca(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ca(t, e);
  }
}
function Ca(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var vp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  hp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  mp = /^'([^]*?)'?$/,
  bp = /''/g,
  gp = /\S/,
  wp = /[a-zA-Z]/;
function _p(t, e, r, n) {
  var o, a, i, u, f, c, l, y, p, s, v, d, h, m, _, O, b, x;
  Y(3, arguments);
  var g = String(t),
    w = String(e),
    $ = Ae(),
    T =
      (o =
        (a = n == null ? void 0 : n.locale) !== null && a !== void 0
          ? a
          : $.locale) !== null && o !== void 0
        ? o
        : fi;
  if (!T.match) throw new RangeError("locale must contain match property");
  var B = Z(
    (i =
      (u =
        (f =
          (c = n == null ? void 0 : n.firstWeekContainsDate) !== null &&
          c !== void 0
            ? c
            : n == null ||
              (l = n.locale) === null ||
              l === void 0 ||
              (y = l.options) === null ||
              y === void 0
            ? void 0
            : y.firstWeekContainsDate) !== null && f !== void 0
          ? f
          : $.firstWeekContainsDate) !== null && u !== void 0
        ? u
        : (p = $.locale) === null ||
          p === void 0 ||
          (s = p.options) === null ||
          s === void 0
        ? void 0
        : s.firstWeekContainsDate) !== null && i !== void 0
      ? i
      : 1
  );
  if (!(B >= 1 && B <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var H = Z(
    (v =
      (d =
        (h =
          (m = n == null ? void 0 : n.weekStartsOn) !== null && m !== void 0
            ? m
            : n == null ||
              (_ = n.locale) === null ||
              _ === void 0 ||
              (O = _.options) === null ||
              O === void 0
            ? void 0
            : O.weekStartsOn) !== null && h !== void 0
          ? h
          : $.weekStartsOn) !== null && d !== void 0
        ? d
        : (b = $.locale) === null ||
          b === void 0 ||
          (x = b.options) === null ||
          x === void 0
        ? void 0
        : x.weekStartsOn) !== null && v !== void 0
      ? v
      : 0
  );
  if (!(H >= 0 && H <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (w === "") return g === "" ? X(r) : new Date(NaN);
  var G = { firstWeekContainsDate: B, weekStartsOn: H, locale: T },
    I = [new nf()],
    ee = w
      .match(hp)
      .map(function (C) {
        var k = C[0];
        if (k in Ir) {
          var K = Ir[k];
          return K(C, T.formatLong);
        }
        return C;
      })
      .join("")
      .match(vp),
    E = [],
    M = Ma(ee),
    z;
  try {
    var Q = function () {
      var k = z.value;
      !(n != null && n.useAdditionalWeekYearTokens) && ui(k) && Ft(k, w, t),
        !(n != null && n.useAdditionalDayOfYearTokens) && ii(k) && Ft(k, w, t);
      var K = k[0],
        Re = yp[K];
      if (Re) {
        var Ye = Re.incompatibleTokens;
        if (Array.isArray(Ye)) {
          var je = E.find(function (tt) {
            return Ye.includes(tt.token) || tt.token === K;
          });
          if (je)
            throw new RangeError(
              "The format string mustn't contain `"
                .concat(je.fullToken, "` and `")
                .concat(k, "` at the same time")
            );
        } else if (Re.incompatibleTokens === "*" && E.length > 0)
          throw new RangeError(
            "The format string mustn't contain `".concat(
              k,
              "` and any other token at the same time"
            )
          );
        E.push({ token: K, fullToken: k });
        var We = Re.run(g, k, T.match, G);
        if (!We) return { v: new Date(NaN) };
        I.push(We.setter), (g = We.rest);
      } else {
        if (K.match(wp))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              K +
              "`"
          );
        if (
          (k === "''" ? (k = "'") : K === "'" && (k = Op(k)),
          g.indexOf(k) === 0)
        )
          g = g.slice(k.length);
        else return { v: new Date(NaN) };
      }
    };
    for (M.s(); !(z = M.n()).done; ) {
      var V = Q();
      if (Ht(V) === "object") return V.v;
    }
  } catch (C) {
    M.e(C);
  } finally {
    M.f();
  }
  if (g.length > 0 && gp.test(g)) return new Date(NaN);
  var F = I.map(function (C) {
      return C.priority;
    })
      .sort(function (C, k) {
        return k - C;
      })
      .filter(function (C, k, K) {
        return K.indexOf(C) === k;
      })
      .map(function (C) {
        return I.filter(function (k) {
          return k.priority === C;
        }).sort(function (k, K) {
          return K.subPriority - k.subPriority;
        });
      })
      .map(function (C) {
        return C[0];
      }),
    te = X(r);
  if (isNaN(te.getTime())) return new Date(NaN);
  var ne = ti(te, Ja(te)),
    xe = {},
    oe = Ma(F),
    re;
  try {
    for (oe.s(); !(re = oe.n()).done; ) {
      var Se = re.value;
      if (!Se.validate(ne, G)) return new Date(NaN);
      var ge = Se.set(ne, xe, G);
      Array.isArray(ge) ? ((ne = ge[0]), Ju(xe, ge[1])) : (ne = ge);
    }
  } catch (C) {
    oe.e(C);
  } finally {
    oe.f();
  }
  return ne;
}
function Op(t) {
  return t.match(mp)[1].replace(bp, "'");
}
function Pp(t) {
  return Y(1, arguments), zi(t, Date.now());
}
function Fn(t, e, r) {
  var n, o, a, i, u;
  e == null && (e = 100);
  function f() {
    var l = Date.now() - i;
    l < e && l >= 0
      ? (n = setTimeout(f, e - l))
      : ((n = null), r || ((u = t.apply(a, o)), (a = o = null)));
  }
  var c = function () {
    (a = this), (o = arguments), (i = Date.now());
    var l = r && !n;
    return (
      n || (n = setTimeout(f, e)), l && ((u = t.apply(a, o)), (a = o = null)), u
    );
  };
  return (
    (c.clear = function () {
      n && (clearTimeout(n), (n = null));
    }),
    (c.flush = function () {
      n && ((u = t.apply(a, o)), (a = o = null), clearTimeout(n), (n = null));
    }),
    c
  );
}
Fn.debounce = Fn;
var Dr = Fn;
function $p(t, e, r) {
  Oe(t)
    ? he(t, (n, o) => {
        o == null || o.removeEventListener(e, r),
          n == null || n.addEventListener(e, r);
      })
    : Zn(() => {
        t.addEventListener(e, r);
      }),
    eo(() => {
      var n;
      (n = S(t)) === null || n === void 0 || n.removeEventListener(e, r);
    });
}
function Tp(t, e) {
  const r = "pointerdown";
  return typeof window > "u" || !window
    ? void 0
    : $p(window, r, (o) => {
        const a = S(t);
        a && (a === o.target || o.composedPath().includes(a) || e(o));
      });
}
function xp(t, e, r) {
  let n = null;
  const o = q(!1);
  Zn(() => {
    (t.content !== void 0 || r.value) && (o.value = !0),
      (n = new MutationObserver(a)),
      n.observe(e.value, { childList: !0, subtree: !0 });
  }),
    eo(() => n.disconnect()),
    he(r, (i) => {
      i ? (o.value = !0) : (o.value = !1);
    });
  const a = () => {
    t.content ? (o.value = !0) : (o.value = !1);
  };
  return { hasContent: o };
}
function Ie(t, e) {
  var r = t.getBoundingClientRect(),
    n = 1,
    o = 1;
  return {
    width: r.width / n,
    height: r.height / o,
    top: r.top / o,
    right: r.right / n,
    bottom: r.bottom / o,
    left: r.left / n,
    x: r.left / n,
    y: r.top / o,
  };
}
function se(t) {
  if (t == null) return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return t;
}
function io(t) {
  var e = se(t),
    r = e.pageXOffset,
    n = e.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Ge(t) {
  var e = se(t).Element;
  return t instanceof e || t instanceof Element;
}
function ae(t) {
  var e = se(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function vi(t) {
  if (typeof ShadowRoot > "u") return !1;
  var e = se(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Sp(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function Rp(t) {
  return t === se(t) || !ae(t) ? io(t) : Sp(t);
}
function ve(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function Te(t) {
  return ((Ge(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function uo(t) {
  return Ie(Te(t)).left + io(t).scrollLeft;
}
function me(t) {
  return se(t).getComputedStyle(t);
}
function fo(t) {
  var e = me(t),
    r = e.overflow,
    n = e.overflowX,
    o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function kp(t) {
  var e = t.getBoundingClientRect(),
    r = e.width / t.offsetWidth || 1,
    n = e.height / t.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Dp(t, e, r) {
  r === void 0 && (r = !1);
  var n = ae(e);
  ae(e) && kp(e);
  var o = Te(e),
    a = Ie(t),
    i = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((ve(e) !== "body" || fo(o)) && (i = Rp(e)),
      ae(e)
        ? ((u = Ie(e)), (u.x += e.clientLeft), (u.y += e.clientTop))
        : o && (u.x = uo(o))),
    {
      x: a.left + i.scrollLeft - u.x,
      y: a.top + i.scrollTop - u.y,
      width: a.width,
      height: a.height,
    }
  );
}
function co(t) {
  var e = Ie(t),
    r = t.offsetWidth,
    n = t.offsetHeight;
  return (
    Math.abs(e.width - r) <= 1 && (r = e.width),
    Math.abs(e.height - n) <= 1 && (n = e.height),
    { x: t.offsetLeft, y: t.offsetTop, width: r, height: n }
  );
}
function xr(t) {
  return ve(t) === "html"
    ? t
    : t.assignedSlot || t.parentNode || (vi(t) ? t.host : null) || Te(t);
}
function hi(t) {
  return ["html", "body", "#document"].indexOf(ve(t)) >= 0
    ? t.ownerDocument.body
    : ae(t) && fo(t)
    ? t
    : hi(xr(t));
}
function Qe(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = hi(t),
    o = n === ((r = t.ownerDocument) == null ? void 0 : r.body),
    a = se(n),
    i = o ? [a].concat(a.visualViewport || [], fo(n) ? n : []) : n,
    u = e.concat(i);
  return o ? u : u.concat(Qe(xr(i)));
}
function Ep(t) {
  return ["table", "td", "th"].indexOf(ve(t)) >= 0;
}
function Na(t) {
  return !ae(t) || me(t).position === "fixed" ? null : t.offsetParent;
}
function Mp(t) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1,
    r = navigator.userAgent.indexOf("Trident") !== -1;
  if (r && ae(t)) {
    var n = me(t);
    if (n.position === "fixed") return null;
  }
  for (var o = xr(t); ae(o) && ["html", "body"].indexOf(ve(o)) < 0; ) {
    var a = me(o);
    if (
      a.transform !== "none" ||
      a.perspective !== "none" ||
      a.contain === "paint" ||
      ["transform", "perspective"].indexOf(a.willChange) !== -1 ||
      (e && a.willChange === "filter") ||
      (e && a.filter && a.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ze(t) {
  for (var e = se(t), r = Na(t); r && Ep(r) && me(r).position === "static"; )
    r = Na(r);
  return r &&
    (ve(r) === "html" || (ve(r) === "body" && me(r).position === "static"))
    ? e
    : r || Mp(t) || e;
}
var ie = "top",
  ce = "bottom",
  le = "right",
  ue = "left",
  lo = "auto",
  et = [ie, ce, le, ue],
  Be = "start",
  Ke = "end",
  Cp = "clippingParents",
  mi = "viewport",
  qe = "popper",
  Np = "reference",
  Ia = et.reduce(function (t, e) {
    return t.concat([e + "-" + Be, e + "-" + Ke]);
  }, []),
  bi = [].concat(et, [lo]).reduce(function (t, e) {
    return t.concat([e, e + "-" + Be, e + "-" + Ke]);
  }, []),
  Ip = "beforeRead",
  Bp = "read",
  Up = "afterRead",
  Ap = "beforeMain",
  Yp = "main",
  jp = "afterMain",
  Wp = "beforeWrite",
  Lp = "write",
  Hp = "afterWrite",
  qp = [Ip, Bp, Up, Ap, Yp, jp, Wp, Lp, Hp];
function Vp(t) {
  var e = new Map(),
    r = new Set(),
    n = [];
  t.forEach(function (a) {
    e.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function (u) {
      if (!r.has(u)) {
        var f = e.get(u);
        f && o(f);
      }
    }),
      n.push(a);
  }
  return (
    t.forEach(function (a) {
      r.has(a.name) || o(a);
    }),
    n
  );
}
function Fp(t) {
  var e = Vp(t);
  return qp.reduce(function (r, n) {
    return r.concat(
      e.filter(function (o) {
        return o.phase === n;
      })
    );
  }, []);
}
function zp(t) {
  var e;
  return function () {
    return (
      e ||
        (e = new Promise(function (r) {
          Promise.resolve().then(function () {
            (e = void 0), r(t());
          });
        })),
      e
    );
  };
}
function de(t) {
  return t.split("-")[0];
}
function Qp(t) {
  var e = t.reduce(function (r, n) {
    var o = r[n.name];
    return (
      (r[n.name] = o
        ? Object.assign({}, o, n, {
            options: Object.assign({}, o.options, n.options),
            data: Object.assign({}, o.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(e).map(function (r) {
    return e[r];
  });
}
function Xp(t) {
  var e = se(t),
    r = Te(t),
    n = e.visualViewport,
    o = r.clientWidth,
    a = r.clientHeight,
    i = 0,
    u = 0;
  return (
    n &&
      ((o = n.width),
      (a = n.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((i = n.offsetLeft), (u = n.offsetTop))),
    { width: o, height: a, x: i + uo(t), y: u }
  );
}
var Pe = Math.max,
  Je = Math.min,
  nt = Math.round;
function Gp(t) {
  var e,
    r = Te(t),
    n = io(t),
    o = (e = t.ownerDocument) == null ? void 0 : e.body,
    a = Pe(
      r.scrollWidth,
      r.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    i = Pe(
      r.scrollHeight,
      r.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    u = -n.scrollLeft + uo(t),
    f = -n.scrollTop;
  return (
    me(o || r).direction === "rtl" &&
      (u += Pe(r.clientWidth, o ? o.clientWidth : 0) - a),
    { width: a, height: i, x: u, y: f }
  );
}
function gi(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e)) return !0;
  if (r && vi(r)) {
    var n = e;
    do {
      if (n && t.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function zn(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height,
  });
}
function Kp(t) {
  var e = Ie(t);
  return (
    (e.top = e.top + t.clientTop),
    (e.left = e.left + t.clientLeft),
    (e.bottom = e.top + t.clientHeight),
    (e.right = e.left + t.clientWidth),
    (e.width = t.clientWidth),
    (e.height = t.clientHeight),
    (e.x = e.left),
    (e.y = e.top),
    e
  );
}
function Ba(t, e) {
  return e === mi ? zn(Xp(t)) : ae(e) ? Kp(e) : zn(Gp(Te(t)));
}
function Jp(t) {
  var e = Qe(xr(t)),
    r = ["absolute", "fixed"].indexOf(me(t).position) >= 0,
    n = r && ae(t) ? Ze(t) : t;
  return Ge(n)
    ? e.filter(function (o) {
        return Ge(o) && gi(o, n) && ve(o) !== "body";
      })
    : [];
}
function Zp(t, e, r) {
  var n = e === "clippingParents" ? Jp(t) : [].concat(e),
    o = [].concat(n, [r]),
    a = o[0],
    i = o.reduce(function (u, f) {
      var c = Ba(t, f);
      return (
        (u.top = Pe(c.top, u.top)),
        (u.right = Je(c.right, u.right)),
        (u.bottom = Je(c.bottom, u.bottom)),
        (u.left = Pe(c.left, u.left)),
        u
      );
    }, Ba(t, a));
  return (
    (i.width = i.right - i.left),
    (i.height = i.bottom - i.top),
    (i.x = i.left),
    (i.y = i.top),
    i
  );
}
function Ue(t) {
  return t.split("-")[1];
}
function so(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function wi(t) {
  var e = t.reference,
    r = t.element,
    n = t.placement,
    o = n ? de(n) : null,
    a = n ? Ue(n) : null,
    i = e.x + e.width / 2 - r.width / 2,
    u = e.y + e.height / 2 - r.height / 2,
    f;
  switch (o) {
    case ie:
      f = { x: i, y: e.y - r.height };
      break;
    case ce:
      f = { x: i, y: e.y + e.height };
      break;
    case le:
      f = { x: e.x + e.width, y: u };
      break;
    case ue:
      f = { x: e.x - r.width, y: u };
      break;
    default:
      f = { x: e.x, y: e.y };
  }
  var c = o ? so(o) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (a) {
      case Be:
        f[c] = f[c] - (e[l] / 2 - r[l] / 2);
        break;
      case Ke:
        f[c] = f[c] + (e[l] / 2 - r[l] / 2);
        break;
    }
  }
  return f;
}
function _i() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Oi(t) {
  return Object.assign({}, _i(), t);
}
function Pi(t, e) {
  return e.reduce(function (r, n) {
    return (r[n] = t), r;
  }, {});
}
function po(t, e) {
  e === void 0 && (e = {});
  var r = e,
    n = r.placement,
    o = n === void 0 ? t.placement : n,
    a = r.boundary,
    i = a === void 0 ? Cp : a,
    u = r.rootBoundary,
    f = u === void 0 ? mi : u,
    c = r.elementContext,
    l = c === void 0 ? qe : c,
    y = r.altBoundary,
    p = y === void 0 ? !1 : y,
    s = r.padding,
    v = s === void 0 ? 0 : s,
    d = Oi(typeof v != "number" ? v : Pi(v, et)),
    h = l === qe ? Np : qe,
    m = t.rects.popper,
    _ = t.elements[p ? h : l],
    O = Zp(Ge(_) ? _ : _.contextElement || Te(t.elements.popper), i, f),
    b = Ie(t.elements.reference),
    x = wi({ reference: b, element: m, strategy: "absolute", placement: o }),
    g = zn(Object.assign({}, m, x)),
    w = l === qe ? g : b,
    $ = {
      top: O.top - w.top + d.top,
      bottom: w.bottom - O.bottom + d.bottom,
      left: O.left - w.left + d.left,
      right: w.right - O.right + d.right,
    },
    T = t.modifiersData.offset;
  if (l === qe && T) {
    var B = T[o];
    Object.keys($).forEach(function (H) {
      var G = [le, ce].indexOf(H) >= 0 ? 1 : -1,
        I = [ie, ce].indexOf(H) >= 0 ? "y" : "x";
      $[H] += B[I] * G;
    });
  }
  return $;
}
var Ua = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Aa() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function ey(t) {
  t === void 0 && (t = {});
  var e = t,
    r = e.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = e.defaultOptions,
    a = o === void 0 ? Ua : o;
  return function (u, f, c) {
    c === void 0 && (c = a);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ua, a),
        modifiersData: {},
        elements: { reference: u, popper: f },
        attributes: {},
        styles: {},
      },
      y = [],
      p = !1,
      s = {
        state: l,
        setOptions: function (m) {
          var _ = typeof m == "function" ? m(l.options) : m;
          d(),
            (l.options = Object.assign({}, a, l.options, _)),
            (l.scrollParents = {
              reference: Ge(u)
                ? Qe(u)
                : u.contextElement
                ? Qe(u.contextElement)
                : [],
              popper: Qe(f),
            });
          var O = Fp(Qp([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = O.filter(function (b) {
              return b.enabled;
            })),
            v(),
            s.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var m = l.elements,
              _ = m.reference,
              O = m.popper;
            if (Aa(_, O)) {
              (l.rects = {
                reference: Dp(_, Ze(O), l.options.strategy === "fixed"),
                popper: co(O),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (B) {
                  return (l.modifiersData[B.name] = Object.assign({}, B.data));
                });
              for (var b = 0; b < l.orderedModifiers.length; b++) {
                if (l.reset === !0) {
                  (l.reset = !1), (b = -1);
                  continue;
                }
                var x = l.orderedModifiers[b],
                  g = x.fn,
                  w = x.options,
                  $ = w === void 0 ? {} : w,
                  T = x.name;
                typeof g == "function" &&
                  (l = g({ state: l, options: $, name: T, instance: s }) || l);
              }
            }
          }
        },
        update: zp(function () {
          return new Promise(function (h) {
            s.forceUpdate(), h(l);
          });
        }),
        destroy: function () {
          d(), (p = !0);
        },
      };
    if (!Aa(u, f)) return s;
    s.setOptions(c).then(function (h) {
      !p && c.onFirstUpdate && c.onFirstUpdate(h);
    });
    function v() {
      l.orderedModifiers.forEach(function (h) {
        var m = h.name,
          _ = h.options,
          O = _ === void 0 ? {} : _,
          b = h.effect;
        if (typeof b == "function") {
          var x = b({ state: l, name: m, instance: s, options: O }),
            g = function () {};
          y.push(x || g);
        }
      });
    }
    function d() {
      y.forEach(function (h) {
        return h();
      }),
        (y = []);
    }
    return s;
  };
}
var ot = { passive: !0 };
function ty(t) {
  var e = t.state,
    r = t.instance,
    n = t.options,
    o = n.scroll,
    a = o === void 0 ? !0 : o,
    i = n.resize,
    u = i === void 0 ? !0 : i,
    f = se(e.elements.popper),
    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return (
    a &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, ot);
      }),
    u && f.addEventListener("resize", r.update, ot),
    function () {
      a &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, ot);
        }),
        u && f.removeEventListener("resize", r.update, ot);
    }
  );
}
var ry = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: ty,
  data: {},
};
function ny(t) {
  var e = t.state,
    r = t.name;
  e.modifiersData[r] = wi({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement,
  });
}
var oy = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: ny,
    data: {},
  },
  ay = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function iy(t) {
  var e = t.x,
    r = t.y,
    n = window,
    o = n.devicePixelRatio || 1;
  return { x: nt(nt(e * o) / o) || 0, y: nt(nt(r * o) / o) || 0 };
}
function Ya(t) {
  var e,
    r = t.popper,
    n = t.popperRect,
    o = t.placement,
    a = t.variation,
    i = t.offsets,
    u = t.position,
    f = t.gpuAcceleration,
    c = t.adaptive,
    l = t.roundOffsets,
    y = l === !0 ? iy(i) : typeof l == "function" ? l(i) : i,
    p = y.x,
    s = p === void 0 ? 0 : p,
    v = y.y,
    d = v === void 0 ? 0 : v,
    h = i.hasOwnProperty("x"),
    m = i.hasOwnProperty("y"),
    _ = ue,
    O = ie,
    b = window;
  if (c) {
    var x = Ze(r),
      g = "clientHeight",
      w = "clientWidth";
    x === se(r) &&
      ((x = Te(r)),
      me(x).position !== "static" &&
        u === "absolute" &&
        ((g = "scrollHeight"), (w = "scrollWidth"))),
      (x = x),
      (o === ie || ((o === ue || o === le) && a === Ke)) &&
        ((O = ce), (d -= x[g] - n.height), (d *= f ? 1 : -1)),
      (o === ue || ((o === ie || o === ce) && a === Ke)) &&
        ((_ = le), (s -= x[w] - n.width), (s *= f ? 1 : -1));
  }
  var $ = Object.assign({ position: u }, c && ay);
  if (f) {
    var T;
    return Object.assign(
      {},
      $,
      ((T = {}),
      (T[O] = m ? "0" : ""),
      (T[_] = h ? "0" : ""),
      (T.transform =
        (b.devicePixelRatio || 1) <= 1
          ? "translate(" + s + "px, " + d + "px)"
          : "translate3d(" + s + "px, " + d + "px, 0)"),
      T)
    );
  }
  return Object.assign(
    {},
    $,
    ((e = {}),
    (e[O] = m ? d + "px" : ""),
    (e[_] = h ? s + "px" : ""),
    (e.transform = ""),
    e)
  );
}
function uy(t) {
  var e = t.state,
    r = t.options,
    n = r.gpuAcceleration,
    o = n === void 0 ? !0 : n,
    a = r.adaptive,
    i = a === void 0 ? !0 : a,
    u = r.roundOffsets,
    f = u === void 0 ? !0 : u,
    c = {
      placement: de(e.placement),
      variation: Ue(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: o,
    };
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      Ya(
        Object.assign({}, c, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: i,
          roundOffsets: f,
        })
      )
    )),
    e.modifiersData.arrow != null &&
      (e.styles.arrow = Object.assign(
        {},
        e.styles.arrow,
        Ya(
          Object.assign({}, c, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: f,
          })
        )
      )),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-placement": e.placement,
    }));
}
var fy = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: uy,
  data: {},
};
function cy(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function (r) {
    var n = e.styles[r] || {},
      o = e.attributes[r] || {},
      a = e.elements[r];
    !ae(a) ||
      !ve(a) ||
      (Object.assign(a.style, n),
      Object.keys(o).forEach(function (i) {
        var u = o[i];
        u === !1 ? a.removeAttribute(i) : a.setAttribute(i, u === !0 ? "" : u);
      }));
  });
}
function ly(t) {
  var e = t.state,
    r = {
      popper: {
        position: e.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(e.elements.popper.style, r.popper),
    (e.styles = r),
    e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow),
    function () {
      Object.keys(e.elements).forEach(function (n) {
        var o = e.elements[n],
          a = e.attributes[n] || {},
          i = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]),
          u = i.reduce(function (f, c) {
            return (f[c] = ""), f;
          }, {});
        !ae(o) ||
          !ve(o) ||
          (Object.assign(o.style, u),
          Object.keys(a).forEach(function (f) {
            o.removeAttribute(f);
          }));
      });
    }
  );
}
var sy = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: cy,
    effect: ly,
    requires: ["computeStyles"],
  },
  py = [ry, oy, fy, sy],
  yy = ey({ defaultModifiers: py });
function dy(t) {
  return t === "x" ? "y" : "x";
}
function qt(t, e, r) {
  return Pe(t, Je(e, r));
}
function vy(t) {
  var e = t.state,
    r = t.options,
    n = t.name,
    o = r.mainAxis,
    a = o === void 0 ? !0 : o,
    i = r.altAxis,
    u = i === void 0 ? !1 : i,
    f = r.boundary,
    c = r.rootBoundary,
    l = r.altBoundary,
    y = r.padding,
    p = r.tether,
    s = p === void 0 ? !0 : p,
    v = r.tetherOffset,
    d = v === void 0 ? 0 : v,
    h = po(e, { boundary: f, rootBoundary: c, padding: y, altBoundary: l }),
    m = de(e.placement),
    _ = Ue(e.placement),
    O = !_,
    b = so(m),
    x = dy(b),
    g = e.modifiersData.popperOffsets,
    w = e.rects.reference,
    $ = e.rects.popper,
    T =
      typeof d == "function"
        ? d(Object.assign({}, e.rects, { placement: e.placement }))
        : d,
    B = { x: 0, y: 0 };
  if (g) {
    if (a || u) {
      var H = b === "y" ? ie : ue,
        G = b === "y" ? ce : le,
        I = b === "y" ? "height" : "width",
        ee = g[b],
        E = g[b] + h[H],
        M = g[b] - h[G],
        z = s ? -$[I] / 2 : 0,
        Q = _ === Be ? w[I] : $[I],
        V = _ === Be ? -$[I] : -w[I],
        F = e.elements.arrow,
        te = s && F ? co(F) : { width: 0, height: 0 },
        ne = e.modifiersData["arrow#persistent"]
          ? e.modifiersData["arrow#persistent"].padding
          : _i(),
        xe = ne[H],
        oe = ne[G],
        re = qt(0, w[I], te[I]),
        Se = O ? w[I] / 2 - z - re - xe - T : Q - re - xe - T,
        ge = O ? -w[I] / 2 + z + re + oe + T : V + re + oe + T,
        C = e.elements.arrow && Ze(e.elements.arrow),
        k = C ? (b === "y" ? C.clientTop || 0 : C.clientLeft || 0) : 0,
        K = e.modifiersData.offset ? e.modifiersData.offset[e.placement][b] : 0,
        Re = g[b] + Se - K - k,
        Ye = g[b] + ge - K;
      if (a) {
        var je = qt(s ? Je(E, Re) : E, ee, s ? Pe(M, Ye) : M);
        (g[b] = je), (B[b] = je - ee);
      }
      if (u) {
        var We = b === "x" ? ie : ue,
          tt = b === "x" ? ce : le,
          rt = g[x],
          ho = rt + h[We],
          mo = rt - h[tt],
          bo = qt(s ? Je(ho, Re) : ho, rt, s ? Pe(mo, Ye) : mo);
        (g[x] = bo), (B[x] = bo - rt);
      }
    }
    e.modifiersData[n] = B;
  }
}
var hy = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: vy,
    requiresIfExists: ["offset"],
  },
  my = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Vt(t) {
  return t.replace(/left|right|bottom|top/g, function (e) {
    return my[e];
  });
}
var by = { start: "end", end: "start" };
function ja(t) {
  return t.replace(/start|end/g, function (e) {
    return by[e];
  });
}
function gy(t, e) {
  e === void 0 && (e = {});
  var r = e,
    n = r.placement,
    o = r.boundary,
    a = r.rootBoundary,
    i = r.padding,
    u = r.flipVariations,
    f = r.allowedAutoPlacements,
    c = f === void 0 ? bi : f,
    l = Ue(n),
    y = l
      ? u
        ? Ia
        : Ia.filter(function (v) {
            return Ue(v) === l;
          })
      : et,
    p = y.filter(function (v) {
      return c.indexOf(v) >= 0;
    });
  p.length === 0 && (p = y);
  var s = p.reduce(function (v, d) {
    return (
      (v[d] = po(t, { placement: d, boundary: o, rootBoundary: a, padding: i })[
        de(d)
      ]),
      v
    );
  }, {});
  return Object.keys(s).sort(function (v, d) {
    return s[v] - s[d];
  });
}
function wy(t) {
  if (de(t) === lo) return [];
  var e = Vt(t);
  return [ja(t), e, ja(e)];
}
function _y(t) {
  var e = t.state,
    r = t.options,
    n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (
      var o = r.mainAxis,
        a = o === void 0 ? !0 : o,
        i = r.altAxis,
        u = i === void 0 ? !0 : i,
        f = r.fallbackPlacements,
        c = r.padding,
        l = r.boundary,
        y = r.rootBoundary,
        p = r.altBoundary,
        s = r.flipVariations,
        v = s === void 0 ? !0 : s,
        d = r.allowedAutoPlacements,
        h = e.options.placement,
        m = de(h),
        _ = m === h,
        O = f || (_ || !v ? [Vt(h)] : wy(h)),
        b = [h].concat(O).reduce(function (oe, re) {
          return oe.concat(
            de(re) === lo
              ? gy(e, {
                  placement: re,
                  boundary: l,
                  rootBoundary: y,
                  padding: c,
                  flipVariations: v,
                  allowedAutoPlacements: d,
                })
              : re
          );
        }, []),
        x = e.rects.reference,
        g = e.rects.popper,
        w = new Map(),
        $ = !0,
        T = b[0],
        B = 0;
      B < b.length;
      B++
    ) {
      var H = b[B],
        G = de(H),
        I = Ue(H) === Be,
        ee = [ie, ce].indexOf(G) >= 0,
        E = ee ? "width" : "height",
        M = po(e, {
          placement: H,
          boundary: l,
          rootBoundary: y,
          altBoundary: p,
          padding: c,
        }),
        z = ee ? (I ? le : ue) : I ? ce : ie;
      x[E] > g[E] && (z = Vt(z));
      var Q = Vt(z),
        V = [];
      if (
        (a && V.push(M[G] <= 0),
        u && V.push(M[z] <= 0, M[Q] <= 0),
        V.every(function (oe) {
          return oe;
        }))
      ) {
        (T = H), ($ = !1);
        break;
      }
      w.set(H, V);
    }
    if ($)
      for (
        var F = v ? 3 : 1,
          te = function (re) {
            var Se = b.find(function (ge) {
              var C = w.get(ge);
              if (C)
                return C.slice(0, re).every(function (k) {
                  return k;
                });
            });
            if (Se) return (T = Se), "break";
          },
          ne = F;
        ne > 0;
        ne--
      ) {
        var xe = te(ne);
        if (xe === "break") break;
      }
    e.placement !== T &&
      ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
  }
}
var Oy = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _y,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Py(t, e, r) {
  var n = de(t),
    o = [ue, ie].indexOf(n) >= 0 ? -1 : 1,
    a = typeof r == "function" ? r(Object.assign({}, e, { placement: t })) : r,
    i = a[0],
    u = a[1];
  return (
    (i = i || 0),
    (u = (u || 0) * o),
    [ue, le].indexOf(n) >= 0 ? { x: u, y: i } : { x: i, y: u }
  );
}
function $y(t) {
  var e = t.state,
    r = t.options,
    n = t.name,
    o = r.offset,
    a = o === void 0 ? [0, 0] : o,
    i = bi.reduce(function (l, y) {
      return (l[y] = Py(y, e.rects, a)), l;
    }, {}),
    u = i[e.placement],
    f = u.x,
    c = u.y;
  e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += f),
    (e.modifiersData.popperOffsets.y += c)),
    (e.modifiersData[n] = i);
}
var Ty = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: $y,
  },
  xy = function (e, r) {
    return (
      (e =
        typeof e == "function"
          ? e(Object.assign({}, r.rects, { placement: r.placement }))
          : e),
      Oi(typeof e != "number" ? e : Pi(e, et))
    );
  };
function Sy(t) {
  var e,
    r = t.state,
    n = t.name,
    o = t.options,
    a = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    u = de(r.placement),
    f = so(u),
    c = [ue, le].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!a || !i)) {
    var y = xy(o.padding, r),
      p = co(a),
      s = f === "y" ? ie : ue,
      v = f === "y" ? ce : le,
      d =
        r.rects.reference[l] + r.rects.reference[f] - i[f] - r.rects.popper[l],
      h = i[f] - r.rects.reference[f],
      m = Ze(a),
      _ = m ? (f === "y" ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
      O = d / 2 - h / 2,
      b = y[s],
      x = _ - p[l] - y[v],
      g = _ / 2 - p[l] / 2 + O,
      w = qt(b, g, x),
      $ = f;
    r.modifiersData[n] = ((e = {}), (e[$] = w), (e.centerOffset = w - g), e);
  }
}
function Ry(t) {
  var e = t.state,
    r = t.options,
    n = r.element,
    o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null &&
    ((typeof o == "string" && ((o = e.elements.popper.querySelector(o)), !o)) ||
      (gi(e.elements.popper, o) && (e.elements.arrow = o)));
}
var ky = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Sy,
  effect: Ry,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
const Er = (t) => parseInt(t, 10);
function Dy({
  arrowPadding: t,
  emit: e,
  locked: r,
  offsetDistance: n,
  offsetSkid: o,
  placement: a,
  popperNode: i,
  triggerNode: u,
}) {
  const f = Ui({ isOpen: !1, popperInstance: null }),
    c = (d) => {
      var h;
      (h = f.popperInstance) === null ||
        h === void 0 ||
        h.setOptions((m) => ({
          ...m,
          modifiers: [...m.modifiers, { name: "eventListeners", enabled: d }],
        }));
    },
    l = () => c(!0),
    y = () => c(!1),
    p = () => {
      f.isOpen && ((f.isOpen = !1), e("close:popper"));
    },
    s = () => {
      f.isOpen || ((f.isOpen = !0), e("open:popper"));
    };
  he([() => f.isOpen, a], async ([d]) => {
    d ? (await v(), l()) : y();
  });
  const v = async () => {
    await Ai(),
      (f.popperInstance = yy(u.value, i.value, {
        placement: a.value,
        modifiers: [
          hy,
          Oy,
          { name: "flip", enabled: !r.value },
          ky,
          { name: "arrow", options: { padding: Er(t.value) } },
          Ty,
          { name: "offset", options: { offset: [Er(o.value), Er(n.value)] } },
        ],
      })),
      f.popperInstance.update();
  };
  return (
    eo(() => {
      var d;
      (d = f.popperInstance) === null || d === void 0 || d.destroy();
    }),
    { ...Ga(f), open: s, close: p }
  );
}
const Ey = { id: "arrow", "data-popper-arrow": "" };
function My(t, e) {
  return P(), U("div", Ey);
}
function $i(t, e) {
  e === void 0 && (e = {});
  var r = e.insertAt;
  if (!(!t || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0],
      o = document.createElement("style");
    (o.type = "text/css"),
      r === "top" && n.firstChild
        ? n.insertBefore(o, n.firstChild)
        : n.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = t)
        : o.appendChild(document.createTextNode(t));
  }
}
var Cy = `
#arrow[data-v-20b7fd4a],
  #arrow[data-v-20b7fd4a]::before {
    transition: background 250ms ease-in-out;
    position: absolute;
    width: calc(10px - var(--popper-theme-border-width, 0px));
    height: calc(10px - var(--popper-theme-border-width, 0px));
    box-sizing: border-box;
    background: var(--popper-theme-background-color);
}
#arrow[data-v-20b7fd4a] {
    visibility: hidden;
}
#arrow[data-v-20b7fd4a]::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
}

  /* Top arrow */
.popper[data-popper-placement^="top"] > #arrow[data-v-20b7fd4a] {
    bottom: -5px;
}
.popper[data-popper-placement^="top"] > #arrow[data-v-20b7fd4a]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-bottom: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Bottom arrow */
.popper[data-popper-placement^="bottom"] > #arrow[data-v-20b7fd4a] {
    top: -5px;
}
.popper[data-popper-placement^="bottom"] > #arrow[data-v-20b7fd4a]::before {
    border-left: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Left arrow */
.popper[data-popper-placement^="left"] > #arrow[data-v-20b7fd4a] {
    right: -5px;
}
.popper[data-popper-placement^="left"] > #arrow[data-v-20b7fd4a]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Right arrow */
.popper[data-popper-placement^="right"] > #arrow[data-v-20b7fd4a] {
    left: -5px;
}
`;
$i(Cy);
const yo = {};
yo.render = My;
yo.__scopeId = "data-v-20b7fd4a";
var Ny = yo;
const Iy = ["onKeyup"];
var Ti = {
    props: {
      placement: {
        type: String,
        default: "bottom",
        validator: function (t) {
          return [
            "auto",
            "auto-start",
            "auto-end",
            "top",
            "top-start",
            "top-end",
            "bottom",
            "bottom-start",
            "bottom-end",
            "right",
            "right-start",
            "right-end",
            "left",
            "left-start",
            "left-end",
          ].includes(t);
        },
      },
      disableClickAway: { type: Boolean, default: !1 },
      offsetSkid: { type: String, default: "0" },
      offsetDistance: { type: String, default: "12" },
      hover: { type: Boolean, default: !1 },
      show: { type: Boolean, default: null },
      disabled: { type: Boolean, default: !1 },
      openDelay: { type: [Number, String], default: 0 },
      closeDelay: { type: [Number, String], default: 0 },
      zIndex: { type: [Number, String], default: 9999 },
      arrow: { type: Boolean, default: !1 },
      arrowPadding: { type: String, default: "0" },
      interactive: { type: Boolean, default: !0 },
      locked: { type: Boolean, default: !1 },
      content: { type: String, default: null },
    },
    emits: ["open:popper", "close:popper"],
    setup(t, { emit: e }) {
      const r = t;
      Ei((Q) => ({ c81fc0a4: t.zIndex }));
      const n = Mi(),
        o = q(null),
        a = q(null),
        i = q(null),
        u = q(!1);
      Zn(() => {
        const Q = n.default();
        if (Q && Q.length > 1)
          return console.error(
            `[Popper]: The <Popper> component expects only one child element at its root. You passed ${Q.length} child nodes.`
          );
      });
      const {
          arrowPadding: f,
          closeDelay: c,
          content: l,
          disableClickAway: y,
          disabled: p,
          interactive: s,
          locked: v,
          offsetDistance: d,
          offsetSkid: h,
          openDelay: m,
          placement: _,
          show: O,
        } = Ga(r),
        {
          isOpen: b,
          open: x,
          close: g,
        } = Dy({
          arrowPadding: f,
          emit: e,
          locked: v,
          offsetDistance: d,
          offsetSkid: h,
          placement: _,
          popperNode: a,
          triggerNode: i,
        }),
        { hasContent: w } = xp(n, a, l),
        $ = J(() => O.value !== null),
        T = J(() => p.value || !w.value),
        B = J(() => b.value && !T.value),
        H = J(() => !y.value && !$.value),
        G = J(() =>
          s.value
            ? `border: ${d.value}px solid transparent; margin: -${d.value}px;`
            : null
        ),
        I = Dr.debounce(x, m.value),
        ee = Dr.debounce(g, c.value),
        E = async () => {
          T.value || $.value || (ee.clear(), I());
        },
        M = async () => {
          $.value || (I.clear(), ee());
        },
        z = () => {
          b.value ? M() : E();
        };
      return (
        he([w, p], ([Q, V]) => {
          b.value && (!Q || V) && g();
        }),
        he(b, (Q) => {
          Q
            ? (u.value = !0)
            : Dr.debounce(() => {
                u.value = !1;
              }, 200);
        }),
        go(() => {
          $.value && (O.value ? I() : ee());
        }),
        go(() => {
          H.value && Tp(o, M);
        }),
        (Q, V) => (
          P(),
          U(
            "div",
            {
              class: "inline-block",
              style: Bi(S(G)),
              onMouseleave: V[2] || (V[2] = (F) => t.hover && M()),
              ref: (F, te) => {
                (te.popperContainerNode = F), (o.value = F);
              },
            },
            [
              N(
                "div",
                {
                  ref: (F, te) => {
                    (te.triggerNode = F), (i.value = F);
                  },
                  onMouseover: V[0] || (V[0] = (F) => t.hover && E()),
                  onClick: z,
                  onFocus: E,
                  onKeyup: Ci(M, ["esc"]),
                },
                [Xe(Q.$slots, "default")],
                40,
                Iy
              ),
              _e(
                Ii,
                { name: "fade" },
                {
                  default: Cr(() => [
                    Ka(
                      N(
                        "div",
                        {
                          onClick: V[1] || (V[1] = (F) => !S(s) && M()),
                          class: "popper",
                          ref: (F, te) => {
                            (te.popperNode = F), (a.value = F);
                          },
                        },
                        [
                          Xe(
                            Q.$slots,
                            "content",
                            { close: S(g), isOpen: u.value },
                            () => [Nr($e(S(l)), 1)]
                          ),
                          t.arrow ? (P(), fe(Ny, { key: 0 })) : De("", !0),
                        ],
                        512
                      ),
                      [[Ni, S(B)]]
                    ),
                  ]),
                  _: 3,
                }
              ),
            ],
            36
          )
        )
      );
    },
  },
  By = `
.inline-block[data-v-5784ed69] {
    display: inline-block;
}
.popper[data-v-5784ed69] {
    transition: background 250ms ease-in-out;
    background: var(--popper-theme-background-color);
    padding: var(--popper-theme-padding);
    color: var(--popper-theme-text-color);
    border-radius: var(--popper-theme-border-radius);
    border-width: var(--popper-theme-border-width);
    border-style: var(--popper-theme-border-style);
    border-color: var(--popper-theme-border-color);
    box-shadow: var(--popper-theme-box-shadow);
    z-index: var(--c81fc0a4);
}
.popper[data-v-5784ed69]:hover,
  .popper:hover > #arrow[data-v-5784ed69]::before {
    background: var(--popper-theme-background-color-hover);
}
.inline-block[data-v-5784ed69] {
    display: inline-block;
}
.fade-enter-active[data-v-5784ed69],
  .fade-leave-active[data-v-5784ed69] {
    transition: opacity 0.2s ease;
}
.fade-enter-from[data-v-5784ed69],
  .fade-leave-to[data-v-5784ed69] {
    opacity: 0;
}
`;
$i(By);
Ti.__scopeId = "data-v-5784ed69";
var Uy = (() => {
  const t = Ti;
  return (
    (t.install = (e) => {
      e.component("Popper", t);
    }),
    t
  );
})();
const xi = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  Ay = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ],
  Yy = (t, e) => {
    const r = new Date().getFullYear(),
      n = r > e ? r + 1 - t : e + 1 - t;
    return Array.from({ length: n }, (o, a) => t + a);
  },
  Mr = 7,
  jy = (t, e) => {
    const r = new Date(e, t, 1),
      n = r.getDay(),
      o = [[]];
    let a = o[0],
      i = r;
    const u = [...Array(Mr).keys()];
    for (
      Array.from({ length: u.indexOf(n) }, () => {
        a.push(null);
      });
      i.getMonth() === t;

    )
      a.length === Mr && ((a = []), o.push(a)),
        a.push(i),
        (i = new Date(e, t, i.getDate() + 1));
    for (; a.length < Mr; ) a.push(null);
    return o;
  },
  Wy = (t) => {
    const e = [],
      r = t == null ? void 0 : t.start,
      n = t == null ? void 0 : t.end;
    if (r && n) {
      const o = new Date(r.getTime());
      for (; o <= n; ) e.push(new Date(o)), o.setDate(o.getDate() + 1);
    }
    return e;
  },
  Ly = (t, e) => !!t.find((r) => r.getTime() === e.getTime()),
  Qn = (t, e) =>
    t > 10 ? { month: 0, year: e + 1 } : { month: t + 1, year: e },
  Si = (t, e) =>
    t < 1 ? { month: 11, year: e - 1 } : { month: t - 1, year: e },
  at = (t, e) => (t ? Gu(t, e) : null),
  Wa = (t, e) => {
    const r = _p(t, e, new Date());
    return ei(r) && Za(r) ? r : null;
  },
  Ri = (t, e) => {
    let r = { start: e.start, end: e.end };
    return (
      ((r.start && r.end) || r.start > t) && (r = { start: null, end: null }),
      !r.start || r.end > t ? (r.start = t) : (r.end = t),
      r
    );
  },
  La = (t, e) =>
    t && e
      ? t.getDate() === e.getDate() &&
        t.getMonth() === e.getMonth() &&
        t.getFullYear() === e.getFullYear()
      : !1,
  be = {
    month: { type: Number, default: new Date().getMonth() },
    year: { type: Number, default: new Date().getFullYear() },
    modelValue: { type: [Object, Number, Date], default: null },
    inline: { type: Boolean, default: !0 },
    allowRange: { type: Boolean, default: !1 },
    multiMonth: { type: Boolean, default: !1 },
    selectedDateRange: { tyoe: Object, default: null },
  },
  Hy = { class: "dp-nav-wrapper" },
  qy = N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-4 h-4",
    },
    [
      N("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18",
      }),
    ],
    -1
  ),
  Vy = [qy],
  Fy = { class: "flex" },
  zy = N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-4 h-4 ml-2",
    },
    [
      N("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
      }),
    ],
    -1
  ),
  Qy = N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-4 h-4 ml-2",
    },
    [
      N("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
      }),
    ],
    -1
  ),
  Xy = N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-4 h-4",
    },
    [
      N("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75",
      }),
    ],
    -1
  ),
  Gy = [Xy],
  Xn = {
    __name: "CalendarNavigation",
    props: { ...be },
    emits: [
      "toggle",
      "month-select",
      "year-select",
      "update:month",
      "update:year",
      "prev-month",
      "next-month",
    ],
    setup(t, { emit: e }) {
      const r = t,
        n = () => {
          const { month: u, year: f } = Qn(r.month, r.year);
          e("update:month", u), e("update:year", f), e("next-month");
        },
        o = () => {
          const { month: u, year: f } = Si(r.month, r.year);
          e("update:month", u), e("update:year", f), e("prev-month");
        },
        a = () => {
          e("toggle", "month-select");
        },
        i = () => {
          e("toggle", "year-select");
        };
      return (u, f) => (
        P(),
        U("div", Hy, [
          N("button", { class: "dp-nav-left-arrow", onClick: o }, Vy),
          N("div", Fy, [
            N(
              "button",
              { class: "flex items-center dp-nav-month-toggle", onClick: a },
              [Nr($e(S(xi)[u.month]) + " ", 1), zy]
            ),
            N(
              "button",
              { class: "flex items-center dp-nav-year-toggle", onClick: i },
              [Nr($e(u.year) + " ", 1), Qy]
            ),
          ]),
          N("button", { class: "dp-nav-right-arrow", onClick: n }, Gy),
        ])
      );
    },
  },
  Ky = { class: "dp-month-select-wrapper" },
  Jy = ["onClick"],
  Zy = {
    __name: "MonthPicker",
    props: { ...be },
    emits: ["update:modelValue"],
    setup(t, { emit: e }) {
      const r = (n) => {
        e("update:modelValue", n);
      };
      return (n, o) => (
        P(),
        U("div", Ky, [
          (P(!0),
          U(
            Fe,
            null,
            ze(
              S(xi),
              (a, i) => (
                P(),
                U(
                  "button",
                  {
                    key: i,
                    class: Ce({
                      "dp-month-select-cell": !0,
                      "dp-month-select-active-cell": i === n.modelValue,
                    }),
                    onClick: (u) => r(i),
                  },
                  $e(a),
                  11,
                  Jy
                )
              )
            ),
            128
          )),
        ])
      );
    },
  },
  ed = { class: "dp-year-select-wrapper" },
  td = ["onClick"],
  rd = {
    __name: "YearPicker",
    props: { ...be },
    emits: ["update:modelValue"],
    setup(t, { emit: e }) {
      const r = t,
        n = (a) => {
          e("update:modelValue", a);
        },
        o = J(() => Yy(1972, r.modelValue).reverse());
      return (a, i) => (
        P(),
        U("div", ed, [
          (P(!0),
          U(
            Fe,
            null,
            ze(
              S(o),
              (u) => (
                P(),
                U(
                  "button",
                  {
                    key: u,
                    class: Ce({
                      "dp-year-select-cell": !0,
                      "dp-year-select-active-cell": u === a.modelValue,
                    }),
                    onClick: (f) => n(u),
                  },
                  $e(u),
                  11,
                  td
                )
              )
            ),
            128
          )),
        ])
      );
    },
  },
  nd = { name: "BaseDay" },
  od = Object.assign(nd, {
    props: {
      ...be,
      day: { type: Date, default: null },
      selected: { type: Boolean, default: !1 },
      today: { type: Boolean, default: !1 },
      isStart: { type: Boolean, default: !1 },
      isEnd: { type: Boolean, default: !1 },
    },
    emits: ["selectDate"],
    setup(t, { emit: e }) {
      const r = t,
        n = J(() => r.day.getDate()),
        o = () => {
          e("selectDate", r.day);
        },
        a = J(() => ({
          "dp-single-month-day": !0,
          "dp-single-month-day-selected": r.selected,
          "dp-day-highlight-today": r.today && !r.selected,
        })),
        i = J(() => ({
          "dp-multi-month-day": !0,
          "dp-multi-month-day-selected": r.selected,
          "dp-multi-month-day-start": r.isStart,
          "dp-multi-month-day-end": r.isEnd,
          "dp-day-highlight-today": r.today && !r.selected,
        }));
      return (u, f) => (
        P(),
        U(
          "button",
          { class: Ce([u.allowRange ? S(i) : S(a)]), onClick: o },
          $e(S(n)),
          3
        )
      );
    },
  }),
  ad = { class: "dp-weekday-wrapper" },
  id = { name: "BaseMonth" },
  ud = Object.assign(id, {
    props: { ...be },
    emits: ["selectDate"],
    setup(t, { emit: e }) {
      const r = t,
        n = (i) => {
          e("selectDate", i);
        },
        o = J(() => jy(r.month, r.year)),
        a = J(() => Wy(r.selectedDateRange));
      return (i, u) => (
        P(),
        U("div", null, [
          N("div", ad, [
            (P(!0),
            U(
              Fe,
              null,
              ze(
                S(Ay),
                (f) => (
                  P(),
                  U(
                    "div",
                    { key: f, class: "dp-weekday" },
                    $e(f.slice(0, 3)),
                    1
                  )
                )
              ),
              128
            )),
          ]),
          (P(!0),
          U(
            Fe,
            null,
            ze(
              S(o),
              (f) => (
                P(),
                U("div", { key: f, class: "dp-days-wrapper" }, [
                  (P(!0),
                  U(
                    Fe,
                    null,
                    ze(f, (c) => {
                      var l, y;
                      return (
                        P(),
                        U(
                          "div",
                          { key: c, class: "flex align-center justify-center" },
                          [
                            c
                              ? (P(),
                                fe(
                                  od,
                                  {
                                    key: 0,
                                    day: c,
                                    onSelectDate: n,
                                    "is-start": S(La)(
                                      (l = i.selectedDateRange) == null
                                        ? void 0
                                        : l.start,
                                      c
                                    ),
                                    "is-end": S(La)(
                                      (y = i.selectedDateRange) == null
                                        ? void 0
                                        : y.end,
                                      c
                                    ),
                                    selected: S(Ly)(S(a), c),
                                    today: S(Pp)(c),
                                    "allow-range": i.allowRange,
                                  },
                                  null,
                                  8,
                                  [
                                    "day",
                                    "is-start",
                                    "is-end",
                                    "selected",
                                    "today",
                                    "allow-range",
                                  ]
                                ))
                              : De("", !0),
                          ]
                        )
                      );
                    }),
                    128
                  )),
                ])
              )
            ),
            128
          )),
        ])
      );
    },
  }),
  fd = { class: "dp-month-wrapper" },
  Gn = {
    __name: "MonthWrapper",
    props: {
      ...be,
      showMonthPicker: { type: Boolean, default: !1 },
      showYearPicker: { type: Boolean, default: !1 },
    },
    emits: ["update:month", "update:year", "close-picker", "selectDate"],
    setup(t, { emit: e }) {
      const r = t,
        n = (i) => {
          e("selectDate", i);
        },
        o = J({
          get() {
            return r.month;
          },
          set(i) {
            e("update:month", i), e("close-picker");
          },
        }),
        a = J({
          get() {
            return r.year;
          },
          set(i) {
            e("update:year", i), e("close-picker");
          },
        });
      return (i, u) => (
        P(),
        U("div", fd, [
          !t.showMonthPicker && !t.showYearPicker
            ? (P(),
              fe(
                ud,
                {
                  key: 0,
                  month: S(o),
                  year: S(a),
                  onSelectDate: n,
                  "allow-range": i.allowRange,
                  selectedDateRange: i.selectedDateRange,
                },
                null,
                8,
                ["month", "year", "allow-range", "selectedDateRange"]
              ))
            : De("", !0),
          t.showMonthPicker
            ? (P(),
              fe(
                Zy,
                {
                  key: 1,
                  modelValue: S(o),
                  "onUpdate:modelValue":
                    u[0] || (u[0] = (f) => (Oe(o) ? (o.value = f) : null)),
                },
                null,
                8,
                ["modelValue"]
              ))
            : De("", !0),
          t.showYearPicker
            ? (P(),
              fe(
                rd,
                {
                  key: 2,
                  modelValue: S(a),
                  "onUpdate:modelValue":
                    u[1] || (u[1] = (f) => (Oe(a) ? (a.value = f) : null)),
                },
                null,
                8,
                ["modelValue"]
              ))
            : De("", !0),
        ])
      );
    },
  };
var Ha;
const ki = typeof window < "u",
  cd = (t) => typeof t == "string",
  ld = () => {};
ki &&
  (Ha = window == null ? void 0 : window.navigator) != null &&
  Ha.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function sd(t) {
  return typeof t == "function" ? t() : S(t);
}
function pd(t) {
  return t;
}
function yd(t) {
  return ji() ? (Wi(t), !0) : !1;
}
function Ve(t) {
  var e;
  const r = sd(t);
  return (e = r == null ? void 0 : r.$el) != null ? e : r;
}
const Di = ki ? window : void 0;
function it(...t) {
  let e, r, n, o;
  if (
    (cd(t[0]) || Array.isArray(t[0])
      ? (([r, n, o] = t), (e = Di))
      : ([e, r, n, o] = t),
    !e)
  )
    return ld;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const a = [],
    i = () => {
      a.forEach((l) => l()), (a.length = 0);
    },
    u = (l, y, p) => (
      l.addEventListener(y, p, o), () => l.removeEventListener(y, p, o)
    ),
    f = he(
      () => Ve(e),
      (l) => {
        i(), l && a.push(...r.flatMap((y) => n.map((p) => u(l, y, p))));
      },
      { immediate: !0, flush: "post" }
    ),
    c = () => {
      f(), i();
    };
  return yd(c), c;
}
function vo(t, e, r = {}) {
  const {
    window: n = Di,
    ignore: o = [],
    capture: a = !0,
    detectIframe: i = !1,
  } = r;
  if (!n) return;
  let u = !0,
    f;
  const c = (p) =>
      o.some((s) => {
        if (typeof s == "string")
          return Array.from(n.document.querySelectorAll(s)).some(
            (v) => v === p.target || p.composedPath().includes(v)
          );
        {
          const v = Ve(s);
          return v && (p.target === v || p.composedPath().includes(v));
        }
      }),
    l = (p) => {
      n.clearTimeout(f);
      const s = Ve(t);
      if (!(!s || s === p.target || p.composedPath().includes(s))) {
        if ((p.detail === 0 && (u = !c(p)), !u)) {
          u = !0;
          return;
        }
        e(p);
      }
    },
    y = [
      it(n, "click", l, { passive: !0, capture: a }),
      it(
        n,
        "pointerdown",
        (p) => {
          const s = Ve(t);
          s && (u = !p.composedPath().includes(s) && !c(p));
        },
        { passive: !0 }
      ),
      it(
        n,
        "pointerup",
        (p) => {
          if (p.button === 0) {
            const s = p.composedPath();
            (p.composedPath = () => s), (f = n.setTimeout(() => l(p), 50));
          }
        },
        { passive: !0 }
      ),
      i &&
        it(n, "blur", (p) => {
          var s;
          const v = Ve(t);
          ((s = n.document.activeElement) == null ? void 0 : s.tagName) ===
            "IFRAME" &&
            !(v != null && v.contains(n.document.activeElement)) &&
            e(p);
        }),
    ].filter(Boolean);
  return () => y.forEach((p) => p());
}
const Kn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Jn = "__vueuse_ssr_handlers__";
Kn[Jn] = Kn[Jn] || {};
Kn[Jn];
var qa;
(function (t) {
  (t.UP = "UP"),
    (t.RIGHT = "RIGHT"),
    (t.DOWN = "DOWN"),
    (t.LEFT = "LEFT"),
    (t.NONE = "NONE");
})(qa || (qa = {}));
var dd = Object.defineProperty,
  Va = Object.getOwnPropertySymbols,
  vd = Object.prototype.hasOwnProperty,
  hd = Object.prototype.propertyIsEnumerable,
  Fa = (t, e, r) =>
    e in t
      ? dd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r),
  md = (t, e) => {
    for (var r in e || (e = {})) vd.call(e, r) && Fa(t, r, e[r]);
    if (Va) for (var r of Va(e)) hd.call(e, r) && Fa(t, r, e[r]);
    return t;
  };
const bd = {
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
md({ linear: pd }, bd);
const za = {
    __name: "SingleView",
    props: { ...be },
    emits: ["update:modelValue"],
    setup(t, { emit: e }) {
      const r = t,
        n = q(!1),
        o = q(!1),
        a = q(r.month),
        i = q(r.year),
        u = q(null),
        f = (y) => {
          r.allowRange
            ? e("update:modelValue", Ri(y, r.modelValue))
            : e("update:modelValue", { start: y, end: y });
        };
      he(
        () => r.modelValue,
        (y) => {
          r.modelValue.start &&
            ((a.value = y.start.getMonth()), (i.value = y.start.getFullYear()));
        }
      );
      const c = (y) => {
          y === "month-select"
            ? ((n.value = !n.value), (o.value = !1))
            : ((o.value = !o.value), (n.value = !1));
        },
        l = () => {
          (n.value = !1), (o.value = !1);
        };
      return (
        vo(u, () => {
          l();
        }),
        (y, p) => (
          P(),
          U(
            "div",
            {
              class: "dp-background rounded",
              ref_key: "singleViewRef",
              ref: u,
            },
            [
              _e(
                Xn,
                {
                  month: a.value,
                  "onUpdate:month": p[0] || (p[0] = (s) => (a.value = s)),
                  year: i.value,
                  "onUpdate:year": p[1] || (p[1] = (s) => (i.value = s)),
                  onToggle: c,
                },
                null,
                8,
                ["month", "year"]
              ),
              _e(
                Gn,
                {
                  month: a.value,
                  "onUpdate:month": p[2] || (p[2] = (s) => (a.value = s)),
                  year: i.value,
                  "onUpdate:year": p[3] || (p[3] = (s) => (i.value = s)),
                  showMonthPicker: n.value,
                  showYearPicker: o.value,
                  onClosePicker: l,
                  onSelectDate: f,
                  selectedDateRange: y.modelValue,
                  "allow-range": y.allowRange,
                },
                null,
                8,
                [
                  "month",
                  "year",
                  "showMonthPicker",
                  "showYearPicker",
                  "selectedDateRange",
                  "allow-range",
                ]
              ),
            ],
            512
          )
        )
      );
    },
  },
  Qa = {
    __name: "MultiView",
    props: { ...be },
    emits: ["update:modelValue"],
    setup(t, { emit: e }) {
      const r = t,
        n = q({ month: !1, year: !1 }),
        o = q({ month: !1, year: !1 }),
        a = q({ month: r.month, year: r.year }),
        i = q(null),
        u = q(Qn(r.month, r.year)),
        f = (d) => {
          e("update:modelValue", Ri(d, r.modelValue));
        },
        c = () => {
          const { month: d, year: h } = a.value;
          d >= u.value.month &&
            h >= u.value.year &&
            (u.value = Qn(a.value.month, a.value.year));
        },
        l = () => {
          const { month: d, year: h } = u.value;
          d <= a.value.month &&
            h <= a.value.year &&
            (a.value = Si(u.value.month, u.value.year));
        },
        y = (d) => {
          d === "month-select"
            ? ((n.value.year = !1), (n.value.month = !n.value.month))
            : ((n.value.month = !1), (n.value.year = !n.value.year));
        },
        p = (d) => {
          d === "month-select"
            ? ((o.value.year = !1), (o.value.month = !o.value.month))
            : ((o.value.month = !1), (o.value.year = !o.value.year));
        },
        s = () => {
          (n.value = { month: !1, year: !1 }), c();
        },
        v = () => {
          (o.value = { month: !1, year: !1 }), l();
        };
      return (
        he(
          () => r.modelValue,
          (d) => {
            d.start &&
              (a.value = {
                month: d.start.getMonth(),
                year: d.start.getFullYear(),
              }),
              d.end &&
                (u.value = {
                  month: d.end.getMonth(),
                  year: d.end.getFullYear(),
                }),
              c(),
              l();
          }
        ),
        vo(i, () => {
          s(), v();
        }),
        (d, h) => (
          P(),
          U(
            "div",
            {
              class: "flex w-full flex-col lg:flex-row",
              ref_key: "multiViewRef",
              ref: i,
            },
            [
              N(
                "div",
                {
                  class: Ce({
                    "dp-background": !0,
                    "w-full": d.inline,
                    "w-[400px]": !d.inline,
                  }),
                },
                [
                  _e(
                    Xn,
                    {
                      month: a.value.month,
                      "onUpdate:month":
                        h[0] || (h[0] = (m) => (a.value.month = m)),
                      year: a.value.year,
                      "onUpdate:year":
                        h[1] || (h[1] = (m) => (a.value.year = m)),
                      onPrevMonth: c,
                      onNextMonth: c,
                      onToggle: y,
                    },
                    null,
                    8,
                    ["month", "year"]
                  ),
                  _e(
                    Gn,
                    {
                      month: a.value.month,
                      "onUpdate:month":
                        h[2] || (h[2] = (m) => (a.value.month = m)),
                      year: a.value.year,
                      "onUpdate:year":
                        h[3] || (h[3] = (m) => (a.value.year = m)),
                      "allow-range": "",
                      selectedDateRange: d.modelValue,
                      showMonthPicker: n.value.month,
                      showYearPicker: n.value.year,
                      onSelectDate: f,
                      onClosePicker: s,
                    },
                    null,
                    8,
                    [
                      "month",
                      "year",
                      "selectedDateRange",
                      "showMonthPicker",
                      "showYearPicker",
                    ]
                  ),
                ],
                2
              ),
              N(
                "div",
                {
                  class: Ce({
                    "dp-background": !0,
                    "w-full": d.inline,
                    "w-[400px]": !d.inline,
                  }),
                },
                [
                  _e(
                    Xn,
                    {
                      month: u.value.month,
                      "onUpdate:month":
                        h[4] || (h[4] = (m) => (u.value.month = m)),
                      year: u.value.year,
                      "onUpdate:year":
                        h[5] || (h[5] = (m) => (u.value.year = m)),
                      onNextMonth: l,
                      onPrevMonth: l,
                      onToggle: p,
                    },
                    null,
                    8,
                    ["month", "year"]
                  ),
                  _e(
                    Gn,
                    {
                      month: u.value.month,
                      "onUpdate:month":
                        h[6] || (h[6] = (m) => (u.value.month = m)),
                      year: u.value.year,
                      "onUpdate:year":
                        h[7] || (h[7] = (m) => (u.value.year = m)),
                      "allow-range": "",
                      selectedDateRange: d.modelValue,
                      showMonthPicker: o.value.month,
                      showYearPicker: o.value.year,
                      onSelectDate: f,
                      onClosePicker: v,
                    },
                    null,
                    8,
                    [
                      "month",
                      "year",
                      "selectedDateRange",
                      "showMonthPicker",
                      "showYearPicker",
                    ]
                  ),
                ],
                2
              ),
            ],
            512
          )
        )
      );
    },
  },
  gd = ["for"],
  wd = { class: "relative mb-6" },
  _d = {
    class:
      "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
  },
  Od = N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-6 h-6",
    },
    [
      N("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z",
      }),
    ],
    -1
  ),
  Pd = ["id", "placeholder"],
  $d = { name: "BaseInput" },
  Xa = Object.assign($d, {
    props: {
      label: { type: String, default: "" },
      placeholder: { type: String, default: "" },
      name: { type: String, default: "" },
      id: { type: String, default: "" },
      modelValue: { type: String, default: "" },
    },
    emits: ["update:modelValue", "focus", "blur"],
    setup(t, { emit: e }) {
      const r = t,
        n = J({
          get() {
            return r.modelValue;
          },
          set(i) {
            e("update:modelValue", i);
          },
        }),
        o = (i) => {
          e("focus", i);
        },
        a = (i) => {
          e("blur", i);
        };
      return (i, u) => (
        P(),
        U("div", null, [
          t.label
            ? (P(),
              U(
                "label",
                {
                  key: 0,
                  for: t.id,
                  class:
                    "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                },
                $e(t.label),
                9,
                gd
              ))
            : De("", !0),
          N("div", wd, [
            N("div", _d, [Xe(i.$slots, "default", {}, () => [Od])]),
            Ka(
              N(
                "input",
                {
                  type: "text",
                  id: t.id,
                  class:
                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  placeholder: t.placeholder,
                  "onUpdate:modelValue":
                    u[0] || (u[0] = (f) => (Oe(n) ? (n.value = f) : null)),
                  onFocus: o,
                  onBlur: a,
                },
                null,
                40,
                Pd
              ),
              [[Yi, S(n)]]
            ),
          ]),
        ])
      );
    },
  }),
  Td = { key: 0 },
  xd = { class: "w-full flex flex-col lg:flex-row" },
  Rd = {
    __name: "DatePicker",
    props: {
      ...be,
      startDateLabel: { type: String, default: "" },
      endDateLabel: { type: String, default: "" },
      startDatePlaceholder: { type: String, default: "" },
      endDatePlaceholder: { type: String, default: "" },
      formatDateInput: { type: String, default: "dd-MM-yyyy" },
    },
    emits: ["update:modelValue"],
    setup(t, { emit: e }) {
      const r = t,
        n = q(null),
        o = q(!1),
        a = q(at(r.modelValue.start, r.formatDateInput)),
        i = q(at(r.modelValue.end, r.formatDateInput));
      he([a, i], ([s, v]) => {
        u(Wa(s, r.formatDateInput), Wa(v, r.formatDateInput));
      });
      const u = (s, v) => {
          r.allowRange || r.multiMonth
            ? e("update:modelValue", { start: s, end: v })
            : e("update:modelValue", { start: s, end: s });
        },
        f = (s, v) => {
          (a.value = at(s, r.formatDateInput)),
            (i.value = at(v, r.formatDateInput));
        },
        c = J({
          get() {
            return r.modelValue;
          },
          set(s) {
            u(s.start, s.end), f(s.start, s.end);
          },
        }),
        l = () => {
          o.value = !o.value;
        },
        y = () => {
          o.value = !0;
        },
        p = () => {
          o.value = !1;
        };
      return (
        vo(n, () => {
          p();
        }),
        (s, v) =>
          s.inline
            ? (P(),
              U("div", Td, [
                s.multiMonth
                  ? (P(),
                    fe(
                      Qa,
                      {
                        key: 0,
                        month: s.month,
                        year: s.year,
                        modelValue: S(c),
                        "onUpdate:modelValue":
                          v[0] ||
                          (v[0] = (d) => (Oe(c) ? (c.value = d) : null)),
                      },
                      null,
                      8,
                      ["month", "year", "modelValue"]
                    ))
                  : (P(),
                    fe(
                      za,
                      {
                        key: 1,
                        month: s.month,
                        year: s.year,
                        modelValue: S(c),
                        "onUpdate:modelValue":
                          v[1] ||
                          (v[1] = (d) => (Oe(c) ? (c.value = d) : null)),
                        allowRange: s.allowRange,
                      },
                      null,
                      8,
                      ["month", "year", "modelValue", "allowRange"]
                    )),
              ]))
            : (P(),
              fe(
                S(Uy),
                { key: 1, ref_key: "popover", ref: n, show: o.value },
                {
                  content: Cr(() => [
                    N(
                      "div",
                      {
                        class: Ce({
                          "drop-shadow-lg": !0,
                          "w-[400px]": !s.multiMonth,
                        }),
                      },
                      [
                        s.multiMonth
                          ? (P(),
                            fe(
                              Qa,
                              {
                                key: 0,
                                month: s.month,
                                year: s.year,
                                modelValue: S(c),
                                "onUpdate:modelValue":
                                  v[4] ||
                                  (v[4] = (d) =>
                                    Oe(c) ? (c.value = d) : null),
                              },
                              null,
                              8,
                              ["month", "year", "modelValue"]
                            ))
                          : (P(),
                            fe(
                              za,
                              {
                                key: 1,
                                month: s.month,
                                year: s.year,
                                modelValue: S(c),
                                "onUpdate:modelValue":
                                  v[5] ||
                                  (v[5] = (d) =>
                                    Oe(c) ? (c.value = d) : null),
                                allowRange: s.allowRange,
                              },
                              null,
                              8,
                              ["month", "year", "modelValue", "allowRange"]
                            )),
                      ],
                      2
                    ),
                  ]),
                  default: Cr(() => [
                    Xe(s.$slots, "trigger-datepicker", { toggle: l }, () => [
                      Xe(
                        s.$slots,
                        "datepicker-input",
                        {
                          startDate: a.value,
                          endDate: i.value,
                          toggle: l,
                          showPopover: y,
                          hidePopover: p,
                        },
                        () => [
                          N("div", xd, [
                            _e(
                              Xa,
                              {
                                label: t.startDateLabel,
                                placeholder: t.startDatePlaceholder,
                                modelValue: a.value,
                                "onUpdate:modelValue":
                                  v[2] || (v[2] = (d) => (a.value = d)),
                                onFocus: y,
                              },
                              null,
                              8,
                              ["label", "placeholder", "modelValue"]
                            ),
                            s.allowRange || s.multiMonth
                              ? (P(),
                                fe(
                                  Xa,
                                  {
                                    key: 0,
                                    label: t.endDateLabel,
                                    placeholder: t.endDatePlaceholder,
                                    modelValue: i.value,
                                    "onUpdate:modelValue":
                                      v[3] || (v[3] = (d) => (i.value = d)),
                                    onFocus: y,
                                  },
                                  null,
                                  8,
                                  ["label", "placeholder", "modelValue"]
                                ))
                              : De("", !0),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                  _: 3,
                },
                8,
                ["show"]
              ))
      );
    },
  };
export { Rd as r };
