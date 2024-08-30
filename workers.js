define("pdic-workers/@babel/runtime/helpers/assertThisInitialized.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    module.exports = _assertThisInitialized;
});
define("pdic-workers/@babel/runtime/helpers/classCallCheck.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _classCallCheck(a, l) {
        if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function")
    }
    module.exports = _classCallCheck;
});
define("pdic-workers/@babel/runtime/helpers/createClass.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _defineProperties(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function _createClass(e, r, t) {
        return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), e
    }
    module.exports = _createClass;
});
define("pdic-workers/@babel/runtime/helpers/createSuper.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var getPrototypeOf = require("./getPrototypeOf"),
        isNativeReflectConstruct = require("./isNativeReflectConstruct"),
        possibleConstructorReturn = require("./possibleConstructorReturn");

    function _createSuper(t) {
        var e = isNativeReflectConstruct();
        return function() {
            var r, o = getPrototypeOf(t);
            if (e) {
                var s = getPrototypeOf(this).constructor;
                r = Reflect.construct(o, arguments, s)
            } else r = o.apply(this, arguments);
            return possibleConstructorReturn(this, r)
        }
    }
    module.exports = _createSuper;
});
define("pdic-workers/@babel/runtime/helpers/getPrototypeOf.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _getPrototypeOf(t) {
        return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, _getPrototypeOf(t)
    }
    module.exports = _getPrototypeOf;
});
define("pdic-workers/@babel/runtime/helpers/inherits.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var setPrototypeOf = require("./setPrototypeOf");

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && setPrototypeOf(e, t)
    }
    module.exports = _inherits;
});
define("pdic-workers/@babel/runtime/helpers/interopRequireDefault.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    module.exports = _interopRequireDefault;
});
define("pdic-workers/@babel/runtime/helpers/isNativeReflectConstruct.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (t) {
            return !1
        }
    }
    module.exports = _isNativeReflectConstruct;
});
define("pdic-workers/@babel/runtime/helpers/possibleConstructorReturn.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var _typeof = require("./typeof"),
        assertThisInitialized = require("./assertThisInitialized");

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? assertThisInitialized(e) : t
    }
    module.exports = _possibleConstructorReturn;
});
define("pdic-workers/@babel/runtime/helpers/setPrototypeOf.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _setPrototypeOf(t, o) {
        return module.exports = _setPrototypeOf = Object.setPrototypeOf || function(t, o) {
            return t.__proto__ = o, t
        }, _setPrototypeOf(t, o)
    }
    module.exports = _setPrototypeOf;
});
define("pdic-workers/@babel/runtime/helpers/typeof.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _typeof(o) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? module.exports = _typeof = function(o) {
            return typeof o
        } : module.exports = _typeof = function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
        }, _typeof(o)
    }
    module.exports = _typeof;
});
define("pdic-workers/@babel/runtime/regenerator.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    ! function(t) {
        "use strict";
        var r, e = Object.prototype,
            n = e.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag",
            u = "object" == typeof module,
            h = t.regeneratorRuntime;
        if (h) u && (module.exports = h);
        else {
            (h = t.regeneratorRuntime = u ? module.exports : {}).wrap = w;
            var f = "suspendedStart",
                s = "suspendedYield",
                l = "executing",
                p = "completed",
                y = {},
                v = {};
            v[i] = function() {
                return this
            };
            var d = Object.getPrototypeOf,
                g = d && d(d(P([])));
            g && g !== e && n.call(g, i) && (v = g);
            var m = b.prototype = x.prototype = Object.create(v);
            E.prototype = m.constructor = b, b.constructor = E, b[c] = E.displayName = "GeneratorFunction", h.isGeneratorFunction = function(t) {
                var r = "function" == typeof t && t.constructor;
                return !!r && (r === E || "GeneratorFunction" === (r.displayName || r.name))
            }, h.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(m), t
            }, h.awrap = function(t) {
                return {
                    __await: t
                }
            }, _(j.prototype), j.prototype[a] = function() {
                return this
            }, h.AsyncIterator = j, h.async = function(t, r, e, n) {
                var o = new j(w(t, r, e, n));
                return h.isGeneratorFunction(r) ? o : o.next().then(function(t) {
                    return t.done ? t.value : o.next()
                })
            }, _(m), m[c] = "Generator", m[i] = function() {
                return this
            }, m.toString = function() {
                return "[object Generator]"
            }, h.keys = function(t) {
                var r = [];
                for (var e in t) r.push(e);
                return r.reverse(),
                    function e() {
                        for (; r.length;) {
                            var n = r.pop();
                            if (n in t) return e.value = n, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, h.values = P, N.prototype = {
                constructor: N,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(G), !t)
                        for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;

                    function o(n, o) {
                        return c.type = "throw", c.arg = t, e.next = n, o && (e.method = "next", e.arg = r), !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc"),
                                h = n.call(a, "finallyLoc");
                            if (u && h) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                            } else {
                                if (!h) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, r) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a)
                },
                complete: function(t, r) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), y
                },
                finish: function(t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var e = this.tryEntries[r];
                        if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), G(e), y
                    }
                },
                catch: function(t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var e = this.tryEntries[r];
                        if (e.tryLoc === t) {
                            var n = e.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                G(e)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: P(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = r), y
                }
            }
        }

        function w(t, r, e, n) {
            var o = r && r.prototype instanceof x ? r : x,
                i = Object.create(o.prototype),
                a = new N(n || []);
            return i._invoke = function(t, r, e) {
                var n = f;
                return function(o, i) {
                    if (n === l) throw new Error("Generator is already running");
                    if (n === p) {
                        if ("throw" === o) throw i;
                        return F()
                    }
                    for (e.method = o, e.arg = i;;) {
                        var a = e.delegate;
                        if (a) {
                            var c = O(a, e);
                            if (c) {
                                if (c === y) continue;
                                return c
                            }
                        }
                        if ("next" === e.method) e.sent = e._sent = e.arg;
                        else if ("throw" === e.method) {
                            if (n === f) throw n = p, e.arg;
                            e.dispatchException(e.arg)
                        } else "return" === e.method && e.abrupt("return", e.arg);
                        n = l;
                        var u = L(t, r, e);
                        if ("normal" === u.type) {
                            if (n = e.done ? p : s, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: e.done
                            }
                        }
                        "throw" === u.type && (n = p, e.method = "throw", e.arg = u.arg)
                    }
                }
            }(t, e, a), i
        }

        function L(t, r, e) {
            try {
                return {
                    type: "normal",
                    arg: t.call(r, e)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }

        function x() {}

        function E() {}

        function b() {}

        function _(t) {
            ["next", "throw", "return"].forEach(function(r) {
                t[r] = function(t) {
                    return this._invoke(r, t)
                }
            })
        }

        function j(t) {
            var r;
            this._invoke = function(e, o) {
                function i() {
                    return new Promise(function(r, i) {
                        ! function r(e, o, i, a) {
                            var c = L(t[e], t, o);
                            if ("throw" !== c.type) {
                                var u = c.arg,
                                    h = u.value;
                                return h && "object" == typeof h && n.call(h, "__await") ? Promise.resolve(h.__await).then(function(t) {
                                    r("next", t, i, a)
                                }, function(t) {
                                    r("throw", t, i, a)
                                }) : Promise.resolve(h).then(function(t) {
                                    u.value = t, i(u)
                                }, function(t) {
                                    return r("throw", t, i, a)
                                })
                            }
                            a(c.arg)
                        }(e, o, r, i)
                    })
                }
                return r = r ? r.then(i, i) : i()
            }
        }

        function O(t, e) {
            var n = t.iterator[e.method];
            if (n === r) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = r, O(t, e), "throw" === e.method)) return y;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return y
            }
            var o = L(n, t.iterator, e.arg);
            if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, y;
            var i = o.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, y) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, y)
        }

        function k(t) {
            var r = {
                tryLoc: t[0]
            };
            1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
        }

        function G(t) {
            var r = t.completion || {};
            r.type = "normal", delete r.arg, t.completion = r
        }

        function N(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(k, this), this.reset(!0)
        }

        function P(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var o = -1,
                        a = function e() {
                            for (; ++o < t.length;)
                                if (n.call(t, o)) return e.value = t[o], e.done = !1, e;
                            return e.value = r, e.done = !0, e
                        };
                    return a.next = a
                }
            }
            return {
                next: F
            }
        }

        function F() {
            return {
                value: r,
                done: !0
            }
        }
    }(function() {
        return this || "object" == typeof self && self
    }() || Function("return this")());
});
define("pdic-workers/buffer.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../pdic-workers/@babel/runtime/helpers/classCallCheck"),
        r = require("../pdic-workers/@babel/runtime/helpers/createClass"),
        e = require("../pdic-workers/@babel/runtime/helpers/assertThisInitialized"),
        n = require("../pdic-workers/@babel/runtime/helpers/inherits"),
        i = require("../pdic-workers/@babel/runtime/helpers/createSuper"),
        o = require("../pdic-workers/@babel/runtime/helpers/typeof");
    ! function(t) {
        "object" == ("undefined" == typeof exports ? "undefined" : o(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).buffer = t()
    }((function() {
        return function t(r, e, n) {
            function i(f, u) {
                if (!e[f]) {
                    if (!r[f]) {
                        var s = "function" == typeof require && require;
                        if (!u && s) return s(f, !0);
                        if (o) return o(f, !0);
                        var a = new Error("Cannot find module '" + f + "'");
                        throw a.code = "MODULE_NOT_FOUND", a
                    }
                    var h = e[f] = {
                        exports: {}
                    };
                    r[f][0].call(h.exports, (function(t) {
                        return i(r[f][1][t] || t)
                    }), h, h.exports, t, r, e, n)
                }
                return e[f].exports
            }
            for (var o = "function" == typeof require && require, f = 0; f < n.length; f++) i(n[f]);
            return i
        }({
            1: [function(t, r, e) {
                e.byteLength = function(t) {
                    var r = a(t),
                        e = r[0],
                        n = r[1];
                    return 3 * (e + n) / 4 - n
                }, e.toByteArray = function(t) {
                    var r, e, n = a(t),
                        f = n[0],
                        u = n[1],
                        s = new o(function(t, r, e) {
                            return 3 * (r + e) / 4 - e
                        }(0, f, u)),
                        h = 0,
                        c = u > 0 ? f - 4 : f;
                    for (e = 0; e < c; e += 4) r = i[t.charCodeAt(e)] << 18 | i[t.charCodeAt(e + 1)] << 12 | i[t.charCodeAt(e + 2)] << 6 | i[t.charCodeAt(e + 3)], s[h++] = r >> 16 & 255, s[h++] = r >> 8 & 255, s[h++] = 255 & r;
                    return 2 === u && (r = i[t.charCodeAt(e)] << 2 | i[t.charCodeAt(e + 1)] >> 4, s[h++] = 255 & r), 1 === u && (r = i[t.charCodeAt(e)] << 10 | i[t.charCodeAt(e + 1)] << 4 | i[t.charCodeAt(e + 2)] >> 2, s[h++] = r >> 8 & 255, s[h++] = 255 & r), s
                }, e.fromByteArray = function(t) {
                    for (var r, e = t.length, i = e % 3, o = [], f = 0, u = e - i; f < u; f += 16383) o.push(h(t, f, f + 16383 > u ? u : f + 16383));
                    return 1 === i ? (r = t[e - 1], o.push(n[r >> 2] + n[r << 4 & 63] + "==")) : 2 === i && (r = (t[e - 2] << 8) + t[e - 1], o.push(n[r >> 10] + n[r >> 4 & 63] + n[r << 2 & 63] + "=")), o.join("")
                };
                for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, s = f.length; u < s; ++u) n[u] = f[u], i[f.charCodeAt(u)] = u;

                function a(t) {
                    var r = t.length;
                    if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var e = t.indexOf("=");
                    return -1 === e && (e = r), [e, e === r ? 0 : 4 - e % 4]
                }

                function h(t, r, e) {
                    for (var i, o, f = [], u = r; u < e; u += 3) i = (t[u] << 16 & 16711680) + (t[u + 1] << 8 & 65280) + (255 & t[u + 2]), f.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
                    return f.join("")
                }
                i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
            }, {}],
            2: [function(t, r, e) {
                (function(r) {
                    var n = t("base64-js"),
                        i = t("ieee754");
                    e.Buffer = r, e.SlowBuffer = function(t) {
                        return +t != t && (t = 0), r.alloc(+t)
                    }, e.INSPECT_MAX_BYTES = 50;
                    var f = 2147483647;

                    function u(t) {
                        if (t > f) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                        var e = new Uint8Array(t);
                        return e.__proto__ = r.prototype, e
                    }

                    function r(t, r, e) {
                        if ("number" == typeof t) {
                            if ("string" == typeof r) throw new TypeError('The "string" argument must be of type string. Received type number');
                            return h(t)
                        }
                        return s(t, r, e)
                    }

                    function s(t, e, n) {
                        if ("string" == typeof t) return function(t, e) {
                            if ("string" == typeof e && "" !== e || (e = "utf8"), !r.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                            var n = 0 | l(t, e),
                                i = u(n),
                                o = i.write(t, e);
                            return o !== n && (i = i.slice(0, o)), i
                        }(t, e);
                        if (ArrayBuffer.isView(t)) return c(t);
                        if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + o(t));
                        if (z(t, ArrayBuffer) || t && z(t.buffer, ArrayBuffer)) return function(t, e, n) {
                            if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                            if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                            var i;
                            return (i = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n)).__proto__ = r.prototype, i
                        }(t, e, n);
                        if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                        var i = t.valueOf && t.valueOf();
                        if (null != i && i !== t) return r.from(i, e, n);
                        var f = function(t) {
                            if (r.isBuffer(t)) {
                                var e = 0 | p(t.length),
                                    n = u(e);
                                return 0 === n.length || t.copy(n, 0, 0, e), n
                            }
                            return void 0 !== t.length ? "number" != typeof t.length || D(t.length) ? u(0) : c(t) : "Buffer" === t.type && Array.isArray(t.data) ? c(t.data) : void 0
                        }(t);
                        if (f) return f;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return r.from(t[Symbol.toPrimitive]("string"), e, n);
                        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + o(t))
                    }

                    function a(t) {
                        if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                        if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
                    }

                    function h(t) {
                        return a(t), u(t < 0 ? 0 : 0 | p(t))
                    }

                    function c(t) {
                        for (var r = t.length < 0 ? 0 : 0 | p(t.length), e = u(r), n = 0; n < r; n += 1) e[n] = 255 & t[n];
                        return e
                    }

                    function p(t) {
                        if (t >= f) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + f.toString(16) + " bytes");
                        return 0 | t
                    }

                    function l(t, e) {
                        if (r.isBuffer(t)) return t.length;
                        if (ArrayBuffer.isView(t) || z(t, ArrayBuffer)) return t.byteLength;
                        if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + o(t));
                        var n = t.length,
                            i = arguments.length > 2 && !0 === arguments[2];
                        if (!i && 0 === n) return 0;
                        for (var f = !1;;) switch (e) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return n;
                            case "utf8":
                            case "utf-8":
                                return P(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * n;
                            case "hex":
                                return n >>> 1;
                            case "base64":
                                return j(t).length;
                            default:
                                if (f) return i ? -1 : P(t).length;
                                e = ("" + e).toLowerCase(), f = !0
                        }
                    }

                    function y(t, r, e) {
                        var n = t[r];
                        t[r] = t[e], t[e] = n
                    }

                    function g(t, e, n, i, o) {
                        if (0 === t.length) return -1;
                        if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), D(n = +n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                            if (o) return -1;
                            n = t.length - 1
                        } else if (n < 0) {
                            if (!o) return -1;
                            n = 0
                        }
                        if ("string" == typeof e && (e = r.from(e, i)), r.isBuffer(e)) return 0 === e.length ? -1 : w(t, e, n, i, o);
                        if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : w(t, [e], n, i, o);
                        throw new TypeError("val must be string, number or Buffer")
                    }

                    function w(t, r, e, n, i) {
                        var o, f = 1,
                            u = t.length,
                            s = r.length;
                        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                            if (t.length < 2 || r.length < 2) return -1;
                            f = 2, u /= 2, s /= 2, e /= 2
                        }

                        function a(t, r) {
                            return 1 === f ? t[r] : t.readUInt16BE(r * f)
                        }
                        if (i) {
                            var h = -1;
                            for (o = e; o < u; o++)
                                if (a(t, o) === a(r, -1 === h ? 0 : o - h)) {
                                    if (-1 === h && (h = o), o - h + 1 === s) return h * f
                                } else -1 !== h && (o -= o - h), h = -1
                        } else
                            for (e + s > u && (e = u - s), o = e; o >= 0; o--) {
                                for (var c = !0, p = 0; p < s; p++)
                                    if (a(t, o + p) !== a(r, p)) {
                                        c = !1;
                                        break
                                    }
                                if (c) return o
                            }
                        return -1
                    }

                    function d(t, r, e, n) {
                        e = Number(e) || 0;
                        var i = t.length - e;
                        n ? (n = Number(n)) > i && (n = i) : n = i;
                        var o = r.length;
                        n > o / 2 && (n = o / 2);
                        for (var f = 0; f < n; ++f) {
                            var u = parseInt(r.substr(2 * f, 2), 16);
                            if (D(u)) return f;
                            t[e + f] = u
                        }
                        return f
                    }

                    function v(t, r, e, n) {
                        return F(P(r, t.length - e), t, e, n)
                    }

                    function b(t, r, e, n) {
                        return F(function(t) {
                            for (var r = [], e = 0; e < t.length; ++e) r.push(255 & t.charCodeAt(e));
                            return r
                        }(r), t, e, n)
                    }

                    function m(t, r, e, n) {
                        return b(t, r, e, n)
                    }

                    function E(t, r, e, n) {
                        return F(j(r), t, e, n)
                    }

                    function B(t, r, e, n) {
                        return F(function(t, r) {
                            for (var e, n, i, o = [], f = 0; f < t.length && !((r -= 2) < 0); ++f) n = (e = t.charCodeAt(f)) >> 8, i = e % 256, o.push(i), o.push(n);
                            return o
                        }(r, t.length - e), t, e, n)
                    }

                    function A(t, r, e) {
                        return 0 === r && e === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(r, e))
                    }

                    function I(t, r, e) {
                        e = Math.min(t.length, e);
                        for (var n = [], i = r; i < e;) {
                            var o, f, u, s, a = t[i],
                                h = null,
                                c = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
                            if (i + c <= e) switch (c) {
                                case 1:
                                    a < 128 && (h = a);
                                    break;
                                case 2:
                                    128 == (192 & (o = t[i + 1])) && (s = (31 & a) << 6 | 63 & o) > 127 && (h = s);
                                    break;
                                case 3:
                                    o = t[i + 1], f = t[i + 2], 128 == (192 & o) && 128 == (192 & f) && (s = (15 & a) << 12 | (63 & o) << 6 | 63 & f) > 2047 && (s < 55296 || s > 57343) && (h = s);
                                    break;
                                case 4:
                                    o = t[i + 1], f = t[i + 2], u = t[i + 3], 128 == (192 & o) && 128 == (192 & f) && 128 == (192 & u) && (s = (15 & a) << 18 | (63 & o) << 12 | (63 & f) << 6 | 63 & u) > 65535 && s < 1114112 && (h = s)
                            }
                            null === h ? (h = 65533, c = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), i += c
                        }
                        return function(t) {
                            var r = t.length;
                            if (r <= U) return String.fromCharCode.apply(String, t);
                            for (var e = "", n = 0; n < r;) e += String.fromCharCode.apply(String, t.slice(n, n += U));
                            return e
                        }(n)
                    }
                    e.kMaxLength = f, r.TYPED_ARRAY_SUPPORT = function() {
                        try {
                            var t = new Uint8Array(1);
                            return t.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function() {
                                    return 42
                                }
                            }, 42 === t.foo()
                        } catch (t) {
                            return !1
                        }
                    }(), r.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(r.prototype, "parent", {
                        enumerable: !0,
                        get: function() {
                            if (r.isBuffer(this)) return this.buffer
                        }
                    }), Object.defineProperty(r.prototype, "offset", {
                        enumerable: !0,
                        get: function() {
                            if (r.isBuffer(this)) return this.byteOffset
                        }
                    }), "undefined" != typeof Symbol && null != Symbol.species && r[Symbol.species] === r && Object.defineProperty(r, Symbol.species, {
                        value: null,
                        configurable: !0,
                        enumerable: !1,
                        writable: !1
                    }), r.poolSize = 8192, r.from = function(t, r, e) {
                        return s(t, r, e)
                    }, r.prototype.__proto__ = Uint8Array.prototype, r.__proto__ = Uint8Array, r.alloc = function(t, r, e) {
                        return function(t, r, e) {
                            return a(t), t <= 0 ? u(t) : void 0 !== r ? "string" == typeof e ? u(t).fill(r, e) : u(t).fill(r) : u(t)
                        }(t, r, e)
                    }, r.allocUnsafe = function(t) {
                        return h(t)
                    }, r.allocUnsafeSlow = function(t) {
                        return h(t)
                    }, r.isBuffer = function(t) {
                        return null != t && !0 === t._isBuffer && t !== r.prototype
                    }, r.compare = function(t, e) {
                        if (z(t, Uint8Array) && (t = r.from(t, t.offset, t.byteLength)), z(e, Uint8Array) && (e = r.from(e, e.offset, e.byteLength)), !r.isBuffer(t) || !r.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (t === e) return 0;
                        for (var n = t.length, i = e.length, o = 0, f = Math.min(n, i); o < f; ++o)
                            if (t[o] !== e[o]) {
                                n = t[o], i = e[o];
                                break
                            }
                        return n < i ? -1 : i < n ? 1 : 0
                    }, r.isEncoding = function(t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, r.concat = function(t, e) {
                        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return r.alloc(0);
                        var n;
                        if (void 0 === e)
                            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                        var i = r.allocUnsafe(e),
                            o = 0;
                        for (n = 0; n < t.length; ++n) {
                            var f = t[n];
                            if (z(f, Uint8Array) && (f = r.from(f)), !r.isBuffer(f)) throw new TypeError('"list" argument must be an Array of Buffers');
                            f.copy(i, o), o += f.length
                        }
                        return i
                    }, r.byteLength = l, r.prototype._isBuffer = !0, r.prototype.swap16 = function() {
                        var t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var r = 0; r < t; r += 2) y(this, r, r + 1);
                        return this
                    }, r.prototype.swap32 = function() {
                        var t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var r = 0; r < t; r += 4) y(this, r, r + 3), y(this, r + 1, r + 2);
                        return this
                    }, r.prototype.swap64 = function() {
                        var t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var r = 0; r < t; r += 8) y(this, r, r + 7), y(this, r + 1, r + 6), y(this, r + 2, r + 5), y(this, r + 3, r + 4);
                        return this
                    }, r.prototype.toString = function() {
                        var t = this.length;
                        return 0 === t ? "" : 0 === arguments.length ? I(this, 0, t) : function(t, r, e) {
                            var n = !1;
                            if ((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
                            if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
                            if ((e >>>= 0) <= (r >>>= 0)) return "";
                            for (t || (t = "utf8");;) switch (t) {
                                case "hex":
                                    return _(this, r, e);
                                case "utf8":
                                case "utf-8":
                                    return I(this, r, e);
                                case "ascii":
                                    return T(this, r, e);
                                case "latin1":
                                case "binary":
                                    return R(this, r, e);
                                case "base64":
                                    return A(this, r, e);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return L(this, r, e);
                                default:
                                    if (n) throw new TypeError("Unknown encoding: " + t);
                                    t = (t + "").toLowerCase(), n = !0
                            }
                        }.apply(this, arguments)
                    }, r.prototype.toLocaleString = r.prototype.toString, r.prototype.equals = function(t) {
                        if (!r.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === r.compare(this, t)
                    }, r.prototype.inspect = function() {
                        var t = "",
                            r = e.INSPECT_MAX_BYTES;
                        return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
                    }, r.prototype.compare = function(t, e, n, i, f) {
                        if (z(t, Uint8Array) && (t = r.from(t, t.offset, t.byteLength)), !r.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + o(t));
                        if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === i && (i = 0), void 0 === f && (f = this.length), e < 0 || n > t.length || i < 0 || f > this.length) throw new RangeError("out of range index");
                        if (i >= f && e >= n) return 0;
                        if (i >= f) return -1;
                        if (e >= n) return 1;
                        if (this === t) return 0;
                        for (var u = (f >>>= 0) - (i >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(u, s), h = this.slice(i, f), c = t.slice(e, n), p = 0; p < a; ++p)
                            if (h[p] !== c[p]) {
                                u = h[p], s = c[p];
                                break
                            }
                        return u < s ? -1 : s < u ? 1 : 0
                    }, r.prototype.includes = function(t, r, e) {
                        return -1 !== this.indexOf(t, r, e)
                    }, r.prototype.indexOf = function(t, r, e) {
                        return g(this, t, r, e, !0)
                    }, r.prototype.lastIndexOf = function(t, r, e) {
                        return g(this, t, r, e, !1)
                    }, r.prototype.write = function(t, r, e, n) {
                        if (void 0 === r) n = "utf8", e = this.length, r = 0;
                        else if (void 0 === e && "string" == typeof r) n = r, e = this.length, r = 0;
                        else {
                            if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            r >>>= 0, isFinite(e) ? (e >>>= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0)
                        }
                        var i = this.length - r;
                        if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        for (var o = !1;;) switch (n) {
                            case "hex":
                                return d(this, t, r, e);
                            case "utf8":
                            case "utf-8":
                                return v(this, t, r, e);
                            case "ascii":
                                return b(this, t, r, e);
                            case "latin1":
                            case "binary":
                                return m(this, t, r, e);
                            case "base64":
                                return E(this, t, r, e);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return B(this, t, r, e);
                            default:
                                if (o) throw new TypeError("Unknown encoding: " + n);
                                n = ("" + n).toLowerCase(), o = !0
                        }
                    }, r.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    };
                    var U = 4096;

                    function T(t, r, e) {
                        var n = "";
                        e = Math.min(t.length, e);
                        for (var i = r; i < e; ++i) n += String.fromCharCode(127 & t[i]);
                        return n
                    }

                    function R(t, r, e) {
                        var n = "";
                        e = Math.min(t.length, e);
                        for (var i = r; i < e; ++i) n += String.fromCharCode(t[i]);
                        return n
                    }

                    function _(t, r, e) {
                        var n = t.length;
                        (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
                        for (var i = "", o = r; o < e; ++o) i += N(t[o]);
                        return i
                    }

                    function L(t, r, e) {
                        for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                        return i
                    }

                    function S(t, r, e) {
                        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                        if (t + r > e) throw new RangeError("Trying to access beyond buffer length")
                    }

                    function O(t, e, n, i, o, f) {
                        if (!r.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (e > o || e < f) throw new RangeError('"value" argument is out of bounds');
                        if (n + i > t.length) throw new RangeError("Index out of range")
                    }

                    function C(t, r, e, n, i, o) {
                        if (e + n > t.length) throw new RangeError("Index out of range");
                        if (e < 0) throw new RangeError("Index out of range")
                    }

                    function M(t, r, e, n, o) {
                        return r = +r, e >>>= 0, o || C(t, 0, e, 4), i.write(t, r, e, n, 23, 4), e + 4
                    }

                    function x(t, r, e, n, o) {
                        return r = +r, e >>>= 0, o || C(t, 0, e, 8), i.write(t, r, e, n, 52, 8), e + 8
                    }
                    r.prototype.slice = function(t, e) {
                        var n = this.length;
                        (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
                        var i = this.subarray(t, e);
                        return i.__proto__ = r.prototype, i
                    }, r.prototype.readUIntLE = function(t, r, e) {
                        t >>>= 0, r >>>= 0, e || S(t, r, this.length);
                        for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) n += this[t + o] * i;
                        return n
                    }, r.prototype.readUIntBE = function(t, r, e) {
                        t >>>= 0, r >>>= 0, e || S(t, r, this.length);
                        for (var n = this[t + --r], i = 1; r > 0 && (i *= 256);) n += this[t + --r] * i;
                        return n
                    }, r.prototype.readUInt8 = function(t, r) {
                        return t >>>= 0, r || S(t, 1, this.length), this[t]
                    }, r.prototype.readUInt16LE = function(t, r) {
                        return t >>>= 0, r || S(t, 2, this.length), this[t] | this[t + 1] << 8
                    }, r.prototype.readUInt16BE = function(t, r) {
                        return t >>>= 0, r || S(t, 2, this.length), this[t] << 8 | this[t + 1]
                    }, r.prototype.readUInt32LE = function(t, r) {
                        return t >>>= 0, r || S(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                    }, r.prototype.readUInt32BE = function(t, r) {
                        return t >>>= 0, r || S(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                    }, r.prototype.readIntLE = function(t, r, e) {
                        t >>>= 0, r >>>= 0, e || S(t, r, this.length);
                        for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) n += this[t + o] * i;
                        return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n
                    }, r.prototype.readIntBE = function(t, r, e) {
                        t >>>= 0, r >>>= 0, e || S(t, r, this.length);
                        for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
                        return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o
                    }, r.prototype.readInt8 = function(t, r) {
                        return t >>>= 0, r || S(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                    }, r.prototype.readInt16LE = function(t, r) {
                        t >>>= 0, r || S(t, 2, this.length);
                        var e = this[t] | this[t + 1] << 8;
                        return 32768 & e ? 4294901760 | e : e
                    }, r.prototype.readInt16BE = function(t, r) {
                        t >>>= 0, r || S(t, 2, this.length);
                        var e = this[t + 1] | this[t] << 8;
                        return 32768 & e ? 4294901760 | e : e
                    }, r.prototype.readInt32LE = function(t, r) {
                        return t >>>= 0, r || S(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                    }, r.prototype.readInt32BE = function(t, r) {
                        return t >>>= 0, r || S(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                    }, r.prototype.readFloatLE = function(t, r) {
                        return t >>>= 0, r || S(t, 4, this.length), i.read(this, t, !0, 23, 4)
                    }, r.prototype.readFloatBE = function(t, r) {
                        return t >>>= 0, r || S(t, 4, this.length), i.read(this, t, !1, 23, 4)
                    }, r.prototype.readDoubleLE = function(t, r) {
                        return t >>>= 0, r || S(t, 8, this.length), i.read(this, t, !0, 52, 8)
                    }, r.prototype.readDoubleBE = function(t, r) {
                        return t >>>= 0, r || S(t, 8, this.length), i.read(this, t, !1, 52, 8)
                    }, r.prototype.writeUIntLE = function(t, r, e, n) {
                        t = +t, r >>>= 0, e >>>= 0, n || O(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                        var i = 1,
                            o = 0;
                        for (this[r] = 255 & t; ++o < e && (i *= 256);) this[r + o] = t / i & 255;
                        return r + e
                    }, r.prototype.writeUIntBE = function(t, r, e, n) {
                        t = +t, r >>>= 0, e >>>= 0, n || O(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                        var i = e - 1,
                            o = 1;
                        for (this[r + i] = 255 & t; --i >= 0 && (o *= 256);) this[r + i] = t / o & 255;
                        return r + e
                    }, r.prototype.writeUInt8 = function(t, r, e) {
                        return t = +t, r >>>= 0, e || O(this, t, r, 1, 255, 0), this[r] = 255 & t, r + 1
                    }, r.prototype.writeUInt16LE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || O(this, t, r, 2, 65535, 0), this[r] = 255 & t, this[r + 1] = t >>> 8, r + 2
                    }, r.prototype.writeUInt16BE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || O(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = 255 & t, r + 2
                    }, r.prototype.writeUInt32LE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || O(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t, r + 4
                    }, r.prototype.writeUInt32BE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || O(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t, r + 4
                    }, r.prototype.writeIntLE = function(t, r, e, n) {
                        if (t = +t, r >>>= 0, !n) {
                            var i = Math.pow(2, 8 * e - 1);
                            O(this, t, r, e, i - 1, -i)
                        }
                        var o = 0,
                            f = 1,
                            u = 0;
                        for (this[r] = 255 & t; ++o < e && (f *= 256);) t < 0 && 0 === u && 0 !== this[r + o - 1] && (u = 1), this[r + o] = (t / f >> 0) - u & 255;
                        return r + e
                    }, r.prototype.writeIntBE = function(t, r, e, n) {
                        if (t = +t, r >>>= 0, !n) {
                            var i = Math.pow(2, 8 * e - 1);
                            O(this, t, r, e, i - 1, -i)
                        }
                        var o = e - 1,
                            f = 1,
                            u = 0;
                        for (this[r + o] = 255 & t; --o >= 0 && (f *= 256);) t < 0 && 0 === u && 0 !== this[r + o + 1] && (u = 1), this[r + o] = (t / f >> 0) - u & 255;
                        return r + e
                    }, r.prototype.writeInt8 = function(t, r, e) {
                        return t = +t, r >>>= 0, e || O(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[r] = 255 & t, r + 1
                    }, r.prototype.writeInt16LE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || O(this, t, r, 2, 32767, -32768), this[r] = 255 & t, this[r + 1] = t >>> 8, r + 2
                    }, r.prototype.writeInt16BE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || O(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, this[r + 1] = 255 & t, r + 2
                    }, r.prototype.writeInt32LE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || O(this, t, r, 4, 2147483647, -2147483648), this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4
                    }, r.prototype.writeInt32BE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || O(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t, r + 4
                    }, r.prototype.writeFloatLE = function(t, r, e) {
                        return M(this, t, r, !0, e)
                    }, r.prototype.writeFloatBE = function(t, r, e) {
                        return M(this, t, r, !1, e)
                    }, r.prototype.writeDoubleLE = function(t, r, e) {
                        return x(this, t, r, !0, e)
                    }, r.prototype.writeDoubleBE = function(t, r, e) {
                        return x(this, t, r, !1, e)
                    }, r.prototype.copy = function(t, e, n, i) {
                        if (!r.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                        if (n || (n = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < n && (i = n), i === n) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw new RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                        if (i < 0) throw new RangeError("sourceEnd out of bounds");
                        i > this.length && (i = this.length), t.length - e < i - n && (i = t.length - e + n);
                        var o = i - n;
                        if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, n, i);
                        else if (this === t && n < e && e < i)
                            for (var f = o - 1; f >= 0; --f) t[f + e] = this[f + n];
                        else Uint8Array.prototype.set.call(t, this.subarray(n, i), e);
                        return o
                    }, r.prototype.fill = function(t, e, n, i) {
                        if ("string" == typeof t) {
                            if ("string" == typeof e ? (i = e, e = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                            if ("string" == typeof i && !r.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
                            if (1 === t.length) {
                                var o = t.charCodeAt(0);
                                ("utf8" === i && o < 128 || "latin1" === i) && (t = o)
                            }
                        } else "number" == typeof t && (t &= 255);
                        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                        if (n <= e) return this;
                        var f;
                        if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                            for (f = e; f < n; ++f) this[f] = t;
                        else {
                            var u = r.isBuffer(t) ? t : r.from(t, i),
                                s = u.length;
                            if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                            for (f = 0; f < n - e; ++f) this[f + e] = u[f % s]
                        }
                        return this
                    };
                    var k = /[^+\/0-9A-Za-z-_]/g;

                    function N(t) {
                        return t < 16 ? "0" + t.toString(16) : t.toString(16)
                    }

                    function P(t, r) {
                        var e;
                        r = r || 1 / 0;
                        for (var n = t.length, i = null, o = [], f = 0; f < n; ++f) {
                            if ((e = t.charCodeAt(f)) > 55295 && e < 57344) {
                                if (!i) {
                                    if (e > 56319) {
                                        (r -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    if (f + 1 === n) {
                                        (r -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    i = e;
                                    continue
                                }
                                if (e < 56320) {
                                    (r -= 3) > -1 && o.push(239, 191, 189), i = e;
                                    continue
                                }
                                e = 65536 + (i - 55296 << 10 | e - 56320)
                            } else i && (r -= 3) > -1 && o.push(239, 191, 189);
                            if (i = null, e < 128) {
                                if ((r -= 1) < 0) break;
                                o.push(e)
                            } else if (e < 2048) {
                                if ((r -= 2) < 0) break;
                                o.push(e >> 6 | 192, 63 & e | 128)
                            } else if (e < 65536) {
                                if ((r -= 3) < 0) break;
                                o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                            } else {
                                if (!(e < 1114112)) throw new Error("Invalid code point");
                                if ((r -= 4) < 0) break;
                                o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                            }
                        }
                        return o
                    }

                    function j(t) {
                        return n.toByteArray(function(t) {
                            if ((t = (t = t.split("=")[0]).trim().replace(k, "")).length < 2) return "";
                            for (; t.length % 4 != 0;) t += "=";
                            return t
                        }(t))
                    }

                    function F(t, r, e, n) {
                        for (var i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i) r[i + e] = t[i];
                        return i
                    }

                    function z(t, r) {
                        return t instanceof r || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === r.name
                    }

                    function D(t) {
                        return t != t
                    }
                }).call(this, t("buffer").Buffer)
            }, {
                "base64-js": 1,
                buffer: 2,
                ieee754: 3
            }],
            3: [function(t, r, e) {
                e.read = function(t, r, e, n, i) {
                    var o, f, u = 8 * i - n - 1,
                        s = (1 << u) - 1,
                        a = s >> 1,
                        h = -7,
                        c = e ? i - 1 : 0,
                        p = e ? -1 : 1,
                        l = t[r + c];
                    for (c += p, o = l & (1 << -h) - 1, l >>= -h, h += u; h > 0; o = 256 * o + t[r + c], c += p, h -= 8);
                    for (f = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; f = 256 * f + t[r + c], c += p, h -= 8);
                    if (0 === o) o = 1 - a;
                    else {
                        if (o === s) return f ? NaN : 1 / 0 * (l ? -1 : 1);
                        f += Math.pow(2, n), o -= a
                    }
                    return (l ? -1 : 1) * f * Math.pow(2, o - n)
                }, e.write = function(t, r, e, n, i, o) {
                    var f, u, s, a = 8 * o - i - 1,
                        h = (1 << a) - 1,
                        c = h >> 1,
                        p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        l = n ? 0 : o - 1,
                        y = n ? 1 : -1,
                        g = r < 0 || 0 === r && 1 / r < 0 ? 1 : 0;
                    for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (u = isNaN(r) ? 1 : 0, f = h) : (f = Math.floor(Math.log(r) / Math.LN2), r * (s = Math.pow(2, -f)) < 1 && (f--, s *= 2), (r += f + c >= 1 ? p / s : p * Math.pow(2, 1 - c)) * s >= 2 && (f++, s /= 2), f + c >= h ? (u = 0, f = h) : f + c >= 1 ? (u = (r * s - 1) * Math.pow(2, i), f += c) : (u = r * Math.pow(2, c - 1) * Math.pow(2, i), f = 0)); i >= 8; t[e + l] = 255 & u, l += y, u /= 256, i -= 8);
                    for (f = f << i | u, a += i; a > 0; t[e + l] = 255 & f, l += y, f /= 256, a -= 8);
                    t[e + l - y] |= 128 * g
                }
            }, {}],
            4: [function(f, u, s) {
                (function(u) {
                    var a = f("base64-js"),
                        h = f("ieee754"),
                        c = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                    s.Buffer = u, s.SlowBuffer = function(t) {
                        return +t != t && (t = 0), u.alloc(+t)
                    }, s.INSPECT_MAX_BYTES = 50;
                    var p = 2147483647;

                    function l(t) {
                        if (t > p) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                        var r = new Uint8Array(t);
                        return Object.setPrototypeOf(r, u.prototype), r
                    }

                    function u(t, r, e) {
                        if ("number" == typeof t) {
                            if ("string" == typeof r) throw new TypeError('The "string" argument must be of type string. Received type number');
                            return w(t)
                        }
                        return y(t, r, e)
                    }

                    function y(t, r, e) {
                        if ("string" == typeof t) return function(t, r) {
                            if ("string" == typeof r && "" !== r || (r = "utf8"), !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                            var e = 0 | m(t, r),
                                n = l(e),
                                i = n.write(t, r);
                            return i !== e && (n = n.slice(0, i)), n
                        }(t, r);
                        if (ArrayBuffer.isView(t)) return function(t) {
                            if ($(t, Uint8Array)) {
                                var r = new Uint8Array(t);
                                return v(r.buffer, r.byteOffset, r.byteLength)
                            }
                            return d(t)
                        }(t);
                        if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + o(t));
                        if ($(t, ArrayBuffer) || t && $(t.buffer, ArrayBuffer)) return v(t, r, e);
                        if ("undefined" != typeof SharedArrayBuffer && ($(t, SharedArrayBuffer) || t && $(t.buffer, SharedArrayBuffer))) return v(t, r, e);
                        if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                        var n = t.valueOf && t.valueOf();
                        if (null != n && n !== t) return u.from(n, r, e);
                        var i = function(t) {
                            if (u.isBuffer(t)) {
                                var r = 0 | b(t.length),
                                    e = l(r);
                                return 0 === e.length || t.copy(e, 0, 0, r), e
                            }
                            return void 0 !== t.length ? "number" != typeof t.length || tt(t.length) ? l(0) : d(t) : "Buffer" === t.type && Array.isArray(t.data) ? d(t.data) : void 0
                        }(t);
                        if (i) return i;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), r, e);
                        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + o(t))
                    }

                    function g(t) {
                        if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                        if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
                    }

                    function w(t) {
                        return g(t), l(t < 0 ? 0 : 0 | b(t))
                    }

                    function d(t) {
                        for (var r = t.length < 0 ? 0 : 0 | b(t.length), e = l(r), n = 0; n < r; n += 1) e[n] = 255 & t[n];
                        return e
                    }

                    function v(t, r, e) {
                        if (r < 0 || t.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
                        if (t.byteLength < r + (e || 0)) throw new RangeError('"length" is outside of buffer bounds');
                        var n;
                        return n = void 0 === r && void 0 === e ? new Uint8Array(t) : void 0 === e ? new Uint8Array(t, r) : new Uint8Array(t, r, e), Object.setPrototypeOf(n, u.prototype), n
                    }

                    function b(t) {
                        if (t >= p) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + p.toString(16) + " bytes");
                        return 0 | t
                    }

                    function m(t, r) {
                        if (u.isBuffer(t)) return t.length;
                        if (ArrayBuffer.isView(t) || $(t, ArrayBuffer)) return t.byteLength;
                        if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + o(t));
                        var e = t.length,
                            n = arguments.length > 2 && !0 === arguments[2];
                        if (!n && 0 === e) return 0;
                        for (var i = !1;;) switch (r) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return e;
                            case "utf8":
                            case "utf-8":
                                return H(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * e;
                            case "hex":
                                return e >>> 1;
                            case "base64":
                                return K(t).length;
                            default:
                                if (i) return n ? -1 : H(t).length;
                                r = ("" + r).toLowerCase(), i = !0
                        }
                    }

                    function E(t, r, e) {
                        var n = t[r];
                        t[r] = t[e], t[e] = n
                    }

                    function B(t, r, e, n, i) {
                        if (0 === t.length) return -1;
                        if ("string" == typeof e ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), tt(e = +e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
                            if (i) return -1;
                            e = t.length - 1
                        } else if (e < 0) {
                            if (!i) return -1;
                            e = 0
                        }
                        if ("string" == typeof r && (r = u.from(r, n)), u.isBuffer(r)) return 0 === r.length ? -1 : A(t, r, e, n, i);
                        if ("number" == typeof r) return r &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e) : A(t, [r], e, n, i);
                        throw new TypeError("val must be string, number or Buffer")
                    }

                    function A(t, r, e, n, i) {
                        var o, f = 1,
                            u = t.length,
                            s = r.length;
                        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                            if (t.length < 2 || r.length < 2) return -1;
                            f = 2, u /= 2, s /= 2, e /= 2
                        }

                        function a(t, r) {
                            return 1 === f ? t[r] : t.readUInt16BE(r * f)
                        }
                        if (i) {
                            var h = -1;
                            for (o = e; o < u; o++)
                                if (a(t, o) === a(r, -1 === h ? 0 : o - h)) {
                                    if (-1 === h && (h = o), o - h + 1 === s) return h * f
                                } else -1 !== h && (o -= o - h), h = -1
                        } else
                            for (e + s > u && (e = u - s), o = e; o >= 0; o--) {
                                for (var c = !0, p = 0; p < s; p++)
                                    if (a(t, o + p) !== a(r, p)) {
                                        c = !1;
                                        break
                                    }
                                if (c) return o
                            }
                        return -1
                    }

                    function I(t, r, e, n) {
                        e = Number(e) || 0;
                        var i = t.length - e;
                        n ? (n = Number(n)) > i && (n = i) : n = i;
                        var o, f = r.length;
                        for (n > f / 2 && (n = f / 2), o = 0; o < n; ++o) {
                            var u = parseInt(r.substr(2 * o, 2), 16);
                            if (tt(u)) return o;
                            t[e + o] = u
                        }
                        return o
                    }

                    function U(t, r, e, n) {
                        return Q(H(r, t.length - e), t, e, n)
                    }

                    function T(t, r, e, n) {
                        return Q(function(t) {
                            for (var r = [], e = 0; e < t.length; ++e) r.push(255 & t.charCodeAt(e));
                            return r
                        }(r), t, e, n)
                    }

                    function R(t, r, e, n) {
                        return Q(K(r), t, e, n)
                    }

                    function _(t, r, e, n) {
                        return Q(function(t, r) {
                            for (var e, n, i, o = [], f = 0; f < t.length && !((r -= 2) < 0); ++f) n = (e = t.charCodeAt(f)) >> 8, i = e % 256, o.push(i), o.push(n);
                            return o
                        }(r, t.length - e), t, e, n)
                    }

                    function L(t, r, e) {
                        return 0 === r && e === t.length ? a.fromByteArray(t) : a.fromByteArray(t.slice(r, e))
                    }

                    function S(t, r, e) {
                        e = Math.min(t.length, e);
                        for (var n = [], i = r; i < e;) {
                            var o = t[i],
                                f = null,
                                u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                            if (i + u <= e) {
                                var s = void 0,
                                    a = void 0,
                                    h = void 0,
                                    c = void 0;
                                switch (u) {
                                    case 1:
                                        o < 128 && (f = o);
                                        break;
                                    case 2:
                                        128 == (192 & (s = t[i + 1])) && (c = (31 & o) << 6 | 63 & s) > 127 && (f = c);
                                        break;
                                    case 3:
                                        s = t[i + 1], a = t[i + 2], 128 == (192 & s) && 128 == (192 & a) && (c = (15 & o) << 12 | (63 & s) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (f = c);
                                        break;
                                    case 4:
                                        s = t[i + 1], a = t[i + 2], h = t[i + 3], 128 == (192 & s) && 128 == (192 & a) && 128 == (192 & h) && (c = (15 & o) << 18 | (63 & s) << 12 | (63 & a) << 6 | 63 & h) > 65535 && c < 1114112 && (f = c)
                                }
                            }
                            null === f ? (f = 65533, u = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), i += u
                        }
                        return function(t) {
                            var r = t.length;
                            if (r <= O) return String.fromCharCode.apply(String, t);
                            for (var e = "", n = 0; n < r;) e += String.fromCharCode.apply(String, t.slice(n, n += O));
                            return e
                        }(n)
                    }
                    s.kMaxLength = p, u.TYPED_ARRAY_SUPPORT = function() {
                        try {
                            var t = new Uint8Array(1),
                                r = {
                                    foo: function() {
                                        return 42
                                    }
                                };
                            return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(t, r), 42 === t.foo()
                        } catch (t) {
                            return !1
                        }
                    }(), u.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
                        enumerable: !0,
                        get: function() {
                            if (u.isBuffer(this)) return this.buffer
                        }
                    }), Object.defineProperty(u.prototype, "offset", {
                        enumerable: !0,
                        get: function() {
                            if (u.isBuffer(this)) return this.byteOffset
                        }
                    }), u.poolSize = 8192, u.from = function(t, r, e) {
                        return y(t, r, e)
                    }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(t, r, e) {
                        return function(t, r, e) {
                            return g(t), t <= 0 ? l(t) : void 0 !== r ? "string" == typeof e ? l(t).fill(r, e) : l(t).fill(r) : l(t)
                        }(t, r, e)
                    }, u.allocUnsafe = function(t) {
                        return w(t)
                    }, u.allocUnsafeSlow = function(t) {
                        return w(t)
                    }, u.isBuffer = function(t) {
                        return null != t && !0 === t._isBuffer && t !== u.prototype
                    }, u.compare = function(t, r) {
                        if ($(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), $(r, Uint8Array) && (r = u.from(r, r.offset, r.byteLength)), !u.isBuffer(t) || !u.isBuffer(r)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (t === r) return 0;
                        for (var e = t.length, n = r.length, i = 0, o = Math.min(e, n); i < o; ++i)
                            if (t[i] !== r[i]) {
                                e = t[i], n = r[i];
                                break
                            }
                        return e < n ? -1 : n < e ? 1 : 0
                    }, u.isEncoding = function(t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, u.concat = function(t, r) {
                        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return u.alloc(0);
                        var e;
                        if (void 0 === r)
                            for (r = 0, e = 0; e < t.length; ++e) r += t[e].length;
                        var n = u.allocUnsafe(r),
                            i = 0;
                        for (e = 0; e < t.length; ++e) {
                            var o = t[e];
                            if ($(o, Uint8Array)) i + o.length > n.length ? (u.isBuffer(o) || (o = u.from(o)), o.copy(n, i)) : Uint8Array.prototype.set.call(n, o, i);
                            else {
                                if (!u.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                                o.copy(n, i)
                            }
                            i += o.length
                        }
                        return n
                    }, u.byteLength = m, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                        var t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var r = 0; r < t; r += 2) E(this, r, r + 1);
                        return this
                    }, u.prototype.swap32 = function() {
                        var t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var r = 0; r < t; r += 4) E(this, r, r + 3), E(this, r + 1, r + 2);
                        return this
                    }, u.prototype.swap64 = function() {
                        var t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var r = 0; r < t; r += 8) E(this, r, r + 7), E(this, r + 1, r + 6), E(this, r + 2, r + 5), E(this, r + 3, r + 4);
                        return this
                    }, u.prototype.toString = function() {
                        var t = this.length;
                        return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : function(t, r, e) {
                            var n = !1;
                            if ((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
                            if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
                            if ((e >>>= 0) <= (r >>>= 0)) return "";
                            for (t || (t = "utf8");;) switch (t) {
                                case "hex":
                                    return x(this, r, e);
                                case "utf8":
                                case "utf-8":
                                    return S(this, r, e);
                                case "ascii":
                                    return C(this, r, e);
                                case "latin1":
                                case "binary":
                                    return M(this, r, e);
                                case "base64":
                                    return L(this, r, e);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return k(this, r, e);
                                default:
                                    if (n) throw new TypeError("Unknown encoding: " + t);
                                    t = (t + "").toLowerCase(), n = !0
                            }
                        }.apply(this, arguments)
                    }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t) {
                        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === u.compare(this, t)
                    }, u.prototype.inspect = function() {
                        var t = "",
                            r = s.INSPECT_MAX_BYTES;
                        return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
                    }, c && (u.prototype[c] = u.prototype.inspect), u.prototype.compare = function(t, r, e, n, i) {
                        if ($(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + o(t));
                        if (void 0 === r && (r = 0), void 0 === e && (e = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), r < 0 || e > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                        if (n >= i && r >= e) return 0;
                        if (n >= i) return -1;
                        if (r >= e) return 1;
                        if (this === t) return 0;
                        for (var f = (i >>>= 0) - (n >>>= 0), s = (e >>>= 0) - (r >>>= 0), a = Math.min(f, s), h = this.slice(n, i), c = t.slice(r, e), p = 0; p < a; ++p)
                            if (h[p] !== c[p]) {
                                f = h[p], s = c[p];
                                break
                            }
                        return f < s ? -1 : s < f ? 1 : 0
                    }, u.prototype.includes = function(t, r, e) {
                        return -1 !== this.indexOf(t, r, e)
                    }, u.prototype.indexOf = function(t, r, e) {
                        return B(this, t, r, e, !0)
                    }, u.prototype.lastIndexOf = function(t, r, e) {
                        return B(this, t, r, e, !1)
                    }, u.prototype.write = function(t, r, e, n) {
                        if (void 0 === r) n = "utf8", e = this.length, r = 0;
                        else if (void 0 === e && "string" == typeof r) n = r, e = this.length, r = 0;
                        else {
                            if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            r >>>= 0, isFinite(e) ? (e >>>= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0)
                        }
                        var i = this.length - r;
                        if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        for (var o = !1;;) switch (n) {
                            case "hex":
                                return I(this, t, r, e);
                            case "utf8":
                            case "utf-8":
                                return U(this, t, r, e);
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return T(this, t, r, e);
                            case "base64":
                                return R(this, t, r, e);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return _(this, t, r, e);
                            default:
                                if (o) throw new TypeError("Unknown encoding: " + n);
                                n = ("" + n).toLowerCase(), o = !0
                        }
                    }, u.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    };
                    var O = 4096;

                    function C(t, r, e) {
                        var n = "";
                        e = Math.min(t.length, e);
                        for (var i = r; i < e; ++i) n += String.fromCharCode(127 & t[i]);
                        return n
                    }

                    function M(t, r, e) {
                        var n = "";
                        e = Math.min(t.length, e);
                        for (var i = r; i < e; ++i) n += String.fromCharCode(t[i]);
                        return n
                    }

                    function x(t, r, e) {
                        var n = t.length;
                        (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
                        for (var i = "", o = r; o < e; ++o) i += rt[t[o]];
                        return i
                    }

                    function k(t, r, e) {
                        for (var n = t.slice(r, e), i = "", o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                        return i
                    }

                    function N(t, r, e) {
                        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                        if (t + r > e) throw new RangeError("Trying to access beyond buffer length")
                    }

                    function P(t, r, e, n, i, o) {
                        if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (r > i || r < o) throw new RangeError('"value" argument is out of bounds');
                        if (e + n > t.length) throw new RangeError("Index out of range")
                    }

                    function j(t, r, e, n, i) {
                        W(r, n, i, t, e, 7);
                        var o = Number(r & BigInt(4294967295));
                        t[e++] = o, o >>= 8, t[e++] = o, o >>= 8, t[e++] = o, o >>= 8, t[e++] = o;
                        var f = Number(r >> BigInt(32) & BigInt(4294967295));
                        return t[e++] = f, f >>= 8, t[e++] = f, f >>= 8, t[e++] = f, f >>= 8, t[e++] = f, e
                    }

                    function F(t, r, e, n, i) {
                        W(r, n, i, t, e, 7);
                        var o = Number(r & BigInt(4294967295));
                        t[e + 7] = o, o >>= 8, t[e + 6] = o, o >>= 8, t[e + 5] = o, o >>= 8, t[e + 4] = o;
                        var f = Number(r >> BigInt(32) & BigInt(4294967295));
                        return t[e + 3] = f, f >>= 8, t[e + 2] = f, f >>= 8, t[e + 1] = f, f >>= 8, t[e] = f, e + 8
                    }

                    function z(t, r, e, n, i, o) {
                        if (e + n > t.length) throw new RangeError("Index out of range");
                        if (e < 0) throw new RangeError("Index out of range")
                    }

                    function D(t, r, e, n, i) {
                        return r = +r, e >>>= 0, i || z(t, 0, e, 4), h.write(t, r, e, n, 23, 4), e + 4
                    }

                    function q(t, r, e, n, i) {
                        return r = +r, e >>>= 0, i || z(t, 0, e, 8), h.write(t, r, e, n, 52, 8), e + 8
                    }
                    u.prototype.slice = function(t, r) {
                        var e = this.length;
                        (t = ~~t) < 0 ? (t += e) < 0 && (t = 0) : t > e && (t = e), (r = void 0 === r ? e : ~~r) < 0 ? (r += e) < 0 && (r = 0) : r > e && (r = e), r < t && (r = t);
                        var n = this.subarray(t, r);
                        return Object.setPrototypeOf(n, u.prototype), n
                    }, u.prototype.readUintLE = u.prototype.readUIntLE = function(t, r, e) {
                        t >>>= 0, r >>>= 0, e || N(t, r, this.length);
                        for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) n += this[t + o] * i;
                        return n
                    }, u.prototype.readUintBE = u.prototype.readUIntBE = function(t, r, e) {
                        t >>>= 0, r >>>= 0, e || N(t, r, this.length);
                        for (var n = this[t + --r], i = 1; r > 0 && (i *= 256);) n += this[t + --r] * i;
                        return n
                    }, u.prototype.readUint8 = u.prototype.readUInt8 = function(t, r) {
                        return t >>>= 0, r || N(t, 1, this.length), this[t]
                    }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, r) {
                        return t >>>= 0, r || N(t, 2, this.length), this[t] | this[t + 1] << 8
                    }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, r) {
                        return t >>>= 0, r || N(t, 2, this.length), this[t] << 8 | this[t + 1]
                    }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, r) {
                        return t >>>= 0, r || N(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                    }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, r) {
                        return t >>>= 0, r || N(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                    }, u.prototype.readBigUInt64LE = et((function(t) {
                        X(t >>>= 0, "offset");
                        var r = this[t],
                            e = this[t + 7];
                        void 0 !== r && void 0 !== e || J(t, this.length - 8);
                        var n = r + 256 * this[++t] + 65536 * this[++t] + this[++t] * Math.pow(2, 24),
                            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + e * Math.pow(2, 24);
                        return BigInt(n) + (BigInt(i) << BigInt(32))
                    })), u.prototype.readBigUInt64BE = et((function(t) {
                        X(t >>>= 0, "offset");
                        var r = this[t],
                            e = this[t + 7];
                        void 0 !== r && void 0 !== e || J(t, this.length - 8);
                        var n = r * Math.pow(2, 24) + 65536 * this[++t] + 256 * this[++t] + this[++t],
                            i = this[++t] * Math.pow(2, 24) + 65536 * this[++t] + 256 * this[++t] + e;
                        return (BigInt(n) << BigInt(32)) + BigInt(i)
                    })), u.prototype.readIntLE = function(t, r, e) {
                        t >>>= 0, r >>>= 0, e || N(t, r, this.length);
                        for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) n += this[t + o] * i;
                        return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n
                    }, u.prototype.readIntBE = function(t, r, e) {
                        t >>>= 0, r >>>= 0, e || N(t, r, this.length);
                        for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
                        return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o
                    }, u.prototype.readInt8 = function(t, r) {
                        return t >>>= 0, r || N(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                    }, u.prototype.readInt16LE = function(t, r) {
                        t >>>= 0, r || N(t, 2, this.length);
                        var e = this[t] | this[t + 1] << 8;
                        return 32768 & e ? 4294901760 | e : e
                    }, u.prototype.readInt16BE = function(t, r) {
                        t >>>= 0, r || N(t, 2, this.length);
                        var e = this[t + 1] | this[t] << 8;
                        return 32768 & e ? 4294901760 | e : e
                    }, u.prototype.readInt32LE = function(t, r) {
                        return t >>>= 0, r || N(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                    }, u.prototype.readInt32BE = function(t, r) {
                        return t >>>= 0, r || N(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                    }, u.prototype.readBigInt64LE = et((function(t) {
                        X(t >>>= 0, "offset");
                        var r = this[t],
                            e = this[t + 7];
                        void 0 !== r && void 0 !== e || J(t, this.length - 8);
                        var n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (e << 24);
                        return (BigInt(n) << BigInt(32)) + BigInt(r + 256 * this[++t] + 65536 * this[++t] + this[++t] * Math.pow(2, 24))
                    })), u.prototype.readBigInt64BE = et((function(t) {
                        X(t >>>= 0, "offset");
                        var r = this[t],
                            e = this[t + 7];
                        void 0 !== r && void 0 !== e || J(t, this.length - 8);
                        var n = (r << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                        return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * Math.pow(2, 24) + 65536 * this[++t] + 256 * this[++t] + e)
                    })), u.prototype.readFloatLE = function(t, r) {
                        return t >>>= 0, r || N(t, 4, this.length), h.read(this, t, !0, 23, 4)
                    }, u.prototype.readFloatBE = function(t, r) {
                        return t >>>= 0, r || N(t, 4, this.length), h.read(this, t, !1, 23, 4)
                    }, u.prototype.readDoubleLE = function(t, r) {
                        return t >>>= 0, r || N(t, 8, this.length), h.read(this, t, !0, 52, 8)
                    }, u.prototype.readDoubleBE = function(t, r) {
                        return t >>>= 0, r || N(t, 8, this.length), h.read(this, t, !1, 52, 8)
                    }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t, r, e, n) {
                        t = +t, r >>>= 0, e >>>= 0, n || P(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                        var i = 1,
                            o = 0;
                        for (this[r] = 255 & t; ++o < e && (i *= 256);) this[r + o] = t / i & 255;
                        return r + e
                    }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t, r, e, n) {
                        t = +t, r >>>= 0, e >>>= 0, n || P(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                        var i = e - 1,
                            o = 1;
                        for (this[r + i] = 255 & t; --i >= 0 && (o *= 256);) this[r + i] = t / o & 255;
                        return r + e
                    }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, r, e) {
                        return t = +t, r >>>= 0, e || P(this, t, r, 1, 255, 0), this[r] = 255 & t, r + 1
                    }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || P(this, t, r, 2, 65535, 0), this[r] = 255 & t, this[r + 1] = t >>> 8, r + 2
                    }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || P(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = 255 & t, r + 2
                    }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || P(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t, r + 4
                    }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || P(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t, r + 4
                    }, u.prototype.writeBigUInt64LE = et((function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return j(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"))
                    })), u.prototype.writeBigUInt64BE = et((function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return F(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"))
                    })), u.prototype.writeIntLE = function(t, r, e, n) {
                        if (t = +t, r >>>= 0, !n) {
                            var i = Math.pow(2, 8 * e - 1);
                            P(this, t, r, e, i - 1, -i)
                        }
                        var o = 0,
                            f = 1,
                            u = 0;
                        for (this[r] = 255 & t; ++o < e && (f *= 256);) t < 0 && 0 === u && 0 !== this[r + o - 1] && (u = 1), this[r + o] = (t / f >> 0) - u & 255;
                        return r + e
                    }, u.prototype.writeIntBE = function(t, r, e, n) {
                        if (t = +t, r >>>= 0, !n) {
                            var i = Math.pow(2, 8 * e - 1);
                            P(this, t, r, e, i - 1, -i)
                        }
                        var o = e - 1,
                            f = 1,
                            u = 0;
                        for (this[r + o] = 255 & t; --o >= 0 && (f *= 256);) t < 0 && 0 === u && 0 !== this[r + o + 1] && (u = 1), this[r + o] = (t / f >> 0) - u & 255;
                        return r + e
                    }, u.prototype.writeInt8 = function(t, r, e) {
                        return t = +t, r >>>= 0, e || P(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[r] = 255 & t, r + 1
                    }, u.prototype.writeInt16LE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || P(this, t, r, 2, 32767, -32768), this[r] = 255 & t, this[r + 1] = t >>> 8, r + 2
                    }, u.prototype.writeInt16BE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || P(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, this[r + 1] = 255 & t, r + 2
                    }, u.prototype.writeInt32LE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || P(this, t, r, 4, 2147483647, -2147483648), this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4
                    }, u.prototype.writeInt32BE = function(t, r, e) {
                        return t = +t, r >>>= 0, e || P(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t, r + 4
                    }, u.prototype.writeBigInt64LE = et((function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return j(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                    })), u.prototype.writeBigInt64BE = et((function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return F(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                    })), u.prototype.writeFloatLE = function(t, r, e) {
                        return D(this, t, r, !0, e)
                    }, u.prototype.writeFloatBE = function(t, r, e) {
                        return D(this, t, r, !1, e)
                    }, u.prototype.writeDoubleLE = function(t, r, e) {
                        return q(this, t, r, !0, e)
                    }, u.prototype.writeDoubleBE = function(t, r, e) {
                        return q(this, t, r, !1, e)
                    }, u.prototype.copy = function(t, r, e, n) {
                        if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                        if (e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < e && (n = e), n === e) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (r < 0) throw new RangeError("targetStart out of bounds");
                        if (e < 0 || e >= this.length) throw new RangeError("Index out of range");
                        if (n < 0) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);
                        var i = n - e;
                        return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(r, e, n) : Uint8Array.prototype.set.call(t, this.subarray(e, n), r), i
                    }, u.prototype.fill = function(t, r, e, n) {
                        if ("string" == typeof t) {
                            if ("string" == typeof r ? (n = r, r = 0, e = this.length) : "string" == typeof e && (n = e, e = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                            if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                            if (1 === t.length) {
                                var i = t.charCodeAt(0);
                                ("utf8" === n && i < 128 || "latin1" === n) && (t = i)
                            }
                        } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                        if (r < 0 || this.length < r || this.length < e) throw new RangeError("Out of range index");
                        if (e <= r) return this;
                        var o;
                        if (r >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t)
                            for (o = r; o < e; ++o) this[o] = t;
                        else {
                            var f = u.isBuffer(t) ? t : u.from(t, n),
                                s = f.length;
                            if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                            for (o = 0; o < e - r; ++o) this[o + r] = f[o % s]
                        }
                        return this
                    };
                    var Y = {};

                    function G(o, f, u) {
                        Y[o] = function(u) {
                            n(a, u);
                            var s = i(a);

                            function a() {
                                var r;
                                return t(this, a), r = s.call(this), Object.defineProperty(e(r), "message", {
                                    value: f.apply(e(r), arguments),
                                    writable: !0,
                                    configurable: !0
                                }), r.name = "".concat(r.name, " [").concat(o, "]"), r.stack, delete r.name, r
                            }
                            return r(a, [{
                                key: "code",
                                get: function() {
                                    return o
                                },
                                set: function(t) {
                                    Object.defineProperty(this, "code", {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: t,
                                        writable: !0
                                    })
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    return "".concat(this.name, " [").concat(o, "]: ").concat(this.message)
                                }
                            }]), a
                        }(u)
                    }

                    function V(t) {
                        for (var r = "", e = t.length, n = "-" === t[0] ? 1 : 0; e >= n + 4; e -= 3) r = "_".concat(t.slice(e - 3, e)).concat(r);
                        return "".concat(t.slice(0, e)).concat(r)
                    }

                    function W(t, r, e, n, i, o) {
                        if (t > e || t < r) {
                            var f, u = "bigint" == typeof r ? "n" : "";
                            throw f = o > 3 ? 0 === r || r === BigInt(0) ? ">= 0".concat(u, " and < 2").concat(u, " ** ").concat(8 * (o + 1)).concat(u) : ">= -(2".concat(u, " ** ").concat(8 * (o + 1) - 1).concat(u, ") and < 2 ** ") + "".concat(8 * (o + 1) - 1).concat(u) : ">= ".concat(r).concat(u, " and <= ").concat(e).concat(u), new Y.ERR_OUT_OF_RANGE("value", f, t)
                        }! function(t, r, e) {
                            X(r, "offset"), void 0 !== t[r] && void 0 !== t[r + e] || J(r, t.length - (e + 1))
                        }(n, i, o)
                    }

                    function X(t, r) {
                        if ("number" != typeof t) throw new Y.ERR_INVALID_ARG_TYPE(r, "number", t)
                    }

                    function J(t, r, e) {
                        if (Math.floor(t) !== t) throw X(t, e), new Y.ERR_OUT_OF_RANGE(e || "offset", "an integer", t);
                        if (r < 0) throw new Y.ERR_BUFFER_OUT_OF_BOUNDS;
                        throw new Y.ERR_OUT_OF_RANGE(e || "offset", ">= ".concat(e ? 1 : 0, " and <= ").concat(r), t)
                    }
                    G("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) {
                        return t ? "".concat(t, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds"
                    }), RangeError), G("ERR_INVALID_ARG_TYPE", (function(t, r) {
                        return 'The "'.concat(t, '" argument must be of type number. Received type ').concat(o(r))
                    }), TypeError), G("ERR_OUT_OF_RANGE", (function(t, r, e) {
                        var n = 'The value of "'.concat(t, '" is out of range.'),
                            i = e;
                        return Number.isInteger(e) && Math.abs(e) > Math.pow(2, 32) ? i = V(String(e)) : "bigint" == typeof e && (i = String(e), (e > Math.pow(BigInt(2), BigInt(32)) || e < -Math.pow(BigInt(2), BigInt(32))) && (i = V(i)), i += "n"), n + " It must be ".concat(r, ". Received ").concat(i)
                    }), RangeError);
                    var Z = /[^+\/0-9A-Za-z-_]/g;

                    function H(t, r) {
                        var e;
                        r = r || 1 / 0;
                        for (var n = t.length, i = null, o = [], f = 0; f < n; ++f) {
                            if ((e = t.charCodeAt(f)) > 55295 && e < 57344) {
                                if (!i) {
                                    if (e > 56319) {
                                        (r -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    if (f + 1 === n) {
                                        (r -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    i = e;
                                    continue
                                }
                                if (e < 56320) {
                                    (r -= 3) > -1 && o.push(239, 191, 189), i = e;
                                    continue
                                }
                                e = 65536 + (i - 55296 << 10 | e - 56320)
                            } else i && (r -= 3) > -1 && o.push(239, 191, 189);
                            if (i = null, e < 128) {
                                if ((r -= 1) < 0) break;
                                o.push(e)
                            } else if (e < 2048) {
                                if ((r -= 2) < 0) break;
                                o.push(e >> 6 | 192, 63 & e | 128)
                            } else if (e < 65536) {
                                if ((r -= 3) < 0) break;
                                o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                            } else {
                                if (!(e < 1114112)) throw new Error("Invalid code point");
                                if ((r -= 4) < 0) break;
                                o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                            }
                        }
                        return o
                    }

                    function K(t) {
                        return a.toByteArray(function(t) {
                            if ((t = (t = t.split("=")[0]).trim().replace(Z, "")).length < 2) return "";
                            for (; t.length % 4 != 0;) t += "=";
                            return t
                        }(t))
                    }

                    function Q(t, r, e, n) {
                        var i;
                        for (i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i) r[i + e] = t[i];
                        return i
                    }

                    function $(t, r) {
                        return t instanceof r || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === r.name
                    }

                    function tt(t) {
                        return t != t
                    }
                    var rt = function() {
                        for (var t = new Array(256), r = 0; r < 16; ++r)
                            for (var e = 16 * r, n = 0; n < 16; ++n) t[e + n] = "0123456789abcdef" [r] + "0123456789abcdef" [n];
                        return t
                    }();

                    function et(t) {
                        return "undefined" == typeof BigInt ? nt : t
                    }

                    function nt() {
                        throw new Error("BigInt not supported")
                    }
                }).call(this, f("buffer").Buffer)
            }, {
                "base64-js": 5,
                buffer: 2,
                ieee754: 6
            }],
            5: [function(t, r, e) {
                e.byteLength = function(t) {
                    var r = a(t),
                        e = r[0],
                        n = r[1];
                    return 3 * (e + n) / 4 - n
                }, e.toByteArray = function(t) {
                    var r, e, n = a(t),
                        f = n[0],
                        u = n[1],
                        s = new o(function(t, r, e) {
                            return 3 * (r + e) / 4 - e
                        }(0, f, u)),
                        h = 0,
                        c = u > 0 ? f - 4 : f;
                    for (e = 0; e < c; e += 4) r = i[t.charCodeAt(e)] << 18 | i[t.charCodeAt(e + 1)] << 12 | i[t.charCodeAt(e + 2)] << 6 | i[t.charCodeAt(e + 3)], s[h++] = r >> 16 & 255, s[h++] = r >> 8 & 255, s[h++] = 255 & r;
                    return 2 === u && (r = i[t.charCodeAt(e)] << 2 | i[t.charCodeAt(e + 1)] >> 4, s[h++] = 255 & r), 1 === u && (r = i[t.charCodeAt(e)] << 10 | i[t.charCodeAt(e + 1)] << 4 | i[t.charCodeAt(e + 2)] >> 2, s[h++] = r >> 8 & 255, s[h++] = 255 & r), s
                }, e.fromByteArray = function(t) {
                    for (var r, e = t.length, i = e % 3, o = [], f = 0, u = e - i; f < u; f += 16383) o.push(h(t, f, f + 16383 > u ? u : f + 16383));
                    return 1 === i ? (r = t[e - 1], o.push(n[r >> 2] + n[r << 4 & 63] + "==")) : 2 === i && (r = (t[e - 2] << 8) + t[e - 1], o.push(n[r >> 10] + n[r >> 4 & 63] + n[r << 2 & 63] + "=")), o.join("")
                };
                for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, s = f.length; u < s; ++u) n[u] = f[u], i[f.charCodeAt(u)] = u;

                function a(t) {
                    var r = t.length;
                    if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var e = t.indexOf("=");
                    return -1 === e && (e = r), [e, e === r ? 0 : 4 - e % 4]
                }

                function h(t, r, e) {
                    for (var i, o, f = [], u = r; u < e; u += 3) i = (t[u] << 16 & 16711680) + (t[u + 1] << 8 & 65280) + (255 & t[u + 2]), f.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
                    return f.join("")
                }
                i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
            }, {}],
            6: [function(t, r, e) {
                e.read = function(t, r, e, n, i) {
                    var o, f, u = 8 * i - n - 1,
                        s = (1 << u) - 1,
                        a = s >> 1,
                        h = -7,
                        c = e ? i - 1 : 0,
                        p = e ? -1 : 1,
                        l = t[r + c];
                    for (c += p, o = l & (1 << -h) - 1, l >>= -h, h += u; h > 0; o = 256 * o + t[r + c], c += p, h -= 8);
                    for (f = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; f = 256 * f + t[r + c], c += p, h -= 8);
                    if (0 === o) o = 1 - a;
                    else {
                        if (o === s) return f ? NaN : 1 / 0 * (l ? -1 : 1);
                        f += Math.pow(2, n), o -= a
                    }
                    return (l ? -1 : 1) * f * Math.pow(2, o - n)
                }, e.write = function(t, r, e, n, i, o) {
                    var f, u, s, a = 8 * o - i - 1,
                        h = (1 << a) - 1,
                        c = h >> 1,
                        p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        l = n ? 0 : o - 1,
                        y = n ? 1 : -1,
                        g = r < 0 || 0 === r && 1 / r < 0 ? 1 : 0;
                    for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (u = isNaN(r) ? 1 : 0, f = h) : (f = Math.floor(Math.log(r) / Math.LN2), r * (s = Math.pow(2, -f)) < 1 && (f--, s *= 2), (r += f + c >= 1 ? p / s : p * Math.pow(2, 1 - c)) * s >= 2 && (f++, s /= 2), f + c >= h ? (u = 0, f = h) : f + c >= 1 ? (u = (r * s - 1) * Math.pow(2, i), f += c) : (u = r * Math.pow(2, c - 1) * Math.pow(2, i), f = 0)); i >= 8; t[e + l] = 255 & u, l += y, u /= 256, i -= 8);
                    for (f = f << i | u, a += i; a > 0; t[e + l] = 255 & f, l += y, f /= 256, a -= 8);
                    t[e + l - y] |= 128 * g
                }
            }, {}]
        }, {}, [4])(4)
    }));
});
define("pdic-workers/pdd-ww.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../pdic-workers/@babel/runtime/helpers/interopRequireDefault"),
        r = e(require("../pdic-workers/@babel/runtime/regenerator")),
        t = e(require("./wxam2pic-bmp")),
        n = function(e, r, t, n) {
            return new(t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        a(e)
                    }
                }

                function c(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }

                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
                        e(r)
                    }))).then(o, c)
                }
                u((n = n.apply(e, r || [])).next())
            }))
        },
        i = worker,
        a = require("./buffer").Buffer,
        o = null;

    function c(e) {
        return n(this, void 0, void 0, r.default.mark((function t() {
            return r.default.wrap((function(r) {
                for (;;) switch (r.prev = r.next) {
                    case 0:
                        return r.next = 2, h().then((function() {
                            return u(e)
                        }));
                    case 2:
                        return r.abrupt("return", r.sent);
                    case 3:
                    case "end":
                        return r.stop()
                }
            }), t)
        })))
    }

    function u(e) {
        var r = f(new Uint8Array(e));
        return {
            bmpArr: r.res,
            pdicInfo: r.pdicInfo
        }
    }
    var f = function(e) {
            var r = o._create_buffer(e.length),
                t = s(e, r),
                n = d(r, e.length, t),
                i = n.ret,
                a = n.res;
            return o._destroy_buffer(r), {
                res: a,
                pdicInfo: t,
                size: i
            }
        },
        s = function(e, r) {
            try {
                var t = e.length;
                o.HEAP8.set(e, r);
                var n = o._malloc(4);
                o._structCreate(n);
                var i = o.getValue(n, "i32");
                if (0 !== o._get_info(r, t, i)) throw new Error("pdic-web: 解析PDIC码流失败");
                var a = p(i);
                return o._destroy_buffer(n), o._destroy_buffer(i), a
            } catch (e) {
                console.error(e)
            }
        },
        d = function(e, r, t) {
            try {
                var n = t.width * t.height * 5 + 138,
                    i = o._create_buffer(n),
                    a = o._decode(e, r, i, n, 1);
                if (a <= 0) throw o._destroy_buffer(i), new Error("pdic-web: 解码PDIC失败: ".concat(a));
                var c = new Uint8Array(o.HEAP8.buffer, i, a),
                    u = new Uint8Array(c);
                return o._destroy_buffer(i), {
                    ret: a,
                    res: u.buffer
                }
            } catch (e) {
                console.error(e)
            }
        },
        p = function(e) {
            var r = function() {
                    return o._malloc(4)
                },
                t = function(e) {
                    return o.getValue(e, "i32")
                },
                n = function(e) {
                    return o._free(e)
                },
                i = r(),
                a = r();
            o._structQuery(e, i, a);
            var c = {
                width: t(i),
                height: t(a)
            };
            return n(i), n(a), c
        },
        w = {};

    function m(e, r) {
        var t = w[e];
        t && t.resolve(r), delete w[e], i.postMessage(r)
    }

    function l(e, r) {
        var t = w[e];
        t && t.reject(r), delete w[e];
        var n = {
            id: e,
            type: "pdic-decode",
            ok: !1,
            errorMsg: r || "pdic-web: worker 未知错误",
            imageType: ""
        };
        i.postMessage(n)
    }
    var h = function() {
        var e = this,
            i = Date.now(),
            a = new Promise((function(e, r) {
                (0, t.default)().then((function(r) {
                    o = r;
                    var t = Date.now() - i;
                    e(t)
                })).catch((function() {
                    return r(new Error("pdic-web: wasm初始化失败"))
                }))
            }));
        return function() {
            return n(e, void 0, void 0, r.default.mark((function e() {
                return r.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, a;
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))
        }
    }();

    function y(e) {
        var r = e;
        if (r.endsWith(".pdic")) return e;
        var t = r.split("?")[1],
            n = t ? /imageMogr2|imageView2/.test(t) ? "|" : "&" : "?";
        return "".concat(e).concat(n).concat("imageMogr2/format/pdic/decver/4")
    }

    function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise((function(r) {
            var t = y(e.payload);
            "function" != typeof i.request && reject(new Error("pdic-web: request方法不存在")), i.request({
                url: t,
                dataType: "byte",
                responseType: "arraybuffer",
                complete: function(e) {
                    r(e)
                }
            })
        }))
    }
    i.onMessage((function(e) {
        var t = e.data || e;
        if ("pdic-init" !== t.type) {
            if (t && t.id && t.type) {
                var o = t.id;
                switch (new Promise((function(e, r) {
                    w[o] = {
                        resolve: e,
                        reject: r,
                        id: o
                    }
                })), t.type) {
                    case "pdic-fetch":
                        (function(e) {
                            return n(this, void 0, void 0, r.default.mark((function t() {
                                var n, i, o, u, f, s, d, p, w, m, l, h, y, v, g;
                                return r.default.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return n = Date.now(), r.next = 3, b(e);
                                        case 3:
                                            if (i = r.sent, o = Date.now() - n, (u = i.header["Content-Type"]) && u.startsWith("image")) {
                                                r.next = 8;
                                                break
                                            }
                                            throw new Error("pdic-web: 未预期的ContentType: ".concat(null != u ? u : "empty"));
                                        case 8:
                                            if (f = i.data, s = f.byteLength, "image/pdic" === u) {
                                                r.next = 15;
                                                break
                                            }
                                            return d = {
                                                url: e.payload,
                                                imageType: u,
                                                originSize: s,
                                                width: -1,
                                                height: -1,
                                                startTime: e.startTime,
                                                workerTime: Date.now() - n,
                                                toWorkerDelayTime: n - e.startTime,
                                                fromWorkerDelayTime: Date.now(),
                                                fetchTime: o,
                                                decodeTime: -1
                                            }, r.abrupt("return", {
                                                id: e.id,
                                                type: "pdic-decode",
                                                ok: !0,
                                                payload: {
                                                    buffer: f,
                                                    info: d
                                                },
                                                imageType: u
                                            });
                                        case 15:
                                            return p = Date.now(), r.next = 18, c(f);
                                        case 18:
                                            return w = r.sent, m = w.bmpArr, l = w.pdicInfo, h = Date.now() - p, y = {
                                                url: e.payload,
                                                imageType: "image/bmp",
                                                originSize: s,
                                                width: l.width,
                                                height: l.height,
                                                startTime: e.startTime,
                                                workerTime: Date.now() - n,
                                                toWorkerDelayTime: n - e.startTime,
                                                fromWorkerDelayTime: Date.now(),
                                                fetchTime: o,
                                                decodeTime: h
                                            }, Date.now(), v = a.from(m), g = v.toString("base64"), r.abrupt("return", {
                                                id: e.id,
                                                type: "pdic-decode",
                                                ok: !0,
                                                payload: {
                                                    buffer: g,
                                                    info: y
                                                },
                                                imageType: "image/bmp"
                                            });
                                        case 27:
                                        case "end":
                                            return r.stop()
                                    }
                                }), t)
                            })))
                        })(t).then((function(e) {
                            return m(o, e)
                        })).catch((function(e) {
                            return l(o, e.message || "pdic-web: worker 未知错误")
                        }));
                        break;
                    case "pdic-parse":
                        (function(e) {
                            return n(this, void 0, void 0, r.default.mark((function t() {
                                var n, i, a, o, u, f;
                                return r.default.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (e.payload && e.payload instanceof ArrayBuffer) {
                                                r.next = 2;
                                                break
                                            }
                                            throw new Error("pdic-web: pdic payload 为空或非ArrayBuffer类型");
                                        case 2:
                                            return n = Date.now(), r.next = 5, c(e.payload);
                                        case 5:
                                            return i = r.sent, a = i.bmpArr, o = i.pdicInfo, u = Date.now() - n, f = {
                                                url: "",
                                                imageType: "image/bmp",
                                                originSize: e.payload.byteLength,
                                                width: o.width,
                                                height: o.height,
                                                startTime: e.startTime,
                                                workerTime: Date.now() - n,
                                                toWorkerDelayTime: n - e.startTime,
                                                fromWorkerDelayTime: Date.now(),
                                                fetchTime: -1,
                                                decodeTime: u
                                            }, r.abrupt("return", {
                                                id: e.id,
                                                type: "pdic-decode",
                                                ok: !0,
                                                payload: {
                                                    buffer: a,
                                                    info: f
                                                },
                                                imageType: "image/bmp"
                                            });
                                        case 11:
                                        case "end":
                                            return r.stop()
                                    }
                                }), t)
                            })))
                        })(t).then((function(e) {
                            return m(o, e)
                        })).catch((function(e) {
                            return l(o, e.message || "pdic-web: worker 未知错误")
                        }));
                        break;
                    default:
                        l(o, "pdic-web: worker 未知的任务类型")
                }
            }
        } else ! function(e) {
            n(this, void 0, void 0, r.default.mark((function t() {
                var n, a, o, c, u;
                return r.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return n = Date.now(), a = n - e, o = -1, r.next = 5, h().catch((function() {}));
                        case 5:
                            if (r.t0 = r.sent, r.t0) {
                                r.next = 8;
                                break
                            }
                            r.t0 = -1;
                        case 8:
                            o = r.t0, c = Date.now() - n, u = {
                                type: "pdic-init",
                                payload: {
                                    createWorkerTime: -1,
                                    firstMsgDelay: a,
                                    initPdicTime: o,
                                    firstMsgToReady: c
                                }
                            }, i.postMessage(u);
                        case 12:
                        case "end":
                            return r.stop()
                    }
                }), t)
            })))
        }(t.payload)
    }));
});
define("pdic-workers/wxam2pic-bmp.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var n = function(n) {
        var e, i;
        (n = void 0 !== (n = n || {}) ? n : {}).ready = new Promise((function(n, t) {
            e = n, i = t
        }));
        var t, f = {};
        for (t in n) n.hasOwnProperty(t) && (f[t] = n[t]);
        var u, r = [],
            o = n.print || console.log.bind(console),
            a = n.printErr || console.warn.bind(console);
        for (t in f) f.hasOwnProperty(t) && (n[t] = f[t]);
        f = null;
        var s = !1;

        function c(n, e) {
            n || T("Assertion failed: " + e)
        }

        function m(e) {
            var i = n["_" + e];
            return c(i, "Cannot call unknown function " + e + ", make sure it is exported"), i
        }

        function _(n, e, i, t, f) {
            var u = {
                    string: function(n) {
                        var e = 0;
                        if (null != n && 0 !== n) {
                            var i = 1 + (n.length << 2);
                            ! function(n, e, i) {
                                ! function(n, e, i, t) {
                                    if (!(t > 0)) return 0;
                                    for (var f = i + t - 1, u = 0; u < n.length; ++u) {
                                        var r = n.charCodeAt(u);
                                        if (r >= 55296 && r <= 57343) {
                                            var o = n.charCodeAt(++u);
                                            r = 65536 + ((1023 & r) << 10) | 1023 & o
                                        }
                                        if (r <= 127) {
                                            if (i >= f) break;
                                            e[i++] = r
                                        } else if (r <= 2047) {
                                            if (i + 1 >= f) break;
                                            e[i++] = 192 | r >> 6, e[i++] = 128 | 63 & r
                                        } else if (r <= 65535) {
                                            if (i + 2 >= f) break;
                                            e[i++] = 224 | r >> 12, e[i++] = 128 | r >> 6 & 63, e[i++] = 128 | 63 & r
                                        } else {
                                            if (i + 3 >= f) break;
                                            e[i++] = 240 | r >> 18, e[i++] = 128 | r >> 12 & 63, e[i++] = 128 | r >> 6 & 63, e[i++] = 128 | 63 & r
                                        }
                                    }
                                    e[i] = 0
                                }(n, d, e, i)
                            }(n, e = L(i), i)
                        }
                        return e
                    },
                    array: function(n) {
                        var e = L(n.length);
                        return function(n, e) {
                            g.set(n, e)
                        }(n, e), e
                    }
                },
                r = m(n),
                o = [],
                a = 0;
            if (t)
                for (var s = 0; s < t.length; s++) {
                    var c = u[i[s]];
                    c ? (0 === a && (a = z()), o[s] = c(t[s])) : o[s] = t[s]
                }
            var _ = r.apply(null, o);
            return _ = function(n) {
                return "string" === e ? A(n) : "boolean" === e ? Boolean(n) : n
            }(_), 0 !== a && B(a), _
        }
        var l, g, d, p, v, x, h, y = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

        function b(n, e, i) {
            for (var t = e + i, f = e; n[f] && !(f >= t);) ++f;
            if (f - e > 16 && n.subarray && y) return y.decode(n.subarray(e, f));
            for (var u = ""; e < f;) {
                var r = n[e++];
                if (128 & r) {
                    var o = 63 & n[e++];
                    if (192 != (224 & r)) {
                        var a = 63 & n[e++];
                        if ((r = 224 == (240 & r) ? (15 & r) << 12 | o << 6 | a : (7 & r) << 18 | o << 12 | a << 6 | 63 & n[e++]) < 65536) u += String.fromCharCode(r);
                        else {
                            var s = r - 65536;
                            u += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s)
                        }
                    } else u += String.fromCharCode((31 & r) << 6 | o)
                } else u += String.fromCharCode(r)
            }
            return u
        }

        function A(n, e) {
            return n ? b(d, n, e) : ""
        }

        function w(e) {
            l = e, n.HEAP8 = g = new Int8Array(e), n.HEAP16 = p = new Int16Array(e), n.HEAP32 = v = new Int32Array(e), n.HEAPU8 = d = new Uint8Array(e), n.HEAPU16 = new Uint16Array(e), n.HEAPU32 = new Uint32Array(e), n.HEAPF32 = x = new Float32Array(e), n.HEAPF64 = h = new Float64Array(e)
        }
        n.INITIAL_MEMORY;
        var R, k, I, C = [],
            P = [],
            S = [],
            E = [],
            M = 0,
            D = null,
            H = null;

        function T(e) {
            n.onAbort && n.onAbort(e), a(e += ""), s = !0, e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.";
            var t = new WebAssembly.RuntimeError(e);
            throw i(t), t
        }

        function U(e) {
            for (; e.length > 0;) {
                var i = e.shift();
                if ("function" != typeof i) {
                    var t = i.func;
                    "number" == typeof t ? void 0 === i.arg ? R.get(t)() : R.get(t)(i.arg) : t(void 0 === i.arg ? null : i.arg)
                } else i(n)
            }
        }

        function O(n) {
            try {
                return u.grow(n - l.byteLength + 65535 >>> 16), w(u.buffer), 1
            } catch (n) {}
        }
        n.preloadedImages = {}, n.preloadedAudios = {};
        var F = {
            mappings: {},
            buffers: [null, [],
                []
            ],
            printChar: function(n, e) {
                var i = F.buffers[n];
                0 === e || 10 === e ? ((1 === n ? o : a)(b(i, 0)), i.length = 0) : i.push(e)
            },
            varargs: void 0,
            get: function() {
                return F.varargs += 4, v[F.varargs - 4 >> 2]
            },
            getStr: function(n) {
                return A(n)
            },
            get64: function(n, e) {
                return n
            }
        };
        "function" == typeof atob && atob;
        var V, W = {
                a: function() {
                    T()
                },
                k: function(n, e, i) {
                    d.copyWithin(n, e, e + i)
                },
                m: function(n) {
                    var e, i, t = d.length;
                    if ((n >>>= 0) > 2147483648) return !1;
                    for (var f = 1; f <= 4; f *= 2) {
                        var u = t * (1 + .2 / f);
                        if (u = Math.min(u, n + 100663296), O(Math.min(2147483648, ((e = Math.max(n, u)) % (i = 65536) > 0 && (e += i - e % i), e)))) return !0
                    }
                    return !1
                },
                n: function(n) {
                    return 0
                },
                j: function(n, e, i, t, f) {},
                b: function(n, e, i, t) {
                    for (var f = 0, u = 0; u < i; u++) {
                        for (var r = v[e + 8 * u >> 2], o = v[e + (8 * u + 4) >> 2], a = 0; a < o; a++) F.printChar(n, d[r + a]);
                        f += o
                    }
                    return v[t >> 2] = f, 0
                },
                u: function() {
                    a("missing function: ff_emu_edge_hfix10_mmx"), T(-1)
                },
                t: function() {
                    a("missing function: ff_emu_edge_hfix12_mmx"), T(-1)
                },
                s: function() {
                    a("missing function: ff_emu_edge_hfix14_mmx"), T(-1)
                },
                r: function() {
                    a("missing function: ff_emu_edge_hfix16_mmx"), T(-1)
                },
                q: function() {
                    a("missing function: ff_emu_edge_hfix18_mmx"), T(-1)
                },
                p: function() {
                    a("missing function: ff_emu_edge_hfix20_mmx"), T(-1)
                },
                o: function() {
                    a("missing function: ff_emu_edge_hfix22_mmx"), T(-1)
                },
                y: function() {
                    a("missing function: ff_emu_edge_hfix2_mmx"), T(-1)
                },
                x: function() {
                    a("missing function: ff_emu_edge_hfix4_mmx"), T(-1)
                },
                w: function() {
                    a("missing function: ff_emu_edge_hfix6_mmx"), T(-1)
                },
                v: function() {
                    a("missing function: ff_emu_edge_hfix8_mmx"), T(-1)
                },
                c: function() {
                    a("missing function: ff_emu_edge_hvar_mmx"), T(-1)
                },
                M: function() {
                    a("missing function: ff_emu_edge_vfix10_mmx"), T(-1)
                },
                L: function() {
                    a("missing function: ff_emu_edge_vfix11_mmx"), T(-1)
                },
                K: function() {
                    a("missing function: ff_emu_edge_vfix12_mmx"), T(-1)
                },
                J: function() {
                    a("missing function: ff_emu_edge_vfix13_mmx"), T(-1)
                },
                I: function() {
                    a("missing function: ff_emu_edge_vfix14_mmx"), T(-1)
                },
                H: function() {
                    a("missing function: ff_emu_edge_vfix15_mmx"), T(-1)
                },
                G: function() {
                    a("missing function: ff_emu_edge_vfix16_mmx"), T(-1)
                },
                E: function() {
                    a("missing function: ff_emu_edge_vfix17_mmx"), T(-1)
                },
                D: function() {
                    a("missing function: ff_emu_edge_vfix18_mmx"), T(-1)
                },
                C: function() {
                    a("missing function: ff_emu_edge_vfix19_mmx"), T(-1)
                },
                l: function() {
                    a("missing function: ff_emu_edge_vfix1_mmx"), T(-1)
                },
                B: function() {
                    a("missing function: ff_emu_edge_vfix20_mmx"), T(-1)
                },
                A: function() {
                    a("missing function: ff_emu_edge_vfix21_mmx"), T(-1)
                },
                z: function() {
                    a("missing function: ff_emu_edge_vfix22_mmx"), T(-1)
                },
                i: function() {
                    a("missing function: ff_emu_edge_vfix2_mmx"), T(-1)
                },
                h: function() {
                    a("missing function: ff_emu_edge_vfix3_mmx"), T(-1)
                },
                g: function() {
                    a("missing function: ff_emu_edge_vfix4_mmx"), T(-1)
                },
                f: function() {
                    a("missing function: ff_emu_edge_vfix5_mmx"), T(-1)
                },
                e: function() {
                    a("missing function: ff_emu_edge_vfix6_mmx"), T(-1)
                },
                P: function() {
                    a("missing function: ff_emu_edge_vfix7_mmx"), T(-1)
                },
                O: function() {
                    a("missing function: ff_emu_edge_vfix8_mmx"), T(-1)
                },
                N: function() {
                    a("missing function: ff_emu_edge_vfix9_mmx"), T(-1)
                },
                F: function() {
                    a("missing function: ff_emu_edge_vvar_mmx"), T(-1)
                },
                d: function() {
                    return 28
                }
            },
            z = (function() {
                var e, i = {
                    a: W
                };

                function t(e, i) {
                    var t, f = e.exports;
                    n.asm = f, w((u = n.asm.Q).buffer), R = n.asm.aa, t = n.asm.R, P.unshift(t),
                        function(e) {
                            if (M--, n.monitorRunDependencies && n.monitorRunDependencies(M), 0 == M && (null !== D && (clearInterval(D), D = null), H)) {
                                var i = H;
                                H = null, i()
                            }
                        }()
                }
                M++, n.monitorRunDependencies && n.monitorRunDependencies(M), e = function(n) {
                    t(n.instance)
                }, Promise.resolve().then((function() {
                    return "libs/wxam2pic-bmp.wasm.br"
                })).then((function(n) {
                    return WXWebAssembly.instantiate(n, i)
                })).then(e, (function(n) {
                    a("failed to asynchronously prepare wasm: " + n), T(n)
                }))
            }(), n.___wasm_call_ctors = function() {
                return (n.___wasm_call_ctors = n.asm.R).apply(null, arguments)
            }, n._version = function() {
                return (n._version = n.asm.S).apply(null, arguments)
            }, n._create_buffer = function() {
                return (n._create_buffer = n.asm.T).apply(null, arguments)
            }, n._malloc = function() {
                return (n._malloc = n.asm.U).apply(null, arguments)
            }, n._destroy_buffer = function() {
                return (n._destroy_buffer = n.asm.V).apply(null, arguments)
            }, n._free = function() {
                return (n._free = n.asm.W).apply(null, arguments)
            }, n._get_info = function() {
                return (n._get_info = n.asm.X).apply(null, arguments)
            }, n._decode = function() {
                return (n._decode = n.asm.Y).apply(null, arguments)
            }, n._structCreate = function() {
                return (n._structCreate = n.asm.Z).apply(null, arguments)
            }, n._structDestory = function() {
                return (n._structDestory = n.asm._).apply(null, arguments)
            }, n._structQuery = function() {
                return (n._structQuery = n.asm.$).apply(null, arguments)
            }, n.stackSave = function() {
                return (z = n.stackSave = n.asm.ba).apply(null, arguments)
            }),
            B = n.stackRestore = function() {
                return (B = n.stackRestore = n.asm.ca).apply(null, arguments)
            },
            L = n.stackAlloc = function() {
                return (L = n.stackAlloc = n.asm.da).apply(null, arguments)
            };

        function N(i) {
            function t() {
                V || (V = !0, n.calledRun = !0, s || (U(P), U(S), e(n), n.onRuntimeInitialized && n.onRuntimeInitialized(), function() {
                    if (n.postRun)
                        for ("function" == typeof n.postRun && (n.postRun = [n.postRun]); n.postRun.length;) e = n.postRun.shift(), E.unshift(e);
                    var e;
                    U(E)
                }()))
            }
            i = i || r, M > 0 || (function() {
                if (n.preRun)
                    for ("function" == typeof n.preRun && (n.preRun = [n.preRun]); n.preRun.length;) e = n.preRun.shift(), C.unshift(e);
                var e;
                U(C)
            }(), M > 0 || (n.setStatus ? (n.setStatus("Running..."), setTimeout((function() {
                setTimeout((function() {
                    n.setStatus("")
                }), 1), t()
            }), 1)) : t()))
        }
        if (n.cwrap = function(n, e, i, t) {
                var f = (i = i || []).every((function(n) {
                    return "number" === n
                }));
                return "string" !== e && f && !t ? m(n) : function() {
                    return _(n, e, i, arguments)
                }
            }, n.setValue = function(n, e, i, t) {
                switch ("*" === (i = i || "i8").charAt(i.length - 1) && (i = "i32"), i) {
                    case "i1":
                    case "i8":
                        g[n >> 0] = e;
                        break;
                    case "i16":
                        p[n >> 1] = e;
                        break;
                    case "i32":
                        v[n >> 2] = e;
                        break;
                    case "i64":
                        I = [e >>> 0, (k = e, +Math.abs(k) >= 1 ? k > 0 ? (0 | Math.min(+Math.floor(k / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((k - +(~~k >>> 0)) / 4294967296) >>> 0 : 0)], v[n >> 2] = I[0], v[n + 4 >> 2] = I[1];
                        break;
                    case "float":
                        x[n >> 2] = e;
                        break;
                    case "double":
                        h[n >> 3] = e;
                        break;
                    default:
                        T("invalid type for setValue: " + i)
                }
            }, n.getValue = function(n, e, i) {
                switch ("*" === (e = e || "i8").charAt(e.length - 1) && (e = "i32"), e) {
                    case "i1":
                    case "i8":
                        return g[n >> 0];
                    case "i16":
                        return p[n >> 1];
                    case "i32":
                    case "i64":
                        return v[n >> 2];
                    case "float":
                        return x[n >> 2];
                    case "double":
                        return h[n >> 3];
                    default:
                        T("invalid type for getValue: " + e)
                }
                return null
            }, H = function n() {
                V || N(), V || (H = n)
            }, n.run = N, n.preInit)
            for ("function" == typeof n.preInit && (n.preInit = [n.preInit]); n.preInit.length > 0;) n.preInit.pop()();
        return N(), n.ready
    };
    exports.default = n;
});