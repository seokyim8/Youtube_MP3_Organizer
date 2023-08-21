import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

export default function Album_list(props){
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