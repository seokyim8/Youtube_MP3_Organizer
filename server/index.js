const express = require('express');
const app = express();
const PORT = 3000;
const add_recording = require('helper');

app.use(express.static('audio_files'));

app.get('/', (req, res)=>{
    res.send("HEY");
});

app.get('/music1.mp3', (req, res)=>{
    res.sendFile("./music1.mp3");
});

app.get()


app.listen(PORT, ()=> console.log('Server listetning on port: ' + PORT));