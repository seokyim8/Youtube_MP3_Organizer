const {Builder, By, Key, until } = require('selenium-webdriver');
let chromeDriver = require('selenium-webdriver/chrome');
const webdriver = require("selenium-webdriver");
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const dir = __dirname + '/audio_files'; //PLACE FOR DOWNLOAD
const headers = require('../api_key');

module.exports = add_recording;

async function add_recording(url){
    let id = get_video_id(url);
    const options = {
        method: 'GET',
        url: 'https://youtube-mp3-download1.p.rapidapi.com/dl',
        params: {id: id},
        headers: headers
    };
    return await request_api(options);
}

function get_video_id(url){
    let index = url.length-1;
    while(index > 0 && url.charAt(index) != '='){
        index--;
    }
    return url.substring(index+1);
}

async function request_api(options){
    try {
        const response = await axios.request(options);
        if(response["data"]["link"] === undefined){
            console.log("http request was not successful");
            return "FAIL";
        }
        else{
            return await download_file(response["data"]["link"], options.params.id);
        }
    } catch (e) {
        console.error("Error: " + e);
        return "FAIL";
    }
}

async function download_file(link, id) {
    let song_name = path.join(dir, id+".mp3");
    if(fs.existsSync(song_name)){
        return {code: "SUCCESS", url: song_name};
    }

    let options = new chromeDriver.Options();
    options.setUserPreferences({
        "download.default_directory": dir
    });
    options.addArguments("--headless=new");
    let driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome())
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

    let file_num = 0;
    fs.readdir(dir, (err, files)=>{
        file_num = files.length;
    });

    try { 
        await driver.get(link);
        await driver.sleep(1000);
        await driver.findElement(By.css('a.dlbtn')).click();
        await driver.sleep(3000);
    } 
    catch(e){
        console.log("Error: " + e);
        return "FAIL";
    }
    finally {
        options.setUserPreferences({
            "download.default_directory": "%USERPROFILE%\Downloads"
        })
        await driver.quit();

        //check if the number of files changed
        let new_num = 0;
        fs.readdir(dir, (err, files)=>{
            new_num = files.length;
        });
        if(file_num === new_num){
            return "FAIL";
        }
        else{
            //order files in audio_files and get most recent one
            const files = fs.readdirSync(dir).filter(file=>fs.lstatSync(path.join(dir,file)).isFile())
            .map(file => path.join(dir,file))
            .sort((a,b) => fs.lstatSync(b).mtime.getTime() - fs.lstatSync(a).mtime.getTime());
            const recent = (files.length === 0 ? undefined: files[0]);
            //debugging
            console.log(recent);
            //
            fs.rename(recent, path.join(dir,id+".mp3"), (err)=>{
                if(err){
                    console.log("ERROR: modifiying file name unsuccessful");
                    console.log(err);
                }
            });

            return {code: "SUCCESS", url: path.join(dir, id, ".mp3")};
        }
    }
};