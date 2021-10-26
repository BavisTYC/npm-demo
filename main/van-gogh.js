function FastClick(t) {
    "use strict";

    function e(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    var i;
    this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = t, FastClick.notNeeded(t) || (deviceIsAndroid && (t.addEventListener("mouseover", e(this.onMouse, this), !0), t.addEventListener("mousedown", e(this.onMouse, this), !0), t.addEventListener("mouseup", e(this.onMouse, this), !0)), t.addEventListener("click", e(this.onClick, this), !0), t.addEventListener("touchstart", e(this.onTouchStart, this), !1), t.addEventListener("touchmove", e(this.onTouchMove, this), !1), t.addEventListener("touchend", e(this.onTouchEnd, this), !1), t.addEventListener("touchcancel", e(this.onTouchCancel, this), !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, i, n) {
        var s = Node.prototype.removeEventListener;
        "click" === e ? s.call(t, e, i.hijacked || i, n) : s.call(t, e, i, n)
    }, t.addEventListener = function(e, i, n) {
        var s = Node.prototype.addEventListener;
        "click" === e ? s.call(t, e, i.hijacked || (i.hijacked = function(t) {
            t.propagationStopped || i(t)
        }), n) : s.call(t, e, i, n)
    }), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function(t) {
        i(t)
    }, !1), t.onclick = null))
}

function r(t) {
    return function() {
        return this[t]
    }
}

function PointerEventsPolyfill(t) {
    if (this.options = {
            selector: "*",
            mouseEvents: ["click", "dblclick", "mousedown", "mouseup"],
            usePolyfillIf: function() {
                if ("Microsoft Internet Explorer" == navigator.appName) {
                    if (null != navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)) {
                        if (parseFloat(RegExp.$1) < 11) return !0
                    }
                }
                return !1
            }
        }, t) {
        var e = this;
        $.each(t, function(t, i) {
            e.options[t] = i
        })
    }
    this.options.usePolyfillIf() && this.register_mouse_events()
}

function updateQueryStringParameter(t, e, i) {
    var n = new RegExp("([?&])" + e + "=.*?(&|$)", "i"),
        s = -1 !== t.indexOf("?") ? "&" : "?";
    return t.match(n) ? t.replace(n, "$1" + e + "=" + i + "$2") : t + s + e + "=" + i
}

function isElementInViewport(t) {
    "function" == typeof jQuery && t instanceof jQuery && (t = t[0]);
    var e = t.getBoundingClientRect();
    return e.top >= -e.height / 2 && e.left >= 0 && e.bottom - e.height / 2 <= $(window).height() && e.right <= $(window).width()
}

function onVisibilityChange(t, e) {
    var i;
    return function() {
        var n = isElementInViewport(t);
        n != i && (i = n, "function" == typeof e && e(t, n))
    }
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = t.length,
            i = nt.type(t);
        return "function" !== i && !nt.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }

    function n(t, e, i) {
        if (nt.isFunction(e)) return nt.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return nt.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (ut.test(e)) return nt.filter(e, t, i);
            e = nt.filter(e, t)
        }
        return nt.grep(t, function(t) {
            return nt.inArray(t, e) >= 0 !== i
        })
    }

    function s(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);
        return t
    }

    function a(t) {
        var e = yt[t] = {};
        return nt.each(t.match(vt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function o() {
        pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1)) : (pt.detachEvent("onreadystatechange", r), t.detachEvent("onload", r))
    }

    function r() {
        (pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (o(), nt.ready())
    }

    function h(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace($t, "-$1").toLowerCase();
            if ("string" == typeof(i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : xt.test(i) ? nt.parseJSON(i) : i)
                } catch (t) {}
                nt.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function l(t) {
        var e;
        for (e in t)
            if (("data" !== e || !nt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, i, n) {
        if (nt.acceptData(t)) {
            var s, a, o = nt.expando,
                r = t.nodeType,
                h = r ? nt.cache : t,
                l = r ? t[o] : t[o] && o;
            if (l && h[l] && (n || h[l].data) || void 0 !== i || "string" != typeof e) return l || (l = r ? t[o] = G.pop() || nt.guid++ : o), h[l] || (h[l] = r ? {} : {
                toJSON: nt.noop
            }), "object" != typeof e && "function" != typeof e || (n ? h[l] = nt.extend(h[l], e) : h[l].data = nt.extend(h[l].data, e)), a = h[l], n || (a.data || (a.data = {}), a = a.data), void 0 !== i && (a[nt.camelCase(e)] = i), "string" == typeof e ? null == (s = a[e]) && (s = a[nt.camelCase(e)]) : s = a, s
        }
    }

    function u(t, e, i) {
        if (nt.acceptData(t)) {
            var n, s, a = t.nodeType,
                o = a ? nt.cache : t,
                r = a ? t[nt.expando] : nt.expando;
            if (o[r]) {
                if (e && (n = i ? o[r] : o[r].data)) {
                    nt.isArray(e) ? e = e.concat(nt.map(e, nt.camelCase)) : e in n ? e = [e] : (e = nt.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                    for (; s--;) delete n[e[s]];
                    if (i ? !l(n) : !nt.isEmptyObject(n)) return
                }(i || (delete o[r].data, l(o[r]))) && (a ? nt.cleanData([t], !0) : it.deleteExpando || o != o.window ? delete o[r] : o[r] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return pt.activeElement
        } catch (t) {}
    }

    function g(t) {
        var e = Lt.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function m(t, e) {
        var i, n, s = 0,
            a = typeof t.getElementsByTagName !== kt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== kt ? t.querySelectorAll(e || "*") : void 0;
        if (!a)
            for (a = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || nt.nodeName(n, e) ? a.push(n) : nt.merge(a, m(n, e));
        return void 0 === e || e && nt.nodeName(t, e) ? nt.merge([t], a) : a
    }

    function v(t) {
        Mt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return nt.nodeName(t, "table") && nt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== nt.find.attr(t, "type")) + "/" + t.type, t
    }

    function w(t) {
        var e = Yt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function k(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) nt._data(i, "globalEval", !e || nt._data(e[n], "globalEval"))
    }

    function x(t, e) {
        if (1 === e.nodeType && nt.hasData(t)) {
            var i, n, s, a = nt._data(t),
                o = nt._data(e, a),
                r = a.events;
            if (r) {
                delete o.handle, o.events = {};
                for (i in r)
                    for (n = 0, s = r[i].length; n < s; n++) nt.event.add(e, i, r[i][n])
            }
            o.data && (o.data = nt.extend({}, o.data))
        }
    }

    function $(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !it.noCloneEvent && e[nt.expando]) {
                s = nt._data(e);
                for (n in s.events) nt.removeEvent(e, n, s.handle);
                e.removeAttribute(nt.expando)
            }
            "script" === i && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), it.html5Clone && t.innerHTML && !nt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Mt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }
    }

    function C(e, i) {
        var n, s = nt(i.createElement(e)).appendTo(i.body),
            a = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : nt.css(s[0], "display");
        return s.detach(), a
    }

    function _(t) {
        var e = pt,
            i = Jt[t];
        return i || (i = C(t, e), "none" !== i && i || (Vt = (Vt || nt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Vt[0].contentWindow || Vt[0].contentDocument).document, e.write(), e.close(), i = C(t, e), Vt.detach()), Jt[t] = i), i
    }

    function T(t, e) {
        return {
            get: function() {
                var i = t();
                if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function D(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = ce.length; s--;)
            if ((e = ce[s] + i) in t) return e;
        return n
    }

    function M(t, e) {
        for (var i, n, s, a = [], o = 0, r = t.length; o < r; o++) n = t[o], n.style && (a[o] = nt._data(n, "olddisplay"), i = n.style.display, e ? (a[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Tt(n) && (a[o] = nt._data(n, "olddisplay", _(n.nodeName)))) : (s = Tt(n), (i && "none" !== i || !s) && nt._data(n, "olddisplay", s ? i : nt.css(n, "display"))));
        for (o = 0; o < r; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? a[o] || "" : "none"));
        return t
    }

    function S(t, e, i) {
        var n = oe.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function E(t, e, i, n, s) {
        for (var a = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; a < 4; a += 2) "margin" === i && (o += nt.css(t, i + _t[a], !0, s)), n ? ("content" === i && (o -= nt.css(t, "padding" + _t[a], !0, s)), "margin" !== i && (o -= nt.css(t, "border" + _t[a] + "Width", !0, s))) : (o += nt.css(t, "padding" + _t[a], !0, s), "padding" !== i && (o += nt.css(t, "border" + _t[a] + "Width", !0, s)));
        return o
    }

    function N(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            a = Qt(t),
            o = it.boxSizing && "border-box" === nt.css(t, "boxSizing", !1, a);
        if (s <= 0 || null == s) {
            if (s = Zt(t, e, a), (s < 0 || null == s) && (s = t.style[e]), ee.test(s)) return s;
            n = o && (it.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + E(t, e, i || (o ? "border" : "content"), n, a) + "px"
    }

    function A(t, e, i, n, s) {
        return new A.prototype.init(t, e, i, n, s)
    }

    function I() {
        return setTimeout(function() {
            ue = void 0
        }), ue = nt.now()
    }

    function L(t, e) {
        var i, n = {
                height: t
            },
            s = 0;
        for (e = e ? 1 : 0; s < 4; s += 2 - e) i = _t[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function j(t, e, i) {
        for (var n, s = (ve[e] || []).concat(ve["*"]), a = 0, o = s.length; a < o; a++)
            if (n = s[a].call(i, e, t)) return n
    }

    function O(t, e, i) {
        var n, s, a, o, r, h, l, c = this,
            u = {},
            d = t.style,
            p = t.nodeType && Tt(t),
            f = nt._data(t, "fxshow");
        i.queue || (r = nt._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, h = r.empty.fire, r.empty.fire = function() {
            r.unqueued || h()
        }), r.unqueued++, c.always(function() {
            c.always(function() {
                r.unqueued--, nt.queue(t, "fx").length || r.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], l = nt.css(t, "display"), "inline" === ("none" === l ? nt._data(t, "olddisplay") || _(t.nodeName) : l) && "none" === nt.css(t, "float") && (it.inlineBlockNeedsLayout && "inline" !== _(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), i.overflow && (d.overflow = "hidden", it.shrinkWrapBlocks() || c.always(function() {
            d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (s = e[n], pe.exec(s)) {
                if (delete e[n], a = a || "toggle" === s, s === (p ? "hide" : "show")) {
                    if ("show" !== s || !f || void 0 === f[n]) continue;
                    p = !0
                }
                u[n] = f && f[n] || nt.style(t, n)
            } else l = void 0;
        if (nt.isEmptyObject(u)) "inline" === ("none" === l ? _(t.nodeName) : l) && (d.display = l);
        else {
            f ? "hidden" in f && (p = f.hidden) : f = nt._data(t, "fxshow", {}), a && (f.hidden = !p), p ? nt(t).show() : c.done(function() {
                nt(t).hide()
            }), c.done(function() {
                var e;
                nt._removeData(t, "fxshow");
                for (e in u) nt.style(t, e, u[e])
            });
            for (n in u) o = j(p ? f[n] : 0, n, c), n in f || (f[n] = o.start, p && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function F(t, e) {
        var i, n, s, a, o;
        for (i in t)
            if (n = nt.camelCase(i), s = e[n], a = t[i], nt.isArray(a) && (s = a[1], a = t[i] = a[0]), i !== n && (t[n] = a, delete t[i]), (o = nt.cssHooks[n]) && "expand" in o) {
                a = o.expand(a), delete t[n];
                for (i in a) i in t || (t[i] = a[i], e[i] = s)
            } else e[n] = s
    }

    function B(t, e, i) {
        var n, s, a = 0,
            o = me.length,
            r = nt.Deferred().always(function() {
                delete h.elem
            }),
            h = function() {
                if (s) return !1;
                for (var e = ue || I(), i = Math.max(0, l.startTime + l.duration - e), n = i / l.duration || 0, a = 1 - n, o = 0, h = l.tweens.length; o < h; o++) l.tweens[o].run(a);
                return r.notifyWith(t, [l, a, i]), a < 1 && h ? i : (r.resolveWith(t, [l]), !1)
            },
            l = r.promise({
                elem: t,
                props: nt.extend({}, e),
                opts: nt.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: ue || I(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = nt.Tween(t, l.opts, e, i, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? l.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) l.tweens[i].run(1);
                    return e ? r.resolveWith(t, [l, e]) : r.rejectWith(t, [l, e]), this
                }
            }),
            c = l.props;
        for (F(c, l.opts.specialEasing); a < o; a++)
            if (n = me[a].call(l, t, c, l.opts)) return n;
        return nt.map(c, j, l), nt.isFunction(l.opts.start) && l.opts.start.call(t, l), nt.fx.timer(nt.extend(h, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function P(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                a = e.toLowerCase().match(vt) || [];
            if (nt.isFunction(i))
                for (; n = a[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function H(t, e, i, n) {
        function s(r) {
            var h;
            return a[r] = !0, nt.each(t[r] || [], function(t, r) {
                var l = r(e, i, n);
                return "string" != typeof l || o || a[l] ? o ? !(h = l) : void 0 : (e.dataTypes.unshift(l), s(l), !1)
            }), h
        }
        var a = {},
            o = t === Re;
        return s(e.dataTypes[0]) || !a["*"] && s("*")
    }

    function R(t, e) {
        var i, n, s = nt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && nt.extend(!0, t, i), t
    }

    function W(t, e, i) {
        for (var n, s, a, o, r = t.contents, h = t.dataTypes;
            "*" === h[0];) h.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)
            for (o in r)
                if (r[o] && r[o].test(s)) {
                    h.unshift(o);
                    break
                }
        if (h[0] in i) a = h[0];
        else {
            for (o in i) {
                if (!h[0] || t.converters[o + " " + h[0]]) {
                    a = o;
                    break
                }
                n || (n = o)
            }
            a = a || n
        }
        if (a) return a !== h[0] && h.unshift(a), i[a]
    }

    function z(t, e, i, n) {
        var s, a, o, r, h, l = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) l[o.toLowerCase()] = t.converters[o];
        for (a = c.shift(); a;)
            if (t.responseFields[a] && (i[t.responseFields[a]] = e), !h && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), h = a, a = c.shift())
                if ("*" === a) a = h;
                else if ("*" !== h && h !== a) {
            if (!(o = l[h + " " + a] || l["* " + a]))
                for (s in l)
                    if (r = s.split(" "), r[1] === a && (o = l[h + " " + r[0]] || l["* " + r[0]])) {
                        !0 === o ? o = l[s] : !0 !== l[s] && (a = r[0], c.unshift(r[1]));
                        break
                    }
            if (!0 !== o)
                if (o && t.throws) e = o(e);
                else try {
                    e = o(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: o ? t : "No conversion from " + h + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function q(t, e, i, n) {
        var s;
        if (nt.isArray(e)) nt.each(e, function(e, s) {
            i || qe.test(t) ? n(t, s) : q(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== nt.type(e)) n(t, e);
        else
            for (s in e) q(t + "[" + s + "]", e[s], i, n)
    }

    function Y() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }

    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function X(t) {
        return nt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var G = [],
        K = G.slice,
        V = G.concat,
        J = G.push,
        Q = G.indexOf,
        Z = {},
        tt = Z.toString,
        et = Z.hasOwnProperty,
        it = {},
        nt = function(t, e) {
            return new nt.fn.init(t, e)
        },
        st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        ot = /-([\da-z])/gi,
        rt = function(t, e) {
            return e.toUpperCase()
        };
    nt.fn = nt.prototype = {
        jquery: "1.11.1",
        constructor: nt,
        selector: "",
        length: 0,
        toArray: function() {
            return K.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : K.call(this)
        },
        pushStack: function(t) {
            var e = nt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return nt.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(nt.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: J,
        sort: G.sort,
        splice: G.splice
    }, nt.extend = nt.fn.extend = function() {
        var t, e, i, n, s, a, o = arguments[0] || {},
            r = 1,
            h = arguments.length,
            l = !1;
        for ("boolean" == typeof o && (l = o, o = arguments[r] || {}, r++), "object" == typeof o || nt.isFunction(o) || (o = {}), r === h && (o = this, r--); r < h; r++)
            if (null != (s = arguments[r]))
                for (n in s) t = o[n], i = s[n], o !== i && (l && i && (nt.isPlainObject(i) || (e = nt.isArray(i))) ? (e ? (e = !1, a = t && nt.isArray(t) ? t : []) : a = t && nt.isPlainObject(t) ? t : {}, o[n] = nt.extend(l, a, i)) : void 0 !== i && (o[n] = i));
        return o
    }, nt.extend({
        expando: "jQuery" + ("1.11.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === nt.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === nt.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !nt.isArray(t) && t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== nt.type(t) || t.nodeType || nt.isWindow(t)) return !1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            if (it.ownLast)
                for (e in t) return et.call(t, e);
            for (e in t);
            return void 0 === e || et.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && nt.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(at, "ms-").replace(ot, rt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var s = 0,
                a = t.length,
                o = i(t);
            if (n) {
                if (o)
                    for (; s < a && !1 !== e.apply(t[s], n); s++);
                else
                    for (s in t)
                        if (!1 === e.apply(t[s], n)) break
            } else if (o)
                for (; s < a && !1 !== e.call(t[s], s, t[s]); s++);
            else
                for (s in t)
                    if (!1 === e.call(t[s], s, t[s])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(st, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? nt.merge(n, "string" == typeof t ? [t] : t) : J.call(n, t)), n
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (Q) return Q.call(e, t, i);
                for (n = e.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i;) t[s++] = e[n++];
            if (i !== i)
                for (; void 0 !== e[n];) t[s++] = e[n++];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, a = t.length, o = !i; s < a; s++) !e(t[s], s) !== o && n.push(t[s]);
            return n
        },
        map: function(t, e, n) {
            var s, a = 0,
                o = t.length,
                r = i(t),
                h = [];
            if (r)
                for (; a < o; a++) null != (s = e(t[a], a, n)) && h.push(s);
            else
                for (a in t) null != (s = e(t[a], a, n)) && h.push(s);
            return V.apply([], h)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            if ("string" == typeof e && (s = t[e], e = t, t = s), nt.isFunction(t)) return i = K.call(arguments, 2), n = function() {
                return t.apply(e || this, i.concat(K.call(arguments)))
            }, n.guid = t.guid = t.guid || nt.guid++, n
        },
        now: function() {
            return +new Date
        },
        support: it
    }), nt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ht = function(t) {
        function e(t, e, i, n) {
            var s, a, o, r, l, u, d, p, f, g;
            if ((e ? e.ownerDocument || e : B) !== E && S(e), e = e || E, i = i || [], !t || "string" != typeof t) return i;
            if (1 !== (r = e.nodeType) && 9 !== r) return [];
            if (A && !n) {
                if (s = mt.exec(t))
                    if (o = s[1]) {
                        if (9 === r) {
                            if (!(a = e.getElementById(o)) || !a.parentNode) return i;
                            if (a.id === o) return i.push(a), i
                        } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(o)) && O(e, a) && a.id === o) return i.push(a), i
                    } else {
                        if (s[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = s[3]) && b.getElementsByClassName && e.getElementsByClassName) return J.apply(i, e.getElementsByClassName(o)), i
                    }
                if (b.qsa && (!I || !I.test(t))) {
                    if (p = d = F, f = e, g = 9 === r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                        for (u = $(t), (d = e.getAttribute("id")) ? p = d.replace(yt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + c(u[l]);
                        f = vt.test(t) && h(e.parentNode) || e, g = u.join(",")
                    }
                    if (g) try {
                        return J.apply(i, f.querySelectorAll(g)), i
                    } catch (t) {} finally {
                        d || e.removeAttribute("id")
                    }
                }
            }
            return _(t.replace(ot, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[F] = !0, t
        }

        function s(t) {
            var e = E.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function a(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
        }

        function o(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function r(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var s, a = t([], i.length, e), o = a.length; o--;) i[s = a[o]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function h(t) {
            return t && typeof t.getElementsByTagName !== Y && t
        }

        function l() {}

        function c(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function u(t, e, i) {
            var n = e.dir,
                s = i && "parentNode" === n,
                a = H++;
            return e.first ? function(e, i, a) {
                for (; e = e[n];)
                    if (1 === e.nodeType || s) return t(e, i, a)
            } : function(e, i, o) {
                var r, h, l = [P, a];
                if (o) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || s) && t(e, i, o)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) {
                            if (h = e[F] || (e[F] = {}), (r = h[n]) && r[0] === P && r[1] === a) return l[2] = r[2];
                            if (h[n] = l, l[2] = t(e, i, o)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function p(t, i, n) {
            for (var s = 0, a = i.length; s < a; s++) e(t, i[s], n);
            return n
        }

        function f(t, e, i, n, s) {
            for (var a, o = [], r = 0, h = t.length, l = null != e; r < h; r++)(a = t[r]) && (i && !i(a, n, s) || (o.push(a), l && e.push(r)));
            return o
        }

        function g(t, e, i, s, a, o) {
            return s && !s[F] && (s = g(s)), a && !a[F] && (a = g(a, o)), n(function(n, o, r, h) {
                var l, c, u, d = [],
                    g = [],
                    m = o.length,
                    v = n || p(e || "*", r.nodeType ? [r] : r, []),
                    y = !t || !n && e ? v : f(v, d, t, r, h),
                    b = i ? a || (n ? t : m || s) ? [] : o : y;
                if (i && i(y, b, r, h), s)
                    for (l = f(b, g), s(l, [], r, h), c = l.length; c--;)(u = l[c]) && (b[g[c]] = !(y[g[c]] = u));
                if (n) {
                    if (a || t) {
                        if (a) {
                            for (l = [], c = b.length; c--;)(u = b[c]) && l.push(y[c] = u);
                            a(null, b = [], l, h)
                        }
                        for (c = b.length; c--;)(u = b[c]) && (l = a ? Z.call(n, u) : d[c]) > -1 && (n[l] = !(o[l] = u))
                    }
                } else b = f(b === o ? b.splice(m, b.length) : b), a ? a(null, o, b, h) : J.apply(o, b)
            })
        }

        function m(t) {
            for (var e, i, n, s = t.length, a = w.relative[t[0].type], o = a || w.relative[" "], r = a ? 1 : 0, h = u(function(t) {
                    return t === e
                }, o, !0), l = u(function(t) {
                    return Z.call(e, t) > -1
                }, o, !0), p = [function(t, i, n) {
                    return !a && (n || i !== T) || ((e = i).nodeType ? h(t, i, n) : l(t, i, n))
                }]; r < s; r++)
                if (i = w.relative[t[r].type]) p = [u(d(p), i)];
                else {
                    if (i = w.filter[t[r].type].apply(null, t[r].matches), i[F]) {
                        for (n = ++r; n < s && !w.relative[t[n].type]; n++);
                        return g(r > 1 && d(p), r > 1 && c(t.slice(0, r - 1).concat({
                            value: " " === t[r - 2].type ? "*" : ""
                        })).replace(ot, "$1"), i, r < n && m(t.slice(r, n)), n < s && m(t = t.slice(n)), n < s && c(t))
                    }
                    p.push(i)
                }
            return d(p)
        }

        function v(t, i) {
            var s = i.length > 0,
                a = t.length > 0,
                o = function(n, o, r, h, l) {
                    var c, u, d, p = 0,
                        g = "0",
                        m = n && [],
                        v = [],
                        y = T,
                        b = n || a && w.find.TAG("*", l),
                        k = P += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (l && (T = o !== E && o); g !== x && null != (c = b[g]); g++) {
                        if (a && c) {
                            for (u = 0; d = t[u++];)
                                if (d(c, o, r)) {
                                    h.push(c);
                                    break
                                }
                            l && (P = k)
                        }
                        s && ((c = !d && c) && p--, n && m.push(c))
                    }
                    if (p += g, s && g !== p) {
                        for (u = 0; d = i[u++];) d(m, v, o, r);
                        if (n) {
                            if (p > 0)
                                for (; g--;) m[g] || v[g] || (v[g] = K.call(h));
                            v = f(v)
                        }
                        J.apply(h, v), l && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(h)
                    }
                    return l && (P = k, T = y), m
                };
            return s ? n(o) : o
        }
        var y, b, w, k, x, $, C, _, T, D, M, S, E, N, A, I, L, j, O, F = "sizzle" + -new Date,
            B = t.document,
            P = 0,
            H = 0,
            R = i(),
            W = i(),
            z = i(),
            q = function(t, e) {
                return t === e && (M = !0), 0
            },
            Y = "undefined",
            U = 1 << 31,
            X = {}.hasOwnProperty,
            G = [],
            K = G.pop,
            V = G.push,
            J = G.push,
            Q = G.slice,
            Z = G.indexOf || function(t) {
                for (var e = 0, i = this.length; e < i; e++)
                    if (this[e] === t) return e;
                return -1
            },
            tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            et = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            nt = it.replace("w", "w#"),
            st = "\\[" + et + "*(" + it + ")(?:" + et + "*([*^$|!~]?=)" + et + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + et + "*\\]",
            at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            ot = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
            rt = new RegExp("^" + et + "*," + et + "*"),
            ht = new RegExp("^" + et + "*([>+~]|" + et + ")" + et + "*"),
            lt = new RegExp("=" + et + "*([^\\]'\"]*?)" + et + "*\\]", "g"),
            ct = new RegExp(at),
            ut = new RegExp("^" + nt + "$"),
            dt = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + tt + ")$", "i"),
                needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
            },
            pt = /^(?:input|select|textarea|button)$/i,
            ft = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            yt = /'|\\/g,
            bt = new RegExp("\\\\([\\da-f]{1,6}" + et + "?|(" + et + ")|.)", "ig"),
            wt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            };
        try {
            J.apply(G = Q.call(B.childNodes), B.childNodes), G[B.childNodes.length].nodeType
        } catch (t) {
            J = {
                apply: G.length ? function(t, e) {
                    V.apply(t, Q.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        b = e.support = {}, x = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, S = e.setDocument = function(t) {
            var e, i = t ? t.ownerDocument || t : B,
                n = i.defaultView;
            return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, N = i.documentElement, A = !x(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                S()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                S()
            })), b.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = s(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = gt.test(i.getElementsByClassName) && s(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), b.getById = s(function(t) {
                return N.appendChild(t).id = F, !i.getElementsByName || !i.getElementsByName(F).length
            }), b.getById ? (w.find.ID = function(t, e) {
                if (typeof e.getElementById !== Y && A) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, w.filter.ID = function(t) {
                var e = t.replace(bt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function(t) {
                var e = t.replace(bt, wt);
                return function(t) {
                    var i = typeof t.getAttributeNode !== Y && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), w.find.TAG = b.getElementsByTagName ? function(t, e) {
                if (typeof e.getElementsByTagName !== Y) return e.getElementsByTagName(t)
            } : function(t, e) {
                var i, n = [],
                    s = 0,
                    a = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = a[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return a
            }, w.find.CLASS = b.getElementsByClassName && function(t, e) {
                if (typeof e.getElementsByClassName !== Y && A) return e.getElementsByClassName(t)
            }, L = [], I = [], (b.qsa = gt.test(i.querySelectorAll)) && (s(function(t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && I.push("[*^$]=" + et + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + et + "*(?:value|" + tt + ")"), t.querySelectorAll(":checked").length || I.push(":checked")
            }), s(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + et + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
            })), (b.matchesSelector = gt.test(j = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && s(function(t) {
                b.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), L.push("!=", at)
            }), I = I.length && new RegExp(I.join("|")), L = L.length && new RegExp(L.join("|")), e = gt.test(N.compareDocumentPosition), O = e || gt.test(N.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, q = e ? function(t, e) {
                if (t === e) return M = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === B && O(B, t) ? -1 : e === i || e.ownerDocument === B && O(B, e) ? 1 : D ? Z.call(D, t) - Z.call(D, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return M = !0, 0;
                var n, s = 0,
                    a = t.parentNode,
                    r = e.parentNode,
                    h = [t],
                    l = [e];
                if (!a || !r) return t === i ? -1 : e === i ? 1 : a ? -1 : r ? 1 : D ? Z.call(D, t) - Z.call(D, e) : 0;
                if (a === r) return o(t, e);
                for (n = t; n = n.parentNode;) h.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; h[s] === l[s];) s++;
                return s ? o(h[s], l[s]) : h[s] === B ? -1 : l[s] === B ? 1 : 0
            }, i) : E
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== E && S(t), i = i.replace(lt, "='$1']"), b.matchesSelector && A && (!L || !L.test(i)) && (!I || !I.test(i))) try {
                var n = j.call(t, i);
                if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {}
            return e(i, E, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== E && S(t), O(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== E && S(t);
            var i = w.attrHandle[e.toLowerCase()],
                n = i && X.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !A) : void 0;
            return void 0 !== n ? n : b.attributes || !A ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                s = 0;
            if (M = !b.detectDuplicates, D = !b.sortStable && t.slice(0), t.sort(q), M) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return D = null, t
        }, k = e.getText = function(t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += k(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[n++];) i += k(e);
            return i
        }, w = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = $(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(bt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = R[t + " "];
                    return e || (e = new RegExp("(^|" + et + ")" + t + "(" + et + "|$)")) && R(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Y && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var a = e.attr(s, t);
                        return null == a ? "!=" === i : !i || (a += "", "=" === i ? a === n : "!=" === i ? a !== n : "^=" === i ? n && 0 === a.indexOf(n) : "*=" === i ? n && a.indexOf(n) > -1 : "$=" === i ? n && a.slice(-n.length) === n : "~=" === i ? (" " + a + " ").indexOf(n) > -1 : "|=" === i && (a === n || a.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, s) {
                    var a = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        r = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, h) {
                        var l, c, u, d, p, f, g = a !== o ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = r && e.nodeName.toLowerCase(),
                            y = !h && !r;
                        if (m) {
                            if (a) {
                                for (; g;) {
                                    for (u = e; u = u[g];)
                                        if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? m.firstChild : m.lastChild], o && y) {
                                for (c = m[F] || (m[F] = {}), l = c[t] || [], p = l[0] === P && l[1], d = l[0] === P && l[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (d = p = 0) || f.pop();)
                                    if (1 === u.nodeType && ++d && u === e) {
                                        c[t] = [P, p, d];
                                        break
                                    }
                            } else if (y && (l = (e[F] || (e[F] = {}))[t]) && l[0] === P) d = l[1];
                            else
                                for (;
                                    (u = ++p && u && u[g] || (d = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (y && ((u[F] || (u[F] = {}))[t] = [P, d]), u !== e)););
                            return (d -= s) === n || d % n == 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var s, a = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return a[F] ? a(i) : a.length > 1 ? (s = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = a(t, i), o = s.length; o--;) n = Z.call(t, s[o]), t[n] = !(e[n] = s[o])
                    }) : function(t) {
                        return a(t, 0, s)
                    }) : a
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        s = C(t.replace(ot, "$1"));
                    return s[F] ? n(function(t, e, i, n) {
                        for (var a, o = s(t, null, n, []), r = t.length; r--;)(a = o[r]) && (t[r] = !(e[r] = a))
                    }) : function(t, n, a) {
                        return e[0] = t, s(e, null, a, i), !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                    }
                }),
                lang: n(function(t) {
                    return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
                        function(e) {
                            var i;
                            do {
                                if (i = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === N
                },
                focus: function(t) {
                    return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !w.pseudos.empty(t)
                },
                header: function(t) {
                    return ft.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: r(function() {
                    return [0]
                }),
                last: r(function(t, e) {
                    return [e - 1]
                }),
                eq: r(function(t, e, i) {
                    return [i < 0 ? i + e : i]
                }),
                even: r(function(t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }),
                odd: r(function(t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }),
                lt: r(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: r(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[y] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(y);
        for (y in {
                submit: !0,
                reset: !0
            }) w.pseudos[y] = function(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }(y);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, $ = e.tokenize = function(t, i) {
            var n, s, a, o, r, h, l, c = W[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (r = t, h = [], l = w.preFilter; r;) {
                n && !(s = rt.exec(r)) || (s && (r = r.slice(s[0].length) || r), h.push(a = [])), n = !1, (s = ht.exec(r)) && (n = s.shift(), a.push({
                    value: n,
                    type: s[0].replace(ot, " ")
                }), r = r.slice(n.length));
                for (o in w.filter) !(s = dt[o].exec(r)) || l[o] && !(s = l[o](s)) || (n = s.shift(), a.push({
                    value: n,
                    type: o,
                    matches: s
                }), r = r.slice(n.length));
                if (!n) break
            }
            return i ? r.length : r ? e.error(t) : W(t, h).slice(0)
        }, C = e.compile = function(t, e) {
            var i, n = [],
                s = [],
                a = z[t + " "];
            if (!a) {
                for (e || (e = $(t)), i = e.length; i--;) a = m(e[i]), a[F] ? n.push(a) : s.push(a);
                a = z(t, v(s, n)), a.selector = t
            }
            return a
        }, _ = e.select = function(t, e, i, n) {
            var s, a, o, r, l, u = "function" == typeof t && t,
                d = !n && $(t = u.selector || t);
            if (i = i || [], 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && b.getById && 9 === e.nodeType && A && w.relative[a[1].type]) {
                    if (!(e = (w.find.ID(o.matches[0].replace(bt, wt), e) || [])[0])) return i;
                    u && (e = e.parentNode), t = t.slice(a.shift().value.length)
                }
                for (s = dt.needsContext.test(t) ? 0 : a.length; s-- && (o = a[s], !w.relative[r = o.type]);)
                    if ((l = w.find[r]) && (n = l(o.matches[0].replace(bt, wt), vt.test(a[0].type) && h(e.parentNode) || e))) {
                        if (a.splice(s, 1), !(t = n.length && c(a))) return J.apply(i, n), i;
                        break
                    }
            }
            return (u || C(t, d))(n, e, !A, i, vt.test(t) && h(e.parentNode) || e), i
        }, b.sortStable = F.split("").sort(q).join("") === F, b.detectDuplicates = !!M, S(), b.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(E.createElement("div"))
        }), s(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && s(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || a("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), s(function(t) {
            return null == t.getAttribute("disabled")
        }) || a(tt, function(t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    nt.find = ht, nt.expr = ht.selectors, nt.expr[":"] = nt.expr.pseudos, nt.unique = ht.uniqueSort, nt.text = ht.getText, nt.isXMLDoc = ht.isXML, nt.contains = ht.contains;
    var lt = nt.expr.match.needsContext,
        ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ut = /^.[^:#\[\.,]*$/;
    nt.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? nt.find.matchesSelector(n, t) ? [n] : [] : nt.find.matches(t, nt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, nt.fn.extend({
        find: function(t) {
            var e, i = [],
                n = this,
                s = n.length;
            if ("string" != typeof t) return this.pushStack(nt(t).filter(function() {
                for (e = 0; e < s; e++)
                    if (nt.contains(n[e], this)) return !0
            }));
            for (e = 0; e < s; e++) nt.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? nt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && lt.test(t) ? nt(t) : t || [], !1).length
        }
    });
    var dt, pt = t.document,
        ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (nt.fn.init = function(t, e) {
        var i, n;
        if (!t) return this;
        if ("string" == typeof t) {
            if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ft.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || dt).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof nt ? e[0] : e, nt.merge(this, nt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : pt, !0)), ct.test(i[1]) && nt.isPlainObject(e))
                    for (i in e) nt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if ((n = pt.getElementById(i[2])) && n.parentNode) {
                if (n.id !== i[2]) return dt.find(t);
                this.length = 1, this[0] = n
            }
            return this.context = pt, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : nt.isFunction(t) ? void 0 !== dt.ready ? dt.ready(t) : t(nt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), nt.makeArray(t, this))
    }).prototype = nt.fn, dt = nt(pt);
    var gt = /^(?:parents|prev(?:Until|All))/,
        mt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    nt.extend({
        dir: function(t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !nt(s).is(i));) 1 === s.nodeType && n.push(s), s = s[e];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), nt.fn.extend({
        has: function(t) {
            var e, i = nt(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; e < n; e++)
                    if (nt.contains(this, i[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, a = [], o = lt.test(t) || "string" != typeof t ? nt(t, e || this.context) : 0; n < s; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && nt.find.matchesSelector(i, t))) {
                        a.push(i);
                        break
                    }
            return this.pushStack(a.length > 1 ? nt.unique(a) : a)
        },
        index: function(t) {
            return t ? "string" == typeof t ? nt.inArray(this[0], nt(t)) : nt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(nt.unique(nt.merge(this.get(), nt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), nt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return nt.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return nt.dir(t, "parentNode", i)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return nt.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return nt.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return nt.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return nt.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return nt.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return nt.sibling(t.firstChild)
        },
        contents: function(t) {
            return nt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : nt.merge([], t.childNodes)
        }
    }, function(t, e) {
        nt.fn[t] = function(i, n) {
            var s = nt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = nt.filter(n, s)), this.length > 1 && (mt[t] || (s = nt.unique(s)), gt.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var vt = /\S+/g,
        yt = {};
    nt.Callbacks = function(t) {
        t = "string" == typeof t ? yt[t] || a(t) : nt.extend({}, t);
        var e, i, n, s, o, r, h = [],
            l = !t.once && [],
            c = function(a) {
                for (i = t.memory && a, n = !0, o = r || 0, r = 0, s = h.length, e = !0; h && o < s; o++)
                    if (!1 === h[o].apply(a[0], a[1]) && t.stopOnFalse) {
                        i = !1;
                        break
                    }
                e = !1, h && (l ? l.length && c(l.shift()) : i ? h = [] : u.disable())
            },
            u = {
                add: function() {
                    if (h) {
                        var n = h.length;
                        ! function e(i) {
                            nt.each(i, function(i, n) {
                                var s = nt.type(n);
                                "function" === s ? t.unique && u.has(n) || h.push(n) : n && n.length && "string" !== s && e(n)
                            })
                        }(arguments), e ? s = h.length : i && (r = n, c(i))
                    }
                    return this
                },
                remove: function() {
                    return h && nt.each(arguments, function(t, i) {
                        for (var n;
                            (n = nt.inArray(i, h, n)) > -1;) h.splice(n, 1), e && (n <= s && s--, n <= o && o--)
                    }), this
                },
                has: function(t) {
                    return t ? nt.inArray(t, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], s = 0, this
                },
                disable: function() {
                    return h = l = i = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return l = void 0, i || u.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(t, i) {
                    return !h || n && !l || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? l.push(i) : c(i)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, nt.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", nt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", nt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", nt.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return nt.Deferred(function(i) {
                            nt.each(e, function(e, a) {
                                var o = nt.isFunction(t[e]) && t[e];
                                s[a[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && nt.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[a[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? nt.extend(t, n) : n
                    }
                },
                s = {};
            return n.pipe = n.then, nt.each(e, function(t, a) {
                var o = a[2],
                    r = a[3];
                n[a[1]] = o.add, r && o.add(function() {
                    i = r
                }, e[1 ^ t][2].disable, e[2][2].lock), s[a[0]] = function() {
                    return s[a[0] + "With"](this === s ? n : this, arguments), this
                }, s[a[0] + "With"] = o.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function(t) {
            var e, i, n, s = 0,
                a = K.call(arguments),
                o = a.length,
                r = 1 !== o || t && nt.isFunction(t.promise) ? o : 0,
                h = 1 === r ? t : nt.Deferred(),
                l = function(t, i, n) {
                    return function(s) {
                        i[t] = this, n[t] = arguments.length > 1 ? K.call(arguments) : s, n === e ? h.notifyWith(i, n) : --r || h.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (e = new Array(o), i = new Array(o), n = new Array(o); s < o; s++) a[s] && nt.isFunction(a[s].promise) ? a[s].promise().done(l(s, n, a)).fail(h.reject).progress(l(s, i, e)) : --r;
            return r || h.resolveWith(n, a), h.promise()
        }
    });
    var bt;
    nt.fn.ready = function(t) {
        return nt.ready.promise().done(t), this
    }, nt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? nt.readyWait++ : nt.ready(!0)
        },
        ready: function(t) {
            if (!0 === t ? !--nt.readyWait : !nt.isReady) {
                if (!pt.body) return setTimeout(nt.ready);
                nt.isReady = !0, !0 !== t && --nt.readyWait > 0 || (bt.resolveWith(pt, [nt]), nt.fn.triggerHandler && (nt(pt).triggerHandler("ready"), nt(pt).off("ready")))
            }
        }
    }), nt.ready.promise = function(e) {
        if (!bt)
            if (bt = nt.Deferred(), "complete" === pt.readyState) setTimeout(nt.ready);
            else if (pt.addEventListener) pt.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1);
        else {
            pt.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
            var i = !1;
            try {
                i = null == t.frameElement && pt.documentElement
            } catch (t) {}
            i && i.doScroll && function t() {
                if (!nt.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return setTimeout(t, 50)
                    }
                    o(), nt.ready()
                }
            }()
        }
        return bt.promise(e)
    };
    var wt, kt = "undefined";
    for (wt in nt(it)) break;
    it.ownLast = "0" !== wt, it.inlineBlockNeedsLayout = !1, nt(function() {
            var t, e, i, n;
            (i = pt.getElementsByTagName("body")[0]) && i.style && (e = pt.createElement("div"), n = pt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function() {
            var t = pt.createElement("div");
            if (null == it.deleteExpando) {
                it.deleteExpando = !0;
                try {
                    delete t.test
                } catch (t) {
                    it.deleteExpando = !1
                }
            }
            t = null
        }(), nt.acceptData = function(t) {
            var e = nt.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e)
        };
    var xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $t = /([A-Z])/g;
    nt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? nt.cache[t[nt.expando]] : t[nt.expando]) && !l(t)
        },
        data: function(t, e, i) {
            return c(t, e, i)
        },
        removeData: function(t, e) {
            return u(t, e)
        },
        _data: function(t, e, i) {
            return c(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return u(t, e, !0)
        }
    }), nt.fn.extend({
        data: function(t, e) {
            var i, n, s, a = this[0],
                o = a && a.attributes;
            if (void 0 === t) {
                if (this.length && (s = nt.data(a), 1 === a.nodeType && !nt._data(a, "parsedAttrs"))) {
                    for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = nt.camelCase(n.slice(5)), h(a, n, s[n])));
                    nt._data(a, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() {
                nt.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                nt.data(this, t, e)
            }) : a ? h(a, t, nt.data(a, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                nt.removeData(this, t)
            })
        }
    }), nt.extend({
        queue: function(t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = nt._data(t, e), i && (!n || nt.isArray(i) ? n = nt._data(t, e, nt.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = nt.queue(t, e),
                n = i.length,
                s = i.shift(),
                a = nt._queueHooks(t, e),
                o = function() {
                    nt.dequeue(t, e)
                };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete a.stop, s.call(t, o, a)), !n && a && a.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return nt._data(t, i) || nt._data(t, i, {
                empty: nt.Callbacks("once memory").add(function() {
                    nt._removeData(t, e + "queue"), nt._removeData(t, i)
                })
            })
        }
    }), nt.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? nt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = nt.queue(this, t, e);
                nt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && nt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                nt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                s = nt.Deferred(),
                a = this,
                o = this.length,
                r = function() {
                    --n || s.resolveWith(a, [a])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = nt._data(a[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(r));
            return r(), s.promise(e)
        }
    });
    var Ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _t = ["Top", "Right", "Bottom", "Left"],
        Tt = function(t, e) {
            return t = e || t, "none" === nt.css(t, "display") || !nt.contains(t.ownerDocument, t)
        },
        Dt = nt.access = function(t, e, i, n, s, a, o) {
            var r = 0,
                h = t.length,
                l = null == i;
            if ("object" === nt.type(i)) {
                s = !0;
                for (r in i) nt.access(t, e, r, i[r], !0, a, o)
            } else if (void 0 !== n && (s = !0, nt.isFunction(n) || (o = !0), l && (o ? (e.call(t, n), e = null) : (l = e, e = function(t, e, i) {
                    return l.call(nt(t), i)
                })), e))
                for (; r < h; r++) e(t[r], i, o ? n : n.call(t[r], r, e(t[r], i)));
            return s ? t : l ? e.call(t) : h ? e(t[0], i) : a
        },
        Mt = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = pt.createElement("input"),
            e = pt.createElement("div"),
            i = pt.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", it.leadingWhitespace = 3 === e.firstChild.nodeType, it.tbody = !e.getElementsByTagName("tbody").length, it.htmlSerialize = !!e.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), it.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                it.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == it.deleteExpando) {
            it.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                it.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, i, n = pt.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + e, (it[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), it[e + "Bubbles"] = !1 === n.attributes[i].expando);
        n = null
    }();
    var St = /^(?:input|select|textarea)$/i,
        Et = /^key/,
        Nt = /^(?:mouse|pointer|contextmenu)|click/,
        At = /^(?:focusinfocus|focusoutblur)$/,
        It = /^([^.]*)(?:\.(.+)|)$/;
    nt.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var a, o, r, h, l, c, u, d, p, f, g, m = nt._data(t);
            if (m) {
                for (i.handler && (h = i, i = h.handler, s = h.selector), i.guid || (i.guid = nt.guid++), (o = m.events) || (o = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                        return typeof nt === kt || t && nt.event.triggered === t.type ? void 0 : nt.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(vt) || [""], r = e.length; r--;) a = It.exec(e[r]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p && (l = nt.event.special[p] || {}, p = (s ? l.delegateType : l.bindType) || p, l = nt.event.special[p] || {}, u = nt.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && nt.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, h), (d = o[p]) || (d = o[p] = [], d.delegateCount = 0, l.setup && !1 !== l.setup.call(t, n, f, c) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), l.add && (l.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), nt.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, s) {
            var a, o, r, h, l, c, u, d, p, f, g, m = nt.hasData(t) && nt._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(vt) || [""], l = e.length; l--;)
                    if (r = It.exec(e[l]) || [], p = g = r[1], f = (r[2] || "").split(".").sort(), p) {
                        for (u = nt.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = c[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), h = a = d.length; a--;) o = d[a], !s && g !== o.origType || i && i.guid !== o.guid || r && !r.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (d.splice(a, 1), o.selector && d.delegateCount--, u.remove && u.remove.call(t, o));
                        h && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || nt.removeEvent(t, p, m.handle), delete c[p])
                    } else
                        for (p in c) nt.event.remove(t, p + e[l], i, n, !0);
                nt.isEmptyObject(c) && (delete m.handle, nt._removeData(t, "events"))
            }
        },
        trigger: function(e, i, n, s) {
            var a, o, r, h, l, c, u, d = [n || pt],
                p = et.call(e, "type") ? e.type : e,
                f = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = c = n = n || pt, 3 !== n.nodeType && 8 !== n.nodeType && !At.test(p + nt.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[nt.expando] ? e : new nt.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : nt.makeArray(i, [e]), l = nt.event.special[p] || {}, s || !l.trigger || !1 !== l.trigger.apply(n, i))) {
                if (!s && !l.noBubble && !nt.isWindow(n)) {
                    for (h = l.delegateType || p, At.test(h + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), c = r;
                    c === (n.ownerDocument || pt) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (u = 0;
                    (r = d[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? h : l.bindType || p, a = (nt._data(r, "events") || {})[e.type] && nt._data(r, "handle"), a && a.apply(r, i), (a = o && r[o]) && a.apply && nt.acceptData(r) && (e.result = a.apply(r, i), !1 === e.result && e.preventDefault());
                if (e.type = p, !s && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), i)) && nt.acceptData(n) && o && n[p] && !nt.isWindow(n)) {
                    c = n[o], c && (n[o] = null), nt.event.triggered = p;
                    try {
                        n[p]()
                    } catch (t) {}
                    nt.event.triggered = void 0, c && (n[o] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = nt.event.fix(t);
            var e, i, n, s, a, o = [],
                r = K.call(arguments),
                h = (nt._data(this, "events") || {})[t.type] || [],
                l = nt.event.special[t.type] || {};
            if (r[0] = t, t.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                for (o = nt.event.handlers.call(this, t, h), e = 0;
                    (s = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, a = 0;
                        (n = s.handlers[a++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(n.namespace) || (t.handleObj = n, t.data = n.data, void 0 !== (i = ((nt.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, r)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, a, o = [],
                r = e.delegateCount,
                h = t.target;
            if (r && h.nodeType && (!t.button || "click" !== t.type))
                for (; h != this; h = h.parentNode || this)
                    if (1 === h.nodeType && (!0 !== h.disabled || "click" !== t.type)) {
                        for (s = [], a = 0; a < r; a++) n = e[a], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? nt(i, this).index(h) >= 0 : nt.find(i, this, null, [h]).length), s[i] && s.push(n);
                        s.length && o.push({
                            elem: h,
                            handlers: s
                        })
                    }
            return r < e.length && o.push({
                elem: this,
                handlers: e.slice(r)
            }), o
        },
        fix: function(t) {
            if (t[nt.expando]) return t;
            var e, i, n, s = t.type,
                a = t,
                o = this.fixHooks[s];
            for (o || (this.fixHooks[s] = o = Nt.test(s) ? this.mouseHooks : Et.test(s) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new nt.Event(a), e = n.length; e--;) i = n[e], t[i] = a[i];
            return t.target || (t.target = a.srcElement || pt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, a) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, a = e.button,
                    o = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || pt, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === a || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === f() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (nt.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(t) {
                    return nt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = nt.extend(new nt.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? nt.event.trigger(s, null, e) : nt.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, nt.removeEvent = pt.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === kt && (t[n] = null), t.detachEvent(n, i))
    }, nt.Event = function(t, e) {
        if (!(this instanceof nt.Event)) return new nt.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? d : p) : this.type = t, e && nt.extend(this, e), this.timeStamp = t && t.timeStamp || nt.now(), this[nt.expando] = !0
    }, nt.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, nt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        nt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    s = t.relatedTarget,
                    a = t.handleObj;
                return s && (s === n || nt.contains(n, s)) || (t.type = a.origType, i = a.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), it.submitBubbles || (nt.event.special.submit = {
        setup: function() {
            if (nt.nodeName(this, "form")) return !1;
            nt.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    i = nt.nodeName(e, "input") || nt.nodeName(e, "button") ? e.form : void 0;
                i && !nt._data(i, "submitBubbles") && (nt.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), nt._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && nt.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            if (nt.nodeName(this, "form")) return !1;
            nt.event.remove(this, "._submit")
        }
    }), it.changeBubbles || (nt.event.special.change = {
        setup: function() {
            if (St.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (nt.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), nt.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), nt.event.simulate("change", this, t, !0)
            })), !1;
            nt.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                St.test(e.nodeName) && !nt._data(e, "changeBubbles") && (nt.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || nt.event.simulate("change", this.parentNode, t, !0)
                }), nt._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return nt.event.remove(this, "._change"), !St.test(this.nodeName)
        }
    }), it.focusinBubbles || nt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            nt.event.simulate(e, t.target, nt.event.fix(t), !0)
        };
        nt.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = nt._data(n, e);
                s || n.addEventListener(t, i, !0), nt._data(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = nt._data(n, e) - 1;
                s ? nt._data(n, e, s) : (n.removeEventListener(t, i, !0), nt._removeData(n, e))
            }
        }
    }), nt.fn.extend({
        on: function(t, e, i, n, s) {
            var a, o;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (a in t) this.on(a, e, i, t[a], s);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = p;
            else if (!n) return this;
            return 1 === s && (o = n, n = function(t) {
                return nt().off(t), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = nt.guid++)), this.each(function() {
                nt.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, nt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = p), this.each(function() {
                nt.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                nt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return nt.event.trigger(t, e, i, !0)
        }
    });
    var Lt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        jt = / jQuery\d+="(?:null|\d+)"/g,
        Ot = new RegExp("<(?:" + Lt + ")[\\s/>]", "i"),
        Ft = /^\s+/,
        Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Pt = /<([\w:]+)/,
        Ht = /<tbody/i,
        Rt = /<|&#?\w+;/,
        Wt = /<(?:script|style|link)/i,
        zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qt = /^$|\/(?:java|ecma)script/i,
        Yt = /^true\/(.*)/,
        Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Xt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Gt = g(pt),
        Kt = Gt.appendChild(pt.createElement("div"));
    Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td, nt.extend({
        clone: function(t, e, i) {
            var n, s, a, o, r, h = nt.contains(t.ownerDocument, t);
            if (it.html5Clone || nt.isXMLDoc(t) || !Ot.test("<" + t.nodeName + ">") ? a = t.cloneNode(!0) : (Kt.innerHTML = t.outerHTML, Kt.removeChild(a = Kt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || nt.isXMLDoc(t)))
                for (n = m(a), r = m(t), o = 0; null != (s = r[o]); ++o) n[o] && $(s, n[o]);
            if (e)
                if (i)
                    for (r = r || m(t), n = n || m(a), o = 0; null != (s = r[o]); o++) x(s, n[o]);
                else x(t, a);
            return n = m(a, "script"), n.length > 0 && k(n, !h && m(t, "script")), n = r = s = null, a
        },
        buildFragment: function(t, e, i, n) {
            for (var s, a, o, r, h, l, c, u = t.length, d = g(e), p = [], f = 0; f < u; f++)
                if ((a = t[f]) || 0 === a)
                    if ("object" === nt.type(a)) nt.merge(p, a.nodeType ? [a] : a);
                    else if (Rt.test(a)) {
                for (r = r || d.appendChild(e.createElement("div")), h = (Pt.exec(a) || ["", ""])[1].toLowerCase(), c = Xt[h] || Xt._default, r.innerHTML = c[1] + a.replace(Bt, "<$1></$2>") + c[2], s = c[0]; s--;) r = r.lastChild;
                if (!it.leadingWhitespace && Ft.test(a) && p.push(e.createTextNode(Ft.exec(a)[0])), !it.tbody)
                    for (a = "table" !== h || Ht.test(a) ? "<table>" !== c[1] || Ht.test(a) ? 0 : r : r.firstChild, s = a && a.childNodes.length; s--;) nt.nodeName(l = a.childNodes[s], "tbody") && !l.childNodes.length && a.removeChild(l);
                for (nt.merge(p, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
                r = d.lastChild
            } else p.push(e.createTextNode(a));
            for (r && d.removeChild(r), it.appendChecked || nt.grep(m(p, "input"), v), f = 0; a = p[f++];)
                if ((!n || -1 === nt.inArray(a, n)) && (o = nt.contains(a.ownerDocument, a), r = m(d.appendChild(a), "script"), o && k(r), i))
                    for (s = 0; a = r[s++];) qt.test(a.type || "") && i.push(a);
            return r = null, d
        },
        cleanData: function(t, e) {
            for (var i, n, s, a, o = 0, r = nt.expando, h = nt.cache, l = it.deleteExpando, c = nt.event.special; null != (i = t[o]); o++)
                if ((e || nt.acceptData(i)) && (s = i[r], a = s && h[s])) {
                    if (a.events)
                        for (n in a.events) c[n] ? nt.event.remove(i, n) : nt.removeEvent(i, n, a.handle);
                    h[s] && (delete h[s], l ? delete i[r] : typeof i.removeAttribute !== kt ? i.removeAttribute(r) : i[r] = null, G.push(s))
                }
        }
    }), nt.fn.extend({
        text: function(t) {
            return Dt(this, function(t) {
                return void 0 === t ? nt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pt).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    y(this, t).appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? nt.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || nt.cleanData(m(i)), i.parentNode && (e && nt.contains(i.ownerDocument, i) && k(m(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && nt.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && nt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return nt.clone(this, t, e)
            })
        },
        html: function(t) {
            return Dt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(jt, "") : void 0;
                if ("string" == typeof t && !Wt.test(t) && (it.htmlSerialize || !Ot.test(t)) && (it.leadingWhitespace || !Ft.test(t)) && !Xt[(Pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Bt, "<$1></$2>");
                    try {
                        for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (nt.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, nt.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = V.apply([], t);
            var i, n, s, a, o, r, h = 0,
                l = this.length,
                c = this,
                u = l - 1,
                d = t[0],
                p = nt.isFunction(d);
            if (p || l > 1 && "string" == typeof d && !it.checkClone && zt.test(d)) return this.each(function(i) {
                var n = c.eq(i);
                p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
            });
            if (l && (r = nt.buildFragment(t, this[0].ownerDocument, !1, this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                for (a = nt.map(m(r, "script"), b), s = a.length; h < l; h++) n = r, h !== u && (n = nt.clone(n, !0, !0), s && nt.merge(a, m(n, "script"))), e.call(this[h], n, h);
                if (s)
                    for (o = a[a.length - 1].ownerDocument, nt.map(a, w), h = 0; h < s; h++) n = a[h], qt.test(n.type || "") && !nt._data(n, "globalEval") && nt.contains(o, n) && (n.src ? nt._evalUrl && nt._evalUrl(n.src) : nt.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ut, "")));
                r = i = null
            }
            return this
        }
    }), nt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        nt.fn[t] = function(t) {
            for (var i, n = 0, s = [], a = nt(t), o = a.length - 1; n <= o; n++) i = n === o ? this : this.clone(!0), nt(a[n])[e](i), J.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var Vt, Jt = {};
    ! function() {
        var t;
        it.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, i, n;
            return (i = pt.getElementsByTagName("body")[0]) && i.style ? (e = pt.createElement("div"), n = pt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    }();
    var Qt, Zt, te = /^margin/,
        ee = new RegExp("^(" + Ct + ")(?!px)[a-z%]+$", "i"),
        ie = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (Qt = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, Zt = function(t, e, i) {
            var n, s, a, o, r = t.style;
            return i = i || Qt(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== o || nt.contains(t.ownerDocument, t) || (o = nt.style(t, e)), ee.test(o) && te.test(e) && (n = r.width, s = r.minWidth, a = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = i.width, r.width = n, r.minWidth = s, r.maxWidth = a)), void 0 === o ? o : o + ""
        }) : pt.documentElement.currentStyle && (Qt = function(t) {
            return t.currentStyle
        }, Zt = function(t, e, i) {
            var n, s, a, o, r = t.style;
            return i = i || Qt(t), o = i ? i[e] : void 0, null == o && r && r[e] && (o = r[e]), ee.test(o) && !ie.test(e) && (n = r.left, s = t.runtimeStyle, a = s && s.left, a && (s.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : o, o = r.pixelLeft + "px", r.left = n, a && (s.left = a)), void 0 === o ? o : o + "" || "auto"
        }),
        function() {
            function e() {
                var e, i, n, s;
                (i = pt.getElementsByTagName("body")[0]) && i.style && (e = pt.createElement("div"), n = pt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = o = !1, h = !0, t.getComputedStyle && (a = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, s = e.appendChild(pt.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", h = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === s[0].offsetHeight, r && (s[0].style.display = "", s[1].style.display = "none", r = 0 === s[0].offsetHeight), i.removeChild(n))
            }
            var i, n, s, a, o, r, h;
            i = pt.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = i.getElementsByTagName("a")[0], (n = s && s.style) && (n.cssText = "float:left;opacity:.5", it.opacity = "0.5" === n.opacity, it.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === i.style.backgroundClip, it.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, nt.extend(it, {
                reliableHiddenOffsets: function() {
                    return null == r && e(), r
                },
                boxSizingReliable: function() {
                    return null == o && e(), o
                },
                pixelPosition: function() {
                    return null == a && e(), a
                },
                reliableMarginRight: function() {
                    return null == h && e(), h
                }
            }))
        }(), nt.swap = function(t, e, i, n) {
            var s, a, o = {};
            for (a in e) o[a] = t.style[a], t.style[a] = e[a];
            s = i.apply(t, n || []);
            for (a in e) t.style[a] = o[a];
            return s
        };
    var ne = /alpha\([^)]*\)/i,
        se = /opacity\s*=\s*([^)]*)/,
        ae = /^(none|table(?!-c[ea]).+)/,
        oe = new RegExp("^(" + Ct + ")(.*)$", "i"),
        re = new RegExp("^([+-])=(" + Ct + ")", "i"),
        he = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        le = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ce = ["Webkit", "O", "Moz", "ms"];
    nt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = Zt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: it.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, a, o, r = nt.camelCase(e),
                    h = t.style;
                if (e = nt.cssProps[r] || (nt.cssProps[r] = D(h, r)), o = nt.cssHooks[e] || nt.cssHooks[r], void 0 === i) return o && "get" in o && void 0 !== (s = o.get(t, !1, n)) ? s : h[e];
                if (a = typeof i, "string" === a && (s = re.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(nt.css(t, e)), a = "number"), null != i && i === i && ("number" !== a || nt.cssNumber[r] || (i += "px"), it.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(t, i, n))))) try {
                    h[e] = i
                } catch (t) {}
            }
        },
        css: function(t, e, i, n) {
            var s, a, o, r = nt.camelCase(e);
            return e = nt.cssProps[r] || (nt.cssProps[r] = D(t.style, r)), o = nt.cssHooks[e] || nt.cssHooks[r], o && "get" in o && (a = o.get(t, !0, i)), void 0 === a && (a = Zt(t, e, n)), "normal" === a && e in le && (a = le[e]), "" === i || i ? (s = parseFloat(a), !0 === i || nt.isNumeric(s) ? s || 0 : a) : a
        }
    }), nt.each(["height", "width"], function(t, e) {
        nt.cssHooks[e] = {
            get: function(t, i, n) {
                if (i) return ae.test(nt.css(t, "display")) && 0 === t.offsetWidth ? nt.swap(t, he, function() {
                    return N(t, e, n)
                }) : N(t, e, n)
            },
            set: function(t, i, n) {
                var s = n && Qt(t);
                return S(t, i, n ? E(t, e, n, it.boxSizing && "border-box" === nt.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), it.opacity || (nt.cssHooks.opacity = {
        get: function(t, e) {
            return se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                s = nt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                a = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === nt.trim(a.replace(ne, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = ne.test(a) ? a.replace(ne, s) : a + " " + s)
        }
    }), nt.cssHooks.marginRight = T(it.reliableMarginRight, function(t, e) {
        if (e) return nt.swap(t, {
            display: "inline-block"
        }, Zt, [t, "marginRight"])
    }), nt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        nt.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, a = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + _t[n] + e] = a[n] || a[n - 2] || a[0];
                return s
            }
        }, te.test(t) || (nt.cssHooks[t + e].set = S)
    }), nt.fn.extend({
        css: function(t, e) {
            return Dt(this, function(t, e, i) {
                var n, s, a = {},
                    o = 0;
                if (nt.isArray(e)) {
                    for (n = Qt(t), s = e.length; o < s; o++) a[e[o]] = nt.css(t, e[o], !1, n);
                    return a
                }
                return void 0 !== i ? nt.style(t, e, i) : nt.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return M(this, !0)
        },
        hide: function() {
            return M(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Tt(this) ? nt(this).show() : nt(this).hide()
            })
        }
    }), nt.Tween = A, A.prototype = {
        constructor: A,
        init: function(t, e, i, n, s, a) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = a || (nt.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = A.propHooks[this.prop];
            return t && t.get ? t.get(this) : A.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = A.propHooks[this.prop];
            return this.options.duration ? this.pos = e = nt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = nt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                nt.fx.step[t.prop] ? nt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[nt.cssProps[t.prop]] || nt.cssHooks[t.prop]) ? nt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, nt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, nt.fx = A.prototype.init, nt.fx.step = {};
    var ue, de, pe = /^(?:toggle|show|hide)$/,
        fe = new RegExp("^(?:([+-])=|)(" + Ct + ")([a-z%]*)$", "i"),
        ge = /queueHooks$/,
        me = [O],
        ve = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    s = fe.exec(e),
                    a = s && s[3] || (nt.cssNumber[t] ? "" : "px"),
                    o = (nt.cssNumber[t] || "px" !== a && +n) && fe.exec(nt.css(i.elem, t)),
                    r = 1,
                    h = 20;
                if (o && o[3] !== a) {
                    a = a || o[3], s = s || [], o = +n || 1;
                    do {
                        r = r || ".5", o /= r, nt.style(i.elem, t, o + a)
                    } while (r !== (r = i.cur() / n) && 1 !== r && --h)
                }
                return s && (o = i.start = +o || +n || 0, i.unit = a, i.end = s[1] ? o + (s[1] + 1) * s[2] : +s[2]), i
            }]
        };
    nt.Animation = nt.extend(B, {
            tweener: function(t, e) {
                nt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, s = t.length; n < s; n++) i = t[n], ve[i] = ve[i] || [], ve[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? me.unshift(t) : me.push(t)
            }
        }), nt.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? nt.extend({}, t) : {
                complete: i || !i && e || nt.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !nt.isFunction(e) && e
            };
            return n.duration = nt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in nt.fx.speeds ? nt.fx.speeds[n.duration] : nt.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                nt.isFunction(n.old) && n.old.call(this), n.queue && nt.dequeue(this, n.queue)
            }, n
        }, nt.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Tt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var s = nt.isEmptyObject(t),
                    a = nt.speed(e, i, n),
                    o = function() {
                        var e = B(this, nt.extend({}, t), a);
                        (s || nt._data(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, s || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        a = nt.timers,
                        o = nt._data(this);
                    if (s) o[s] && o[s].stop && n(o[s]);
                    else
                        for (s in o) o[s] && o[s].stop && ge.test(s) && n(o[s]);
                    for (s = a.length; s--;) a[s].elem !== this || null != t && a[s].queue !== t || (a[s].anim.stop(i), e = !1, a.splice(s, 1));
                    !e && i || nt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, i = nt._data(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        a = nt.timers,
                        o = n ? n.length : 0;
                    for (i.finish = !0, nt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), nt.each(["toggle", "show", "hide"], function(t, e) {
            var i = nt.fn[e];
            nt.fn[e] = function(t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(L(e, !0), t, n, s)
            }
        }), nt.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            nt.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), nt.timers = [], nt.fx.tick = function() {
            var t, e = nt.timers,
                i = 0;
            for (ue = nt.now(); i < e.length; i++)(t = e[i])() || e[i] !== t || e.splice(i--, 1);
            e.length || nt.fx.stop(), ue = void 0
        }, nt.fx.timer = function(t) {
            nt.timers.push(t), t() ? nt.fx.start() : nt.timers.pop()
        }, nt.fx.interval = 13, nt.fx.start = function() {
            de || (de = setInterval(nt.fx.tick, nt.fx.interval))
        }, nt.fx.stop = function() {
            clearInterval(de), de = null
        }, nt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, nt.fn.delay = function(t, e) {
            return t = nt.fx ? nt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var t, e, i, n, s;
            e = pt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = pt.createElement("select"), s = i.appendChild(pt.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", it.getSetAttribute = "t" !== e.className, it.style = /top/.test(n.getAttribute("style")), it.hrefNormalized = "/a" === n.getAttribute("href"), it.checkOn = !!t.value, it.optSelected = s.selected, it.enctype = !!pt.createElement("form").enctype, i.disabled = !0, it.optDisabled = !s.disabled, t = pt.createElement("input"), t.setAttribute("value", ""), it.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), it.radioValue = "t" === t.value
        }();
    var ye = /\r/g;
    nt.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0]; {
                if (arguments.length) return n = nt.isFunction(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, nt(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : nt.isArray(s) && (s = nt.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = nt.valHooks[this.type] || nt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                });
                if (s) return (e = nt.valHooks[s.type] || nt.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(ye, "") : null == i ? "" : i)
            }
        }
    }), nt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = nt.find.attr(t, "value");
                    return null != e ? e : nt.trim(nt.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, a = "select-one" === t.type || s < 0, o = a ? null : [], r = a ? s + 1 : n.length, h = s < 0 ? r : a ? s : 0; h < r; h++)
                        if (i = n[h], (i.selected || h === s) && (it.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !nt.nodeName(i.parentNode, "optgroup"))) {
                            if (e = nt(i).val(), a) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, a = nt.makeArray(e), o = s.length; o--;)
                        if (n = s[o], nt.inArray(nt.valHooks.option.get(n), a) >= 0) try {
                            n.selected = i = !0
                        } catch (t) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), nt.each(["radio", "checkbox"], function() {
        nt.valHooks[this] = {
            set: function(t, e) {
                if (nt.isArray(e)) return t.checked = nt.inArray(nt(t).val(), e) >= 0
            }
        }, it.checkOn || (nt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var be, we, ke = nt.expr.attrHandle,
        xe = /^(?:checked|selected)$/i,
        $e = it.getSetAttribute,
        Ce = it.input;
    nt.fn.extend({
        attr: function(t, e) {
            return Dt(this, nt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                nt.removeAttr(this, t)
            })
        }
    }), nt.extend({
        attr: function(t, e, i) {
            var n, s, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return typeof t.getAttribute === kt ? nt.prop(t, e, i) : (1 === a && nt.isXMLDoc(t) || (e = e.toLowerCase(), n = nt.attrHooks[e] || (nt.expr.match.bool.test(e) ? we : be)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = nt.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void nt.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
                a = e && e.match(vt);
            if (a && 1 === t.nodeType)
                for (; i = a[s++];) n = nt.propFix[i] || i, nt.expr.match.bool.test(i) ? Ce && $e || !xe.test(i) ? t[n] = !1 : t[nt.camelCase("default-" + i)] = t[n] = !1 : nt.attr(t, i, ""), t.removeAttribute($e ? i : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!it.radioValue && "radio" === e && nt.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), we = {
        set: function(t, e, i) {
            return !1 === e ? nt.removeAttr(t, i) : Ce && $e || !xe.test(i) ? t.setAttribute(!$e && nt.propFix[i] || i, i) : t[nt.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, nt.each(nt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ke[e] || nt.find.attr;
        ke[e] = Ce && $e || !xe.test(e) ? function(t, e, n) {
            var s, a;
            return n || (a = ke[e], ke[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, ke[e] = a), s
        } : function(t, e, i) {
            if (!i) return t[nt.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ce && $e || (nt.attrHooks.value = {
        set: function(t, e, i) {
            if (!nt.nodeName(t, "input")) return be && be.set(t, e, i);
            t.defaultValue = e
        }
    }), $e || (be = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            if (n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i)) return e
        }
    }, ke.id = ke.name = ke.coords = function(t, e, i) {
        var n;
        if (!i) return (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, nt.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            if (i && i.specified) return i.value
        },
        set: be.set
    }, nt.attrHooks.contenteditable = {
        set: function(t, e, i) {
            be.set(t, "" !== e && e, i)
        }
    }, nt.each(["width", "height"], function(t, e) {
        nt.attrHooks[e] = {
            set: function(t, i) {
                if ("" === i) return t.setAttribute(e, "auto"), i
            }
        }
    })), it.style || (nt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var _e = /^(?:input|select|textarea|button|object)$/i,
        Te = /^(?:a|area)$/i;
    nt.fn.extend({
        prop: function(t, e) {
            return Dt(this, nt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = nt.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (t) {}
            })
        }
    }), nt.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(t, e, i) {
            var n, s, a, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return a = 1 !== o || !nt.isXMLDoc(t), a && (e = nt.propFix[e] || e, s = nt.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = nt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : _e.test(t.nodeName) || Te.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), it.hrefNormalized || nt.each(["href", "src"], function(t, e) {
        nt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), it.optSelected || (nt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), nt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        nt.propFix[this.toLowerCase()] = this
    }), it.enctype || (nt.propFix.enctype = "encoding");
    var De = /[\t\r\n\f]/g;
    nt.fn.extend({
        addClass: function(t) {
            var e, i, n, s, a, o, r = 0,
                h = this.length,
                l = "string" == typeof t && t;
            if (nt.isFunction(t)) return this.each(function(e) {
                nt(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(vt) || []; r < h; r++)
                    if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(De, " ") : " ")) {
                        for (a = 0; s = e[a++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        o = nt.trim(n), i.className !== o && (i.className = o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, a, o, r = 0,
                h = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (nt.isFunction(t)) return this.each(function(e) {
                nt(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(vt) || []; r < h; r++)
                    if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(De, " ") : "")) {
                        for (a = 0; s = e[a++];)
                            for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        o = t ? nt.trim(n) : "", i.className !== o && (i.className = o)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : nt.isFunction(t) ? this.each(function(i) {
                nt(this).toggleClass(t.call(this, i, this.className, e), e)
            }) : this.each(function() {
                if ("string" === i)
                    for (var e, n = 0, s = nt(this), a = t.match(vt) || []; e = a[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else i !== kt && "boolean" !== i || (this.className && nt._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : nt._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(De, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), nt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        nt.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), nt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Me = nt.now(),
        Se = /\?/,
        Ee = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    nt.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
            s = nt.trim(e + "");
        return s && !nt.trim(s.replace(Ee, function(t, e, s, a) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !a - !s, "")
        })) ? Function("return " + s)() : nt.error("Invalid JSON: " + e)
    }, nt.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (t) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || nt.error("Invalid XML: " + e), i
    };
    var Ne, Ae, Ie = /#.*$/,
        Le = /([?&])_=[^&]*/,
        je = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Oe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fe = /^(?:GET|HEAD)$/,
        Be = /^\/\//,
        Pe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        He = {},
        Re = {},
        We = "*/".concat("*");
    try {
        Ae = location.href
    } catch (t) {
        Ae = pt.createElement("a"), Ae.href = "", Ae = Ae.href
    }
    Ne = Pe.exec(Ae.toLowerCase()) || [], nt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ae,
            type: "GET",
            isLocal: Oe.test(Ne[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": We,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": nt.parseJSON,
                "text xml": nt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? R(R(t, nt.ajaxSettings), e) : R(nt.ajaxSettings, t)
        },
        ajaxPrefilter: P(He),
        ajaxTransport: P(Re),
        ajax: function(t, e) {
            function i(t, e, i, n) {
                var s, c, v, y, w, x = e;
                2 !== b && (b = 2, r && clearTimeout(r), l = void 0, o = n || "", k.readyState = t > 0 ? 4 : 0, s = t >= 200 && t < 300 || 304 === t, i && (y = W(u, k, i)), y = z(u, y, k, s), s ? (u.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (nt.lastModified[a] = w), (w = k.getResponseHeader("etag")) && (nt.etag[a] = w)), 204 === t || "HEAD" === u.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, c = y.data, v = y.error, s = !v)) : (v = x, !t && x || (x = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (e || x) + "", s ? f.resolveWith(d, [c, x, k]) : f.rejectWith(d, [k, x, v]), k.statusCode(m), m = void 0, h && p.trigger(s ? "ajaxSuccess" : "ajaxError", [k, u, s ? c : v]), g.fireWith(d, [k, x]), h && (p.trigger("ajaxComplete", [k, u]), --nt.active || nt.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, s, a, o, r, h, l, c, u = nt.ajaxSetup({}, e),
                d = u.context || u,
                p = u.context && (d.nodeType || d.jquery) ? nt(d) : nt.event,
                f = nt.Deferred(),
                g = nt.Callbacks("once memory"),
                m = u.statusCode || {},
                v = {},
                y = {},
                b = 0,
                w = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; e = je.exec(o);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return b || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (u.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (b < 2)
                                for (e in t) m[e] = [m[e], t[e]];
                            else k.always(t[k.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return l && l.abort(e), i(0, e), this
                    }
                };
            if (f.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, u.url = ((t || u.url || Ae) + "").replace(Ie, "").replace(Be, Ne[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = nt.trim(u.dataType || "*").toLowerCase().match(vt) || [""], null == u.crossDomain && (n = Pe.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === Ne[1] && n[2] === Ne[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ne[3] || ("http:" === Ne[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = nt.param(u.data, u.traditional)), H(He, u, e, k), 2 === b) return k;
            h = u.global, h && 0 == nt.active++ && nt.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Fe.test(u.type), a = u.url, u.hasContent || (u.data && (a = u.url += (Se.test(a) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = Le.test(a) ? a.replace(Le, "$1_=" + Me++) : a + (Se.test(a) ? "&" : "?") + "_=" + Me++)), u.ifModified && (nt.lastModified[a] && k.setRequestHeader("If-Modified-Since", nt.lastModified[a]), nt.etag[a] && k.setRequestHeader("If-None-Match", nt.etag[a])), (u.data && u.hasContent && !1 !== u.contentType || e.contentType) && k.setRequestHeader("Content-Type", u.contentType), k.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + We + "; q=0.01" : "") : u.accepts["*"]);
            for (s in u.headers) k.setRequestHeader(s, u.headers[s]);
            if (u.beforeSend && (!1 === u.beforeSend.call(d, k, u) || 2 === b)) return k.abort();
            w = "abort";
            for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[s](u[s]);
            if (l = H(Re, u, e, k)) {
                k.readyState = 1, h && p.trigger("ajaxSend", [k, u]), u.async && u.timeout > 0 && (r = setTimeout(function() {
                    k.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, l.send(v, i)
                } catch (t) {
                    if (!(b < 2)) throw t;
                    i(-1, t)
                }
            } else i(-1, "No Transport");
            return k
        },
        getJSON: function(t, e, i) {
            return nt.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return nt.get(t, void 0, e, "script")
        }
    }), nt.each(["get", "post"], function(t, e) {
        nt[e] = function(t, i, n, s) {
            return nt.isFunction(i) && (s = s || n, n = i, i = void 0), nt.ajax({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            })
        }
    }), nt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        nt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), nt._evalUrl = function(t) {
        return nt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, nt.fn.extend({
        wrapAll: function(t) {
            if (nt.isFunction(t)) return this.each(function(e) {
                nt(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = nt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return nt.isFunction(t) ? this.each(function(e) {
                nt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = nt(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = nt.isFunction(t);
            return this.each(function(i) {
                nt(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                nt.nodeName(this, "body") || nt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), nt.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (t.style && t.style.display || nt.css(t, "display"))
    }, nt.expr.filters.visible = function(t) {
        return !nt.expr.filters.hidden(t)
    };
    var ze = /%20/g,
        qe = /\[\]$/,
        Ye = /\r?\n/g,
        Ue = /^(?:submit|button|image|reset|file)$/i,
        Xe = /^(?:input|select|textarea|keygen)/i;
    nt.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                e = nt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = nt.ajaxSettings && nt.ajaxSettings.traditional), nt.isArray(t) || t.jquery && !nt.isPlainObject(t)) nt.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (i in t) q(i, t[i], e, s);
        return n.join("&").replace(ze, "+")
    }, nt.fn.extend({
        serialize: function() {
            return nt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = nt.prop(this, "elements");
                return t ? nt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !nt(this).is(":disabled") && Xe.test(this.nodeName) && !Ue.test(t) && (this.checked || !Mt.test(t))
            }).map(function(t, e) {
                var i = nt(this).val();
                return null == i ? null : nt.isArray(i) ? nt.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ye, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Ye, "\r\n")
                }
            }).get()
        }
    }), nt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || U()
    } : Y;
    var Ge = 0,
        Ke = {},
        Ve = nt.ajaxSettings.xhr();
    t.ActiveXObject && nt(t).on("unload", function() {
        for (var t in Ke) Ke[t](void 0, !0)
    }), it.cors = !!Ve && "withCredentials" in Ve, Ve = it.ajax = !!Ve, Ve && nt.ajaxTransport(function(t) {
        if (!t.crossDomain || it.cors) {
            var e;
            return {
                send: function(i, n) {
                    var s, a = t.xhr(),
                        o = ++Ge;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) void 0 !== i[s] && a.setRequestHeader(s, i[s] + "");
                    a.send(t.hasContent && t.data || null), e = function(i, s) {
                        var r, h, l;
                        if (e && (s || 4 === a.readyState))
                            if (delete Ke[o], e = void 0, a.onreadystatechange = nt.noop, s) 4 !== a.readyState && a.abort();
                            else {
                                l = {}, r = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                                try {
                                    h = a.statusText
                                } catch (t) {
                                    h = ""
                                }
                                r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = l.text ? 200 : 404
                            }
                        l && n(r, h, l, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? setTimeout(e) : a.onreadystatechange = Ke[o] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), nt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return nt.globalEval(t), t
            }
        }
    }), nt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), nt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = pt.head || nt("head")[0] || pt.documentElement;
            return {
                send: function(n, s) {
                    e = pt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var Je = [],
        Qe = /(=)\?(?=&|$)|\?\?/;
    nt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Je.pop() || nt.expando + "_" + Me++;
            return this[t] = !0, t
        }
    }), nt.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, a, o, r = !1 !== e.jsonp && (Qe.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qe.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = nt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(Qe, "$1" + s) : !1 !== e.jsonp && (e.url += (Se.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return o || nt.error(s + " was not called"), o[0]
        }, e.dataTypes[0] = "json", a = t[s], t[s] = function() {
            o = arguments
        }, n.always(function() {
            t[s] = a, e[s] && (e.jsonpCallback = i.jsonpCallback, Je.push(s)), o && nt.isFunction(a) && a(o[0]), o = a = void 0
        }), "script"
    }), nt.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || pt;
        var n = ct.exec(t),
            s = !i && [];
        return n ? [e.createElement(n[1])] : (n = nt.buildFragment([t], e, s), s && s.length && nt(s).remove(), nt.merge([], n.childNodes))
    };
    var Ze = nt.fn.load;
    nt.fn.load = function(t, e, i) {
        if ("string" != typeof t && Ze) return Ze.apply(this, arguments);
        var n, s, a, o = this,
            r = t.indexOf(" ");
        return r >= 0 && (n = nt.trim(t.slice(r, t.length)), t = t.slice(0, r)), nt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (a = "POST"), o.length > 0 && nt.ajax({
            url: t,
            type: a,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, o.html(n ? nt("<div>").append(nt.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            o.each(i, s || [t.responseText, e, t])
        }), this
    }, nt.expr.filters.animated = function(t) {
        return nt.grep(nt.timers, function(e) {
            return t === e.elem
        }).length
    };
    var ti = t.document.documentElement;
    nt.offset = {
        setOffset: function(t, e, i) {
            var n, s, a, o, r, h, l, c = nt.css(t, "position"),
                u = nt(t),
                d = {};
            "static" === c && (t.style.position = "relative"), r = u.offset(), a = nt.css(t, "top"), h = nt.css(t, "left"),
                l = ("absolute" === c || "fixed" === c) && nt.inArray("auto", [a, h]) > -1, l ? (n = u.position(), o = n.top, s = n.left) : (o = parseFloat(a) || 0, s = parseFloat(h) || 0), nt.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (d.top = e.top - r.top + o), null != e.left && (d.left = e.left - r.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
        }
    }, nt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                nt.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                a = s && s.ownerDocument;
            if (a) return e = a.documentElement, nt.contains(e, s) ? (typeof s.getBoundingClientRect !== kt && (n = s.getBoundingClientRect()), i = X(a), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === nt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), nt.nodeName(t[0], "html") || (i = t.offset()), i.top += nt.css(t[0], "borderTopWidth", !0), i.left += nt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - nt.css(n, "marginTop", !0),
                    left: e.left - i.left - nt.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || ti; t && !nt.nodeName(t, "html") && "static" === nt.css(t, "position");) t = t.offsetParent;
                return t || ti
            })
        }
    }), nt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = /Y/.test(e);
        nt.fn[t] = function(n) {
            return Dt(this, function(t, n, s) {
                var a = X(t);
                if (void 0 === s) return a ? e in a ? a[e] : a.document.documentElement[n] : t[n];
                a ? a.scrollTo(i ? nt(a).scrollLeft() : s, i ? s : nt(a).scrollTop()) : t[n] = s
            }, t, n, arguments.length, null)
        }
    }), nt.each(["top", "left"], function(t, e) {
        nt.cssHooks[e] = T(it.pixelPosition, function(t, i) {
            if (i) return i = Zt(t, e), ee.test(i) ? nt(t).position()[e] + "px" : i
        })
    }), nt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        nt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            nt.fn[n] = function(n, s) {
                var a = arguments.length && (i || "boolean" != typeof n),
                    o = i || (!0 === n || !0 === s ? "margin" : "border");
                return Dt(this, function(e, i, n) {
                    var s;
                    return nt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? nt.css(e, i, o) : nt.style(e, i, n, o)
                }, e, a ? n : void 0, a, null)
            }
        })
    }), nt.fn.size = function() {
        return this.length
    }, nt.fn.andSelf = nt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return nt
    });
    var ei = t.jQuery,
        ii = t.$;
    return nt.noConflict = function(e) {
        return t.$ === nt && (t.$ = ii), e && t.jQuery === nt && (t.jQuery = ei), nt
    }, typeof e === kt && (t.jQuery = t.$ = nt), nt
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    function e(e, n) {
        var s, a, o, r = e.nodeName.toLowerCase();
        return "area" === r ? (s = e.parentNode, a = s.name, !(!e.href || !a || "map" !== s.nodeName.toLowerCase()) && (!!(o = t("img[usemap='#" + a + "']")[0]) && i(o))) : (/^(input|select|textarea|button|object)$/.test(r) ? !e.disabled : "a" === r ? e.href || n : n) && i(e)
    }

    function i(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }

    function n(t) {
        for (var e, i; t.length && t[0] !== document;) {
            if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            t = t.parent()
        }
        return 0
    }

    function s() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = a(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function a(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function() {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", o)
    }

    function o() {
        t.datepicker._isDisabledDatepicker(u.inline ? u.dpDiv.parent()[0] : u.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }

    function r(e, i) {
        t.extend(e, i);
        for (var n in i) null == i[n] && (e[n] = i[n]);
        return e
    }
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        scrollParent: function(e) {
            var i = this.css("position"),
                n = "absolute" === i,
                s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function() {
                    var e = t(this);
                    return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && a.length ? a : t(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, n) {
            return !!t.data(e, n[3])
        },
        focusable: function(i) {
            return e(i, !isNaN(t.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var n = t.attr(i, "tabindex"),
                s = isNaN(n);
            return (s || n >= 0) && e(i, !s)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
        function n(e, i, n, a) {
            return t.each(s, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), a && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + i] = function(e) {
            return void 0 === e ? o["inner" + i].call(this) : this.each(function() {
                t(this).css(a, n(this, e) + "px")
            })
        }, t.fn["outer" + i] = function(e, s) {
            return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() {
                t(this).css(a, n(this, e, !0, s) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
        focus: function(e) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), n && n.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length)
                for (var i, n, s = t(this[0]); s.length && s[0] !== document;) {
                    if (("absolute" === (i = s.css("position")) || "relative" === i || "fixed" === i) && (n = parseInt(s.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                    s = s.parent()
                }
            return 0
        }
    }), t.ui.plugin = {
        add: function(e, i, n) {
            var s, a = t.ui[e].prototype;
            for (s in n) a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
        },
        call: function(t, e, i, n) {
            var s, a = t.plugins[e];
            if (a && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (s = 0; s < a.length; s++) t.options[a[s][0]] && a[s][1].apply(t.element, i)
        }
    };
    var h = 0,
        l = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var n, s, a;
            for (a = 0; null != (s = i[a]); a++) try {
                n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove")
            } catch (t) {}
            e(i)
        }
    }(t.cleanData), t.widget = function(e, i, n) {
        var s, a, o, r, h = {},
            l = e.split(".")[0];
        return e = e.split(".")[1], s = l + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
            return !!t.data(e, s)
        }, t[l] = t[l] || {}, a = t[l][e], o = t[l][e] = function(t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, t.extend(o, a, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), r = new i, r.options = t.widget.extend({}, r.options), t.each(n, function(e, n) {
            if (!t.isFunction(n)) return void(h[e] = n);
            h[e] = function() {
                var t = function() {
                        return i.prototype[e].apply(this, arguments)
                    },
                    s = function(t) {
                        return i.prototype[e].apply(this, t)
                    };
                return function() {
                    var e, i = this._super,
                        a = this._superApply;
                    return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = a, e
                }
            }()
        }), o.prototype = t.widget.extend(r, {
            widgetEventPrefix: a ? r.widgetEventPrefix || e : e
        }, h, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: s
        }), a ? (t.each(a._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function(e) {
        for (var i, n, s = l.call(arguments, 1), a = 0, o = s.length; a < o; a++)
            for (i in s[a]) n = s[a][i], s[a].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : e[i] = n);
        return e
    }, t.widget.bridge = function(e, i) {
        var n = i.prototype.widgetFullName || e;
        t.fn[e] = function(s) {
            var a = "string" == typeof s,
                o = l.call(arguments, 1),
                r = this;
            return a ? this.each(function() {
                var i, a = t.data(this, n);
                return "instance" === s ? (r = a, !1) : a ? t.isFunction(a[s]) && "_" !== s.charAt(0) ? (i = a[s].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
            }) : (o.length && (s = t.widget.extend.apply(null, [s].concat(o))), this.each(function() {
                var e = t.data(this, n);
                e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
            })), r
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy()
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var n, s, a, o = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (o = {}, n = e.split("."), e = n.shift(), n.length) {
                    for (s = o[e] = t.widget.extend({}, this.options[e]), a = 0; a < n.length - 1; a++) s[n[a]] = s[n[a]] || {}, s = s[n[a]];
                    if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                    s[e] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    o[e] = i
                }
            return this._setOptions(o), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(e, i, n) {
            var s, a = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, o) {
                function r() {
                    if (e || !0 !== a.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof o ? a[o] : o).apply(a, arguments)
                }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || t.guid++);
                var h = n.match(/^([\w:-]*)\s*(.*)$/),
                    l = h[1] + a.eventNamespace,
                    c = h[2];
                c ? s.delegate(c, l, r) : i.bind(l, r)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, n) {
            var s, a, o = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (s in a) s in i || (i[s] = a[s]);
            return this.element.trigger(i, n), !(t.isFunction(o) && !1 === o.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, a) {
            "string" == typeof s && (s = {
                effect: s
            });
            var o, r = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
            s = s || {}, "number" == typeof s && (s = {
                duration: s
            }), o = !t.isEmptyObject(s), s.complete = a, s.delay && n.delay(s.delay), o && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, a) : n.queue(function(i) {
                t(this)[e](), a && a.call(n[0]), i()
            })
        }
    });
    var c = (t.widget, !1);
    t(document).mouseup(function() {
        c = !1
    });
    t.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!c) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    n = 1 === e.which,
                    s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), c = !0, !0))
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                if (!e.which) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), c = !1, !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    ! function() {
        function e(t, e, i) {
            return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
        }

        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }

        function n(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            }
        }
        t.ui = t.ui || {};
        var s, a, o = Math.max,
            r = Math.abs,
            h = Math.round,
            l = /left|center|right/,
            c = /top|center|bottom/,
            u = /[\+\-]\d+(\.[\d]+)?%?/,
            d = /^\w+/,
            p = /%$/,
            f = t.fn.position;
        t.position = {
                scrollbarWidth: function() {
                    if (void 0 !== s) return s;
                    var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        a = n.children()[0];
                    return t("body").append(n), e = a.offsetWidth, n.css("overflow", "scroll"), i = a.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                },
                getScrollInfo: function(e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                    return {
                        width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                        height: s ? t.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(e) {
                    var i = t(e || window),
                        n = t.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: n,
                        isDocument: s,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: n || s ? i.width() : i.outerWidth(),
                        height: n || s ? i.height() : i.outerHeight()
                    }
                }
            }, t.fn.position = function(s) {
                if (!s || !s.of) return f.apply(this, arguments);
                s = t.extend({}, s);
                var p, g, m, v, y, b, w = t(s.of),
                    k = t.position.getWithinInfo(s.within),
                    x = t.position.getScrollInfo(k),
                    $ = (s.collision || "flip").split(" "),
                    C = {};
                return b = n(w), w[0].preventDefault && (s.at = "left top"), g = b.width, m = b.height, v = b.offset, y = t.extend({}, v), t.each(["my", "at"], function() {
                    var t, e, i = (s[this] || "").split(" ");
                    1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : c.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = c.test(i[1]) ? i[1] : "center", t = u.exec(i[0]), e = u.exec(i[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
                }), 1 === $.length && ($[1] = $[0]), "right" === s.at[0] ? y.left += g : "center" === s.at[0] && (y.left += g / 2), "bottom" === s.at[1] ? y.top += m : "center" === s.at[1] && (y.top += m / 2), p = e(C.at, g, m), y.left += p[0], y.top += p[1], this.each(function() {
                    var n, l, c = t(this),
                        u = c.outerWidth(),
                        d = c.outerHeight(),
                        f = i(this, "marginLeft"),
                        b = i(this, "marginTop"),
                        _ = u + f + i(this, "marginRight") + x.width,
                        T = d + b + i(this, "marginBottom") + x.height,
                        D = t.extend({}, y),
                        M = e(C.my, c.outerWidth(), c.outerHeight());
                    "right" === s.my[0] ? D.left -= u : "center" === s.my[0] && (D.left -= u / 2), "bottom" === s.my[1] ? D.top -= d : "center" === s.my[1] && (D.top -= d / 2), D.left += M[0], D.top += M[1], a || (D.left = h(D.left), D.top = h(D.top)), n = {
                        marginLeft: f,
                        marginTop: b
                    }, t.each(["left", "top"], function(e, i) {
                        t.ui.position[$[e]] && t.ui.position[$[e]][i](D, {
                            targetWidth: g,
                            targetHeight: m,
                            elemWidth: u,
                            elemHeight: d,
                            collisionPosition: n,
                            collisionWidth: _,
                            collisionHeight: T,
                            offset: [p[0] + M[0], p[1] + M[1]],
                            my: s.my,
                            at: s.at,
                            within: k,
                            elem: c
                        })
                    }), s.using && (l = function(t) {
                        var e = v.left - D.left,
                            i = e + g - u,
                            n = v.top - D.top,
                            a = n + m - d,
                            h = {
                                target: {
                                    element: w,
                                    left: v.left,
                                    top: v.top,
                                    width: g,
                                    height: m
                                },
                                element: {
                                    element: c,
                                    left: D.left,
                                    top: D.top,
                                    width: u,
                                    height: d
                                },
                                horizontal: i < 0 ? "left" : e > 0 ? "right" : "center",
                                vertical: a < 0 ? "top" : n > 0 ? "bottom" : "middle"
                            };
                        g < u && r(e + i) < g && (h.horizontal = "center"), m < d && r(n + a) < m && (h.vertical = "middle"), o(r(e), r(i)) > o(r(n), r(a)) ? h.important = "horizontal" : h.important = "vertical", s.using.call(this, t, h)
                    }), c.offset(t.extend(D, {
                        using: l
                    }))
                })
            }, t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            a = n.width,
                            r = t.left - e.collisionPosition.marginLeft,
                            h = s - r,
                            l = r + e.collisionWidth - a - s;
                        e.collisionWidth > a ? h > 0 && l <= 0 ? (i = t.left + h + e.collisionWidth - a - s, t.left += h - i) : t.left = l > 0 && h <= 0 ? s : h > l ? s + a - e.collisionWidth : s : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
                    },
                    top: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            a = e.within.height,
                            r = t.top - e.collisionPosition.marginTop,
                            h = s - r,
                            l = r + e.collisionHeight - a - s;
                        e.collisionHeight > a ? h > 0 && l <= 0 ? (i = t.top + h + e.collisionHeight - a - s, t.top += h - i) : t.top = l > 0 && h <= 0 ? s : h > l ? s + a - e.collisionHeight : s : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i, n, s = e.within,
                            a = s.offset.left + s.scrollLeft,
                            o = s.width,
                            h = s.isWindow ? s.scrollLeft : s.offset.left,
                            l = t.left - e.collisionPosition.marginLeft,
                            c = l - h,
                            u = l + e.collisionWidth - o - h,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        c < 0 ? ((i = t.left + d + p + f + e.collisionWidth - o - a) < 0 || i < r(c)) && (t.left += d + p + f) : u > 0 && ((n = t.left - e.collisionPosition.marginLeft + d + p + f - h) > 0 || r(n) < u) && (t.left += d + p + f)
                    },
                    top: function(t, e) {
                        var i, n, s = e.within,
                            a = s.offset.top + s.scrollTop,
                            o = s.height,
                            h = s.isWindow ? s.scrollTop : s.offset.top,
                            l = t.top - e.collisionPosition.marginTop,
                            c = l - h,
                            u = l + e.collisionHeight - o - h,
                            d = "top" === e.my[1],
                            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            g = -2 * e.offset[1];
                        c < 0 ? ((n = t.top + p + f + g + e.collisionHeight - o - a) < 0 || n < r(c)) && (t.top += p + f + g) : u > 0 && ((i = t.top - e.collisionPosition.marginTop + p + f + g - h) > 0 || r(i) < u) && (t.top += p + f + g)
                    }
                },
                flipfit: {
                    left: function() {
                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var e, i, n, s, o, r = document.getElementsByTagName("body")[0],
                    h = document.createElement("div");
                e = document.createElement(r ? "div" : "body"), n = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, r && t.extend(n, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (o in n) e.style[o] = n[o];
                e.appendChild(h), i = r || document.documentElement, i.insertBefore(e, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", s = t(h).offset().left, a = s > 10 && s < 11, e.innerHTML = "", i.removeChild(e)
            }()
    }();
    t.ui.position, t.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target);
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.currentTarget);
                        i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            var i, n, s, a, o = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    o = !1, n = this.previousFilter || "", s = String.fromCharCode(e.keyCode), a = !1, clearTimeout(this.filterTimer), s === n ? a = !0 : s = n + s, i = this._filterMenuItems(s), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            o && e.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i, n = this,
                s = this.options.icons.submenu,
                a = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this),
                    i = e.parent(),
                    n = t("<span>").addClass("ui-menu-icon ui-icon " + s).data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
            }), e = a.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
                var e = t(this);
                n._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
            }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
        },
        focus: function(t, e) {
            var i, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, n, s, a, o, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.outerHeight(), s < 0 ? this.activeMenu.scrollTop(a + s) : s + r > o && this.activeMenu.scrollTop(a + s - o + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this.activeMenu = n
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element),
                t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(e) {
            return !t(e.target).closest(".ui-menu").length
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
        },
        nextPage: function(e) {
            var i, n, s;
            if (!this.active) return void this.next(e);
            this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - n - s < 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
        },
        previousPage: function(e) {
            var i, n, s;
            if (!this.active) return void this.next(e);
            this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - n + s > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                n = new RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return n.test(t.trim(t(this).text()))
            })
        }
    });
    t.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                a = "textarea" === s,
                o = "input" === s;
            this.isMultiLine = !!a || !o && this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(s) {
                    if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                    e = !1, n = !1, i = !1;
                    var a = t.ui.keyCode;
                    switch (s.keyCode) {
                        case a.PAGE_UP:
                            e = !0, this._move("previousPage", s);
                            break;
                        case a.PAGE_DOWN:
                            e = !0, this._move("nextPage", s);
                            break;
                        case a.UP:
                            e = !0, this._keyEvent("previous", s);
                            break;
                        case a.DOWN:
                            e = !0, this._keyEvent("next", s);
                            break;
                        case a.ENTER:
                            this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(s);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(s)
                    }
                },
                keypress: function(n) {
                    if (e) return e = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault());
                    if (!i) {
                        var s = t.ui.keyCode;
                        switch (n.keyCode) {
                            case s.PAGE_UP:
                                this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                this._move("nextPage", n);
                                break;
                            case s.UP:
                                this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                this._keyEvent("next", n)
                        }
                    }
                },
                input: function(t) {
                    if (n) return n = !1, void t.preventDefault();
                    this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(t) {
                    if (this.cancelBlur) return void delete this.cancelBlur;
                    clearTimeout(this.searching), this.close(t), this._change(t)
                }
            }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                        var e = this;
                        this.document.one("mousedown", function(n) {
                            n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                        })
                    })
                },
                menufocus: function(e, i) {
                    var n, s;
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent)
                    });
                    s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                        item: s
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), (n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))
                },
                menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item"),
                        n = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
                        this.previous = n, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
        },
        _initSource: function() {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
                n(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
                n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        s(t)
                    },
                    error: function() {
                        s([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                e && (!e || i || n) || (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return t.proxy(function(t) {
                e === this.requestIndex && this.__response(t), --this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function(t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var n = this;
            t.each(i, function(t, i) {
                n._renderItemData(e, i)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").text(i.label).appendTo(e)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return n.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
        }
    });
    t.ui.autocomplete;
    t.extend(t.ui, {
        datepicker: {
            version: "1.11.4"
        }
    });
    var u;
    t.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return r(this._defaults, t || {}), this
        },
        _attachDatepicker: function(e, i) {
            var n, s, a;
            n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), a = this._newInst(t(e), s), a.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, a) : s && this._inlineDatepicker(e, a)
        },
        _newInst: function(e, i) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? a(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var n = t(e);
            i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var n, s, a, o = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), o && (i.append = t("<span class='" + this._appendClass + "'>" + o + "</span>"), e[r ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), "focus" !== n && "both" !== n || e.focus(this._showDatepicker), "button" !== n && "both" !== n || (s = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: s,
                title: s
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
                src: a,
                alt: s,
                title: s
            }) : s)), e[r ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, s, a = new Date(2009, 11, 20),
                    o = this._get(t, "dateFormat");
                o.match(/[DM]/) && (e = function(t) {
                    for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
                    return n
                }, a.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), t.input.attr("size", this._formatDate(t, a).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, n, s, a) {
            var o, h, l, c, u, d = this._dialogInst;
            return d || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), r(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
        },
        _destroyDatepicker: function(e) {
            var i, n = t(e),
                s = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || n.removeClass(this.markerClassName).empty(), u === s && (u = null))
        },
        _enableDatepicker: function(e) {
            var i, n, s = t(e),
                a = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, a.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== i && "span" !== i || (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, n, s = t(e),
                a = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, a.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== i && "span" !== i || (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, "datepicker")
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(e, i, n) {
            var s, a, o, h, l = this._getInst(e);
            if (2 === arguments.length && "string" == typeof i) return "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null;
            s = i || {}, "string" == typeof i && (s = {}, s[i] = n), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, s), null !== o && void 0 !== s.dateFormat && void 0 === s.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== s.dateFormat && void 0 === s.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l))
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, n, s, a = t.datepicker._getInst(e.target),
                o = !0,
                r = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv), s[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, s[0]), i = t.datepicker._get(a, "onSelect"), i ? (n = t.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [n, a])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), o = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), o = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), o = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), o = e.ctrlKey || e.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : o = !1;
            o && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var i, n, s = t.datepicker._getInst(e.target);
            if (t.datepicker._get(s, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1
        },
        _doKeyUp: function(e) {
            var i, n = t.datepicker._getInst(e.target);
            if (n.input.val() !== n.lastVal) try {
                i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
            } catch (t) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, s, a, o, h, l, c;
                i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), a = s ? s.apply(e, [e, i]) : {}, !1 !== a && (r(i.settings, a), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), o = !1, t(e).parents().each(function() {
                    return !(o |= "fixed" === t(this).css("position"))
                }), h = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(i), h = t.datepicker._checkOffset(i, h, o), i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), i.inline || (l = t.datepicker._get(i, "showAnim"), c = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", n(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), c) : i.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, u = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, n = this._getNumberOfMonths(e),
                s = n[1],
                a = e.dpDiv.find("." + this._dayOverClass + " a");
            a.length > 0 && o.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(e, i, n) {
            var s = e.dpDiv.outerWidth(),
                a = e.dpDiv.outerHeight(),
                o = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                l = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? s - o : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > h && h > s ? Math.abs(i.left + s - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i
        },
        _findPos: function(e) {
            for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, n, s, a, o = this._curInst;
            !o || e && o !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), n = this._get(o, "duration"), s = function() {
                t.datepicker._tidyDialog(o)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), n, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    n = t.datepicker._getInst(i[0]);
                (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === n) || t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, n) {
            var s = t(e),
                a = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(a, i + ("M" === n ? this._get(a, "showCurrentAtPos") : 0), n), this._updateDatepicker(a))
        },
        _gotoToday: function(e) {
            var i, n = t(e),
                s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
        },
        _selectMonthYear: function(e, i, n) {
            var s = t(e),
                a = this._getInst(s[0]);
            a["selected" + ("M" === n ? "Month" : "Year")] = a["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(s)
        },
        _selectDay: function(e, i, n, s) {
            var a, o = t(e);
            t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = t("a", s).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = n, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var n, s = t(e),
                a = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), n = this._get(a, "onSelect"), n ? n.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, n, s, a = this._get(e, "altField");
            a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(a).each(function() {
                t(this).val(s)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && e < 6, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(e, i, n) {
            if (null == e || null == i) throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? i.toString() : i + "")) return null;
            var s, a, o, r, h = 0,
                l = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (n ? n.dayNames : null) || this._defaults.dayNames,
                p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (n ? n.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                v = -1,
                y = -1,
                b = !1,
                w = function(t) {
                    var i = s + 1 < e.length && e.charAt(s + 1) === t;
                    return i && s++, i
                },
                k = function(t) {
                    var e = w(t),
                        n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        s = "y" === t ? n : 1,
                        a = new RegExp("^\\d{" + s + "," + n + "}"),
                        o = i.substring(h).match(a);
                    if (!o) throw "Missing number at position " + h;
                    return h += o[0].length, parseInt(o[0], 10)
                },
                x = function(e, n, s) {
                    var a = -1,
                        o = t.map(w(e) ? s : n, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if (t.each(o, function(t, e) {
                            var n = e[1];
                            if (i.substr(h, n.length).toLowerCase() === n.toLowerCase()) return a = e[0], h += n.length, !1
                        }), -1 !== a) return a + 1;
                    throw "Unknown name at position " + h
                },
                $ = function() {
                    if (i.charAt(h) !== e.charAt(s)) throw "Unexpected literal at position " + h;
                    h++
                };
            for (s = 0; s < e.length; s++)
                if (b) "'" !== e.charAt(s) || w("'") ? $() : b = !1;
                else switch (e.charAt(s)) {
                    case "d":
                        v = k("d");
                        break;
                    case "D":
                        x("D", u, d);
                        break;
                    case "o":
                        y = k("o");
                        break;
                    case "m":
                        m = k("m");
                        break;
                    case "M":
                        m = x("M", p, f);
                        break;
                    case "y":
                        g = k("y");
                        break;
                    case "@":
                        r = new Date(k("@")), g = r.getFullYear(), m = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "!":
                        r = new Date((k("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "'":
                        w("'") ? $() : b = !0;
                        break;
                    default:
                        $()
                }
            if (h < i.length && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === g ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= c ? 0 : -100)), y > -1)
                for (m = 1, v = y;;) {
                    if (a = this._getDaysInMonth(g, m - 1), v <= a) break;
                    m++, v -= a
                }
            if (r = this._daylightSavingAdjust(new Date(g, m - 1, v)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== v) throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(t, e, i) {
            if (!e) return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                a = (i ? i.dayNames : null) || this._defaults.dayNames,
                o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                h = function(e) {
                    var i = n + 1 < t.length && t.charAt(n + 1) === e;
                    return i && n++, i
                },
                l = function(t, e, i) {
                    var n = "" + e;
                    if (h(t))
                        for (; n.length < i;) n = "0" + n;
                    return n
                },
                c = function(t, e, i, n) {
                    return h(t) ? n[e] : i[e]
                },
                u = "",
                d = !1;
            if (e)
                for (n = 0; n < t.length; n++)
                    if (d) "'" !== t.charAt(n) || h("'") ? u += t.charAt(n) : d = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            u += l("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), s, a);
                            break;
                        case "o":
                            u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += l("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), o, r);
                            break;
                        case "y":
                            u += h("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(n)
                    }
            return u
        },
        _possibleChars: function(t) {
            var e, i = "",
                n = !1,
                s = function(i) {
                    var n = e + 1 < t.length && t.charAt(e + 1) === i;
                    return n && e++, n
                };
            for (e = 0; e < t.length; e++)
                if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
            return i
        },
        _get: function(t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    n = t.lastVal = t.input ? t.input.val() : null,
                    s = this._getDefaultDate(t),
                    a = s,
                    o = this._getFormatConfig(t);
                try {
                    a = this.parseDate(i, n, o) || s
                } catch (t) {
                    n = e ? "" : n
                }
                t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = n ? a.getDate() : 0, t.currentMonth = n ? a.getMonth() : 0, t.currentYear = n ? a.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, n) {
            var s = null == i || "" === i ? n : "string" == typeof i ? function(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (t) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), a = n.getMonth(), o = n.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = r.exec(i); h;) {
                    switch (h[2] || "d") {
                        case "d":
                        case "D":
                            o += parseInt(h[1], 10);
                            break;
                        case "w":
                        case "W":
                            o += 7 * parseInt(h[1], 10);
                            break;
                        case "m":
                        case "M":
                            a += parseInt(h[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(s, a));
                            break;
                        case "y":
                        case "Y":
                            s += parseInt(h[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(s, a))
                    }
                    h = r.exec(i)
                }
                return new Date(s, a, o)
            }(i) : "number" == typeof i ? isNaN(i) ? n : function(t) {
                var e = new Date;
                return e.setDate(e.getDate() + t), e
            }(i) : new Date(i.getTime());
            return s = s && "Invalid Date" === s.toString() ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)),
                this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function(t, e, i) {
            var n = !e,
                s = t.selectedMonth,
                a = t.selectedYear,
                o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), s === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(n, -i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(n, +i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(n)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, n, s, a, o, r, h, l, c, u, d, p, f, g, m, v, y, b, w, k, x, $, C, _, T, D, M, S, E, N, A, I, L, j, O, F, B, P, H = new Date,
                R = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
                W = this._get(t, "isRTL"),
                z = this._get(t, "showButtonPanel"),
                q = this._get(t, "hideIfNoPrevNext"),
                Y = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                X = this._get(t, "showCurrentAtPos"),
                G = this._get(t, "stepMonths"),
                K = 1 !== U[0] || 1 !== U[1],
                V = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                J = this._getMinMaxDate(t, "min"),
                Q = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - X,
                tt = t.drawYear;
            if (Z < 0 && (Z += 12, tt--), Q)
                for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - U[0] * U[1] + 1, Q.getDate())), e = J && e < J ? J : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) --Z < 0 && (Z = 11, tt--);
            for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - G, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = Y ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Z + G, 1)), this._getFormatConfig(t)) : s, a = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + s + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + s + "</span></a>", o = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? V : R, o = Y ? this.formatDate(o, r, this._getFormatConfig(t)) : o, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (W ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (W ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), w = "", x = 0; x < U[0]; x++) {
                for ($ = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                    if (_ = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), T = " ui-corner-all", D = "", K) {
                        if (D += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                            case 0:
                                D += " ui-datepicker-group-first", T = " ui-corner-" + (W ? "right" : "left");
                                break;
                            case U[1] - 1:
                                D += " ui-datepicker-group-last", T = " ui-corner-" + (W ? "left" : "right");
                                break;
                            default:
                                D += " ui-datepicker-group-middle", T = ""
                        }
                        D += "'>"
                    }
                    for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? W ? a : n : "") + (/all|right/.test(T) && 0 === x ? W ? n : a : "") + this._generateMonthYearHeader(t, Z, tt, J, Q, x > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", k = 0; k < 7; k++) S = (k + c) % 7, M += "<th scope='col'" + ((k + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[S] + "'>" + p[S] + "</span></th>";
                    for (D += M + "</tr></thead><tbody>", E = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, E)), N = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, A = Math.ceil((N + E) / 7), I = K && this.maxRows > A ? this.maxRows : A, this.maxRows = I, L = this._daylightSavingAdjust(new Date(tt, Z, 1 - N)), j = 0; j < I; j++) {
                        for (D += "<tr>", O = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(L) + "</td>" : "", k = 0; k < 7; k++) F = m ? m.apply(t.input ? t.input[0] : null, [L]) : [!0, ""], B = L.getMonth() !== Z, P = B && !y || !F[0] || J && L < J || Q && L > Q, O += "<td class='" + ((k + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (B ? " ui-datepicker-other-month" : "") + (L.getTime() === _.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === L.getTime() && b.getTime() === _.getTime() ? " " + this._dayOverClass : "") + (P ? " " + this._unselectableClass + " ui-state-disabled" : "") + (B && !v ? "" : " " + F[1] + (L.getTime() === V.getTime() ? " " + this._currentClass : "") + (L.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (B && !v || !F[2] ? "" : " title='" + F[2].replace(/'/g, "&#39;") + "'") + (P ? "" : " data-handler='selectDay' data-event='click' data-month='" + L.getMonth() + "' data-year='" + L.getFullYear() + "'") + ">" + (B && !v ? "&#xa0;" : P ? "<span class='ui-state-default'>" + L.getDate() + "</span>" : "<a class='ui-state-default" + (L.getTime() === R.getTime() ? " ui-state-highlight" : "") + (L.getTime() === V.getTime() ? " ui-state-active" : "") + (B ? " ui-priority-secondary" : "") + "' href='#'>" + L.getDate() + "</a>") + "</td>", L.setDate(L.getDate() + 1), L = this._daylightSavingAdjust(L);
                        D += O + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, tt++), D += "</tbody></table>" + (K ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), $ += D
                }
                w += $
            }
            return w += l, t._keyEvent = !1, w
        },
        _generateMonthYearHeader: function(t, e, i, n, s, a, o, r) {
            var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                y = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                w = "";
            if (a || !m) w += "<span class='ui-datepicker-month'>" + o[e] + "</span>";
            else {
                for (h = n && n.getFullYear() === i, l = s && s.getFullYear() === i, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!h || c >= n.getMonth()) && (!l || c <= s.getMonth()) && (w += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                w += "</select>"
            }
            if (y || (b += w + (!a && m && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"), y && (b += (!a && m && v ? "" : "&#xa0;") + w), b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var n = t.drawYear + ("Y" === i ? e : 0),
                s = t.drawMonth + ("M" === i ? e : 0),
                a = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, a)));
            t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                n = this._getMinMaxDate(t, "max"),
                s = i && e < i ? i : e;
            return n && s > n ? n : s
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, n) {
            var s = this._getNumberOfMonths(t),
                a = this._daylightSavingAdjust(new Date(i, n + (e < 0 ? e : s[0] * s[1]), 1));
            return e < 0 && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a)
        },
        _isInRange: function(t, e) {
            var i, n, s = this._getMinMaxDate(t, "min"),
                a = this._getMinMaxDate(t, "max"),
                o = null,
                r = null,
                h = this._get(t, "yearRange");
            return h && (i = h.split(":"), n = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += n), i[1].match(/[+\-].*/) && (r += n)), (!s || e.getTime() >= s.getTime()) && (!a || e.getTime() <= a.getTime()) && (!o || e.getFullYear() >= o) && (!r || e.getFullYear() <= r)
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, n) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.11.4";
    var d = (t.datepicker, t);
    t.effects = {
            effect: {}
        },
        function(t, e) {
            function i(t, e, i) {
                var n = c[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
            }

            function n(e) {
                var i = h(),
                    n = i._rgba = [];
                return e = e.toLowerCase(), p(r, function(t, s) {
                    var a, o = s.re.exec(e),
                        r = o && s.parse(o),
                        h = s.space || "rgba";
                    if (r) return a = i[h](r), i[l[h].cache] = a[l[h].cache], n = i._rgba = a._rgba, !1
                }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), i) : a[e]
            }

            function s(t, e, i) {
                return i = (i + 1) % 1, 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var a, o = /^([\-+])=\s*(\d+\.?\d*)/,
                r = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                h = t.Color = function(e, i, n, s) {
                    return new t.Color.fn.parse(e, i, n, s)
                },
                l = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                c = {
                    byte: {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                u = h.support = {},
                d = t("<p>")[0],
                p = t.each;
            d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(l, function(t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), h.fn = t.extend(h.prototype, {
                parse: function(e, s, o, r) {
                    if (void 0 === e) return this._rgba = [null, null, null, null], this;
                    (e.jquery || e.nodeType) && (e = t(e).css(s), s = void 0);
                    var c = this,
                        u = t.type(e),
                        d = this._rgba = [];
                    return void 0 !== s && (e = [e, s, o, r], u = "array"), "string" === u ? this.parse(n(e) || a._default) : "array" === u ? (p(l.rgba.props, function(t, n) {
                        d[n.idx] = i(e[n.idx], n)
                    }), this) : "object" === u ? (e instanceof h ? p(l, function(t, i) {
                        e[i.cache] && (c[i.cache] = e[i.cache].slice())
                    }) : p(l, function(n, s) {
                        var a = s.cache;
                        p(s.props, function(t, n) {
                            if (!c[a] && s.to) {
                                if ("alpha" === t || null == e[t]) return;
                                c[a] = s.to(c._rgba)
                            }
                            c[a][n.idx] = i(e[t], n, !0)
                        }), c[a] && t.inArray(null, c[a].slice(0, 3)) < 0 && (c[a][3] = 1, s.from && (c._rgba = s.from(c[a])))
                    }), this) : void 0
                },
                is: function(t) {
                    var e = h(t),
                        i = !0,
                        n = this;
                    return p(l, function(t, s) {
                        var a, o = e[s.cache];
                        return o && (a = n[s.cache] || s.to && s.to(n._rgba) || [], p(s.props, function(t, e) {
                            if (null != o[e.idx]) return i = o[e.idx] === a[e.idx]
                        })), i
                    }), i
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return p(l, function(i, n) {
                        e[n.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function(t, e) {
                    var n = h(t),
                        s = n._space(),
                        a = l[s],
                        o = 0 === this.alpha() ? h("transparent") : this,
                        r = o[a.cache] || a.to(o._rgba),
                        u = r.slice();
                    return n = n[a.cache], p(a.props, function(t, s) {
                        var a = s.idx,
                            o = r[a],
                            h = n[a],
                            l = c[s.type] || {};
                        null !== h && (null === o ? u[a] = h : (l.mod && (h - o > l.mod / 2 ? o += l.mod : o - h > l.mod / 2 && (o -= l.mod)), u[a] = i((h - o) * e + o, s)))
                    }), this[s](u)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        s = h(e)._rgba;
                    return h(t.map(i, function(t, e) {
                        return (1 - n) * s[e] + n * t
                    }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), h.fn.parse.prototype = h.fn, l.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, n = t[0] / 255,
                    s = t[1] / 255,
                    a = t[2] / 255,
                    o = t[3],
                    r = Math.max(n, s, a),
                    h = Math.min(n, s, a),
                    l = r - h,
                    c = r + h,
                    u = .5 * c;
                return e = h === r ? 0 : n === r ? 60 * (s - a) / l + 360 : s === r ? 60 * (a - n) / l + 120 : 60 * (n - s) / l + 240, i = 0 === l ? 0 : u <= .5 ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
            }, l.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    n = t[2],
                    a = t[3],
                    o = n <= .5 ? n * (1 + i) : n + i - n * i,
                    r = 2 * n - o;
                return [Math.round(255 * s(r, o, e + 1 / 3)), Math.round(255 * s(r, o, e)), Math.round(255 * s(r, o, e - 1 / 3)), a]
            }, p(l, function(e, n) {
                var s = n.props,
                    a = n.cache,
                    r = n.to,
                    l = n.from;
                h.fn[e] = function(e) {
                    if (r && !this[a] && (this[a] = r(this._rgba)), void 0 === e) return this[a].slice();
                    var n, o = t.type(e),
                        c = "array" === o || "object" === o ? e : arguments,
                        u = this[a].slice();
                    return p(s, function(t, e) {
                        var n = c["object" === o ? t : e.idx];
                        null == n && (n = u[e.idx]), u[e.idx] = i(n, e)
                    }), l ? (n = h(l(u)), n[a] = u, n) : h(u)
                }, p(s, function(i, n) {
                    h.fn[i] || (h.fn[i] = function(s) {
                        var a, r = t.type(s),
                            h = "alpha" === i ? this._hsla ? "hsla" : "rgba" : e,
                            l = this[h](),
                            c = l[n.idx];
                        return "undefined" === r ? c : ("function" === r && (s = s.call(this, c), r = t.type(s)), null == s && n.empty ? this : ("string" === r && (a = o.exec(s)) && (s = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1)), l[n.idx] = s, this[h](l)))
                    })
                })
            }), h.hook = function(e) {
                var i = e.split(" ");
                p(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, s) {
                            var a, o, r = "";
                            if ("transparent" !== s && ("string" !== t.type(s) || (a = n(s)))) {
                                if (s = h(a || s), !u.rgba && 1 !== s._rgba[3]) {
                                    for (o = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && o && o.style;) try {
                                        r = t.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (t) {}
                                    s = s.blend(r && "transparent" !== r ? r : "_default")
                                }
                                s = s.toRgbaString()
                            }
                            try {
                                e.style[i] = s
                            } catch (t) {}
                        }
                    }, t.fx.step[i] = function(e) {
                        e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, h.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
                expand: function(t) {
                    var e = {};
                    return p(["Top", "Right", "Bottom", "Left"], function(i, n) {
                        e["border" + n + "Color"] = t
                    }), e
                }
            }, a = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(d),
        function() {
            function e(e) {
                var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    a = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (a[t.camelCase(i)] = s[i]);
                else
                    for (i in s) "string" == typeof s[i] && (a[i] = s[i]);
                return a
            }

            function i(e, i) {
                var n, a, o = {};
                for (n in i) a = i[n], e[n] !== a && (s[n] || !t.fx.step[n] && isNaN(parseFloat(a)) || (o[n] = a));
                return o
            }
            var n = ["add", "remove", "toggle"],
                s = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (d.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function(s, a, o, r) {
                var h = t.speed(a, o, r);
                return this.queue(function() {
                    var a, o = t(this),
                        r = o.attr("class") || "",
                        l = h.children ? o.find("*").addBack() : o;
                    l = l.map(function() {
                        return {
                            el: t(this),
                            start: e(this)
                        }
                    }), a = function() {
                        t.each(n, function(t, e) {
                            s[e] && o[e + "Class"](s[e])
                        })
                    }, a(), l = l.map(function() {
                        return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                    }), o.attr("class", r), l = l.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            n = t.extend({}, h, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, n), i.promise()
                    }), t.when.apply(t, l.get()).done(function() {
                        a(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) {
                                e.css(t, "")
                            })
                        }), h.complete.call(o[0])
                    })
                })
            }, t.fn.extend({
                addClass: function(e) {
                    return function(i, n, s, a) {
                        return n ? t.effects.animateClass.call(this, {
                            add: i
                        }, n, s, a) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function(e) {
                    return function(i, n, s, a) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: i
                        }, n, s, a) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function(e) {
                    return function(i, n, s, a, o) {
                        return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                            add: i
                        } : {
                            remove: i
                        }, s, a, o) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: i
                        }, n, s, a)
                    }
                }(t.fn.toggleClass),
                switchClass: function(e, i, n, s, a) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, n, s, a)
                }
            })
        }(),
        function() {
            function e(e, i, n, s) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                    effect: e
                }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
            }

            function i(e) {
                return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
            }
            t.extend(t.effects, {
                version: "1.11.4",
                save: function(t, e) {
                    for (var i = 0; i < e.length; i++) null !== e[i] && t.data("ui-effects-" + e[i], t[0].style[e[i]])
                },
                restore: function(t, e) {
                    var i, n;
                    for (n = 0; n < e.length; n++) null !== e[n] && (i = t.data("ui-effects-" + e[n]), void 0 === i && (i = ""), t.css(e[n], i))
                },
                setMode: function(t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                getBaseline: function(t, e) {
                    var i, n;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            n = 0;
                            break;
                        case "center":
                            n = .5;
                            break;
                        case "right":
                            n = 1;
                            break;
                        default:
                            n = t[1] / e.width
                    }
                    return {
                        x: n,
                        y: i
                    }
                },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            float: e.css("float")
                        },
                        n = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        s = {
                            width: e.width(),
                            height: e.height()
                        },
                        a = document.activeElement;
                    try {
                        a.id
                    } catch (t) {
                        a = document.body
                    }
                    return e.wrap(n), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), n = e.parent(), "static" === e.css("position") ? (n.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function(t, n) {
                        i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(s), n.css(i).show()
                },
                removeWrapper: function(e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                },
                setTransition: function(e, i, n, s) {
                    return s = s || {}, t.each(i, function(t, i) {
                        var a = e.cssUnit(i);
                        a[0] > 0 && (s[i] = a[0] * n + a[1])
                    }), s
                }
            }), t.fn.extend({
                effect: function() {
                    function i(e) {
                        function i() {
                            t.isFunction(a) && a.call(s[0]), t.isFunction(e) && e()
                        }
                        var s = t(this),
                            a = n.complete,
                            r = n.mode;
                        (s.is(":hidden") ? "hide" === r : "show" === r) ? (s[r](), i()) : o.call(s[0], n, i)
                    }
                    var n = e.apply(this, arguments),
                        s = n.mode,
                        a = n.queue,
                        o = t.effects.effect[n.effect];
                    return t.fx.off || !o ? s ? this[s](n.duration, n.complete) : this.each(function() {
                        n.complete && n.complete.call(this)
                    }) : !1 === a ? this.each(i) : this.queue(a || "fx", i)
                },
                show: function(t) {
                    return function(n) {
                        if (i(n)) return t.apply(this, arguments);
                        var s = e.apply(this, arguments);
                        return s.mode = "show", this.effect.call(this, s)
                    }
                }(t.fn.show),
                hide: function(t) {
                    return function(n) {
                        if (i(n)) return t.apply(this, arguments);
                        var s = e.apply(this, arguments);
                        return s.mode = "hide", this.effect.call(this, s)
                    }
                }(t.fn.hide),
                toggle: function(t) {
                    return function(n) {
                        if (i(n) || "boolean" == typeof n) return t.apply(this, arguments);
                        var s = e.apply(this, arguments);
                        return s.mode = "toggle", this.effect.call(this, s)
                    }
                }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        n = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) {
                        i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                    }), n
                }
            })
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                e[i] = function(e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function(t) {
                    return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }();
    t.effects, t.effects.effect.fade = function(e, i) {
        var n = t(this),
            s = t.effects.setMode(n, e.mode || "toggle");
        n.animate({
            opacity: s
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
}),
function(t) {
    "use strict";
    t.findByRole = function(e, i) {
        return i = i || t(document), i.find("[data-role~='" + e + "']")
    }, t.fn.hasRole = function(t) {
        return this.is("[data-role~='" + t + "']")
    };
    var e = ["add", "children", "closest", "filter", "find", "has", "is", "next", "nextAll", "nextUntil", "not", "parent", "parents", "parentsUntil", "prev", "prevAll", "prevUntil", "siblings"];
    t.each(e, function(e, i) {
        t.fn[i + "ByRole"] = function(t) {
            return this[i]("[data-role~='" + t + "']")
        }
    }), t.fn.role = function(t) {
        return arguments.length > 0 ? this.attr("data-role", t) : this.attr("data-role")
    }
}(jQuery), jQuery(function(t) {
        t.datepicker.regional.nl = {
            closeText: "Sluiten",
            prevText: "â†",
            nextText: "â†’",
            currentText: "Vandaag",
            monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            dayNamesShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            dayNamesMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            weekHeader: "Wk",
            dateFormat: "dd-mm-yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }
    }),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self, function() {
            var i = t.Cookies,
                n = t.Cookies = e();
            n.noConflict = function() {
                return t.Cookies = i, n
            }
        }())
    }(this, function() {
        "use strict";

        function t(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) t[n] = i[n]
            }
            return t
        }
        var e = {
            read: function(t) {
                return t.replace(/%3B/g, ";")
            },
            write: function(t) {
                return t.replace(/;/g, "%3B")
            }
        };
        return function i(n, s) {
            function a(i, a, o) {
                if ("undefined" != typeof document) {
                    "number" == typeof(o = t({}, s, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)), o.expires && (o.expires = o.expires.toUTCString()), i = e.write(i).replace(/=/g, "%3D"), a = n.write(String(a), i);
                    var r = "";
                    for (var h in o) o[h] && (r += "; " + h, !0 !== o[h] && (r += "=" + o[h].split(";")[0]));
                    return document.cookie = i + "=" + a + r
                }
            }
            return Object.create({
                set: a,
                get: function(t) {
                    if ("undefined" != typeof document && (!arguments.length || t)) {
                        for (var i = document.cookie ? document.cookie.split("; ") : [], s = {}, a = 0; a < i.length; a++) {
                            var o = i[a].split("="),
                                r = o.slice(1).join("="),
                                h = e.read(o[0]).replace(/%3D/g, "=");
                            if (s[h] = n.read(r, h), t === h) break
                        }
                        return t ? s[t] : s
                    }
                },
                remove: function(e, i) {
                    a(e, "", t({}, i, {
                        expires: -1
                    }))
                },
                withAttributes: function(e) {
                    return i(this.converter, t({}, this.attributes, e))
                },
                withConverter: function(e) {
                    return i(t({}, this.converter, e), this.attributes)
                }
            }, {
                attributes: {
                    value: Object.freeze(s)
                },
                converter: {
                    value: Object.freeze(n)
                }
            })
        }(e, {
            path: "/"
        })
    });
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function(t) {
    "use strict";
    switch (t.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (t.disabled) return !0;
            break;
        case "input":
            if (deviceIsIOS && "file" === t.type || t.disabled) return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(t.className)
}, FastClick.prototype.needsFocus = function(t) {
    "use strict";
    switch (t.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !deviceIsAndroid;
        case "input":
            switch (t.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !t.disabled && !t.readOnly;
        default:
            return /\bneedsfocus\b/.test(t.className)
    }
}, FastClick.prototype.sendClick = function(t, e) {
    "use strict";
    var i, n;
    document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
}, FastClick.prototype.determineEventType = function(t) {
    "use strict";
    return deviceIsAndroid && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
}, FastClick.prototype.focus = function(t) {
    "use strict";
    var e;
    deviceIsIOS && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
}, FastClick.prototype.updateScrollParent = function(t) {
    "use strict";
    var e, i;
    if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
        i = t;
        do {
            if (i.scrollHeight > i.offsetHeight) {
                e = i, t.fastClickScrollParent = i;
                break
            }
            i = i.parentElement
        } while (i)
    }
    e && (e.fastClickLastScrollTop = e.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function(t) {
    "use strict";
    return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
}, FastClick.prototype.onTouchStart = function(t) {
    "use strict";
    var e, i, n;
    if (t.targetTouches.length > 1) return !0;
    if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], deviceIsIOS) {
        if (n = window.getSelection(), n.rangeCount && !n.isCollapsed) return !0;
        if (!deviceIsIOS4) {
            if (i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
            this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
        }
    }
    return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < 200 && t.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function(t) {
    "use strict";
    var e = t.changedTouches[0],
        i = this.touchBoundary;
    return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
}, FastClick.prototype.onTouchMove = function(t) {
    "use strict";
    return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
}, FastClick.prototype.findControl = function(t) {
    "use strict";
    return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function(t) {
    "use strict";
    var e, i, n, s, a, o = this.targetElement;
    if (!this.trackingClick) return !0;
    if (t.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
    if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (a = t.changedTouches[0], o = document.elementFromPoint(a.pageX - window.pageXOffset, a.pageY - window.pageYOffset) || o, o.fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (n = o.tagName.toLowerCase())) {
        if (e = this.findControl(o)) {
            if (this.focus(o), deviceIsAndroid) return !1;
            o = e
        }
    } else if (this.needsFocus(o)) return t.timeStamp - i > 100 || deviceIsIOS && window.top !== window && "input" === n ? (this.targetElement = null, !1) : (this.focus(o), this.sendClick(o, t), deviceIsIOS4 && "select" === n || (this.targetElement = null, t.preventDefault()), !1);
    return !(!deviceIsIOS || deviceIsIOS4 || !(s = o.fastClickScrollParent) || s.fastClickLastScrollTop === s.scrollTop) || (this.needsClick(o) || (t.preventDefault(), this.sendClick(o, t)), !1)
}, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function(t) {
    "use strict";
    return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
}, FastClick.prototype.onClick = function(t) {
    "use strict";
    var e;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
}, FastClick.prototype.destroy = function() {
    "use strict";
    var t = this.layer;
    deviceIsAndroid && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function(t) {
    "use strict";
    var e, i;
    if (void 0 === window.ontouchstart) return !0;
    if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!deviceIsAndroid) return !0;
        if (e = document.querySelector("meta[name=viewport]")) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (i > 31 && window.innerWidth <= window.screen.width) return !0
        }
    }
    return "none" === t.style.msTouchAction
}, FastClick.attach = function(t) {
    "use strict";
    return new FastClick(t)
}, "undefined" != typeof define && define.amd ? define(function() {
    "use strict";
    return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick;
var hasTransitionEnd = function(t) {
        for (var e = ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "otransitionend"], i = 0; i < e.length; i++) {
            var n = e[i];
            if ("on" + n in t) {
                var s = new t.Boolean(!0);
                s.event = n;
                break
            }
        }
        return s || !1
    }(this),
    LazyImages = function() {
        "use strict";

        function t() {
            $(window).scroll(function() {
                w = $(window).scrollTop()
            }).scroll(), $(window).resize(function() {
                k = $(window).height()
            }).resize(), e($.findByRole("lazy-image")), $("body").on("add", function() {
                console.warn("adding images to queue due to body.add-event"), e($.findByRole("lazy-image"))
            }), $(window).resize(_.throttle(h, m))
        }

        function e(t) {
            if ("object" != typeof t || t.length < 0) return void console.error("invalid argument: _$el");
            t.each(function(t, e) {
                i($(e))
            }), l(), s()
        }

        function i(t, e) {
            if (t.data("lazy-image-initiated")) return !1;
            var i = {
                loaded: !1,
                $element: t,
                url: t.data("lazy-image-url"),
                size: -1,
                scale: !!_.isBoolean(t.data("lazy-image-scale")) && t.data("lazy-image-scale"),
                animate: !!_.isBoolean(t.data("lazy-image-animate")) && t.data("lazy-image-animate"),
                fullScreen: !!_.isBoolean(t.data("lazy-image-full-screen")) && t.data("lazy-image-full-screen"),
                srcWidth: _.isNumber(t.data("lazy-image-width")) ? t.data("lazy-image-width") : -1,
                srcHeight: _.isNumber(t.data("lazy-image-height")) ? t.data("lazy-image-height") : -1,
                offsetX: !!_.isString(t.data("lazy-image-offset-x")) && t.data("lazy-image-offset-x"),
                offsetY: !!_.isString(t.data("lazy-image-offset-y")) && t.data("lazy-image-offset-y"),
                target: _.isString(t.data("lazy-image-target")) ? t.data("lazy-image-target") : "bg",
                loadWhen: _.isFunction(e) ? e : function(t) {
                    var e = k / 2;
                    return t.offset().top <= k + w + e
                }
            };
            if (!i.url) return void console.error("LazyImages: No url set for image:", i);
            i.srcRatio = i.srcWidth > 0 && i.srcHeight > 0 ? i.srcWidth / i.srcHeight : -1, i.scale && (i.srcWidth < 0 || i.srcHeight < 0) && (console.warn("LazyImages: Scaling enabled, but no width/height available. Scaling disabled because of this.", i), i.scale = !1), i.fullScreen && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && $(window).resize(function() {
                i.$element.height($(window).height())
            }).resize(), i.$element.data("lazy-image-initiated", !0), f.push(i)
        }

        function n(t) {
            if (x) return void t();
            C.push(t)
        }

        function s() {
            clearInterval(g), x = !1, g = setInterval(l, m)
        }

        function a() {
            clearInterval(g)
        }

        function o() {
            x = !0, _.each(C, function(t) {
                t()
            }), C = []
        }

        function r() {
            f.every(function(t) {
                return !!t.rendered
            }) && o()
        }

        function h() {
            _.each(f, function(t) {
                t.scale && (t.loaded = t.rendered = !1)
            }), s()
        }

        function l() {
            var t = 0;
            _.each(f, function(e) {
                e.loadWhen(e.$element) && !e.loaded && (e.loaded = c(e)), e.loaded && t++
            }), t == f.length && a()
        }

        function c(t) {
            var e = t.scale ? d(t) : u(t.url);
            if (e) {
                $("<img />").load(function() {
                    var i = w > 0 && t.animate;
                    i && t.$element.css("opacity", 0), "bg" === t.target && (t.$element.css("background-image", "url(" + e + ")"), t.offsetX && t.offsetY && t.$element.css("background-position", t.offsetX + " " + t.offsetY)), "src" === t.target && t.$element.attr("src", e), i && t.$element.animate({
                        opacity: 1
                    }, v), t.$element.addClass("loaded"), t.$element.closest("li").addClass("lazy-content-loaded"), t.animate = !1, t.rendered = !0, r()
                }).attr("src", e);
                return !0
            }
            return console.warn("LazyImages: url not found", t), !1
        }

        function u(t, e) {
            t = t.replace(/^http:|^https:/, "");
            var i = t.split("=s");
            return e && e > y && (e = y), e || 0 !== parseInt(_.last(i), 10) || (e = b), e ? _.first(i) + "=s" + Math.ceil(e) : t
        }

        function d(t) {
            var e, i;
            return t.elementWidth = t.$element.width(), t.elementHeight = t.$element.height(), t.elementRatio = t.elementWidth / t.elementHeight, t.srcRatio > t.elementRatio ? t.srcRatio > 1 ? (i = t.srcHeight / t.elementHeight, e = t.srcWidth / i) : e = t.elementHeight : t.srcRatio > 1 ? e = t.elementWidth : (i = t.srcWidth / t.elementWidth, e = t.srcHeight / i), e > t.size ? t.size = e : e = t.size, u(t.url, e)
        }

        function p() {
            for (var t in f) f[t].loaded = !1
        }
        var f = [],
            g = null,
            m = 500,
            v = 250,
            y = 1600,
            b = 1400,
            w = 0,
            k = 0,
            x = !1,
            C = [];
        return {
            init: t,
            add: e,
            formatUrl: u,
            refresh: p,
            registerRenderedCallback: n
        }
    };
! function(t, e) {
    function i(t) {
        this.data = t, this.id = t.id || "", this.isMap = 0 < t.mapType, this.J = !t.path && !t.id, this.width = t.width, this.height = t.height, this.lang = t.lang || "en", this.Kc = [], this.ea = this.width, this.da = this.height, this.path = t.path || this.basePath, this.Ic = this.baseCdn || this.path, this.type = t.type, this.vc = "zoomify" == this.type, this.Wb = "fif" == this.type, this.ge = t.fifType, this.ca = t.tileSize || (this.vc || this.Wb) && 256 || this.tileSize, this.fd = 1 == t.isThumb && i.Ud, this.jb = !this.fd && !1 !== t.hookEvents, this.lb = "cover" == t.initType, this.Hc = !1 !== t.autoInit, this.aa = t.json || {}, this.ba = !t.noLevel0 && 1 || 0, this.ye = t.levelLimit || 1 / 0, this.ze = 1 == t.limitToCoverScale, this.ce = t.doubleClickZoomOut, this.He = 1 == t.miniMap, this.Ta = !1 !== t.loaderBar && !this.J, this.Md = 1 == t.fullscreen, this.Hd = 1 == t.trackState, this.Sa = t.startCoo instanceof Array && t.startCoo, this.Ad = t.view instanceof Array && 4 == t.view.length && t.view, this.ke = !0 === t.freeMove, this.parent = t.parent, this.Ua = t.watchScale, this.fa = !1 === t.zoomLimit && 1 / 0 || t.zoomLimit || 1, this.language = t.language || this.defaultLanguage || "en", this.clearRect = !0 !== t.noClearRect, this.vd = t.scrollSensitivity || 1, this.u = t.restrict || [0, 0, 1, 1], this.Pe = t.markerType, this.rb = navigator.i.ie9 || navigator.i.iOS && navigator.i.mobile, this.hd = navigator.i.ie || navigator.i.firefox || navigator.i.safari, this.Tb = this.rb && .2 || .5, this.Sc = 0, this.opacity = 1, this.r = [], this.D = [], this.gc = this.Cb = this.Ba = !1, this.qd = 0, this.thumbSrc = this.Cd = this.aspect = this.Mb = this.camera = this.d = this.ratio = this.la = this.h = this.oa = null, this.qb = i.Td && new i.Td(this), this.Kb = null, this.b = {
            Oe: !1,
            ec: !1,
            tb: !1,
            T: [],
            na: [],
            r: [],
            Ca: [],
            pb: [],
            ya: [],
            Eb: [],
            now: performance.now()
        }, this.k = this.data.canvas instanceof Element && this.data.canvas, this.container = this.f = this.data.container || this.k && this.k.parentNode || e.body, this.f.classList.add("micrio-container"), this.f.micrio = this, this.f.t = this.f.offsetWidth, this.f.w = this.f.offsetHeight, this.f.ea = this.f.t, this.f.da = this.f.w, this.J ? this.el = this.k = this.f : (this.el = this.k = this.k || e.createElement("canvas"), this.k.classList.add("micrio"), this.k.micrio = this), this.k.offset = {
            top: 0,
            left: 0
        }, this.kc = !(this.J || this.width && this.height), this.ib = !this.kc, this.kc ? this.pe() : this.ua()
    }

    function n(t) {
        var e, i = "";
        for (e in o) i += t.replace(/\$/, o[e]);
        return i
    }

    function s(t, e, i) {
        var n = 3 * t,
            s = 3 * (e - t) - n,
            a = 1 - n - s,
            o = 3 * (i - 0) - 0,
            r = 1 - o;
        return function(t) {
            for (var e, i = t, h = 0; 5 > h && (e = i * (n + i * (s + i * a)) - t, !(.001 > Math.abs(e)));) i -= e / (n + i * (2 * s + 3 * a * i)), h++;
            return (t = i) * (0 + t * (o + t * r))
        }
    }
    i.prototype = {
        basePath: "http://bin.micr.io/public/",
        tileSize: 512,
        pe: function() {
            "json" == this.type ? i.H.se(this, function() {
                this.ib = !0, this.ua()
            }.bind(this)) : i.H.Uc(this.path + this.id + "/info.json", function(t) {
                this.ib = !0, (this.isMap = 0 < t.MapType) && i.Va && (t.Width = i.Va.prototype.Xe, t.Height = i.Va.prototype.We, this.J = !0, this.Ta = !1), this.width = t.Width, this.height = t.Height, t.Cultures && (this.Kc = t.Cultures.split(",")), 1 != this.data.skipMeta ? 0 <= this.Kc.indexOf(this.lang) ? this.getMetadata() : (this.f.dispatchEvent(new f("metadata", {
                    detail: {}
                })), this.ua()) : this.ua()
            }.bind(this), function() {
                i.H.get(this.path + "info/" + this.id, function(t) {
                    this.ib = !0, this.id = t[0], this.width = parseInt(t[1]), this.height = parseInt(t[2]), this.ua()
                }.bind(this), function(t) {
                    console.log("Error!", t)
                }, null, null, !0)
            }.bind(this))
        },
        getMetadata: function() {
            i.H.Uc(this.path + this.id + "/data." + this.lang + ".json", function(t) {
                this.ed(t), this.ua(), this.dd(t)
            }.bind(this), function() {
                console.warn("Micrio data." + this.lang + ".json not found"), this.ua()
            }.bind(this))
        },
        ed: function(t) {
            i.Vd && !this.oa && (this.Q && this.Q.viewer ? (this.oa = this.Q.viewer, this.oa.nc(t, this)) : this.viewer = this.oa = new i.Vd(this, t))
        },
        dd: function(t) {
            if (!t) return this.f.dispatchEvent(new f("metadata", {
                detail: {}
            }));
            this.ed(t), this.kd && t.maps && this.kd.nc(t.maps), i.Rd && t.audio && (this.audio = this.Gc = new i.Rd(this, t.audio), this.Gc.ra(), this.Gc.start()), i.Gb && t.markers && (this.markers = this.ld = new i.Gb(this, t.markers), this.ld.nd(), i.Gb.Ib && t.markerTours && (this.markerTours = t.markerTours.map(function(t) {
                return new i.Gb.Ib(this.ld, t)
            }.bind(this)))), i.Ib && t.tours && (this.tours = t.tours.map(function(t) {
                return new i.Ib(this, t)
            }.bind(this))), i.Sd && t.children && (this.children = this.children = new i.Sd(this, t.children)), this.f.dispatchEvent(new f("metadata", {
                detail: t
            }))
        },
        ua: function() {
            if (this.isMap && i.Va && (this.kd = new i.Va(this)), this.aspect = this.Mb = this.width / this.height, this.ratio = this.la = t.devicePixelRatioIEMobile || !this.rb && !this.data.noRetina && t.devicePixelRatio && Math.min(2, t.devicePixelRatio) || 1, this.ea = this.width, this.da = this.height, !this.J) {
                for (var n = this.ca; n < Math.max(this.width, this.height); n *= 2, this.ba++);
                this.h = this.k.getContext("2d"), this.k.parentNode && this.f == this.k.parentNode || this.f.appendChild(this.k), this.Ta && (this.Nb = e.createElement("loaderbar")), this.fd && (this.thumb = new i.Ud(this)), this.thumbSrc = this.Cd = this.data.thumbSrc || this.Ic + this.id + "/" + (this.ba - 1) + "/0-0.jpg"
            }
            this.camera = this.d = new i.c(this), this.f.dispatchEvent(new f("preset", {
                detail: this
            })), this.Hc && this.ka()
        },
        ka: function() {
            if (!this.Ba) {
                if (this.Ba = !0, !this.J) {
                    for (var t = 0; t < this.ba; t++) this.r.push(new i.Ha(this, t));
                    for (t = this.ba - 1; 0 <= t; t--) this.r[t].Dd = t < this.ba - 1 && this.r[t + 1].Dd + this.r[t + 1].De || 0
                }
                return this.Q || this.d.ka(), this.show()
            }
        },
        show: function() {
            if (this.kc && !this.ib) {
                this.Hc = !0;
                var t = this;
                return new Promise(function(e, i) {
                    t.f.addEventListener("load", e.bind(this)), i && t.f.addEventListener("error", i.bind(this))
                })
            }
            return this.Ba ? this.Cb ? new Promise(function(t, e) {
                e && e("Already shown")
            }) : (this.Cb = !0, this.Q || (this.J || this.k.parentNode || this.f.appendChild(this.k), this.d.start(), this.d.ra(), this.qb && this.qb.nd(), this.Md && this.f.appendChild(this.d.ga), this.oa && this.oa.nd()), this.Ta && this.f.appendChild(this.Nb), this.Xd = new Promise(function(t, e) {
                this.gc ? t.bind(this)() : (this.f.addEventListener("load", t.bind(this)), e && this.f.addEventListener("error", e.bind(this)))
            }.bind(this)), this.J && setTimeout(this.Nc.bind(this)), this.Xd) : this.ka()
        },
        Na: function() {
            this.Cb && (this.Cb = !1, this.J || this.f.removeChild(this.k), this.qb && this.qb.remove(), this.Ta && this.f.removeChild(this.Nb), this.Md && this.f.removeChild(this.d.ga), this.oa && this.oa.remove(), this.parent && this.parent.f.removeEventListener("move", this.Ye), this.d.stop(), this.d.Ga())
        },
        xd: function(t) {
            this.Q ? this.M && this.Q.xd(Math.max(this.width / (this.M[2] - this.M[0]), this.height / (this.M[3] - this.M[1])) / Math.max(this.Q.width, this.Q.height) / t) : t > this.fa && (this.fa = t)
        },
        C: function() {
            if (!this.J) {
                this.b.Yc = !1, this.b.ec = !1, this.b.tb = !1, this.b.r.length = 0, this.b.T.length = 0, this.b.na.length = 0, this.b.Ca.length = 0, this.b.pb.length = 0, this.b.ya.length = 0, this.b.Eb.length = 0, this.b.now = performance.now();
                for (var t = 0; t < this.r.length; t++) this.r[t].b.scale >= .5 / this.la && this.ba - this.r[t].Da < this.ye && this.b.r.push(this.r[t]);
                if (this.b.r.length || (this.b.r = [this.r[this.r.length - 1]]), !(this.d.p[2] <= this.d.p[0] || this.d.p[3] <= this.d.p[1])) {
                    for (t = 0; t < this.b.r.length; t++)
                        if (this.b.Ca = this.b.r[t].ve(), this.b.pb = this.qe(this.b.Ca), this.b.ya = this.b.ya.concat(this.b.Ca), this.b.T = this.b.T.concat(this.b.pb), this.b.na = this.b.na.concat(this.ue(this.b.Ca)), this.we(this.b.pb).length == this.b.Ca.length) {
                            this.b.Yc = 0 == t;
                            break
                        }
                    for (this.b.T.reverse(), this.b.na.reverse(), this.b.tb = !1, t = 0; t < this.b.T.length; t++) this.b.T[t].Yb ? this.b.T[t].C(this.b.now) : (this.b.tb || this.b.T[t].C(this.b.now), this.b.tb = !0), 1 > this.b.T[t].opacity && (this.b.ec = !0);
                    if (this.Sc++, 1 <= this.Tb)
                        for (t = 0; t < this.Tb && t < this.b.na.length; t++) this.b.na[t].load();
                    else 0 == this.Sc % (1 / this.Tb) && this.b.na.length && this.b.na[0].load();
                    for (this.b.Eb = this.te(this.D, this.b.ya), t = 0; t < this.b.Eb.length; t++) this.b.Eb[t].Ae();
                    !this.b.Yc || this.b.ec ? this.d.L() : this.gc || this.Nc(), this.Ta && this.qd != this.b.T.length / this.b.ya.length && (this.Nb.style.width = 100 * (this.qd = this.b.T.length / this.b.ya.length) + "%")
                }
            }
        },
        qe: function(t) {
            for (var e = [], i = 0; i < t.length; i++) t[i] && t[i].loaded && e.push(t[i]);
            return e
        },
        ue: function(t) {
            for (var e = [], i = 0; i < t.length; i++) !t[i] || t[i].src || t[i].D || e.push(t[i]);
            return e
        },
        we: function(t) {
            for (var e = [], i = 0; i < t.length; i++) 1 == t[i].opacity && t[i].Yb && e.push(t[i]);
            return e
        },
        te: function(t, e) {
            for (var i = [], n = 0; n < t.length; n++) - 1 == e.indexOf(t[n]) && i.push(t[n]);
            return i
        },
        Nc: function() {
            this.gc = !0, this.f.classList.add("loaded"), this.f.dispatchEvent(new f("load", {
                detail: this
            }))
        },
        Yd: function(t) {
            this.D.push(t), 1 == this.D.length && this.jd()
        },
        loaded: function(t) {
            for (var e = 0; e < this.D.length; e++)
                if (this.D[e] == t) {
                    this.D.splice(e, 1);
                    break
                }
            cancelAnimationFrame(this.Kb), this.Kb = requestAnimationFrame(this.jd.bind(this))
        },
        jd: function() {
            if (this.D.length)
                for (var t = this.Q && 2 || 4, e = 1; e < t; e++) this.D[this.D.length - e] && this.D[this.D.length - e].cc()
        }
    }, t.Micrio = i, i.prototype.show = i.prototype.show, i.prototype.hide = i.prototype.Na, i.prototype.initMeta = i.prototype.dd, i.prototype.setZoomLimit = i.prototype.xd, i.Ha = function(t, e) {
        this.a = t, this.Da = e, this.aa = this.a.aa && this.a.aa.levels && this.a.aa.levels[e], this.j = this.scale = Math.pow(2, e), this.Ed = [], this.dc = [], this.b = {
            scale: 1,
            A: [0, 0, 0, 0]
        }, this.ca = t.ca * this.scale, this.za = [Math.ceil(t.width / this.ca), Math.ceil(t.height / this.ca)], this.De = this.za[0] * this.za[1], this.Db = [this.ca / this.a.width, this.ca / this.a.height]
    }, i.Ha.prototype = {
        ve: function() {
            this.dc.length = 0;
            var t = this.a.d.Lc;
            this.j = this.scale * this.a.d.j, this.b.A[0] = Math.max(0, Math.floor(t[0] / this.Db[0])), this.b.A[1] = Math.max(0, Math.ceil(t[2] / this.Db[0])), this.b.A[2] = Math.max(0, Math.floor(t[1] / this.Db[1])), this.b.A[3] = Math.max(0, Math.floor(t[3] / this.Db[1]));
            for (var e = t = 0; this.b.A[2] - 1 < this.b.A[3] && this.b.A[2] < this.za[1]; this.b.A[2]++)
                for (e = this.b.A[0], t = this.za[0] * this.b.A[2]; e < this.b.A[1]; e++) this.dc.push(this.Ed[t + e] || (this.Ed[t + e] = new i.Ha.yc(this, e, this.b.A[2], this.aa && this.aa.tiles[t + e])));
            return this.dc
        }
    }, i.Ha.yc = function(t, e, i, n) {
        this.I = t, this.x = e, this.y = i, this.aa = n, this.src = null, this.height = this.width = 0, this.Yb = this.Pb = this.loaded = this.D = !1, this.error = null, this.od = 0, this.opacity = t.a.rb && 1 || 0, this.Ie = e * this.I.a.ca, this.Je = i * this.I.a.ca, this.$ = new Image, this.$.onload = this.onload.bind(this), this.$.onerror = this.onerror.bind(this), this.cc = this.cc.bind(this)
    }, i.Ha.yc.prototype = {
        load: function() {
            this.D || (this.D = !0, this.I.a.Yd(this))
        },
        cc: function() {
            if (!this.error) {
                var t = this.I.a,
                    e = this.I,
                    i = this.aa,
                    n = this.x,
                    s = this.y;
                this.src = this.$.src = i && i.url || t.Ic + t.id + (!t.Wb && "microscope" != t.type && "/" || "") + (t.data.isMontBlanc ? t.ba - e.Da + 7 + "/" + n + "_" + s + ".jpeg" : t.vc ? "TileGroup" + Math.floor((e.Dd + s * e.za[0] + n) / 256) + "/" + (t.ba - e.Da - 1) + "-" + n + "-" + s + ".jpg" : t.Wb ? t.ba - e.Da - 1 + ("directory" == t.ge && "/" || ",") + (s * e.za[0] + n) : "microscope" == t.type ? "tile=" + e.Da + "," + n + "," + s + ",256,256" : e.Da + "/" + n + "-" + s + ".jpg")
            }
        },
        onload: function() {
            this.width = this.$.naturalWidth || this.$.height, this.height = this.$.naturalHeight || this.$.width, this.loaded = !0, this.od = performance.now(), this.fc()
        },
        fc: function() {
            this.I.a.loaded(this)
        },
        onerror: function() {
            this.Pb || (this.error = !0, this.D = !1, this.loaded = !0, this.fc()), this.Pb = !1
        },
        Ae: function() {
            this.src = this.$.src = "", this.Pb = !0, this.loaded = this.D = !1, this.fc()
        },
        C: function(t, e, i, n) {
            this.loaded && !this.error && (this.Yb = !0, e = this.I.j, i = this.I.a.d.offset, n = this.I.a.hd || 0 != this.I.a.d.rotation, this.I.a.rb || (1 > this.opacity && (this.opacity = Math.min(1, (t - this.od) / 250)), this.I.a.h.globalAlpha = this.opacity * this.I.a.opacity), this.I.a.h.drawImage(this.$, this.Ie * e - i[0], this.Je * e - i[1], n && this.width * e + 1 || this.width * e, n && this.height * e + 1 || this.height * e))
        }
    };
    var a = e.createElement("style"),
        o = ["-webkit-", "-moz-", "-ms-", ""];
    if (a.textContent = ".micrio-container{" + n("$user-select:none;") + "-ms-content-zooming:none;-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y;overflow:hidden;position:relative;backface-visibility:hidden;}.micrio-container.hooked{cursor:move;" + n("cursor:$grab;") + "}.micrio-container.dragging{" + n("cursor:$grabbing;") + '}.micrio-container loaderbar{position:absolute;display:block;left:0;top:0;height:2px;background:rgba(255,255,255,.75);pointer-events:none;transition:opacity .25s ease, width .25s ease;z-index:8;}.micrio-container loaderbar[style="width: 100%;"]{opacity:0;}.micrio-container.fullscreen{width:100vw !important;height:100vh !important;}micrio[id]{display: block;}', e.head.appendChild(a), function() {
            for (var e = 0, i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !t.requestAnimationFrame; ++n) t.requestAnimationFrame = t[i[n] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i[n] + "CancelAnimationFrame"] || t[i[n] + "CancelRequestAnimationFrame"];
            t.requestAnimationFrame || (t.requestAnimationFrame = function(i) {
                var n = (new Date).getTime(),
                    s = Math.max(0, 16 - (n - e)),
                    a = t.setTimeout(function() {
                        i(n + s)
                    }, s);
                return e = n + s, a
            }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        }(), t.performance || (t.performance = {}), t.performance.now || (t.performance.now = Date.now), void 0 !== t.Element && !("classList" in e.documentElement)) {
        Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
            for (var i = e || 0, n = this.length; i < n; i++)
                if (this[i] === t) return i;
            return -1
        });
        var a = Array.prototype,
            h = a.indexOf,
            l = a.slice,
            c = a.push,
            u = a.splice,
            d = a.join,
            p = function(t) {
                if (this.Ac = t, "string" == typeof t.className && t.className != this.Jb && (this.Jb = t.className)) {
                    t = this.Jb.replace(/^\s+|\s+$/g, "").split(/\s+/);
                    var e;
                    for (e = 0; e < t.length; e++) c.call(this, t[e])
                }
            };
        p.prototype = {
                add: function(t) {
                    this.contains(t) || (c.call(this, t), t = l.call(this, 0), this.Ac.className = t.join(" "))
                },
                contains: function(t) {
                    return -1 !== h.call(this, t)
                },
                remove: function(t) {
                    -1 !== (t = h.call(this, t)) && (u.call(this, t, 1), t = l.call(this, 0), this.Ac.className = t.join(" "))
                },
                toString: function() {
                    return d.call(this, " ")
                }
            }, t.DOMTokenList = p,
            function(t, e, i) {
                Object.defineProperty ? Object.defineProperty(t, e, {
                    get: i
                }) : t.__defineGetter__(e, i)
            }(t.Element.prototype, "classList", function() {
                return new p(this)
            })
    }
    if (navigator.userAgent && (a = navigator.userAgent.toLowerCase(), /msie/.test(a) || /rv\:11\.0/.test(a) || !t.Ke)) {
        var f = function(t, i) {
            i = i || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = e.createEvent("CustomEvent");
            return n.initCustomEvent(t, i.bubbles, i.cancelable, i.detail), n
        };
        f.prototype = t.CustomEvent && t.CustomEvent.prototype || t.Event.prototype, t.CustomEvent = f
    }
    Math.yb = Math.pyth = function(t, e) {
        return Math.sqrt(t * t + e * e)
    }, Math.rotate = function(t, e, i, n, s) {
        s = -s * Math.PI / 180, i /= 2, n /= 2, t -= i;
        var a = e - n;
        return e = Math.sqrt(t * t + a * a), s = Math.atan2(a, t) + s, {
            x: Math.cos(s) * e + i,
            y: Math.sin(s) * e + n
        }
    }, t.parseTime = function(t) {
        t = [0, 0, Math.round(t)];
        for (var e in "21")
            for (; 60 <= t[2 - e] && (t[2 - e] -= 60, ++t[1 - e]););
        return (t[0] && t[0] + ":") + (t[0] && 10 > t[1] && "0" + t[1] || t[1]) + ":" + (10 > t[2] && "0" + t[2] || t[2])
    }, a = navigator.userAgent.toLowerCase(), navigator.i = {}, navigator.i.webkit = /applewebkit/.test(a), navigator.i.firefox = /firefox/.test(a), navigator.i.safari = /safari/.test(a) && !/chrome/.test(a), navigator.i.ie = /msie/.test(a) || /trident/.test(a) || /edge\//.test(a), navigator.i.iemobile = /iemobile/.test(a), navigator.i.iOS = /ipad|iphone|ipod/.test(a), navigator.i.OSX = /macintosh/.test(a) && /os\ x/.test(a), navigator.i.android = /android/.test(a), navigator.i.ie9 = navigator.i.ie && /ie 9/.test(a), navigator.i.iPad = /ipad/.test(a), navigator.i.mobile = navigator.i.iOS || navigator.i.android || navigator.i.iemobile, navigator.i.unknown = !(navigator.i.webkit || navigator.i.firefox || navigator.i.ie || navigator.i.iOS || navigator.i.android), a = {}, a.transform = "webkitTransform" in e.documentElement.style ? "webkitTransform" : "mozTransform" in e.documentElement.style ? "mozTransform" : "msTransform" in e.documentElement.style ? "msTransform" : "transform", a.translate3d = navigator.i.ie9 ? ["translate(", ")"] : ["translate3d(", ",0)"], a.scale3d = navigator.i.ie9 ? ["scale(", ")"] : ["scale3d(", ",1)"], a.trans = a.Ve = function(t, e, i) {
        return navigator.i.ie9 ? "translate(" + t + "," + e + ")" : "translate3d(" + t + "px," + e + "px," + (i || 0) + "px)"
    }, a.scale = a.scale = function(t) {
        return navigator.i.ie9 ? "scale(" + t + "," + t + ")" : "scale3d(" + t + "," + t + ",1)"
    }, a.rotateZ = a.Te = function(t) {
        return navigator.i.ie9 ? "rotateZ(" + t + "deg)" : "rotate3d(0,0,1," + t + "deg)"
    }, t.CSS = a, navigator.browser = navigator.i, navigator.i.iemobile && (t.Me = Math.round(t.screen.availWidth / e.documentElement.clientWidth)), i.Utils = i.Wa = {
        ae: function() {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        },
        Re: function(t, e) {
            return e = Math.pow(10, e || 1), 10 > (t = Math.round(t * e) / e) && "0" + t || t
        },
        Ce: function(t, i, n, s, a) {
            return t = e.createElement(t), i && (t.className = i), s && (t.textContent = s), a && (t.innerHTML = a), n instanceof Element && n.appendChild(t), t
        },
        Ne: function(t) {
            for (var e = 0, n = i.prototype.tileSize; n < Math.max(t.width, t.height); n *= 2, e++);
            return i.prototype.basePath + (t.shortId || t.id) + "/" + e + "/0-0.jpg"
        }
    }, i.Wa.createGUID = i.Wa.ae, i.Wa.newEl = i.Wa.Ce, i.Camera = i.c = function(t) {
        this.a = t, this.offset = [0, 0], this.position = {
            x: 0,
            y: 0,
            z: 0
        }, this.rotation = 0, this.G = this.ia = 1, this.oc(), this.j = t.lb ? this.ia : this.G, this.paused = !1, this.initScale = this.mb = this.j, this.ta = this.U = !1, this.p = null, this.Y = [0, 0, 0], this.pd = "", this.Qc = 0, this.qc = !0, this.jc = [], this.ga = e.createElement("button"), this.ga.className = "fullscreen", this.ga.title = "Toggle Full Screen", this.ga.innerHTML = "&#8690;", this.ani = this.F = null, this.v = {}, this.Zb = !1, this.Ec = this.Bc = this.Fc = this.Kb = this.ha = this.minimap = this.sa = this.events = this.m = null, this.zc = {
            bb: 1
        }, this.C = this.C.bind(this), this.L = this.L.bind(this), this.reset = this.reset.bind(this), this.Xc = this.Xc.bind(this), this.fb = this.fb.bind(this), this.gb = this.gb.bind(this), this.onresize = this.onresize.bind(this), this.Ea = this.Ea.bind(this)
    }, i.c.prototype = {
        ka: function() {
            i.c.o && (this.events = this.m = new i.c.o(this)), i.c.Hb && this.a.He && (this.minimap = this.sa = new i.c.Hb(this)), this.ani = this.F = new i.c.wc, this.Tc(), this.Ea()
        },
        start: function() {
            this.a.Ad && this.Ab(this.a.Ad), this.a.Sa && 3 == this.a.Sa.length ? (this.W(this.a.Sa[2]), this.V(this.a.Sa)) : this.m && (this.W(this.j), this.a.lb ? this.V(this.a.Sa || [.5, .5]) : this.P(0, 0)), this.Ea()
        },
        stop: function() {
            this.F && this.F.stop(), this.paused = !1, this.m && this.m.stop()
        },
        pause: function() {
            this.F && this.F.pause()
        },
        pc: function() {
            this.F && this.F.pc()
        },
        ra: function() {
            this.m && this.a.jb && this.m.ra(), addEventListener("resize", this.onresize), this.a.Be && (this.Bc = setInterval(this.L, 2e3))
        },
        Ga: function() {
            this.m && this.m.Ga(), removeEventListener("resize", this.onresize), e.removeEventListener(this.v.onchange, this.fb), clearInterval(this.Bc)
        },
        cb: function(t, e, n, s, a, o, r) {
            return 1 != this.a.fa && (o = !0), this.eb(new i.c.wa(this.a, t, e, n).tc(void 0, !o), s, a, r, o)
        },
        ne: r("Qc"),
        eb: function(t, e, n, s, a) {
            if (this.a.Q && this.a.M) {
                var o = [this.a.M[2] - this.a.M[0], this.a.M[3] - this.a.M[1]];
                return this.a.Q.d.eb([this.a.M[0] + t[0] * o[0], this.a.M[1] + t[1] * o[1], this.a.M[2] - (1 - t[2]) * o[0], this.a.M[3] - (1 - t[3]) * o[1]], e, n, s, a)
            }
            1 != this.a.fa && (a = !0), t instanceof Array && (t = new i.c.pa(this.a, t)), (isNaN(e) || null === e) && (e = 2500 * this.Ka(t) * (n || 1)), this.stop();
            var r = this.Aa(!0);
            return this.F.add(r, t.A, e, function(t) {
                this.Qc = t, this.Ab(r, !0, a)
            }.bind(this), s || g.ab)
        },
        je: function(t, e) {
            return this.cb(.5, .5, this.a.d.G, t, e)
        },
        he: function(t, e) {
            return this.cb(.5, .5, this.a.d.ia, t, e)
        },
        xe: function() {
            return this.j == this.G
        },
        re: r("G"),
        le: r("ia"),
        reset: function() {
            this.W(this.mb), this.V([.5, .5])
        },
        Ka: function(t) {
            t instanceof i.c.pa && (t = t.A);
            var e = this.hb([t[0] + (t[2] - t[0]) / 2, t[1] + (t[3] - t[1]) / 2]),
                n = this.a.f.getClientRects()[0],
                s = [n.left + n.width / 2, n.top + n.height / 2],
                e = Math.yb(e[0] - s[0], e[1] - s[1]) / Math.max(n.width, n.height);
            return Math.min(2, Math.yb(e, Math.max((this.p[2] - this.p[0]) / (t[2] - t[0]), (this.p[3] - this.p[1]) / (t[3] - t[1])) / 3) / 2)
        },
        N: function(t, e, i) {
            this.a.J && (i = !0), e && (e = this.a.f.getClientRects()[0], t[0] -= e.left, t[1] -= e.top), e = this.La(t[0], t[1]), t = (this.offset[0] + e.x) / this.j / this.a.width, e = (this.offset[1] + e.y) / this.j / this.a.height;
            var n = this.a.u || [0, 0, 1, 1];
            return i && [t, e, this.j] || [Math.max(n[0], Math.min(n[2], t)), Math.max(n[1], Math.min(n[3], e)), this.j]
        },
        La: function(t, e, i) {
            return Math.rotate(t, e, this.a.f.t, this.a.f.w, i || this.rotation)
        },
        V: function(t, e, i) {
            return 1 != this.a.fa && (i = !0), t[2] && this.W(t[2], i), this.a.u && (t[0] = Math.max(this.a.u[0], Math.min(this.a.u[2], t[0])), t[1] = Math.max(this.a.u[1], Math.min(this.a.u[3], t[1]))), this.P((this.position.x = t[0]) * this.a.width * this.j - this.a.f.t / 2, (this.position.y = t[1]) * this.a.height * this.j - this.a.f.w / 2, !0, i), e || this.L(), !0
        },
        me: r("Y"),
        hb: function(t, e) {
            var i = this.La(t[0] * this.a.width * this.j - this.offset[0], t[1] * this.a.height * this.j - this.offset[1], -this.rotation);
            if (e) {
                var n = this.a.f.getClientRects()[0];
                return [i.x + n.left, i.y + n.top]
            }
            return [i.x, i.y]
        },
        Aa: function(t, e) {
            if (1 != this.a.fa && (t = !0), e && (t = !1), this.rotation) {
                var i = this.N([0, 0], void 0, t),
                    n = this.N([this.a.f.t, 0], void 0, t),
                    s = this.N([this.a.f.t, this.a.f.w], void 0, t),
                    a = this.N([0, this.a.f.w], void 0, t),
                    o = this.a.u;
                return [Math.max(o[0], Math.min(o[2], Math.min(i[0], n[0], s[0], a[0]))), Math.max(o[1], Math.min(o[3], Math.min(i[1], n[1], s[1], a[1]))), Math.max(o[0], Math.min(o[2], Math.max(i[0], n[0], s[0], a[0]))), Math.max(o[1], Math.min(o[3], Math.max(i[1], n[1], s[1], a[1])))]
            }
            return this.N([0, 0], void 0, t).splice(0, 2).concat(this.N([this.a.f.t, this.a.f.w], void 0, t).splice(0, 2))
        },
        Xc: function() {
            var t = this.a.Be.Le.getClientRects()[0];
            return this.Fc = [Math.max(0, Math.min(1, 0 > t.left ? -t.left / t.width : 0)), Math.max(0, Math.min(1, 0 > t.top ? -t.top / t.height : 0)), Math.max(0, Math.min(1, 1 - (0 > innerWidth - t.right ? -(innerWidth - t.right) / t.width : 0))), Math.max(0, Math.min(1, 1 - (0 > innerHeight - t.bottom ? -(innerHeight - t.bottom) / t.height : 0)))]
        },
        Ab: function(t, e, i) {
            this.V(this.Wc(t, i), !e, i)
        },
        Wc: function(t, e) {
            return t instanceof Array && (t = new i.c.pa(this.a, t)), t.Gd(!e).Ge()
        },
        P: function(t, e, i, n) {
            if (this.a.ke && (n = !0), n) this.offset[0] = t + (i ? 0 : this.offset[0]), this.offset[1] = e + (i ? 0 : this.offset[1]);
            else {
                n = this.a.width * this.j - this.a.f.ea;
                var s = this.a.height * this.j - this.a.f.da,
                    a = (this.a.f.t - this.a.f.ea) / 2,
                    o = (this.a.f.w - this.a.f.da) / 2;
                this.offset[0] = Math.max(-a, Math.min(n - a, t + (i ? 0 : this.offset[0]))) + (0 > n && n / 2 || 0), this.offset[1] = Math.max(-o, Math.min(s - o, e + (i ? 0 : this.offset[1]))) + (0 > s && s / 2 || 0), this.a.u && (t = [this.a.u[0] * this.a.width * this.a.d.j, this.a.u[1] * this.a.height * this.a.d.j, this.a.u[2] * this.a.width * this.a.d.j - this.a.f.t, this.a.u[3] * this.a.height * this.a.d.j - this.a.f.w], this.offset[0] = Math.max(t[0], Math.min(t[2], this.offset[0])) + Math.min(0, t[2] - t[0]) / 2, this.offset[1] = Math.max(t[1], Math.min(t[3], this.offset[1])) + Math.min(0, t[3] - t[1]) / 2)
            }
            return this.p = this.Aa(), this.Lc = this.Aa(null, !0), !0
        },
        W: function(t, e, i) {
            for (this.j = Math.max(!e && this.G || 0, Math.min(this.a.fa, t)), this.Ua = this.a.Ua instanceof Element && this.a.Ua.micrio.camera.getCurrentCoo()[2] || 1, this.qc = !0, t = 0; t < this.a.r.length; t++) this.a.r[t].b.scale = this.j * this.a.r[t].scale, isNaN(this.Ua) || (this.a.r[t].b.scale *= this.Ua);
            return i && this.V([this.position.x, this.position.y], !0), !0
        },
        wd: function(t, e, i) {
            if (this.rotation != t) {
                this.a.hd = !0;
                var n = [this.a.f.t / 2, this.a.f.w / 2],
                    s = this.j == this.ia,
                    a = this.j,
                    o = [this.p[0] + (this.p[2] - this.p[0]) / 2, this.p[1] + (this.p[3] - this.p[1]) / 2];
                this.stop(), this.F.add({
                    Rb: this.rotation
                }, {
                    Rb: t
                }, e || 0, function(t, e) {
                    this.a.h.translate(n[0], n[1]), this.a.h.rotate((e.Rb - this.rotation) * Math.PI / 180), this.a.h.translate(-n[0], -n[1]), this.rotation = e.Rb;
                    var r = this.Ma(this.a.width, this.a.height);
                    this.a.ea = r.width, this.a.da = r.height, r = this.Ma(this.a.f.t, this.a.f.w), this.a.f.ea = r.width, this.a.f.da = r.height, this.oc(), this.W(s && this.ia || a), this.V(o, !0), this.sa && this.sa.C(), i || this.L()
                }.bind(this), g.ab)
            }
        },
        C: function() {
            if (this.p = this.Aa(), this.Lc = this.Aa(null, !0), this.Y = this.N([this.a.f.t / 2, this.a.f.w / 2]), !this.a.J) {
                if (this.a.data.background) this.a.h.fillStyle = this.a.data.background, this.a.h.fillRect(0, 0, this.a.k.width, this.a.k.height);
                else if (this.a.clearRect)
                    if (this.rotation) {
                        var t = this.a.f.t / 2,
                            e = this.a.f.w / 2;
                        this.a.h.translate(t, e), this.a.h.rotate(-this.rotation * Math.PI / 180), this.a.h.clearRect(-t, -e, 2 * t, 2 * e), this.a.h.rotate(this.rotation * Math.PI / 180), this.a.h.translate(-t, -e)
                    } else this.a.h.clearRect(0, 0, this.a.k.width, this.a.k.height);
                this.a.C()
            }
            if (this.Y.join(",") != this.pd && (this.qc && (this.qc = !1, this.a.k.dispatchEvent(new f("zoom", {
                    detail: this.Y
                }))), this.a.k.dispatchEvent(new f("move", {
                    detail: this.a
                }))), this.a.k.dispatchEvent(new f("draw", {
                    detail: this.a
                })), this.jc.length)
                for (t = 0; t < this.jc.length; t++) this.jc[t]();
            this.pd = this.Y.join(",")
        },
        L: function() {
            cancelAnimationFrame(this.ha), this.ha = requestAnimationFrame(this.C)
        },
        zoom: function(t, e) {
            var i = this.a.f.t / this.a.width,
                n = .5 * this.j / i,
                s = this.N([this.a.f.t / 2, this.a.f.w / 2]).splice(0, 2);
            this.W(this.j + i / 3 * n * (t / 120)), e && this.V(s, !0)
        },
        Od: function(t, e) {
            var i = this.a.f.t / this.a.width,
                n = .5 * this.j / i;
            0 > t && (t *= 2 / 3);
            var s = this.N([this.a.f.t / 2, this.a.f.w / 2]).splice(0, 2),
                i = i / 3 * n * 3 * (t || 1);
            this.stop(), this.zc.bb = this.j, this.F.add(this.zc, {
                bb: this.j + i
            }, isNaN(e) && 200 || e, function(t, e) {
                this.W(e.bb), this.V(s)
            }.bind(this), g.ab)
        },
        Pd: function(t, e) {
            this.Od(t || 1, e)
        },
        Qd: function(t, e) {
            this.Od(-(t || 1), e)
        },
        Ma: function(t, e) {
            var i = this.rotation * Math.PI / 180;
            return {
                width: e * Math.abs(Math.sin(i)) + t * Math.abs(Math.cos(i)),
                height: e * Math.abs(Math.cos(i)) + t * Math.abs(Math.sin(i))
            }
        },
        oc: function() {
            this.ia = Math.max(this.a.f.ea / this.a.width, this.a.f.da / this.a.height), this.G = this.a.ze && this.ia || Math.min(this.a.f.t / this.a.ea, this.a.f.w / this.a.da), this.a.u && (this.G /= Math.max(this.a.u[2] - this.a.u[0], this.a.u[3] - this.a.u[1])), this.initScale = this.mb = this.a.lb ? this.ia : this.G, (!this.a.jb || this.a.lb && this.j < this.mb) && (this.j = this.mb)
        },
        onresize: function(t) {
            !0 === t ? this.Ea(t) : (cancelAnimationFrame(this.Ec), this.Ec = requestAnimationFrame(this.Ea))
        },
        Ea: function(t) {
            !0 !== t && (e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || e.msFullscreenElement) && !this.v.xa || (this.a.f.t = this.a.f.offsetWidth, this.a.f.w = this.a.f.offsetHeight, t = this.Ma(this.a.f.t, this.a.f.w), this.a.f.ea = t.width, this.a.f.da = t.height, this.a.J || (this.a.k.width = this.a.f.t * this.a.la, this.a.k.height = this.a.f.w * this.a.la, 1 != this.a.la && (this.a.k.style.width = this.a.f.t + "px", this.a.k.style.height = this.a.f.w + "px"), this.a.k.offset = this.a.f.getClientRects()[0]), t = this.p, this.oc(), this.W(this.j), this.P(this.offset[0], this.offset[1], !0), t && this.Ab(t), this.rotation && (t = this.rotation, this.rotation = 0, this.wd(t, 0, !0)), !this.a.J && 1 < this.a.la && this.a.h.setTransform(this.a.la, 0, 0, this.a.la, 0, 0), this.L())
        },
        Tc: function() {
            this.Zb || (this.Zb = !0, this.v = {
                xa: !1,
                uc: !1,
                Ra: this.a.f.requestFullScreen || this.a.f.webkitRequestFullScreen || this.a.f.mozRequestFullScreen || this.a.f.msRequestFullscreen,
                Vb: e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen,
                onchange: "onwebkitfullscreenchange" in e ? "webkitfullscreenchange" : "onmozfullscreenchange" in e ? "mozfullscreenchange" : "onmsfullscreenchange" in e ? "MSFullscreenChange" : "onfullscreenchange" in e ? "fullscreenchange" : null
            }, this.v.Ra ? (this.v.Ra = this.v.Ra.bind(this.a.f), this.v.Vb = this.v.Vb.bind(e), e.addEventListener(this.v.onchange, this.fb), this.ga.onclick = this.gb) : this.a.f.classList.add("no-fullscreen"))
        },
        fb: function() {
            this.v.xa = (e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || e.msFullscreenElement) == this.a.f, this.a.f.classList[this.v.xa && "add" || "remove"]("fullscreen"), this.v.xa ? (this.v.uc = !0, this.ga.innerHTML = "&#8689;") : this.v.uc && (this.v.uc = !1, this.ga.innerHTML = "&#8690;"), this.onresize()
        },
        gb: function() {
            if (this.Zb || this.Tc(), !this.v.Ra) return console.warn("Your browser does not support full screen");
            this.v.xa ? this.v.Vb() : this.v.Ra()
        },
        oe: function() {
            return this.Y[0].toPrecision(4) + "," + this.Y[1].toPrecision(4) + "," + this.Y[2].toPrecision(4)
        },
        bc: function() {
            return (this.p[0].toFixed(4) + "-" + this.p[1].toFixed(4) + "-" + this.p[2].toFixed(4) + "-" + this.p[3].toFixed(4)).replace(/\.0000/g, "").replace(/0\./g, "_")
        }
    }, i.c.prototype.getXY = i.c.prototype.hb, i.c.prototype.getCurrentCoo = i.c.prototype.me, i.c.prototype.flyTo = i.c.prototype.cb, i.c.prototype.flyToView = i.c.prototype.eb, i.c.prototype.flyToFullView = i.c.prototype.je, i.c.prototype.flyToCoverView = i.c.prototype.he, i.c.prototype.isZoomedOut = i.c.prototype.xe, i.c.prototype.getMinScale = i.c.prototype.re, i.c.prototype.getCoverScale = i.c.prototype.le, i.c.prototype.getFlyPerc = i.c.prototype.ne, i.c.prototype.getCoo = i.c.prototype.N, i.c.prototype.getView = i.c.prototype.Aa, i.c.prototype.getViewCoo = i.c.prototype.Wc, i.c.prototype.getDistance = i.c.prototype.Ka, i.c.prototype.zoom = i.c.prototype.zoom, i.c.prototype.zoomIn = i.c.prototype.Pd, i.c.prototype.zoomOut = i.c.prototype.Qd, i.c.prototype.setCoo = i.c.prototype.V, i.c.prototype.setView = i.c.prototype.Ab, i.c.prototype.setOffset = i.c.prototype.P, i.c.prototype.reset = i.c.prototype.reset, i.c.prototype.setScale = i.c.prototype.W, i.c.prototype.setRotation = i.c.prototype.wd, i.c.prototype.draw = i.c.prototype.C, i.c.prototype.render = i.c.prototype.L, i.c.prototype.pause = i.c.prototype.pause, i.c.prototype.resume = i.c.prototype.pc, i.c.prototype.onresize = i.c.prototype.onresize, i.c.prototype.fullScreenToggle = i.c.prototype.gb, i.c.prototype.getHash = i.c.prototype.oe, i.c.prototype.getViewUri = i.c.prototype.bc, i.c.Viewport = i.c.pa = function(t, e) {
        this.a = t, this.A = e || [0, 0, 1, 1]
    }, i.c.pa.prototype = {
        Gd: function(t) {
            var e = [this.A[0], this.A[1], this.A[2], this.A[3]],
                n = [e[2] - e[0], e[3] - e[1]],
                s = this.a && this.a.u;
            if (s && t) {
                var a = [s[2] - s[0], s[3] - s[1]];
                n[0] = Math.min(n[0], a[0]), n[1] = Math.min(n[1], a[1]), e[1] < s[1] && (e[1] = s[1], e[3] = Math.min(s[3], s[1] + n[1])), e[0] < s[0] && (e[0] = s[0], e[2] = Math.min(s[2], s[0] + n[0])), e[3] > s[3] && (e[3] = s[3], e[1] = Math.max(s[1], s[3] - n[1])), e[2] > s[2] && (e[2] = s[2], e[0] = Math.max(s[0], s[2] - n[0]))
            }
            return s = Math.min(this.a.f.offsetWidth / n[0] / this.a.width, this.a.f.offsetHeight / n[1] / this.a.height), t && (s = Math.min(1, Math.max(this.a.d.G, s))), new i.c.wa(this.a, e[0] + n[0] / 2, e[1] + n[1] / 2, s)
        }
    }, i.c.pa.prototype.toCoo = i.c.pa.prototype.Gd, i.c.Coordinates = i.c.wa = function(t, e, i, n) {
        this.a = t, e instanceof Array && (n = e[2], i = e[1], e = e[0]), this.x = isNaN(e) ? .5 : e, this.y = isNaN(i) ? .5 : i, this.scale = isNaN(n) ? 0 : n
    }, i.c.wa.prototype = {
        Ge: function() {
            return [this.x, this.y, this.scale]
        },
        tc: function(t, e) {
            t = !1 !== t;
            var n = this.a && this.a.u || [0, 0, 1, 1],
                s = !1 !== e && Math.max(this.a.d.G, Math.min(1, this.scale)) || this.scale,
                a = [this.a.width * this.x, this.a.height * this.y],
                s = [this.a.f.offsetWidth / s / 2, this.a.f.offsetHeight / s / 2],
                a = [(a[0] - s[0]) / this.a.width, (a[1] - s[1]) / this.a.height, (a[0] + s[0]) / this.a.width, (a[1] + s[1]) / this.a.height];
            if (t) {
                var s = a[2] - a[0],
                    o = a[3] - a[1];
                a[0] < n[0] && (a[0] = n[0], a[2] = Math.min(n[2], n[0] + s)), a[1] < n[1] && (a[1] = n[1], a[3] = Math.min(n[3], n[1] + o)), a[3] > n[3] && (a[3] = n[3], a[1] = Math.max(n[1], n[3] - o)), a[2] > n[2] && (a[2] = n[2], a[0] = Math.max(n[0], n[2] - s))
            }
            return new i.c.pa(this.a, a)
        }
    }, i.c.wa.prototype.toView = i.c.wa.prototype.tc, i.c.wc = function() {
        this.paused = this.va = !1, this.S = [], this.step = this.step.bind(this), this.ha = null, this.X = 0
    }, i.c.wc.prototype = {
        step: function(t) {
            this.X || (this.X = t);
            for (var e, i, n, s = 0; s < this.S.length; s++) {
                i = this.S[s], n = Math.min(1, (i.md += t - this.X) / i.de), i.Rc && (n = i.Rc(n));
                for (e in i.target) i.ic[e] = i.Fe[e] * (1 - n) + i.target[e] * n;
                1 <= n && (i.mc && i.mc(i), this.S.splice(s--, 1)), i.Bd && i.Bd(n, i.ic)
            }
            this.X = t, this.S.length ? this.ha = requestAnimationFrame(this.step) : this.stop()
        },
        start: function() {
            this.va || (this.va = !0, this.ha = requestAnimationFrame(this.step))
        },
        stop: function() {
            if (this.va) {
                for (this.paused = this.va = !1, cancelAnimationFrame(this.ha); this.S.length;) this.S.shift();
                this.X = 0
            }
        },
        pause: function() {
            !this.paused && this.va && (this.paused = !0, cancelAnimationFrame(this.ha))
        },
        pc: function() {
            this.paused && (this.paused = !1, this.X = performance.now(), this.ha = requestAnimationFrame(this.step))
        },
        remove: function(t) {
            for (var e = 0; e < this.S.length; e++)
                if (this.S[e].ic == t) {
                    this.S.splice(e, 1);
                    break
                }
        },
        add: function(t, e, i, n, s) {
            if (this.remove(t), 0 >= i) {
                for (var a in e) t[a] = e[a];
                return n instanceof Function && n(1, t), new Promise(function(t) {
                    t()
                })
            }
            var o = {},
                r = {};
            for (a in e) o[a] = t[a], r[a] = e[a] - t[a];
            this.S.length || (this.X = 0);
            var h = {
                ic: t,
                target: e,
                Rc: s,
                q: r,
                Fe: o,
                de: isNaN(i) && 500 || i,
                Bd: n,
                md: 0,
                mc: null
            };
            return h.ud = new Promise(function(t) {
                h.mc = t
            }.bind(h)), h.ud.F = h, this.S.push(h), this.va || this.start(), h.ud
        }
    };
    var g = t.Beziers = {
        ab: s(.42, .58, 1),
        ee: s(.42, 1, 1),
        fe: s(0, .58, 1),
        Pd: s(1, .84, .92),
        Qd: s(0, .4, 1)
    };
    g.easeInOut = g.ab, g.easeIn = g.ee, g.easeOut = g.fe, i.c.o = function(i) {
        this.d = i, this.a = i.a, this.l = i.a.f, this.ta = this.U = this.kb = !1, this.Pc = i.a.data.dragElasticity || 1, this.hc = [], this.nb = !("onmousewheel" in e.body), this.Zc = "ontouchstart" in t || "onpointerdown" in t, this.b = {
            e: {
                xb: [0, 0],
                K: null,
                ja: null,
                rotation: 0,
                va: null,
                Ue: [0, 0],
                bb: 0,
                m: {
                    start: ["mousedown", "touchstart"],
                    move: ["mousemove", "touchmove"],
                    stop: ["mouseup", "touchend"]
                },
                g: {
                    Fd: 325,
                    sc: null,
                    timestamp: null,
                    q: null,
                    F: !1,
                    scroll: [0, 0],
                    x: {
                        offset: 0,
                        O: 0,
                        frame: 0,
                        R: 0,
                        target: 0,
                        q: 0
                    },
                    y: {
                        offset: 0,
                        O: 0,
                        frame: 0,
                        R: 0,
                        target: 0,
                        q: 0
                    }
                }
            },
            n: {
                K: null,
                ja: null,
                yd: 0,
                zd: 0,
                Jc: [0, 0],
                Fa: [0, 0],
                wb: [0, 0],
                Ub: 0,
                Ee: 0
            },
            B: {
                K: null,
                ja: null,
                q: null,
                $c: !1
            },
            Mc: {
                gd: 0
            },
            state: {
                $d: location.pathname.replace(/\/_?\d+-_?\d+-_?\d+-_?\d+$/, ""),
                Nd: null,
                timeout: null
            }
        }, this.ac = this.ac.bind(this), this.Xa = this.Xa.bind(this), this.$a = this.$a.bind(this), this.Za = this.Za.bind(this), this.Qb = this.Qb.bind(this), this.Ia = this.Ia.bind(this), this.vb = this.vb.bind(this), this.ub = this.ub.bind(this), this.lc = this.lc.bind(this), this.Qa = this.Qa.bind(this), this.B = this.B.bind(this), this.Fb = this.Fb.bind(this), this.Ja = this.Ja.bind(this), this.ob = this.ob.bind(this), this.zb = this.zb.bind(this), this.rc = this.rc.bind(this), this.Sb = this.Sb.bind(this)
    }, i.c.o.prototype = {
        Zd: function(t) {
            this.hc.push(t)
        },
        Xb: function() {
            if (navigator.browser.mobile && (this.Dc = performance.now(), !(this.Dc - 500 < this.X))) {
                this.X = this.Dc;
                for (var t = 0; t < this.hc.length; t++) this.hc[t]({
                    detail: this.d.Y
                })
            }
        },
        stop: function() {
            cancelAnimationFrame(this.b.e.g.K), cancelAnimationFrame(this.b.e.K), cancelAnimationFrame(this.b.n.K), cancelAnimationFrame(this.b.B.K)
        },
        ra: function() {
            this.kb || (this.kb = !0, !1 !== this.a.data.hookDrag && this.ad(), !1 !== this.a.data.hookScroll && this.cd(), this.a.data.hookKeys && this.bd(), navigator.browser.mobile ? this.l.addEventListener("touchstart", this.Sb) : this.l.addEventListener("dblclick", this.Ja), this.d.sa && this.d.sa.jb(), this.a.Hd && this.a.k.addEventListener("move", this.zb), this.l.classList.add("hooked"))
        },
        Ga: function() {
            this.kb && (this.kb = !1, this.Id(), this.Ld(), this.l.removeEventListener("dblclick", this.Ja), this.a.data.hookKeys && this.Kd(), this.d.sa && this.d.sa.Jd(), this.a.Hd && this.a.k.removeEventListener("move", this.zb), this.l.classList.remove("hooked"))
        },
        cd: function() {
            this.l.addEventListener(this.nb ? "DOMMouseScroll" : "mousewheel", this.B)
        },
        Ld: function() {
            this.l.removeEventListener(this.nb ? "DOMMouseScroll" : "mousewheel", this.B)
        },
        ad: function() {
            for (var t in this.b.e.m.start) this.l.addEventListener(this.b.e.m.start[t], this.$a);
            this.Zc && (this.l.addEventListener("touchstart", this.vb), navigator.i.ie && this.l.addEventListener("touchend", this.Wd = function() {}))
        },
        Id: function() {
            for (var t in this.b.e.m.start) this.l.removeEventListener(this.b.e.m.start[t], this.$a);
            this.Zc && (this.l.removeEventListener("touchstart", this.vb), navigator.i.ie && this.l.addEventListener("touchend", this.Wd))
        },
        bd: function() {
            e.addEventListener("keydown", this.ob)
        },
        Kd: function() {
            e.removeEventListener("keydown", this.ob)
        },
        $b: function(t) {
            if (t.touches.length) return t.touches[0]
        },
        $a: function(t) {
            if (("mousedown" != t.type || 1 == t.which) && this.d.j != this.d.G) {
                if (this.U) return t.touches && 2 == t.touches.length && this.Ia(t);
                this.U = !0, this.b.e.rotation = this.d.rotation, this.d.stop();
                for (var e in this.b.e.m.move) addEventListener(this.b.e.m.move[e], this.Za);
                for (e in this.b.e.m.stop) addEventListener(this.b.e.m.stop[e], this.Ia);
                this.l.classList.add("dragging"), t.touches && (t = this.$b(t)), this.b.e.xb = [t.clientX, t.clientY], this.b.e.g.y.O = this.b.e.g.y.R = 0, this.b.e.g.y.frame = this.b.e.g.y.offset, this.b.e.g.x.O = this.b.e.g.x.R = 0, this.b.e.g.x.frame = this.b.e.g.x.offset, this.b.e.g.timestamp = performance.now(), clearInterval(this.b.e.g.sc), this.b.e.g.sc = setInterval(this.ac, 50)
            }
        },
        Za: function(t) {
            cancelAnimationFrame(this.b.e.K), t.stopPropagation(), t.preventDefault(), t.touches && (t = this.$b(t)), this.b.e.ja = t, this.b.e.K = requestAnimationFrame(this.Qb), this.Xb()
        },
        Qb: function(t) {
            t = this.b.e.ja;
            var e = this.b.e.xb[0] - t.clientX,
                i = this.b.e.xb[1] - t.clientY,
                n = this.d.rotation * Math.PI / 180,
                s = e,
                e = i * Math.sin(n) + e * Math.cos(n),
                i = i * Math.cos(n) - s * Math.sin(n);
            this.d.P(e, i), this.d.L(), this.b.e.xb = [t.clientX, t.clientY], this.b.e.g.x.q = e, (2 < this.b.e.g.x.q || -2 > this.b.e.g.x.q) && (this.b.e.g.x.offset += this.b.e.g.x.q), this.b.e.g.y.q = i, (2 < this.b.e.g.y.q || -2 > this.b.e.g.y.q) && (this.b.e.g.y.offset += this.b.e.g.y.q)
        },
        Ia: function(t) {
            if (this.U) {
                this.U = !1, setTimeout(function() {}.bind(this));
                for (var e in this.b.e.m.move) removeEventListener(this.b.e.m.move[e], this.Za);
                for (e in this.b.e.m.stop) removeEventListener(this.b.e.m.stop[e], this.Ia);
                this.l.classList.remove("dragging"), t.touches && (t = this.$b(t)), clearInterval(this.b.e.g.sc), (10 < this.b.e.g.y.O || -10 > this.b.e.g.y.O || 10 < this.b.e.g.x.O || -10 > this.b.e.g.x.O) && (this.b.e.g.x.R = .8 * this.b.e.g.x.O, this.b.e.g.x.target = Math.round(this.b.e.g.x.offset + this.b.e.g.x.R), this.b.e.g.y.R = .8 * this.b.e.g.y.O, this.b.e.g.y.target = Math.round(this.b.e.g.y.offset + this.b.e.g.y.R), this.b.e.g.timestamp = performance.now(), this.b.e.g.K = requestAnimationFrame(this.Xa))
            }
        },
        ac: function() {
            this.b.e.g.q = performance.now() - this.b.e.g.timestamp + 1, this.b.e.g.timestamp = performance.now(), this.b.e.g.x.O = .8 * this.Pc * (1e3 * (this.b.e.g.x.offset - this.b.e.g.x.frame) / this.b.e.g.q) + .2 * this.b.e.g.x.O, this.b.e.g.y.O = .8 * this.Pc * (1e3 * (this.b.e.g.y.offset - this.b.e.g.y.frame) / this.b.e.g.q) + .2 * this.b.e.g.y.O, this.b.e.g.x.frame = this.b.e.g.x.offset, this.b.e.g.y.frame = this.b.e.g.y.offset
        },
        scroll: function(t, e) {
            this.d.P(t - this.b.e.g.x.offset, e - this.b.e.g.y.offset), this.d.L(), this.b.e.g.x.offset = t, this.b.e.g.y.offset = e
        },
        Xa: function() {
            if (this.b.e.g.F = !1, this.b.e.g.scroll = [this.b.e.g.x.target, this.b.e.g.y.target], this.b.e.g.Oc = performance.now() - this.b.e.g.timestamp, this.b.e.g.x.R) {
                var t = -this.b.e.g.x.R * Math.exp(-this.b.e.g.Oc / this.b.e.g.Fd);
                (.5 < t || -.5 > t) && (this.b.e.g.scroll[0] = this.b.e.g.x.target + t, this.b.e.g.F = !0)
            }
            this.b.e.g.y.R && (.5 < (t = -this.b.e.g.y.R * Math.exp(-this.b.e.g.Oc / this.b.e.g.Fd)) || -.5 > t) && (this.b.e.g.scroll[1] = this.b.e.g.y.target + t, this.b.e.g.F = !0), this.scroll(this.b.e.g.scroll[0], this.b.e.g.scroll[1]), this.b.e.g.F && (this.b.e.g.K = requestAnimationFrame(this.Xa))
        },
        Ka: function(t) {
            if (2 == t.touches.length) return Math.yb(t.touches[0].clientX - t.touches[1].clientX, t.touches[0].clientY - t.touches[1].clientY) / Math.yb(this.l.offsetWidth, this.l.offsetHeight)
        },
        Vc: function(t) {
            return this.b.n.Fa[0] = Math.min(t.touches[0].clientX, t.touches[1].clientX), this.b.n.Fa[1] = Math.min(t.touches[0].clientY, t.touches[1].clientY), this.b.n.wb[0] = Math.max(t.touches[0].clientX, t.touches[1].clientX), this.b.n.wb[1] = Math.max(t.touches[0].clientY, t.touches[1].clientY), [this.b.n.Fa[0] + (this.b.n.wb[0] - this.b.n.Fa[0]) / 2, this.b.n.Fa[1] + (this.b.n.wb[1] - this.b.n.Fa[1]) / 2]
        },
        vb: function(t) {
            if (this.ta || 2 != t.touches.length) return this.Qa(t);
            t.stopPropagation(), t.preventDefault(), this.d.stop(), this.ta = !0, this.b.n.yd = this.Ka(t), this.b.n.zd = this.d.j, this.b.n.Jc = this.d.N(this.Vc(t), !0), this.l.addEventListener("touchmove", this.ub, !0), this.l.addEventListener("touchend", this.Qa, !0), this.l.classList.add("pinching")
        },
        ub: function(t) {
            cancelAnimationFrame(this.b.n.K), t.stopPropagation(), t.preventDefault(), this.b.n.ja = t, this.b.n.K = requestAnimationFrame(this.lc), this.Xb()
        },
        lc: function(t) {
            if (t = this.b.n.ja, this.b.n.Ub = this.Ka(t), this.b.n.Ub) {
                this.d.W(this.b.n.zd * (this.b.n.Ee = this.b.n.Ub / this.b.n.yd));
                var e = this.d.hb(this.b.n.Jc, !0),
                    i = {
                        x: e[0],
                        y: e[1]
                    };
                t = this.Vc(t);
                var n = {
                    x: t[0],
                    y: t[1]
                };
                this.d.rotation && (i = this.d.La(e[0], e[1]), n = this.d.La(t[0], t[1])), this.d.P(i.x - n.x, i.y - n.y), this.d.L()
            }
        },
        Qa: function(t) {
            this.ta && (this.ta = !1, t.preventDefault(), t.stopPropagation(), this.l.removeEventListener("touchmove", this.ub, !0), this.l.removeEventListener("touchend", this.Qa, !0), this.l.classList.remove("pinching"))
        },
        B: function(t) {
            this.U || this.ta || (this.b.B.q = this.nb ? 30 * -t.detail : void 0 !== t.be ? -t.be : t.wheelDelta, this.b.B.q *= this.d.a.vd, navigator.i.OSX && (this.b.B.q *= -1), !this.b.B.$c && 0 > this.b.B.q && this.d.G == this.d.j || (t.preventDefault(), this.b.B.ja = t, this.d.stop(), navigator.browser.ie9 ? this.Fb() : (cancelAnimationFrame(this.b.B.K), this.b.B.K = requestAnimationFrame(this.Fb))))
        },
        Fb: function(t) {
            t = this.b.B.ja, this.b.B.$c = !0;
            var e = !(this.d.v.xa && this.nb),
                i = this.d.N([t.clientX, t.clientY], e);
            this.d.zoom(this.b.B.q);
            var e = this.d.hb(i, e),
                i = {
                    x: e[0],
                    y: e[1]
                },
                n = {
                    x: t.clientX,
                    y: t.clientY
                };
            this.d.rotation && (i = this.d.La(e[0], e[1]), n = Math.rotate(t.clientX, t.clientY, innerWidth, innerHeight, this.d.rotation)), this.d.P(i.x - n.x, i.y - n.y), navigator.browser.ie9 ? this.d.C() : this.d.L()
        },
        Sb: function(t) {
            if (1 == t.touches.length && 250 > performance.now() - this.b.Mc.gd) {
                t.stopPropagation(), t.preventDefault();
                var e = t.target.getBoundingClientRect();
                this.Ja({
                    clientX: t.touches[0].clientX,
                    clientY: t.touches[0].clientY,
                    offsetX: t.touches[0].pageX - e.left,
                    offsetY: t.touches[0].pageY - e.top
                })
            }
            this.b.Mc.gd = performance.now()
        },
        Ja: function(t) {
            if (this.d.stop(), this.d.j + 1 / Math.max(this.d.a.width, this.d.a.height) >= this.d.a.fa) this.a.ce && this.d.cb(.5, .5, this.d.G, 500);
            else {
                var e = new i.c.wa(this.d.a, this.d.N([t.clientX, t.clientY], !0));
                e.scale += (2.5 * e.scale - e.scale) * this.d.a.vd;
                var n = [this.a.f.offsetWidth, this.a.f.offsetHeight];
                e.x -= (t.offsetX / n[0] * 2 - 1) / 2 * n[0] / e.scale / this.a.width, e.y -= (t.offsetY / n[1] * 2 - 1) / 2 * n[1] / e.scale / this.a.height, this.d.eb(e.tc(void 0, 1 == this.d.a.fa), 500, void 0, void 0, !0)
            }
        },
        ob: function(t) {
            if (!this.U && !this.ta) {
                switch (t.keyCode) {
                    case 37:
                        this.d.P(-this.l.offsetWidth / 2, 0);
                        break;
                    case 39:
                        this.d.P(this.l.offsetWidth / 2, 0);
                        break;
                    case 38:
                        this.d.P(0, -this.l.offsetHeight / 2);
                        break;
                    case 40:
                        this.d.P(0, this.l.offsetHeight / 2);
                        break;
                    case 32:
                        this.d.zoom(t.shiftKey && -120 || 120, !0);
                        break;
                    case 187:
                    case 61:
                        t.shiftKey && this.d.zoom(120, !0);
                        break;
                    case 189:
                    case 173:
                        this.d.zoom(-120, !0);
                        break;
                    default:
                        return
                }
                this.d.stop(), this.d.L()
            }
        },
        zb: function() {
            clearTimeout(this.b.state.timeout), this.b.state.timeout = setTimeout(this.rc, 100)
        },
        rc: function() {
            this.b.state.Nd = this.d.bc(), history.replaceState(null, null, this.b.state.$d + ("0-0-1-1" != this.b.state.Nd && "/" + this.d.bc() || ""))
        }
    }, i.c.o.prototype.hook = i.c.o.prototype.ra, i.c.o.prototype.unhook = i.c.o.prototype.Ga, i.c.o.prototype.hookScroll = i.c.o.prototype.cd, i.c.o.prototype.unhookScroll = i.c.o.prototype.Ld, i.c.o.prototype.hookDrag = i.c.o.prototype.ad, i.c.o.prototype.unhookDrag = i.c.o.prototype.Id, i.c.o.prototype.hookKeys = i.c.o.prototype.bd, i.c.o.prototype.unhookKeys = i.c.o.prototype.Kd, i.c.o.prototype.addMoveListener = i.c.o.prototype.Zd, i.c.o.prototype.fireMobileEvents = i.c.o.prototype.Xb, i.c.Hb = function(t) {
        this.d = t, this.Ba = !1, this.width = 200, this.height = Math.round(this.width / t.a.Mb), 160 < this.height && (this.width = Math.round(160 * t.a.Mb), this.height = 160), this.Z = null, this.Bb = !(t.a.vc && !t.a.data.thumbSrc), this.Oa = !1, this.m = ["mousemove", "mouseup", "touchmove", "touchend"], this.timeout = null, this.Oa = !1, this.el = this.s = this.h = this.Z = null, this.sd = this.rd = -1, this.show()
    }, i.c.Hb.prototype = {
        ka: function() {
            this.Ba || (this.Ba = !0, this.Na = this.Na.bind(this), this.ma = this.ma.bind(this), this.C = this.C.bind(this), this.onerror = this.onerror.bind(this), this.Pa = this.Pa.bind(this), this.sb = this.sb.bind(this), this.el = this.s = e.createElement("canvas"), this.s.className = "minimap micrio-hide", this.s.style.width = (this.s.width = this.width) + "px", this.s.style.height = (this.s.height = this.height) + "px", this.h = this.s.getContext("2d"), this.h.lineWidth = 1, this.h.strokeStyle = "white", this.h.translate(.5, .5), this.Bb && (this.Z = new Image, this.Z.onload = this.C, this.Z.onerror = this.onerror, this.Z.src = this.d.a.Cd))
        },
        onerror: function() {
            this.Bb = !1
        },
        show: function() {
            this.ka(), this.d.a.f.appendChild(this.s), this.ra()
        },
        Na: function() {
            this.s.classList.add("micrio-hide")
        },
        remove: function() {
            this.s.parentNode.removeChild(this.s), this.Ga(), this.Jd()
        },
        ra: function() {
            this.d.a.k.addEventListener("move", this.C)
        },
        Ga: function() {
            this.d.a.k.removeEventListener("move", this.C)
        },
        jb: function() {
            this.s.addEventListener("mousedown", this.ma), this.s.addEventListener("touchstart", this.ma), this.d.a.k.addEventListener("mousemove", this.Pa), this.s.addEventListener("mousewheel", this.sb)
        },
        Jd: function() {
            this.s.removeEventListener("mousedown", this.ma), this.s.removeEventListener("touchstart", this.ma), this.d.a.k.removeEventListener("mousemove", this.Pa), this.s.removeEventListener("mousewheel", this.sb)
        },
        ma: function(t) {
            if (("mousedown" != t.type || 1 == t.which) && ("mousemove" != t.type && "touchmove" != t.type || this.U)) {
                if ("mouseup" == t.type || "touchend" == t.type) {
                    for (var e = 0; e < this.m.length; e++) removeEventListener(this.m[e], this.ma);
                    return this.U = !1
                }
                if ("mousedown" == t.type || "touchstart" == t.type)
                    for (this.U = !0, this.d.stop(), e = 0; e < this.m.length; e++) addEventListener(this.m[e], this.ma);
                t.stopPropagation(), t.preventDefault(), e = this.s.getClientRects()[0], t = Math.rotate(Math.min(e.width, Math.max(0, (t.touches && t.touches[0] || t).clientX - e.left)), Math.min(e.height, Math.max(0, (t.touches && t.touches[0] || t).clientY - e.top)), this.width, this.height, this.d.rotation), this.d.V([t.x / this.width, t.y / this.height]), this.d.C()
            }
        },
        C: function() {
            this.d.G == this.d.j ? (this.Oa || this.s.classList.add("micrio-hide"), this.Oa = !0) : this.Oa = !1, this.Pa();
            var t = this.d.p;
            if (this.d.a.u) var e = this.d.a.u,
                i = [e[2] - e[0], e[3] - e[1]],
                t = [(t[0] - e[0]) / i[0], (t[1] - e[1]) / i[1], 1 - (e[2] - t[2]) / i[0], 1 - (e[3] - t[3]) / i[1]];
            this.h.clearRect(-.5, -.5, this.width, this.height), this.h.globalCompositeOperation = "source-over", this.Bb && this.Z.width && this.h.drawImage(this.Z, -.5, -.5, this.width, this.height), this.h.fillStyle = "rgba(0,0,0,.5)", this.h.fillRect(0, 0, this.width, this.height), this.h.globalAlpha = 1, this.h.globalCompositeOperation = "destination-out";
            var e = this.d.Ma(t[2] - t[0], t[3] - t[1]),
                i = this.d.Ma(this.width, this.height),
                n = (t[0] + (t[2] - t[0]) / 2) * this.width,
                t = (t[1] + (t[3] - t[1]) / 2) * this.height;
            this.h.translate(n, t), this.h.rotate(-this.d.rotation * Math.PI / 180), this.h.beginPath(), this.h.fillStyle = "black", this.h.rect(-Math.round(e.width * i.width / 2), -Math.round(e.height * i.height / 2), Math.round(e.width * i.width), Math.round(e.height * i.height)), this.h.fill(), this.h.rotate(this.d.rotation * Math.PI / 180), this.h.translate(-n, -t), this.d.rotation && (this.s.style.transform = "rotate3d(0,0,1," + this.d.rotation + "deg)"), this.h.globalCompositeOperation = "source-over", this.h.stroke(), this.h.globalCompositeOperation = "destination-over", this.Bb && this.Z.width && this.h.drawImage(this.Z, -.5, -.5, this.width, this.height)
        },
        Pa: function(t) {
            this.Oa || t && t.clientX == this.rd && t.clientY == this.sd || (t && (this.rd = t.clientX, this.sd = t.clientY), this.s.classList.remove("micrio-hide"), clearTimeout(this.timeout), this.timeout = setTimeout(this.Na, 2e3))
        },
        sb: function(t) {
            t.stopPropagation(), t.preventDefault(), this.d.zoom(navigator.browser.firefox ? 30 * -t.detail : t.wheelDelta, !0), this.d.L()
        }
    }, i.HTTP = i.H = {
        Ob: {},
        Uc: function(t, e, n) {
            if (i.H.Ob[t]) return setTimeout(function() {
                e(i.H.Ob[t])
            });
            i.H.get(t + "?" + Math.random(), function(n) {
                e(i.H.Ob[t] = n)
            }, n)
        },
        get: function(t, e, n, s, a, o) {
            return i.H.Lb(t, e, n, {
                data: s,
                headers: a,
                tryOldMethod: o
            })
        },
        Se: function(t, e, n, s, a) {
            return i.H.Lb(t, e, n, {
                data: s,
                type: "POST",
                sendAs: "form",
                headers: a
            })
        },
        put: function(t, e, n, s, a) {
            return i.H.Lb(t, e, n, {
                type: "PUT",
                sendAs: "blob",
                data: s,
                headers: a
            })
        },
        Lb: function(t, e, i, n) {
            n = n || {};
            var s = [200, 201],
                a = navigator.browser.ie9,
                o = new(a ? XDomainRequest : XMLHttpRequest);
            if (o.onload = function(t) {
                    if (a && o.responseText) e(JSON.parse(o.responseText));
                    else if (0 <= s.indexOf(t.target.status) && "load" == t.type)
                        if (o.response) {
                            if (200 == t.target.status)
                                if (n.tryOldMethod) try {
                                    e.bind(this)(JSON.parse(o.response))
                                } catch (t) {
                                    console.log("errrrr", t);
                                    var r = o.responseText.split("").filter(function(t, e) {
                                        return !(e % 2)
                                    }).join("").split(",");
                                    e && r && e.bind(this)(r)
                                } else e.bind(this)(JSON.parse(o.response))
                        } else e.bind(this)(r);
                    else i && i()
                }.bind(this), o.onerror = i, n.type = n.type || "GET", "GET" == n.type && n.data) {
                var r, h = [];
                for (r in n.data) h.push(encodeURIComponent(r) + "=" + encodeURIComponent(n.data[r]));
                t += "?" + h.join("&")
            }
            if (o.open(n.type, t, !0), n.headers)
                for (r in n.headers) o.setRequestHeader(r, n.headers[r]);
            if (t = null, "form" == n.sendAs && "POST" == n.type)
                for (r in t = new FormData, n.data) t.append(r, n.data[r]);
            else "blob" == n.sendAs && (o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), t = n.data);
            o.send(t)
        },
        se: function(t, e) {
            i.H.get(t.data.path + t.id || "https://www.rijksmuseum.nl/api/nl/collection/" + t.id + "/tiles?format=jsonp&key=qtg0qvl8", function(i) {
                i.levels.sort(function(t, e) {
                    return t.width < e.width ? 1 : -1
                });
                for (var n = 0; n < i.levels.length; n++) i.levels[n].tiles.sort(function(t, e) {
                    return t.y == e.y ? t.x < e.x ? -1 : 1 : t.y < e.y ? -1 : 1
                });
                t.aa = i, t.width = i.levels[0].width, t.height = i.levels[0].height, t.data.thumbSrc || (t.data.thumbSrc = i.levels[i.levels.length - 1].tiles[0].url), e(i, t.id)
            })
        }
    }, i.H.get = i.H.get, i.xc = function() {
        this.qa = [], this.images = [], this.Cc = null, this.ka(), this.nc()
    }, i.xc.prototype = {
        ka: function() {
            this.qa = e.querySelectorAll('canvas[data-type="micrio"], micrio[id]'), this.Ya = this.Ya.bind(this), this.Ya(), this.Cc = setInterval(this.Ya, navigator.i.Qe && 750 || 250)
        },
        getData: function(t, e) {
            return t.getAttribute(e) || t.dataset && t.dataset[e] || t.getAttribute("data-" + e)
        },
        nc: function() {
            for (var t = 0; t < this.qa.length; t++) "true" != this.getData(this.qa[t], "lazyload") && this.print(this.qa[t])
        },
        print: function(t) {
            if (!t.td) {
                var e = {
                    id: this.getData(t, "id") || t.id,
                    path: this.getData(t, "path"),
                    lang: this.getData(t, "lang"),
                    width: Number(this.getData(t, "width")) || null,
                    height: Number(this.getData(t, "height")) || null,
                    isThumb: "true" == this.getData(t, "thumb"),
                    hookEvents: "false" != this.getData(t, "events"),
                    autoInit: "false" != this.getData(t, "autoinit"),
                    miniMap: "true" == this.getData(t, "minimap"),
                    initType: "true" == this.getData(t, "coverlimit") || this.getData(t, "inittype"),
                    type: this.getData(t, "type") || t.getAttribute("type"),
                    fullscreen: "true" == this.getData(t, "fullscreen"),
                    skipMeta: "true" == this.getData(t, "skipmeta"),
                    zoomLimit: "false" === this.getData(t, "zoomlimit") && 1 / 0 || this.getData(t, "zoomlimit"),
                    startCoo: this.getData(t, "focus") && this.getData(t, "focus").split(",").map(function(t) {
                        return Number(t)
                    }) || null,
                    view: this.getData(t, "view") && this.getData(t, "view").split(",").map(function(t) {
                        return Number(t)
                    }) || null,
                    controlType: this.getData(t, "controls"),
                    limitToCoverScale: "true" == this.getData(t, "coverlimit"),
                    markerType: this.getData(t, "marker-type")
                };
                "CANVAS" == t.tagName ? e.canvas = t : e.container = t, this.images.push(new i(e)), t.td = !0
            }
        },
        Ya: function() {
            for (var t = 0, e = null; t < this.qa.length; t++)
                if (e = this.qa[t], !e.td && "true" == this.getData(e, "lazyload")) {
                    var i = e.parentNode.getClientRects()[0];
                    i.top < innerHeight && 0 < i.bottom && this.print(e)
                }
            this.qa.length == this.images.length && clearInterval(this.Cc)
        }
    }, addEventListener("DOMContentLoaded", function() {
        var t = new i.xc;
        addEventListener("DOMNodeInserted", function(e) {
            if (e.target)
                if ("MICRIO" == e.target.tagName) t.print(e.target);
                else if (e.target.getElementsByTagName) {
                e = e.target.getElementsByTagName("micrio");
                for (var i = 0; i < e.length; i++) t.print(e[i])
            }
        })
    })
}(window, document),
function(t, e, i) {
    function n(t) {
        this._ = t, this.currentTarget = t.currentTarget
    }
    if (!(!(i = !!t.pointerEnabled) && !t.msPointerEnabled || "ontouchend" in e)) {
        var s = i ? "setPointerCapture" : "msSetPointerCapture",
            a = i ? "releasePointerCapture" : "msReleasePointerCapture";
        t = Element.prototype;
        var o = Object.defineProperties,
            r = Object.defineProperty,
            h = function(t) {
                var e = t.toLowerCase();
                return t = "MS" + t, $[t] = $[e], i ? e : t
            },
            l = function(t) {
                return {
                    value: function() {
                        b[t].call(this), this._[t]()
                    }
                }
            },
            c = function(t) {
                var e = "_on" + t;
                return {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        return this[e] || null
                    },
                    set: function(i) {
                        this[e] && this.removeEventListener(t, this[e]), (this[e] = i) && this.addEventListener(t, i)
                    }
                }
            },
            u = function(t, e) {
                var i = t[e];
                r(t, e, {
                    configurable: !0,
                    value: function(t, e, n) {
                        t in k && i.call(this, k[t], x, n), i.call(this, t, e, n)
                    }
                })
            },
            d = function(t) {
                return {
                    get: function() {
                        return this._[t]
                    }
                }
            },
            p = function(t) {
                return function(e) {
                    var i = e.pointerId,
                        n = v[i],
                        s = e.currentTarget;
                    delete v[i], a in s && s[a](e.pointerId), f(t, e, n), delete y[i]
                }
            },
            f = function(t, i, n) {
                var s = e.createEvent("Event");
                s.initEvent(t, !0, !0), m.value = i, w.currentTarget.value = n && n.currentTarget, o(s, w), n && n.currentTarget.dispatchEvent(s)
            },
            g = function(t, e) {
                function i(t) {
                    return e[t]
                }
                return function() {
                    return m.value = Object.keys(e).map(i), r(this, t, m)[t]
                }
            },
            m = {
                value: null
            },
            v = Object.create(null),
            y = Object.create(null),
            b = e.createEvent("Event"),
            w = {
                _: m,
                touches: {
                    configurable: !0,
                    get: g("touches", v)
                },
                changedTouches: {
                    configurable: !0,
                    get: g("changedTouches", y)
                },
                currentTarget: {
                    value: null
                },
                relatedTarget: d("relatedTarget"),
                target: d("target"),
                altKey: d("altKey"),
                metaKey: d("metaKey"),
                ctrlKey: d("ctrlKey"),
                shiftKey: d("shiftKey"),
                preventDefault: l("preventDefault"),
                stopPropagation: l("stopPropagation"),
                stopImmediatePropagation: l("stopImmediatePropagation")
            },
            k = Object.create(null),
            x = function(t) {
                var e;
                t: {
                    switch (t.pointerType) {
                        case "mouse":
                        case t.MSPOINTER_TYPE_MOUSE:
                            e = "mouse";
                            break t
                    }
                    e = "touch"
                }
                "touch" === e && $[t.type](t)
            },
            $ = {
                pointerdown: function(t) {
                    var e = new n(t),
                        i = t.pointerId,
                        a = t.currentTarget;
                    y[i] = v[i] = e, s in a && a[s](t.pointerId), f("touchstart", t, e)
                },
                pointermove: function(t) {
                    var e = t.pointerId,
                        i = v[e];
                    i && (i._ = t, f("touchmove", t, i), y[e]._ = t)
                },
                pointerup: p("touchend"),
                pointercancel: p("touchcancel")
            },
            l = {
                ontouchstart: c("touchstart"),
                ontouchmove: c("touchmove"),
                ontouchend: c("touchend"),
                ontouchcancel: c("touchcancel")
            };
        o(n.prototype, {
            identifier: d("pointerId"),
            target: d("target"),
            screenX: d("screenX"),
            screenY: d("screenY"),
            clientX: d("clientX"),
            clientY: d("clientY"),
            pageX: d("pageX"),
            pageY: d("pageY")
        }), k.touchstart = h("PointerDown"), k.touchmove = h("PointerMove"), k.touchend = h("PointerUp"), k.touchcancel = h("PointerCancel"), u(e, "addEventListener"), u(e, "removeEventListener"), u(t, "addEventListener"), u(t, "removeEventListener"), o(e, l), o(t, l)
    }
}(navigator, document),
function(t) {
    function e(t, e) {
        return function() {
            t.apply(e, arguments)
        }
    }

    function i(t) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = null, this._value = null, this._deferreds = [], h(t, e(s, this), e(a, this))
    }

    function n(t) {
        var e = this;
        return null === this._state ? void this._deferreds.push(t) : void l(function() {
            var i = e._state ? t.onFulfilled : t.onRejected;
            if (null === i) return void(e._state ? t.resolve : t.reject)(e._value);
            var n;
            try {
                n = i(e._value)
            } catch (e) {
                return void t.reject(e)
            }
            t.resolve(n)
        })
    }

    function s(t) {
        try {
            if (t === this) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var i = t.then;
                if ("function" == typeof i) return void h(e(i, t), e(s, this), e(a, this))
            }
            this._state = !0, this._value = t, o.call(this)
        } catch (t) {
            a.call(this, t)
        }
    }

    function a(t) {
        this._state = !1, this._value = t, o.call(this)
    }

    function o() {
        for (var t = 0, e = this._deferreds.length; e > t; t++) n.call(this, this._deferreds[t]);
        this._deferreds = null
    }

    function r(t, e, i, n) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.resolve = i, this.reject = n
    }

    function h(t, e, i) {
        var n = !1;
        try {
            t(function(t) {
                n || (n = !0, e(t))
            }, function(t) {
                n || (n = !0, i(t))
            })
        } catch (t) {
            if (n) return;
            n = !0, i(t)
        }
    }
    var l = i.immediateFn || "function" == typeof setImmediate && setImmediate || function(t) {
            setTimeout(t, 1)
        },
        c = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        };
    i.prototype.catch = function(t) {
        return this.then(null, t)
    }, i.prototype.then = function(t, e) {
        var s = this;
        return new i(function(i, a) {
            n.call(s, new r(t, e, i, a))
        })
    }, i.all = function() {
        var t = Array.prototype.slice.call(1 === arguments.length && c(arguments[0]) ? arguments[0] : arguments);
        return new i(function(e, i) {
            function n(a, o) {
                try {
                    if (o && ("object" == typeof o || "function" == typeof o)) {
                        var r = o.then;
                        if ("function" == typeof r) return void r.call(o, function(t) {
                            n(a, t)
                        }, i)
                    }
                    t[a] = o, 0 == --s && e(t)
                } catch (t) {
                    i(t)
                }
            }
            if (0 === t.length) return e([]);
            for (var s = t.length, a = 0; a < t.length; a++) n(a, t[a])
        })
    }, i.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
            e(t)
        })
    }, i.reject = function(t) {
        return new i(function(e, i) {
            i(t)
        })
    }, i.race = function(t) {
        return new i(function(e, i) {
            for (var n = 0, s = t.length; s > n; n++) t[n].then(e, i)
        })
    }, "undefined" != typeof module && module.exports ? module.exports = i : t.Promise || (t.Promise = i)
}(this), PointerEventsPolyfill.initialize = function(t) {
        return null == PointerEventsPolyfill.singleton && (PointerEventsPolyfill.singleton = new PointerEventsPolyfill(t)), PointerEventsPolyfill.singleton
    }, PointerEventsPolyfill.prototype.register_mouse_events = function() {
        $(document).on(this.options.mouseEvents.join(" "), this.options.selector, function(t) {
            if ("none" == $(this).css("pointer-events")) {
                var e = $(this).css("display");
                $(this).css("display", "none");
                var i = document.elementFromPoint(t.clientX, t.clientY);
                return e ? $(this).css("display", e) : $(this).css("display", ""), t.target = i, $(i).trigger(t), !1
            }
            return !0
        })
    },
    function() {
        "use strict";
        String.prototype.format = function(t) {
            return this.replace(/\{([^{}]*)\}/g, function(e, i) {
                var n = t[i];
                return "string" == typeof n || "number" == typeof n ? n : e
            })
        }
    }();
var __extends = this.__extends || function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    i.prototype = e.prototype, t.prototype = new i
};
(function() {
    var t = this,
        e = t._,
        i = {},
        n = Array.prototype,
        s = Object.prototype,
        a = Function.prototype,
        o = n.push,
        r = n.slice,
        h = n.concat,
        l = s.toString,
        c = s.hasOwnProperty,
        u = n.forEach,
        d = n.map,
        p = n.reduce,
        f = n.reduceRight,
        g = n.filter,
        m = n.every,
        v = n.some,
        y = n.indexOf,
        b = n.lastIndexOf,
        w = Array.isArray,
        k = Object.keys,
        x = a.bind,
        $ = function(t) {
            return t instanceof $ ? t : this instanceof $ ? void(this._wrapped = t) : new $(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = $), exports._ = $) : t._ = $, $.VERSION = "1.6.0";
    var C = $.each = $.forEach = function(t, e, n) {
        if (null == t) return t;
        if (u && t.forEach === u) t.forEach(e, n);
        else if (t.length === +t.length) {
            for (var s = 0, a = t.length; s < a; s++)
                if (e.call(n, t[s], s, t) === i) return
        } else
            for (var o = $.keys(t), s = 0, a = o.length; s < a; s++)
                if (e.call(n, t[o[s]], o[s], t) === i) return;
        return t
    };
    $.map = $.collect = function(t, e, i) {
        var n = [];
        return null == t ? n : d && t.map === d ? t.map(e, i) : (C(t, function(t, s, a) {
            n.push(e.call(i, t, s, a))
        }), n)
    };
    var _ = "Reduce of empty array with no initial value";
    $.reduce = $.foldl = $.inject = function(t, e, i, n) {
        var s = arguments.length > 2;
        if (null == t && (t = []), p && t.reduce === p) return n && (e = $.bind(e, n)), s ? t.reduce(e, i) : t.reduce(e);
        if (C(t, function(t, a, o) {
                s ? i = e.call(n, i, t, a, o) : (i = t, s = !0)
            }), !s) throw new TypeError(_);
        return i
    }, $.reduceRight = $.foldr = function(t, e, i, n) {
        var s = arguments.length > 2;
        if (null == t && (t = []), f && t.reduceRight === f) return n && (e = $.bind(e, n)), s ? t.reduceRight(e, i) : t.reduceRight(e);
        var a = t.length;
        if (a !== +a) {
            var o = $.keys(t);
            a = o.length
        }
        if (C(t, function(r, h, l) {
                h = o ? o[--a] : --a, s ? i = e.call(n, i, t[h], h, l) : (i = t[h], s = !0)
            }), !s) throw new TypeError(_);
        return i
    }, $.find = $.detect = function(t, e, i) {
        var n;
        return T(t, function(t, s, a) {
            if (e.call(i, t, s, a)) return n = t, !0
        }), n
    }, $.filter = $.select = function(t, e, i) {
        var n = [];
        return null == t ? n : g && t.filter === g ? t.filter(e, i) : (C(t, function(t, s, a) {
            e.call(i, t, s, a) && n.push(t)
        }), n)
    }, $.reject = function(t, e, i) {
        return $.filter(t, function(t, n, s) {
            return !e.call(i, t, n, s)
        }, i)
    }, $.every = $.all = function(t, e, n) {
        e || (e = $.identity);
        var s = !0;
        return null == t ? s : m && t.every === m ? t.every(e, n) : (C(t, function(t, a, o) {
            if (!(s = s && e.call(n, t, a, o))) return i
        }), !!s)
    };
    var T = $.some = $.any = function(t, e, n) {
        e || (e = $.identity);
        var s = !1;
        return null == t ? s : v && t.some === v ? t.some(e, n) : (C(t, function(t, a, o) {
            if (s || (s = e.call(n, t, a, o))) return i
        }), !!s)
    };
    $.contains = $.include = function(t, e) {
        return null != t && (y && t.indexOf === y ? -1 != t.indexOf(e) : T(t, function(t) {
            return t === e
        }))
    }, $.invoke = function(t, e) {
        var i = r.call(arguments, 2),
            n = $.isFunction(e);
        return $.map(t, function(t) {
            return (n ? e : t[e]).apply(t, i)
        })
    }, $.pluck = function(t, e) {
        return $.map(t, $.property(e))
    }, $.where = function(t, e) {
        return $.filter(t, $.matches(e))
    }, $.findWhere = function(t, e) {
        return $.find(t, $.matches(e))
    }, $.max = function(t, e, i) {
        if (!e && $.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        var n = -1 / 0,
            s = -1 / 0;
        return C(t, function(t, a, o) {
            var r = e ? e.call(i, t, a, o) : t;
            r > s && (n = t, s = r)
        }), n
    }, $.min = function(t, e, i) {
        if (!e && $.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        var n = 1 / 0,
            s = 1 / 0;
        return C(t, function(t, a, o) {
            var r = e ? e.call(i, t, a, o) : t;
            r < s && (n = t, s = r)
        }), n
    }, $.shuffle = function(t) {
        var e, i = 0,
            n = [];
        return C(t, function(t) {
            e = $.random(i++), n[i - 1] = n[e], n[e] = t
        }), n
    }, $.sample = function(t, e, i) {
        return null == e || i ? (t.length !== +t.length && (t = $.values(t)), t[$.random(t.length - 1)]) : $.shuffle(t).slice(0, Math.max(0, e))
    };
    var D = function(t) {
        return null == t ? $.identity : $.isFunction(t) ? t : $.property(t)
    };
    $.sortBy = function(t, e, i) {
        return e = D(e), $.pluck($.map(t, function(t, n, s) {
            return {
                value: t,
                index: n,
                criteria: e.call(i, t, n, s)
            }
        }).sort(function(t, e) {
            var i = t.criteria,
                n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (i < n || void 0 === n) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var M = function(t) {
        return function(e, i, n) {
            var s = {};
            return i = D(i), C(e, function(a, o) {
                var r = i.call(n, a, o, e);
                t(s, r, a)
            }), s
        }
    };
    $.groupBy = M(function(t, e, i) {
        $.has(t, e) ? t[e].push(i) : t[e] = [i]
    }), $.indexBy = M(function(t, e, i) {
        t[e] = i
    }), $.countBy = M(function(t, e) {
        $.has(t, e) ? t[e]++ : t[e] = 1
    }), $.sortedIndex = function(t, e, i, n) {
        i = D(i);
        for (var s = i.call(n, e), a = 0, o = t.length; a < o;) {
            var r = a + o >>> 1;
            i.call(n, t[r]) < s ? a = r + 1 : o = r
        }
        return a
    }, $.toArray = function(t) {
        return t ? $.isArray(t) ? r.call(t) : t.length === +t.length ? $.map(t, $.identity) : $.values(t) : []
    }, $.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length : $.keys(t).length
    }, $.first = $.head = $.take = function(t, e, i) {
        if (null != t) return null == e || i ? t[0] : e < 0 ? [] : r.call(t, 0, e)
    }, $.initial = function(t, e, i) {
        return r.call(t, 0, t.length - (null == e || i ? 1 : e))
    }, $.last = function(t, e, i) {
        if (null != t) return null == e || i ? t[t.length - 1] : r.call(t, Math.max(t.length - e, 0))
    }, $.rest = $.tail = $.drop = function(t, e, i) {
        return r.call(t, null == e || i ? 1 : e)
    }, $.compact = function(t) {
        return $.filter(t, $.identity)
    };
    var S = function(t, e, i) {
        return e && $.every(t, $.isArray) ? h.apply(i, t) : (C(t, function(t) {
            $.isArray(t) || $.isArguments(t) ? e ? o.apply(i, t) : S(t, e, i) : i.push(t)
        }), i)
    };
    $.flatten = function(t, e) {
        return S(t, e, [])
    }, $.without = function(t) {
        return $.difference(t, r.call(arguments, 1))
    }, $.partition = function(t, e) {
        var i = [],
            n = [];
        return C(t, function(t) {
            (e(t) ? i : n).push(t)
        }), [i, n]
    }, $.uniq = $.unique = function(t, e, i, n) {
        $.isFunction(e) && (n = i, i = e, e = !1);
        var s = i ? $.map(t, i, n) : t,
            a = [],
            o = [];
        return C(s, function(i, n) {
            (e ? n && o[o.length - 1] === i : $.contains(o, i)) || (o.push(i), a.push(t[n]))
        }), a
    }, $.union = function() {
        return $.uniq($.flatten(arguments, !0))
    }, $.intersection = function(t) {
        var e = r.call(arguments, 1);
        return $.filter($.uniq(t), function(t) {
            return $.every(e, function(e) {
                return $.contains(e, t)
            })
        })
    }, $.difference = function(t) {
        var e = h.apply(n, r.call(arguments, 1));
        return $.filter(t, function(t) {
            return !$.contains(e, t)
        })
    }, $.zip = function() {
        for (var t = $.max($.pluck(arguments, "length").concat(0)), e = new Array(t), i = 0; i < t; i++) e[i] = $.pluck(arguments, "" + i);
        return e
    }, $.object = function(t, e) {
        if (null == t) return {};
        for (var i = {}, n = 0, s = t.length; n < s; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    }, $.indexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = 0,
            s = t.length;
        if (i) {
            if ("number" != typeof i) return n = $.sortedIndex(t, e), t[n] === e ? n : -1;
            n = i < 0 ? Math.max(0, s + i) : i
        }
        if (y && t.indexOf === y) return t.indexOf(e, i);
        for (; n < s; n++)
            if (t[n] === e) return n;
        return -1
    }, $.lastIndexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = null != i;
        if (b && t.lastIndexOf === b) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
        for (var s = n ? i : t.length; s--;)
            if (t[s] === e) return s;
        return -1
    }, $.range = function(t, e, i) {
        arguments.length <= 1 && (e = t || 0, t = 0), i = arguments[2] || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), s = 0, a = new Array(n); s < n;) a[s++] = t, t += i;
        return a
    };
    var E = function() {};
    $.bind = function(t, e) {
        var i, n;
        if (x && t.bind === x) return x.apply(t, r.call(arguments, 1));
        if (!$.isFunction(t)) throw new TypeError;
        return i = r.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return t.apply(e, i.concat(r.call(arguments)));
            E.prototype = t.prototype;
            var s = new E;
            E.prototype = null;
            var a = t.apply(s, i.concat(r.call(arguments)));
            return Object(a) === a ? a : s
        }
    }, $.partial = function(t) {
        var e = r.call(arguments, 1);
        return function() {
            for (var i = 0, n = e.slice(), s = 0, a = n.length; s < a; s++) n[s] === $ && (n[s] = arguments[i++]);
            for (; i < arguments.length;) n.push(arguments[i++]);
            return t.apply(this, n)
        }
    }, $.bindAll = function(t) {
        var e = r.call(arguments, 1);
        if (0 === e.length) throw new Error("bindAll must be passed function names");
        return C(e, function(e) {
            t[e] = $.bind(t[e], t)
        }), t
    }, $.memoize = function(t, e) {
        var i = {};
        return e || (e = $.identity),
            function() {
                var n = e.apply(this, arguments);
                return $.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
            }
    }, $.delay = function(t, e) {
        var i = r.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, i)
        }, e)
    }, $.defer = function(t) {
        return $.delay.apply($, [t, 1].concat(r.call(arguments, 1)))
    }, $.throttle = function(t, e, i) {
        var n, s, a, o = null,
            r = 0;
        i || (i = {});
        var h = function() {
            r = !1 === i.leading ? 0 : $.now(), o = null, a = t.apply(n, s), n = s = null
        };
        return function() {
            var l = $.now();
            r || !1 !== i.leading || (r = l);
            var c = e - (l - r);
            return n = this, s = arguments, c <= 0 ? (clearTimeout(o), o = null, r = l, a = t.apply(n, s), n = s = null) : o || !1 === i.trailing || (o = setTimeout(h, c)), a
        }
    }, $.debounce = function(t, e, i) {
        var n, s, a, o, r, h = function() {
            var l = $.now() - o;
            l < e ? n = setTimeout(h, e - l) : (n = null, i || (r = t.apply(a, s), a = s = null))
        };
        return function() {
            a = this, s = arguments, o = $.now();
            var l = i && !n;
            return n || (n = setTimeout(h, e)), l && (r = t.apply(a, s), a = s = null), r
        }
    }, $.once = function(t) {
        var e, i = !1;
        return function() {
            return i ? e : (i = !0, e = t.apply(this, arguments), t = null, e)
        }
    }, $.wrap = function(t, e) {
        return $.partial(e, t)
    }, $.compose = function() {
        var t = arguments;
        return function() {
            for (var e = arguments, i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
            return e[0]
        }
    }, $.after = function(t, e) {
        return function() {
            if (--t < 1) return e.apply(this, arguments)
        }
    }, $.keys = function(t) {
        if (!$.isObject(t)) return [];
        if (k) return k(t);
        var e = [];
        for (var i in t) $.has(t, i) && e.push(i);
        return e
    }, $.values = function(t) {
        for (var e = $.keys(t), i = e.length, n = new Array(i), s = 0; s < i; s++) n[s] = t[e[s]];
        return n
    }, $.pairs = function(t) {
        for (var e = $.keys(t), i = e.length, n = new Array(i), s = 0; s < i; s++) n[s] = [e[s], t[e[s]]];
        return n
    }, $.invert = function(t) {
        for (var e = {}, i = $.keys(t), n = 0, s = i.length; n < s; n++) e[t[i[n]]] = i[n];
        return e
    }, $.functions = $.methods = function(t) {
        var e = [];
        for (var i in t) $.isFunction(t[i]) && e.push(i);
        return e.sort()
    }, $.extend = function(t) {
        return C(r.call(arguments, 1), function(e) {
            if (e)
                for (var i in e) t[i] = e[i]
        }), t
    }, $.pick = function(t) {
        var e = {},
            i = h.apply(n, r.call(arguments, 1));
        return C(i, function(i) {
            i in t && (e[i] = t[i])
        }), e
    }, $.omit = function(t) {
        var e = {},
            i = h.apply(n, r.call(arguments, 1));
        for (var s in t) $.contains(i, s) || (e[s] = t[s]);
        return e
    }, $.defaults = function(t) {
        return C(r.call(arguments, 1), function(e) {
            if (e)
                for (var i in e) void 0 === t[i] && (t[i] = e[i])
        }), t
    }, $.clone = function(t) {
        return $.isObject(t) ? $.isArray(t) ? t.slice() : $.extend({}, t) : t
    }, $.tap = function(t, e) {
        return e(t), t
    };
    var N = function(t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof $ && (t = t._wrapped), e instanceof $ && (e = e._wrapped);
        var s = l.call(t);
        if (s != l.call(e)) return !1;
        switch (s) {
            case "[object String]":
                return t == String(e);
            case "[object Number]":
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +e;
            case "[object RegExp]":
                return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var a = i.length; a--;)
            if (i[a] == t) return n[a] == e;
        var o = t.constructor,
            r = e.constructor;
        if (o !== r && !($.isFunction(o) && o instanceof o && $.isFunction(r) && r instanceof r) && "constructor" in t && "constructor" in e) return !1;
        i.push(t), n.push(e);
        var h = 0,
            c = !0;
        if ("[object Array]" == s) {
            if (h = t.length, c = h == e.length)
                for (; h-- && (c = N(t[h], e[h], i, n)););
        } else {
            for (var u in t)
                if ($.has(t, u) && (h++, !(c = $.has(e, u) && N(t[u], e[u], i, n)))) break;
            if (c) {
                for (u in e)
                    if ($.has(e, u) && !h--) break;
                c = !h
            }
        }
        return i.pop(), n.pop(), c
    };
    $.isEqual = function(t, e) {
        return N(t, e, [], [])
    }, $.isEmpty = function(t) {
        if (null == t) return !0;
        if ($.isArray(t) || $.isString(t)) return 0 === t.length;
        for (var e in t)
            if ($.has(t, e)) return !1;
        return !0
    }, $.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }, $.isArray = w || function(t) {
        return "[object Array]" == l.call(t)
    }, $.isObject = function(t) {
        return t === Object(t)
    }, C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        $["is" + t] = function(e) {
            return l.call(e) == "[object " + t + "]"
        }
    }), $.isArguments(arguments) || ($.isArguments = function(t) {
        return !(!t || !$.has(t, "callee"))
    }), "function" != typeof /./ && ($.isFunction = function(t) {
        return "function" == typeof t
    }), $.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, $.isNaN = function(t) {
        return $.isNumber(t) && t != +t
    }, $.isBoolean = function(t) {
        return !0 === t || !1 === t || "[object Boolean]" == l.call(t)
    }, $.isNull = function(t) {
        return null === t
    }, $.isUndefined = function(t) {
        return void 0 === t
    }, $.has = function(t, e) {
        return c.call(t, e)
    }, $.noConflict = function() {
        return t._ = e, this
    }, $.identity = function(t) {
        return t
    }, $.constant = function(t) {
        return function() {
            return t
        }
    }, $.property = function(t) {
        return function(e) {
            return e[t]
        }
    }, $.matches = function(t) {
        return function(e) {
            if (e === t) return !0;
            for (var i in t)
                if (t[i] !== e[i]) return !1;
            return !0
        }
    }, $.times = function(t, e, i) {
        for (var n = Array(Math.max(0, t)), s = 0; s < t; s++) n[s] = e.call(i, s);
        return n
    }, $.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, $.now = Date.now || function() {
        return (new Date).getTime()
    };
    var A = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    A.unescape = $.invert(A.escape);
    var I = {
        escape: new RegExp("[" + $.keys(A.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + $.keys(A.unescape).join("|") + ")", "g")
    };
    $.each(["escape", "unescape"], function(t) {
        $[t] = function(e) {
            return null == e ? "" : ("" + e).replace(I[t], function(e) {
                return A[t][e]
            })
        }
    }), $.result = function(t, e) {
        if (null != t) {
            var i = t[e];
            return $.isFunction(i) ? i.call(t) : i
        }
    }, $.mixin = function(t) {
        C($.functions(t), function(e) {
            var i = $[e] = t[e];
            $.prototype[e] = function() {
                var t = [this._wrapped];
                return o.apply(t, arguments), B.call(this, i.apply($, t))
            }
        })
    };
    var L = 0;
    $.uniqueId = function(t) {
        var e = ++L + "";
        return t ? t + e : e
    }, $.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var j = /(.)^/,
        O = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        F = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    $.template = function(t, e, i) {
        var n;
        i = $.defaults({}, i, $.templateSettings);
        var s = new RegExp([(i.escape || j).source, (i.interpolate || j).source, (i.evaluate || j).source].join("|") + "|$", "g"),
            a = 0,
            o = "__p+='";
        t.replace(s, function(e, i, n, s, r) {
            return o += t.slice(a, r).replace(F, function(t) {
                return "\\" + O[t]
            }), i && (o += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), n && (o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), s && (o += "';\n" + s + "\n__p+='"), a = r + e.length, e
        }), o += "';\n", i.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            n = new Function(i.variable || "obj", "_", o)
        } catch (t) {
            throw t.source = o, t
        }
        if (e) return n(e, $);
        var r = function(t) {
            return n.call(this, t, $)
        };
        return r.source = "function(" + (i.variable || "obj") + "){\n" + o + "}", r
    }, $.chain = function(t) {
        return $(t).chain()
    };
    var B = function(t) {
        return this._chain ? $(t).chain() : t
    };
    $.mixin($), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = n[t];
        $.prototype[t] = function() {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" != t && "splice" != t || 0 !== i.length || delete i[0], B.call(this, i)
        }
    }), C(["concat", "join", "slice"], function(t) {
        var e = n[t];
        $.prototype[t] = function() {
            return B.call(this, e.apply(this._wrapped, arguments))
        }
    }), $.extend($.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    }), "function" == typeof define && define.amd && define("underscore", [], function() {
        return $
    })
}).call(this);
var StoryBaseModule = function() {
        "use strict";

        function t(t, e) {
            _.bindAll(this, "hasMoreContent", "showMoreContent", "loadWidgets", "loadWidget"), this.module = t, this.$panel = $('<div class="panel"></div>'), this.$panel.addClass("text-" + this.module.textColor), this.widgets = [], this.state = 1, this.states = 1
        }
        return t.prototype.hasMoreContent = function(t) {
            if (this.state > 1 && "up" == t) return !0;
            if (this.state < this.states && "down" == t) return !0;
            for (var e in this.widgets)
                if (this.widgets[e].hasMoreContent(t)) return !0;
            return !1
        }, t.prototype.showMoreContent = function(t) {
            var e = !1;
            for (var i in this.widgets) this.widgets[i].hasMoreContent(t) && (this.widgets[i].showMoreContent(t), e = !0);
            return e
        }, t.prototype.loadWidgets = function() {
            _.each(this.module.widgets, function(t) {
                this.loadWidget(t)
            }.bind(this))
        }, t.prototype.loadWidget = function(t) {
            var e = $('<div class="widget"></div>');
            switch (e.appendTo(this.$panel), t.type) {
                case "LetterWidget":
                    this.widgets.push(new StoryWidgetLetter(t, e)), this.$panel.addClass("has-widget-letter");
                    break;
                case "SlideShowWidget":
                    this.widgets.push(new StoryWidgetSlideshow(t, e));
                    break;
                case "HotSpotsWidget":
                    this.widgets.push(new StoryWidgetHotspots(t, e));
                    break;
                case "GapWidget":
                    this.widgets.push(new StoryWidgetGap(t, e));
                    break;
                default:
                    console.error("Could not find a widget with type `" + t.type + "`")
            }
        }, t
    }(),
    StoryBaseWidget = function() {
        "use strict";

        function t(t, e) {
            _.bindAll(this, "hasMoreContent", "showMoreContent"), this.widget = t, this.$widget = e, this.active = !1, this.state = 1, this.states = 1
        }
        return t.prototype.hasMoreContent = function(t) {
            return !!this.active && (this.state > 1 && "previous" == t || this.state < this.states && "next" == t)
        }, t.prototype.showMoreContent = function(t) {
            return !1
        }, t
    }(),
    StoryBaseSlidingWidget = function(t) {
        "use strict";

        function e(e, i) {
            t.apply(this, arguments), _.bindAll(this, "hasMoreContent", "showMoreContent", "setImageOffset", "setInitialPosition", "setTargetPosition", "catchClick"), this.visible = !1, this.$widget.addClass("widget-sliding"), this.$imageHolder = $('<div class="image-holder ' + this.widget.position + '"></div>').appendTo(this.$widget), this.$imageFrame = $('<div class="image-frame"></div>').appendTo(this.$imageHolder), this.$imageFrame.on("click", this.catchClick), this.widget.size && this.$imageFrame.addClass(this.widget.size), this.widget.imageUrl && (this.$image = $('<img class="image" src="' + this.widget.imageUrl + '=s1000">').appendTo(this.$imageFrame), this.widget.isTransparent && this.$image.addClass("no-border")), PointerEventsPolyfill.initialize({
                selector: ".image-holder",
                mouseEvents: ["click", "hover"]
            }), this.setImageOffset(), this.setInitialPosition()
        }
        return __extends(e, t), e.prototype.hasMoreContent = function(t) {
            return !this.visible && "down" == t || !(!this.visible || "up" != t)
        }, e.prototype.showMoreContent = function(t) {
            return this.visible || "down" != t ? this.visible && "up" == t ? (this.visible = !1, this.$widget.removeClass("visible"), this.setInitialPosition(), !0) : void 0 : (this.visible = !0, this.$widget.addClass("visible"), this.setTargetPosition(), !0)
        }, e.prototype.catchClick = function(t) {
            this.visible || (t.preventDefault(), window.vanGogh.story.snap("down"))
        }, e.prototype.setImageOffset = function() {
            var t = -50,
                e = -50;
            switch (this.widget.position) {
                case "top":
                    e = this.widget.distance;
                    break;
                case "bottom":
                    e = -this.widget.distance;
                    break;
                case "left":
                    t = this.widget.distance;
                    break;
                case "right":
                    t = -this.widget.distance
            }
            this.$imageFrame.css("transform", "translate3d(" + t + "%, " + e + "%, 0)"), this.$imageFrame.css("-ms-transform", "translate(" + t + "%, " + e + "%)")
        }, e.prototype.setInitialPosition = function() {
            var t = this.widget.offsetX,
                e = this.widget.offsetY;
            switch (this.widget.position) {
                case "top":
                    e = -100;
                    break;
                case "bottom":
                    e = 100;
                    break;
                case "left":
                    t = -100;
                    break;
                case "right":
                    t = 100
            }
            this.$imageHolder.css("transform", "translate3d(" + t + "%, " + e + "%, 0)"), this.$imageHolder.css("-ms-transform", "translate(" + t + "%, " + e + "%)")
        }, e.prototype.setTargetPosition = function() {
            var t = this.widget.offsetX,
                e = this.widget.offsetY;
            switch (this.widget.position) {
                case "top":
                    e = -(100 - e);
                    break;
                case "left":
                    t = -(100 - t)
            }
            this.$imageHolder.css("transform", "translate3d(" + t + "%, " + e + "%, 0)"), this.$imageHolder.css("-ms-transform", "translate(" + t + "%, " + e + "%)")
        }, e
    }(StoryBaseWidget),
    StoryBaseSlide = function() {
        "use strict";

        function t(t, e) {
            this.slide = t, this.$slide = e, this.$slide.addClass("abs-middle"), this.$unit = $('<div class="base-layout"></div>').appendTo(this.$slide)
        }
        return t
    }(),
    Carrousel = function() {
        "use strict";

        function t() {
            _.bindAll(this, "initCarrousel"), this.$carrousel = $.findByRole("carrousel"), this.$nav = $.findByRole("carrousel-nav"), this.initCarrousel()
        }
        return t.prototype.initCarrousel = function(t) {
            var e = " center-y z-medium button square dark translucent icon-only",
                i = '<span class="visually-hidden">' + this.$nav.data("prev-text") + "</span>",
                n = '<span class="visually-hidden">' + this.$nav.data("next-text") + "</span>";
            this.$carrousel.slick({
                dots: !1,
                infinite: !1,
                speed: 700,
                slidesToShow: 3,
                slidesToScroll: 3,
                cssEase: "ease",
                prevArrow: '<button type="button" class="corner-top-left icon-arrow-left ' + e + '">' + i + "</button>",
                nextArrow: '<button type="button" class="corner-top-right icon-arrow-right ' + e + '">' + n + "</button>",
                responsive: [{
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        }, t
    }(),
    ClearInput = function() {
        "use strict";

        function t(t) {
            _.bindAll(this, "clear"), this.$icon = t, this.$input = this.$icon.siblings("input"), this.$icon.on("click", this.clear)
        }
        return t.prototype.clear = function(t) {
            t.preventDefault(), this.$input.val("")
        }, t
    }(),
    CookieLaw = function() {
        "use strict";

        function t() {
            _.bindAll(this, "optIn", "optOut", "setCookie", "showBanner", "hideBanner", "hasChosen", "hasOptedIn", "hasOptedOut", "cookieAccepted", "initInlineOptions", "registerOptInCallback", "executeOptInCallbacks"), this.namespace = ".GdprCookie.V1", this.optInValue = "1", this.optOutValue = "0", this.callbacks = [];
            var t = window.location.hostname.lastIndexOf(".") - 1,
                e = window.location.hostname.lastIndexOf(".", t) + 1;
            this.cookieDomain = window.location.hostname.substring(e), "azurewebsites.net" == this.cookieDomain && (this.cookieDomain = window.location.hostname), this.cookieValue = Cookies.get(this.namespace), $.findByRole("cookie-options-inline").length > 0 && this.initInlineOptions($.findByRole("cookie-options-inline")), this.hasChosen() || setTimeout(this.showBanner, 1500)
        }
        return t.prototype.optIn = function() {
            this.setCookie(this.optInValue), this.hideBanner(), setTimeout(function() {
                var t = window.location.href;
                window.location = updateQueryStringParameter(t, "v", "1")
            }, 1e3)
        }, t.prototype.optOut = function() {
            var t = Cookies.get();
            for (var e in t) Cookies.remove(e, {
                path: "/",
                domain: this.cookieDomain
            });
            this.setCookie(this.optOutValue), this.hideBanner(), setTimeout(function() {
                var t = window.location.href;
                window.location = updateQueryStringParameter(t, "v", "1")
            }, 1e3)
        }, t.prototype.setCookie = function(t) {
            Cookies.set(this.namespace, t, {
                expires: 3650,
                path: "/",
                domain: this.cookieDomain,
                sameSite: "lax"
            }), this.cookieValue = t
        }, t.prototype.cookieAccepted = function() {
            var t = this.namespace + "=1";
            return 1 == document.cookie.split(";").filter(function(e) {
                return e.indexOf(t) >= 0
            }).length
        }, t.prototype.initInlineOptions = function(t) {
            var e = t.findByRole("opt-in-button"),
                i = t.findByRole("opt-out-button");
            this.cookieAccepted() ? e.addClass("disabled") : i.addClass("disabled"), e.on("click" + this.namespace, this.optIn), i.on("click" + this.namespace, this.optOut)
        }, t.prototype.showBanner = function() {
            this.$container ? this.hideBanner() : (this.$container = $.findByRole("cookie-banner"), this.$optInButton = this.$container.findByRole("opt-in-button"), this.$optOutButton = this.$container.findByRole("opt-out-button")), this.$optInButton.on("click" + this.namespace, this.optIn), this.$optOutButton.on("click" + this.namespace, this.optOut), this.$container.removeClass("hidden").attr("aria-hidden", !1), this.$container.attr("role", "alertdialog").find("a[href], button").eq(0).focus()
        }, t.prototype.hideBanner = function() {
            this.$container && (this.$optInButton.off(this.namespace), this.$optOutButton.off(this.namespace), this.$container.addClass("hidden").attr("aria-hidden", !0), this.$container.attr("role", ""))
        }, t.prototype.hasChosen = function() {
            return void 0 !== this.cookieValue
        }, t.prototype.hasOptedIn = function() {
            return this.cookieValue === this.optInValue
        }, t.prototype.hasOptedOut = function() {
            return this.cookieValue !== this.optInValue
        }, t.prototype.registerOptInCallback = function(t, e) {
            if (this.hasOptedIn()) return void t.call(e);
            this.callbacks.push({
                func: t,
                thisScope: e || null
            })
        }, t.prototype.executeOptInCallbacks = function(t) {
            for (var e = 0; e < this.callbacks.length; e++) this.callbacks[e].func.call(this.callbacks[e].thisScope)
        }, t
    }(),
    Datepicker = function() {
        "use strict";

        function t(t) {
            return _.bindAll(this, "handleDatePicker", "handleDateChange", "handleFilterChange", "changeUrl", "updateNavigation"), this.$picker = t, this.$form = this.$picker.closestByRole("datepicker-form"), this.$prevButton = $.findByRole("datepicker-prev", this.$form), this.$nextButton = $.findByRole("datepicker-next", this.$form), this.type = this.$picker.data("type"), this.cat = this.$picker.data("category"), this.language = this.$picker.data("language"), this.dateFormat = this.$picker.data("format"), this.date = this.$picker.data("date"), this.dateTime = new Date(this.date), this.twoMonthsAgo = new Date, this.twoMonthsAgo.setHours(0, -this.twoMonthsAgo.getTimezoneOffset()), this.twoMonthsAgo.setMonth(this.twoMonthsAgo.getMonth() - 2), this.twoMonthsAgo.setDate(1), this.nextYear = new Date, this.nextYear.setHours(0, -this.nextYear.getTimezoneOffset()), this.nextYear.setMonth(this.twoMonthsAgo.getMonth + 12), this.nextYear.setDate(1), this.updateNavigation(), $.findByRole("calendar-filter-selector").on("change", this.handleFilterChange), "Month" == this.type ? (console.log("month", $.findByRole("calendar-month-selector"), this.handleDateChange), void $.findByRole("calendar-month-selector").on("change", this.handleDateChange)) : Modernizr.mobileos && Modernizr.inputtypes.date ? void $.findByRole("datepicker").on("blur", this.handleDateChange) : (this.$picker.attr("type", "text"), this.$picker.datepicker($.extend($.datepicker.regional["" + this.language], {
                dateFormat: this.dateFormat + "",
                navigationAsDateFormat: !0,
                prevText: "MM",
                nextText: "MM",
                onSelect: this.handleDatePicker
            })), void this.$picker.datepicker("setDate", this.currentDate))
        }
        return t.prototype.handleDatePicker = function() {
            var t = this.$picker.datepicker("getDate");
            t.setHours(0, -t.getTimezoneOffset(), 0, 0);
            var e = t.toISOString().substr(0, 10);
            this.changeUrl(e, this.type, this.cat)
        }, t.prototype.handleDateChange = function(t) {
            this.changeUrl($(t.currentTarget).val(), this.type, this.cat)
        }, t.prototype.handleFilterChange = function(t) {
            this.changeUrl(this.date, this.type, $(t.currentTarget).val())
        }, t.prototype.changeUrl = function(t, e, i) {
            var n = window.location.pathname + "?date=" + t + "&type=" + e + "&cat=" + i;
            window.location.href = encodeURI(n)
        }, t.prototype.updateNavigation = function() {
            "Month" == this.type && (this.currentDate <= this.twoMonthsAgo && this.$prevButton.attr("disabled", "disabled").addClass("disabled"), this.currentDate >= this.nextYear && this.$nextButton.attr("disabled", "disabled").addClass("disabled"))
        }, t
    }(),
    Education = function() {
        "use strict";

        function t() {
            _.bindAll(this, "receiveMessage");
            var t = $('[data-action="show-lessonup-modal"]'),
                e = $('[data-action="close-modal"], .lesson-page-overlay'),
                i = $('[data-role="filters"] li[data-toggle]'),
                n = $('[data-role="filters"] li[data-remove-facet]');
            e.on("click", function(t) {
                var e = $(t.currentTarget).closest('[data-role="lessons-result"],.lessons-result').find('[data-role="lessonup-modal"]'),
                    i = e.find("iframe");
                i[0].setAttribute("xsrc", i[0].getAttribute("src")), i[0].setAttribute("src", ""), e.hide(), window.removeEventListener("message", this.receiveMessage, !1), e.parent().find(".lesson-page-overlay").removeClass("show")
            }.bind(this)), t.on("click", function(t) {
                t.preventDefault();
                var e = $(t.currentTarget);
                window.addEventListener("message", this.receiveMessage, !1);
                var i = e.parent().find('[data-role="lessonup-modal"]'),
                    n = i.find("iframe");
                n[0].setAttribute("src", n[0].getAttribute("xsrc")), i.parent().find(".lesson-page-overlay").addClass("show"), i.show()
            }.bind(this)), i.on("click", function(t) {
                $('ul[data-for="' + this.dataset.toggle + '"],li[data-toggle="' + this.dataset.toggle + '"]').toggleClass("active").siblings().removeClass("active")
            }), n.on("click", function(t) {
                location.search = location.search.substr(1).replace(new RegExp("(^|&)" + this.dataset.removeFacet + "=[^&]+"), "")
            }), $('a > input[type="radio"]').parent().on("click", function(t) {
                $(this).children('input[type="radio"]').attr("checked", !0)
            })
        }
        return t.prototype.receiveMessage = function(t) {
            var e = $('[data-role="lessonup-modal"]'),
                i = JSON.parse(t.data);
            "start" == i.msg ? e.addClass("fullscreen-modal") : "stop" == i.msg && e.removeClass("fullscreen-modal")
        }, t
    }(),
    EducationPage = function() {
        "use strict";

        function t() {
            e.getClientRects()[0].top <= 200 && (e.classList.add("shown"), i.removeEventListener("scroll", t))
        }
        var e = document.querySelector("section#images");
        if (e) {
            var i = document.querySelector(".education-page"),
                n = document.getElementById("education-start"),
                s = document.querySelector("nav.back-button a.button");
            n.addEventListener("click", function(e) {
                e.preventDefault(), i.classList.add("opened"), i.addEventListener("scroll", t)
            }), s.addEventListener("click", function(e) {
                e.preventDefault(), i.classList.remove("opened"), i.removeEventListener("scroll", t)
            })
        }
    }(),
    InfoButton = function() {
        "use strict";

        function t(t) {
            _.bindAll(this, "setupInfoButton", "scrollToInfo"), this.$container = t, this.$scrollPane = $("#top.page"), this.setupInfoButton()
        }
        return t.prototype.setupInfoButton = function() {
            this.$container.find('a[href="#info"]').on("click", this.scrollToInfo)
        }, t.prototype.scrollToInfo = function(t) {
            t.preventDefault();
            var e = this.$container.findByRole("info"),
                i = this.$scrollPane.scrollTop() >= e.height() ? 0 : e.offset().top;
            e.find('[name="info"]').focus(), this.$scrollPane.stop().animate({
                scrollTop: i
            }, 800)
        }, t
    }(),
    Navigation = function() {
        "use strict";

        function t() {
            _.bindAll(this, "toggleMenu", "toggleSubMenu", "toggleLanguageList", "toggleLanguageOptions", "toggleSearchForm", "toggleTabAbility", "activateSearch"), this.$body = $("body"), this.$page = $(".page"), this.$menu = this.$body.find(".sidebar"), this.toggleTabAbility(this.$menu, !1), this.$topNavigation = this.$menu.findByRole("top-navigation"), this.$searchInput = this.$menu.findByRole("search-input"), this.$searchForm = this.$menu.findByRole("search-form"), this.$menuToggle = this.$body.findByRole("menu-toggle"), this.$menuToggle.on("click", this.toggleMenu), this.$overlay = this.$body.find(".page-overlay"), this.$overlay.on("click", this.toggleMenu), this.$subMenuToggles = this.$menu.findByRole("sub-menu-toggle"), this.$subMenuToggles.on("click", this.toggleSubMenu), this.$languageToggle = this.$menu.findByRole("language-toggle"), this.$languageList = this.$menu.findByRole("language-list"), this.$togglerLanguageOptions = this.$body.findByRole("toggler-language-options"), this.$languageToggle.on("click", this.toggleLanguageList), this.$togglerLanguageOptions.on("click", this.toggleLanguageOptions), this.$searchToggle = this.$menu.findByRole("search-toggle"), this.$searchToggle.on("click", this.toggleSearchForm)
        }
        return t.prototype.toggleSearchForm = function(t) {
            this.$searchInput.val() ? this.$searchForm.submit() : this.activateSearch()
        }, t.prototype.activateSearch = function(t) {
            this.$topNavigation.toggleClass("search-active"), this.$menu.removeClass("language-list-open"), this.$topNavigation.hasClass("search-active") ? (this.$searchInput.attr("aria-expanded", "true"), this.toggleTabAbility(this.$searchForm, !0)) : (this.$searchInput.attr("aria-expanded", "false"), this.toggleTabAbility(this.$searchForm, !1))
        }, t.prototype.toggleMenu = function(t) {
            t.preventDefault(), this.$body.toggleClass("menu-open"), this.$menuToggle.attr("aria-expanded", "true"), this.toggleTabAbility(this.$menu, !0);
            var e = this.$menu.find('[aria-hidden="true"]'),
                i = this;
            e.each(function() {
                i.toggleTabAbility(e, !1)
            }), this.toggleTabAbility(this.$page, !1), this.$body.hasClass("menu-open") || this.$body.one(hasTransitionEnd.event, function(t) {
                this.$languageList.removeClass("open"), this.$topNavigation.removeClass("search-active"), this.$menu.removeClass("language-list-open"), this.$menuToggle.attr("aria-expanded", "false"), this.toggleTabAbility(this.$menu, !1), this.toggleTabAbility(this.$page, !0)
            }.bind(this))
        }, t.prototype.toggleSubMenu = function(t) {
            t.preventDefault(), this.$subMenuToggles.not(t.currentTarget).removeClass("open"), $(t.currentTarget).toggleClass("open");
            var e = this;
            this.$subMenuToggles.each(function() {
                var t = $(this),
                    i = $("#" + t.attr("aria-controls"));
                t.hasClass("open") ? (t.attr("aria-expanded", "true"), e.toggleTabAbility(i, !0)) : (t.attr("aria-expanded", "false"), e.toggleTabAbility(i, !1))
            })
        }, t.prototype.toggleLanguageList = function(t) {
            t.preventDefault(), this.$menu.toggleClass("language-list-open"), this.$menu.hasClass("language-list-open") ? (this.$languageToggle.attr("aria-expanded", "true"), this.toggleTabAbility(this.$languageList, !0)) : (this.$languageToggle.attr("aria-expanded", "false"), this.toggleTabAbility(this.$languageList, !1)), this.$languageToggle.blur()
        }, t.prototype.toggleLanguageOptions = function(t) {
            t.preventDefault(), this.toggleMenu(t), this.$body.one(hasTransitionEnd.event, function(t) {
                this.$languageList.addClass("open")
            }.bind(this))
        }, t.prototype.toggleTabAbility = function(t, e) {
            t.attr("aria-hidden", !e);
            var i = e ? 0 : -1;
            t.find('a[href], area, button, select, textarea, *[tabindex="0"], input:not([type="hidden"])').attr("tabindex", i)
        }, t
    }(),
    PanelToggle = function() {
        "use strict";

        function t(t) {
            _.bindAll(this, "toggle", "show", "hide"), this.$toggle = t, this.$panel = this.$toggle.next('[data-role="panel-display"]'), this.visible = !1, this.$toggle.on("click", this.toggle)
        }
        return t.prototype.toggle = function(t) {
            this.visible ? this.hide() : this.show()
        }, t.prototype.show = function() {
            var t = $(this.$toggle);
            t.attr("aria-selected", "true"), t.attr("aria-expanded", "true"), t.addClass("open"), $(this.$panel).attr("aria-hidden", "false"), this.$panel.fadeIn(150), this.visible = !0
        }, t.prototype.hide = function() {
            var t = $(this.$toggle);
            t.attr("aria-selected", "false"), t.attr("aria-expanded", "false"), t.removeClass("open"), $(this.$panel).attr("aria-hidden", "true"), this.$panel.fadeOut(150), this.visible = !1
        }, t
    }(),
    Pod = function() {
        "use strict";

        function t(t) {
            _.bindAll(this, "selectMaterial", "setPriceAndSize", "toggleSubmitability"), this.$container = t, this.$materials = this.$container.findByRole("print-material-option"), this.$materials.on("click", this.selectMaterial), this.$container.findByRole("print-size-options").on("change", this.setPriceAndSize), this.$materials.first().click()
        }
        return t.prototype.selectMaterial = function(t) {
            var e = $(t.target),
                i = $('[data-role="' + e.attr("data-target") + '"]');
            if (!i.hasClass("open")) {
                $('[data-role="print-sizes-prizes"] .open option:selected').removeAttr("selected"), $('[data-role="print-sizes-prizes"] .open').removeClass("open"), i.addClass("open");
                $('[data-role="print-sizes-prizes"] .open option:eq(0)').first().attr("selected", "selected"), this.toggleSubmitability(this.$container)
            }
        }, t.prototype.setPriceAndSize = function(t) {
            var e = $(t.target);
            e.prop("selectedIndex") > 0 && (e.closest("form").findByRole("current-prize").text("€ " + e.find("option:selected").val()), e.closest("form").findByRole("current-size").val(e.find("option:selected").attr("data-size")), e.closest("form").attr("action", e.find("option:selected").attr("data-url"))), this.toggleSubmitability(e.closest("form"))
        }, t.prototype.toggleSubmitability = function(t) {
            t.find("option:selected[data-size]").length ? (t.addClass("submitable"), t.find('[type="submit"]').removeClass("disabled"), t.find('[type="submit"]').prop("disabled", !1)) : (t.removeClass("submitable"), t.find('[type="submit"]').addClass("disabled"), t.find('[type="submit"]').prop("disabled", !0))
        }, t
    }(),
    Popup = function() {
        "use strict";

        function t(t) {
            _.bindAll(this, "toggle", "show", "hide", "handleOutsideClick"), this.$container = t, this.$button = this.$container.findByRole("popup-button"), this.$content = this.$container.findByRole("popup-content"), this.visible = !1, this.isShareControl = $(this.$button).is(".share-controls *"), this.$button.on("click", this.toggle), $("body").on("popup.before-show", this.hide), $(window).on("click", this.handleOutsideClick)
        }
        return t.prototype.toggle = function(t) {
            if (t.preventDefault(), $(this.$container).parent().find(".show-popup").removeClass("show-popup"), this.visible) this.hide();
            else {
                if (this.isShareControl) {
                    var e = $(this.$content),
                        i = $(window).width(),
                        n = e.width(),
                        s = $(this.$button).offset().left,
                        a = i - s,
                        o = .5 * i;
                    s < a && s < .5 * i ? (e.removeClass("popup-right").addClass("popup-left"), s > .5 * n ? s = .5 * n - 40 : s <= .5 * n && i < 350 && this.$container.findByRole("print-on-demand").length > 0 && (s -= 40), e.css({
                        "margin-left": -s + "px"
                    })) : a < s && a < o && e.removeClass("popup-left").addClass("popup-right")
                }
                $(this.$button).addClass("show-popup"), this.show()
            }
        }, t.prototype.show = function() {
            $("body").trigger("popup.before-show"),
                this.$content.fadeIn(150).attr("aria-hidden", "false").find('a[href], button, select, textarea, *[tabindex="0"], input:not([type="hidden"])').eq(0).focus(), this.visible = !0, this.$button.attr("aria-expanded", "true")
        }, t.prototype.hide = function() {
            this.$content.fadeOut(150).attr("aria-hidden", "true"), this.visible = !1, this.$button.attr("aria-expanded", "false")
        }, t.prototype.handleOutsideClick = function(t) {
            this.visible && ($(t.target).is('[data-role="popup-content"]') || $(t.target).parents('[data-role="popup-content"]').size() || $(t.target).is('[data-role="popup-button"]') || this.toggle(t))
        }, t
    }(),
    PrintCornerGrid = function() {
        "use strict";

        function t(t) {
            this.$container = t, this.$packTopLeft = this.$container.findByRole("pack-top-left"), this.$packTopRight = this.$container.findByRole("pack-top-right"), this.$packBottomLeft = this.$container.findByRole("pack-bottom-left"), this.$packBottomRight = this.$container.findByRole("pack-bottom-right"), this.init(), vanGogh.lazyImages.registerRenderedCallback(this.imagesRenderedCallback.bind(this))
        }
        return t.prototype.init = function() {
            var t = {
                itemSelector: '[data-role="pack-me"]',
                layoutMode: "masonry",
                percentPosition: !0,
                containerStyle: null
            };
            this.$packTopLeft.isotope(t), this.$packTopRight.isotope(_.extend({}, t, {
                isOriginLeft: !1
            })), this.$packBottomLeft.isotope(_.extend({}, t, {
                isOriginTop: !1
            })), this.$packBottomRight.isotope(_.extend({}, t, {
                isOriginTop: !1,
                isOriginLeft: !1
            }))
        }, t.prototype.imagesRenderedCallback = function() {
            this.$packTopLeft.isotope("layout"), this.$packTopRight.isotope("layout"), this.$packBottomLeft.isotope("layout"), this.$packBottomRight.isotope("layout")
        }, t
    }(),
    PrintListGrid = function() {
        "use strict";

        function t(t) {
            this.$container = t, this.$packFromTop = this.$container.findByRole("pack-from-top"), this.init(), vanGogh.lazyImages.registerRenderedCallback(this.imagesRenderedCallback.bind(this))
        }
        return t.prototype.init = function() {
            var t = {
                itemSelector: '[data-role="pack-me"]',
                layoutMode: "masonry"
            };
            this.$packFromTop.isotope(t)
        }, t.prototype.imagesRenderedCallback = function() {
            this.$packFromTop.isotope("layout")
        }, t
    }(),
    Sharing = function() {
        "use strict";

        function t(t) {
            _.bindAll(this, "openShareLink"), t.findByRole("window-opener").on("click", this.openShareLink)
        }
        return t.prototype.openShareLink = function(t) {
            t.preventDefault();
            var e = t.currentTarget;
            this.openWindow(e.href)
        }, t.prototype.openWindow = function(t) {
            var e = screen.width > 620 ? (screen.width - 600) / 2 : 10,
                i = screen.height > 620 ? (screen.width - 600) / 2 : 10,
                n = "menubar=no,toolbar=no,status=no,width=600,height=600,top=" + i + ",left=" + e;
            window.open(t, "Social Media sharing", n)
        }, t
    }(),
    Translations = function() {
        "use strict";

        function t() {
            _.bindAll(this, "parseData");
            var t = $("#translationsJSON");
            try {
                this._translationsData = JSON.parse(t[0].innerHTML)
            } catch (t) {
                return console.error("Could not parse the translations JSON.", t), !1
            }
            this.parseData()
        }
        return t.prototype.parseData = function() {
            _.each(this._translationsData, function(t, e) {
                this[e] = t
            }.bind(this))
        }, t
    }(),
    StoryMobile = function() {
        "use strict";

        function t(t) {
            _.bindAll(this, "initialise", "initialiseDOM", "backToTop", "snapTo", "initPopups", "closePopup", "initComparator", "panelInViewport", "updateHash"), this.$window = $(window), this.$body = $("body"), this.$story = t, this.$viewport = $(".viewport"), this.$top = $("#top"), this.$sharing = $.findByRole("sharing")
        }
        return t.prototype.initialise = function() {
            this.initialiseDOM(), this.initPopups(), this.initComparator(), this.$story.on("scroll", _.debounce(this.panelInViewport, 300))
        }, t.prototype.initialiseDOM = function() {
            this.$backToTopButton = $('<div class="back-to-top block" tabindex="0"></div>'), this.$backToTopButton.addClass("button huge square translucent dark dark-hover icon-only icon-back-to-top"), this.$backToTopButton.on("click", this.backToTop), this.$backToTopButton.appendTo(this.$viewport), this.$popup = $('<div class="popup-container story-mobile"></div>'), this.$popup.appendTo(this.$top), this.$popupOverlay = $('<div class="popup-overlay"></div>'), this.$popupOverlay.appendTo(this.$popup), this.$popupOverlay.on("click", this.closePopup), this.$popupContent = $('<div class="popup-content"></div>'), this.$popupContent.appendTo(this.$popup), this.$popupCloseButton = $('<a href="" class="button large light icon-close icon-only popup-close"></a>'), this.$popupCloseButton.appendTo(this.$popup), this.$popupCloseButton.on("click", this.closePopup)
        }, t.prototype.backToTop = function() {
            this.snapTo(0)
        }, t.prototype.snapTo = function(t) {
            this.$story.animate({
                scrollTop: t
            }, 500)
        }, t.prototype.initPopups = function() {
            for (var t = $('[data-role="popup-trigger"]'), e = this, i = 0; i < t.length; i++) $(t[i]).click(function() {
                var t = $(this).next(".popup").clone();
                e.$popupContent.html(t), e.$popup.addClass("active"), e.$viewport.addClass("popup-visible"), e.initComparator()
            })
        }, t.prototype.closePopup = function(t) {
            return t.preventDefault(), this.$popup.removeClass("active"), this.$popupContent.html(""), this.$viewport.removeClass("popup-visible"), this.$popup.unbind(), !1
        }, t.prototype.initComparator = function() {
            for (var t = $(".popup-container .comparator-wrapper"), e = this, i = 0; i < t.length; i++) {
                var n = $(t[i]).find(".comparator-spacer")[0].clientWidth;
                $(t[i]).css({
                    "max-width": n + "px"
                });
                var s, a = $(t[i]).find('[data-role="comparator-image"] .image-backdrop-wrapper'),
                    o = onVisibilityChange($(t[i]), function(t, e) {
                        e && t.removeClass("onlyBeenOutsideViewport").delay(500).queue(function(t) {
                            $(this).addClass("highlightInteraction"), s = $(this), setTimeout(function() {
                                s.removeClass("highlightInteraction")
                            }, 1200), setTimeout(function() {
                                s.addClass("beenInsideViewport")
                            }, 2400)
                        })
                    });
                o(), e.$popup.find(".slideshow").on("DOMContentLoaded load resize scroll", o);
                for (var r = 0; r < a.length; r++) $(a[r]).click(function() {
                    var t = $(this).closest(".comparator");
                    t.hasClass("clicked") || t.addClass("clicked");
                    var i = $(this).closest(".image");
                    if (i.hasClass("active")) i.addClass("inactive"), i.removeClass("active"), t.removeClass("clicked"), e.$captionWrapper.html(""), e.$captionWrapper = null;
                    else {
                        i.addClass("active"), $(".image.inactive").removeClass("inactive"), e.$captionWrapper = i.closest(".base-layout").find(".comparator-caption-wrapper");
                        var n = i.find(".caption").html();
                        e.$captionWrapper.html(n)
                    }
                })
            }
        }, t.prototype.panelInViewport = function() {
            for (var t = this.$window.scrollTop(), e = t + .5 * this.$window.height(), i = $(".story-mobile").find(".section > .panels-wrapper > .panel"), n = 0, s = 0; s < i.length; s++) {
                $(i[s]).offset().top <= e && s > n && (n = s)
            }
            this.updateHash(n)
        }, t.prototype.updateHash = function(t) {
            history.pushState ? history.pushState(null, null, "#" + t) : location.hash = "#" + t
        }, t
    }(),
    Story = function() {
        "use strict";

        function t(t) {
            _.bindAll(this, "initialise", "initialiseDOM", "enable", "disable", "resize", "mapSectionsAndModules", "initialisePanels", "updatePanels", "loadModule", "catchKeyDown", "catchScroll", "catchTouch", "releaseDebounce", "snap", "clickPrevious", "clickNext", "previousSection", "nextSection", "backToTop", "updateNavigation", "processHashChange", "fullscreenOn", "fullscreenOff", "transformAssetIds");
            var e = $("#storyJSON");
            try {
                this.storyData = JSON.parse(e[0].innerHTML), this.storyData.story = this.transformAssetIds(this.storyData.story)
            } catch (t) {
                return console.error("Could not parse the story JSON.", t), !1
            }
            if (this.storyData.story.sections.length < 1) return console.error("Empty story, I need something to render."), !1;
            this.modules = [], this.sections = [], this.panels = {
                prev: null,
                active: null,
                next: null
            }, this.backdrops = this.panels, this.section = 0, this.panel = 0, this.debounce = !1, this.debounceTimeout = 1e3, this.debounceTimer = null, this.startY = 0, this.previousDeltaY = 0, this.accelerationCounter = 0, this.decelerationCounter = 0, this.kineticScrolling = !1, this.panelHeight = 0, this.fullscreen = !1, this.$window = $(window), this.$window.on("resize", this.resize), this.$window.on("hashchange", this.processHashChange), this.$body = $("body"), this.$story = t, this.$story.on("enable", this.enable), this.$story.on("disable", this.disable), this.mapSectionsAndModules()
        }
        return t.prototype.initialise = function() {
            this.initialiseDOM(), this.$window.trigger("resize"), this.initialisePanels(), $.findByRole("home-page").length < 1 && this.enable(), this.$story.on("click", function(t) {
                $(t.target).hasClass("icon-zoom-in") || $(t.target).hasClass("icon-plus") || this.$body.removeClass("tempHideNavForMobile")
            }.bind(this))
        }, t.prototype.initialiseDOM = function() {
            this.$backdropWrapper = $('<div class="backdrop-wrapper"></div>'), this.$backdropWrapper.appendTo(this.$story), this.$panelWrapper = $('<div class="panel-wrapper"></div>'), this.$panelWrapper.appendTo(this.$story), this.$navigationWrapper = $('<div class="navigation-wrapper abs-middle"></div>'), this.$navigationWrapper.appendTo(this.$story), this.$navigation = $('<div class="navigation"></div>'), this.$navigation.appendTo(this.$navigationWrapper);
            var t = "button huge square translucent dark dark-hover icon-only";
            this.$previousButton = $('<div class="previous block" tabindex="0"></div>'), this.$previousButton.addClass(t + " icon-arrow-down"), this.$previousButton.appendTo(this.$navigation), this.$previousButton.on("click", this.clickPrevious), this.$statusBlock = $('<div class="status block"></div>'), this.$statusBlock.addClass(t), this.$statusIndicator = $('<div class="indicator bg-light"></div>').appendTo(this.$statusBlock), this.$statusBlock.appendTo(this.$navigation), this.$nextButton = $('<div class="next block" tabindex="0"></div>'), this.$nextButton.addClass(t + " icon-arrow-down"), this.$nextButton.on("click", this.clickNext), this.$nextButton.appendTo(this.$navigation), this.$backToTopButton = $('<div class="back-to-top block" tabindex="0"></div>'), this.$backToTopButton.addClass(t + " icon-back-to-top"), this.$backToTopButton.on("click", this.backToTop), this.$backToTopButton.appendTo(this.$navigationWrapper)
        }, t.prototype.enable = function() {
            this.active || (this.active = !0, this.$story.addClass("active"), this.$window.on("keydown.story", this.catchKeyDown), this.$body.on("wheel.story mousewheel.story DOMMouseScroll.story", this.catchScroll), this.$story.on("touchstart.story", this.catchTouch), this.$story.on("touchmove.story", this.catchScroll))
        }, t.prototype.disable = function() {
            this.active = !1, this.$story.removeClass("active"), this.$window.off(".story"), this.$body.off(".story"), this.$story.off(".story")
        }, t.prototype.resize = function() {
            this.panelHeight = this.$panelWrapper.height(), this.panel > 0 && (this.previousSection(), this.nextSection())
        }, t.prototype.mapSectionsAndModules = function() {
            _.each(this.storyData.story.sections, function(t, e) {
                this.sections.push(t), _.each(t.modules, function(t) {
                    t.section = e, this.modules.push(t)
                }.bind(this))
            }.bind(this))
        }, t.prototype.initialisePanels = function() {
            var t = parseInt(location.hash.replace("#", ""));
            if (location.hash && !isNaN(t) && (this.panel = t, this.section = this.modules[this.panel].section, this.updateNavigation()), this.panels = {
                    prev: this.panel > 0 ? this.loadModule(this.modules[this.panel - 1]) : null,
                    active: this.loadModule(this.modules[this.panel]),
                    next: this.panel + 1 < this.modules.length ? this.loadModule(this.modules[this.panel + 1]) : null
                }, this.panels.active.$panel.addClass("active"), this.panels.active.$panel.appendTo(this.$panelWrapper), this.panels.prev) {
                this.panels.prev.$panel.css({
                    transform: "translate3d(0, -" + this.panelHeight + "px, 0)"
                }), this.panels.prev.$panel.css({
                    "-ms-transform": "translate(0, -" + this.panelHeight + "px)"
                }), this.panels.prev.$panel.prependTo(this.$panelWrapper);
                for (var e = 0; this.panels.prev.hasMoreContent("down") && e < 10;) this.panels.prev.showMoreContent("down"), e++
            }
            this.panels.next && (this.panels.next.$panel.css({
                transform: "translate3d(0, " + this.panelHeight + "px, 0)"
            }), this.panels.next.$panel.css({
                "-ms-transform": "translate(0, " + this.panelHeight + "px)"
            }), this.panels.next.$panel.appendTo(this.$panelWrapper)), this.backdrops = {
                prev: this.section > 0 ? this.loadSection(this.sections[this.section - 1]) : null,
                active: this.loadSection(this.sections[this.section]),
                next: this.section + 1 < this.sections.length ? this.loadSection(this.sections[this.section + 1]) : null
            }, this.backdrops.active.$backdrop.addClass("active"), this.backdrops.active.$backdrop.appendTo(this.$backdropWrapper), this.backdrops.prev && (this.backdrops.prev.$backdrop.css({
                transform: "translate3d(0, -" + this.panelHeight + "px, 0)"
            }), this.backdrops.prev.$backdrop.css({
                "-ms-transform": "translate(0, -" + this.panelHeight + "px)"
            }), this.backdrops.prev.$backdrop.prependTo(this.$backdropWrapper)), this.backdrops.next && (this.backdrops.next.$backdrop.css({
                transform: "translate3d(0, " + this.panelHeight + "px, 0)"
            }), this.backdrops.next.$backdrop.css({
                "-ms-transform": "translate(0, " + this.panelHeight + "px)"
            }), this.backdrops.next.$backdrop.appendTo(this.$backdropWrapper))
        }, t.prototype.updatePanels = function(t) {
            var e, i, n, s, a, o;
            "down" == t ? (e = "prev", i = "next", n = this.panel + 1, s = this.section + 1, a = this.panelHeight, o = "appendTo", dataLayer && dataLayer.push({
                events: {
                    category: "stories",
                    action: "navigate",
                    label: "panel #" + this.panel
                },
                event: "interaction.swipeUp"
            })) : (e = "next", i = "prev", n = this.panel - 1, s = this.section - 1, a = -this.panelHeight, o = "prependTo", dataLayer && dataLayer.push({
                events: {
                    category: "stories",
                    action: "navigate",
                    label: "panel #" + this.panel
                },
                event: "interaction.swipeDown"
            }));
            var r = !this.panels[i] || this.panels[i].module.section !== this.panels.active.module.section;
            this.panels[e] && (this.panels[e].$panel.remove(), this.panels[e] = null), this.panels[e] = this.panels.active, this.panels.active = this.panels[i];
            var h = null;
            if (n >= 0 && n < this.modules.length && (h = this.loadModule(this.modules[n]), h.$panel.css({
                    transform: "translate3d(0, " + a + "px, 0)"
                }), h.$panel.css({
                    "-ms-transform": "translate(0, " + a + "px)"
                }), h.$panel[o](this.$panelWrapper), "prev" == i))
                for (var l = 0; h.hasMoreContent("down") && l < 10;) h.showMoreContent("down"), l++;
            if (this.panels[i] = h, r) {
                this.backdrops[e] && (this.backdrops[e].$backdrop.remove(), this.backdrops[e] = null), this.backdrops[e] = this.backdrops.active, this.backdrops.active = this.backdrops[i];
                var c = null;
                s >= 0 && s < this.sections.length && (c = this.loadSection(this.sections[s]), c.$backdrop.css({
                    transform: "translate3d(0, " + a + "px, 0)"
                }), c.$backdrop.css({
                    "-ms-transform": "translate(0, " + a + "px)"
                }), c.$backdrop[o](this.$backdropWrapper)), this.backdrops[i] = c
            }
        }, t.prototype.loadModule = function(t) {
            var e = null;
            switch (t.type) {
                case "IntroModule":
                    e = new StoryModuleIntro(t);
                    break;
                case "QuoteModule":
                    e = new StoryModuleQuote(t);
                    break;
                case "TextModule":
                    e = new StoryModuleText(t);
                    break;
                case "FooterModule":
                    e = new StoryModuleFooter(t);
                    break;
                default:
                    console.error("Could not find a module with type `" + t.type + "`")
            }
            return e
        }, t.prototype.loadSection = function(t) {
            var e = t;
            return e.$backdrop = $('<div class="backdrop"></div>'), t.backgroundImageUrl && (e.$backdrop.addClass("has-image"), e.$backdrop.css("background-image", "url(" + t.backgroundImageUrl + ")")), e
        }, t.prototype.catchKeyDown = function(t) {
            if (this.active) switch (t.which) {
                case 37:
                    t.preventDefault(), $(".slideshow.active .click-to-prev").click();
                    break;
                case 38:
                    t.preventDefault(), $(".slideshow.active .icon-close").click(), this.snap("up");
                    break;
                case 39:
                    t.preventDefault(), $(".slideshow.active .click-to-next").click();
                    break;
                case 40:
                    t.preventDefault(), $(".slideshow.active .icon-close").click(), this.snap("down");
                    break;
                case 27:
                    t.preventDefault(), $(".hotspot.active .icon-plus").click(), $(".slideshow.active .icon-close").click();
                    break;
                default:
                    return
            }
        }, t.prototype.catchScroll = function(t) {
            if (t.preventDefault(), this.active && !this.fullscreen) {
                var e = null;
                if (t.originalEvent.touches) {
                    var i = t.originalEvent.touches[0].pageY;
                    if (Math.abs(this.startY - i) < 100) return;
                    e = this.startY - i
                }
                var n = e || t.originalEvent.deltaY || -t.originalEvent.wheelDeltaY,
                    s = t.originalEvent.timeStamp,
                    a = s - this.previousTime;
                this.previousTime = s;
                var o = (Math.abs(n) - Math.abs(this.previousDeltaY)) / a;
                if (this.kineticScrolling || 0 === this.previousDeltaY || Math.abs(n) % Math.abs(this.previousDeltaY) == 0 || 0 === Math.abs(this.previousDeltaY % Math.abs(n)) || (this.kineticScrolling = !0), this.previousDeltaY = n, this.kineticScrolling) {
                    if (o > 0 ? (this.accelerationCounter++, this.decelerationCounter = 0) : o < 0 ? (this.accelerationCounter = 0, this.decelerationCounter++) : (this.accelerationCounter = 0, this.decelerationCounter = 0), this.decelerationCounter > 3 && (this.decelerationCounter = 0, this.releaseDebounce()), this.accelerationCounter < 2) return;
                    this.accelerationCounter = 0
                }
                this.debounce || (this.debounce = !0, n > 0 ? this.snap("down") : this.snap("up"), clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(this.releaseDebounce, this.debounceTimeout))
            }
        }, t.prototype.catchTouch = function(t) {
            this.startY = t.originalEvent.touches[0].pageY
        }, t.prototype.releaseDebounce = function() {
            this.debounce = !1
        }, t.prototype.snap = function(t) {
            if ($(this.$body).addClass("tempHideNavForMobile"), this.panels.active.hasMoreContent(t)) return this.panels.active.showMoreContent(t), void this.updateNavigation();
            if (!(this.panel <= 0 && "up" == t || this.panel >= this.modules.length - 1 && "down" == t)) {
                var e = "down" == t ? -this.panelHeight : this.panelHeight;
                this.panels.active.$panel.css({
                    transform: "translate3d(0, " + e + "px, 0)"
                }), this.panels.active.$panel.css({
                    "-ms-transform": "translate(0, " + e + "px)"
                }), this.panels.active.$panel.removeClass("active"), this.panel = this.panel + ("down" == t ? 1 : -1);
                var i = "down" == t ? "next" : "prev";
                this.panels[i].$panel.css({
                    transform: "translate3d(0, 0, 0)"
                }), this.panels[i].$panel.css({
                    "-ms-transform": "translate(0, 0)"
                }), this.panels[i].$panel.addClass("active"), this.section != this.panels[i].module.section && (this.backdrops.active.$backdrop.css({
                    transform: "translate3d(0, " + e + "px, 0)"
                }), this.backdrops.active.$backdrop.css({
                    "-ms-transform": "translate(0, " + e + "px)"
                }), this.backdrops.active.$backdrop.removeClass("active"), this.section = this.panels[i].module.section, this.backdrops[i].$backdrop.css({
                    transform: "translate3d(0, 0, 0)"
                }), this.backdrops[i].$backdrop.css({
                    "-ms-transform": "translate(0, 0)"
                }), this.backdrops[i].$backdrop.addClass("active")), this.panels.active.$panel.find(".full-width-image-holder").css({
                    transform: "translate3d(0, " + -1 * e + "px, 0)"
                }), this.panels.active.$panel.find(".full-width-image-holder").css({
                    "-ms-transform": "translate(0, " + -1 * e + "px)"
                }), this.panels[i].$panel.find(".full-width-image-holder").css({
                    transform: "translate3d(0, 0, 0)"
                }), this.panels[i].$panel.find(".full-width-image-holder").css({
                    "-ms-transform": "translate(0, 0)"
                }), this.updatePanels(t), this.updateNavigation(), this.updateAddressBar(), $(".widget-full-width-image").each(function(t) {
                    var e = parseInt($(this).parent().css("padding-top")),
                        i = $(this).prev().outerHeight(!0);
                    $(this).height($(window).height() - (i + 2 * e))
                })
            }
        }, t.prototype.snapTo = function(t) {
            t = Math.min(t, this.modules.length), t = Math.max(t, 0);
            for (var e = t < this.panel ? "up" : "down", i = 0; this.panel != t && i < 2 * this.modules.length + 42;) this.snap(e), i++;
            if ("down" != e)
                for (var n = 0; this.panels.active.hasMoreContent(e) && n < 42;) this.snap(e), n++
        }, t.prototype.updateNavigation = function() {
            var t = 100 / (this.modules.length + 1) * (this.panel + 2);
            this.$statusIndicator.css("height", t + "%");
            var e = !1;
            (this.fullscreen || this.panel < 1 && (!this.panels.active || !this.panels.active.hasMoreContent("up")) || this.panel > this.modules.length - 2) && (e = !0), this.$navigationWrapper.css({
                transform: "translate3d(" + (e ? 100 : 0) + "%, 0, 0)"
            }), this.$navigationWrapper.css({
                "-ms-transform": "translate(" + (e ? 100 : 0) + "%, 0)"
            })
        }, t.prototype.updateAddressBar = function() {
            location.hash = this.panel, dataLayer && dataLayer.push({
                page: {
                    virtpath: this.panel
                },
                event: "interaction.nextpage"
            })
        }, t.prototype.processHashChange = function(t) {
            var e = location.hash.replace("#", "");
            isNaN(e) || (this.snapTo(e), dataLayer && dataLayer.push({
                page: {
                    virtpath: this.panel
                },
                events: {
                    category: "stories",
                    action: "navigate"
                },
                event: "interaction.browserBackButton"
            }))
        }, t.prototype.clickPrevious = function() {
            this.snap("up"), dataLayer && dataLayer.push({
                events: {
                    category: "stories",
                    action: "navigate",
                    label: "panel #" + this.panel
                },
                event: "interaction.previousButton"
            })
        }, t.prototype.clickNext = function() {
            this.snap("down"), dataLayer && dataLayer.push({
                events: {
                    category: "stories",
                    action: "navigate",
                    label: "panel #" + this.panel
                },
                event: "interaction.nextButton"
            })
        }, t.prototype.previousSection = function() {
            this.snapTo(this.panel - 1)
        }, t.prototype.nextSection = function() {
            this.snapTo(this.panel + 1)
        }, t.prototype.backToTop = function() {
            this.snapTo(0), dataLayer && dataLayer.push({
                events: {
                    category: "stories",
                    action: "navigate"
                },
                event: "interaction.backToTopButton"
            })
        }, t.prototype.fullscreenOn = function() {
            this.fullscreen = !0, this.updateNavigation()
        }, t.prototype.fullscreenOff = function() {
            this.fullscreen = !1, this.updateNavigation()
        }, t.prototype.transformAssetIds = function(t) {
            var e = {};
            return _.each(t, function(t, i) {
                if (Array.isArray(t)) {
                    var n = [];
                    _.each(t, function(t, e) {
                        n.push(this.transformAssetIds(t))
                    }, this), t = n
                } else "object" == typeof t && null !== t ? t = this.transformAssetIds(t) : i.indexOf("ssetId") > -1 && t && this.storyData.assets[t] ? (e[i] = t, i = i.replace(/[a|A]ssetId/g, function(t) {
                    var e = t.charAt(0);
                    return e === e.toLowerCase() ? "imageUrl" : "ImageUrl"
                }), t = this.storyData.assets[t].imageUrl) : i.indexOf("artObjectId") > -1 && (e.artObject = this.storyData.artObjects[t]);
                e[i] = t
            }, this), e
        }, t.prototype.renderUrl = function(t) {
            var e = $("<a></a>"),
                i = !1,
                n = !1;
            return null !== t.url ? i = t.url : null !== t.pageId ? n = t.pageId : null !== t.assetId ? n = t.assetId : null !== t.artObjectId && (n = t.assetId), !i && n && (i = this.storyData.urls[n]), e.attr("href", i), e.html(t.name), e
        }, t
    }(),
    StoryModuleFooter = function(t) {
        "use strict";

        function e(e, i) {
            t.apply(this, arguments), _.bindAll(this, "renderFeature"), this.$panel.addClass("module-footer").removeClass("text-light"), this.$contentContainer = $('<div class="content-container"></div>'), this.$contentContainer.appendTo(this.$panel), this.$featureWrapper = $('<div class="feature"></div>'), this.$featureWrapper.appendTo(this.$contentContainer), this.$featurePageUnit = $('<div class="page-unit"></div>'), this.$featurePageUnit.appendTo(this.$featureWrapper), this.$featureTitle = $('<h2 class="h3 text-center">' + (this.module.title || "") + "</h3>"), this.$featureTitle.appendTo(this.$featurePageUnit), this.$featureRow = $('<div class="cols cols-3up"></div>'), this.$featureRow.appendTo(this.$featurePageUnit), this.features = [], _.each(this.module.references, function(t) {
                var e = this.renderFeature(t).appendTo(this.$featureRow);
                this.features.push(e)
            }.bind(this)), (this.module.promoText || this.module.promoLink) && (this.$promoWrapper = $('<div class="promo bg-theme has-content"></div>'), this.$promoWrapper.appendTo(this.$panel), this.$promoPageUnit = $('<div class="page-unit compact text-bold text-center"></div>'), this.$promoPageUnit.appendTo(this.$promoWrapper), this.module.promoText && (this.$promoText = $("<span>" + this.module.promoText + "</span>"), this.$promoText.appendTo(this.$promoPageUnit)), this.module.promoLink && (this.$promoButton = window.vanGogh.story.renderUrl(this.module.promoLink), this.$promoButton.addClass("button light margin-left-half"), this.$promoButton.appendTo(this.$promoPageUnit)))
        }
        return __extends(e, t), e.prototype.renderFeature = function(t) {
            var e, i;
            return e = $('<div class="col"></div>'), t.link ? (i = window.vanGogh.story.renderUrl(t.link), i.appendTo(e), i.html("")) : i = e, this.$featureImage = $('<img class="image-large image-cropped" alt="" src="/static/img/280x180.gif" aria="hidden" role="presentation">'), this.$featureImage.appendTo(i), t.imageUrl && this.$featureImage.css("background-image", "url(" + t.imageUrl + "=s280)"), t.text && (this.$featureText = $('<p class="h4">' + t.text + "</p>"), this.$featureText.appendTo(i)), e
        }, e
    }(StoryBaseModule),
    StoryModuleIntro = function(t) {
        "use strict";

        function e(e, i) {
            t.apply(this, arguments), _.bindAll(this, "showMoreContent", "startStory"), this.states = 2, this.$panel.addClass("module-intro active");
            var n = $(".story-page-header", ".story");
            n.length > 0 && n.clone(!0).appendTo(this.$panel), this.$unit = $('<div class="base-layout"></div>').appendTo(this.$panel), $('<h1 class="hr-accent reset-top">' + this.module.title + "</h1>").appendTo(this.$unit), $('<p class="h1 text-normal">' + this.module.subtitle + "</p>").appendTo(this.$unit), this.$teaser = $('<div class="teaser absolute reset-margin-all"></div>').appendTo(this.$unit), this.module.teaser && (this.$teaserText = $('<p class="text-intro text-normal">' + this.module.teaser + "</p>").appendTo(this.$teaser));
            var s = window.vanGogh.story.storyData.storyButtonLabel || window.vanGogh.translations.storyButtonLabel,
                a = window.vanGogh.story.storyData.storyUrl;
            this.$storyButtonLink = $('<a href="' + a + '">' + s + "</a>").appendTo(this.$teaser), this.$storyButtonLink.attr("data-role", "story-button").addClass("button light"), this.$storyButtonLink.on("click", this.startStory), $('<p class="description text-intro">' + this.module.text + "</p>").appendTo(this.$unit);
            var o = $('<div class="backdrop"></div>').appendTo(this.$panel);
        }
        return __extends(e, t), e.prototype.showMoreContent = function(t) {
            if (!this.hasMoreContent(t)) return !1;
            "up" == t ? (this.state = 1, this.$panel.removeClass("state")) : "down" == t && (this.state = 2, this.$panel.addClass("state"))
        }, e.prototype.startStory = function(t) {
            $(window).width() > window.vanGogh.storyBreakpoint ? (t.preventDefault(), window.vanGogh.story.enable(), window.vanGogh.story.snap("down")) : window.location = t.target.href
        }, e
    }(StoryBaseModule),
    StoryModuleQuote = function(t) {
        "use strict";

        function e(e) {
            t.apply(this, arguments), this.$panel.addClass("module-quote abs-middle"), this.module.background && this.$panel.css("background", this.module.background), this.$unit = $('<div class="base-layout"></div>').appendTo(this.$panel), $('<div class="quote">' + this.module.textHtml + "</div>").appendTo(this.$unit), $("<hr/>").appendTo(this.$unit), this.module.caption && $('<p class="caption text-large">' + this.module.caption + "</p>").appendTo(this.$unit), this.loadWidgets()
        }
        return __extends(e, t), e
    }(StoryBaseModule),
    StoryModuleText = function(t) {
        "use strict";

        function e(e, i) {
            t.apply(this, arguments), this.$panel.addClass("module-text"), this.$unit = $('<div class="base-layout"></div>').appendTo(this.$panel), this.module.title && $("<h1>" + this.module.title + "</h1>").appendTo(this.$unit), this.module.text && $('<div class="text-intro text-normal">' + this.module.textHtml + "</div>").appendTo(this.$unit), this.loadWidgets()
        }
        return __extends(e, t), e
    }(StoryBaseModule),
    StoryWidgetGap = function(t) {
        "use strict";

        function e(e, i) {
            t.apply(this, arguments);
            var n = $(window).height();
            this.$widget.addClass("widget-full-width-image"), this.$imageHolder = $('<div class="full-width-image-holder"></div>').appendTo(this.$widget), this.$imageHolder.css({
                backgroundImage: "url(" + this.widget.imageUrl + ")",
                height: n + "px"
            })
        }
        return __extends(e, t), e.prototype.hasMoreContent = function() {
            return !!this.$widget.hasClass("open")
        }, e
    }(StoryBaseWidget),
    StoryWidgetHotspots = function(t) {
        "use strict";

        function e(e, i) {
            t.apply(this, arguments), _.bindAll(this, "toggleTooltip", "showTooltip", "hideTooltip", "removeBackdrop", "loadHotspots", "loadHotspot"), this.hotspots = [], this.$widget.addClass("widget-hotspot"), this.$backdrop = $('<div class="backdrop"></div>'), this.$backdrop.appendTo(this.$imageFrame), this.$backdrop.on("click", this.hideTooltip), this.loadHotspots()
        }
        return __extends(e, t), e.prototype.toggleTooltip = function(t) {
            t.preventDefault(), $(t.target).closest(".hotspot").hasClass("active") ? this.hideTooltip(t) : this.showTooltip(t)
        }, e.prototype.showTooltip = function(t) {
            var e = $(t.target).closest(".hotspot");
            this.positionTooltip(e), e.addClass("active pop"), this.$backdrop.addClass("active pop"), window.vanGogh.story.fullscreenOn(), dataLayer && dataLayer.push({
                events: {
                    category: "stories",
                    action: "navigate",
                    label: e.find(".text-intro").text()
                },
                event: "interaction.openHotSpot"
            })
        }, e.prototype.positionTooltip = function(t) {
            var e = t.find(".tooltip"),
                i = t.find(".button"),
                n = e.find(".arrow"),
                s = e.offset(),
                a = e.css("transform"),
                o = parseInt(a.substr(a.lastIndexOf(",") + 1)),
                r = s.top - $(window).scrollTop() - o,
                h = s.left - $(window).scrollLeft(),
                l = h + e.width(),
                c = r + e.height(),
                u = $(window).width(),
                d = $(window).height(),
                p = 0;
            if (r < 30 && (p = 30 - r), c + p > d - 30 && (p = d - 30 - c), p && (e.css({
                    marginTop: p
                }), n.css({
                    top: parseInt(n.css("top")) - p
                })), l > u - 30) {
                var f = l - (u - 30);
                if (e.addClass("left"), (h = e.offset().left - $(window).scrollLeft()) < 0) {
                    var g = -1 * h;
                    f <= g ? (e.removeClass("left"), e.css({
                        marginLeft: -1 * f
                    }), i.css({
                        marginLeft: -1 * f
                    })) : (e.css({
                        marginLeft: g
                    }), i.css({
                        marginLeft: g
                    }))
                }
            }
        }, e.prototype.hideTooltip = function(t) {
            var e = this.$widget.find(".hotspot.active");
            e.removeClass("active"), window.vanGogh.story.fullscreenOff(), dataLayer && dataLayer.push({
                events: {
                    category: "stories",
                    action: "navigate",
                    label: e.find(".text-intro").text()
                },
                event: "interaction.closeHotSpot"
            }), this.$backdrop.removeClass("active"), hasTransitionEnd ? this.$backdrop.one(hasTransitionEnd.event, this.removeBackdrop) : setTimeout(this.removeBackdrop, 1e3)
        }, e.prototype.removeBackdrop = function(t) {
            this.$backdrop.hasClass("active") || (this.$backdrop.removeClass("pop"), this.$widget.find(".hotspot.pop").removeClass("pop"))
        }, e.prototype.loadHotspots = function() {
            _.each(this.widget.hotspots, function(t) {
                this.loadHotspot(t)
            }.bind(this))
        }, e.prototype.loadHotspot = function(t) {
            var e = $('<div class="hotspot"></div>');
            e.appendTo(this.$imageFrame), e.css({
                top: t.offsetY + "%",
                left: t.offsetX + "%"
            }), t.imageUrl && t.title && t.text && e.addClass("has-image-and-text");
            var i = $('<div class="button icon-only icon-plus"></div>');
            i.appendTo(e), i.on("click", this.toggleTooltip);
            var n = $('<div class="tooltip"></div>');
            if (n.appendTo(e), t.imageUrl) {
                var s = $('<img src="/static/img/280x180.gif">');
                s.css("background-image", "url(" + t.imageUrl + "=s400)"), s.appendTo(n)
            }
            if ($('<div class="arrow"></div>').appendTo(n), t.title || t.text) {
                var a = $('<div class="text-holder text-dark"></div>');
                a.appendTo(n), t.title && $('<p class="text-intro text-bold">' + t.title + "</p>").appendTo(a), t.text && $('<p class="description">' + t.text + "</p>").appendTo(a)
            }
        }, e
    }(StoryBaseSlidingWidget),
    StoryWidgetLetter = function(t) {
        "use strict";

        function e(e, i) {
            t.apply(this, arguments), _.bindAll(this, "toggleLetter", "holdScroll", "togglePopup"), this.$widget.addClass("widget-letter"), this.$letterHolder = $('<div class="letter-holder"></div>').appendTo(this.$widget), this.$letterHolder.on("wheel mousewheel DOMMouseScroll touchstart touchmove", this.holdScroll), this.$buttonHolder = $('<div class="button-holder"></div>').appendTo(this.$widget), this.$button = $('<a href="">' + this.widget.buttonTextOpen + "</a>").appendTo(this.$buttonHolder), this.$button.addClass("button icon-zoom-in icon-label icon-before"), this.$button.on("click", this.toggleLetter), (this.widget.popupTitle || this.widget.popupTextHtml) && (this.$popupHolder = $('<div class="popup-holder"></div>').appendTo(this.$letterHolder), this.$popupToggle = $('<button class="popup-toggle button icon-only icon-letter-info"></button>').appendTo(this.$popupHolder), this.$popupContent = $('<div class="popup-content"></div>').appendTo(this.$popupHolder), this.$popupContent.append($('<div class="arrow"></div>')), this.$popupTextHolder = $('<div class="text-holder"></div>').appendTo(this.$popupContent), this.$popupTextHolder.append($('<p class="text-intro text-bold">' + this.widget.popupTitle + "</p>")), this.$popupTextHolder.append($(this.widget.popupTextHtml).addClass("text-dark")), this.$popupToggle.on("click", this.togglePopup)), this.widget.imageUrl && $('<img class="letter" src="' + this.widget.imageUrl + '">').appendTo(this.$letterHolder)
        }
        return __extends(e, t), e.prototype.toggleLetter = function(t) {
            if (t.preventDefault(), this.$widget.hasClass("open")) this.$letterHolder.animate({
                scrollTop: 0
            }, 150, function() {
                window.vanGogh.story.fullscreenOff(), this.$widget.removeClass("open"), this.$button.removeClass("icon-close"), this.$button.addClass("icon-zoom-in"), this.$button.html(this.widget.buttonTextOpen), $(".panel.active .base-layout").fadeIn(150), (this.widget.popupTitle || this.widget.popupTextHtml) && this.hidePopup(), dataLayer && dataLayer.push({
                    events: {
                        category: "stories",
                        action: "navigate",
                        label: "letter " + this.widget.popupTitle
                    },
                    event: "interaction.closeLetter"
                })
            }.bind(this));
            else {
                if (window.vanGogh.story.fullscreenOn(), this.$widget.addClass("open"), this.$button.removeClass("icon-zoom-in"), this.$button.addClass("icon-close"), this.$button.html(this.widget.buttonTextClose), $(".panel.active .base-layout").fadeOut(150), this.widget.popupTitle || this.widget.popupTextHtml) {
                    var e = this;
                    setTimeout(function() {
                        e.showPopup()
                    }, 500)
                }
                dataLayer && dataLayer.push({
                    events: {
                        category: "stories",
                        action: "navigate",
                        label: "letter " + this.widget.popupTitle
                    },
                    event: "interaction.openLetter"
                })
            }
        }, e.prototype.holdScroll = function(t) {
            this.$widget.hasClass("open") && t.stopPropagation()
        }, e.prototype.togglePopup = function(t) {
            this.$popupContent.hasClass("active") ? this.hidePopup() : this.showPopup()
        }, e.prototype.showPopup = function(t) {
            this.$popupContent.addClass("active"), this.$popupToggle.addClass("icon-close").addClass("light"), this.$popupToggle.removeClass("icon-letter-info")
        }, e.prototype.hidePopup = function(t) {
            this.$popupContent.removeClass("active"), this.$popupToggle.removeClass("icon-close").removeClass("light"), this.$popupToggle.addClass("icon-letter-info")
        }, e
    }(StoryBaseWidget),
    StoryWidgetSlideshow = function(t) {
        "use strict";

        function e(e, i) {
            t.apply(this, arguments), _.bindAll(this, "showMoreContent", "showSlideshow", "hideSlideshow", "removeSlideshow", "loadSlides", "loadSlide", "previousSlide", "nextSlide"), this.slides = [], this.slide = 0, this.$widget.addClass("widget-slideshow"), this.$buttonHolder = $('<div class="button-holder"></div>').appendTo(this.$imageFrame), this.$button = $('<a href="">' + this.widget.buttonText + "</a>").appendTo(this.$buttonHolder), this.$button.addClass("button icon-plus bi bi-plus icon-label icon-before"), this.$button.on("click", this.showSlideshow), this.$slideshow = $('<div class="slideshow"></div>').appendTo(this.$widget), this.widget.backgroundImageUrl && this.$slideshow.css("background-image", "url(" + this.widget.backgroundImageUrl + ")"), this.$slideHolder = $('<div class="slide-holder"></div>').appendTo(this.$slideshow), this.$slideshowCloseButton = $('<a href=""></a>').appendTo(this.$slideshow), this.$slideshowCloseButton.addClass("button  light icon-close icon-only bi bi-x"), this.$slideshowCloseButton.on("click", this.hideSlideshow);
            var n = "button huge square translucent dark dark-hover icon-only";
            this.$slideshowNextButton = $('<a href=""></a>').appendTo(this.$slideshow), this.$slideshowNextButton.addClass(n + " icon-arrow-right"), this.$slideshowNextButton.on("click", this.nextSlide), this.$slideshowPreviousButton = $('<a href=""></a>').appendTo(this.$slideshow), this.$slideshowPreviousButton.addClass(n + " icon-arrow-left"), this.$slideshowPreviousButton.on("click", this.previousSlide)
        }
        return __extends(e, t), e.prototype.showSlideshow = function(t) {
            t.preventDefault(), this.slides.length < 1 && this.loadSlides(), this.slideTo(0), this.$slideshow.addClass("active pop"), window.vanGogh.story.fullscreenOn(), dataLayer && dataLayer.push({
                events: {
                    category: "stories",
                    action: "navigate",
                    label: "slideshow " + this.widget.buttonText
                },
                event: "interaction.openSlideShow"
            })
        }, e.prototype.hideSlideshow = function(t) {
            t.preventDefault(), this.$slideshow.removeClass("active"), window.vanGogh.story.fullscreenOff(), dataLayer && dataLayer.push({
                events: {
                    category: "stories",
                    action: "navigate",
                    label: "slideshow " + this.widget.buttonText
                },
                event: "interaction.closeSlideShow"
            }), hasTransitionEnd ? this.$slideshow.one(hasTransitionEnd.event, this.removeSlideshow) : setTimeout(this.removeSlideshow, 1e3)
        }, e.prototype.removeSlideshow = function(t) {
            this.$slideshow.hasClass("active") || this.$slideshow.removeClass("pop")
        }, e.prototype.loadSlides = function() {
            _.each(this.widget.slides, function(t) {
                this.loadSlide(t)
            }.bind(this))
        }, e.prototype.loadSlide = function(t) {
            var e = $('<div class="slide"></div>');
            switch (e.appendTo(this.$slideHolder), t.type) {
                case "CompareSlide":
                    this.slides.push(new StorySlideCompare(t, e));
                    break;
                default:
                    this.slides.push(new StorySlideDefault(t, e))
            }
        }, e.prototype.nextSlide = function(t) {
            t.preventDefault(), this.slideTo(this.slide + 1), dataLayer && dataLayer.push({
                events: {
                    category: "stories",
                    action: "navigate",
                    label: "slideshow " + this.widget.buttonText
                },
                event: "interaction.nextSlide"
            })
        }, e.prototype.previousSlide = function(t) {
            t.preventDefault(), this.slideTo(this.slide - 1), dataLayer && dataLayer.push({
                events: {
                    category: "stories",
                    action: "navigate",
                    label: "slideshow " + this.widget.buttonText
                },
                event: "interaction.previousSlide"
            })
        }, e.prototype.slideTo = function(t) {
            this.slide = t, this.$slideHolder.css({
                "-ms-transform": "translate(" + -100 * t + "%, 0)"
            }), this.$slideHolder.css({
                transform: "translate3d(" + -100 * t + "%, 0, 0)"
            }), this.updateNavigation()
        }, e.prototype.updateNavigation = function() {
            var t = !0;
            this.slide === this.slides.length - 1 && (t = !1);
            var e = !0;
            this.slide < 1 && (e = !1), t ? this.$slideshowNextButton.addClass("click-to-next") : this.$slideshowNextButton.removeClass("click-to-next"), e ? this.$slideshowPreviousButton.addClass("click-to-prev") : this.$slideshowPreviousButton.removeClass("click-to-prev"), this.$slideshowNextButton.css({
                transform: "translate3d(" + (t ? 0 : 100) + "%, 0, 0)"
            }), this.$slideshowNextButton.css({
                "-ms-transform": "translate(" + (t ? 0 : 100) + "%, 0)"
            }), this.$slideshowPreviousButton.css({
                transform: "translate3d(" + (e ? 0 : -100) + "%, 0, 0)"
            }), this.$slideshowPreviousButton.css({
                "-ms-transform": "translate(" + (e ? 0 : -100) + "%, 0)"
            })
        }, e
    }(StoryBaseSlidingWidget),
    StorySlideCompare = function(t) {
        "use strict";

        function e(e, i) {
            t.apply(this, arguments), _.bindAll(this, "render", "switchImage"), this.$slide.addClass("slide-compare"), this.render()
        }
        return __extends(e, t), e.prototype.render = function() {
            this.slide.text && this.renderText(), this.slide.images.length > 0 && this.renderImages()
        }, e.prototype.renderImages = function() {
            this.$unit.addClass("has-image multiple"), this.$imageGroup = $('<figure class="image-group two"></figure>').appendTo(this.$unit), this.slide.images.length > 2 && this.$imageGroup.removeClass("two").addClass("three"), this.$images = $(), this.$captions = $(), _.each(this.slide.images, function(t) {
                this.$imageHolder = $('<div class="image-holder"></div>').appendTo(this.$imageGroup), this.$imageFrame = $('<div class="image-frame"></div>').appendTo(this.$imageHolder);
                var e = $('<img alt=""' + (t.isTransparent ? 'class="no-border"' : "") + 'src="' + (t.imageUrl || t.artObjectImageUrl) + '=s600">');
                if (this.$images = this.$images.add(e), e.appendTo(this.$imageFrame), t.artObject) {
                    t.caption = t.artObject.principalCreator + ", <em>" + t.artObject.title + "</em>, " + t.artObject.productionDateShortDisplay;
                    $('<a href="#" class="button dark icon-zoom-in icon-only"><span class="visually-hidden">' + t.artObject.title + "</span></a>").appendTo(this.$imageFrame)
                }
                if (t.caption) {
                    var i = $('<figcaption class="caption">' + t.caption + "</figcaption>").appendTo(this.$imageGroup);
                    this.$captions = this.$captions.add(i)
                }
            }.bind(this)), this.$images.on("click", this.switchImage).first().trigger("click")
        }, e.prototype.renderText = function() {
            this.$unit.addClass("has-text"), this.$textHolder = $('<div class="text-holder"></div>').appendTo(this.$unit), $('<div class="reset-top text-center text-large text-normal">' + this.slide.textHtml + "</div>").appendTo(this.$textHolder)
        }, e.prototype.switchImage = function(t) {
            t.preventDefault();
            var e = $(t.target),
                i = this.$images.index(e),
                n = this.$captions.eq(i);
            this.$images.closest(".image-holder").addClass("faded"), e.closest(".image-holder").removeClass("faded"), this.$images.closest(".image-group").find(".button").addClass("hidden"), e.next(".button").removeClass("hidden"), this.$captions.addClass("hidden"), n.removeClass("hidden")
        }, e
    }(StoryBaseSlide),
    StorySlideDefault = function(t) {
        "use strict";

        function e(e, i) {
            t.apply(this, arguments), _.bindAll(this, "render", "switchImage"), this.$slide.addClass("slide-default"), this.render()
        }
        return __extends(e, t), e.prototype.render = function() {
            !this.slide.imageUrl && !this.slide.artObjectImageUrl || this.slide.isQuote || this.renderImage(), (this.slide.title || this.slide.text) && this.renderText()
        }, e.prototype.renderImage = function() {
            this.$unit.addClass("has-image"), this.$imageHolder = $('<div class="image-holder"></div>').appendTo(this.$unit), this.$imageFrame = $('<div class="image-frame"></div>').appendTo(this.$imageHolder), this.$image = $('<img src="' + (this.slide.imageUrl || this.slide.artObjectImageUrl) + '=s1000">').appendTo(this.$imageFrame), (this.slide.isTransparent || !this.slide.title && !this.slide.text) && this.$image.addClass("no-border"), this.slide.overlayText && $('<p class="overlay-text">' + this.slide.overlayText + "</p>").appendTo(this.$imageFrame);
            
        }, e.prototype.renderText = function() {
            var t;
            if (this.$textHolder = $('<div class="text-holder"></div>').appendTo(this.$unit), this.slide.isQuote ? this.$unit.addClass("has-quote") : (this.$unit.addClass("has-text"), this.slide.title && (t = $('<h1 class="hr-accent">' + this.slide.title + "</h1>").appendTo(this.$textHolder))), this.slide.text) {
                var e = "text-intro text-normal";
                this.slide.isQuote && (e = "quote", this.slide.caption && ($("<hr/>").appendTo(this.$textHolder), $('<p class="caption">' + this.slide.caption + "</p>").appendTo(this.$textHolder)));
                var i = $('<div class="' + e + '">' + this.slide.textHtml + "</div>");
                t ? i.insertAfter(t) : i.prependTo(this.$textHolder)
            }
        }, e.prototype.switchImage = function(t) {
            t.preventDefault(), this.$switchImage.hasClass("active") ? (this.$switchImage.removeClass("active"), this.$button.addClass("icon-zoom-in"), this.$button.removeClass("icon-zoom-out"), this.$button.html(this.slide.buttonTextDefault)) : (this.$switchImage.addClass("active"), this.$button.removeClass("icon-zoom-in"), this.$button.addClass("icon-zoom-out"), this.$button.html(this.slide.buttonTextAlternate))
        }, e
    }(StoryBaseSlide),
    ArtobjectPage = function() {
        "use strict";

        function t(t) {
            _.bindAll(this, "setupMicrio", "setupObjectControls", "zoomInOut", "rotate", "setupObjectOverlay", "objectMouseMove", "objectClick", "showObjectOverlay", "hideObjectOverlay", "setupObjectData", "toggleObjectData", "showObjectData", "hideObjectData", "setupCloseButton"), this.$container = t, this.$scrollPane = $("#top.page"), this.$header = $.findByRole("art-object-header"), this.$micrio = t.findByRole("micrio"), this.rotation = 0, this.animationDuration = 500, this.overlayTimeout = null, this.timeoutDuration = 4e3, this.setupMicrio(), this.setupObjectData(), this.setupCloseButton(), this.setupDownload(), this.disableContextMenu(), this.$infoButton = new InfoButton(t), this.overlayButtons = this.$header.find('[data-role="object-overlay"] .button');
            var e = this;
            this.overlayButtons.each(function() {
                $(this).on("focus", function() {
                    e.showObjectOverlay()
                })
            })
        }
        return t.prototype.disableContextMenu = function() {
            this.$micrio.bind("contextmenu", function(t) {
                return !1
            })
        }, t.prototype.setupDownload = function() {
            $("[data-role=select-download-size]").first().next().focus(), $("[data-role=select-download-size]").bind("click", function(t) {
                var e = $(t.target),
                    i = $("[data-role=" + e.data("target") + "-text]");
                i.closest("form").find("p").hide(), i.removeClass("hidden").show()
            })
        }, t.prototype.setupMicrio = function() {
            if (!(this.$micrio.length < 1)) {
                var t = this.$micrio.data(),
                    e = [Number(t.offsetX) / 100, Number(t.offsetY) / 100],
                    i = !isNaN(e[0]) && !isNaN(e[1]);
                this.micrioInstance = new Micrio({
                    id: t.id,
                    path: t.basePath,
                    type: "json",
                    container: this.$micrio[0],
                    initType: t.initType,
                    hookScroll: !1,
                    startCoo: i && e,
                    hookEvents: "true" === t.hookEvents.toLowerCase()
                }), this.setupObjectControls(), this.setupObjectOverlay()
            }
        }, t.prototype.setupObjectControls = function() {
            this.$objectControls = this.$container.findByRole("object-controls"), this.$objectControls.removeClass("hidden"), this.$objectControls.findByRole("zoom").on("click", this.zoomInOut), this.$objectControls.findByRole("rotate").on("click", this.rotate)
        }, t.prototype.zoomInOut = function(t) {
            var e = "zoomIn";
            $(t.target).hasRole("zoom-out") && (e = e.replace("In", "Out")), this.micrioInstance.camera[e](1, this.animationDuration)
        }, t.prototype.rotate = function() {
            this.rotation += 90, this.micrioInstance.camera.setRotation(this.rotation, this.animationDuration)
        }, t.prototype.setupObjectOverlay = function() {
            this.$objectOverlay = this.$container.findByRole("object-overlay"), this.$objectOverlay.addClass("transition-opacity"), this.$micrio.on("mousemove", this.objectMouseMove), this.$micrio.trigger("mousemove"), this.$micrio.on("click", this.objectClick), this.$micrio.one("mousemove", function() {
                this.$micrio.off("click", this.objectClick)
            }.bind(this))
        }, t.prototype.objectMouseMove = function() {
            this.$micrio.hasClass("cursor-hidden") && this.showObjectOverlay(), clearTimeout(this.overlayTimeout), this.overlayTimeout = setTimeout(this.hideObjectOverlay, this.timeoutDuration)
        }, t.prototype.objectClick = function(t) {
            this.$micrio.hasClass("cursor-hidden") ? this.showObjectOverlay() : this.hideObjectOverlay()
        }, t.prototype.showObjectOverlay = function() {
            this.$objectOverlay.removeClass("opacity-0"), this.$micrio.removeClass("cursor-hidden")
        }, t.prototype.hideObjectOverlay = function() {
            this.$container.find('[data-role~="popup-content"]:visible').length > 0 || (this.$objectOverlay.addClass("opacity-0"), this.$micrio.addClass("cursor-hidden"))
        }, t.prototype.setupObjectData = function() {
            this.$objectDataContent = this.$container.findByRole("object-data-content"), this.$objectDataToggle = this.$container.findByRole("object-data-toggle").on("click", this.toggleObjectData), this.$objectDataContent.hide(), this.objectDataVisible = !1, this.$objectDataToggle.length > 0 && (this.objectDataPosition = this.$objectDataToggle.offset().top)
        }, t.prototype.toggleObjectData = function() {
            this.objectDataVisible ? this.hideObjectData() : this.showObjectData()
        }, t.prototype.showObjectData = function() {
            this.objectDataVisible = !0, this.$objectDataContent.slideDown(250), this.$objectDataToggle.addClass("icon-minus").removeClass("icon-plus"), this.$scrollPane.stop().delay(250).animate({
                scrollTop: this.objectDataPosition - 30
            }, 300)
        }, t.prototype.hideObjectData = function() {
            this.objectDataVisible = !1, this.$objectDataContent.slideUp(250), this.$objectDataToggle.addClass("icon-plus").removeClass("icon-minus")
        }, t.prototype.setupCloseButton = function() {
            if (!document.referrer || -1 === document.referrer.search(location.host)) return !1;
            this.$closeButton = this.$container.findByRole("close-button"), this.$closeButton.removeClass("hidden").on("click", function(t) {
                t.preventDefault();
                var e = $(t.target).data("url");
                "" != e ? window.location.href = e : history.back(-1)
            })
        }, t
    }(),
    ArtSetObjectPage = function() {
        "use strict";

        function t(t) {
            this.$container = t, this.$infoButton = new InfoButton(t)
        }
        return t
    }(),
    HomePage = function() {
        "use strict";

        function t(t) {
            _.bindAll(this, "switchToStory", "cleanUp"), this.$container = t, this.$container.on("click.home", '[data-role="story-button"]', this.switchToStory), this.$sidebar = this.$container.find(".home-sidebar"), this.$sponsorLogo = $(".sponsor-logo")
        }
        return t.prototype.switchToStory = function(t) {
            if ("absolute" != this.$sidebar.css("position")) return void(window.location = t.target.href);
            t.preventDefault(), this.$container.off(".home"), this.$container.addClass("home-hidden"), history.pushState(null, null, window.vanGogh.story.storyData.storyUrl), hasTransitionEnd ? this.$sidebar.one(hasTransitionEnd.event, this.cleanUp) : setTimeout(this.cleanUp, 1e3)
        }, t.prototype.cleanUp = function() {
            this.$sidebar.remove(), this.$sponsorLogo.remove()
        }, t
    }(),
    PrintHighlightChildren = function() {
        "use strict";

        function t(t) {
            this.$container = t, this.highlightChild()
        }
        return t.prototype.highlightChild = function() {
            this.$container.findByRole("print-highlight-sibling").on("click", function() {
                this.$trigger = $(this), this.$allBlocks = this.$trigger.nextAllByRole("print-highlight-this"), this.$mainBlock = this.$trigger.nextByRole("print-highlight-this"), this.$allBlocks.removeClass("highlight-on").addClass("highlight-off"), this.$mainBlock.removeClass("highlight-off").addClass("highlight-on")
            }), this.$container.findByRole("print-highlight-parent").on("click", function() {
                this.$trigger = $(this), this.$block = this.$trigger.closestByRole("print-highlight-this"), this.$allBlocks = this.$block.siblings(), this.$allTriggers = this.$allBlocks.findByRole("print-highlight-parent"), this.$allTriggers.removeClass("faded-out").addClass("faded-in"), this.$trigger.removeClass("faded-in").addClass("faded-out"), this.$allBlocks.removeClass("highlight-on").addClass("highlight-off"), this.$block.removeClass("highlight-off").addClass("highlight-on")
            })
        }, t
    }(),
    SearchPage = function() {
        "use strict";

        function t(t) {
            _.bindAll(this, "toggleFacet", "applyFilter", "truncateFacet", "loadNextPage", "toggleFilters", "artistSuggestInit", "toggleTabAbility", "handleShowMore", "clearArtistSuggestInput"), this.$container = t, this.$top = $(document.getElementById("top")), this.$pageHeader = $(".page-header"), this.$pageBody = $(".page-body"), this.$facetsAndResults = $(document).findByRole("facets-and-results"), this.$filters = this.$top.findByRole("filters"), this.$searchResults = this.$top.findByRole("searchresults"), this.$searchResultsWrapper = this.$top.findByRole("search-results-wrapper"), this.$openFilters = this.$container.findByRole("open-filters"), this.$closeFilters = this.$container.findByRole("close-filters"), this.$showMoreButtons = this.$container.findByRole("show-more"), this.$showLessButtons = this.$container.findByRole("show-less"), this.$clearArtistSuggest = this.$container.findByRole("clear-search-filter-input"), this.$openFilters.on("click", this.toggleFilters), this.$closeFilters.on("click", this.toggleFilters), this.$showMoreButtons.on("click", this.handleShowMore), this.$showLessButtons.on("click", this.handleShowLess), this.$clearArtistSuggest.on("click", this.clearArtistSuggestInput), this.$facetsAndResults.findByRole("apply-filter").change(this.applyFilter), this.$facetsAndResults.findByRole("remove-filter").click(this.applyFilter);
            var e = this.$top;
            this.$filters.on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(t) {
                e.hasClass("filters-opening") ? e.removeClass("filters-opening") : e.removeClass("filters-closing")
            }), this.$btn = null, this.setupFacets(), this.$btn = null, this.$container.findByRole("load-more-results").on("click", this.loadNextPage), this.pageScrollTop = 0, this.$window = $(window), this.artistSuggestInit();
            var i = 0,
                n = this;
            $(window).on("resize load", function() {
                var t = n.$window.width();
                i < 1620 && t > 1620 ? n.toggleTabAbility(n.$filters, !0) : i >= 1620 && t < 1620 && !n.$top.hasClass("filters-open") && n.toggleTabAbility(n.$filters, !1), i = t
            })
        }
        return t.prototype.applyFilter = function(e) {
            e.preventDefault();
            var i = encodeURI(e.target.dataset.url),
                n = window.location.pathname + "/filteredresult" + i;
            this.$facetsAndResults.load(n, function() {
                window.history && window.history.pushState({
                    path: i
                }, "", i), (new LazyImages).init();
                var e = $.findByRole("search-page");
                e.length > 0 && (this.searchPage = new t(e, window.facetJson))
            })
        }, t.prototype.removeFilter = function(e) {
            e.preventDefault();
            var i = $(e.currentTarget).attr("data-url"),
                n = window.location.pathname + "/filteredresult" + i;
            this.$facetsAndResults.load(n, function() {
                window.history && window.history.pushState({
                    path: i
                }, "", i), (new LazyImages).init();
                var e = $.findByRole("search-page");
                e.length > 0 && (this.searchPage = new t(e, window.facetJson))
            })
        }, t.prototype.loadNextPage = function(t) {
            this.pageScrollTop = $("#top").scrollTop(), this.$btn = $(t.target), this.$btn.html(this.$btn.attr("data-loading-text")), this.$btn.attr("disabled", "true").addClass("disabled"), this.$btn.parent().addClass("loading-more");
            var e = this.$searchResults[0],
                i = Number(e.dataset.pageSize),
                n = e.dataset.querystring + "&from=" + i,
                s = encodeURI(window.location.pathname + "/pagedresult?" + n),
                a = this;
            $("#searchresults").append($('<div class="list-results" data-role="list-results" />').load(s, function(t, n, s) {
                if ((new LazyImages).init(), i = e.dataset.pageSize = i + $(t).find("li").length, window.history) {
                    var o = window.location.pathname + "?" + e.dataset.querystring + "&pagesize=" + i;
                    window.history.pushState({
                        path: o
                    }, "", o)
                }
                a.$container.findByRole("list-results").last().find("li a.link-teaser").eq(0).focus(), $("#top").scrollTop(a.pageScrollTop), 21 == $(t).find("li").length ? (a.$container.findByRole("load-more-results").on("click", a.loadNextPage), a.$btn.remove()) : $(".load-more-results").remove()
            }))
        }, t.prototype.setupFacets = function() {
            Vue && 0 !== $("[data-role=facets]").length && (this.facetViewModel = new Vue({
                el: '[data-role="facets"]',
                data: {
                    facets: window.facetJson
                },
                methods: {
                    toggle: this.toggleFacet,
                    truncate: this.truncateFacet
                }
            }))
        }, t.prototype.toggleFacet = function(t) {
            if (t.visible) t.visible = !1;
            else {
                var e = 0;
                _.each(this.facetViewModel.$data.facets, function(t) {
                    t.visible && (e = 150), t.visible = !1
                }), setTimeout(function() {
                    t.visible = !0
                }, e)
            }
        }, t.prototype.truncateFacet = function(t) {
            t.truncated = !t.truncated
        }, t.prototype.toggleFilters = function() {
            if (this.$top.hasClass("filters-open")) this.$top.removeClass("filters-open").addClass("filters-closing"), this.$openFilters.attr("aria-expanded", "false"), this.$closeFilters.attr("aria-expanded", "false"), this.toggleTabAbility(this.$filters, !1), this.toggleTabAbility(this.$searchResultsWrapper, !0), this.$openFilters.focus();
            else {
                this.$top.addClass("filters-open").addClass("filters-opening"), this.$openFilters.attr("aria-expanded", "true"), this.$closeFilters.attr("aria-expanded", "true"), this.toggleTabAbility(this.$filters, !0), this.toggleTabAbility(this.$searchResultsWrapper, !1);
                var t = this.$filters.find('[aria-hidden="true"]'),
                    e = this;
                t.each(function() {
                    e.toggleTabAbility(t, !1)
                }), this.$closeFilters.focus()
            }
            return !1
        }, t.prototype.artistSuggestInit = function() {
            var e = window.facetJson,
                i = this;
            $("#artist-suggest-input").autocomplete({
                source: e,
                appendTo: "#artist-suggest-output",
                select: function(e, n) {
                    var s = (n.item.value, encodeURI(n.item.url)),
                        a = window.location.pathname + "/filteredresult" + s;
                    i.$facetsAndResults.load(a, function() {
                        window.history && window.history.pushState({
                            path: s
                        }, "", s), (new LazyImages).init();
                        var e = $.findByRole("search-page");
                        e.length > 0 && (i.searchPage = new t(e, window.facetJson), $("[data-role=artist-filter]").removeClass("hidden"))
                    })
                },
                search: function(t, e) {
                    $("[data-role=artist-filter]").addClass("hidden")
                },
                close: function(t, e) {
                    $("[data-role=artist-filter]").removeClass("hidden")
                }
            }).autocomplete("instance")._renderItem = function(t, e) {
                var i = (e.label, e.value),
                    n = e.docCount,
                    s = '<input type="checkbox" /><label for="">' + i + " <span>(" + n + ")</span></label>";
                return $("<li>").append(s).appendTo(t)
            }
        }, t.prototype.toggleTabAbility = function(t, e) {
            t.attr("aria-hidden", !e);
            var i = e ? 0 : -1,
                n = e ? -1 : 0;
            t.find('a[href], area, button, select, textarea, *[tabindex="0"], *[tabindex="-1"], input:not([type="hidden"])').not("[data-no-tab]").attr("tabindex", i), t.find("[data-tab-inverted]").attr("tabindex", n)
        }, t.prototype.handleShowMore = function(t) {
            $(t.currentTarget).closest("li").first().find(".search-facets").addClass("expanded")
        }, t.prototype.handleShowLess = function(t) {
            $(t.currentTarget).closest("li").first().find(".search-facets").removeClass("expanded")
        }, t.prototype.clearArtistSuggestInput = function(t) {
            this.$top.findByRole("artist-suggest-input").val(""), $("#search-facets-0").removeClass("hidden")
        }, t
    }();
window.console = window.console || {}, console.log = console.log || function() {}, console.warn = console.warn || console.log, console.error = console.error || console.log, jQuery(function(t) {
    FastClick.attach(document.body), window.vanGogh = new VanGogh(t), window.vanGogh.loadModules(), window.vanGogh.initStory(), (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) && t(document.body).addClass("its-IE11")
});
var VanGogh = function() {
    "use strict";

    function t(e) {
        this.storyBreakpoint = 800, this.currentSize = 0, this.hasStory = !1, this.translations = new Translations, this.lazyImages = new LazyImages, this.lazyImages.init(), this.popups = e.findByRole("popup").map(function(t, i) {
            return new Popup(e(i))
        }), this.panelToggles = e.findByRole("panel-toggle").map(function(t, i) {
            return new PanelToggle(e(i))
        }), this.pods = e.findByRole("print-on-demand").map(function(t, i) {
            return new Pod(e(i))
        }), this.education = new Education, this.clearInputs = e.findByRole("clear-input").map(function(t, i) {
            return new ClearInput(e(i))
        }), this.datepickers = e.findByRole("datepicker").map(function(t, i) {
            return new Datepicker(e(i))
        }), this.cookieLaw = new CookieLaw, e(window).load(function() {
            t.prototype.websiteLoaded(), window.vanGogh.hasStory && e(window).on("resize", _.debounce(function() {
                var t = window.vanGogh.currentSize,
                    i = window.vanGogh.storyBreakpoint;
                window.vanGogh.currentSize = e(window).width(), (t <= i && window.vanGogh.currentSize > i || t > i && window.vanGogh.currentSize <= i) && location.reload()
            }, 100))
        })
    }
    return t.prototype.initStory = function() {
        var t = $.findByRole("story-mobile"),
            e = $.findByRole("story");
        window.vanGogh.hasStory = t.length > 0 || e.length > 0;
        var i = $.findByRole("home-page").length > 0,
            n = $(window).width();
        window.vanGogh.currentSize = n, t.length > 0 && n <= window.vanGogh.storyBreakpoint ? ($("html").addClass("has-mobile"), t.removeClass("hidden"), e.addClass("hidden"), window.vanGogh.storyMobile = new StoryMobile(t), window.vanGogh.storyMobile.initialise()) : e.length > 0 && (n > window.vanGogh.storyBreakpoint || i) && ($("html").removeClass("has-mobile"), t.addClass("hidden"), e.removeClass("hidden"), window.vanGogh.story = new Story(e), window.vanGogh.story.initialise())
    }, t.prototype.loadModules = function() {
        this.navigation = new Navigation, $.findByRole("carrousel-wrapper").length > 0 && (this.carrousel = new Carrousel);
        var t = $.findByRole("home-page");
        t.length > 0 && (this.homePage = new HomePage(t));
        var e = $.findByRole("art-object-page");
        e.length > 0 && (this.artObjectPage = new ArtobjectPage(e));
        var i = $.findByRole("set-overview-page");
        i.length > 0 && (this.artSetObjectPage = new ArtSetObjectPage(i));
        var n = $.findByRole("search-page");
        n.length > 0 && (this.searchPage = new SearchPage(n, window.facetJson));
        var s = $.findByRole("print-highlight-children");
        s.length > 0 && (this.printHighlightChildren = new PrintHighlightChildren(s)), this.printCornerGrids = $.findByRole("print-corner-grid").map(function(t, e) {
            return new PrintCornerGrid($(e))
        }), this.printListGrids = $.findByRole("print-list-grid").map(function(t, e) {
            return new PrintListGrid($(e))
        }), this.sharing = $.findByRole("sharing").map(function(t, e) {
            return new Sharing($(e))
        })
    }, t.prototype.websiteLoaded = function() {
        $("body").removeClass("loading"), $(document).trigger("vgm-ready")
    }, t
}();