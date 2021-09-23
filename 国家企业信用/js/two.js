debugger;

function hash(_0x112723) {
  var _0xca6d1b = 8;
  var _0x243260 = 0;

  function _0xd22b64(_0x1bc65e, _0x3ef058) {
    var _0x416e56 = (_0x1bc65e & 65535) + (_0x3ef058 & 65535);

    var _0x3a7d9c = (_0x1bc65e >> 16) + (_0x3ef058 >> 16) + (_0x416e56 >> 16);

    return _0x3a7d9c << 16 | _0x416e56 & 65535;
  }

  function _0x45b375(_0x20a17d, _0xcba7d7) {
    return _0x20a17d >>> _0xcba7d7 | _0x20a17d << 32 - _0xcba7d7;
  }

  function _0x28c774(_0x3fd166, _0x441692) {
    return _0x3fd166 >>> _0x441692;
  }

  function _0x35be9e(_0x5df6b6, _0x22f7d9, _0x555c38) {
    return _0x5df6b6 & _0x22f7d9 ^ ~_0x5df6b6 & _0x555c38;
  }

  function _0x39d2b0(_0x256c95, _0xc679c3, _0x183c22) {
    return _0x256c95 & _0xc679c3 ^ _0x256c95 & _0x183c22 ^ _0xc679c3 & _0x183c22;
  }

  function _0x39eedc(_0x5c8fb0) {
    return _0x45b375(_0x5c8fb0, 2) ^ _0x45b375(_0x5c8fb0, 13) ^ _0x45b375(_0x5c8fb0, 22);
  }

  function _0x188680(_0x343129) {
    return _0x45b375(_0x343129, 6) ^ _0x45b375(_0x343129, 11) ^ _0x45b375(_0x343129, 25);
  }

  function _0x312925(_0x5d4e10) {
    return _0x45b375(_0x5d4e10, 7) ^ _0x45b375(_0x5d4e10, 18) ^ _0x28c774(_0x5d4e10, 3);
  }

  function _0x52d195(_0x36e34f) {
    return _0x45b375(_0x36e34f, 17) ^ _0x45b375(_0x36e34f, 19) ^ _0x28c774(_0x36e34f, 10);
  }

  function _0x4a61e9(_0x1c030e, _0x121b64) {
    var _0x356e9f = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);

    var _0x7602a6 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);

    var _0x1f217e = new Array(64);

    var _0x23146b, _0x48fdef, _0x23de5f, _0x105df7, _0x50ee0c, _0x47fecb, _0x274c53, _0x37adb0, _0x5be616, _0x6bc053;

    var _0x4320ee, _0x3d1684;

    _0x1c030e[_0x121b64 >> 5] |= 128 << 24 - _0x121b64 % 32;
    _0x1c030e[(_0x121b64 + 64 >> 9 << 4) + 15] = _0x121b64;

    for (var _0x5be616 = 0; _0x5be616 < _0x1c030e["length"]; _0x5be616 += 16) {
      _0x23146b = _0x7602a6[0];
      _0x48fdef = _0x7602a6[1];
      _0x23de5f = _0x7602a6[2];
      _0x105df7 = _0x7602a6[3];
      _0x50ee0c = _0x7602a6[4];
      _0x47fecb = _0x7602a6[5];
      _0x274c53 = _0x7602a6[6];
      _0x37adb0 = _0x7602a6[7];

      for (var _0x6bc053 = 0; _0x6bc053 < 64; _0x6bc053++) {
        if (_0x6bc053 < 16) {
          _0x1f217e[_0x6bc053] = _0x1c030e[_0x6bc053 + _0x5be616];
        } else {
          _0x1f217e[_0x6bc053] = _0xd22b64(_0xd22b64(_0xd22b64(_0x52d195(_0x1f217e[_0x6bc053 - 2]), _0x1f217e[_0x6bc053 - 7]), _0x312925(_0x1f217e[_0x6bc053 - 15])), _0x1f217e[_0x6bc053 - 16]);
        }

        _0x4320ee = _0xd22b64(_0xd22b64(_0xd22b64(_0xd22b64(_0x37adb0, _0x188680(_0x50ee0c)), _0x35be9e(_0x50ee0c, _0x47fecb, _0x274c53)), _0x356e9f[_0x6bc053]), _0x1f217e[_0x6bc053]);
        _0x3d1684 = _0xd22b64(_0x39eedc(_0x23146b), _0x39d2b0(_0x23146b, _0x48fdef, _0x23de5f));
        _0x37adb0 = _0x274c53;
        _0x274c53 = _0x47fecb;
        _0x47fecb = _0x50ee0c;
        _0x50ee0c = _0xd22b64(_0x105df7, _0x4320ee);
        _0x105df7 = _0x23de5f;
        _0x23de5f = _0x48fdef;
        _0x48fdef = _0x23146b;
        _0x23146b = _0xd22b64(_0x4320ee, _0x3d1684);
      }

      _0x7602a6[0] = _0xd22b64(_0x23146b, _0x7602a6[0]);
      _0x7602a6[1] = _0xd22b64(_0x48fdef, _0x7602a6[1]);
      _0x7602a6[2] = _0xd22b64(_0x23de5f, _0x7602a6[2]);
      _0x7602a6[3] = _0xd22b64(_0x105df7, _0x7602a6[3]);
      _0x7602a6[4] = _0xd22b64(_0x50ee0c, _0x7602a6[4]);
      _0x7602a6[5] = _0xd22b64(_0x47fecb, _0x7602a6[5]);
      _0x7602a6[6] = _0xd22b64(_0x274c53, _0x7602a6[6]);
      _0x7602a6[7] = _0xd22b64(_0x37adb0, _0x7602a6[7]);
    }

    return _0x7602a6;
  }

  function _0x1f2bd6(_0x4973a3) {
    var _0x7f06a3 = Array();

    var _0x53827e = 255;

    for (var _0x6494be = 0; _0x6494be < _0x4973a3["length"] * _0xca6d1b; _0x6494be += _0xca6d1b) {
      _0x7f06a3[_0x6494be >> 5] |= (_0x4973a3["charCodeAt"](_0x6494be / _0xca6d1b) & _0x53827e) << 24 - _0x6494be % 32;
    }

    return _0x7f06a3;
  }

  function _0x44d1ac(_0x1ef87a) {
    var _0x5b8e8d = new RegExp("\n", "g");

    _0x1ef87a = _0x1ef87a["replace"](_0x5b8e8d, "\n");
    var _0x36c3e4 = "";

    for (var _0x3c4c32 = 0; _0x3c4c32 < _0x1ef87a["length"]; _0x3c4c32++) {
      var _0xc63bd0 = _0x1ef87a["charCodeAt"](_0x3c4c32);

      if (_0xc63bd0 < 128) {
        _0x36c3e4 += String["fromCharCode"](_0xc63bd0);
      } else {
        if (_0xc63bd0 > 127 && _0xc63bd0 < 2048) {
          _0x36c3e4 += String["fromCharCode"](_0xc63bd0 >> 6 | 192);
          _0x36c3e4 += String["fromCharCode"](_0xc63bd0 & 63 | 128);
        } else {
          _0x36c3e4 += String["fromCharCode"](_0xc63bd0 >> 12 | 224);
          _0x36c3e4 += String["fromCharCode"](_0xc63bd0 >> 6 & 63 | 128);
          _0x36c3e4 += String["fromCharCode"](_0xc63bd0 & 63 | 128);
        }
      }
    }

    return _0x36c3e4;
  }

  function _0x2507a6(_0x2c981a) {
    var _0x507c2f = "0123456789abcdef";
    var _0x239d9e = "";

    for (var _0x219fad = 0; _0x219fad < _0x2c981a["length"] * 4; _0x219fad++) {
      _0x239d9e += _0x507c2f["charAt"](_0x2c981a[_0x219fad >> 2] >> (3 - _0x219fad % 4) * 8 + 4 & 15) + _0x507c2f["charAt"](_0x2c981a[_0x219fad >> 2] >> (3 - _0x219fad % 4) * 8 & 15);
    }

    return _0x239d9e;
  }

  _0x112723 = _0x44d1ac(_0x112723);
  return _0x2507a6(_0x4a61e9(_0x1f2bd6(_0x112723), _0x112723["length"] * _0xca6d1b));
}

function go(_0x1870ab) {
  function _0xe18f3c() {
    var _0xc377a2 = window["navigator"]["userAgent"],
        _0x295b70 = ["Phantom"];

    for (var _0x4664b9 = 0; _0x4664b9 < _0x295b70["length"]; _0x4664b9++) {
      if (_0xc377a2["indexOf"](_0x295b70[_0x4664b9]) != -1) {
        return true;
      }
    }

    if (window["callPhantom"] || window["_phantom"] || window["Headless"] || window["navigator"]["webdriver"] || window["navigator"]["__driver_evaluate"] || window["navigator"]["__webdriver_evaluate"]) {
      return true;
    }
  }

  if (_0xe18f3c()) {
    return;
  }

  var _0x541adc = new Date();

  function _0x5a9a04(_0x25a27d, _0x743323) {
    var _0xf185c3 = _0x1870ab["chars"]["length"];

    for (var _0x2f07bc = 0; _0x2f07bc < _0xf185c3; _0x2f07bc++) {
      for (var _0x3d756b = 0; _0x3d756b < _0xf185c3; _0x3d756b++) {
        var _0x422bc4 = _0x743323[0] + _0x1870ab["chars"]["substr"](_0x2f07bc, 1) + _0x1870ab["chars"]["substr"](_0x3d756b, 1) + _0x743323[1];

        if (hash(_0x422bc4) == _0x25a27d) {
          return [_0x422bc4, new Date() - _0x541adc];
        }
      }
    }
  }

  var _0xa360c7 = _0x5a9a04(_0x1870ab["ct"], _0x1870ab["bts"]);

  if (_0xa360c7) {
    var _0x3b40b0;

    if (_0x1870ab["wt"]) {
      _0x3b40b0 = parseInt(_0x1870ab["wt"]) > _0xa360c7[1] ? parseInt(_0x1870ab["wt"]) - _0xa360c7[1] : 500;
    } else {
      _0x3b40b0 = 1500;
    }

    setTimeout(function () {
      document["cookie"] = _0x1870ab["tn"] + "=" + _0xa360c7[0] + ";Max-age=" + _0x1870ab["vt"] + "; path = /";
      //location["href"] = location["pathname"] + location["search"];
    }, _0x3b40b0);
  } else {
    alert("\u8BF7\u6C42\u9A8C\u8BC1\u5931\u8D25");
  }
}

go({
  "bts": ["1630909359.136|0|yam", "wIcLE9%2Fbvl89hpNgM2Lkhc%3D"],
  "chars": "jpOrJKWQCRsjEHXlQzLYJN",
  "ct": "4e16246d8af1d075a7316f3ab1ffa0a71a32fb05ec5404dfa52fe5e0aea9721f",
  "ha": "sha256",
  "tn": "__jsl_clearance",
  "vt": "3600",
  "wt": "1500"
});