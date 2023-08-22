import { StyleSheet, TextInput, View, Button} from 'react-native';
import { ReactElement } from 'react';

type Prop = {
  entered_name: string,
  set_entered_name: Function,
  album_list: Array<string>,
  set_album_list: Function,
  album_name_dictionary: Object,
  set_album_name_dictionary: Function
}

export default function Add_album_container(props: Prop): ReactElement {
  function add_to_list(){
    if(props.entered_name === ''){
      console.log("Error: Cannot add empty string as the title of an album.");
      return;
    }
    else if(props.entered_name in props.album_name_dictionary){
      console.log("Error: An album with the given name already exists.")
      return;
    }

    props.set_album_list((album_list: Array<string>): Array<string> =>{
      return [...album_list, props.entered_name];
    });
    
    props.set_album_name_dictionary((dictionary: Object): Object =>{
      dictionary[props.entered_name] = props.entered_name;
      return dictionary;
    });
  }

  function set_text(entered_text: string): void {
    props.set_entered_name(entered_text);
  }

  return (
    <View style={styles.add_album_container}>
      <TextInput style={styles.add_album_box} placeholder='Type new album name' onChangeText={set_text}></TextInput>
      <Button title='Add Album' onPress={add_to_list}></Button>
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
    borderBottomColor: "gray",
    fontFamily: "Menlo"
  },
  add_album_box: {
    borderWidth: 0.3,
    padding: 5,
    borderColor: 'gray',
    flex: 7,
    marginRight: 10,
    borderRadius: 6
  },
  add_album_button: {
    //TODO
  }
});