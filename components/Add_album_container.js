import { StyleSheet, TextInput, View, Button} from 'react-native';

export default function Add_album_container(props){
  function add_to_list(){
      props.set_album_list((album_list)=>{
        return [...album_list, props.entered_name];
      })
      console.log(props.album_list);
  }
  function set_text(entered_text){
    props.set_entered_name(entered_text)
  }

  return (
      <View style={styles.add_album_container}>
      <TextInput style={styles.add_album_box} placeholder='Type new album name' onChangeText={set_text}></TextInput>
      <Button style={styles.add_album_button} title='Add Album' onPress={add_to_list}></Button>
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