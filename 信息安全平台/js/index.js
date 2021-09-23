//首次访问https://www.cnvd.org.cn/flaw/list.htm 注入的代码实际就是document.cookie =__jsl_clearance_s
//设置了__jsl_clearance_s的值，其次首次访问服务端返回了一个__jsluid_s值

//第2次访问携带上面的两个cookie值访问https://www.cnvd.org.cn/flaw/list.htm，服务端又注入了一个脚本，是个sonjson
//抓包发现第2次请求后改变了__jsl_clearance_s的值，第3次请求时还是携带这两个cookie请求

//这个是第2次注入的脚本生成__jsl_clearance_s值的方法

var _0x41c5f3 = {
    "bts": [
        "1630663670.222|0|WeE", 
        "LDrXvKbV7ab%2F3ujuk%2FVWPY%3D"
    ], 
    "chars": "ckctoeaCDFzGDYQFnATlGD", 
    "ct": "7ff0a489e3b650804c4e8b6918ad8d8a13f3e5f5ce11a7af13ec488e7d93c122", 
    "ha": "sha256", 
    "tn": "__jsl_clearance_s", 
    "vt": "3600", 
    "wt": "1500"
};

  var _0x4e302d = new Date();
  function hash(_0x419559) {
    var _0x2e3728 = 8;
    var _0x397665 = 0;
  
    function _0x10ee16(_0x589c89, _0x265105) {
      var _0x27c20d = (_0x589c89 & 65535) + (_0x265105 & 65535);
  
      var _0x5e0e43 = (_0x589c89 >> 16) + (_0x265105 >> 16) + (_0x27c20d >> 16);
  
      return _0x5e0e43 << 16 | _0x27c20d & 65535;
    }
  
    function _0x1bea24(_0x214f96, _0x56ca90) {
      return _0x214f96 >>> _0x56ca90 | _0x214f96 << 32 - _0x56ca90;
    }
  
    function _0x46c7cb(_0x3bb54d, _0x1b595f) {
      return _0x3bb54d >>> _0x1b595f;
    }
  
    function _0xe462f(_0x8617d5, _0x3ca53a, _0x18a342) {
      return _0x8617d5 & _0x3ca53a ^ ~_0x8617d5 & _0x18a342;
    }
  
    function _0x1a246b(_0x32024f, _0x5af567, _0x557c25) {
      return _0x32024f & _0x5af567 ^ _0x32024f & _0x557c25 ^ _0x5af567 & _0x557c25;
    }
  
    function _0x16f925(_0x338e9a) {
      return _0x1bea24(_0x338e9a, 2) ^ _0x1bea24(_0x338e9a, 13) ^ _0x1bea24(_0x338e9a, 22);
    }
  
    function _0x5b82af(_0x15fcd3) {
      return _0x1bea24(_0x15fcd3, 6) ^ _0x1bea24(_0x15fcd3, 11) ^ _0x1bea24(_0x15fcd3, 25);
    }
  
    function _0x49df79(_0xafcafd) {
      return _0x1bea24(_0xafcafd, 7) ^ _0x1bea24(_0xafcafd, 18) ^ _0x46c7cb(_0xafcafd, 3);
    }
  
    function _0x5db53f(_0x26da8a) {
      return _0x1bea24(_0x26da8a, 17) ^ _0x1bea24(_0x26da8a, 19) ^ _0x46c7cb(_0x26da8a, 10);
    }
  
    function _0x1bf24e(_0x579fac, _0x5e6c87) {
      var _0x34a5f7 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
  
      var _0xdaf7ca = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
  
      var _0x15053a = new Array(64);
  
      var _0x1fe237, _0x2190e0, _0x3bb665, _0x3f8576, _0x57c646, _0x19f5fe, _0x5edeb7, _0x5863e7, _0x1c0a15, _0x303b23;
  
      var _0x5665b0, _0x1d3d25;
  
      _0x579fac[_0x5e6c87 >> 5] |= 128 << 24 - _0x5e6c87 % 32;
      _0x579fac[(_0x5e6c87 + 64 >> 9 << 4) + 15] = _0x5e6c87;
  
      for (var _0x1c0a15 = 0; _0x1c0a15 < _0x579fac["length"]; _0x1c0a15 += 16) {
        _0x1fe237 = _0xdaf7ca[0];
        _0x2190e0 = _0xdaf7ca[1];
        _0x3bb665 = _0xdaf7ca[2];
        _0x3f8576 = _0xdaf7ca[3];
        _0x57c646 = _0xdaf7ca[4];
        _0x19f5fe = _0xdaf7ca[5];
        _0x5edeb7 = _0xdaf7ca[6];
        _0x5863e7 = _0xdaf7ca[7];
  
        for (var _0x303b23 = 0; _0x303b23 < 64; _0x303b23++) {
          if (_0x303b23 < 16) {
            _0x15053a[_0x303b23] = _0x579fac[_0x303b23 + _0x1c0a15];
          } else {
            _0x15053a[_0x303b23] = _0x10ee16(_0x10ee16(_0x10ee16(_0x5db53f(_0x15053a[_0x303b23 - 2]), _0x15053a[_0x303b23 - 7]), _0x49df79(_0x15053a[_0x303b23 - 15])), _0x15053a[_0x303b23 - 16]);
          }
  
          _0x5665b0 = _0x10ee16(_0x10ee16(_0x10ee16(_0x10ee16(_0x5863e7, _0x5b82af(_0x57c646)), _0xe462f(_0x57c646, _0x19f5fe, _0x5edeb7)), _0x34a5f7[_0x303b23]), _0x15053a[_0x303b23]);
          _0x1d3d25 = _0x10ee16(_0x16f925(_0x1fe237), _0x1a246b(_0x1fe237, _0x2190e0, _0x3bb665));
          _0x5863e7 = _0x5edeb7;
          _0x5edeb7 = _0x19f5fe;
          _0x19f5fe = _0x57c646;
          _0x57c646 = _0x10ee16(_0x3f8576, _0x5665b0);
          _0x3f8576 = _0x3bb665;
          _0x3bb665 = _0x2190e0;
          _0x2190e0 = _0x1fe237;
          _0x1fe237 = _0x10ee16(_0x5665b0, _0x1d3d25);
        }
  
        _0xdaf7ca[0] = _0x10ee16(_0x1fe237, _0xdaf7ca[0]);
        _0xdaf7ca[1] = _0x10ee16(_0x2190e0, _0xdaf7ca[1]);
        _0xdaf7ca[2] = _0x10ee16(_0x3bb665, _0xdaf7ca[2]);
        _0xdaf7ca[3] = _0x10ee16(_0x3f8576, _0xdaf7ca[3]);
        _0xdaf7ca[4] = _0x10ee16(_0x57c646, _0xdaf7ca[4]);
        _0xdaf7ca[5] = _0x10ee16(_0x19f5fe, _0xdaf7ca[5]);
        _0xdaf7ca[6] = _0x10ee16(_0x5edeb7, _0xdaf7ca[6]);
        _0xdaf7ca[7] = _0x10ee16(_0x5863e7, _0xdaf7ca[7]);
      }
  
      return _0xdaf7ca;
    }
  
    function _0x247520(_0x3e98d1) {
      var _0x325977 = Array();
  
      var _0x11b32a = 255;
  
      for (var _0x2b6460 = 0; _0x2b6460 < _0x3e98d1["length"] * _0x2e3728; _0x2b6460 += _0x2e3728) {
        _0x325977[_0x2b6460 >> 5] |= (_0x3e98d1["charCodeAt"](_0x2b6460 / _0x2e3728) & _0x11b32a) << 24 - _0x2b6460 % 32;
      }
  
      return _0x325977;
    }
  
    function _0x19fc7f(_0x1bffa2) {
      var _0x1cd5f9 = new RegExp("\n", "g");
  
      _0x1bffa2 = _0x1bffa2["replace"](_0x1cd5f9, "\n");
      var _0x2308d8 = "";
  
      for (var _0x20a291 = 0; _0x20a291 < _0x1bffa2["length"]; _0x20a291++) {
        var _0x2272c9 = _0x1bffa2["charCodeAt"](_0x20a291);
  
        if (_0x2272c9 < 128) {
          _0x2308d8 += String["fromCharCode"](_0x2272c9);
        } else {
          if (_0x2272c9 > 127 && _0x2272c9 < 2048) {
            _0x2308d8 += String["fromCharCode"](_0x2272c9 >> 6 | 192);
            _0x2308d8 += String["fromCharCode"](_0x2272c9 & 63 | 128);
          } else {
            _0x2308d8 += String["fromCharCode"](_0x2272c9 >> 12 | 224);
            _0x2308d8 += String["fromCharCode"](_0x2272c9 >> 6 & 63 | 128);
            _0x2308d8 += String["fromCharCode"](_0x2272c9 & 63 | 128);
          }
        }
      }
  
      return _0x2308d8;
    }
  
    function _0x3d9ff5(_0x286c67) {
      var _0x3e9c40 = "0123456789abcdef";
      var _0x4a9348 = "";
  
      for (var _0x45ee80 = 0; _0x45ee80 < _0x286c67["length"] * 4; _0x45ee80++) {
        _0x4a9348 += _0x3e9c40["charAt"](_0x286c67[_0x45ee80 >> 2] >> (3 - _0x45ee80 % 4) * 8 + 4 & 15) + _0x3e9c40["charAt"](_0x286c67[_0x45ee80 >> 2] >> (3 - _0x45ee80 % 4) * 8 & 15);
      }
  
      return _0x4a9348;
    }
  
    _0x419559 = _0x19fc7f(_0x419559);
    return _0x3d9ff5(_0x1bf24e(_0x247520(_0x419559), _0x419559["length"] * _0x2e3728));
  }

function _0x56539d(_0x12778d, _0x5c9e1f) {
    debugger;
    var _0x28f247 = _0x41c5f3["chars"]["length"];

    for (var _0x5c3cf3 = 0; _0x5c3cf3 < _0x28f247; _0x5c3cf3++) {
      for (var _0x40a96a = 0; _0x40a96a < _0x28f247; _0x40a96a++) {
        var _0xcea1e1 = _0x5c9e1f[0] + _0x41c5f3["chars"]["substr"](_0x5c3cf3, 1) + _0x41c5f3["chars"]["substr"](_0x40a96a, 1) + _0x5c9e1f[1];

        if (hash(_0xcea1e1) == _0x12778d) {
          return [_0xcea1e1, new Date() - _0x4e302d];
        }
      }
    }
}

var bts = [
    "1630663670.222|0|WeE", 
    "LDrXvKbV7ab%2F3ujuk%2FVWPY%3D"
];
var ct = "7ff0a489e3b650804c4e8b6918ad8d8a13f3e5f5ce11a7af13ec488e7d93c122";

console.log(_0x56539d(ct,bts));
//请求流程整理如下
//1.请求https://www.cnvd.org.cn/flaw/list.htm ，解析返回文本，eval获取到__jsl_clearance_s，获取__jsl_clearance_s和__jsluid_s
//2.再次请求从返回内容中解析文本获取bts和ct，然后调用函数_0x56539d生成__jsl_clearance_s的值
//3.再次请求，携带两个cookie

//如果服务端每次返回文本位置不同，算法不同(提前配置好算法策略)，解析文本就比较费劲了，只能使用浏览器访问后，通过浏览器获取cookie的方式了



