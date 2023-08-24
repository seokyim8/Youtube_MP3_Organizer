import { StyleSheet, View, Text } from 'react-native'
import { useState, useEffect, ReactElement } from 'react'
import Custom_button from './Custom_button'
import { Recording as recording } from "../classes/Recording"
// import Sound from 'react-native-sound'

type Prop = {
    recording: recording
}

export default function Recording(props: Prop): ReactElement {
    const [is_playing, set_is_playing] = useState(false);

    function playPause(): void {
        if(props.recording.sound === undefined){
            console.log("Error: audio file does not exist for the selected recording");
            return;
        }
        if(is_playing){
            props.recording.sound.pause();
            set_is_playing(false);
        }
        else{
            set_is_playing(true);
            props.recording.sound.play(success =>{
                if(success){
                    set_is_playing(false);
                }
                else{
                    console.log("Error: audio playing has failed");
                    set_is_playing(false);
                }
            });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.recording_name}>{props.recording.name}</Text>
            <Custom_button text="Play Music" onPress={playPause} />
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