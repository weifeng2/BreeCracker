/**
 * 
 * 主要参数都是使用rsa加密，而且publicKey是固定值
 * fingerPrint和fingerPrintDetail需要获取浏览器指纹再使用rsa加密即可
 * loginID和enpassword加密方式一样
 */

var myRsa;

var myfun = function(a, b, c) {
    function d(a, b, c) {
        null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
    }
    function e() {
        return new d(null)
    }
    function f(a, b, c, d, e, f) {
        for (; --f >= 0; ) {
            var g = b * this[a++] + c[d] + e;
            e = Math.floor(g / 67108864),
            c[d++] = 67108863 & g
        }
        return e
    }
    function g(a, b, c, d, e, f) {
        for (var g = 32767 & b, h = b >> 15; --f >= 0; ) {
            var i = 32767 & this[a]
              , j = this[a++] >> 15
              , k = h * i + j * g;
            i = g * i + ((32767 & k) << 15) + c[d] + (1073741823 & e),
            e = (i >>> 30) + (k >>> 15) + h * j + (e >>> 30),
            c[d++] = 1073741823 & i
        }
        return e
    }
    function h(a, b, c, d, e, f) {
        for (var g = 16383 & b, h = b >> 14; --f >= 0; ) {
            var i = 16383 & this[a]
              , j = this[a++] >> 14
              , k = h * i + j * g;
            i = g * i + ((16383 & k) << 14) + c[d] + e,
            e = (i >> 28) + (k >> 14) + h * j,
            c[d++] = 268435455 & i
        }
        return e
    }
    function i(a) {
        return nb.charAt(a)
    }
    function j(a, b) {
        var c = ob[a.charCodeAt(b)];
        return null == c ? -1 : c
    }
    function k(a) {
        for (var b = this.t - 1; b >= 0; --b)
            a[b] = this[b];
        a.t = this.t,
        a.s = this.s
    }
    function l(a) {
        this.t = 1,
        this.s = 0 > a ? -1 : 0,
        a > 0 ? this[0] = a : -1 > a ? this[0] = a + this.DV : this.t = 0
    }
    function m(a) {
        var b = e();
        return b.fromInt(a),
        b
    }
    function n(a, b) {
        var c;
        if (16 == b)
            c = 4;
        else if (8 == b)
            c = 3;
        else if (256 == b)
            c = 8;
        else if (2 == b)
            c = 1;
        else if (32 == b)
            c = 5;
        else {
            if (4 != b)
                return void this.fromRadix(a, b);
            c = 2
        }
        this.t = 0,
        this.s = 0;
        for (var e = a.length, f = !1, g = 0; --e >= 0; ) {
            var h = 8 == c ? 255 & a[e] : j(a, e);
            0 > h ? "-" == a.charAt(e) && (f = !0) : (f = !1,
            0 == g ? this[this.t++] = h : g + c > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - g) - 1) << g,
            this[this.t++] = h >> this.DB - g) : this[this.t - 1] |= h << g,
            g += c,
            g >= this.DB && (g -= this.DB))
        }
        8 == c && 0 != (128 & a[0]) && (this.s = -1,
        g > 0 && (this[this.t - 1] |= (1 << this.DB - g) - 1 << g)),
        this.clamp(),
        f && d.ZERO.subTo(this, this)
    }
    function o() {
        for (var a = this.s & this.DM; this.t > 0 && this[this.t - 1] == a; )
            --this.t
    }
    function p(a) {
        if (this.s < 0)
            return "-" + this.negate().toString(a);
        var b;
        if (16 == a)
            b = 4;
        else if (8 == a)
            b = 3;
        else if (2 == a)
            b = 1;
        else if (32 == a)
            b = 5;
        else {
            if (4 != a)
                return this.toRadix(a);
            b = 2
        }
        var c, d = (1 << b) - 1, e = !1, f = "", g = this.t, h = this.DB - g * this.DB % b;
        if (g-- > 0)
            for (h < this.DB && (c = this[g] >> h) > 0 && (e = !0,
            f = i(c)); g >= 0; )
                b > h ? (c = (this[g] & (1 << h) - 1) << b - h,
                c |= this[--g] >> (h += this.DB - b)) : (c = this[g] >> (h -= b) & d,
                0 >= h && (h += this.DB,
                --g)),
                c > 0 && (e = !0),
                e && (f += i(c));
        return e ? f : "0"
    }
    function q() {
        var a = e();
        return d.ZERO.subTo(this, a),
        a
    }
    function r() {
        return this.s < 0 ? this.negate() : this
    }
    function s(a) {
        var b = this.s - a.s;
        if (0 != b)
            return b;
        var c = this.t;
        if (b = c - a.t,
        0 != b)
            return this.s < 0 ? -b : b;
        for (; --c >= 0; )
            if (0 != (b = this[c] - a[c]))
                return b;
        return 0
    }
    function t(a) {
        var b, c = 1;
        return 0 != (b = a >>> 16) && (a = b,
        c += 16),
        0 != (b = a >> 8) && (a = b,
        c += 8),
        0 != (b = a >> 4) && (a = b,
        c += 4),
        0 != (b = a >> 2) && (a = b,
        c += 2),
        0 != (b = a >> 1) && (a = b,
        c += 1),
        c
    }
    function u() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + t(this[this.t - 1] ^ this.s & this.DM)
    }
    function v(a, b) {
        var c;
        for (c = this.t - 1; c >= 0; --c)
            b[c + a] = this[c];
        for (c = a - 1; c >= 0; --c)
            b[c] = 0;
        b.t = this.t + a,
        b.s = this.s
    }
    function w(a, b) {
        for (var c = a; c < this.t; ++c)
            b[c - a] = this[c];
        b.t = Math.max(this.t - a, 0),
        b.s = this.s
    }
    function x(a, b) {
        var c, d = a % this.DB, e = this.DB - d, f = (1 << e) - 1, g = Math.floor(a / this.DB), h = this.s << d & this.DM;
        for (c = this.t - 1; c >= 0; --c)
            b[c + g + 1] = this[c] >> e | h,
            h = (this[c] & f) << d;
        for (c = g - 1; c >= 0; --c)
            b[c] = 0;
        b[g] = h,
        b.t = this.t + g + 1,
        b.s = this.s,
        b.clamp()
    }
    function y(a, b) {
        b.s = this.s;
        var c = Math.floor(a / this.DB);
        if (c >= this.t)
            return void (b.t = 0);
        var d = a % this.DB
          , e = this.DB - d
          , f = (1 << d) - 1;
        b[0] = this[c] >> d;
        for (var g = c + 1; g < this.t; ++g)
            b[g - c - 1] |= (this[g] & f) << e,
            b[g - c] = this[g] >> d;
        d > 0 && (b[this.t - c - 1] |= (this.s & f) << e),
        b.t = this.t - c,
        b.clamp()
    }
    function z(a, b) {
        for (var c = 0, d = 0, e = Math.min(a.t, this.t); e > c; )
            d += this[c] - a[c],
            b[c++] = d & this.DM,
            d >>= this.DB;
        if (a.t < this.t) {
            for (d -= a.s; c < this.t; )
                d += this[c],
                b[c++] = d & this.DM,
                d >>= this.DB;
            d += this.s
        } else {
            for (d += this.s; c < a.t; )
                d -= a[c],
                b[c++] = d & this.DM,
                d >>= this.DB;
            d -= a.s
        }
        b.s = 0 > d ? -1 : 0,
        -1 > d ? b[c++] = this.DV + d : d > 0 && (b[c++] = d),
        b.t = c,
        b.clamp()
    }
    function A(a, b) {
        var c = this.abs()
          , e = a.abs()
          , f = c.t;
        for (b.t = f + e.t; --f >= 0; )
            b[f] = 0;
        for (f = 0; f < e.t; ++f)
            b[f + c.t] = c.am(0, e[f], b, f, 0, c.t);
        b.s = 0,
        b.clamp(),
        this.s != a.s && d.ZERO.subTo(b, b)
    }
    function B(a) {
        for (var b = this.abs(), c = a.t = 2 * b.t; --c >= 0; )
            a[c] = 0;
        for (c = 0; c < b.t - 1; ++c) {
            var d = b.am(c, b[c], a, 2 * c, 0, 1);
            (a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV && (a[c + b.t] -= b.DV,
            a[c + b.t + 1] = 1)
        }
        a.t > 0 && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1)),
        a.s = 0,
        a.clamp()
    }
    function C(a, b, c) {
        var f = a.abs();
        if (!(f.t <= 0)) {
            var g = this.abs();
            if (g.t < f.t)
                return null != b && b.fromInt(0),
                void (null != c && this.copyTo(c));
            null == c && (c = e());
            var h = e()
              , i = this.s
              , j = a.s
              , k = this.DB - t(f[f.t - 1]);
            k > 0 ? (f.lShiftTo(k, h),
            g.lShiftTo(k, c)) : (f.copyTo(h),
            g.copyTo(c));
            var l = h.t
              , m = h[l - 1];
            if (0 != m) {
                var n = m * (1 << this.F1) + (l > 1 ? h[l - 2] >> this.F2 : 0)
                  , o = this.FV / n
                  , p = (1 << this.F1) / n
                  , q = 1 << this.F2
                  , r = c.t
                  , s = r - l
                  , u = null == b ? e() : b;
                for (h.dlShiftTo(s, u),
                c.compareTo(u) >= 0 && (c[c.t++] = 1,
                c.subTo(u, c)),
                d.ONE.dlShiftTo(l, u),
                u.subTo(h, h); h.t < l; )
                    h[h.t++] = 0;
                for (; --s >= 0; ) {
                    var v = c[--r] == m ? this.DM : Math.floor(c[r] * o + (c[r - 1] + q) * p);
                    if ((c[r] += h.am(0, v, c, s, 0, l)) < v)
                        for (h.dlShiftTo(s, u),
                        c.subTo(u, c); c[r] < --v; )
                            c.subTo(u, c)
                }
                null != b && (c.drShiftTo(l, b),
                i != j && d.ZERO.subTo(b, b)),
                c.t = l,
                c.clamp(),
                k > 0 && c.rShiftTo(k, c),
                0 > i && d.ZERO.subTo(c, c)
            }
        }
    }
    function D(a) {
        var b = e();
        return this.abs().divRemTo(a, null, b),
        this.s < 0 && b.compareTo(d.ZERO) > 0 && a.subTo(b, b),
        b
    }
    function E(a) {
        this.m = a
    }
    function F(a) {
        return a.s < 0 || a.compareTo(this.m) >= 0 ? a.mod(this.m) : a
    }
    function G(a) {
        return a
    }
    function H(a) {
        a.divRemTo(this.m, null, a)
    }
    function I(a, b, c) {
        a.multiplyTo(b, c),
        this.reduce(c)
    }
    function J(a, b) {
        a.squareTo(b),
        this.reduce(b)
    }
    function K() {
        if (this.t < 1)
            return 0;
        var a = this[0];
        if (0 == (1 & a))
            return 0;
        var b = 3 & a;
        return b = b * (2 - (15 & a) * b) & 15,
        b = b * (2 - (255 & a) * b) & 255,
        b = b * (2 - ((65535 & a) * b & 65535)) & 65535,
        b = b * (2 - a * b % this.DV) % this.DV,
        b > 0 ? this.DV - b : -b
    }
    function L(a) {
        this.m = a,
        this.mp = a.invDigit(),
        this.mpl = 32767 & this.mp,
        this.mph = this.mp >> 15,
        this.um = (1 << a.DB - 15) - 1,
        this.mt2 = 2 * a.t
    }
    function M(a) {
        var b = e();
        return a.abs().dlShiftTo(this.m.t, b),
        b.divRemTo(this.m, null, b),
        a.s < 0 && b.compareTo(d.ZERO) > 0 && this.m.subTo(b, b),
        b
    }
    function N(a) {
        var b = e();
        return a.copyTo(b),
        this.reduce(b),
        b
    }
    function O(a) {
        for (; a.t <= this.mt2; )
            a[a.t++] = 0;
        for (var b = 0; b < this.m.t; ++b) {
            var c = 32767 & a[b]
              , d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
            for (c = b + this.m.t,
            a[c] += this.m.am(0, d, a, b, 0, this.m.t); a[c] >= a.DV; )
                a[c] -= a.DV,
                a[++c]++
        }
        a.clamp(),
        a.drShiftTo(this.m.t, a),
        a.compareTo(this.m) >= 0 && a.subTo(this.m, a)
    }
    function P(a, b) {
        a.squareTo(b),
        this.reduce(b)
    }
    function Q(a, b, c) {
        a.multiplyTo(b, c),
        this.reduce(c)
    }
    function R() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
    }
    function S(a, b) {
        if (a > 4294967295 || 1 > a)
            return d.ONE;
        var c = e()
          , f = e()
          , g = b.convert(this)
          , h = t(a) - 1;
        for (g.copyTo(c); --h >= 0; )
            if (b.sqrTo(c, f),
            (a & 1 << h) > 0)
                b.mulTo(f, g, c);
            else {
                var i = c;
                c = f,
                f = i
            }
        return b.revert(c)
    }
    function T(a, b) {
        var c;
        return c = 256 > a || b.isEven() ? new E(b) : new L(b),
        this.exp(a, c)
    }
    function U() {
        this.i = 0,
        this.j = 0,
        this.S = new Array
    }
    function V(a) {
        var b, c, d;
        for (b = 0; 256 > b; ++b)
            this.S[b] = b;
        for (c = 0,
        b = 0; 256 > b; ++b)
            c = c + this.S[b] + a[b % a.length] & 255,
            d = this.S[b],
            this.S[b] = this.S[c],
            this.S[c] = d;
        this.i = 0,
        this.j = 0
    }
    function W() {
        var a;
        return this.i = this.i + 1 & 255,
        this.j = this.j + this.S[this.i] & 255,
        a = this.S[this.i],
        this.S[this.i] = this.S[this.j],
        this.S[this.j] = a,
        this.S[a + this.S[this.i] & 255]
    }
    function X() {
        return new U
    }
    function Y(a) {
        qb[rb++] ^= 255 & a,
        qb[rb++] ^= a >> 8 & 255,
        qb[rb++] ^= a >> 16 & 255,
        qb[rb++] ^= a >> 24 & 255,
        rb >= sb && (rb -= sb)
    }
    function Z() {
        Y((new Date).getTime())
    }
    function $() {
        if (null == pb) {
            for (Z(),
            pb = X(),
            pb.init(qb),
            rb = 0; rb < qb.length; ++rb)
                qb[rb] = 0;
            rb = 0
        }
        return pb.next()
    }
    function _(a) {
        var b;
        for (b = 0; b < a.length; ++b)
            a[b] = $()
    }
    function ab() {}
    function bb(a, b) {
        return new d(a,b)
    }
    function cb(a, b) {
        if (b < a.length + 11)
            return alert("Message too long for RSA"),
            null;
        for (var c = new Array, e = a.length - 1; e >= 0 && b > 0; ) {
            var f = a.charCodeAt(e--);
            128 > f ? c[--b] = f : f > 127 && 2048 > f ? (c[--b] = 63 & f | 128,
            c[--b] = f >> 6 | 192) : (c[--b] = 63 & f | 128,
            c[--b] = f >> 6 & 63 | 128,
            c[--b] = f >> 12 | 224)
        }
        c[--b] = 0;
        for (var g = new ab, h = new Array; b > 2; ) {
            for (h[0] = 0; 0 == h[0]; )
                g.nextBytes(h);
            c[--b] = h[0]
        }
        return c[--b] = 2,
        c[--b] = 0,
        new d(c)
    }
    function db() {
        this.n = null,
        this.e = 0,
        this.d = null,
        this.p = null,
        this.q = null,
        this.dmp1 = null,
        this.dmq1 = null,
        this.coeff = null
    }
    function eb(a, b) {
        null != a && null != b && a.length > 0 && b.length > 0 ? (this.n = bb(a, 16),
        this.e = parseInt(b, 16)) : alert("网络异常，请点击登录重试")
    }
    function fb(a) {
        return a.modPowInt(this.e, this.n)
    }
    function gb(a) {
        var b = cb(a, this.n.bitLength() + 7 >> 3);
        if (null == b)
            return null;
        var c = this.doPublic(b);
        if (null == c)
            return null;
        var d = c.toString(16);
        return 0 == (1 & d.length) ? d : "0" + d
    }
    var hb, ib = 0xdeadbeefcafe, jb = 15715070 == (16777215 & ib);
    jb && "Microsoft Internet Explorer" == navigator.appName ? (d.prototype.am = g,
    hb = 30) : jb && "Netscape" != navigator.appName ? (d.prototype.am = f,
    hb = 26) : (d.prototype.am = h,
    hb = 28),
    d.prototype.DB = hb,
    d.prototype.DM = (1 << hb) - 1,
    d.prototype.DV = 1 << hb;
    var kb = 52;
    d.prototype.FV = Math.pow(2, kb),
    d.prototype.F1 = kb - hb,
    d.prototype.F2 = 2 * hb - kb;
    var lb, mb, nb = "0123456789abcdefghijklmnopqrstuvwxyz", ob = new Array;
    for (lb = "0".charCodeAt(0),
    mb = 0; 9 >= mb; ++mb)
        ob[lb++] = mb;
    for (lb = "a".charCodeAt(0),
    mb = 10; 36 > mb; ++mb)
        ob[lb++] = mb;
    for (lb = "A".charCodeAt(0),
    mb = 10; 36 > mb; ++mb)
        ob[lb++] = mb;
    E.prototype.convert = F,
    E.prototype.revert = G,
    E.prototype.reduce = H,
    E.prototype.mulTo = I,
    E.prototype.sqrTo = J,
    L.prototype.convert = M,
    L.prototype.revert = N,
    L.prototype.reduce = O,
    L.prototype.mulTo = Q,
    L.prototype.sqrTo = P,
    d.prototype.copyTo = k,
    d.prototype.fromInt = l,
    d.prototype.fromString = n,
    d.prototype.clamp = o,
    d.prototype.dlShiftTo = v,
    d.prototype.drShiftTo = w,
    d.prototype.lShiftTo = x,
    d.prototype.rShiftTo = y,
    d.prototype.subTo = z,
    d.prototype.multiplyTo = A,
    d.prototype.squareTo = B,
    d.prototype.divRemTo = C,
    d.prototype.invDigit = K,
    d.prototype.isEven = R,
    d.prototype.exp = S,
    d.prototype.toString = p,
    d.prototype.negate = q,
    d.prototype.abs = r,
    d.prototype.compareTo = s,
    d.prototype.bitLength = u,
    d.prototype.mod = D,
    d.prototype.modPowInt = T,
    d.ZERO = m(0),
    d.ONE = m(1),
    U.prototype.init = V,
    U.prototype.next = W;
    var pb, qb, rb, sb = 256;
    if (null == qb) {
        qb = new Array,
        rb = 0;
        var tb;
        if (window.crypto && window.crypto.getRandomValues) {
            var ub = new Uint8Array(32);
            for (window.crypto.getRandomValues(ub),
            tb = 0; 32 > tb; ++tb)
                qb[rb++] = ub[tb]
        }
        if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto) {
            var vb = window.crypto.random(32);
            for (tb = 0; tb < vb.length; ++tb)
                qb[rb++] = 255 & vb.charCodeAt(tb)
        }
        for (; sb > rb; )
            tb = Math.floor(65536 * Math.random()),
            qb[rb++] = tb >>> 8,
            qb[rb++] = 255 & tb;
        rb = 0,
        Z()
    }
    ab.prototype.nextBytes = _,
    db.prototype.doPublic = fb,
    db.prototype.setPublic = eb,
    db.prototype.encrypt = gb,
    c.exports = {
        RSAKey: db
    }

    myRsa = db;
}

function q(a) {
    function c(b) {
        return k(b, a.uri)
    }
    function d(a) {
        return s(eb[c(a)])
    }
    if (!a)
        return null;
    if (a.status >= mb)
        return a.exports;
    a.status = mb,
    d.resolve = c,
    d.async = function(a, b) {
        return l(c(a), b),
        d
    }
    ;
    var e = a.factory
      , e = B(e) ? e(d, a.exports = {}, a) : e;
    return a.exports = e === b ? a.exports : e,
    a.status = nb,
    a.exports
}


function s(a) {
    var b = q(a);
    return null === b && (!a || !_.test(a.uri)) && E("error", a),
    b
}

var aa = function d(a) {
    return s(eb[c(a)])
}


var bb = {};
var cc = {};

cc.dependencies = [];
cc.exports = {};
cc.factory = myfun;
cc.id = 'lib/rsa/rsa';
cc.status = 4;
cc.uri = "https://passport.migu.cn/js/lib/rsa/rsa.js?v=miguidmp_50pV7.2.1";


myfun(aa,bb,cc);


//上面是初始化ras相关内容，基本是复制过来的，如果根据调用位置进行缺啥补啥，那累的很，还是看清RSA初始化流程，根据流程初始化即可。


//下面开始解析fingerPrint和fingerPrintDetail这两个参数

var myPrint = function(a, b, c) {//这块代码整理复制过来的，缺哪补哪里太费劲了
    !function(a, b, d) {
        "use strict";
        "function" == typeof window.define && window.define.amd ? window.define(d) : "undefined" != typeof c && c.exports ? c.exports = d() : b.exports ? b.exports = d() : b[a] = d()
    }("Fingerprint2", this, function() {
        "use strict";
        var a = function(b) {
            if (!(this instanceof a))
                return new a(b);
            var c = {
                swfContainerId: "fingerprintjs2",
                swfPath: "flash/compiled/FontList.swf",
                detectScreenOrientation: !0,
                sortPluginsFor: [/palemoon/i],
                userDefinedFonts: []
            };
            this.options = this.extend(b, c),
            this.nativeForEach = Array.prototype.forEach,
            this.nativeMap = Array.prototype.map
        };
        return a.prototype = {
            extend: function(a, b) {
                if (null == a)
                    return b;
                for (var c in a)
                    null != a[c] && b[c] !== a[c] && (b[c] = a[c]);
                return b
            },
            get: function(a) {
                var b = this
                  , c = {
                    data: [],
                    addPreprocessedComponent: function(a) {
                        var c = a.value;
                        "function" == typeof b.options.preprocessor && (c = b.options.preprocessor(a.key, c)),
                        this.data.push({
                            key: a.key,
                            value: c
                        })
                    }
                };
                c = this.userAgentKey(c),
                c = this.languageKey(c),
                c = this.colorDepthKey(c),
                c = this.pixelRatioKey(c),
                c = this.hardwareConcurrencyKey(c),
                c = this.screenResolutionKey(c),
                c = this.availableScreenResolutionKey(c),
                c = this.timezoneOffsetKey(c),
                c = this.sessionStorageKey(c),
                c = this.localStorageKey(c),
                c = this.indexedDbKey(c),
                c = this.addBehaviorKey(c),
                c = this.openDatabaseKey(c),
                c = this.cpuClassKey(c),
                c = this.platformKey(c),
                c = this.doNotTrackKey(c),
                c = this.pluginsKey(c),
                c = this.canvasKey(c),
                c = this.webglKey(c),
                c = this.webglVendorAndRendererKey(c),
                c = this.adBlockKey(c),
                c = this.hasLiedLanguagesKey(c),
                c = this.hasLiedResolutionKey(c),
                c = this.hasLiedOsKey(c),
                c = this.hasLiedBrowserKey(c),
                c = this.touchSupportKey(c),
                c = this.customEntropyFunction(c),
                this.fontsKey(c, function(c) {
                    var d = [];
                    b.each(c.data, function(a) {
                        var b = a.value;
                        null !== a.value && "undefined" != typeof a.value.join && (b = a.value.join(";")),
                        d.push(b)
                    });
                    var e = b.x64hash128(d.join("~~~"), 31);
                    return a(e, c.data)
                })
            },
            customEntropyFunction: function(a) {
                return "function" == typeof this.options.customFunction && a.addPreprocessedComponent({
                    key: "custom",
                    value: this.options.customFunction()
                }),
                a
            },
            userAgentKey: function(a) {
                return this.options.excludeUserAgent || a.addPreprocessedComponent({
                    key: "user_agent",
                    value: this.getUserAgent()
                }),
                a
            },
            getUserAgent: function() {
                return navigator.userAgent
            },
            languageKey: function(a) {
                return this.options.excludeLanguage || a.addPreprocessedComponent({
                    key: "language",
                    value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
                }),
                a
            },
            colorDepthKey: function(a) {
                return this.options.excludeColorDepth || a.addPreprocessedComponent({
                    key: "color_depth",
                    value: window.screen.colorDepth || -1
                }),
                a
            },
            pixelRatioKey: function(a) {
                return this.options.excludePixelRatio || a.addPreprocessedComponent({
                    key: "pixel_ratio",
                    value: this.getPixelRatio()
                }),
                a
            },
            getPixelRatio: function() {
                return window.devicePixelRatio || ""
            },
            screenResolutionKey: function(a) {
                return this.options.excludeScreenResolution ? a : this.getScreenResolution(a)
            },
            getScreenResolution: function(a) {
                var b;
                return b = this.options.detectScreenOrientation && window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height],
                "undefined" != typeof b && a.addPreprocessedComponent({
                    key: "resolution",
                    value: b
                }),
                a
            },
            availableScreenResolutionKey: function(a) {
                return this.options.excludeAvailableScreenResolution ? a : this.getAvailableScreenResolution(a)
            },
            getAvailableScreenResolution: function(a) {
                var b;
                return window.screen.availWidth && window.screen.availHeight && (b = this.options.detectScreenOrientation ? window.screen.availHeight > window.screen.availWidth ? [window.screen.availHeight, window.screen.availWidth] : [window.screen.availWidth, window.screen.availHeight] : [window.screen.availHeight, window.screen.availWidth]),
                "undefined" != typeof b && a.addPreprocessedComponent({
                    key: "available_resolution",
                    value: b
                }),
                a
            },
            timezoneOffsetKey: function(a) {
                return this.options.excludeTimezoneOffset || a.addPreprocessedComponent({
                    key: "timezone_offset",
                    value: (new Date).getTimezoneOffset()
                }),
                a
            },
            sessionStorageKey: function(a) {
                return !this.options.excludeSessionStorage && this.hasSessionStorage() && a.addPreprocessedComponent({
                    key: "session_storage",
                    value: 1
                }),
                a
            },
            localStorageKey: function(a) {
                return !this.options.excludeSessionStorage && this.hasLocalStorage() && a.addPreprocessedComponent({
                    key: "local_storage",
                    value: 1
                }),
                a
            },
            indexedDbKey: function(a) {
                return !this.options.excludeIndexedDB && this.hasIndexedDB() && a.addPreprocessedComponent({
                    key: "indexed_db",
                    value: 1
                }),
                a
            },
            addBehaviorKey: function(a) {
                return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && a.addPreprocessedComponent({
                    key: "add_behavior",
                    value: 1
                }),
                a
            },
            openDatabaseKey: function(a) {
                return !this.options.excludeOpenDatabase && window.openDatabase && a.addPreprocessedComponent({
                    key: "open_database",
                    value: 1
                }),
                a
            },
            cpuClassKey: function(a) {
                return this.options.excludeCpuClass || a.addPreprocessedComponent({
                    key: "cpu_class",
                    value: this.getNavigatorCpuClass()
                }),
                a
            },
            platformKey: function(a) {
                return this.options.excludePlatform || a.addPreprocessedComponent({
                    key: "navigator_platform",
                    value: this.getNavigatorPlatform()
                }),
                a
            },
            doNotTrackKey: function(a) {
                return this.options.excludeDoNotTrack || a.addPreprocessedComponent({
                    key: "do_not_track",
                    value: this.getDoNotTrack()
                }),
                a
            },
            canvasKey: function(a) {
                return !this.options.excludeCanvas && this.isCanvasSupported() && a.addPreprocessedComponent({
                    key: "canvas",
                    value: this.getCanvasFp()
                }),
                a
            },
            webglKey: function(a) {
                return !this.options.excludeWebGL && this.isWebGlSupported() && a.addPreprocessedComponent({
                    key: "webgl",
                    value: this.getWebglFp()
                }),
                a
            },
            webglVendorAndRendererKey: function(a) {
                return !this.options.excludeWebGLVendorAndRenderer && this.isWebGlSupported() && a.addPreprocessedComponent({
                    key: "webgl_vendor",
                    value: this.getWebglVendorAndRenderer()
                }),
                a
            },
            adBlockKey: function(a) {
                return this.options.excludeAdBlock || a.addPreprocessedComponent({
                    key: "adblock",
                    value: this.getAdBlock()
                }),
                a
            },
            hasLiedLanguagesKey: function(a) {
                return this.options.excludeHasLiedLanguages || a.addPreprocessedComponent({
                    key: "has_lied_languages",
                    value: this.getHasLiedLanguages()
                }),
                a
            },
            hasLiedResolutionKey: function(a) {
                return this.options.excludeHasLiedResolution || a.addPreprocessedComponent({
                    key: "has_lied_resolution",
                    value: this.getHasLiedResolution()
                }),
                a
            },
            hasLiedOsKey: function(a) {
                return this.options.excludeHasLiedOs || a.addPreprocessedComponent({
                    key: "has_lied_os",
                    value: this.getHasLiedOs()
                }),
                a
            },
            hasLiedBrowserKey: function(a) {
                return this.options.excludeHasLiedBrowser || a.addPreprocessedComponent({
                    key: "has_lied_browser",
                    value: this.getHasLiedBrowser()
                }),
                a
            },
            fontsKey: function(a, b) {
                return this.options.excludeJsFonts ? this.flashFontsKey(a, b) : this.jsFontsKey(a, b)
            },
            flashFontsKey: function(a, b) {
                return this.options.excludeFlashFonts ? b(a) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? "undefined" == typeof this.options.swfPath ? b(a) : void this.loadSwfAndDetectFonts(function(c) {
                    a.addPreprocessedComponent({
                        key: "swf_fonts",
                        value: c.join(";")
                    }),
                    b(a)
                }) : b(a)
            },
            jsFontsKey: function(a, b) {
                var c = this;
                return setTimeout(function() {
                    var d = ["monospace", "sans-serif", "serif"]
                      , e = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"]
                      , f = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                    c.options.extendedJsFonts && (e = e.concat(f)),
                    e = e.concat(c.options.userDefinedFonts);
                    var g = "mmmmmmmmmmlli"
                      , h = "72px"
                      , i = document.getElementsByTagName("body")[0]
                      , j = document.createElement("div")
                      , k = document.createElement("div")
                      , l = {}
                      , m = {}
                      , n = function() {
                        var a = document.createElement("span");
                        return a.style.position = "absolute",
                        a.style.left = "-9999px",
                        a.style.fontSize = h,
                        a.style.lineHeight = "normal",
                        a.innerHTML = g,
                        a
                    }
                      , o = function(a, b) {
                        var c = n();
                        return c.style.fontFamily = "'" + a + "'," + b,
                        c
                    }
                      , p = function() {
                        for (var a = [], b = 0, c = d.length; c > b; b++) {
                            var e = n();
                            e.style.fontFamily = d[b],
                            j.appendChild(e),
                            a.push(e)
                        }
                        return a
                    }
                      , q = function() {
                        for (var a = {}, b = 0, c = e.length; c > b; b++) {
                            for (var f = [], g = 0, h = d.length; h > g; g++) {
                                var i = o(e[b], d[g]);
                                k.appendChild(i),
                                f.push(i)
                            }
                            a[e[b]] = f
                        }
                        return a
                    }
                      , r = function(a) {
                        for (var b = !1, c = 0; c < d.length; c++)
                            if (b = a[c].offsetWidth !== l[d[c]] || a[c].offsetHeight !== m[d[c]])
                                return b;
                        return b
                    }
                      , s = p();
                    i.appendChild(j);
                    for (var t = 0, u = d.length; u > t; t++)
                        l[d[t]] = s[t].offsetWidth,
                        m[d[t]] = s[t].offsetHeight;
                    var v = q();
                    i.appendChild(k);
                    for (var w = [], x = 0, y = e.length; y > x; x++)
                        r(v[e[x]]) && w.push(e[x]);
                    i.removeChild(k),
                    i.removeChild(j),
                    a.addPreprocessedComponent({
                        key: "js_fonts",
                        value: w
                    }),
                    b(a)
                }, 1)
            },
            pluginsKey: function(a) {
                return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || a.addPreprocessedComponent({
                    key: "ie_plugins",
                    value: this.getIEPlugins()
                }) : a.addPreprocessedComponent({
                    key: "regular_plugins",
                    value: this.getRegularPlugins()
                })),
                a
            },
            getRegularPlugins: function() {
                for (var a = [], b = 0, c = navigator.plugins.length; c > b; b++)
                    a.push(navigator.plugins[b]);
                return this.pluginsShouldBeSorted() && (a = a.sort(function(a, b) {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                })),
                this.map(a, function(a) {
                    var b = this.map(a, function(a) {
                        return [a.type, a.suffixes].join("~")
                    }).join(",");
                    return [a.name, a.description, b].join("::")
                }, this)
            },
            getIEPlugins: function() {
                var a = [];
                if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject"in window) {
                    var b = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                    a = this.map(b, function(a) {
                        try {
                            return new window.ActiveXObject(a),
                            a
                        } catch (b) {
                            return null
                        }
                    })
                }
                return navigator.plugins && (a = a.concat(this.getRegularPlugins())),
                a
            },
            pluginsShouldBeSorted: function() {
                for (var a = !1, b = 0, c = this.options.sortPluginsFor.length; c > b; b++) {
                    var d = this.options.sortPluginsFor[b];
                    if (navigator.userAgent.match(d)) {
                        a = !0;
                        break
                    }
                }
                return a
            },
            touchSupportKey: function(a) {
                return this.options.excludeTouchSupport || a.addPreprocessedComponent({
                    key: "touch_support",
                    value: this.getTouchSupport()
                }),
                a
            },
            hardwareConcurrencyKey: function(a) {
                return this.options.excludeHardwareConcurrency || a.addPreprocessedComponent({
                    key: "hardware_concurrency",
                    value: this.getHardwareConcurrency()
                }),
                a
            },
            hasSessionStorage: function() {
                try {
                    return !!window.sessionStorage
                } catch (a) {
                    return !0
                }
            },
            hasLocalStorage: function() {
                try {
                    return !!window.localStorage
                } catch (a) {
                    return !0
                }
            },
            hasIndexedDB: function() {
                try {
                    return !!window.indexedDB
                } catch (a) {
                    return !0
                }
            },
            getHardwareConcurrency: function() {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown"
            },
            getNavigatorCpuClass: function() {
                return navigator.cpuClass ? navigator.cpuClass : "unknown"
            },
            getNavigatorPlatform: function() {
                return navigator.platform ? navigator.platform : "unknown"
            },
            getDoNotTrack: function() {
                return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown"
            },
            getTouchSupport: function() {
                var a = 0
                  , b = !1;
                "undefined" != typeof navigator.maxTouchPoints ? a = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (a = navigator.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"),
                    b = !0
                } catch (c) {}
                var d = "ontouchstart"in window;
                return [a, b, d]
            },
            getCanvasFp: function() {
                var a = []
                  , b = document.createElement("canvas");
                b.width = 2e3,
                b.height = 200,
                b.style.display = "inline";
                var c = b.getContext("2d");
                return c.rect(0, 0, 10, 10),
                c.rect(2, 2, 6, 6),
                a.push("canvas winding:" + (c.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no")),
                c.textBaseline = "alphabetic",
                c.fillStyle = "#f60",
                c.fillRect(125, 1, 62, 20),
                c.fillStyle = "#069",
                c.font = this.options.dontUseFakeFontInCanvas ? "11pt Arial" : "11pt no-real-font-123",
                c.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
                c.fillStyle = "rgba(102, 204, 0, 0.2)",
                c.font = "18pt Arial",
                c.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
                c.globalCompositeOperation = "multiply",
                c.fillStyle = "rgb(255,0,255)",
                c.beginPath(),
                c.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                c.closePath(),
                c.fill(),
                c.fillStyle = "rgb(0,255,255)",
                c.beginPath(),
                c.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                c.closePath(),
                c.fill(),
                c.fillStyle = "rgb(255,255,0)",
                c.beginPath(),
                c.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                c.closePath(),
                c.fill(),
                c.fillStyle = "rgb(255,0,255)",
                c.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                c.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                c.fill("evenodd"),
                a.push("canvas fp:" + b.toDataURL()),
                a.join("~")
            },
            getWebglFp: function() {
                var a, b = function(b) {
                    return a.clearColor(0, 0, 0, 1),
                    a.enable(a.DEPTH_TEST),
                    a.depthFunc(a.LEQUAL),
                    a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
                    "[" + b[0] + ", " + b[1] + "]"
                }, c = function(a) {
                    var b = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    if (b) {
                        var c = a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                        return 0 === c && (c = 2),
                        c
                    }
                    return null
                };
                if (a = this.getWebglCanvas(),
                !a)
                    return null;
                var d = []
                  , e = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
                  , f = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
                  , g = a.createBuffer();
                a.bindBuffer(a.ARRAY_BUFFER, g);
                var h = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                a.bufferData(a.ARRAY_BUFFER, h, a.STATIC_DRAW),
                g.itemSize = 3,
                g.numItems = 3;
                var i = a.createProgram()
                  , j = a.createShader(a.VERTEX_SHADER);
                a.shaderSource(j, e),
                a.compileShader(j);
                var k = a.createShader(a.FRAGMENT_SHADER);
                a.shaderSource(k, f),
                a.compileShader(k),
                a.attachShader(i, j),
                a.attachShader(i, k),
                a.linkProgram(i),
                a.useProgram(i),
                i.vertexPosAttrib = a.getAttribLocation(i, "attrVertex"),
                i.offsetUniform = a.getUniformLocation(i, "uniformOffset"),
                a.enableVertexAttribArray(i.vertexPosArray),
                a.vertexAttribPointer(i.vertexPosAttrib, g.itemSize, a.FLOAT, !1, 0, 0),
                a.uniform2f(i.offsetUniform, 1, 1),
                a.drawArrays(a.TRIANGLE_STRIP, 0, g.numItems),
                null != a.canvas && d.push(a.canvas.toDataURL()),
                d.push("extensions:" + a.getSupportedExtensions().join(";")),
                d.push("webgl aliased line width range:" + b(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE))),
                d.push("webgl aliased point size range:" + b(a.getParameter(a.ALIASED_POINT_SIZE_RANGE))),
                d.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS)),
                d.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no")),
                d.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS)),
                d.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS)),
                d.push("webgl green bits:" + a.getParameter(a.GREEN_BITS)),
                d.push("webgl max anisotropy:" + c(a)),
                d.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
                d.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)),
                d.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS)),
                d.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE)),
                d.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)),
                d.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE)),
                d.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS)),
                d.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS)),
                d.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
                d.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS)),
                d.push("webgl max viewport dims:" + b(a.getParameter(a.MAX_VIEWPORT_DIMS))),
                d.push("webgl red bits:" + a.getParameter(a.RED_BITS)),
                d.push("webgl renderer:" + a.getParameter(a.RENDERER)),
                d.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION)),
                d.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS)),
                d.push("webgl vendor:" + a.getParameter(a.VENDOR)),
                d.push("webgl version:" + a.getParameter(a.VERSION));
                try {
                    var l = a.getExtension("WEBGL_debug_renderer_info");
                    l && (d.push("webgl unmasked vendor:" + a.getParameter(l.UNMASKED_VENDOR_WEBGL)),
                    d.push("webgl unmasked renderer:" + a.getParameter(l.UNMASKED_RENDERER_WEBGL)))
                } catch (m) {}
                return a.getShaderPrecisionFormat ? (d.push("webgl vertex shader high float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision),
                d.push("webgl vertex shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin),
                d.push("webgl vertex shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax),
                d.push("webgl vertex shader medium float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision),
                d.push("webgl vertex shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin),
                d.push("webgl vertex shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax),
                d.push("webgl vertex shader low float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision),
                d.push("webgl vertex shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin),
                d.push("webgl vertex shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax),
                d.push("webgl fragment shader high float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision),
                d.push("webgl fragment shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin),
                d.push("webgl fragment shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax),
                d.push("webgl fragment shader medium float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision),
                d.push("webgl fragment shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin),
                d.push("webgl fragment shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax),
                d.push("webgl fragment shader low float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision),
                d.push("webgl fragment shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin),
                d.push("webgl fragment shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax),
                d.push("webgl vertex shader high int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision),
                d.push("webgl vertex shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin),
                d.push("webgl vertex shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax),
                d.push("webgl vertex shader medium int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision),
                d.push("webgl vertex shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin),
                d.push("webgl vertex shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax),
                d.push("webgl vertex shader low int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision),
                d.push("webgl vertex shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin),
                d.push("webgl vertex shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax),
                d.push("webgl fragment shader high int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision),
                d.push("webgl fragment shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin),
                d.push("webgl fragment shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax),
                d.push("webgl fragment shader medium int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision),
                d.push("webgl fragment shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin),
                d.push("webgl fragment shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax),
                d.push("webgl fragment shader low int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision),
                d.push("webgl fragment shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin),
                d.push("webgl fragment shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax),
                d.join("~")) : d.join("~")
            },
            getWebglVendorAndRenderer: function() {
                try {
                    var a = this.getWebglCanvas()
                      , b = a.getExtension("WEBGL_debug_renderer_info");
                    return a.getParameter(b.UNMASKED_VENDOR_WEBGL) + "~" + a.getParameter(b.UNMASKED_RENDERER_WEBGL)
                } catch (c) {
                    return null
                }
            },
            getAdBlock: function() {
                var a = document.createElement("div");
                a.innerHTML = "&nbsp;",
                a.className = "adsbox";
                var b = !1;
                try {
                    document.body.appendChild(a),
                    b = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
                    document.body.removeChild(a)
                } catch (c) {
                    b = !1
                }
                return b
            },
            getHasLiedLanguages: function() {
                if ("undefined" != typeof navigator.languages)
                    try {
                        var a = navigator.languages[0].substr(0, 2);
                        if (a !== navigator.language.substr(0, 2))
                            return !0
                    } catch (b) {
                        return !0
                    }
                return !1
            },
            getHasLiedResolution: function() {
                return window.screen.width < window.screen.availWidth ? !0 : window.screen.height < window.screen.availHeight ? !0 : !1
            },
            getHasLiedOs: function() {
                var a, b = navigator.userAgent.toLowerCase(), c = navigator.oscpu, d = navigator.platform.toLowerCase();
                a = b.indexOf("windows phone") >= 0 ? "Windows Phone" : b.indexOf("win") >= 0 ? "Windows" : b.indexOf("android") >= 0 ? "Android" : b.indexOf("linux") >= 0 ? "Linux" : b.indexOf("iphone") >= 0 || b.indexOf("ipad") >= 0 ? "iOS" : b.indexOf("mac") >= 0 ? "Mac" : "Other";
                var e;
                if (e = "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? !0 : !1,
                e && "Windows Phone" !== a && "Android" !== a && "iOS" !== a && "Other" !== a)
                    return !0;
                if ("undefined" != typeof c) {
                    if (c = c.toLowerCase(),
                    c.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a)
                        return !0;
                    if (c.indexOf("linux") >= 0 && "Linux" !== a && "Android" !== a)
                        return !0;
                    if (c.indexOf("mac") >= 0 && "Mac" !== a && "iOS" !== a)
                        return !0;
                    if ((-1 === c.indexOf("win") && -1 === c.indexOf("linux") && -1 === c.indexOf("mac")) != ("Other" === a))
                        return !0
                }
                return d.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a ? !0 : (d.indexOf("linux") >= 0 || d.indexOf("android") >= 0 || d.indexOf("pike") >= 0) && "Linux" !== a && "Android" !== a ? !0 : (d.indexOf("mac") >= 0 || d.indexOf("ipad") >= 0 || d.indexOf("ipod") >= 0 || d.indexOf("iphone") >= 0) && "Mac" !== a && "iOS" !== a ? !0 : (-1 === d.indexOf("win") && -1 === d.indexOf("linux") && -1 === d.indexOf("mac")) != ("Other" === a) ? !0 : "undefined" == typeof navigator.plugins && "Windows" !== a && "Windows Phone" !== a ? !0 : !1
            },
            getHasLiedBrowser: function() {
                var a, b = navigator.userAgent.toLowerCase(), c = navigator.productSub;
                if (a = b.indexOf("firefox") >= 0 ? "Firefox" : b.indexOf("opera") >= 0 || b.indexOf("opr") >= 0 ? "Opera" : b.indexOf("chrome") >= 0 ? "Chrome" : b.indexOf("safari") >= 0 ? "Safari" : b.indexOf("trident") >= 0 ? "Internet Explorer" : "Other",
                ("Chrome" === a || "Safari" === a || "Opera" === a) && "20030107" !== c)
                    return !0;
                var d = eval.toString().length;
                if (37 === d && "Safari" !== a && "Firefox" !== a && "Other" !== a)
                    return !0;
                if (39 === d && "Internet Explorer" !== a && "Other" !== a)
                    return !0;
                if (33 === d && "Chrome" !== a && "Opera" !== a && "Other" !== a)
                    return !0;
                var e;
                try {
                    throw "a"
                } catch (f) {
                    try {
                        f.toSource(),
                        e = !0
                    } catch (g) {
                        e = !1
                    }
                }
                return e && "Firefox" !== a && "Other" !== a ? !0 : !1
            },
            isCanvasSupported: function() {
                var a = document.createElement("canvas");
                return !(!a.getContext || !a.getContext("2d"))
            },
            isWebGlSupported: function() {
                if (!this.isCanvasSupported())
                    return !1;
                var a = this.getWebglCanvas();
                return !!window.WebGLRenderingContext && !!a
            },
            isIE: function() {
                return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
            },
            hasSwfObjectLoaded: function() {
                return "undefined" != typeof window.swfobject
            },
            hasMinFlashInstalled: function() {
                return window.swfobject.hasFlashPlayerVersion("9.0.0")
            },
            addFlashDivNode: function() {
                var a = document.createElement("div");
                a.setAttribute("id", this.options.swfContainerId),
                document.body.appendChild(a)
            },
            loadSwfAndDetectFonts: function(a) {
                var b = "___fp_swf_loaded";
                window[b] = function(b) {
                    a(b)
                }
                ;
                var c = this.options.swfContainerId;
                this.addFlashDivNode();
                var d = {
                    onReady: b
                }
                  , e = {
                    allowScriptAccess: "always",
                    menu: "false"
                };
                window.swfobject.embedSWF(this.options.swfPath, c, "1", "1", "9.0.0", !1, d, e, {})
            },
            getWebglCanvas: function() {
                var a = document.createElement("canvas")
                  , b = null;
                try {
                    b = a.getContext("webgl") || a.getContext("experimental-webgl")
                } catch (c) {}
                return b || (b = null),
                b
            },
            each: function(a, b, c) {
                if (null !== a)
                    if (this.nativeForEach && a.forEach === this.nativeForEach)
                        a.forEach(b, c);
                    else if (a.length === +a.length) {
                        for (var d = 0, e = a.length; e > d; d++)
                            if (b.call(c, a[d], d, a) === {})
                                return
                    } else
                        for (var f in a)
                            if (a.hasOwnProperty(f) && b.call(c, a[f], f, a) === {})
                                return
            },
            map: function(a, b, c) {
                var d = [];
                return null == a ? d : this.nativeMap && a.map === this.nativeMap ? a.map(b, c) : (this.each(a, function(a, e, f) {
                    d[d.length] = b.call(c, a, e, f)
                }),
                d)
            },
            x64Add: function(a, b) {
                a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]],
                b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
                var c = [0, 0, 0, 0];
                return c[3] += a[3] + b[3],
                c[2] += c[3] >>> 16,
                c[3] &= 65535,
                c[2] += a[2] + b[2],
                c[1] += c[2] >>> 16,
                c[2] &= 65535,
                c[1] += a[1] + b[1],
                c[0] += c[1] >>> 16,
                c[1] &= 65535,
                c[0] += a[0] + b[0],
                c[0] &= 65535,
                [c[0] << 16 | c[1], c[2] << 16 | c[3]]
            },
            x64Multiply: function(a, b) {
                a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]],
                b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
                var c = [0, 0, 0, 0];
                return c[3] += a[3] * b[3],
                c[2] += c[3] >>> 16,
                c[3] &= 65535,
                c[2] += a[2] * b[3],
                c[1] += c[2] >>> 16,
                c[2] &= 65535,
                c[2] += a[3] * b[2],
                c[1] += c[2] >>> 16,
                c[2] &= 65535,
                c[1] += a[1] * b[3],
                c[0] += c[1] >>> 16,
                c[1] &= 65535,
                c[1] += a[2] * b[2],
                c[0] += c[1] >>> 16,
                c[1] &= 65535,
                c[1] += a[3] * b[1],
                c[0] += c[1] >>> 16,
                c[1] &= 65535,
                c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0],
                c[0] &= 65535,
                [c[0] << 16 | c[1], c[2] << 16 | c[3]]
            },
            x64Rotl: function(a, b) {
                return b %= 64,
                32 === b ? [a[1], a[0]] : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b] : (b -= 32,
                [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b])
            },
            x64LeftShift: function(a, b) {
                return b %= 64,
                0 === b ? a : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32, 0]
            },
            x64Xor: function(a, b) {
                return [a[0] ^ b[0], a[1] ^ b[1]]
            },
            x64Fmix: function(a) {
                return a = this.x64Xor(a, [0, a[0] >>> 1]),
                a = this.x64Multiply(a, [4283543511, 3981806797]),
                a = this.x64Xor(a, [0, a[0] >>> 1]),
                a = this.x64Multiply(a, [3301882366, 444984403]),
                a = this.x64Xor(a, [0, a[0] >>> 1])
            },
            x64hash128: function(a, b) {
                a = a || "",
                b = b || 0;
                for (var c = a.length % 16, d = a.length - c, e = [0, b], f = [0, b], g = [0, 0], h = [0, 0], i = [2277735313, 289559509], j = [1291169091, 658871167], k = 0; d > k; k += 16)
                    g = [255 & a.charCodeAt(k + 4) | (255 & a.charCodeAt(k + 5)) << 8 | (255 & a.charCodeAt(k + 6)) << 16 | (255 & a.charCodeAt(k + 7)) << 24, 255 & a.charCodeAt(k) | (255 & a.charCodeAt(k + 1)) << 8 | (255 & a.charCodeAt(k + 2)) << 16 | (255 & a.charCodeAt(k + 3)) << 24],
                    h = [255 & a.charCodeAt(k + 12) | (255 & a.charCodeAt(k + 13)) << 8 | (255 & a.charCodeAt(k + 14)) << 16 | (255 & a.charCodeAt(k + 15)) << 24, 255 & a.charCodeAt(k + 8) | (255 & a.charCodeAt(k + 9)) << 8 | (255 & a.charCodeAt(k + 10)) << 16 | (255 & a.charCodeAt(k + 11)) << 24],
                    g = this.x64Multiply(g, i),
                    g = this.x64Rotl(g, 31),
                    g = this.x64Multiply(g, j),
                    e = this.x64Xor(e, g),
                    e = this.x64Rotl(e, 27),
                    e = this.x64Add(e, f),
                    e = this.x64Add(this.x64Multiply(e, [0, 5]), [0, 1390208809]),
                    h = this.x64Multiply(h, j),
                    h = this.x64Rotl(h, 33),
                    h = this.x64Multiply(h, i),
                    f = this.x64Xor(f, h),
                    f = this.x64Rotl(f, 31),
                    f = this.x64Add(f, e),
                    f = this.x64Add(this.x64Multiply(f, [0, 5]), [0, 944331445]);
                switch (g = [0, 0],
                h = [0, 0],
                c) {
                case 15:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 14)], 48));
                case 14:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 13)], 40));
                case 13:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 12)], 32));
                case 12:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 11)], 24));
                case 11:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 10)], 16));
                case 10:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 9)], 8));
                case 9:
                    h = this.x64Xor(h, [0, a.charCodeAt(k + 8)]),
                    h = this.x64Multiply(h, j),
                    h = this.x64Rotl(h, 33),
                    h = this.x64Multiply(h, i),
                    f = this.x64Xor(f, h);
                case 8:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 7)], 56));
                case 7:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 6)], 48));
                case 6:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 5)], 40));
                case 5:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 4)], 32));
                case 4:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 3)], 24));
                case 3:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 2)], 16));
                case 2:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 1)], 8));
                case 1:
                    g = this.x64Xor(g, [0, a.charCodeAt(k)]),
                    g = this.x64Multiply(g, i),
                    g = this.x64Rotl(g, 31),
                    g = this.x64Multiply(g, j),
                    e = this.x64Xor(e, g)
                }
                return e = this.x64Xor(e, [0, a.length]),
                f = this.x64Xor(f, [0, a.length]),
                e = this.x64Add(e, f),
                f = this.x64Add(f, e),
                e = this.x64Fmix(e),
                f = this.x64Fmix(f),
                e = this.x64Add(e, f),
                f = this.x64Add(f, e),
                ("00000000" + (e[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (e[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8)
            }
        },
        a.VERSION = "1.5.1",
        window.Fingerprint2 = a,
        a
    })
}

var ma = aa;
var mb = {};
var mc = {};
mc.dependencies = [];
mc.exports = {};
mc.factory = myPrint;
mc.id = 'lib/fingerprint/fingerprint';
mc.status = 4;
mc.uri = "https://passport.migu.cn/js/lib/fingerprint/fingerprint.js?v=miguidmp_50pV7.2.1";

myPrint(ma,mb,mc);

var fingerprint = {};

var saveFingerprint = function() {
    var a, b = "{", c = new Fingerprint2({
        excludeCanvas: !0,
        excludeWebGL: !0
    });
    c.get(function(c, d) {
        if ("undefined" != typeof window.console) {
            for (var e in d) {
                var f = d[e]
                  , g = f.value;
                b += '"' + f.key + '":"' + g.toString().substr(0, 100) + '",'
            }
            b = b.substring(0, b.length - 1),
            b += "}"
        }
        a = c,
        fingerprint = {
            details: b,
            result: a
        }
    })
}


saveFingerprint();//填充$.fingerprint的值

var publicKey = "00833c4af965ff7a8409f8b5d5a83d87f2f19d7c1eb40dc59a98d2346cbb145046b2c6facc25b5cc363443f0f7ebd9524b7c1e1917bf7d849212339f6c1d3711b115ecb20f0c89fc2182a985ea28cbb4adf6a321ff7e715ba9b8d7261d1c140485df3b705247a70c28c9068caabbedbf9510dada6d13d99e57642b853a73406817";
var publicExponent = "010001";

//获取指纹参数的函数
var rsaFingerprint = function(a, b) {
    if (!fingerprint)
        return {
            details: "",
            result: ""
        };
    var c = fingerprint.details
      , d = fingerprint.result
      , e = c.length
      , f = ""
      , g = new myRsa();
    g.setPublic(a, b);
    for (var h = g.encrypt(d), i = 0; e > i; i += 117)
        f += g.encrypt(c.substr(i, 117));
    return {
        details: f,
        result: h
    }
}


var getRsaStr = function(str){
    var ccc = new myRsa();
    ccc.setPublic(publicKey, publicExponent);
    return ccc.encrypt(str);
}

//下面获取指纹参数，由于saveFingerprint存在异步执行，下面两行执行会报错
//var myobj = rsaFingerprint(publicKey,publicExponent);
//console.log(myobj);


//下面使用RSA进行加密数据

var phone = getRsaStr('15088883333');
console.log(phone);

var password = getRsaStr('123456');
console.log(password);

