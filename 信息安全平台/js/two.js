debugger;

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

function go(_0x41c5f3) {
  function _0x1c5d2d() {
    var _0x58a4b7 = window["navigator"]["userAgent"],
        _0x23ed56 = ["Phantom"];

    for (var _0x27bf71 = 0; _0x27bf71 < _0x23ed56["length"]; _0x27bf71++) {
      if (_0x58a4b7["indexOf"](_0x23ed56[_0x27bf71]) != -1) {
        return true;
      }
    }

    if (window["callPhantom"] || window["_phantom"] || window["Headless"] || window["navigator"]["webdriver"] || window["navigator"]["__driver_evaluate"] || window["navigator"]["__webdriver_evaluate"]) {
      return true;
    }
  }

  if (_0x1c5d2d()) {
    return;
  }

  var _0x4e302d = new Date();

  function _0x56539d(_0x12778d, _0x5c9e1f) {
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

  var _0x4ba11f = _0x56539d(_0x41c5f3["ct"], _0x41c5f3["bts"]);

  if (_0x4ba11f) {
    var _0x5e03b6;

    if (_0x41c5f3["wt"]) {
      _0x5e03b6 = parseInt(_0x41c5f3["wt"]) > _0x4ba11f[1] ? parseInt(_0x41c5f3["wt"]) - _0x4ba11f[1] : 500;
    } else {
      _0x5e03b6 = 1500;
    }

    setTimeout(function () {
      document["cookie"] = _0x41c5f3["tn"] + "=" + _0x4ba11f[0] + ";Max-age=" + _0x41c5f3["vt"] + "; path = /";
      location["href"] = location["pathname"] + location["search"];
    }, _0x5e03b6);
  } else {
    alert("\u8BF7\u6C42\u9A8C\u8BC1\u5931\u8D25");
  }
}

go({
  "bts": ["1630662253.011|0|tFe", "VG%2FxylYsPzbvsLVmpLUeUw%3D"],
  "chars": "fKmPGjNCznQXmDLhuRBvlX",
  "ct": "091c750bd754eee965d78f35bcb770745148a61b6615160e7790a157b8e7c558",
  "ha": "sha256",
  "tn": "__jsl_clearance_s",
  "vt": "3600",
  "wt": "1500"
});