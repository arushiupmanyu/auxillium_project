//node server hosts socket io connections
// const io=require('socket.io')(8000)
const httpServer = require("http").createServer();
const io=require("socket.io")(httpServer,{
    cors:{origin:"http://127.0.0.1:5500",
    methods:["GET","POST"]


    }
});
// const socket=io("")

const users = {};

io.on('connection',socket =>{
        socket.on('new-user-joined',name=>{
        console.log("New user",name);
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
        
        });

        socket.on('send',message=>{
            socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
        });
})

httpServer.listen(8000);
