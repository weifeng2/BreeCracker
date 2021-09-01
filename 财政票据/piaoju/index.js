

var  SMDecode = function(A) {
    A = A.replace(/\r/g, ""),
    A = A.replace(/\n/g, "");
    var t = mdecode(A);
    return t
}

function toByteArray(A) {
    var t, e, r, a, i, o = A.length;
    var n = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,62,,62,,63,52,53,54,55,56,57,58,59,60,61,,,,,,,,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,,,,,63,,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];
    a = c(A),
    i = new Uint8Array(3 * o / 4 - a),
    e = a > 0 ? o - 4 : o;
    var l = 0;
    for (t = 0; t < e; t += 4)
        r = n[A.charCodeAt(t)] << 18 | n[A.charCodeAt(t + 1)] << 12 | n[A.charCodeAt(t + 2)] << 6 | n[A.charCodeAt(t + 3)],
        i[l++] = r >> 16 & 255,
        i[l++] = r >> 8 & 255,
        i[l++] = 255 & r;
    return 2 === a ? (r = n[A.charCodeAt(t)] << 2 | n[A.charCodeAt(t + 1)] >> 4,
    i[l++] = 255 & r) : 1 === a && (r = n[A.charCodeAt(t)] << 10 | n[A.charCodeAt(t + 1)] << 4 | n[A.charCodeAt(t + 2)] >> 2,
    i[l++] = r >> 8 & 255,
    i[l++] = 255 & r),
    i
}

function c(A) {
    var t = A.length;
    if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
    return "=" === A[t - 2] ? 2 : "=" === A[t - 1] ? 1 : 0
}

var mdecode = function(A) {
    for (var t = '5C6C3BD1B96FB7020F3175CE71BD91B3', e = toByteArray(A), c = i(t), l = [], B = 0; B < e.length; B += 16)
        l = l.concat(_gencode({
            source: e.slice(B, B + 16),
            key: c
        }, 0));
    return o(l).replace(/(\s*$)/g, "")
}

var _gencode = function(A, t) {
    var block = 16;
    point = 0,
    inLen = 16;
    var e = new Array(32);
    sms4KeyExt(A.key, e, t);
    var r = new Array(16)
      , n = new Array(16)
      , s = [];
    while (inLen >= block)
        r = A.source.slice(point, point + 16),
        sms4Crypt(r, n, e),
        s = s.concat(n),
        inLen -= block,
        point += block;
    return s
}

var byteSub = function(A) {
    var t = [214,144,233,254,204,225,61,183,22,182,20,194,40,251,44,5,43,103,154,118,42,190,4,195,170,68,19,38,73,134,6,153,156,66,80,244,145,239,152,122,51,84,11,67,237,207,172,98,228,179,28,169,201,8,232,149,128,223,148,250,117,143,63,166,71,7,167,252,243,115,23,186,131,89,60,25,230,133,79,168,104,107,129,178,113,100,218,139,248,235,15,75,112,86,157,53,30,36,14,94,99,88,209,162,37,34,124,59,1,33,120,135,212,0,70,87,159,211,39,82,76,54,2,231,160,196,200,158,234,191,138,210,64,199,56,181,163,247,242,206,249,97,21,161,224,174,93,164,155,52,26,85,173,147,50,48,245,140,177,227,29,246,226,46,130,102,202,96,192,41,35,171,13,83,78,111,213,219,55,69,222,253,142,47,3,255,106,114,109,108,91,81,141,27,175,146,187,221,188,127,17,217,92,65,31,16,90,216,10,193,49,136,165,205,123,189,45,116,208,18,184,229,180,176,137,105,151,74,12,150,119,126,101,185,241,9,197,110,198,132,24,240,125,236,58,220,77,32,121,238,95,62,215,203,57,72];
    return (255 & t[A >>> 24 & 255]) << 24 | (255 & t[A >>> 16 & 255]) << 16 | (255 & t[A >>> 8 & 255]) << 8 | 255 & t[255 & A]
}

var l1 = function(A) {
    return A ^ rotl(A, 2) ^ rotl(A, 10) ^ rotl(A, 18) ^ rotl(A, 24)
}

var l2 = function(A) {
    return A ^ rotl(A, 13) ^ rotl(A, 23)
}

var rotl = function(A, t) {
    return A << t | A >>> 32 - t
}

function o(A) {
    if ("string" === typeof A)
        return A;
    for (var t = "", e = A, r = 0; r < e.length; r++) {
        var n = e[r].toString(2)
          , s = n.match(/^1+?(?=0)/);
        if (s && 8 == n.length) {
            for (var a = s[0].length, i = e[r].toString(2).slice(7 - a), o = 1; o < a; o++)
                i += e[o + r].toString(2).slice(2);
            t += String.fromCharCode(parseInt(i, 2)),
            r += a - 1
        } else
            t += String.fromCharCode(e[r])
    }
    return t
}

var sms4Crypt = function(A, t, e) {
    var r, n;
    x = new Array(4),
    tmp = new Array(4);
    for (var s = 0; s < 4; s++)
        tmp[0] = 255 & A[0 + 4 * s],
        tmp[1] = 255 & A[1 + 4 * s],
        tmp[2] = 255 & A[2 + 4 * s],
        tmp[3] = 255 & A[3 + 4 * s],
        x[s] = tmp[0] << 24 | tmp[1] << 16 | tmp[2] << 8 | tmp[3];
    for (r = 0; r < 32; r += 4)
        n = x[1] ^ x[2] ^ x[3] ^ e[r + 0],
        n = byteSub(n),
        x[0] = x[0] ^ l1(n),
        n = x[2] ^ x[3] ^ x[0] ^ e[r + 1],
        n = byteSub(n),
        x[1] = x[1] ^ l1(n),
        n = x[3] ^ x[0] ^ x[1] ^ e[r + 2],
        n = byteSub(n),
        x[2] = x[2] ^ l1(n),
        n = x[0] ^ x[1] ^ x[2] ^ e[r + 3],
        n = byteSub(n),
        x[3] = x[3] ^ l1(n);
    for (var a = 0; a < 16; a += 4)
        t[a] = x[3 - a / 4] >>> 24 & 255,
        t[a + 1] = x[3 - a / 4] >>> 16 & 255,
        t[a + 2] = x[3 - a / 4] >>> 8 & 255,
        t[a + 3] = 255 & x[3 - a / 4]
}

var sms4KeyExt = function(A, t, r) {
   var decrypt = 0;

    var e = [462357,472066609,943670861,1415275113,1886879365,2358483617,2830087869,3301692121,3773296373,4228057617,404694573,876298825,1347903077,1819507329,2291111581,2762715833,3234320085,3705924337,4177462797,337322537,808926789,1280531041,1752135293,2223739545,2695343797,3166948049,3638552301,4110090761,269950501,741554753,1213159005,1684763257];
    for (var n, s, a = new Array, i = new Array(4), o = 0; o < 4; o++)
        i[0] = 255 & A[0 + 4 * o],
        i[1] = 255 & A[1 + 4 * o],
        i[2] = 255 & A[2 + 4 * o],
        i[3] = 255 & A[3 + 4 * o],
        a[o] = i[0] << 24 | i[1] << 16 | i[2] << 8 | i[3];
    for (a[0] ^= 2746333894,
    a[1] ^= 1453994832,
    a[2] ^= 1736282519,
    a[3] ^= 2993693404,
    n = 0; n < 32; n += 4)
        s = a[1] ^ a[2] ^ a[3] ^ e[n + 0],
        s = byteSub(s),
        t[n + 0] = a[0] ^= l2(s),
        s = a[2] ^ a[3] ^ a[0] ^ e[n + 1],
        s = byteSub(s),
        t[n + 1] = a[1] ^= l2(s),
        s = a[3] ^ a[0] ^ a[1] ^ e[n + 2],
        s = byteSub(s),
        t[n + 2] = a[2] ^= l2(s),
        s = a[0] ^ a[1] ^ a[2] ^ e[n + 3],
        s = byteSub(s),
        t[n + 3] = a[3] ^= l2(s);
    if (r === decrypt)
        for (n = 0; n < 16; n++)
            s = t[n],
            t[n] = t[31 - n],
            t[31 - n] = s
}

function i(A) {
    var t, e, r = new Array;
    t = A.length;
    for (var n = 0; n < t; n++)
        e = A.charCodeAt(n),
        e >= 65536 && e <= 1114111 ? (r.push(e >> 18 & 7 | 240),
        r.push(e >> 12 & 63 | 128),
        r.push(e >> 6 & 63 | 128),
        r.push(63 & e | 128)) : e >= 2048 && e <= 65535 ? (r.push(e >> 12 & 15 | 224),
        r.push(e >> 6 & 63 | 128),
        r.push(63 & e | 128)) : e >= 128 && e <= 2047 ? (r.push(e >> 6 & 31 | 192),
        r.push(63 & e | 128)) : r.push(255 & e);
    return r
}

function u(A) {
    var r = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"];
    return r[A >> 18 & 63] + r[A >> 12 & 63] + r[A >> 6 & 63] + r[63 & A]
}

function d(A, t, e) {
    for (var r, n = [], s = t; s < e; s += 3)
        r = (A[s] << 16) + (A[s + 1] << 8) + A[s + 2],
        n.push(u(r));
    return n.join("")
}

function fromByteArray(A) {
    var r = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"];

    for (var t, e = A.length, n = e % 3, s = "", a = [], i = 16383, o = 0, c = e - n; o < c; o += i)
        a.push(d(A, o, o + i > c ? c : o + i));
    return 1 === n ? (t = A[e - 1],
    s += r[t >> 2],
    s += r[t << 4 & 63],
    s += "==") : 2 === n && (t = (A[e - 2] << 8) + A[e - 1],
    s += r[t >> 10],
    s += r[t >> 4 & 63],
    s += r[t << 2 & 63],
    s += "="),
    a.push(s),
    a.join("")
}


var encode = function(A) {
    var encrypt = 1;
    for (var t = '5C6C3BD1B96FB7020F3175CE71BD91B3', e = i(A), o = i(t), c = [], l = 0; l < e.length; l += 16)
        c = c.concat(_gencode({
            source: e.slice(l, l + 16),
            key: o
        }, encrypt));
    return fromByteArray(c)
}

var SM4Encode = function(A) {
    console.log(A);
    var t = encode(A);
    return t
}

var my = {};
my.SM4Encode = SM4Encode;//加密
my.SMDecode = SMDecode;//解密



