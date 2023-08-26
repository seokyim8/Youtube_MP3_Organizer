import { StyleSheet, View, Text } from 'react-native'
import { useState, useEffect, ReactElement } from 'react'
import Custom_button from './Custom_button'
import { Recording as recording } from "../classes/Recording"
import { Audio } from 'expo-av';

type Prop = {
    recording: recording
}

export default function Recording(props: Prop): ReactElement {
    const [is_playing, set_is_playing] = useState(false);
    const [sound, setSound] = useState<any>();

    async function playSound() {
        console.log('Loading Sound');
        await Audio.setAudioModeAsync({playsInSilentModeIOS: true});
        console.log("Audio mode set");
        const sound = new Audio.Sound();
        await sound.loadAsync({
            uri: "https://sample-music.netlify.app/death%20bed.mp3"
        },
        {shouldPlay: true});
        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        // return sound
        //   ? () => {
        //       console.log('Unloading Sound');
        //       sound.unloadAsync();
        //     }
        //   : undefined;
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