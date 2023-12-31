const express = require('express');
const app = express();
const PORT = 3000;
const add_recording = require('./helper');
const bodyParser = require('body-parser');
const jsonmParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('audio_files'));

app.get('/', (req, res)=>{
    res.send("HEY");
});

app.get('/music1.mp3', (req, res)=>{
    res.sendFile("./music1.mp3");
});

app.post('/add_recording', urlencodedParser, async (req, res)=>{
    // POST request format:
    // curl -X POST http://localhost:3000/add_recording -d url="https://www.youtube.com/watch?v=RthqM7grWl0"

    try{
        let return_val = await add_recording(req.body.url);
        if(return_val === "FAIL"){
            res.send({code: "FAIL"});
        }
        else{
            res.send({code: "SUCCESS", url: return_val.url});
        }
    }
    catch(e){
        console.log("ERROR ON SERVER: \n" + e);
    }
});


app.listen(PORT, ()=> console.log('Server listetning on port: ' + PORT));