import { StyleSheet, TextInput, View, Button} from 'react-native';

export default function Add_album_container(props){
    return (
        <View style={styles.add_album_container}>
        <TextInput style={styles.add_album_box} placeholder='Type new album name'></TextInput>
        <Button style={styles.add_album_button} title='Add Album'></Button>
      </View>
    )
}

const styles = StyleSheet.create({
    add_album_container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingTop: 35,
        borderBottomWidth: 0.3,
        borderBottomColor: "gray"
      },
      add_album_box: {
        borderWidth: 0.3,
        padding: 5,
        borderColor: 'gray',
        flex: 7,
        marginRight: 10
      },
      add_album_button: {
        flex: 2
      }
});