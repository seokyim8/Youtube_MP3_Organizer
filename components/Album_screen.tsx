import { StyleSheet, View, Text, Button, FlatList, Alert } from "react-native"
import { ReactElement, useState } from "react"
import Custom_button from "./Custom_button";
import { Album } from "../classes/Album"
import { Recording as Recording_class } from "../classes/Recording"
import { DeviceEventEmitter } from "react-native";
import Add_recording_modal from "./Add_recording_modal";
import Recording from "./Recording"


type Prop = {
    navigation: any,
    route: any
}

type Albums = {
    [key: string]: Album
}

export default function Album_screen(props: Prop): ReactElement {
    //States
    const [need_refresh, set_need_refresh] = useState(false);
    const [modal_visible, set_modal_visible] = useState(false);
    const [entered_name, set_entered_name] = useState('');
    const [entered_url, set_entered_url] = useState('');

    function add_recording(): void {
        if(entered_name === '' || entered_url === ''){
            Alert.alert("Error: Empty Fields", "The recording name and URL cannot be empty.");
            return;
        }
        let recording = new Recording_class(entered_name, entered_url,"");
        DeviceEventEmitter.emit("add_recording", {album: props.route.params.album, recording: recording});
        set_need_refresh((prev)=>!prev);
        set_modal_visible(()=>false);
        set_entered_name(()=>'');
        set_entered_url(()=>'');
    }
    function delete_album(): void {
        DeviceEventEmitter.emit("delete_album", {album: props.route.params.album});
        props.navigation.navigate("Main_screen");
    }

    return (
        <View style={styles.container}>
            <Add_recording_modal modal_visible={modal_visible} set_modal_visible={set_modal_visible} 
            entered_name={entered_name} onPress={add_recording} entered_url={entered_url} 
            set_entered_name={set_entered_name} set_entered_url={set_entered_url} />
            <View style={styles.title_container}>
                <Text style={styles.title}>{props.route.params.album.name}</Text>
            </View>
            <View style={styles.top_bar}>
                <Custom_button text="Back" onPress={()=>props.navigation.navigate("Main_screen")} />
                <Custom_button text="Add Recording" onPress={()=>set_modal_visible(true)} />
                <Custom_button text="Delete" onPress={delete_album} />
            </View>
            <FlatList data={props.route.params.album.recordings} extraData={need_refresh}
            renderItem={(item_data)=>{
                return (
                    <Recording recording={item_data.item}/>
                );
            }}></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        paddingTop: 15,
        flex: 1,
        backgroundColor: "white"
    },
    top_bar: {
        margin: 5,
        padding: 5,
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: "gray",
        justifyContent: "space-between"
    },
    title: {
        fontFamily: "Menlo",
        fontSize: 18
    },
    title_container: {
        margin: 5, 
        paddingTop: 10,
        justifyContent: "center",
        flexDirection: "row"
    }
});