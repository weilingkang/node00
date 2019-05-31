
const http=require('http');//引入核心模块http

const server=http.createServer();//创建一个服务

//启动服务器，占用一个系统端口
server.listen(8090,function () {
    console.log("请打开浏览器访问：127.0.0.1:8090");
})

//绑定事件request                  //node系统调用这个函数
server.on('request',function (request,response) {
    console.log(request.method);

    //设置响应的头信息
    response.setHeader('content-type','text/html;charset=utf-8');
    // responds.write('我的直觉是对的');//写入文本流
    response.end('魏灵康<h1>要减肥！<h1/>');//传回客户端

})
