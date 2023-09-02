const express = require('express');
const app = express();
const PORT = 3000;
const add_recording = require('./helper');

app.use(express.static('audio_files'));

app.get('/', (req, res)=>{
    res.send("HEY");
});

app.get('/music1.mp3', (req, res)=>{
    res.sendFile("./music1.mp3");
});

app.post('/add_recording', (req, res)=>{
    let return_val = add_recording();
    if(return_val === "FAIL"){
        res.send({code: "FAIL"});
    }
    else{
        res.send({code: "SUCCESS", url: return_val.url});
    }
});


app.listen(PORT, ()=> console.log('Server listetning on port: ' + PORT));