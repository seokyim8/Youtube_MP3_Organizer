import {StyleSheet, View, Text, Button, FlatList} from "react-native"
import { ReactElement, useState } from "react"
import Custom_button from "./Custom_button";

type Prop = {
    navigation: any,
    route: any
}

export default function Album_screen(props: Prop): ReactElement {
    let name: string;
    const mp3s = useState<Array<string>>([]);

    function add_recording(): void {

    }
    function delete_album(): void {

    }

    return (
        <View style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.title}>{props.route.params.album.name}</Text>
            </View>
            <View style={styles.top_bar}>
                <Custom_button text="Back" onPress={()=>props.navigation.navigate("Main_screen")} />
                <Custom_button text="Add Recording" onPress={add_recording} />
                <Custom_button text="Delete" onPress={delete_album} />
            </View>
            <FlatList data={props.route.params.album.recordings} renderItem={(item_data)=>{
                return (
                    <View>
                        <Text>{item_data.item.name}</Text>
                    </View>
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