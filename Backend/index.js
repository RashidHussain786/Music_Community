 const express = require('express');
 const app=express();
 const server=require('http').createServer(app);
 const cors=require('cors');
 const mysql=require('mysql2');
 const bodyParser=require('body-parser')
const { METHODS } = require('http');
const  axios  = require('axios');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'Rashid#1234',
	database: 'musicdatabase'
  });

 app.use(cors());
 app.use(express.json())
 app.use(bodyParser.urlencoded({extended:true}))

 const PORT=process.env.PORT||3456;
 
 app.post('/api/insert/',(req,res)=>{
	 //Inser the data into the database
	 const musicName=req.body.musicName
	 const mettingId=req.body.mettingId
	 const sqlInsert=`INSERT INTO users(song,mettingid)VALUES(?,?)`;
	 db.query(sqlInsert,[musicName,mettingId],(err,result)=>{
        console.log(result)
	 })
 })
 
 app.post('/api/update/',(req,res)=>{
	 //update the database with new metting id
	 const mettingId=req.body.mettingId
	 const updatemettingId=req.body.updatemettingId
	 const sqlUpdate=`UPDATE users SET updatemettingid=(?) WHERE mettingid='${mettingId}'`;
	 db.query(sqlUpdate,[updatemettingId],(err,result)=>{
		 if(err){
			 console.error(err)
		 }else{
			 console.log(result)
		 }
	 })	 
 })

 app.get('/api/get/',(req,res)=>{
	 // get the all database api
	const sqlSelect=`SELECT*FROM users`;
	db.query(sqlSelect,(err,result)=>{
		res.send(result)
	})
})

 const io=require('socket.io')(server, {
	cors:{
	   origin: "*",
	   METHODS: '["GET","POST"]'

	}
});

 io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

 server.listen(PORT,()=>console.log(`Server listing On Port ${PORT}`));