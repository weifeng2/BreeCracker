//通过返回值pc.data去搜索代码很容易找到解密位置

var decrypt = function(t, e) {
    if (t) {
        for (var n = t.split(""), i = e.split(""), a = {}, r = [], o = 0; o < n.length / 2; o++)
            a[n[o]] = n[n.length / 2 + o];
        for (var s = 0; s < e.length; s++)
            r.push(a[i[s]]);
        return r.join("")
    }
}

var t = 'EHlUFZ6aQ70cC,h-134,809.2765%+'
var e = "ca6ClFcl6cZFc67ZUFCca0lFCCHCcFClclaFc6l67FcU6aHFcUl07FcHC6HFcHlZ6FCZClZFCaacaF0H666FcUZU7FcclU0FcZlCcFcaUcCFcCallFcl6H0FcCCcZFclalZFcllllFcHllUFcl0Z0FcHlH7FCZClCFcZ00aF0lHacFcZUl7";

console.log(decrypt(t,e));

//上面的e是服务端返回的,下面解析t的值,，发现t的值是通过请求http://zhishu.baidu.com/Interface/ptbk?uniqid=b3fa223bde7bbd72e34d6036af2a7aa5获取的
//首先解析uniqid的生成,是通过请求http://zhishu.baidu.com/api/SearchApi/index?area=0&word=[[%7B%22name%22:%22%E8%85%BE%E8%AE%AF%22,%22wordType%22:1%7D]]&days=30获取的

//请求http://zhishu.baidu.com/api/SearchApi/index?area这个地址主要是需要cookie ,否则请求不过，可以拦截请求去掉cookie，看下具体需要哪些Cookie
//需要BAIDUID=FB9FBBC8AF7FF5B5CE1C2D8751B8D173:FG=1;  BDUSS=zM5UUE1V2RDZnMtTENhM085YlFNbzV1ZVVSWlA4cnVxbDhkS2t4ZzU1ZzFCVmhoRVFBQUFBJCQAAAAAAAAAAAEAAAAzjaMCc29uZzU1NXR2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADV4MGE1eDBhU; 
/**
 * BIDUPSID 请求http://zhishu.baidu.com/v2/main/index.html返回的
 * BDUSS 这个是登录请求https://passport.baidu.com/v2/api/?login返回的
 * 这两个应该是登录的凭证，否则会被踢下来
 */

//破解就是太繁琐了，并不复杂，就不整了，有需要再说吧。



