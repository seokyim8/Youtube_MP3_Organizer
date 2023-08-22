import {StyleSheet, View, Text, Button} from "react-native"
import { ReactElement, useState } from "react"

type Prop = {
    navigation: any
}

export default function Album(props: Prop): ReactElement {
    let name: string;
    const mp3s = useState<Array<string>>([]);

    return (
        <Button title="GO BACK" onPress={()=>props.navigation.navigate("Main_screen")}></Button>
    );
}

const styles = StyleSheet.create({

});