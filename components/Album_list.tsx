import {StyleSheet, View, Text, Button, FlatList, Pressable} from 'react-native';
import { ReactElement } from 'react';

type Prop = {
    album_list: Array<string>,
    navigation: any
}

export default function Album_list(props: Prop): ReactElement{
    function onPressFunction(){
        props.navigation.navigate('Album_screen');
    }

    return (
        <FlatList
        data={props.album_list}
        renderItem={(item_data)=>{
            return (
                <Pressable style={({pressed})=>{
                    if(pressed){
                        return styles.pressed;
                    }
                    else{
                        return styles.album;
                    }
                }}
                onPress={onPressFunction}>
                    <Text style={styles.album_name}>{item_data.item}</Text>
                </Pressable>
            )
        }} 
        style={styles.album_list} />    
    );
}

const styles = StyleSheet.create({
    album_list: {
        margin: 2,
        padding: 2,
        borderColor: "white",
        borderWidth: 1
    },
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
    },
    pressed: {
        margin: 7,
        padding: 7,
        borderColor: "#fae3c5",
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: "#8f7518"
    }
});