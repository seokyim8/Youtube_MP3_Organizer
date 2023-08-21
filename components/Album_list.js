import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

export default function Album_list(props){
    return (
        <FlatList>
            {props.album_list.map((title)=>(
                <View key={title}>
                    <Text>{title}</Text>
                </View>
            ))}
        </FlatList>
    )
}

const styles = StyleSheet.create({

});