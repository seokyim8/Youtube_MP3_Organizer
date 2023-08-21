import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import { ReactElement } from 'react';

type Prop = {
    album_list: Array<string>
  }

export default function Album_list(props: Prop): ReactElement{
    return (
        <FlatList
        data={props.album_list}
        renderItem={(item_data)=>{
            return (
                <View>
                    <Text>{item_data.item}</Text>
                </View>
            )
        }} 
        style={styles.album_list} />
    )
}

const styles = StyleSheet.create({
    album_list: {
        margin: 2,
        padding: 2,
        borderColor: "black"
    }
});