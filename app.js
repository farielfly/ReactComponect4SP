var http = require('http');
var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var fs = require('fs');
var path = require("path");

app.get('/', function (req, res) {
    res.sendfile('app.html');
});

app.use('/webparts', express.static(__dirname + '/webparts'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/components/img', express.static(__dirname + '/components/img'));

http.listen(1982, function () {
    console.log('listening on *:1982');
});

io.on('connection',function(socket){
    socket.on("GetWebparts",function(){
        var data = [];
        fs.readdirSync(__dirname + "/webparts").forEach(function(item) {
            var info = fs.statSync(__dirname + "/webparts/" + item);
            if (info.isDirectory()) {
                fs.readdirSync(__dirname + "/webparts/" + item).forEach(function(subItem){
                    var path = __dirname + "/webparts/" + item + "/" + subItem;
                    var subInfo = fs.statSync(__dirname + "/webparts/" + item + "/" + subItem);
                    if(!subInfo.isDirectory()){
                        if(path.indexOf('.html') > 0 ){
                            data.push("webparts/" + item + "/" + subItem);
                        }
                    }
                });
            }
        });
        socket.emit('ReturnWebparts',{ data :data });
    });
});
