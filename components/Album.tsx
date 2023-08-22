import {StyleSheet, View, Text, Pressable} from "react-native"
import { ReactElement, useState } from "react"

type Prop = {

}

export default function Album(prop: Prop): ReactElement {
    let name: string;
    const mp3s = useState<Array<string>>([]);

    return (
        <Pressable style={styles.album}>
            
        </Pressable>
    );
}

const styles = StyleSheet.create({
    album: {
        margin: 7,
        padding: 7,
        borderColor: "#fae3c5",
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: "#fae3c5"
    },
    album_name: {
        color: "#33160b",
        fontFamily: "Menlo"
    }
});