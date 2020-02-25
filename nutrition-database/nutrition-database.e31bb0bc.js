// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = E;
exports.hydrate = H;
exports.h = exports.createElement = v;
exports.Fragment = d;
exports.createRef = p;
exports.Component = y;
exports.cloneElement = I;
exports.createContext = L;
exports.toChildArray = b;
exports._unmount = A;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(n, l, u) {
  var i,
      t = arguments,
      o = {};

  for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
  if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);
  return h(n, o, l && l.key, l && l.ref);
}

function h(l, u, i, t) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(o), o;
}

function p() {
  return {};
}

function d(n) {
  return n.children;
}

function y(n, l) {
  this.props = n, this.context = l;
}

function m(n, l) {
  if (null == l) return n.__ ? m(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? m(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function g(l) {
  (!l.__d && (l.__d = !0) && 1 === u.push(l) || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(k);
}

function k() {
  var n, l, i, t, o, r, f;

  for (u.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = u.pop();) n.__d && (i = void 0, t = void 0, r = (o = (l = n).__v).__e, (f = l.__P) && (i = [], t = z(f, o, s({}, o), l.__n, void 0 !== f.ownerSVGElement, null, i, null == r ? m(o) : r), T(i, o), t != r && w(o)));
}

function _(n, l, u, i, t, o, r, c, s) {
  var v,
      h,
      p,
      d,
      y,
      w,
      g,
      k = u && u.__k || e,
      _ = k.length;
  if (c == f && (c = null != o ? o[0] : _ ? m(u, 0) : null), v = 0, l.__k = b(l.__k, function (u) {
    if (null != u) {
      if (u.__ = l, u.__b = l.__b + 1, null === (p = k[v]) || p && u.key == p.key && u.type === p.type) k[v] = void 0;else for (h = 0; h < _; h++) {
        if ((p = k[h]) && u.key == p.key && u.type === p.type) {
          k[h] = void 0;
          break;
        }

        p = null;
      }

      if (d = z(n, u, p = p || f, i, t, o, r, c, s), (h = u.ref) && p.ref != h && (g || (g = []), p.ref && g.push(p.ref, null, u), g.push(h, u.__c || d, u)), null != d) {
        var e;
        if (null == w && (w = d), void 0 !== u.__d) e = u.__d, u.__d = void 0;else if (o == p || d != c || null == d.parentNode) {
          n: if (null == c || c.parentNode !== n) n.appendChild(d), e = null;else {
            for (y = c, h = 0; (y = y.nextSibling) && h < _; h += 2) if (y == d) break n;

            n.insertBefore(d, c), e = c;
          }

          "option" == l.type && (n.value = "");
        }
        c = void 0 !== e ? e : d.nextSibling, "function" == typeof l.type && (l.__d = c);
      }
    }

    return v++, u;
  }), l.__e = w, null != o && "function" != typeof l.type) for (v = o.length; v--;) null != o[v] && a(o[v]);

  for (v = _; v--;) null != k[v] && A(k[v], k[v]);

  if (g) for (v = 0; v < g.length; v++) j(g[v], g[++v], g[++v]);
}

function b(n, l, u) {
  if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) b(n[i], l, u);else u.push(l ? l("string" == typeof n || "number" == typeof n ? h(null, n, null, null) : null != n.__e || null != n.__c ? h(n.type, n.props, n.key, null) : n) : n);
  return u;
}

function x(n, l, u, i, t) {
  var o;

  for (o in u) o in l || C(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
}

function C(n, l, u, i, t) {
  var o, r, f, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "key" === l || "children" === l) ;else if ("style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof i && (o.cssText = "", i = null), i) for (r in i) u && r in u || P(o, r, "");
      if (u) for (f in u) i && u[f] === i[f] || P(o, f, u[f]);
    }
  } else "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (i || n.addEventListener(l, N, e), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, e)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function z(l, u, i, t, o, r, f, e, c) {
  var a,
      v,
      h,
      p,
      m,
      w,
      g,
      k,
      b,
      x,
      P = u.type;
  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (k = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? g = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(k, x) : (u.__c = v = new y(k, x), v.constructor = P, v.render = D), b && b.sub(v), v.props = k, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(k, v.__s))), p = v.props, m = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && k !== p && null != v.componentWillReceiveProps && v.componentWillReceiveProps(k, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(k, v.__s, x)) {
          for (v.props = k, v.state = v.__s, v.__d = !1, v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__ = u);

          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(k, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(p, m, w);
        });
      }
      v.context = x, v.props = k, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), u.__k = null != a && a.type == d && null == a.key ? a.props.children : a, null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(p, m)), _(l, u, i, t, o, r, f, e, c), v.base = u.__e, v.__h.length && f.push(v), g && (v.__E = v.__ = null), v.__e = !1;
    } else u.__e = $(i.__e, u, i, t, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    n.__e(l, u, i);
  }

  return u.__e;
}

function T(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function $(n, l, u, i, t, o, r, c) {
  var s,
      a,
      v,
      h,
      p,
      d = u.props,
      y = l.props;
  if (t = "svg" === l.type || t, null == n && null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(y);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, y.is && {
      is: y.is
    }), o = null;
  }

  if (null === l.type) null != o && (o[o.indexOf(n)] = null), d !== y && n.data != y && (n.data = y);else if (l !== u) {
    if (null != o && (o[o.indexOf(n)] = null, o = e.slice.call(n.childNodes)), v = (d = u.props || f).dangerouslySetInnerHTML, h = y.dangerouslySetInnerHTML, !c) {
      if (d === f) for (d = {}, p = 0; p < n.attributes.length; p++) d[n.attributes[p].name] = n.attributes[p].value;
      (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
    }

    x(n, y, d, t, c), l.__k = l.props.children, h || _(n, l, u, i, "foreignObject" !== l.type && t, o, r, f, c), c || ("value" in y && void 0 !== y.value && y.value !== n.value && (n.value = null == y.value ? "" : y.value), "checked" in y && void 0 !== y.checked && y.checked !== n.checked && (n.checked = y.checked));
  }
  return n;
}

function j(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function A(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || j(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && A(t[r], u, i);
  null != o && a(o);
}

function D(n, l, u) {
  return this.constructor(n, u);
}

function E(l, u, i) {
  var t, r, c;
  n.__ && n.__(l, u), r = (t = i === o) ? null : i && i.__k || u.__k, l = v(d, null, [l]), c = [], z(u, (t ? u : i || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : r ? null : e.slice.call(u.childNodes), c, i || f, t), T(c, l);
}

function H(n, l) {
  E(n, l, o);
}

function I(n, l) {
  return l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), h(n.type, l, l.key || n.key, l.ref || n.ref);
}

function L(n) {
  var l = {},
      u = {
    __c: "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var i,
          t = this;
      return this.getChildContext || (i = [], this.getChildContext = function () {
        return l[u.__c] = t, l;
      }, this.shouldComponentUpdate = function (l) {
        n.value !== l.value && i.some(function (n) {
          n.context = l.value, g(n);
        });
      }, this.sub = function (n) {
        i.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          i.splice(i.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return g(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, y.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), g(this));
}, y.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), g(this));
}, y.prototype.render = d, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = f, r = 0;
},{}],"data/bobbyburger.json":[function(require,module,exports) {
module.exports = [{
  "name": "Alibaba",
  "weight": [],
  "calories": 915.3,
  "macros": {
    "protein": 35.9,
    "fat": 61.8,
    "carbs": 55.4
  }
}, {
  "name": "Bobby Burger",
  "weight": [],
  "calories": 1035.9,
  "macros": {
    "protein": 57.4,
    "fat": 59.75,
    "carbs": 70.3
  }
}, {
  "name": "Bobby’s Salad",
  "weight": [],
  "calories": 368.8,
  "macros": {
    "protein": 32.5,
    "fat": 19.3,
    "carbs": 18.9
  }
}, {
  "name": "Brajan",
  "weight": [],
  "calories": 677.6,
  "macros": {
    "protein": 19.9,
    "fat": 23,
    "carbs": 87.3
  }
}, {
  "name": "Cheese",
  "weight": [],
  "calories": 618.7,
  "macros": {
    "protein": 34,
    "fat": 33.1,
    "carbs": 45.6
  }
}, {
  "name": "Cheese Bacon",
  "weight": [],
  "calories": 723.6,
  "macros": {
    "protein": 35.9,
    "fat": 40.8,
    "carbs": 52.8
  }
}, {
  "name": "Chicken",
  "weight": [],
  "calories": 456.6,
  "macros": {
    "protein": 27.9,
    "fat": 15.8,
    "carbs": 50
  }
}, {
  "name": "Classic",
  "weight": [],
  "calories": 543.2,
  "macros": {
    "protein": 27.6,
    "fat": 28.1,
    "carbs": 44.4
  }
}, {
  "name": "Double Death by Cheese",
  "weight": [],
  "calories": 1141.2,
  "macros": {
    "protein": 67.6,
    "fat": 69.4,
    "carbs": 62.6
  }
}, {
  "name": "Double Trouble with Bacon",
  "weight": [],
  "calories": 1140,
  "macros": {
    "protein": 59,
    "fat": 70.5,
    "carbs": 69.7
  }
}, {
  "name": "Fries Box",
  "weight": [],
  "calories": 738.2,
  "macros": {
    "protein": 11.9,
    "fat": 37.3,
    "carbs": 107.2
  }
}, {
  "name": "Frytki",
  "weight": [],
  "calories": 247.6,
  "macros": {
    "protein": 3.6,
    "fat": 11.6,
    "carbs": 37.8
  }
}, {
  "name": "Frytki Skin On",
  "weight": [],
  "calories": 154.6,
  "macros": {
    "protein": 3.2,
    "fat": 8.8,
    "carbs": 21.4
  }
}, {
  "name": "Godzilla",
  "weight": [],
  "calories": 1485.8,
  "macros": {
    "protein": 89.9,
    "fat": 100.2,
    "carbs": 56.8
  }
}, {
  "name": "Grażyna",
  "weight": [],
  "calories": 612.7,
  "macros": {
    "protein": 16.1,
    "fat": 25.9,
    "carbs": 86.2
  }
}, {
  "name": "Hot Bacon",
  "weight": [],
  "calories": 708.9,
  "macros": {
    "protein": 36.2,
    "fat": 40.9,
    "carbs": 49.2
  }
}, {
  "name": "Janush",
  "weight": [],
  "calories": 680.9,
  "macros": {
    "protein": 14.5,
    "fat": 35.6,
    "carbs": 78.3
  }
}, {
  "name": "Keto Burger",
  "weight": [],
  "calories": 526.9,
  "macros": {
    "protein": 44.7,
    "fat": 35,
    "carbs": 9.4
  }
}, {
  "name": "Mango & Onion",
  "weight": [],
  "calories": 953.4,
  "macros": {
    "protein": 37.6,
    "fat": 53.3,
    "carbs": 76.4
  }
}, {
  "name": "Mozzarella Sticks",
  "weight": [],
  "calories": 407.5,
  "macros": {
    "protein": 18.8,
    "fat": 23.8,
    "carbs": 27.5
  }
}, {
  "name": "Narchos",
  "weight": [],
  "calories": 811.6,
  "macros": {
    "protein": 34.3,
    "fat": 43.2,
    "carbs": 65
  }
}, {
  "name": "Onion Attacks",
  "weight": [],
  "calories": 1043.5,
  "macros": {
    "protein": 39.1,
    "fat": 66.6,
    "carbs": 73
  }
}, {
  "name": "Onion Rings",
  "weight": [],
  "calories": 382.2,
  "macros": {
    "protein": 6.2,
    "fat": 16.4,
    "carbs": 49.9
  }
}, {
  "name": "Power Plant",
  "weight": [],
  "calories": 551.8,
  "macros": {
    "protein": 28.9,
    "fat": 24.3,
    "carbs": 52.7
  }
}, {
  "name": "Simple Green Salad",
  "weight": [],
  "calories": 55.5,
  "macros": {
    "protein": 1.9,
    "fat": 2.8,
    "carbs": 6.9
  }
}, {
  "name": "Taekwondo",
  "weight": [],
  "calories": 420.3,
  "macros": {
    "protein": 30.4,
    "fat": 5.7,
    "carbs": 63
  }
}, {
  "name": "Vedżesika",
  "weight": [],
  "calories": 751.1,
  "macros": {
    "protein": 31.1,
    "fat": 30.3,
    "carbs": 86.8
  }
}];
},{}],"data/dagrasso.json":[function(require,module,exports) {
module.exports = [{
  "name": "Ananas",
  "weight": [],
  "calories": 60,
  "macros": {
    "protein": 0,
    "fat": 0,
    "carbs": 16
  }
}, {
  "name": "Arabiata",
  "weight": [387],
  "calories": 149.74,
  "macros": {
    "protein": 4.15,
    "fat": 5.41,
    "carbs": 20.98
  }
}, {
  "name": "Bananowo-czekoladowe naleśniki  z chmurką bitej śmietany",
  "weight": [270],
  "calories": 257.7,
  "macros": {
    "protein": 2.95,
    "fat": 16.25,
    "carbs": 26.49
  }
}, {
  "name": "Barbecue",
  "weight": [430, 795, 1150],
  "calories": 224.33,
  "macros": {
    "protein": 10.49,
    "fat": 8.84,
    "carbs": 25.75
  }
}, {
  "name": "Basilico",
  "weight": [374, 619, 968],
  "calories": 185.12,
  "macros": {
    "protein": 5.14,
    "fat": 4.29,
    "carbs": 31.81
  }
}, {
  "name": "Bazylia świeża",
  "weight": [],
  "calories": 23,
  "macros": {
    "protein": 3.2,
    "fat": 0.64,
    "carbs": 2.7
  }
}, {
  "name": "Bianco Nero",
  "weight": [90],
  "calories": 369,
  "macros": {
    "protein": 4.1,
    "fat": 10,
    "carbs": 43.5
  }
}, {
  "name": "Bitter Lemon Tonic",
  "weight": [320],
  "calories": 41.63,
  "macros": {
    "protein": 0.09,
    "fat": 0.03,
    "carbs": 9.92
  }
}, {
  "name": "Boczek wędzony",
  "weight": [],
  "calories": 334,
  "macros": {
    "protein": 12,
    "fat": 31,
    "carbs": 0.7
  }
}, {
  "name": "Bolognese z mięsem wieprzowym",
  "weight": [425],
  "calories": 149.82,
  "macros": {
    "protein": 5.96,
    "fat": 4.31,
    "carbs": 21.35
  }
}, {
  "name": "Brokuły",
  "weight": [],
  "calories": 26.23,
  "macros": {
    "protein": 2.95,
    "fat": 0.33,
    "carbs": 5.25
  }
}, {
  "name": "Bruschetta z pieczarkami",
  "weight": [142],
  "calories": 153.9,
  "macros": {
    "protein": 8.18,
    "fat": 5.02,
    "carbs": 19.86
  }
}, {
  "name": "Bruschetta z pomidorami",
  "weight": [140],
  "calories": 144.61,
  "macros": {
    "protein": 3.77,
    "fat": 2.08,
    "carbs": 28.4
  }
}, {
  "name": "Camareo",
  "weight": [400, 689, 1050],
  "calories": 200.84,
  "macros": {
    "protein": 10.66,
    "fat": 7.21,
    "carbs": 23.63
  }
}, {
  "name": "Campione",
  "weight": [420, 755, 1100],
  "calories": 257.79,
  "macros": {
    "protein": 11.54,
    "fat": 13.25,
    "carbs": 23.77
  }
}, {
  "name": "Capriciosa",
  "weight": [430, 785, 1140],
  "calories": 182.86,
  "macros": {
    "protein": 8.59,
    "fat": 6.42,
    "carbs": 23.58
  }
}, {
  "name": "Carbonara",
  "weight": [446],
  "calories": 230.74,
  "macros": {
    "protein": 6.35,
    "fat": 16.23,
    "carbs": 17.49
  }
}, {
  "name": "Cebula biała",
  "weight": [],
  "calories": 30.68,
  "macros": {
    "protein": 1.36,
    "fat": 0.45,
    "carbs": 6.93
  }
}, {
  "name": "Cebula czerwona",
  "weight": [],
  "calories": 30.68,
  "macros": {
    "protein": 1.36,
    "fat": 0.45,
    "carbs": 6.93
  }
}, {
  "name": "Cheese Bacon Burger",
  "weight": [428],
  "calories": 192.48,
  "macros": {
    "protein": 10.71,
    "fat": 10.57,
    "carbs": 13.61
  }
}, {
  "name": "Cheese Bacon Double Burger",
  "weight": [604],
  "calories": 198.33,
  "macros": {
    "protein": 12.79,
    "fat": 12.22,
    "carbs": 9.44
  }
}, {
  "name": "Chicken Burger",
  "weight": [446],
  "calories": 151.44,
  "macros": {
    "protein": 15.21,
    "fat": 4.47,
    "carbs": 12.8
  }
}, {
  "name": "Cioccolato",
  "weight": [100],
  "calories": 215,
  "macros": {
    "protein": 3.7,
    "fat": 7.5,
    "carbs": 31.9
  }
}, {
  "name": "Classic Burger",
  "weight": [396],
  "calories": 179.22,
  "macros": {
    "protein": 9.93,
    "fat": 8.71,
    "carbs": 15.29
  }
}, {
  "name": "Corso",
  "weight": [360, 665, 1020],
  "calories": 240.28,
  "macros": {
    "protein": 11.68,
    "fat": 9.6,
    "carbs": 26.2
  }
}, {
  "name": "Crema Fungo",
  "weight": [432],
  "calories": 201.34,
  "macros": {
    "protein": 6.91,
    "fat": 11.29,
    "carbs": 18.27
  }
}, {
  "name": "Cukinia",
  "weight": [],
  "calories": 14.94,
  "macros": {
    "protein": 1.15,
    "fat": 0.11,
    "carbs": 3.22
  }
}, {
  "name": "Czekoladowy napój na gorąco",
  "weight": [200],
  "calories": 147,
  "macros": {
    "protein": 2.61,
    "fat": 6.44,
    "carbs": 19.74
  }
}, {
  "name": "Czosnek",
  "weight": [],
  "calories": 514.99,
  "macros": {
    "protein": 3.22,
    "fat": 50.23,
    "carbs": 16.32
  }
}, {
  "name": "Cztery Sery",
  "weight": [400, 695, 1070],
  "calories": 241.83,
  "macros": {
    "protein": 11.13,
    "fat": 10.35,
    "carbs": 26.11
  }
}, {
  "name": "Da Grasso",
  "weight": [390, 709, 1040],
  "calories": 247.57,
  "macros": {
    "protein": 9.76,
    "fat": 12.04,
    "carbs": 25.89
  }
}, {
  "name": "Decoro",
  "weight": [490, 920, 1310],
  "calories": 173.42,
  "macros": {
    "protein": 7.71,
    "fat": 6.66,
    "carbs": 21.43
  }
}, {
  "name": "Espresso Tonic",
  "weight": [320],
  "calories": 31.71,
  "macros": {
    "protein": 0.04,
    "fat": 0.04,
    "carbs": 7.41
  }
}, {
  "name": "Fasola czerwona",
  "weight": [],
  "calories": 94,
  "macros": {
    "protein": 7.2,
    "fat": 0.8,
    "carbs": 11.4
  }
}, {
  "name": "Formaggio",
  "weight": [495],
  "calories": 176.81,
  "macros": {
    "protein": 7.75,
    "fat": 7,
    "carbs": 20.88
  }
}, {
  "name": "Formicetta",
  "weight": [370, 665, 980],
  "calories": 248.67,
  "macros": {
    "protein": 9.51,
    "fat": 11.18,
    "carbs": 27.52
  }
}, {
  "name": "Frytki",
  "weight": [210],
  "calories": 152,
  "macros": {
    "protein": 2.5,
    "fat": 6,
    "carbs": 20.5
  }
}, {
  "name": "Frytki skin on (ze skórką)",
  "weight": [210],
  "calories": 136,
  "macros": {
    "protein": 2.5,
    "fat": 4,
    "carbs": 21
  }
}, {
  "name": "Frytki skin on z ketchupem",
  "weight": [260],
  "calories": 130.04,
  "macros": {
    "protein": 2.37,
    "fat": 3.42,
    "carbs": 21.23
  }
}, {
  "name": "Frytki z ketchupem",
  "weight": [260],
  "calories": 142.96,
  "macros": {
    "protein": 2.37,
    "fat": 5.04,
    "carbs": 20.83
  }
}, {
  "name": "Gambero Bianco",
  "weight": [483],
  "calories": 203.32,
  "macros": {
    "protein": 6.4,
    "fat": 11.83,
    "carbs": 18.13
  }
}, {
  "name": "Green Day",
  "weight": [445, 900, 1320],
  "calories": 177.06,
  "macros": {
    "protein": 7.87,
    "fat": 7.49,
    "carbs": 20.19
  }
}, {
  "name": "Havai",
  "weight": [395, 715, 1050],
  "calories": 202.11,
  "macros": {
    "protein": 8.57,
    "fat": 6.79,
    "carbs": 27.3
  }
}, {
  "name": "Havai Junior",
  "weight": [395],
  "calories": 202.11,
  "macros": {
    "protein": 8.57,
    "fat": 6.79,
    "carbs": 27.3
  }
}, {
  "name": "Herbata Lemon Orange",
  "weight": [300],
  "calories": 17,
  "macros": {
    "protein": 0.19,
    "fat": 0.05,
    "carbs": 3.93
  }
}, {
  "name": "Herbata Wild Strawberry",
  "weight": [300],
  "calories": 27,
  "macros": {
    "protein": 0.18,
    "fat": 0.06,
    "carbs": 6.45
  }
}, {
  "name": "Inverno",
  "weight": [390, 705, 1030],
  "calories": 237.17,
  "macros": {
    "protein": 9.26,
    "fat": 11.32,
    "carbs": 25.08
  }
}, {
  "name": "Kabanosy",
  "weight": [],
  "calories": 399,
  "macros": {
    "protein": 20,
    "fat": 35,
    "carbs": 1
  }
}, {
  "name": "Kapary",
  "weight": [],
  "calories": 42,
  "macros": {
    "protein": 3,
    "fat": 0.7,
    "carbs": 6
  }
}, {
  "name": "Karkówka z masłem czosnkowym",
  "weight": [585],
  "calories": 205.14,
  "macros": {
    "protein": 8.21,
    "fat": 14.12,
    "carbs": 10.95
  }
}, {
  "name": "Kawa Czekoladowo - pomarańczowa",
  "weight": [300],
  "calories": 104.18,
  "macros": {
    "protein": 2.76,
    "fat": 3.74,
    "carbs": 14.66
  }
}, {
  "name": "Kawa Słony Karmel",
  "weight": [300],
  "calories": 99,
  "macros": {
    "protein": 2.46,
    "fat": 4.15,
    "carbs": 13.03
  }
}, {
  "name": "Kawa mrożona",
  "weight": [300],
  "calories": 28,
  "macros": {
    "protein": 1.49,
    "fat": 1.49,
    "carbs": 2.15
  }
}, {
  "name": "Kawa mrożona Chocolate Cookie Latte",
  "weight": [300],
  "calories": 64.71,
  "macros": {
    "protein": 1.48,
    "fat": 2.46,
    "carbs": 9.06
  }
}, {
  "name": "Kawa mrożona Mojito Latte",
  "weight": [300],
  "calories": 61.13,
  "macros": {
    "protein": 1.47,
    "fat": 2.42,
    "carbs": 8.36
  }
}, {
  "name": "Kebab",
  "weight": [390, 735, 1080],
  "calories": 207.92,
  "macros": {
    "protein": 10.56,
    "fat": 7.1,
    "carbs": 25.96
  }
}, {
  "name": "Kebab drobiowy",
  "weight": [],
  "calories": 118,
  "macros": {
    "protein": 23,
    "fat": 2.4,
    "carbs": 0.7
  }
}, {
  "name": "Kebab drobiowy",
  "weight": [555],
  "calories": 113.9,
  "macros": {
    "protein": 8.31,
    "fat": 4.07,
    "carbs": 10.46
  }
}, {
  "name": "Kebab w picie z sosem czosnkowym",
  "weight": [404],
  "calories": 145.79,
  "macros": {
    "protein": 11.92,
    "fat": 5.28,
    "carbs": 13.08
  }
}, {
  "name": "Kebab w picie z sosem ostrym",
  "weight": [404],
  "calories": 151.52,
  "macros": {
    "protein": 11.79,
    "fat": 5.98,
    "carbs": 12.96
  }
}, {
  "name": "Kiełbasa",
  "weight": [],
  "calories": 299,
  "macros": {
    "protein": 11,
    "fat": 27,
    "carbs": 3
  }
}, {
  "name": "Krem pomidorowy",
  "weight": [366],
  "calories": 99.12,
  "macros": {
    "protein": 1.87,
    "fat": 4.47,
    "carbs": 12.41
  }
}, {
  "name": "Krewetki",
  "weight": [],
  "calories": 59,
  "macros": {
    "protein": 13,
    "fat": 0.8,
    "carbs": 0
  }
}, {
  "name": "Krewetki tygrysie",
  "weight": [180],
  "calories": 279.32,
  "macros": {
    "protein": 17.82,
    "fat": 20.28,
    "carbs": 8.52
  }
}, {
  "name": "Krucha szarlotka wegańska",
  "weight": [185],
  "calories": 167,
  "macros": {
    "protein": 1.5,
    "fat": 5,
    "carbs": 28.1
  }
}, {
  "name": "Kukurydza",
  "weight": [],
  "calories": 120,
  "macros": {
    "protein": 3.1,
    "fat": 1.6,
    "carbs": 21.8
  }
}, {
  "name": "Lasagne Bolognese",
  "weight": [422],
  "calories": 151.47,
  "macros": {
    "protein": 8.26,
    "fat": 6.04,
    "carbs": 15.8
  }
}, {
  "name": "Lasagne Spinachi",
  "weight": [421],
  "calories": 151.07,
  "macros": {
    "protein": 7.56,
    "fat": 6.96,
    "carbs": 14.12
  }
}, {
  "name": "Mafioso",
  "weight": [354, 629, 945],
  "calories": 240.54,
  "macros": {
    "protein": 9.8,
    "fat": 10.33,
    "carbs": 28.03
  }
}, {
  "name": "Majonez",
  "weight": [],
  "calories": 230,
  "macros": {
    "protein": 0.5,
    "fat": 21.6,
    "carbs": 8.5
  }
}, {
  "name": "Margherita",
  "weight": [310, 565, 860],
  "calories": 242.4,
  "macros": {
    "protein": 10.15,
    "fat": 8.56,
    "carbs": 31.67
  }
}, {
  "name": "Margherita Junior",
  "weight": [310],
  "calories": 242.4,
  "macros": {
    "protein": 10.15,
    "fat": 8.56,
    "carbs": 31.67
  }
}, {
  "name": "Marinara",
  "weight": [304, 534, 848],
  "calories": 202.77,
  "macros": {
    "protein": 4.51,
    "fat": 4.4,
    "carbs": 36.24
  }
}, {
  "name": "Mieszanka frutti di mare",
  "weight": [],
  "calories": 88,
  "macros": {
    "protein": 16,
    "fat": 1.1,
    "carbs": 3.8
  }
}, {
  "name": "Mozzarella",
  "weight": [327],
  "calories": 210.06,
  "macros": {
    "protein": 6.2,
    "fat": 5.28,
    "carbs": 35.1
  }
}, {
  "name": "Naleśnik z kebabem",
  "weight": [280],
  "calories": 161.52,
  "macros": {
    "protein": 8.63,
    "fat": 9.88,
    "carbs": 10.25
  }
}, {
  "name": "Naleśnik z serem sałatkowym i oliwkami",
  "weight": [260],
  "calories": 136.66,
  "macros": {
    "protein": 4.79,
    "fat": 8.08,
    "carbs": 12.08
  }
}, {
  "name": "Naleśniki z kurczakiem i suszonymi pomidorami",
  "weight": [285],
  "calories": 173.3,
  "macros": {
    "protein": 8.62,
    "fat": 10.37,
    "carbs": 11.95
  }
}, {
  "name": "Napoletana",
  "weight": [370, 680, 1000],
  "calories": 231.63,
  "macros": {
    "protein": 9.52,
    "fat": 9.9,
    "carbs": 26.83
  }
}, {
  "name": "Ogórki konserwowe",
  "weight": [],
  "calories": 50,
  "macros": {
    "protein": 0.6,
    "fat": 0.3,
    "carbs": 10.2
  }
}, {
  "name": "Oliwki czarne",
  "weight": [],
  "calories": 132,
  "macros": {
    "protein": 1.1,
    "fat": 14.5,
    "carbs": 4.9
  }
}, {
  "name": "Oliwki zielone",
  "weight": [],
  "calories": 148,
  "macros": {
    "protein": 0.9,
    "fat": 15,
    "carbs": 0
  }
}, {
  "name": "Pancetta",
  "weight": [470, 835, 1220],
  "calories": 210.72,
  "macros": {
    "protein": 8.78,
    "fat": 9.44,
    "carbs": 22.83
  }
}, {
  "name": "Papryczki jalapenos",
  "weight": [],
  "calories": 30,
  "macros": {
    "protein": 1,
    "fat": 0,
    "carbs": 6
  }
}, {
  "name": "Papryka konserwowa",
  "weight": [],
  "calories": 24,
  "macros": {
    "protein": 1,
    "fat": 0,
    "carbs": 4
  }
}, {
  "name": "Papryka świeża",
  "weight": [],
  "calories": 28.24,
  "macros": {
    "protein": 1.29,
    "fat": 0.47,
    "carbs": 6.59
  }
}, {
  "name": "Parma",
  "weight": [314, 509, 848],
  "calories": 223.99,
  "macros": {
    "protein": 7.87,
    "fat": 5.63,
    "carbs": 35.55
  }
}, {
  "name": "Pepe Bianco",
  "weight": [438, 820, 1210],
  "calories": 224.19,
  "macros": {
    "protein": 10.47,
    "fat": 10.34,
    "carbs": 22.21
  }
}, {
  "name": "Pepe Roso",
  "weight": [380, 715, 1050],
  "calories": 216.69,
  "macros": {
    "protein": 9.31,
    "fat": 8.46,
    "carbs": 26.49
  }
}, {
  "name": "Pepperoni",
  "weight": [330, 625, 940],
  "calories": 263.84,
  "macros": {
    "protein": 10.7,
    "fat": 12.15,
    "carbs": 28.33
  }
}, {
  "name": "Piacere",
  "weight": [450, 835, 1190],
  "calories": 223.4,
  "macros": {
    "protein": 9.21,
    "fat": 10.08,
    "carbs": 24.54
  }
}, {
  "name": "Pieczarki",
  "weight": [],
  "calories": 16.85,
  "macros": {
    "protein": 2.7,
    "fat": 0.45,
    "carbs": 2.58
  }
}, {
  "name": "Pieczona pierś z kurczaka",
  "weight": [],
  "calories": 101,
  "macros": {
    "protein": 19.3,
    "fat": 1.7,
    "carbs": 2.2
  }
}, {
  "name": "Pieczone pieczarki faszerowane boczkiem i serem",
  "weight": [342],
  "calories": 130.38,
  "macros": {
    "protein": 7.56,
    "fat": 7.66,
    "carbs": 8.63
  }
}, {
  "name": "Pieczywo typu bastoncino z cebulą",
  "weight": [50],
  "calories": 247,
  "macros": {
    "protein": 7.1,
    "fat": 2.4,
    "carbs": 48
  }
}, {
  "name": "Pieczywo typu bastoncino z oliwkami",
  "weight": [50],
  "calories": 278,
  "macros": {
    "protein": 7.2,
    "fat": 8.1,
    "carbs": 42.2
  }
}, {
  "name": "Pierś z kurczaka soute",
  "weight": [570],
  "calories": 128.47,
  "macros": {
    "protein": 11.1,
    "fat": 4.87,
    "carbs": 9.64
  }
}, {
  "name": "Pierś z kurczaka z serem i suszonymi pomidorami",
  "weight": [640],
  "calories": 149.09,
  "macros": {
    "protein": 11.46,
    "fat": 7.34,
    "carbs": 8.92
  }
}, {
  "name": "Pollo",
  "weight": [410, 745, 1100],
  "calories": 212.41,
  "macros": {
    "protein": 10.88,
    "fat": 8.12,
    "carbs": 24.81
  }
}, {
  "name": "Pollo Con Broccoli",
  "weight": [455, 825, 1220],
  "calories": 200.84,
  "macros": {
    "protein": 10.66,
    "fat": 7.21,
    "carbs": 23.63
  }
}, {
  "name": "Pollo Pesto",
  "weight": [253],
  "calories": 383.68,
  "macros": {
    "protein": 9.86,
    "fat": 25.45,
    "carbs": 29.22
  }
}, {
  "name": "Polska",
  "weight": [470, 845, 1260],
  "calories": 213.86,
  "macros": {
    "protein": 9.48,
    "fat": 9.8,
    "carbs": 22.45
  }
}, {
  "name": "Polędwiczka grillowana",
  "weight": [570],
  "calories": 129.21,
  "macros": {
    "protein": 9.06,
    "fat": 5.76,
    "carbs": 9.92
  }
}, {
  "name": "Polędwiczka z pastą kurkową",
  "weight": [761],
  "calories": 216.03,
  "macros": {
    "protein": 10.85,
    "fat": 13.47,
    "carbs": 12.53
  }
}, {
  "name": "Polędwiczka z zielonym pieprzem",
  "weight": [686],
  "calories": 189.35,
  "macros": {
    "protein": 10.67,
    "fat": 10.58,
    "carbs": 12.3
  }
}, {
  "name": "Polędwiczki z kurczaka w łagodnej panierce",
  "weight": [560],
  "calories": 129.34,
  "macros": {
    "protein": 7.75,
    "fat": 4.85,
    "carbs": 13.17
  }
}, {
  "name": "Pomidory koktajlowe",
  "weight": [],
  "calories": 18,
  "macros": {
    "protein": 0.88,
    "fat": 0.2,
    "carbs": 3.65
  }
}, {
  "name": "Pomidory suszone",
  "weight": [],
  "calories": 355.93,
  "macros": {
    "protein": 2.18,
    "fat": 35.21,
    "carbs": 7.58
  }
}, {
  "name": "Prosciutto",
  "weight": [431],
  "calories": 180.97,
  "macros": {
    "protein": 7.3,
    "fat": 4.93,
    "carbs": 27.58
  }
}, {
  "name": "Quattro Stagioni",
  "weight": [380, 680, 1070],
  "calories": 203.72,
  "macros": {
    "protein": 8.6,
    "fat": 7.3,
    "carbs": 26.31
  }
}, {
  "name": "Quesadilla Funghi",
  "weight": [470],
  "calories": 234.65,
  "macros": {
    "protein": 13.9,
    "fat": 9.52,
    "carbs": 22.9
  }
}, {
  "name": "Ravioli ricotta szpinak",
  "weight": [284],
  "calories": 230.41,
  "macros": {
    "protein": 7.54,
    "fat": 12.56,
    "carbs": 15.19
  }
}, {
  "name": "Ravioli z mięsem wieprzowym",
  "weight": [272],
  "calories": 150.8,
  "macros": {
    "protein": 7.63,
    "fat": 4.95,
    "carbs": 18.62
  }
}, {
  "name": "Roma",
  "weight": [410, 755, 1100],
  "calories": 230.03,
  "macros": {
    "protein": 10.09,
    "fat": 10.4,
    "carbs": 24.63
  }
}, {
  "name": "Rukola świeża",
  "weight": [],
  "calories": 25,
  "macros": {
    "protein": 2.6,
    "fat": 0.7,
    "carbs": 3.7
  }
}, {
  "name": "Ryż",
  "weight": [100],
  "calories": 344,
  "macros": {
    "protein": 6.7,
    "fat": 0.7,
    "carbs": 78.9
  }
}, {
  "name": "Salame",
  "weight": [485],
  "calories": 201.61,
  "macros": {
    "protein": 6.35,
    "fat": 8.53,
    "carbs": 25.27
  }
}, {
  "name": "Salami",
  "weight": [],
  "calories": 300,
  "macros": {
    "protein": 17,
    "fat": 28,
    "carbs": 2.4
  }
}, {
  "name": "Salami Pepperoni",
  "weight": [],
  "calories": 430,
  "macros": {
    "protein": 15,
    "fat": 40,
    "carbs": 2.4
  }
}, {
  "name": "Saporito",
  "weight": [510, 955, 1330],
  "calories": 163.13,
  "macros": {
    "protein": 8.99,
    "fat": 5.57,
    "carbs": 19.82
  }
}, {
  "name": "Sałata Da Grasso",
  "weight": [410],
  "calories": 120.79,
  "macros": {
    "protein": 9.5,
    "fat": 4.76,
    "carbs": 10.24
  }
}, {
  "name": "Sałata Grecka",
  "weight": [420],
  "calories": 132.12,
  "macros": {
    "protein": 5.74,
    "fat": 7.39,
    "carbs": 10.61
  }
}, {
  "name": "Sałata z kurczakiem",
  "weight": [400],
  "calories": 108.4,
  "macros": {
    "protein": 9.18,
    "fat": 3.92,
    "carbs": 9.25
  }
}, {
  "name": "Sałata z pieczonym łososiem",
  "weight": [420],
  "calories": 116.87,
  "macros": {
    "protein": 5.91,
    "fat": 5.34,
    "carbs": 11.76
  }
}, {
  "name": "Sałata z pieczoną szynką parmeńską",
  "weight": [340],
  "calories": 174.05,
  "macros": {
    "protein": 7.86,
    "fat": 10.29,
    "carbs": 13.33
  }
}, {
  "name": "Sałata z tuńczykiem",
  "weight": [390],
  "calories": 116.71,
  "macros": {
    "protein": 8.6,
    "fat": 4.02,
    "carbs": 9.37
  }
}, {
  "name": "Sałata ze stripsami z kurczaka",
  "weight": [400],
  "calories": 120.6,
  "macros": {
    "protein": 8.85,
    "fat": 4.86,
    "carbs": 10.3
  }
}, {
  "name": "Sałatka ze świeżych warzyw",
  "weight": [150],
  "calories": 51.4,
  "macros": {
    "protein": 0.84,
    "fat": 2.01,
    "carbs": 8.03
  }
}, {
  "name": "Scampi Tuna",
  "weight": [465, 815, 1200],
  "calories": 197.97,
  "macros": {
    "protein": 10.11,
    "fat": 7.39,
    "carbs": 22.38
  }
}, {
  "name": "Semplicita",
  "weight": [330, 605, 920],
  "calories": 233.16,
  "macros": {
    "protein": 10.38,
    "fat": 8.23,
    "carbs": 29.94
  }
}, {
  "name": "Ser",
  "weight": [],
  "calories": 294,
  "macros": {
    "protein": 24,
    "fat": 22,
    "carbs": 0
  }
}, {
  "name": "Ser mozarella",
  "weight": [],
  "calories": 248,
  "macros": {
    "protein": 11.4,
    "fat": 12.2,
    "carbs": 23.6
  }
}, {
  "name": "Ser pleśniowy",
  "weight": [],
  "calories": 307,
  "macros": {
    "protein": 19,
    "fat": 25,
    "carbs": 1.5
  }
}, {
  "name": "Ser sałatkowy",
  "weight": [],
  "calories": 263,
  "macros": {
    "protein": 15,
    "fat": 22,
    "carbs": 1
  }
}, {
  "name": "Sernik z nadzieniem karmelowym",
  "weight": [120],
  "calories": 331,
  "macros": {
    "protein": 4.8,
    "fat": 19.6,
    "carbs": 33.7
  }
}, {
  "name": "Shake pomarańczowo-czekoladowy",
  "weight": [325],
  "calories": 80.6,
  "macros": {
    "protein": 1.94,
    "fat": 2.46,
    "carbs": 12.3
  }
}, {
  "name": "Shake waniliowo-pomarańczowy",
  "weight": [330],
  "calories": 87.63,
  "macros": {
    "protein": 1.87,
    "fat": 3.42,
    "carbs": 12.33
  }
}, {
  "name": "Shake waniliowo-truskawkowy",
  "weight": [320],
  "calories": 84.38,
  "macros": {
    "protein": 2.01,
    "fat": 2.61,
    "carbs": 13.21
  }
}, {
  "name": "Skrzydełka z kurczaka",
  "weight": [380, 560],
  "calories": 165.61,
  "macros": {
    "protein": 13.67,
    "fat": 10.39,
    "carbs": 4.63
  }
}, {
  "name": "Sos Chilli Louisiana",
  "weight": [],
  "calories": 0,
  "macros": {
    "protein": 0,
    "fat": 0,
    "carbs": 0
  }
}, {
  "name": "Sos czosnkowy",
  "weight": [50, 125, 125],
  "calories": 140.95,
  "macros": {
    "protein": 1.95,
    "fat": 11.65,
    "carbs": 7.08
  }
}, {
  "name": "Sos czosnkowy",
  "weight": [50, 30],
  "calories": 140.95,
  "macros": {
    "protein": 1.95,
    "fat": 11.65,
    "carbs": 7.08
  }
}, {
  "name": "Sos musztardowo-miodowy",
  "weight": [50, 125, 125],
  "calories": 174,
  "macros": {
    "protein": 1.5,
    "fat": 12,
    "carbs": 15
  }
}, {
  "name": "Sos musztardowo-miodowy",
  "weight": [50, 30],
  "calories": 159,
  "macros": {
    "protein": 1.5,
    "fat": 14,
    "carbs": 6.6
  }
}, {
  "name": "Sos ostry",
  "weight": [50, 125, 125],
  "calories": 177,
  "macros": {
    "protein": 0.65,
    "fat": 17,
    "carbs": 5.9
  }
}, {
  "name": "Sos pomidorowy",
  "weight": [50, 125, 125],
  "calories": 75.85,
  "macros": {
    "protein": 2.03,
    "fat": 0.48,
    "carbs": 15.18
  }
}, {
  "name": "Sos rukolowy",
  "weight": [50, 30],
  "calories": 560,
  "macros": {
    "protein": 0.79,
    "fat": 57,
    "carbs": 11
  }
}, {
  "name": "Sos winegret",
  "weight": [50, 30],
  "calories": 183,
  "macros": {
    "protein": 0.03,
    "fat": 9.2,
    "carbs": 25
  }
}, {
  "name": "Spagnola",
  "weight": [100],
  "calories": 217,
  "macros": {
    "protein": 1.7,
    "fat": 5.2,
    "carbs": 40.4
  }
}, {
  "name": "Sparare",
  "weight": [580, 1060, 1470],
  "calories": 173.6,
  "macros": {
    "protein": 6.97,
    "fat": 7.49,
    "carbs": 20.14
  }
}, {
  "name": "Spicy Burger",
  "weight": [436],
  "calories": 193.43,
  "macros": {
    "protein": 10.69,
    "fat": 10.53,
    "carbs": 13.8
  }
}, {
  "name": "Spinachi",
  "weight": [485],
  "calories": 193.33,
  "macros": {
    "protein": 5.54,
    "fat": 11.78,
    "carbs": 16.89
  }
}, {
  "name": "Sprite Lemongrass",
  "weight": [320],
  "calories": 30.56,
  "macros": {
    "protein": 0.07,
    "fat": 0.03,
    "carbs": 7.58
  }
}, {
  "name": "Stracciatella",
  "weight": [100],
  "calories": 222,
  "macros": {
    "protein": 3,
    "fat": 8.5,
    "carbs": 31.9
  }
}, {
  "name": "Strawberry Mojito",
  "weight": [320],
  "calories": 53.57,
  "macros": {
    "protein": 0.09,
    "fat": 0.02,
    "carbs": 13.33
  }
}, {
  "name": "Stripsy z kurczaka w panierce",
  "weight": [310],
  "calories": 152.22,
  "macros": {
    "protein": 12.82,
    "fat": 5.67,
    "carbs": 11.58
  }
}, {
  "name": "Szpinak",
  "weight": [],
  "calories": 16.25,
  "macros": {
    "protein": 2.63,
    "fat": 0.38,
    "carbs": 3
  }
}, {
  "name": "Szynka",
  "weight": [],
  "calories": 90,
  "macros": {
    "protein": 14,
    "fat": 3.1,
    "carbs": 3
  }
}, {
  "name": "Szynka dojrzewająca",
  "weight": [],
  "calories": 239,
  "macros": {
    "protein": 26,
    "fat": 15,
    "carbs": 0
  }
}, {
  "name": "Tortilla z panierowaną polędwiczką z kurczaka",
  "weight": [280],
  "calories": 152.41,
  "macros": {
    "protein": 8.21,
    "fat": 4.98,
    "carbs": 18.68
  }
}, {
  "name": "Tuńczyk",
  "weight": [],
  "calories": 205,
  "macros": {
    "protein": 26.4,
    "fat": 7.06,
    "carbs": 0
  }
}, {
  "name": "Viola",
  "weight": [410, 729, 1090],
  "calories": 235.1,
  "macros": {
    "protein": 9.03,
    "fat": 10.46,
    "carbs": 27.07
  }
}, {
  "name": "Wiejska",
  "weight": [420, 780, 1150],
  "calories": 219.02,
  "macros": {
    "protein": 8.52,
    "fat": 9.51,
    "carbs": 25.37
  }
}, {
  "name": "Zupa cebulowa",
  "weight": [366],
  "calories": 112.62,
  "macros": {
    "protein": 1.74,
    "fat": 7.34,
    "carbs": 9.55
  }
}, {
  "name": "Łosoś soute",
  "weight": [579],
  "calories": 148.93,
  "macros": {
    "protein": 7.53,
    "fat": 8.81,
    "carbs": 9.64
  }
}];
},{}],"data/goodlood.json":[function(require,module,exports) {
module.exports = [{
  "name": "Ciemna czekolada",
  "weight": [100],
  "calories": 182.3,
  "macros": {
    "protein": null,
    "fat": null,
    "carbs": null
  }
}, {
  "name": "Karmel z różową solą himalajską",
  "weight": [100],
  "calories": 171.8,
  "macros": {
    "protein": null,
    "fat": null,
    "carbs": null
  }
}, {
  "name": "Polska truskawka",
  "weight": [100],
  "calories": 101.6,
  "macros": {
    "protein": null,
    "fat": null,
    "carbs": null
  }
}, {
  "name": "Śmietanka ze Skały",
  "weight": [100],
  "calories": 194,
  "macros": {
    "protein": null,
    "fat": null,
    "carbs": null
  }
}];
},{}],"data/lajkonik.json":[function(require,module,exports) {
module.exports = [{
  "name": "Alla siciliana",
  "weight": [200],
  "calories": 207,
  "macros": {
    "protein": 9.7,
    "fat": 10.8,
    "carbs": 16.9
  }
}, {
  "name": "Apfelstrudel - strudel jabłkowy",
  "weight": [125],
  "calories": 171,
  "macros": {
    "protein": 2.5,
    "fat": 5,
    "carbs": 28
  }
}, {
  "name": "Babeczka do koszyczka",
  "weight": [80],
  "calories": 360,
  "macros": {
    "protein": 6.3,
    "fat": 15,
    "carbs": 47
  }
}, {
  "name": "Babeczka dobrze nadziana",
  "weight": [80],
  "calories": 396,
  "macros": {
    "protein": 7.3,
    "fat": 15,
    "carbs": 55
  }
}, {
  "name": "Babeczka drożdżowa z cynamonem",
  "weight": [75],
  "calories": 295,
  "macros": {
    "protein": 7.5,
    "fat": 10,
    "carbs": 41
  }
}, {
  "name": "Babka wielkanocna",
  "weight": [400],
  "calories": 362,
  "macros": {
    "protein": 6.6,
    "fat": 16,
    "carbs": 47
  }
}, {
  "name": "Bajgiel mak",
  "weight": [100],
  "calories": 271,
  "macros": {
    "protein": 8.1,
    "fat": 5,
    "carbs": 47
  }
}, {
  "name": "Bajgiel ser",
  "weight": [100],
  "calories": 262,
  "macros": {
    "protein": 8.4,
    "fat": 4.2,
    "carbs": 46
  }
}, {
  "name": "Bajgiel sezam",
  "weight": [100],
  "calories": 277,
  "macros": {
    "protein": 8.1,
    "fat": 6,
    "carbs": 47
  }
}, {
  "name": "Bawarka z szynką szwarcwaldzką",
  "weight": [160],
  "calories": 269,
  "macros": {
    "protein": 15,
    "fat": 13,
    "carbs": 22
  }
}, {
  "name": "Bawarka z twarożkiem",
  "weight": [170],
  "calories": 179,
  "macros": {
    "protein": 8.8,
    "fat": 5.7,
    "carbs": 21
  }
}, {
  "name": "Bochen żytni",
  "weight": [1000],
  "calories": 269,
  "macros": {
    "protein": 4.2,
    "fat": 1.7,
    "carbs": 42
  }
}, {
  "name": "Buława",
  "weight": [80],
  "calories": 271,
  "macros": {
    "protein": 7.9,
    "fat": 2.5,
    "carbs": 53
  }
}, {
  "name": "Buława z jajkiem i pomidorem",
  "weight": [200],
  "calories": 188,
  "macros": {
    "protein": 6.1,
    "fat": 7.9,
    "carbs": 22.2
  }
}, {
  "name": "Buława z szynką i serem",
  "weight": [190],
  "calories": 218,
  "macros": {
    "protein": 8.8,
    "fat": 9.4,
    "carbs": 23.4
  }
}, {
  "name": "Bułeczka drożdżowa z czekoladą",
  "weight": [70],
  "calories": 389,
  "macros": {
    "protein": 7.9,
    "fat": 14,
    "carbs": 56
  }
}, {
  "name": "Bułka fitness",
  "weight": [80],
  "calories": 273,
  "macros": {
    "protein": 9.9,
    "fat": 5.2,
    "carbs": 44
  }
}, {
  "name": "Bułka prosto z pieca",
  "weight": [80],
  "calories": 249,
  "macros": {
    "protein": 7.4,
    "fat": 2.2,
    "carbs": 48
  }
}, {
  "name": "Bułka serowa sztangla",
  "weight": [100],
  "calories": 339,
  "macros": {
    "protein": 16.5,
    "fat": 12.2,
    "carbs": 39.5
  }
}, {
  "name": "Bułka ziemniaczana",
  "weight": [80],
  "calories": 249,
  "macros": {
    "protein": 7.7,
    "fat": 1.1,
    "carbs": 51
  }
}, {
  "name": "Chałka wigilijna",
  "weight": [120],
  "calories": 299,
  "macros": {
    "protein": 7.9,
    "fat": 7.2,
    "carbs": 49
  }
}, {
  "name": "Chleb 7 ziaren",
  "weight": [700],
  "calories": 322,
  "macros": {
    "protein": 8.8,
    "fat": 6.8,
    "carbs": 54
  }
}, {
  "name": "Chleb lajkonika z orkiszem",
  "weight": [700],
  "calories": 210,
  "macros": {
    "protein": 5.6,
    "fat": 1.7,
    "carbs": 40
  }
}, {
  "name": "Chleb legendarny",
  "weight": [450],
  "calories": 259,
  "macros": {
    "protein": 7.3,
    "fat": 1.4,
    "carbs": 52
  }
}, {
  "name": "Chleb rodzinny",
  "weight": [700],
  "calories": 286,
  "macros": {
    "protein": 6.9,
    "fat": 1.3,
    "carbs": 59
  }
}, {
  "name": "Chleb rziemieślniczy",
  "weight": [400],
  "calories": 245,
  "macros": {
    "protein": 7.5,
    "fat": 0.9,
    "carbs": 50
  }
}, {
  "name": "Chleb staropolski",
  "weight": [450],
  "calories": 241,
  "macros": {
    "protein": 7.5,
    "fat": 1.2,
    "carbs": 49
  }
}, {
  "name": "Chleb wawelski",
  "weight": [400],
  "calories": 267,
  "macros": {
    "protein": 7.1,
    "fat": 1.6,
    "carbs": 54
  }
}, {
  "name": "Chleb ziarno do ziarna",
  "weight": [500],
  "calories": 315,
  "macros": {
    "protein": 11,
    "fat": 24,
    "carbs": 14
  }
}, {
  "name": "Chlebek do koszyczka",
  "weight": [250],
  "calories": 290,
  "macros": {
    "protein": 6.6,
    "fat": 1.2,
    "carbs": 61
  }
}, {
  "name": "Ciabata",
  "weight": [100],
  "calories": 234,
  "macros": {
    "protein": 7.1,
    "fat": 2.2,
    "carbs": 45
  }
}, {
  "name": "Ciastko potrójnie czekoladowe",
  "weight": [80],
  "calories": 468,
  "macros": {
    "protein": 6.3,
    "fat": 22.9,
    "carbs": 52
  }
}, {
  "name": "Ciastko z żurawiną i białą czekoladą",
  "weight": [80],
  "calories": 462,
  "macros": {
    "protein": 6.4,
    "fat": 25.6,
    "carbs": 51
  }
}, {
  "name": "Ciasto czekoladowe z wiśniami",
  "weight": [170],
  "calories": 309,
  "macros": {
    "protein": 3.1,
    "fat": 13,
    "carbs": 44
  }
}, {
  "name": "Ciasto serowo-makowe z białą czekoladą",
  "weight": [680],
  "calories": 282,
  "macros": {
    "protein": 7.2,
    "fat": 15,
    "carbs": 28
  }
}, {
  "name": "Croissant",
  "weight": [60],
  "calories": 382,
  "macros": {
    "protein": 7.2,
    "fat": 23,
    "carbs": 36
  }
}, {
  "name": "Croissant czekoladowy",
  "weight": [90],
  "calories": 335,
  "macros": {
    "protein": 4.5,
    "fat": 21,
    "carbs": 26
  }
}, {
  "name": "Croissant z camembertem",
  "weight": [170],
  "calories": 286,
  "macros": {
    "protein": 7.9,
    "fat": 21,
    "carbs": 15
  }
}, {
  "name": "Croissant z szynką szwarcwaldzką",
  "weight": [170],
  "calories": 266,
  "macros": {
    "protein": 10,
    "fat": 18,
    "carbs": 13
  }
}, {
  "name": "Croissant z łososiem",
  "weight": [130],
  "calories": 231,
  "macros": {
    "protein": 4.8,
    "fat": 15,
    "carbs": 18
  }
}, {
  "name": "Dominikanski kurczak",
  "weight": [170],
  "calories": 212,
  "macros": {
    "protein": 6.1,
    "fat": 7.9,
    "carbs": 25.8
  }
}, {
  "name": "Donut cynamonowy",
  "weight": [61],
  "calories": 378,
  "macros": {
    "protein": 4.7,
    "fat": 18,
    "carbs": 62
  }
}, {
  "name": "Donut czekoladowy",
  "weight": [69],
  "calories": 469,
  "macros": {
    "protein": 5.7,
    "fat": 28,
    "carbs": 50
  }
}, {
  "name": "Donut konfetti",
  "weight": [61],
  "calories": 443,
  "macros": {
    "protein": 5.5,
    "fat": 25,
    "carbs": 49
  }
}, {
  "name": "Donut lion",
  "weight": [60],
  "calories": 322,
  "macros": {
    "protein": 6.4,
    "fat": 4.9,
    "carbs": 62
  }
}, {
  "name": "Donut marshmallow",
  "weight": [60],
  "calories": 430,
  "macros": {
    "protein": 6.8,
    "fat": 27,
    "carbs": 38
  }
}, {
  "name": "Drobiowy smoczy pyszczek",
  "weight": [180],
  "calories": 169,
  "macros": {
    "protein": 10.5,
    "fat": 5.4,
    "carbs": 17.8
  }
}, {
  "name": "Gustoso",
  "weight": [180],
  "calories": 209,
  "macros": {
    "protein": 9.3,
    "fat": 9.9,
    "carbs": 19
  }
}, {
  "name": "Gwiazdka piernikowa",
  "weight": [140],
  "calories": 533,
  "macros": {
    "protein": 6.3,
    "fat": 33,
    "carbs": 50
  }
}, {
  "name": "Herbata energia",
  "weight": [],
  "calories": 27,
  "macros": {
    "protein": 0.1,
    "fat": 0,
    "carbs": 6.2
  }
}, {
  "name": "Herbata mrożona - brzoskwiniowa",
  "weight": [],
  "calories": 55,
  "macros": {
    "protein": 0.2,
    "fat": 0,
    "carbs": 13
  }
}, {
  "name": "Herbata odnowa",
  "weight": [],
  "calories": 26,
  "macros": {
    "protein": 0.1,
    "fat": 0,
    "carbs": 5.9
  }
}, {
  "name": "Herbata spokój",
  "weight": [],
  "calories": 34,
  "macros": {
    "protein": 0.2,
    "fat": 0,
    "carbs": 7.9
  }
}, {
  "name": "Herbata zdrowie",
  "weight": [],
  "calories": 40,
  "macros": {
    "protein": 0.1,
    "fat": 0,
    "carbs": 9.6
  }
}, {
  "name": "Jabłkowa kruszynka",
  "weight": [165],
  "calories": 328,
  "macros": {
    "protein": 5.7,
    "fat": 10,
    "carbs": 52
  }
}, {
  "name": "Jagodowa kruszynka",
  "weight": [160],
  "calories": 327,
  "macros": {
    "protein": 5.9,
    "fat": 12.3,
    "carbs": 46.8
  }
}, {
  "name": "Jogurt z granolą i owocami",
  "weight": [200],
  "calories": 129,
  "macros": {
    "protein": 4,
    "fat": 3.2,
    "carbs": 19.5
  }
}, {
  "name": "Kakao deserowe z piankami marshmallows",
  "weight": [300],
  "calories": 135,
  "macros": {
    "protein": 2.2,
    "fat": 6.4,
    "carbs": 16
  }
}, {
  "name": "Kakao mleczne z piankami marshmallows",
  "weight": [300],
  "calories": 130,
  "macros": {
    "protein": 2.2,
    "fat": 5.4,
    "carbs": 18
  }
}, {
  "name": "Kapuśniaczek/Kapuśniaczek z kminkiem",
  "weight": [100],
  "calories": 339,
  "macros": {
    "protein": 16.5,
    "fat": 12.2,
    "carbs": 39.5
  }
}, {
  "name": "Karmelinki",
  "weight": [120],
  "calories": 456,
  "macros": {
    "protein": 4.8,
    "fat": 28,
    "carbs": 45
  }
}, {
  "name": "Kawa mrożona kokosowa",
  "weight": [],
  "calories": 105,
  "macros": {
    "protein": 1.4,
    "fat": 5.3,
    "carbs": 12.6
  }
}, {
  "name": "Kawa mrożona słony karmel",
  "weight": [],
  "calories": 74,
  "macros": {
    "protein": 1.1,
    "fat": 3.6,
    "carbs": 9.2
  }
}, {
  "name": "Kawa mrożona waniliowa",
  "weight": [],
  "calories": 33,
  "macros": {
    "protein": 0.6,
    "fat": 1.6,
    "carbs": 3.8
  }
}, {
  "name": "Koktajl malina",
  "weight": [],
  "calories": 62,
  "macros": {
    "protein": 2.1,
    "fat": 0.9,
    "carbs": 11
  }
}, {
  "name": "Koktajl oreo",
  "weight": [],
  "calories": 118,
  "macros": {
    "protein": 2.4,
    "fat": 1.8,
    "carbs": 22
  }
}, {
  "name": "Koktajl szpinak chia",
  "weight": [],
  "calories": 65,
  "macros": {
    "protein": 1.3,
    "fat": 1,
    "carbs": 12
  }
}, {
  "name": "Korfello",
  "weight": [100],
  "calories": 446,
  "macros": {
    "protein": 4.4,
    "fat": 32,
    "carbs": 34
  }
}, {
  "name": "Krakowiak",
  "weight": [80],
  "calories": 302,
  "macros": {
    "protein": 7.1,
    "fat": 3.6,
    "carbs": 57.4
  }
}, {
  "name": "Krakowianka",
  "weight": [80],
  "calories": 271,
  "macros": {
    "protein": 7.6,
    "fat": 1.3,
    "carbs": 55
  }
}, {
  "name": "Krakowski bajgiel potrójnie serowy",
  "weight": [200],
  "calories": 216,
  "macros": {
    "protein": 9,
    "fat": 7.9,
    "carbs": 27
  }
}, {
  "name": "Krakowski bajgiel wegetariański",
  "weight": [210],
  "calories": 211,
  "macros": {
    "protein": 7.1,
    "fat": 9.2,
    "carbs": 24
  }
}, {
  "name": "Krakowski bajgiel wiosenny",
  "weight": [210],
  "calories": 181,
  "macros": {
    "protein": 9.3,
    "fat": 4.9,
    "carbs": 24
  }
}, {
  "name": "Krakowski bajgiel z kurczakiem i remuladą",
  "weight": [160],
  "calories": 234,
  "macros": {
    "protein": 7.4,
    "fat": 7.4,
    "carbs": 31
  }
}, {
  "name": "Krakowski bajgiel z rostbefem",
  "weight": [150],
  "calories": 207,
  "macros": {
    "protein": 8.4,
    "fat": 5.5,
    "carbs": 32
  }
}, {
  "name": "Krakowski bajgiel z salami i remuladą",
  "weight": [160],
  "calories": 271,
  "macros": {
    "protein": 7.6,
    "fat": 12.3,
    "carbs": 32
  }
}, {
  "name": "Krakowski bajgiel z twarożkiem",
  "weight": [210],
  "calories": 240,
  "macros": {
    "protein": 8,
    "fat": 12.9,
    "carbs": 21.9
  }
}, {
  "name": "Krakowski bajgiel z łososiem",
  "weight": [190],
  "calories": 216,
  "macros": {
    "protein": 7.2,
    "fat": 6.8,
    "carbs": 26.8
  }
}, {
  "name": "Kremówka lajkonika z malinami",
  "weight": [110],
  "calories": 438,
  "macros": {
    "protein": 4.1,
    "fat": 27,
    "carbs": 44
  }
}, {
  "name": "Kremówka lajkonika z wanilią",
  "weight": [140],
  "calories": 383,
  "macros": {
    "protein": 4.3,
    "fat": 24.7,
    "carbs": 35.1
  }
}, {
  "name": "Kulki na patyku",
  "weight": [130],
  "calories": 299,
  "macros": {
    "protein": 12,
    "fat": 11,
    "carbs": 36
  }
}, {
  "name": "Lekki krakowiak",
  "weight": [190],
  "calories": 247,
  "macros": {
    "protein": 5.6,
    "fat": 10.6,
    "carbs": 30.5
  }
}, {
  "name": "Lemoniada smakowa - cytrynowa",
  "weight": [],
  "calories": 33,
  "macros": {
    "protein": 0.3,
    "fat": 0,
    "carbs": 7.4
  }
}, {
  "name": "Lemoniada smakowa - malina",
  "weight": [],
  "calories": 38,
  "macros": {
    "protein": 0.4,
    "fat": 0,
    "carbs": 8.9
  }
}, {
  "name": "Lemoniada smakowa - marakuja",
  "weight": [],
  "calories": 35,
  "macros": {
    "protein": 0.1,
    "fat": 0,
    "carbs": 8.4
  }
}, {
  "name": "Lemoniada smakowa - ogórkowa",
  "weight": [],
  "calories": 35,
  "macros": {
    "protein": 0.1,
    "fat": 0,
    "carbs": 8.5
  }
}, {
  "name": "Madame kozi ser",
  "weight": [150],
  "calories": 274,
  "macros": {
    "protein": 9.2,
    "fat": 21,
    "carbs": 12
  }
}, {
  "name": "Makowiec tradycyjny",
  "weight": [480],
  "calories": 370,
  "macros": {
    "protein": 9,
    "fat": 14,
    "carbs": 50
  }
}, {
  "name": "Mazurek czekoladowy",
  "weight": [400],
  "calories": 451,
  "macros": {
    "protein": 4.1,
    "fat": 30,
    "carbs": 39
  }
}, {
  "name": "Mazurek z kajmakiem",
  "weight": [500],
  "calories": 585,
  "macros": {
    "protein": 7.2,
    "fat": 28,
    "carbs": 77
  }
}, {
  "name": "Mazurek z marmoladą różaną",
  "weight": [500],
  "calories": 552,
  "macros": {
    "protein": 5.4,
    "fat": 23,
    "carbs": 79
  }
}, {
  "name": "Małopolanka",
  "weight": [150],
  "calories": 204,
  "macros": {
    "protein": 12,
    "fat": 4.4,
    "carbs": 29
  }
}, {
  "name": "Montana",
  "weight": [250],
  "calories": 380,
  "macros": {
    "protein": 14.6,
    "fat": 26,
    "carbs": 20
  }
}, {
  "name": "Mozarellka lajkonika",
  "weight": [170],
  "calories": 252,
  "macros": {
    "protein": 8.6,
    "fat": 11.6,
    "carbs": 27
  }
}, {
  "name": "Muffina czekoladowa",
  "weight": [120],
  "calories": 498,
  "macros": {
    "protein": 5.8,
    "fat": 31,
    "carbs": 47
  }
}, {
  "name": "Muffina jagodowa",
  "weight": [120],
  "calories": 475,
  "macros": {
    "protein": 5.1,
    "fat": 27,
    "carbs": 52
  }
}, {
  "name": "Muffina malinowa",
  "weight": [120],
  "calories": 475,
  "macros": {
    "protein": 5.1,
    "fat": 27,
    "carbs": 52
  }
}, {
  "name": "Nordina",
  "weight": [170],
  "calories": 259,
  "macros": {
    "protein": 5.6,
    "fat": 10,
    "carbs": 29.4
  }
}, {
  "name": "Orzechowe cappuccino",
  "weight": [],
  "calories": 81,
  "macros": {
    "protein": 1.2,
    "fat": 5,
    "carbs": 7.5
  }
}, {
  "name": "Owocowe smocze oko",
  "weight": [130],
  "calories": 290,
  "macros": {
    "protein": 4.1,
    "fat": 14,
    "carbs": 34
  }
}, {
  "name": "Paluch lajkonika",
  "weight": [80],
  "calories": 287,
  "macros": {
    "protein": 8.8,
    "fat": 5,
    "carbs": 49.8
  }
}, {
  "name": "Piernik gwiazdkowy",
  "weight": [700],
  "calories": 476,
  "macros": {
    "protein": 5.4,
    "fat": 29,
    "carbs": 47
  }
}, {
  "name": "Piernikowe latte",
  "weight": [],
  "calories": 53,
  "macros": {
    "protein": 1,
    "fat": 1.6,
    "carbs": 6.9
  }
}, {
  "name": "Połówka prosto z pieca z jajkiem",
  "weight": [110],
  "calories": 185,
  "macros": {
    "protein": 7.4,
    "fat": 8.8,
    "carbs": 18.5
  }
}, {
  "name": "Połówka prosto z pieca z pastą jajeczną",
  "weight": [100],
  "calories": 196,
  "macros": {
    "protein": 6.2,
    "fat": 9.8,
    "carbs": 20.1
  }
}, {
  "name": "Połówka prosto z pieca z pastą pomidorowo-paprykową",
  "weight": [80],
  "calories": 180,
  "macros": {
    "protein": 7.3,
    "fat": 4.4,
    "carbs": 27.2
  }
}, {
  "name": "Połówka prosto z pieca z pastą tuńczykową",
  "weight": [80],
  "calories": 217,
  "macros": {
    "protein": 9.9,
    "fat": 7.4,
    "carbs": 27.1
  }
}, {
  "name": "Połówka prosto z pieca z pastą wiosenną",
  "weight": [85],
  "calories": 205,
  "macros": {
    "protein": 3.6,
    "fat": 1.1,
    "carbs": 23.2
  }
}, {
  "name": "Połówka prosto z pieca z pastą z makreli",
  "weight": [90],
  "calories": 264,
  "macros": {
    "protein": 8.5,
    "fat": 15,
    "carbs": 23
  }
}, {
  "name": "Połówka prosto z pieca z pastą łososiową",
  "weight": [80],
  "calories": 224,
  "macros": {
    "protein": 8.5,
    "fat": 8.4,
    "carbs": 25.8
  }
}, {
  "name": "Połówka prosto z pieca z szynką",
  "weight": [100],
  "calories": 189,
  "macros": {
    "protein": 8.4,
    "fat": 1.8,
    "carbs": 21.5
  }
}, {
  "name": "Precel lajkonika",
  "weight": [90],
  "calories": 282,
  "macros": {
    "protein": 9.3,
    "fat": 4.1,
    "carbs": 50.6
  }
}, {
  "name": "Precel lajkonika z serem i dynią",
  "weight": [140],
  "calories": 327,
  "macros": {
    "protein": 16,
    "fat": 14,
    "carbs": 33
  }
}, {
  "name": "Ptysiowa finezja",
  "weight": [125],
  "calories": 280,
  "macros": {
    "protein": 3.2,
    "fat": 12,
    "carbs": 39
  }
}, {
  "name": "Pączek z morelami",
  "weight": [80],
  "calories": 311,
  "macros": {
    "protein": 5.7,
    "fat": 4.5,
    "carbs": 60
  }
}, {
  "name": "Pączek z płatkami róży i cukrem pudrem",
  "weight": [70],
  "calories": 322,
  "macros": {
    "protein": 6.4,
    "fat": 4.9,
    "carbs": 62
  }
}, {
  "name": "Pączek z płatkami róży i lukrem",
  "weight": [70],
  "calories": 364,
  "macros": {
    "protein": 6.4,
    "fat": 4.9,
    "carbs": 72
  }
}, {
  "name": "Pączek ze słonym karmelem",
  "weight": [80],
  "calories": 391,
  "macros": {
    "protein": 8.6,
    "fat": 15,
    "carbs": 54
  }
}, {
  "name": "Rabarbarowa kruszynka",
  "weight": [160],
  "calories": 342,
  "macros": {
    "protein": 1.2,
    "fat": 13,
    "carbs": 49
  }
}, {
  "name": "Rurka kremowa",
  "weight": [100],
  "calories": 358,
  "macros": {
    "protein": 5.2,
    "fat": 18.8,
    "carbs": 41.2
  }
}, {
  "name": "Rustico",
  "weight": [160],
  "calories": 219,
  "macros": {
    "protein": 10.1,
    "fat": 10.2,
    "carbs": 21
  }
}, {
  "name": "Rustykalna z pastą z makreli",
  "weight": [150],
  "calories": 140,
  "macros": {
    "protein": 4.1,
    "fat": 0.7,
    "carbs": 27
  }
}, {
  "name": "Sałatka grecka",
  "weight": [240],
  "calories": 93,
  "macros": {
    "protein": 2.2,
    "fat": 7.6,
    "carbs": 3.2
  }
}, {
  "name": "Sałatka włoska",
  "weight": [190],
  "calories": 193,
  "macros": {
    "protein": 5.4,
    "fat": 18,
    "carbs": 1.7
  }
}, {
  "name": "Sałatka z kurczakiem",
  "weight": [150],
  "calories": 80,
  "macros": {
    "protein": 4.5,
    "fat": 4.8,
    "carbs": 2.2
  }
}, {
  "name": "Sałatka z mozarellą",
  "weight": [230],
  "calories": 165,
  "macros": {
    "protein": 4.6,
    "fat": 14.4,
    "carbs": 3.2
  }
}, {
  "name": "Sernik oreo",
  "weight": [700],
  "calories": 325,
  "macros": {
    "protein": 7.7,
    "fat": 16,
    "carbs": 37
  }
}, {
  "name": "Sernik żurawinowy",
  "weight": [690],
  "calories": 313,
  "macros": {
    "protein": 7,
    "fat": 15,
    "carbs": 36
  }
}, {
  "name": "Serowa bajka",
  "weight": [200],
  "calories": 241,
  "macros": {
    "protein": 14.3,
    "fat": 10.6,
    "carbs": 21.3
  }
}, {
  "name": "Serowa kruszynka",
  "weight": [160],
  "calories": 349,
  "macros": {
    "protein": 9.3,
    "fat": 13,
    "carbs": 48
  }
}, {
  "name": "Signora pesto",
  "weight": [155],
  "calories": 187,
  "macros": {
    "protein": 8.2,
    "fat": 8.7,
    "carbs": 17
  }
}, {
  "name": "Sojowa latte",
  "weight": [400],
  "calories": 16,
  "macros": {
    "protein": 1.2,
    "fat": 0.7,
    "carbs": 0.9
  }
}, {
  "name": "Szarlotka babuni",
  "weight": [300],
  "calories": 261,
  "macros": {
    "protein": 3.1,
    "fat": 12,
    "carbs": 34
  }
}, {
  "name": "Szneka z szynką",
  "weight": [180],
  "calories": 196,
  "macros": {
    "protein": 8.3,
    "fat": 5,
    "carbs": 28
  }
}, {
  "name": "Szneka z warzywami",
  "weight": [180],
  "calories": 184,
  "macros": {
    "protein": 6.2,
    "fat": 4,
    "carbs": 30
  }
}, {
  "name": "Tarta cytrynowa",
  "weight": [90],
  "calories": 458,
  "macros": {
    "protein": 4.9,
    "fat": 27,
    "carbs": 49
  }
}, {
  "name": "Tarta orzechowa",
  "weight": [],
  "calories": 442,
  "macros": {
    "protein": 7.4,
    "fat": 29,
    "carbs": 36
  }
}, {
  "name": "Tarta owocowa",
  "weight": [135],
  "calories": 231,
  "macros": {
    "protein": 2.8,
    "fat": 8.1,
    "carbs": 37
  }
}, {
  "name": "Tarta porzeczkowa",
  "weight": [115],
  "calories": 433,
  "macros": {
    "protein": 5.3,
    "fat": 26,
    "carbs": 42
  }
}, {
  "name": "Tarta sernikowa z malinami",
  "weight": [110],
  "calories": 296,
  "macros": {
    "protein": 8,
    "fat": 14,
    "carbs": 33
  }
}, {
  "name": "Tiramisu",
  "weight": [90],
  "calories": 287,
  "macros": {
    "protein": 4.2,
    "fat": 15,
    "carbs": 35
  }
}, {
  "name": "Tortilla meksykańska",
  "weight": [260],
  "calories": 208,
  "macros": {
    "protein": 11,
    "fat": 5.5,
    "carbs": 25
  }
}, {
  "name": "Tortilla z kurczakiem",
  "weight": [310],
  "calories": 231,
  "macros": {
    "protein": 4.2,
    "fat": 14,
    "carbs": 19
  }
}, {
  "name": "Tortilla z tuńczykiem",
  "weight": [250],
  "calories": 246,
  "macros": {
    "protein": 8.6,
    "fat": 12,
    "carbs": 25
  }
}, {
  "name": "Tortilla z łososiem",
  "weight": [250],
  "calories": 245,
  "macros": {
    "protein": 5.6,
    "fat": 13.9,
    "carbs": 22
  }
}, {
  "name": "Toscana",
  "weight": [230],
  "calories": 240,
  "macros": {
    "protein": 8,
    "fat": 12.9,
    "carbs": 21.9
  }
}, {
  "name": "Truskawkowa kruszynka",
  "weight": [160],
  "calories": 328,
  "macros": {
    "protein": 5.7,
    "fat": 10,
    "carbs": 52
  }
}, {
  "name": "Trzy korony",
  "weight": [80],
  "calories": 389,
  "macros": {
    "protein": 5.3,
    "fat": 22,
    "carbs": 42
  }
}, {
  "name": "Trójkąt bawarski z szynką i serem",
  "weight": [150],
  "calories": 269,
  "macros": {
    "protein": 11,
    "fat": 15,
    "carbs": 22
  }
}, {
  "name": "Trójkąt kukurydziany z serkiem",
  "weight": [160],
  "calories": 279,
  "macros": {
    "protein": 7.1,
    "fat": 18,
    "carbs": 21
  }
}, {
  "name": "Trójkąt ratatuj",
  "weight": [100],
  "calories": 263,
  "macros": {
    "protein": 6.6,
    "fat": 14,
    "carbs": 26
  }
}, {
  "name": "Tutti frutti",
  "weight": [250],
  "calories": 55,
  "macros": {
    "protein": 0.9,
    "fat": 0.3,
    "carbs": 11
  }
}, {
  "name": "Vege kubek z hummusem",
  "weight": [240],
  "calories": 70,
  "macros": {
    "protein": 2.3,
    "fat": 4.5,
    "carbs": 3.5
  }
}, {
  "name": "Waniliowe cappuccino",
  "weight": [],
  "calories": 79,
  "macros": {
    "protein": 1.1,
    "fat": 4.8,
    "carbs": 7.9
  }
}, {
  "name": "Waniliowy sernik lajkonika",
  "weight": [710],
  "calories": 313,
  "macros": {
    "protein": 12,
    "fat": 15,
    "carbs": 30
  }
}, {
  "name": "Warkocz klonowy",
  "weight": [98],
  "calories": 448,
  "macros": {
    "protein": 5.5,
    "fat": 23,
    "carbs": 54
  }
}, {
  "name": "Wiśniowa kruszynka",
  "weight": [160],
  "calories": 327,
  "macros": {
    "protein": 5.9,
    "fat": 12,
    "carbs": 47
  }
}, {
  "name": "Zapiekanka z kurczakiem",
  "weight": [330],
  "calories": 156,
  "macros": {
    "protein": 7.7,
    "fat": 6.1,
    "carbs": 15.1
  }
}, {
  "name": "Zapiekanka z salami",
  "weight": [300],
  "calories": 209,
  "macros": {
    "protein": 9.8,
    "fat": 11.9,
    "carbs": 15.1
  }
}, {
  "name": "Zawijaniec lajkonika",
  "weight": [140],
  "calories": 401,
  "macros": {
    "protein": 6.5,
    "fat": 17,
    "carbs": 52
  }
}, {
  "name": "Ślimak migdałowy",
  "weight": [135],
  "calories": 383,
  "macros": {
    "protein": 6.2,
    "fat": 17,
    "carbs": 49
  }
}, {
  "name": "Ślimak waniliowy z malinami",
  "weight": [120],
  "calories": 320,
  "macros": {
    "protein": 8.3,
    "fat": 7.9,
    "carbs": 51
  }
}, {
  "name": "Ślimak waniliowy z porzeczkami",
  "weight": [120],
  "calories": 344,
  "macros": {
    "protein": 8.2,
    "fat": 7.9,
    "carbs": 51
  }
}, {
  "name": "Żytnia kanapka z kurczakiem i grillowanymi warzywami",
  "weight": [220],
  "calories": 188,
  "macros": {
    "protein": 5,
    "fat": 4.2,
    "carbs": 28
  }
}, {
  "name": "Żytnia kanapka z szynką i serem",
  "weight": [240],
  "calories": 201,
  "macros": {
    "protein": 7.9,
    "fat": 6.5,
    "carbs": 25.3
  }
}, {
  "name": "Żytnia kanapka z tuńczykiem",
  "weight": [220],
  "calories": 240,
  "macros": {
    "protein": 10.1,
    "fat": 7.8,
    "carbs": 30
  }
}];
},{}],"data/pasibus.json":[function(require,module,exports) {
module.exports = [{
  "name": "Autorskie guacamole",
  "weight": [70],
  "calories": 162,
  "macros": {
    "protein": 2,
    "fat": 14,
    "carbs": 5
  }
}, {
  "name": "Awokadus - mały głód",
  "weight": [282],
  "calories": 278,
  "macros": {
    "protein": 11,
    "fat": 19,
    "carbs": 20
  }
}, {
  "name": "Awokadus - zwykły głód",
  "weight": [430],
  "calories": 282,
  "macros": {
    "protein": 11,
    "fat": 19,
    "carbs": 19
  }
}, {
  "name": "Bebek - mały głód",
  "weight": [285],
  "calories": 220,
  "macros": {
    "protein": 10,
    "fat": 13,
    "carbs": 21
  }
}, {
  "name": "Bebek - zwykły głód",
  "weight": [434],
  "calories": 231,
  "macros": {
    "protein": 10,
    "fat": 14,
    "carbs": 19
  }
}, {
  "name": "Bebek Junior - mały głód",
  "weight": [260],
  "calories": 253,
  "macros": {
    "protein": 11,
    "fat": 15,
    "carbs": 22
  }
}, {
  "name": "Bebek Junior - zwykły głód",
  "weight": [402],
  "calories": 260,
  "macros": {
    "protein": 12,
    "fat": 15,
    "carbs": 21
  }
}, {
  "name": "Bułka - mały głód",
  "weight": [75],
  "calories": 332,
  "macros": {
    "protein": 10,
    "fat": 5,
    "carbs": 63
  }
}, {
  "name": "Bułka - zwykły głód",
  "weight": [110],
  "calories": 333,
  "macros": {
    "protein": 10,
    "fat": 5,
    "carbs": 63
  }
}, {
  "name": "Chorizard - mały głód",
  "weight": [299],
  "calories": 252,
  "macros": {
    "protein": 10,
    "fat": 18,
    "carbs": 20
  }
}, {
  "name": "Chorizard - zwykły głód",
  "weight": [429],
  "calories": 264,
  "macros": {
    "protein": 10,
    "fat": 18,
    "carbs": 19
  }
}, {
  "name": "Chutney śliwkowo-imbirowy",
  "weight": [30],
  "calories": 67,
  "macros": {
    "protein": 1,
    "fat": 0,
    "carbs": 14
  }
}, {
  "name": "Coleslaw",
  "weight": [150],
  "calories": 188,
  "macros": {
    "protein": 1,
    "fat": 18,
    "carbs": 5
  }
}, {
  "name": "Extra boczek",
  "weight": [8],
  "calories": 660,
  "macros": {
    "protein": 50,
    "fat": 50,
    "carbs": 3
  }
}, {
  "name": "Extra chilli",
  "weight": [10],
  "calories": 40,
  "macros": {
    "protein": 2,
    "fat": 0,
    "carbs": 7
  }
}, {
  "name": "Extra ser",
  "weight": [12],
  "calories": 344,
  "macros": {
    "protein": 26,
    "fat": 26,
    "carbs": 1
  }
}, {
  "name": "Gonzales - mały głód",
  "weight": [276],
  "calories": 265,
  "macros": {
    "protein": 10,
    "fat": 14,
    "carbs": 26
  }
}, {
  "name": "Gonzales - zwykły głód",
  "weight": [424],
  "calories": 252,
  "macros": {
    "protein": 11,
    "fat": 15,
    "carbs": 19
  }
}, {
  "name": "Ice Tea",
  "weight": [350],
  "calories": 45,
  "macros": {
    "protein": 0,
    "fat": 0,
    "carbs": 11
  }
}, {
  "name": "Ketchup Heinz",
  "weight": [20],
  "calories": 102,
  "macros": {
    "protein": 1,
    "fat": 0,
    "carbs": 23
  }
}, {
  "name": "Kevin - mały głód",
  "weight": [272],
  "calories": 323,
  "macros": {
    "protein": 13,
    "fat": 19,
    "carbs": 25
  }
}, {
  "name": "Kevin - zwykły głód",
  "weight": [414],
  "calories": 298,
  "macros": {
    "protein": 13,
    "fat": 19,
    "carbs": 22
  }
}, {
  "name": "Klasyk - mały głód",
  "weight": [264],
  "calories": 231,
  "macros": {
    "protein": 10,
    "fat": 13,
    "carbs": 22
  }
}, {
  "name": "Klasyk - zwykły głód",
  "weight": [415],
  "calories": 228,
  "macros": {
    "protein": 10,
    "fat": 14,
    "carbs": 20
  }
}, {
  "name": "Konfitura z czarnej porzeczki",
  "weight": [25],
  "calories": 86,
  "macros": {
    "protein": 1,
    "fat": 0,
    "carbs": 20
  }
}, {
  "name": "Kotlet Duży (Pasibrzuch)",
  "weight": [140],
  "calories": 278,
  "macros": {
    "protein": 21,
    "fat": 22,
    "carbs": 0
  }
}, {
  "name": "Kotlet Wege (duży)",
  "weight": [150],
  "calories": 287,
  "macros": {
    "protein": 8,
    "fat": 18,
    "carbs": 22
  }
}, {
  "name": "Kotlet Wege (mały)",
  "weight": [100],
  "calories": 287,
  "macros": {
    "protein": 8,
    "fat": 18,
    "carbs": 22
  }
}, {
  "name": "Kulki ostre 4szt.",
  "weight": [85],
  "calories": 326,
  "macros": {
    "protein": 17,
    "fat": 24,
    "carbs": 11
  }
}, {
  "name": "Kulki ostre 8szt.",
  "weight": [170],
  "calories": 326,
  "macros": {
    "protein": 17,
    "fat": 24,
    "carbs": 11
  }
}, {
  "name": "Kulki serowe 4szt.",
  "weight": [85],
  "calories": 355,
  "macros": {
    "protein": 20,
    "fat": 26,
    "carbs": 9
  }
}, {
  "name": "Kulki serowe 8szt.",
  "weight": [170],
  "calories": 355,
  "macros": {
    "protein": 20,
    "fat": 26,
    "carbs": 9
  }
}, {
  "name": "Kura BBQ",
  "weight": [434],
  "calories": 228,
  "macros": {
    "protein": 11,
    "fat": 12,
    "carbs": 20
  }
}, {
  "name": "Kura BBQ",
  "weight": [295],
  "calories": 228,
  "macros": {
    "protein": 11,
    "fat": 12,
    "carbs": 21
  }
}, {
  "name": "Kura Classico",
  "weight": [422],
  "calories": 217,
  "macros": {
    "protein": 11,
    "fat": 11,
    "carbs": 19
  }
}, {
  "name": "Kura Classico",
  "weight": [296],
  "calories": 205,
  "macros": {
    "protein": 11,
    "fat": 10,
    "carbs": 19
  }
}, {
  "name": "Kura Morales",
  "weight": [460],
  "calories": 240,
  "macros": {
    "protein": 12,
    "fat": 13,
    "carbs": 18
  }
}, {
  "name": "Kura Morales",
  "weight": [321],
  "calories": 238,
  "macros": {
    "protein": 13,
    "fat": 13,
    "carbs": 19
  }
}, {
  "name": "Lemoniada",
  "weight": [350],
  "calories": 72,
  "macros": {
    "protein": 0,
    "fat": 0,
    "carbs": 18
  }
}, {
  "name": "Majonez",
  "weight": [20],
  "calories": 660,
  "macros": {
    "protein": 1,
    "fat": 72,
    "carbs": 3
  }
}, {
  "name": "Mangór - mały głód",
  "weight": [268],
  "calories": 247,
  "macros": {
    "protein": 9,
    "fat": 13,
    "carbs": 24
  }
}, {
  "name": "Mangór - zwykły głód",
  "weight": [407],
  "calories": 234,
  "macros": {
    "protein": 10,
    "fat": 14,
    "carbs": 22
  }
}, {
  "name": "Masło orzechowe",
  "weight": [25],
  "calories": 668,
  "macros": {
    "protein": 28,
    "fat": 53,
    "carbs": 15
  }
}, {
  "name": "Nachosy",
  "weight": [80],
  "calories": 480,
  "macros": {
    "protein": 7,
    "fat": 22,
    "carbs": 63
  }
}, {
  "name": "Osztypek - mały głód",
  "weight": [265],
  "calories": 275,
  "macros": {
    "protein": 12,
    "fat": 16,
    "carbs": 22
  }
}, {
  "name": "Osztypek - zwykły głód",
  "weight": [414],
  "calories": 271,
  "macros": {
    "protein": 13,
    "fat": 17,
    "carbs": 20
  }
}, {
  "name": "Pasi Bataty",
  "weight": [120],
  "calories": 462,
  "macros": {
    "protein": 2,
    "fat": 24,
    "carbs": 32
  }
}, {
  "name": "Pasi Frytki",
  "weight": [130],
  "calories": 451,
  "macros": {
    "protein": 3,
    "fat": 26,
    "carbs": 31
  }
}, {
  "name": "Pasta red curry",
  "weight": [30],
  "calories": 81,
  "macros": {
    "protein": 2,
    "fat": 5,
    "carbs": 7
  }
}, {
  "name": "Pasta z suszonych pomidorów i żurawiny",
  "weight": [50],
  "calories": 211,
  "macros": {
    "protein": 3,
    "fat": 8,
    "carbs": 29
  }
}, {
  "name": "Pastuszek kurczak",
  "weight": [324],
  "calories": 329,
  "macros": {
    "protein": 14,
    "fat": 16,
    "carbs": 34
  }
}, {
  "name": "Pastuszek wołowina",
  "weight": [304],
  "calories": 337,
  "macros": {
    "protein": 12,
    "fat": 17,
    "carbs": 33
  }
}, {
  "name": "Pestardo - mały głód",
  "weight": [333],
  "calories": 227,
  "macros": {
    "protein": 11,
    "fat": 14,
    "carbs": 17
  }
}, {
  "name": "Pestardo - zwykły głód",
  "weight": [462],
  "calories": 237,
  "macros": {
    "protein": 11,
    "fat": 15,
    "carbs": 18
  }
}, {
  "name": "Pesto z suszonych pomidorów i rukoli",
  "weight": [25],
  "calories": 86,
  "macros": {
    "protein": 1,
    "fat": 0,
    "carbs": 20
  }
}, {
  "name": "Redhot - mały głód",
  "weight": [240],
  "calories": 247,
  "macros": {
    "protein": 10,
    "fat": 14,
    "carbs": 24
  }
}, {
  "name": "Redhot - zwykły głód",
  "weight": [384],
  "calories": 241,
  "macros": {
    "protein": 10,
    "fat": 15,
    "carbs": 22
  }
}, {
  "name": "Sałatka Kurczak",
  "weight": [340],
  "calories": 198,
  "macros": {
    "protein": 11,
    "fat": 13,
    "carbs": 8
  }
}, {
  "name": "Sałatka Tofu",
  "weight": [225],
  "calories": 238,
  "macros": {
    "protein": 9,
    "fat": 19,
    "carbs": 8
  }
}, {
  "name": "Seruś",
  "weight": [120],
  "calories": 343,
  "macros": {
    "protein": 10,
    "fat": 11,
    "carbs": 51
  }
}, {
  "name": "Sos BBQ",
  "weight": [35],
  "calories": 120,
  "macros": {
    "protein": 1,
    "fat": 0,
    "carbs": 28
  }
}, {
  "name": "Sos BBQ",
  "weight": [25],
  "calories": 120,
  "macros": {
    "protein": 1,
    "fat": 0,
    "carbs": 28
  }
}, {
  "name": "Sos biały",
  "weight": [35],
  "calories": 502,
  "macros": {
    "protein": 2,
    "fat": 52,
    "carbs": 5
  }
}, {
  "name": "Sos biały",
  "weight": [60],
  "calories": 502,
  "macros": {
    "protein": 2,
    "fat": 52,
    "carbs": 5
  }
}, {
  "name": "Sos mango-chilli",
  "weight": [35],
  "calories": 86,
  "macros": {
    "protein": 1,
    "fat": 0,
    "carbs": 20
  }
}, {
  "name": "Sos mango-chilli",
  "weight": [25],
  "calories": 86,
  "macros": {
    "protein": 1,
    "fat": 0,
    "carbs": 20
  }
}, {
  "name": "Sos musztardowo-miodowy",
  "weight": [18],
  "calories": 573,
  "macros": {
    "protein": 3,
    "fat": 54,
    "carbs": 17
  }
}, {
  "name": "Sos pomidorowo-bazyliowy",
  "weight": [25],
  "calories": 86,
  "macros": {
    "protein": 1,
    "fat": 0,
    "carbs": 20
  }
}, {
  "name": "Sos różowy",
  "weight": [35],
  "calories": 484,
  "macros": {
    "protein": 1,
    "fat": 48,
    "carbs": 12
  }
}, {
  "name": "Sos różowy",
  "weight": [60],
  "calories": 484,
  "macros": {
    "protein": 1,
    "fat": 48,
    "carbs": 12
  }
}, {
  "name": "Standard - mały głód",
  "weight": [315],
  "calories": 202,
  "macros": {
    "protein": 9,
    "fat": 12,
    "carbs": 17
  }
}, {
  "name": "Standard - zwykły głód",
  "weight": [454],
  "calories": 214,
  "macros": {
    "protein": 9,
    "fat": 13,
    "carbs": 17
  }
}, {
  "name": "Stripsy",
  "weight": [200],
  "calories": 358,
  "macros": {
    "protein": 16,
    "fat": 19,
    "carbs": 29
  }
}, {
  "name": "Wiesio - mały głód",
  "weight": [353],
  "calories": 201,
  "macros": {
    "protein": 9,
    "fat": 11,
    "carbs": 15
  }
}, {
  "name": "Wiesio - zwykły głód",
  "weight": [492],
  "calories": 205,
  "macros": {
    "protein": 10,
    "fat": 12,
    "carbs": 16
  }
}, {
  "name": "Włoski Pastuch - mały głód",
  "weight": [226],
  "calories": 299,
  "macros": {
    "protein": 12,
    "fat": 17,
    "carbs": 24
  }
}, {
  "name": "Włoski Pastuch - zwykły głód",
  "weight": [360],
  "calories": 283,
  "macros": {
    "protein": 13,
    "fat": 17,
    "carbs": 23
  }
}, {
  "name": "Zielsko",
  "weight": [75],
  "calories": 99,
  "macros": {
    "protein": 5,
    "fat": 15,
    "carbs": 4
  }
}];
},{}],"data/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataset = exports.companies = void 0;

var _bobbyburger = _interopRequireDefault(require("./bobbyburger.json"));

var _dagrasso = _interopRequireDefault(require("./dagrasso.json"));

var _goodlood = _interopRequireDefault(require("./goodlood.json"));

var _lajkonik = _interopRequireDefault(require("./lajkonik.json"));

var _pasibus = _interopRequireDefault(require("./pasibus.json"));

var _companies;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var companies = (_companies = {}, _defineProperty(_companies, "Bobby Burger", _bobbyburger.default), _defineProperty(_companies, "DaGrasso", _dagrasso.default), _defineProperty(_companies, "GoodLood", _goodlood.default), _defineProperty(_companies, "Lajkonik", _lajkonik.default), _defineProperty(_companies, "Pasibus", _pasibus.default), _companies);
exports.companies = companies;
var dataset = Object.keys(companies).map(function (company) {
  return companies[company].map(function (v) {
    return _objectSpread({
      company: company
    }, v);
  });
}).flat();
exports.dataset = dataset;
},{"./bobbyburger.json":"data/bobbyburger.json","./dagrasso.json":"data/dagrasso.json","./goodlood.json":"data/goodlood.json","./lajkonik.json":"data/lajkonik.json","./pasibus.json":"data/pasibus.json"}],"index.js":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _data = require("./data");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NO_DATA = "—";
var SEPARATOR = " / ";
var CORRECTNESS_THRESHOLD = 15;

function unify(input) {
  return input.toLowerCase().replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e").replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o").replace(/ś/g, "s").replace(/ż/g, "z").replace(/ź/g, "z");
}

var Item =
/*#__PURE__*/
function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          company = _this$props$data.company,
          name = _this$props$data.name,
          weight = _this$props$data.weight,
          calories = _this$props$data.calories,
          _this$props$data$macr = _this$props$data.macros,
          protein = _this$props$data$macr.protein,
          fat = _this$props$data$macr.fat,
          carbs = _this$props$data$macr.carbs;
      var hasMissingMacro = protein === null || fat === null || carbs === null;
      var caloriesFromMacros = hasMissingMacro ? NO_DATA : Math.round(protein * 4 + fat * 9 + carbs * 4);
      var caloriesPerPortion = weight.map(function (weight) {
        return Math.round(calories * (weight / 100));
      }).join(SEPARATOR);
      var caloriesFromMacrosPerPortion = hasMissingMacro ? NO_DATA : weight.map(function (weight) {
        return Math.round(caloriesFromMacros * (weight / 100));
      }).join(SEPARATOR);
      var hasIncorrectMacros = caloriesFromMacros < calories - CORRECTNESS_THRESHOLD || caloriesFromMacros > calories + CORRECTNESS_THRESHOLD;
      return (0, _preact.h)("tr", {
        class: hasIncorrectMacros && "incorrect-macros"
      }, (0, _preact.h)("td", null, company), (0, _preact.h)("td", null, name), (0, _preact.h)("td", null, weight.map(function (w) {
        return Math.round(w);
      }).join(SEPARATOR) || NO_DATA), (0, _preact.h)("td", null, protein === null ? NO_DATA : Math.round(protein * 10) / 10), (0, _preact.h)("td", null, fat === null ? NO_DATA : Math.round(fat * 10) / 10), (0, _preact.h)("td", null, carbs === null ? NO_DATA : Math.round(carbs * 10) / 10), (0, _preact.h)("td", null, calories === null ? NO_DATA : Math.round(calories)), (0, _preact.h)("td", null, caloriesFromMacros), (0, _preact.h)("td", null, caloriesPerPortion || NO_DATA), (0, _preact.h)("td", null, caloriesFromMacrosPerPortion || NO_DATA));
    }
  }]);

  return Item;
}(_preact.Component);

var NoItems =
/*#__PURE__*/
function (_Component2) {
  _inherits(NoItems, _Component2);

  function NoItems() {
    _classCallCheck(this, NoItems);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoItems).apply(this, arguments));
  }

  _createClass(NoItems, [{
    key: "render",
    value: function render() {
      return (0, _preact.h)("tr", null, (0, _preact.h)("td", {
        colspan: "10"
      }, "No matched items"));
    }
  }]);

  return NoItems;
}(_preact.Component);

var App =
/*#__PURE__*/
function (_Component3) {
  _inherits(App, _Component3);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      filter: ""
    });

    _defineProperty(_assertThisInitialized(_this), "onInput", function (ev) {
      _this.setState({
        filter: ev.target.value
      });
    });

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = _data.dataset.filter(function (item) {
        return _this2.state.filter.split(" ").every(function (word) {
          return unify(item.name).includes(unify(word)) || unify(item.company).includes(unify(word));
        });
      });

      return (0, _preact.h)("div", null, (0, _preact.h)("h1", {
        class: "title"
      }, "Food Nutrition Database"), (0, _preact.h)("h2", {
        class: "subtitle"
      }, (0, _preact.h)("strong", null, "Available datasets:"), " ", _data.companies), (0, _preact.h)("section", null, (0, _preact.h)("p", null, "- ", (0, _preact.h)("i", null, "C - calories")), (0, _preact.h)("p", null, "- ", (0, _preact.h)("i", null, "CC - calculated calories")), (0, _preact.h)("p", null, "- ", (0, _preact.h)("i", null, "CPP - calories per portion")), (0, _preact.h)("p", null, "- ", (0, _preact.h)("i", null, "CCPP - calculated calories per portion")), (0, _preact.h)("p", null, "- items that are missing weight, are already showing per-portion data"), (0, _preact.h)("p", null, "- items marked as yellow has a large difference between declared and calculated calories amount")), (0, _preact.h)("input", {
        class: "input is-medium",
        placeholder: "Filter",
        type: "text",
        value: this.state.value,
        onInput: this.onInput
      }), (0, _preact.h)("table", {
        class: "table is-striped is-hoverable is-fullwidth"
      }, (0, _preact.h)("thead", null, (0, _preact.h)("tr", null, (0, _preact.h)("th", null, "Company"), (0, _preact.h)("th", null, "Name"), (0, _preact.h)("th", null, "Weight/g"), (0, _preact.h)("th", null, "Protein/g"), (0, _preact.h)("th", null, "Fat/g"), (0, _preact.h)("th", null, "Carbs/g"), (0, _preact.h)("th", null, "C/kcal"), (0, _preact.h)("th", null, "CC/kcal"), (0, _preact.h)("th", null, "CPP/kcal"), (0, _preact.h)("th", null, "CCPP/kcal"))), (0, _preact.h)("tbody", null, items.length ? items.map(function (item) {
        return (0, _preact.h)(Item, {
          data: item
        });
      }) : (0, _preact.h)(NoItems, null))));
    }
  }]);

  return App;
}(_preact.Component);

(0, _preact.render)((0, _preact.h)(App, null), document.body);
},{"preact":"node_modules/preact/dist/preact.module.js","./data":"data/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60987" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/nutrition-database.e31bb0bc.js.map