import { StyleSheet, TextInput, View, Button, Alert} from 'react-native';
import { ReactElement } from 'react';
import { Album } from "../classes/Album"
import Custom_button from './Custom_button';

type Albums = {
  [key: string]: Album
}

type Prop = {
  entered_name: string,
  set_entered_name: Function,
  album_list: Array<Album>,
  set_album_list: Function,
  album_name_dictionary: Albums,
  set_album_name_dictionary: Function
}

export default function Add_album_container(props: Prop): ReactElement {
  function add_to_list(){
    if(props.entered_name === ''){
      Alert.alert("Error: Empty Title", "Cannot have an empty title for an album.");
      return;
    }
    else if(props.entered_name in props.album_name_dictionary){
      Alert.alert("Error: Duplicate Name", "An album with the given name already exists.");
      return;
    }

    //create a new instance of album and add it to list and dictionary
    let temp = new Album(props.entered_name, []);

    props.set_album_list((album_list: Array<Album>): Array<Album> =>{
      return [...album_list, temp];
    });
    
    props.set_album_name_dictionary((dictionary: Albums): Albums =>{
      dictionary[props.entered_name] = temp;
      return dictionary;
    });
  }

  function set_text(entered_text: string): void {
    props.set_entered_name(entered_text);
  }

  return (
    <View style={styles.add_album_container}>
      <TextInput style={styles.add_album_box} placeholder='Type new album name' onChangeText={set_text}></TextInput>
      <Custom_button text='Add Album' onPress={add_to_list} />
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
  }
});