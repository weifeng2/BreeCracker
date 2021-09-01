##### 破解地址

https://www.aqistudy.cn/ 

https://m.zq12369.com/goapi/open/memcache/mobile/index 这个请求的参数和返回参数都加密了


##### 说明

通过XHR断点很容易找到加解密位置，加解密的算法经过分析都是常见的加密算法，可以使用python直接实现即可。
index.js其中代码较多，是因为将其中的加解密算法都放进去了，在实际分析中，如果采用的都是常见的算法，使用编程语言直接实现逻辑即可。





