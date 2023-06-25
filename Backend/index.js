 require("dotenv").config();
 const express = require('express');
 const app=express();
 const server=require('http').createServer(app);
 const cors=require('cors');
 const mysql=require('mysql2');
 const bodyParser=require('body-parser')
const { METHODS } = require('http');
const  axios  = require('axios');

  const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE
  });
  
 app.use(cors());
 app.use(express.json())
 app.use(bodyParser.urlencoded({extended:true}))

 const PORT=process.env.PORT||3456;
 
 app.post('/api/insert/', (req, res) => {
	// Insert the data into the database
	let musicName = req.body.musicName;
	const mettingId = req.body.mettingId;
  
	// Modify the song name to lowercase without spaces
	musicName = musicName.toLowerCase().replace(/\s+/g, '');
  
	const sqlInsert = `INSERT INTO users(song, mettingid) VALUES (?, ?)`;
	db.query(sqlInsert, [musicName, mettingId], (err, result) => {
	  if (err) {
		console.error(err);
		res.status(500).send('Error inserting data into the database');
	  } else {
		console.log(result);
		res.status(200).send('Data inserted into the database successfully');
	  }
	});
  });
  
 
  app.post('/api/update/', (req, res) => {
	// Update the database with the new metting id
	const mettingId = req.body.mettingId;
	const updatemettingId = req.body.updatemettingId;
  
	const sqlUpdate = 'UPDATE users SET updatemettingid = ? WHERE mettingid = ?';
	db.query(sqlUpdate, [updatemettingId, mettingId], (err, result) => {
	  if (err) {
		console.error(err);
		res.status(500).send('Error updating data in the database');
	  } else {
		console.log(result);
		res.status(200).send('Data updated in the database successfully');
	  }
	});
  });
  
  app.get('/api/get/', (req, res) => {
	// Retrieve all records from the database
	const sqlSelect = 'SELECT * FROM users';
	db.query(sqlSelect, (err, result) => {
	  if (err) {
		console.error(err);
		res.status(500).send('Error retrieving data from the database');
	  } else {
		res.status(200).send(result);
	  }
	});
  });

  app.get('/api/get/:mettingId', (req, res) => {
	// Retrieve the mettingId parameter from the request URL
	const mettingId = req.params.mettingId;
  
	// Construct the SQL query to retrieve the song based on the mettingId
	const sqlSelectSong = `SELECT song FROM users WHERE mettingid = ?`;
  
	// Execute the query to retrieve the song
	db.query(sqlSelectSong, [mettingId], (err, songResult) => {
	  if (err) {
		console.error(err);
		res.status(500).send('Error retrieving data from the database');
	  } else {
		if (songResult.length > 0) {
		  // Retrieve the song name from the first record
		  const songName = songResult[0].song;
  
		  // Construct the SQL query for retrieving records with the same song name
		  const sqlSelectSimilarSongs = `SELECT updatemettingid FROM users WHERE song = ?`;
  
		  // Execute the query for retrieving records with the same song name
		  db.query(sqlSelectSimilarSongs, [songName], (err, similarSongsResult) => {
			if (err) {
			  console.error(err);
			  res.status(500).send('Error retrieving similar songs from the database');
			} else {
			  res.status(200).send(similarSongsResult);
			}
		  });
		} else {
		  res.status(200).send([]);
		}
	  }
	});
  });

  app.delete('/api/delete/:mettingId', (req, res) => {
	const mettingId = req.params.mettingId;
	const sqlDelete = `DELETE FROM users WHERE mettingid = ?`;
  
	db.query(sqlDelete, [mettingId], (err, result) => {
	  if (err) {
		console.error(err);
		res.status(500).send('Error deleting user data');
	  } else {
		res.send('User data deleted successfully');
	  }
	});
  });

  app.get('/api/users/count', (req, res) => {
	const sqlCount = 'SELECT COUNT(*) AS count FROM users';
  
	db.query(sqlCount, (err, result) => {
	  if (err) {
		console.error(err);
		res.sendStatus(500);
	  } else {
		const count = result[0].count;
		res.json({ count });
	  }
	});
  });
  
  

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