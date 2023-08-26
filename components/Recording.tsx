import { StyleSheet, View, Text } from 'react-native'
import { useState, useEffect, ReactElement, useRef } from 'react'
import Custom_button from './Custom_button'
import { Recording as recording } from "../classes/Recording"
import { Audio } from 'expo-av';

type Prop = {
    recording: recording
}

export default function Recording(props: Prop): ReactElement {
    const [is_playing, set_is_playing] = useState(false);
    const sound = useRef(new Audio.Sound());

    async function playSound() {
        if(is_playing){
            console.log("Pausing sound");
            sound.current.pauseAsync();
            set_is_playing((prev)=>!prev);
        }
        else{
            console.log('Playing Sound');
            await sound.current.playAsync();
            set_is_playing((prev)=>!prev);
        }
    }

    async function load_audio(){
        console.log('Loading Sound');
        await Audio.setAudioModeAsync({playsInSilentModeIOS: true});
        console.log("Audio mode set");
        await sound.current.loadAsync({
            uri: "http://localhost:3000/music1.mp3"
        });
    }

    useEffect(() => {
        //load audio 
        load_audio();

        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.current.unloadAsync();
            }
          : undefined;
      }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.recording_name}>{props.recording.name}</Text>
            <Custom_button text="Play Music" onPress={playSound} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center"
    },
    recording_name: {
        margin: 5,
        padding: 5
    }
});