import { StyleSheet, View, Text, Pressable } from 'react-native'
import { ReactElement } from 'react'

type Prop = {
    text: string,
    onPress: any
}

export default function Custom_button(props: Prop): ReactElement {
    return (
        <Pressable style={({pressed})=>{
            if(pressed){
                return styles.pressed;
            }
            else{
                return styles.button;
            }
        }} onPress={props.onPress}> 
            <Text style={styles.button_text}>{props.text}</Text>
        </Pressable>
    );//HOW DID props.onPress WORK???? WHAT?
}

const styles = StyleSheet.create({
    button: {
        margin: 3,
        padding: 7,
        backgroundColor: "white",

    },
    pressed: {
        margin: 3,
        padding: 7,
        backgroundColor: "#e8e2d1",
        borderRadius: 10
    },
    button_text: {
        color: "black",
        fontSize: 13
    }
});