import { StyleSheet, TextInput, View, Button} from 'react-native';
import { useState, ReactElement } from 'react';
import Add_album_container from "./Add_album_container"
import Album_list from "./Album_list"

type Prop = {
    navigation: any
}

export default function Main_screen(prop: Prop):ReactElement {
  //States
  const [entered_name, set_entered_name] = useState<string>('');
  const [album_list, set_album_list] = useState<Array<string>>([]);//TODO: Array value has to change later
  const [album_name_dictionary, set_album_name_dictionary] = useState<Object>({});

  return (
    <View style={styles.app}>
      <Add_album_container set_album_list ={set_album_list} album_list = {album_list} 
      entered_name={entered_name} set_entered_name={set_entered_name} 
      album_name_dictionary={album_name_dictionary} set_album_name_dictionary={set_album_name_dictionary}/>
      <Album_list album_list={album_list} navigation={prop.navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#fff',
    flex: 1
  }
});
