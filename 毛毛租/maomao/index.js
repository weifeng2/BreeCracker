//https://www.maomaozu.com/index/index.json  这个请求参数通过XHR断点就可以找到位置，是在发送请求后进行了拦截，断住后单步调试即可，注意要放掉公共代码的调试
//请求参数加密很简单就是一个很简单的AES加密，就不摘了，自己直接使用AES加密即可，注意是CBC、Pkcs7，密钥55b3b62613aef1a0
//被加密内容就是一个简单的时间戳对象 {"expire":1630549874547}
/**
e: function(e, a) {
    return e = n.default.enc.Utf8.parse(e),
    a = n.default.enc.Utf8.parse(a),
    n.default.AES.encrypt(a, e, {
        mode: n.default.mode.CBC,
        padding: n.default.pad.Pkcs7,
        iv: e
    }).toString()
}
 */

//加密部分是通过 axios.interceptors进行拦截的request,分析解密时直接使用axios.interceptors搜索代码很快找到解密位置
/**
 * 
 *    aes_decrypt: function(e) {
            var a = this.k(0).split("").reverse().join("");
            return this.d(a, e)
        }
 * 
 */

//很容易看出这个解密也是一个AES算法，只不过把密钥参数倒序排列后作为新的密钥。


