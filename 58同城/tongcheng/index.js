//下面开始解析password参数
//第一种方式通过搜索isremember能够快速定位加密位置，如果根据password进行搜索位置太多，不好定位，推荐方式
//第2种方式，$('#mask_body_item_login').click()控制台执行，通过输出的日志定位代码位置，再根据call strack定位具体代码即可。

var  r = 1411093327735 - (new Date).getTime();
var o = (new Date).getTime() + r;
var pass = '111222333';
var rsaExponent = "010001";
var rsaModulus = "008baf14121377fc76eaf7794b8a8af17085628c3590df47e6534574efcfd81ef8635fcdc67d141c15f51649a89533df0db839331e30b8f8e4440ebf7ccbcc494f4ba18e9f492534b8aafc1b1057429ac851d3d9eb66e86fce1b04527c7b95a2431b07ea277cde2365876e2733325df04389a9d891c5d36b7bc752140db74cb69f";

var u = function(e, t, n) {
    var i = {}
      , r = {};
    !function(e) {
        function t(e) {
            var t = i
              , n = t.biDivideByRadixPower(e, this.k - 1)
              , r = t.biMultiply(n, this.mu)
              , o = t.biDivideByRadixPower(r, this.k + 1)
              , a = t.biModuloByRadixPower(e, this.k + 1)
              , s = t.biMultiply(o, this.modulus)
              , c = t.biModuloByRadixPower(s, this.k + 1)
              , u = t.biSubtract(a, c);
            u.isNeg && (u = t.biAdd(u, this.bkplus1));
            for (var l = 0 <= t.biCompare(u, this.modulus); l; )
                u = t.biSubtract(u, this.modulus),
                l = 0 <= t.biCompare(u, this.modulus);
            return u
        }
        function n(e, t) {
            var n = i.biMultiply(e, t);
            return this.modulo(n)
        }
        function r(e, t) {
            var n = new p;
            n.digits[0] = 1;
            for (var r = e, o = t; 0 != (1 & o.digits[0]) && (n = this.multiplyMod(n, r)),
            0 != (o = i.biShiftRight(o, 1)).digits[0] || 0 != i.biHighIndex(o); )
                r = this.multiplyMod(r, r);
            return n
        }
        function o(t, n, r) {
            var o = i;
            this.e = o.biFromHex(t),
            this.d = o.biFromHex(n),
            this.m = o.biFromHex(r),
            this.chunkSize = 2 * o.biHighIndex(this.m),
            this.radix = 16,
            this.barrett = new e.BarrettMu(this.m)
        }
        void 0 === e.RSAUtils && (e.RSAUtils = {});
        var a, s, c, u = 16, l = 65536, d = l - 1, p = e.BigInt = function(e) {
            this.digits = "boolean" == typeof e && 1 == e ? null : a.slice(0),
            this.isNeg = !1
        }
        ;
        i.setMaxDigits = function(e) {
            a = new Array(e);
            for (var t = 0; t < a.length; t++)
                a[t] = 0;
            s = new p,
            (c = new p).digits[0] = 1
        }
        ,
        i.setMaxDigits(20),
        i.biFromNumber = function(e) {
            var t = new p;
            t.isNeg = e < 0,
            e = Math.abs(e);
            for (var n = 0; 0 < e; )
                t.digits[n++] = e & d,
                e = Math.floor(e / l);
            return t
        }
        ;
        var f = i.biFromNumber(1e15);
        i.biFromDecimal = function(e) {
            for (var t, n = "-" == e.charAt(0), r = n ? 1 : 0; r < e.length && "0" == e.charAt(r); )
                ++r;
            if (r == e.length)
                t = new p;
            else {
                var o = (e.length - r) % 15;
                for (0 == o && (o = 15),
                t = i.biFromNumber(Number(e.substr(r, o))),
                r += o; r < e.length; )
                    t = i.biAdd(i.biMultiply(t, f), i.biFromNumber(Number(e.substr(r, 15)))),
                    r += 15;
                t.isNeg = n
            }
            return t
        }
        ,
        i.biCopy = function(e) {
            var t = new p(!0);
            return t.digits = e.digits.slice(0),
            t.isNeg = e.isNeg,
            t
        }
        ,
        i.reverseStr = function(e) {
            for (var t = "", n = e.length - 1; -1 < n; --n)
                t += e.charAt(n);
            return t
        }
        ;
        var h = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        i.biToString = function(e, t) {
            var n = new p;
            n.digits[0] = t;
            for (var r = i.biDivideModulo(e, n), o = h[r[1].digits[0]]; 1 == i.biCompare(r[0], s); )
                r = i.biDivideModulo(r[0], n),
                digit = r[1].digits[0],
                o += h[r[1].digits[0]];
            return (e.isNeg ? "-" : "") + i.reverseStr(o)
        }
        ,
        i.biToDecimal = function(e) {
            var t = new p;
            t.digits[0] = 10;
            for (var n = i.biDivideModulo(e, t), r = String(n[1].digits[0]); 1 == i.biCompare(n[0], s); )
                n = i.biDivideModulo(n[0], t),
                r += String(n[1].digits[0]);
            return (e.isNeg ? "-" : "") + i.reverseStr(r)
        }
        ;
        var g = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        i.digitToHex = function(e) {
            for (var t = "", n = 0; n < 4; ++n)
                t += g[15 & e],
                e >>>= 4;
            return i.reverseStr(t)
        }
        ,
        i.biToHex = function(e) {
            for (var t = "", n = (i.biHighIndex(e),
            i.biHighIndex(e)); -1 < n; --n)
                t += i.digitToHex(e.digits[n]);
            return t
        }
        ,
        i.charToHex = function(e) {
            return 48 <= e && e <= 57 ? e - 48 : 65 <= e && e <= 90 ? 10 + e - 65 : 97 <= e && e <= 122 ? 10 + e - 97 : 0
        }
        ,
        i.hexToDigit = function(e) {
            for (var t = 0, n = Math.min(e.length, 4), r = 0; r < n; ++r)
                t <<= 4,
                t |= i.charToHex(e.charCodeAt(r));
            return t
        }
        ,
        i.biFromHex = function(e) {
            for (var t = new p, n = e.length, r = 0; 0 < n; n -= 4,
            ++r)
                t.digits[r] = i.hexToDigit(e.substr(Math.max(n - 4, 0), Math.min(n, 4)));
            return t
        }
        ,
        i.biFromString = function(e, t) {
            var n = "-" == e.charAt(0)
              , r = n ? 1 : 0
              , o = new p
              , a = new p;
            a.digits[0] = 1;
            for (var s = e.length - 1; r <= s; s--) {
                var c = e.charCodeAt(s)
                  , u = i.charToHex(c)
                  , l = i.biMultiplyDigit(a, u);
                o = i.biAdd(o, l),
                a = i.biMultiplyDigit(a, t)
            }
            return o.isNeg = n,
            o
        }
        ,
        i.biDump = function(e) {
            return (e.isNeg ? "-" : "") + e.digits.join(" ")
        }
        ,
        i.biAdd = function(e, t) {
            var n;
            if (e.isNeg != t.isNeg)
                t.isNeg = !t.isNeg,
                n = i.biSubtract(e, t),
                t.isNeg = !t.isNeg;
            else {
                n = new p;
                for (var r, o = 0, a = 0; a < e.digits.length; ++a)
                    r = e.digits[a] + t.digits[a] + o,
                    n.digits[a] = r % l,
                    o = Number(l <= r);
                n.isNeg = e.isNeg
            }
            return n
        }
        ,
        i.biSubtract = function(e, t) {
            var n;
            if (e.isNeg != t.isNeg)
                t.isNeg = !t.isNeg,
                n = i.biAdd(e, t),
                t.isNeg = !t.isNeg;
            else {
                var r, o;
                n = new p;
                for (var a = o = 0; a < e.digits.length; ++a)
                    r = e.digits[a] - t.digits[a] + o,
                    n.digits[a] = r % l,
                    n.digits[a] < 0 && (n.digits[a] += l),
                    o = 0 - Number(r < 0);
                if (-1 == o) {
                    for (a = o = 0; a < e.digits.length; ++a)
                        r = 0 - n.digits[a] + o,
                        n.digits[a] = r % l,
                        n.digits[a] < 0 && (n.digits[a] += l),
                        o = 0 - Number(r < 0);
                    n.isNeg = !e.isNeg
                } else
                    n.isNeg = e.isNeg
            }
            return n
        }
        ,
        i.biHighIndex = function(e) {
            for (var t = e.digits.length - 1; 0 < t && 0 == e.digits[t]; )
                --t;
            return t
        }
        ,
        i.biNumBits = function(e) {
            var t, n = i.biHighIndex(e), r = e.digits[n], o = (n + 1) * u;
            for (t = o; o - u < t && 0 == (32768 & r); --t)
                r <<= 1;
            return t
        }
        ,
        i.biMultiply = function(e, t) {
            for (var n, r, o, a, s = new p, c = i.biHighIndex(e), u = i.biHighIndex(t), l = 0; l <= u; ++l) {
                for (o = l,
                a = n = 0; a <= c; ++a,
                ++o)
                    r = s.digits[o] + e.digits[a] * t.digits[l] + n,
                    s.digits[o] = r & d,
                    n = r >>> 16;
                s.digits[l + c + 1] = n
            }
            return s.isNeg = e.isNeg != t.isNeg,
            s
        }
        ,
        i.biMultiplyDigit = function(e, t) {
            var n, r, o, a;
            a = new p,
            n = i.biHighIndex(e);
            for (var s = r = 0; s <= n; ++s)
                o = a.digits[s] + e.digits[s] * t + r,
                a.digits[s] = o & d,
                r = o >>> 16;
            return a.digits[1 + n] = r,
            a
        }
        ,
        i.arrayCopy = function(e, t, n, i, r) {
            for (var o = Math.min(t + r, e.length), a = t, s = i; a < o; ++a,
            ++s)
                n[s] = e[a]
        }
        ;
        var m = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
        i.biShiftLeft = function(e, t) {
            var n = Math.floor(t / u)
              , r = new p;
            i.arrayCopy(e.digits, 0, r.digits, n, r.digits.length - n);
            for (var o = t % u, a = u - o, s = r.digits.length - 1, c = s - 1; 0 < s; --s,
            --c)
                r.digits[s] = r.digits[s] << o & d | (r.digits[c] & m[o]) >>> a;
            return r.digits[0] = r.digits[s] << o & d,
            r.isNeg = e.isNeg,
            r
        }
        ;
        var y = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
        i.biShiftRight = function(e, t) {
            var n = Math.floor(t / u)
              , r = new p;
            i.arrayCopy(e.digits, n, r.digits, 0, e.digits.length - n);
            for (var o = t % u, a = u - o, s = 0, c = s + 1; s < r.digits.length - 1; ++s,
            ++c)
                r.digits[s] = r.digits[s] >>> o | (r.digits[c] & y[o]) << a;
            return r.digits[r.digits.length - 1] >>>= o,
            r.isNeg = e.isNeg,
            r
        }
        ,
        i.biMultiplyByRadixPower = function(e, t) {
            var n = new p;
            return i.arrayCopy(e.digits, 0, n.digits, t, n.digits.length - t),
            n
        }
        ,
        i.biDivideByRadixPower = function(e, t) {
            var n = new p;
            return i.arrayCopy(e.digits, t, n.digits, 0, n.digits.length - t),
            n
        }
        ,
        i.biModuloByRadixPower = function(e, t) {
            var n = new p;
            return i.arrayCopy(e.digits, 0, n.digits, 0, t),
            n
        }
        ,
        i.biCompare = function(e, t) {
            if (e.isNeg != t.isNeg)
                return 1 - 2 * Number(e.isNeg);
            for (var n = e.digits.length - 1; 0 <= n; --n)
                if (e.digits[n] != t.digits[n])
                    return e.isNeg ? 1 - 2 * Number(e.digits[n] > t.digits[n]) : 1 - 2 * Number(e.digits[n] < t.digits[n]);
            return 0
        }
        ,
        i.biDivideModulo = function(e, t) {
            var n, r, o = i.biNumBits(e), a = i.biNumBits(t), s = t.isNeg;
            if (o < a)
                return e.isNeg ? ((n = i.biCopy(c)).isNeg = !t.isNeg,
                e.isNeg = !1,
                t.isNeg = !1,
                r = biSubtract(t, e),
                e.isNeg = !0,
                t.isNeg = s) : (n = new p,
                r = i.biCopy(e)),
                [n, r];
            n = new p,
            r = e;
            for (var f = Math.ceil(a / u) - 1, h = 0; t.digits[f] < 32768; )
                t = i.biShiftLeft(t, 1),
                ++h,
                ++a,
                f = Math.ceil(a / u) - 1;
            r = i.biShiftLeft(r, h),
            o += h;
            for (var g = Math.ceil(o / u) - 1, m = i.biMultiplyByRadixPower(t, g - f); -1 != i.biCompare(r, m); )
                ++n.digits[g - f],
                r = i.biSubtract(r, m);
            for (var y = g; f < y; --y) {
                var v = y >= r.digits.length ? 0 : r.digits[y]
                  , b = y - 1 >= r.digits.length ? 0 : r.digits[y - 1]
                  , x = y - 2 >= r.digits.length ? 0 : r.digits[y - 2]
                  , k = f >= t.digits.length ? 0 : t.digits[f]
                  , w = f - 1 >= t.digits.length ? 0 : t.digits[f - 1];
                n.digits[y - f - 1] = v == k ? d : Math.floor((v * l + b) / k);
                for (var C = n.digits[y - f - 1] * (k * l + w), T = 4294967296 * v + (b * l + x); T < C; )
                    --n.digits[y - f - 1],
                    C = n.digits[y - f - 1] * (k * l | w),
                    T = v * l * l + (b * l + x);
                m = i.biMultiplyByRadixPower(t, y - f - 1),
                (r = i.biSubtract(r, i.biMultiplyDigit(m, n.digits[y - f - 1]))).isNeg && (r = i.biAdd(r, m),
                --n.digits[y - f - 1])
            }
            return r = i.biShiftRight(r, h),
            n.isNeg = e.isNeg != s,
            e.isNeg && (n = s ? i.biAdd(n, c) : i.biSubtract(n, c),
            t = i.biShiftRight(t, h),
            r = i.biSubtract(t, r)),
            0 == r.digits[0] && 0 == i.biHighIndex(r) && (r.isNeg = !1),
            [n, r]
        }
        ,
        i.biDivide = function(e, t) {
            return i.biDivideModulo(e, t)[0]
        }
        ,
        i.biModulo = function(e, t) {
            return i.biDivideModulo(e, t)[1]
        }
        ,
        i.biMultiplyMod = function(e, t, n) {
            return i.biModulo(i.biMultiply(e, t), n)
        }
        ,
        i.biPow = function(e, t) {
            for (var n = c, r = e; 0 != (1 & t) && (n = i.biMultiply(n, r)),
            0 != (t >>= 1); )
                r = i.biMultiply(r, r);
            return n
        }
        ,
        i.biPowMod = function(e, t, n) {
            for (var r = c, o = e, a = t; 0 != (1 & a.digits[0]) && (r = i.biMultiplyMod(r, o, n)),
            0 != (a = i.biShiftRight(a, 1)).digits[0] || 0 != i.biHighIndex(a); )
                o = i.biMultiplyMod(o, o, n);
            return r
        }
        ,
        e.BarrettMu = function(e) {
            this.modulus = i.biCopy(e),
            this.k = i.biHighIndex(this.modulus) + 1;
            var o = new p;
            o.digits[2 * this.k] = 1,
            this.mu = i.biDivide(o, this.modulus),
            this.bkplus1 = new p,
            this.bkplus1.digits[this.k + 1] = 1,
            this.modulo = t,
            this.multiplyMod = n,
            this.powMod = r
        }
        ,
        i.getKeyPair = function(e, t, n) {
            return new o(e,t,n)
        }
        ,
        void 0 === e.twoDigit && (e.twoDigit = function(e) {
            return (e < 10 ? "0" : "") + String(e)
        }
        ),
        i.encryptedString = function(e, t) {
            for (var n = [], r = t.length, o = 0; o < r; )
                n[o] = t.charCodeAt(o),
                o++;
            for (; n.length % e.chunkSize != 0; )
                n[o++] = 0;
            var a, s, c, u = n.length, l = "";
            for (o = 0; o < u; o += e.chunkSize) {
                for (c = new p,
                a = 0,
                s = o; s < o + e.chunkSize; ++a)
                    c.digits[a] = n[s++],
                    c.digits[a] += n[s++] << 8;
                var d = e.barrett.powMod(c, e.e);
                l += (16 == e.radix ? i.biToHex(d) : i.biToString(d, e.radix)) + " "
            }
            return l.substring(0, l.length - 1)
        }
        ,
        i.decryptedString = function(e, t) {
            var n, r, o, a = t.split(" "), s = "";
            for (n = 0; n < a.length; ++n) {
                var c;
                for (c = 16 == e.radix ? i.biFromHex(a[n]) : i.biFromString(a[n], e.radix),
                o = e.barrett.powMod(c, e.d),
                r = 0; r <= i.biHighIndex(o); ++r)
                    s += String.fromCharCode(255 & o.digits[r], o.digits[r] >> 8)
            }
            return 0 == s.charCodeAt(s.length - 1) && (s = s.substring(0, s.length - 1)),
            s
        }
        ,
        i.setMaxDigits(130)
    }(r);
    var o = i.getKeyPair(t, "", n);
    return i.encryptedString(o, e)
}

//对pass进行加密
u(o + encodeURIComponent(pass), rsaExponent, rsaModulus);

//下面开始解析fingerprint参数
//这个参数通过请求https://passport.58.com/sec/58/fingerprint后，从响应的cookie中获取

//下面开始解析finger2参数，直接搜索finger2 =即可
!function(e, t, i) {
    "use strict";
    "function" == typeof define && define.amd ? define("tongji", [], i) : "undefined" != typeof module && module.exports ? module.exports = i() : t.exports ? t.exports = i() : t[e] = i(),
    window[e] = i()
}("Fingerprint2", this, function() {
    "use strict";
    function c(e, t) {
        var i = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
    }
    function s(e, t, i, r, n, a) {
        return c((o = c(c(t, e), c(r, a))) << (s = n) | o >>> 32 - s, i);
        var o, s
    }
    function d(e, t, i, r, n, a, o) {
        return s(t & i | ~t & r, e, t, n, a, o)
    }
    function g(e, t, i, r, n, a, o) {
        return s(t & r | i & ~r, e, t, n, a, o)
    }
    function f(e, t, i, r, n, a, o) {
        return s(t ^ i ^ r, e, t, n, a, o)
    }
    function p(e, t, i, r, n, a, o) {
        return s(i ^ (t | ~r), e, t, n, a, o)
    }
    function l(e, t) {
        e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
        var i, r, n, a, o, s = 1732584193, l = -271733879, h = -1732584194, u = 271733878;
        for (i = 0; i < e.length; i += 16)
            s = d(r = s, n = l, a = h, o = u, e[i], 7, -680876936),
            u = d(u, s, l, h, e[i + 1], 12, -389564586),
            h = d(h, u, s, l, e[i + 2], 17, 606105819),
            l = d(l, h, u, s, e[i + 3], 22, -1044525330),
            s = d(s, l, h, u, e[i + 4], 7, -176418897),
            u = d(u, s, l, h, e[i + 5], 12, 1200080426),
            h = d(h, u, s, l, e[i + 6], 17, -1473231341),
            l = d(l, h, u, s, e[i + 7], 22, -45705983),
            s = d(s, l, h, u, e[i + 8], 7, 1770035416),
            u = d(u, s, l, h, e[i + 9], 12, -1958414417),
            h = d(h, u, s, l, e[i + 10], 17, -42063),
            l = d(l, h, u, s, e[i + 11], 22, -1990404162),
            s = d(s, l, h, u, e[i + 12], 7, 1804603682),
            u = d(u, s, l, h, e[i + 13], 12, -40341101),
            h = d(h, u, s, l, e[i + 14], 17, -1502002290),
            s = g(s, l = d(l, h, u, s, e[i + 15], 22, 1236535329), h, u, e[i + 1], 5, -165796510),
            u = g(u, s, l, h, e[i + 6], 9, -1069501632),
            h = g(h, u, s, l, e[i + 11], 14, 643717713),
            l = g(l, h, u, s, e[i], 20, -373897302),
            s = g(s, l, h, u, e[i + 5], 5, -701558691),
            u = g(u, s, l, h, e[i + 10], 9, 38016083),
            h = g(h, u, s, l, e[i + 15], 14, -660478335),
            l = g(l, h, u, s, e[i + 4], 20, -405537848),
            s = g(s, l, h, u, e[i + 9], 5, 568446438),
            u = g(u, s, l, h, e[i + 14], 9, -1019803690),
            h = g(h, u, s, l, e[i + 3], 14, -187363961),
            l = g(l, h, u, s, e[i + 8], 20, 1163531501),
            s = g(s, l, h, u, e[i + 13], 5, -1444681467),
            u = g(u, s, l, h, e[i + 2], 9, -51403784),
            h = g(h, u, s, l, e[i + 7], 14, 1735328473),
            s = f(s, l = g(l, h, u, s, e[i + 12], 20, -1926607734), h, u, e[i + 5], 4, -378558),
            u = f(u, s, l, h, e[i + 8], 11, -2022574463),
            h = f(h, u, s, l, e[i + 11], 16, 1839030562),
            l = f(l, h, u, s, e[i + 14], 23, -35309556),
            s = f(s, l, h, u, e[i + 1], 4, -1530992060),
            u = f(u, s, l, h, e[i + 4], 11, 1272893353),
            h = f(h, u, s, l, e[i + 7], 16, -155497632),
            l = f(l, h, u, s, e[i + 10], 23, -1094730640),
            s = f(s, l, h, u, e[i + 13], 4, 681279174),
            u = f(u, s, l, h, e[i], 11, -358537222),
            h = f(h, u, s, l, e[i + 3], 16, -722521979),
            l = f(l, h, u, s, e[i + 6], 23, 76029189),
            s = f(s, l, h, u, e[i + 9], 4, -640364487),
            u = f(u, s, l, h, e[i + 12], 11, -421815835),
            h = f(h, u, s, l, e[i + 15], 16, 530742520),
            s = p(s, l = f(l, h, u, s, e[i + 2], 23, -995338651), h, u, e[i], 6, -198630844),
            u = p(u, s, l, h, e[i + 7], 10, 1126891415),
            h = p(h, u, s, l, e[i + 14], 15, -1416354905),
            l = p(l, h, u, s, e[i + 5], 21, -57434055),
            s = p(s, l, h, u, e[i + 12], 6, 1700485571),
            u = p(u, s, l, h, e[i + 3], 10, -1894986606),
            h = p(h, u, s, l, e[i + 10], 15, -1051523),
            l = p(l, h, u, s, e[i + 1], 21, -2054922799),
            s = p(s, l, h, u, e[i + 8], 6, 1873313359),
            u = p(u, s, l, h, e[i + 15], 10, -30611744),
            h = p(h, u, s, l, e[i + 6], 15, -1560198380),
            l = p(l, h, u, s, e[i + 13], 21, 1309151649),
            s = p(s, l, h, u, e[i + 4], 6, -145523070),
            u = p(u, s, l, h, e[i + 11], 10, -1120210379),
            h = p(h, u, s, l, e[i + 2], 15, 718787259),
            l = p(l, h, u, s, e[i + 9], 21, -343485551),
            s = c(s, r),
            l = c(l, n),
            h = c(h, a),
            u = c(u, o);
        return [s, l, h, u]
    }
    function h(e) {
        var t, i = "";
        for (t = 0; t < 32 * e.length; t += 8)
            i += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return i
    }
    function u(e) {
        var t, i = [];
        for (i[(e.length >> 2) - 1] = void 0,
        t = 0; t < i.length; t += 1)
            i[t] = 0;
        for (t = 0; t < 8 * e.length; t += 8)
            i[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return i
    }
    function r(e) {
        var t, i, r = "0123456789abcdef", n = "";
        for (i = 0; i < e.length; i += 1)
            t = e.charCodeAt(i),
            n += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
        return n
    }
    function i(e) {
        return unescape(encodeURIComponent(e))
    }
    function n(e) {
        return h(l(u(t = i(e)), 8 * t.length));
        var t
    }
    function a(e, t) {
        return function(e, t) {
            var i, r, n = u(e), a = [], o = [];
            for (a[15] = o[15] = void 0,
            16 < n.length && (n = l(n, 8 * e.length)),
            i = 0; i < 16; i += 1)
                a[i] = 909522486 ^ n[i],
                o[i] = 1549556828 ^ n[i];
            return r = l(a.concat(u(t)), 512 + 8 * t.length),
            h(l(o.concat(r), 640))
        }(i(e), i(t))
    }
    function o(e, t, i) {
        return t ? i ? a(t, e) : r(a(t, e)) : i ? n(e) : r(n(e))
    }
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        var i;
        if (null == this)
            throw new TypeError("'this' is null or undefined");
        var r = Object(this)
          , n = r.length >>> 0;
        if (0 == n)
            return -1;
        var a = +t || 0;
        if (Math.abs(a) === 1 / 0 && (a = 0),
        n <= a)
            return -1;
        for (i = Math.max(0 <= a ? a : n - Math.abs(a), 0); i < n; ) {
            if (i in r && r[i] === e)
                return i;
            i++
        }
        return -1
    }
    );
    var t = function(e) {
        if (!(this instanceof t))
            return new t(e);
        this.options = this.extend(e, {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            detectScreenOrientation: !0,
            sortPluginsFor: [/palemoon/i],
            userDefinedFonts: []
        }),
        this.nativeForEach = Array.prototype.forEach,
        this.nativeMap = Array.prototype.map
    };
    return t.prototype = {
        extend: function(e, t) {
            if (null == e)
                return t;
            for (var i in e)
                null != e[i] && t[i] !== e[i] && (t[i] = e[i]);
            return t
        },
        log: function(e) {
            window.console && console.log(e)
        },
        get: function(e) {
            var t = [];
            return this.languageKey(t) + "|" + this.colorDepthKey(t) + "|" + this.pixelRatioKey(t) + "|" + this.hardwareConcurrencyKey(t) + "|" + this.getScreenResolution(t) + "|" + this.getAvailableScreenResolution(t) + "|" + this.timezoneOffsetKey(t) + "|" + this.sessionStorageKey(t) + "|" + this.localStorageKey(t) + "|" + this.indexedDbKey(t) + "|" + this.addBehaviorKey(t) + "|" + this.openDatabaseKey(t) + "|" + this.cpuClassKey(t) + "|" + this.platformKey(t) + "|" + this.doNotTrackKey(t) + "|" + this.pluginsKey(t) + "|" + this.adBlockKey(t) + "|" + this.hasLiedLanguagesKey(t) + "|" + this.hasLiedResolutionKey(t) + "|" + this.hasLiedOsKey(t) + "|" + this.hasLiedBrowserKey(t) + "|" + this.touchSupportKey(t) + "|" + o(this.canvasKey(t)) + "|" + o(this.webglKey(t))
        },
        userAgentKey: function(e) {
            var t;
            return this.options.excludeUserAgent || (t = this.getUserAgent()),
            t
        },
        getUserAgent: function() {
            return navigator.userAgent
        },
        languageKey: function(e) {
            var t;
            return this.options.excludeLanguage || (t = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""),
            t
        },
        colorDepthKey: function(e) {
            var t;
            return this.options.excludeColorDepth || (t = screen.colorDepth || -1),
            t
        },
        pixelRatioKey: function(e) {
            var t;
            return this.options.excludePixelRatio || (t = this.getPixelRatio()),
            t
        },
        getPixelRatio: function() {
            return window.devicePixelRatio || ""
        },
        getScreenResolution: function(e) {
            return this.options.detectScreenOrientation && screen.height > screen.width ? screen.height + "_" + screen.width : screen.width + "_" + screen.height
        },
        getAvailableScreenResolution: function(e) {
            var t;
            return screen.availWidth && screen.availHeight && (t = !this.options.detectScreenOrientation || screen.availHeight > screen.availWidth ? screen.availHeight + "_" + screen.availWidth : screen.availWidth + "_" + screen.availHeight),
            t
        },
        timezoneOffsetKey: function(e) {
            var t;
            return this.options.excludeTimezoneOffset || (t = (new Date).getTimezoneOffset()),
            t
        },
        sessionStorageKey: function(e) {
            var t;
            return !this.options.excludeSessionStorage && this.hasSessionStorage() && (t = 1),
            t
        },
        localStorageKey: function(e) {
            var t;
            return !this.options.excludeSessionStorage && this.hasLocalStorage() && (t = 1),
            t
        },
        indexedDbKey: function(e) {
            var t;
            return !this.options.excludeIndexedDB && this.hasIndexedDB() && (t = 1),
            t
        },
        addBehaviorKey: function(e) {
            var t;
            return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && (t = 1),
            t
        },
        openDatabaseKey: function(e) {
            var t;
            return !this.options.excludeOpenDatabase && window.openDatabase && (t = 1),
            t
        },
        cpuClassKey: function(e) {
            var t;
            return this.options.excludeCpuClass || (t = this.getNavigatorCpuClass()),
            t
        },
        platformKey: function(e) {
            var t;
            return this.options.excludePlatform || (t = this.getNavigatorPlatform()),
            t
        },
        doNotTrackKey: function(e) {
            var t;
            return this.options.excludeDoNotTrack || (t = this.getDoNotTrack()),
            t
        },
        canvasKey: function(e) {
            return !this.options.excludeCanvas && this.isCanvasSupported() && this.getCanvasFp(),
            e
        },
        webglKey: function(e) {
            if (this.options.excludeWebGL) {
                var t = "";
                return "undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting per excludeWebGL configuration option"),
                t
            }
            return this.isWebGlSupported() ? t = this.getWebglFp() : ("undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting because it is not supported in this browser"),
            t)
        },
        adBlockKey: function(e) {
            var t;
            return this.options.excludeAdBlock || (t = this.getAdBlock()),
            t
        },
        hasLiedLanguagesKey: function(e) {
            var t;
            return this.options.excludeHasLiedLanguages || (t = this.getHasLiedLanguages()),
            t
        },
        hasLiedResolutionKey: function(e) {
            var t;
            return this.options.excludeHasLiedResolution || (t = this.getHasLiedResolution()),
            t
        },
        hasLiedOsKey: function(e) {
            var t;
            return this.options.excludeHasLiedOs || (t = this.getHasLiedOs()),
            t
        },
        hasLiedBrowserKey: function(e) {
            var t;
            return this.options.excludeHasLiedBrowser || (t = this.getHasLiedBrowser()),
            t
        },
        fontsKey: function(e, t) {
            return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
        },
        flashFontsKey: function(t, i) {
            return this.options.excludeFlashFonts ? ("undefined" == typeof NODEBUG && this.log("Skipping flash fonts detection per excludeFlashFonts configuration option"),
            i(t)) : this.hasSwfObjectLoaded() ? this.hasMinFlashInstalled() ? void 0 === this.options.swfPath ? ("undefined" == typeof NODEBUG && this.log("To use Flash fonts detection, you must pass a valid swfPath option, skipping Flash fonts enumeration"),
            i(t)) : void this.loadSwfAndDetectFonts(function(e) {
                t.push({
                    key: "swf_fonts",
                    value: e.join(";")
                }),
                i(t)
            }) : ("undefined" == typeof NODEBUG && this.log("Flash is not installed, skipping Flash fonts enumeration"),
            i(t)) : ("undefined" == typeof NODEBUG && this.log("Swfobject is not detected, Flash fonts enumeration is skipped"),
            i(t))
        },
        jsFontsKey: function(m, T) {
            var S = this;
            return setTimeout(function() {
                var u = ["monospace", "sans-serif", "serif"]
                  , c = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                S.options.extendedJsFonts && (c = c.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])),
                c = c.concat(S.options.userDefinedFonts);
                function d() {
                    var e = document.createElement("span");
                    return e.style.position = "absolute",
                    e.style.left = "-9999px",
                    e.style.fontSize = "72px",
                    e.style.lineHeight = "normal",
                    e.innerHTML = "mmmmmmmmmmlli",
                    e
                }
                function e(e) {
                    for (var t = !1, i = 0; i < u.length; i++)
                        if (t = e[i].offsetWidth !== r[u[i]] || e[i].offsetHeight !== a[u[i]])
                            return t;
                    return t
                }
                var t = document.getElementsByTagName("body")[0]
                  , n = document.createElement("div")
                  , g = document.createElement("div")
                  , r = {}
                  , a = {}
                  , i = function() {
                    for (var e = [], t = 0, i = u.length; t < i; t++) {
                        var r = d();
                        r.style.fontFamily = u[t],
                        n.appendChild(r),
                        e.push(r)
                    }
                    return e
                }();
                t.appendChild(n);
                for (var o = 0, s = u.length; o < s; o++)
                    r[u[o]] = i[o].offsetWidth,
                    a[u[o]] = i[o].offsetHeight;
                var l = function() {
                    for (var e, t, i, r = {}, n = 0, a = c.length; n < a; n++) {
                        for (var o = [], s = 0, l = u.length; s < l; s++) {
                            var h = (e = c[n],
                            t = u[s],
                            i = void 0,
                            (i = d()).style.fontFamily = "'" + e + "'," + t,
                            i);
                            g.appendChild(h),
                            o.push(h)
                        }
                        r[c[n]] = o
                    }
                    return r
                }();
                t.appendChild(g);
                for (var h = [], f = 0, p = c.length; f < p; f++)
                    e(l[c[f]]) && h.push(c[f]);
                t.removeChild(g),
                t.removeChild(n),
                m.push({
                    key: "js_fonts",
                    value: h
                }),
                T(m)
            }, 1)
        },
        pluginsKey: function(e) {
            var t;
            return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || (t = this.getIEPlugins()) : t = this.getRegularPlugins()),
            t.length
        },
        getRegularPlugins: function() {
            for (var e = [], t = 0, i = navigator.plugins.length; t < i; t++)
                e.push(navigator.plugins[t]);
            return this.pluginsShouldBeSorted() && (e = e.sort(function(e, t) {
                return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
            })),
            this.map(e, function(e) {
                var t = this.map(e, function(e) {
                    return [e.type, e.suffixes].join("~")
                }).join(",");
                return [e.name, e.description, t].join("::")
            }, this)
        },
        getIEPlugins: function() {
            var e = [];
            if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject"in window) {
                e = this.map(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function(e) {
                    try {
                        return new ActiveXObject(e),
                        e
                    } catch (e) {
                        return null
                    }
                })
            }
            return navigator.plugins && (e = e.concat(this.getRegularPlugins())),
            e
        },
        pluginsShouldBeSorted: function() {
            for (var e = !1, t = 0, i = this.options.sortPluginsFor.length; t < i; t++) {
                var r = this.options.sortPluginsFor[t];
                if (navigator.userAgent.match(r)) {
                    e = !0;
                    break
                }
            }
            return e
        },
        touchSupportKey: function(e) {
            var t;
            return this.options.excludeTouchSupport || (t = this.getTouchSupport()),
            t
        },
        hardwareConcurrencyKey: function(e) {
            var t;
            return this.options.excludeHardwareConcurrency || (t = this.getHardwareConcurrency()),
            t
        },
        hasSessionStorage: function() {
            try {
                return !!window.sessionStorage
            } catch (e) {
                return !0
            }
        },
        hasLocalStorage: function() {
            try {
                return !!window.localStorage
            } catch (e) {
                return !0
            }
        },
        hasIndexedDB: function() {
            try {
                return !!window.indexedDB
            } catch (e) {
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
            var e = 0
              , t = !1;
            void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
            try {
                document.createEvent("TouchEvent"),
                t = !0
            } catch (e) {}
            return e + "_" + t + "_" + ("ontouchstart"in window)
        },
        getCanvasFp: function() {
            var e = []
              , t = document.createElement("canvas");
            t.width = 2e3,
            t.height = 200,
            t.style.display = "inline";
            var i = t.getContext("2d");
            return i.rect(0, 0, 10, 10),
            i.rect(2, 2, 6, 6),
            e.push("canvas winding:" + (!1 === i.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
            i.textBaseline = "alphabetic",
            i.fillStyle = "#f60",
            i.fillRect(125, 1, 62, 20),
            i.fillStyle = "#069",
            this.options.dontUseFakeFontInCanvas ? i.font = "11pt Arial" : i.font = "11pt no-real-font-123",
            i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
            i.fillStyle = "rgba(102, 204, 0, 0.2)",
            i.font = "18pt Arial",
            i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
            i.globalCompositeOperation = "multiply",
            i.fillStyle = "rgb(255,0,255)",
            i.beginPath(),
            i.arc(50, 50, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(0,255,255)",
            i.beginPath(),
            i.arc(100, 50, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(255,255,0)",
            i.beginPath(),
            i.arc(75, 100, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(255,0,255)",
            i.arc(75, 75, 75, 0, 2 * Math.PI, !0),
            i.arc(75, 75, 25, 0, 2 * Math.PI, !0),
            i.fill("evenodd"),
            e.push("canvas fp:" + t.toDataURL()),
            e.join("~")
        },
        getWebglFp: function() {
            function e(e) {
                return t.clearColor(0, 0, 0, 1),
                t.enable(t.DEPTH_TEST),
                t.depthFunc(t.LEQUAL),
                t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
                "[" + e[0] + ", " + e[1] + "]"
            }
            var t;
            if (!(t = this.getWebglCanvas()))
                return null;
            var i = []
              , r = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, r);
            var n = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            t.bufferData(t.ARRAY_BUFFER, n, t.STATIC_DRAW),
            r.itemSize = 3,
            r.numItems = 3;
            var a = t.createProgram()
              , o = t.createShader(t.VERTEX_SHADER);
            t.shaderSource(o, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),
            t.compileShader(o);
            var s, l, h, u = t.createShader(t.FRAGMENT_SHADER);
            t.shaderSource(u, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),
            t.compileShader(u),
            t.attachShader(a, o),
            t.attachShader(a, u),
            t.linkProgram(a),
            t.useProgram(a),
            a.vertexPosAttrib = t.getAttribLocation(a, "attrVertex"),
            a.offsetUniform = t.getUniformLocation(a, "uniformOffset"),
            t.enableVertexAttribArray(a.vertexPosArray),
            t.vertexAttribPointer(a.vertexPosAttrib, r.itemSize, t.FLOAT, !1, 0, 0),
            t.uniform2f(a.offsetUniform, 1, 1),
            t.drawArrays(t.TRIANGLE_STRIP, 0, r.numItems),
            null != t.canvas && i.push(t.canvas.toDataURL()),
            i.push("extensions:" + t.getSupportedExtensions().join(";")),
            i.push("webgl aliased line width range:" + e(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE))),
            i.push("webgl aliased point size range:" + e(t.getParameter(t.ALIASED_POINT_SIZE_RANGE))),
            i.push("webgl alpha bits:" + t.getParameter(t.ALPHA_BITS)),
            i.push("webgl antialiasing:" + (t.getContextAttributes().antialias ? "yes" : "no")),
            i.push("webgl blue bits:" + t.getParameter(t.BLUE_BITS)),
            i.push("webgl depth bits:" + t.getParameter(t.DEPTH_BITS)),
            i.push("webgl green bits:" + t.getParameter(t.GREEN_BITS)),
            i.push("webgl max anisotropy:" + ((h = (s = t).getExtension("EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic")) ? (0 === (l = s.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) && (l = 2),
            l) : null)),
            i.push("webgl max combined texture image units:" + t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
            i.push("webgl max cube map texture size:" + t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)),
            i.push("webgl max fragment uniform vectors:" + t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)),
            i.push("webgl max render buffer size:" + t.getParameter(t.MAX_RENDERBUFFER_SIZE)),
            i.push("webgl max texture image units:" + t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)),
            i.push("webgl max texture size:" + t.getParameter(t.MAX_TEXTURE_SIZE)),
            i.push("webgl max varying vectors:" + t.getParameter(t.MAX_VARYING_VECTORS)),
            i.push("webgl max vertex attribs:" + t.getParameter(t.MAX_VERTEX_ATTRIBS)),
            i.push("webgl max vertex texture image units:" + t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
            i.push("webgl max vertex uniform vectors:" + t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)),
            i.push("webgl max viewport dims:" + e(t.getParameter(t.MAX_VIEWPORT_DIMS))),
            i.push("webgl red bits:" + t.getParameter(t.RED_BITS)),
            i.push("webgl renderer:" + t.getParameter(t.RENDERER)),
            i.push("webgl shading language version:" + t.getParameter(t.SHADING_LANGUAGE_VERSION)),
            i.push("webgl stencil bits:" + t.getParameter(t.STENCIL_BITS)),
            i.push("webgl vendor:" + t.getParameter(t.VENDOR)),
            i.push("webgl version:" + t.getParameter(t.VERSION));
            try {
                var c = t.getExtension("WEBGL_debug_renderer_info");
                c ? (i.push("webgl unmasked vendor:" + t.getParameter(c.UNMASKED_VENDOR_WEBGL)),
                i.push("webgl unmasked renderer:" + t.getParameter(c.UNMASKED_RENDERER_WEBGL))) : "undefined" == typeof NODEBUG && this.log("WebGL fingerprinting is incomplete, because your browser does not have the extension WEBGL_debug_renderer_info")
            } catch (e) {}
            return t.getShaderPrecisionFormat ? (i.push("webgl vertex shader high float precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision),
            i.push("webgl vertex shader high float precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMin),
            i.push("webgl vertex shader high float precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMax),
            i.push("webgl vertex shader medium float precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision),
            i.push("webgl vertex shader medium float precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMin),
            i.push("webgl vertex shader medium float precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMax),
            i.push("webgl vertex shader low float precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).precision),
            i.push("webgl vertex shader low float precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMin),
            i.push("webgl vertex shader low float precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMax),
            i.push("webgl fragment shader high float precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision),
            i.push("webgl fragment shader high float precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMin),
            i.push("webgl fragment shader high float precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMax),
            i.push("webgl fragment shader medium float precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision),
            i.push("webgl fragment shader medium float precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMin),
            i.push("webgl fragment shader medium float precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMax),
            i.push("webgl fragment shader low float precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).precision),
            i.push("webgl fragment shader low float precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMin),
            i.push("webgl fragment shader low float precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMax),
            i.push("webgl vertex shader high int precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).precision),
            i.push("webgl vertex shader high int precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMin),
            i.push("webgl vertex shader high int precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMax),
            i.push("webgl vertex shader medium int precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).precision),
            i.push("webgl vertex shader medium int precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMin),
            i.push("webgl vertex shader medium int precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMax),
            i.push("webgl vertex shader low int precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).precision),
            i.push("webgl vertex shader low int precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMin),
            i.push("webgl vertex shader low int precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMax),
            i.push("webgl fragment shader high int precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).precision),
            i.push("webgl fragment shader high int precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMin),
            i.push("webgl fragment shader high int precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMax),
            i.push("webgl fragment shader medium int precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).precision),
            i.push("webgl fragment shader medium int precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMin),
            i.push("webgl fragment shader medium int precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMax),
            i.push("webgl fragment shader low int precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).precision),
            i.push("webgl fragment shader low int precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMin),
            i.push("webgl fragment shader low int precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMax)) : "undefined" == typeof NODEBUG && this.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"),
            i.join("~")
        },
        getAdBlock: function() {
            var e = document.createElement("div");
            e.innerHTML = "&nbsp;";
            var t = !(e.className = "adsbox");
            try {
                document.body.appendChild(e),
                t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
                document.body.removeChild(e)
            } catch (e) {
                t = !1
            }
            return t
        },
        getHasLiedLanguages: function() {
            if (void 0 !== navigator.languages)
                try {
                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2))
                        return !0
                } catch (e) {
                    return !0
                }
            return !1
        },
        getHasLiedResolution: function() {
            return screen.width < screen.availWidth || screen.height < screen.availHeight
        },
        getHasLiedOs: function() {
            var e, t = navigator.userAgent.toLowerCase(), i = navigator.oscpu, r = navigator.platform.toLowerCase();
            if (e = 0 <= t.indexOf("windows phone") ? "Windows Phone" : 0 <= t.indexOf("win") ? "Windows" : 0 <= t.indexOf("android") ? "Android" : 0 <= t.indexOf("linux") ? "Linux" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") ? "iOS" : 0 <= t.indexOf("mac") ? "Mac" : "Other",
            ("ontouchstart"in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e)
                return !0;
            if (void 0 !== i) {
                if (0 <= (i = i.toLowerCase()).indexOf("win") && "Windows" !== e && "Windows Phone" !== e)
                    return !0;
                if (0 <= i.indexOf("linux") && "Linux" !== e && "Android" !== e)
                    return !0;
                if (0 <= i.indexOf("mac") && "Mac" !== e && "iOS" !== e)
                    return !0;
                if (0 === i.indexOf("win") && 0 === i.indexOf("linux") && 0 <= i.indexOf("mac") && "other" !== e)
                    return !0
            }
            return 0 <= r.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || ((0 <= r.indexOf("linux") || 0 <= r.indexOf("android") || 0 <= r.indexOf("pike")) && "Linux" !== e && "Android" !== e || ((0 <= r.indexOf("mac") || 0 <= r.indexOf("ipad") || 0 <= r.indexOf("ipod") || 0 <= r.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || (0 === r.indexOf("win") && 0 === r.indexOf("linux") && 0 <= r.indexOf("mac") && "other" !== e || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
        },
        getHasLiedBrowser: function() {
            var e, t = navigator.userAgent.toLowerCase(), i = navigator.productSub;
            if (("Chrome" === (e = 0 <= t.indexOf("firefox") ? "Firefox" : 0 <= t.indexOf("opera") || 0 <= t.indexOf("opr") ? "Opera" : 0 <= t.indexOf("chrome") ? "Chrome" : 0 <= t.indexOf("safari") ? "Safari" : 0 <= t.indexOf("trident") ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== i)
                return !0;
            var r, n = eval.toString().length;
            if (37 === n && "Safari" !== e && "Firefox" !== e && "Other" !== e)
                return !0;
            if (39 === n && "Internet Explorer" !== e && "Other" !== e)
                return !0;
            if (33 === n && "Chrome" !== e && "Opera" !== e && "Other" !== e)
                return !0;
            try {
                throw "a"
            } catch (e) {
                try {
                    e.toSource(),
                    r = !0
                } catch (e) {
                    r = !1
                }
            }
            return !(!r || "Firefox" === e || "Other" === e)
        },
        isCanvasSupported: function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        },
        isWebGlSupported: function() {
            if (!this.isCanvasSupported())
                return !1;
            var t, e = document.createElement("canvas");
            try {
                t = e.getContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
            } catch (e) {
                t = !1
            }
            return !!window.WebGLRenderingContext && !!t
        },
        isIE: function() {
            return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
        },
        hasSwfObjectLoaded: function() {
            return void 0 !== window.swfobject
        },
        hasMinFlashInstalled: function() {
            return swfobject.hasFlashPlayerVersion("9.0.0")
        },
        addFlashDivNode: function() {
            var e = document.createElement("div");
            e.setAttribute("id", this.options.swfContainerId),
            document.body.appendChild(e)
        },
        loadSwfAndDetectFonts: function(t) {
            var e = "___fp_swf_loaded";
            window[e] = function(e) {
                t(e)
            }
            ;
            var i = this.options.swfContainerId;
            this.addFlashDivNode();
            var r = {
                onReady: e
            };
            swfobject.embedSWF(this.options.swfPath, i, "1", "1", "9.0.0", !1, r, {
                allowScriptAccess: "always",
                menu: "false"
            }, {})
        },
        getWebglCanvas: function() {
            var e = document.createElement("canvas")
              , t = null;
            try {
                t = e.getContext("webgl") || e.getContext("experimental-webgl")
            } catch (e) {}
            return t = t || null
        },
        each: function(e, t, i) {
            if (null !== e)
                if (this.nativeForEach && e.forEach === this.nativeForEach)
                    e.forEach(t, i);
                else if (e.length === +e.length) {
                    for (var r = 0, n = e.length; r < n; r++)
                        if (t.call(i, e[r], r, e) === {})
                            return
                } else
                    for (var a in e)
                        if (e.hasOwnProperty(a) && t.call(i, e[a], a, e) === {})
                            return
        },
        map: function(e, r, n) {
            var a = [];
            return null == e ? a : this.nativeMap && e.map === this.nativeMap ? e.map(r, n) : (this.each(e, function(e, t, i) {
                a[a.length] = r.call(n, e, t, i)
            }),
            a)
        },
        x64Add: function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var i = [0, 0, 0, 0];
            return i[3] += e[3] + t[3],
            i[2] += i[3] >>> 16,
            i[3] &= 65535,
            i[2] += e[2] + t[2],
            i[1] += i[2] >>> 16,
            i[2] &= 65535,
            i[1] += e[1] + t[1],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[0] += e[0] + t[0],
            i[0] &= 65535,
            [i[0] << 16 | i[1], i[2] << 16 | i[3]]
        },
        x64Multiply: function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var i = [0, 0, 0, 0];
            return i[3] += e[3] * t[3],
            i[2] += i[3] >>> 16,
            i[3] &= 65535,
            i[2] += e[2] * t[3],
            i[1] += i[2] >>> 16,
            i[2] &= 65535,
            i[2] += e[3] * t[2],
            i[1] += i[2] >>> 16,
            i[2] &= 65535,
            i[1] += e[1] * t[3],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[1] += e[2] * t[2],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[1] += e[3] * t[1],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
            i[0] &= 65535,
            [i[0] << 16 | i[1], i[2] << 16 | i[3]]
        },
        x64Rotl: function(e, t) {
            return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
            [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
        },
        x64LeftShift: function(e, t) {
            return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
        },
        x64Xor: function(e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1]]
        },
        x64Fmix: function(e) {
            return e = this.x64Xor(e, [0, e[0] >>> 1]),
            e = this.x64Multiply(e, [4283543511, 3981806797]),
            e = this.x64Xor(e, [0, e[0] >>> 1]),
            e = this.x64Multiply(e, [3301882366, 444984403]),
            e = this.x64Xor(e, [0, e[0] >>> 1])
        },
        x64hash128: function(e, t) {
            t = t || 0;
            for (var i = (e = e || "").length % 16, r = e.length - i, n = [0, t], a = [0, t], o = [0, 0], s = [0, 0], l = [2277735313, 289559509], h = [1291169091, 658871167], u = 0; u < r; u += 16)
                o = [255 & e.charCodeAt(u + 4) | (255 & e.charCodeAt(u + 5)) << 8 | (255 & e.charCodeAt(u + 6)) << 16 | (255 & e.charCodeAt(u + 7)) << 24, 255 & e.charCodeAt(u) | (255 & e.charCodeAt(u + 1)) << 8 | (255 & e.charCodeAt(u + 2)) << 16 | (255 & e.charCodeAt(u + 3)) << 24],
                s = [255 & e.charCodeAt(u + 12) | (255 & e.charCodeAt(u + 13)) << 8 | (255 & e.charCodeAt(u + 14)) << 16 | (255 & e.charCodeAt(u + 15)) << 24, 255 & e.charCodeAt(u + 8) | (255 & e.charCodeAt(u + 9)) << 8 | (255 & e.charCodeAt(u + 10)) << 16 | (255 & e.charCodeAt(u + 11)) << 24],
                o = this.x64Multiply(o, l),
                o = this.x64Rotl(o, 31),
                o = this.x64Multiply(o, h),
                n = this.x64Xor(n, o),
                n = this.x64Rotl(n, 27),
                n = this.x64Add(n, a),
                n = this.x64Add(this.x64Multiply(n, [0, 5]), [0, 1390208809]),
                s = this.x64Multiply(s, h),
                s = this.x64Rotl(s, 33),
                s = this.x64Multiply(s, l),
                a = this.x64Xor(a, s),
                a = this.x64Rotl(a, 31),
                a = this.x64Add(a, n),
                a = this.x64Add(this.x64Multiply(a, [0, 5]), [0, 944331445]);
            switch (o = [0, 0],
            s = [0, 0],
            i) {
            case 15:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 14)], 48));
            case 14:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 13)], 40));
            case 13:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 12)], 32));
            case 12:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 11)], 24));
            case 11:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 10)], 16));
            case 10:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 9)], 8));
            case 9:
                s = this.x64Xor(s, [0, e.charCodeAt(u + 8)]),
                s = this.x64Multiply(s, h),
                s = this.x64Rotl(s, 33),
                s = this.x64Multiply(s, l),
                a = this.x64Xor(a, s);
            case 8:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 7)], 56));
            case 7:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 6)], 48));
            case 6:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 5)], 40));
            case 5:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 4)], 32));
            case 4:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 3)], 24));
            case 3:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 2)], 16));
            case 2:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 1)], 8));
            case 1:
                o = this.x64Xor(o, [0, e.charCodeAt(u)]),
                o = this.x64Multiply(o, l),
                o = this.x64Rotl(o, 31),
                o = this.x64Multiply(o, h),
                n = this.x64Xor(n, o)
            }
            return n = this.x64Xor(n, [0, e.length]),
            a = this.x64Xor(a, [0, e.length]),
            n = this.x64Add(n, a),
            a = this.x64Add(a, n),
            n = this.x64Fmix(n),
            a = this.x64Fmix(a),
            n = this.x64Add(n, a),
            a = this.x64Add(a, n),
            ("00000000" + (n[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (n[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
        }
    },
    t.VERSION = "1.5.0",
    t
});

var getFinger2 = function(){
    return (new Fingerprint2).get();
}

console.log(getFinger2());

//token通过请求https://passport.58.com/58/login/init 获取

//vcodekey这个参数在https://passport.58.com/58/login/pc/dologin失败后会返回这个参数，再次请求时携带这个参数

//psid 根据rpData =搜索到return t ? c.rpData = t : window.__PP_XA_DATA ? c.rpData = t = window.__PP_XA_DATA() : void setTimeout(r, 1e3)
//通过断点调试发现这里执行多次，当window.__PP_XA_DATA不为undefined时会生成rpData.id，即psid

var _0x2243 = ['lpQti', '58,4d,4c,48,74,74,70,52,65,71,75,65,73,74', 'GJgNe', 'gdsnd', '65,6e,63,72,79,70,74', '2f,2f,70,61,73,73,70,6f,72,74,64,61,74,61,63,6f,6c,6c,65,63,74,2e,35,38,2e,63,6f,6d,2f,63,6f,6c,6c,65,63,74,2f,75,70,6c,6f,61,64', '63,6c,69,65,6e,74,59', 'hasOwnProperty', 'trident', 'LdMXb', 'fromCharCode', '73,74,6f,70,49,6d,6d,65,64,69,61,74,65,50,72,6f,70,61,67,61,74,69,6f,6e', 'length', 'AVZAt', '63,61,63,65,6c,42,75,62,6c,65', 'event', '74,61,67,4e,61,6d,65', 'xNUKR', 'POST', 'k14', 'tnAoe', 'k123', 'lTQtl', 'string', 'k122', 'k16', 'ezVEX', 'indexOf', '69,64', 'EfWlr', 'kckTh', '6b,65,79,75,70', 'k11', 'ZrFYn', 'hBGxs', 'abort', 'replace', 'defineProperty', 'LnOZX', 'HtkNK', 'UmltJ', 'k10', '73,74,6f,70,50,72,6f,70,61,67,61,74,69,6f,6e', 'iphone', 'aevAh', '(^|\x20)', 'XNWYW', 'lzakh', '6b,65,79,43,6f,64,65', 'HTML@', 'call', '76,65,72,73,69,6f,6e,3d,31,2e,30,26,65,6e,63,72,79,70,74,44,61,74,61,3d', '72,65,66,65,72,72,65,72', 'trim', 'prototype', 'k13', '74,61,72,67,65,74', 'cbuna', '2f,2f,70,61,73,73,70,6f,72,74,64,61,74,61,63,6f,6c,6c,65,63,74,2e,35,38,2e,63,6f,6d,2f,63,6f,6c,6c,65,63,74,2f,69,6e,69,74', 'ipad', 'split', 'random', 'WUqRR', 'getTime', '62,61,69,64,75,2e,63,6f,6d', 'application/x-www-form-urlencoded', '73,65,74,52,65,71,75,65,73,74,48,65,61,64,65,72', 'zgkHq', '=([^;]*)(;|$)', '6c,6f,63,61,74,69,6f,6e', 'send', '74,69,6d,65', '72,65,61,64,79,53,74,61,74,65', 'return\x20this', 'XMawM', 'create', '75,73,65,72,41,67,65,6e,74', 'push', '70,61,72,65,6e,74', 'apply', 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', 'toLowerCase', '6e,6f,64,65,54,79,70,65', 'Microsoft.XMLHTTP', '63,6f,6f,6b,69,65', 'pHCtE', 'Utf8', '66,6f,63,75,73', 'undefined', '73,74,61,74,75,73', 'Content-Type', '49,4e,50,55,54', 'object', '41,63,74,69,76,65,58,4f,62,6a,65,63,74', '64,6f,6d,61,69,6e', '77,69,74,68,43,72,65,64,65,6e,74,69,61,6c,73', '61,74,74,61,63,68,45,76,65,6e,74', '6f,70,65,6e', 'match', 'KtZdg', '63,6c,69,63,6b', 'BniPN', '63,68,69,6c,64,4e,6f,64,65,73', '70,72,65,76,65,6e,74,44,65,66,61,75,6c,74', 'parse', '48,54,4d,4c', 'AoVmf', 'value', 'toString', 'pHKBC', '39,5a,58,4e,54,77,34,55,50,44,7a,4d,36,66,2f,4d', '6d,6f,64,65', '65,6e,63', 'SOGLI', '63,6c,61,73,73,4e,61,6d,65', 'TwZoV', 'pVwIt', '72,65,6d,6f,76,65,45,76,65,6e,74,4c,69,73,74,65,6e,65,72', 'MQQNv', 'test', 'stringify', 'MFlXZ', '61,64,64,45,76,65,6e,74,4c,69,73,74,65,6e,65,72', 'BxWra', 'ZkzKc', '43,72,79,70,74,6f,4a,53', '6e,61,76,69,67,61,74,6f,72', 'uyyBw', 'constructor', 'id58', '72,65,74,75,72,6e,56,61,6c,75,65', '66,72,6f,6d,43,68,61,72,43,6f,64,65', 'HaEsu', 'Qrvuo', '64,65,74,61,63,68,45,76,65,6e,74', '72,65,73,70,6f,6e,73,65,54,65,78,74', 'OzTmI', 'from', 'nrNLP', '73,65,6e,64', '70,61,72,65,6e,74,4e,6f,64,65', '73,72,63,45,6c,65,6d,65,6e,74', 'android', 'userAgent', 'VgHZL', 'nNVrT', 'isArray', 'k121', 'AHtmV', 'zFDIf', '62,6c,75,72', 'QtpOb', 'krgFA', 'name', 'Module', 'k12'];


(function(_0x11714f, _0x2243ce) {
    var _0x33493f = function(_0x186cfc) {
        while (--_0x186cfc) {
            _0x11714f['push'](_0x11714f['shift']());
        }
    };
    _0x33493f(++_0x2243ce);
}(_0x2243, 0xad));

var _0x3349 = function(_0x11714f, _0x2243ce) {
    _0x11714f = _0x11714f - 0x0;
    var _0x33493f = _0x2243[_0x11714f];
    return _0x33493f;
};

var _0x4e4bda = function _0x262c95() {
    return _0x3349('0x3f')[_0x3349('0x13')](/[xy]/g, function(_0x1f5963) {
        if (_0x3349('0x2d') !== 'dUzFp') {
            var _0x493e82 = 0x10 * Math['random']() | 0x0;
            return ('x' == _0x1f5963 ? _0x493e82 : 0x3 & _0x493e82 | 0x8)[_0x3349('0x5b')](0x10);
        } else {
            function _0x357452() {
                var _0x8fe88f = 0x10 * Math[_0x3349('0x2c')]() | 0x0;
                return ('x' == _0x1f5963 ? _0x8fe88f : 0x3 & _0x8fe88f | 0x8)[_0x3349('0x5b')](0x10);
            }
        }
    });
};

var psid = _0x4e4bda();
console.log(psid);

//下面开始解析callback参数，直接搜索SDK_CALLBACK_FUN_就行

var getCallBack = function(){
    var timestr =  (new Date).getTime() + Math.floor(1e3 * Math.random());
    return 'SDK_CALLBACK_FUN_'+timestr+'.successFun';
}

console.log(getCallBack());
