import { StyleSheet, TextInput, View, Button} from 'react-native';
import { useState } from 'react';
import Add_album_container from "./components/Add_album_container"
import Album_list from "./components/Album_list"

export default function App() {
  const [entered_name, set_entered_name] = useState<string>('');
  const [album_list, set_album_list] = useState<Array<string>>([]);//TODO: Array value has to change later
  let album_name_dictionary = {};

  return (
    <View style={styles.app}>
      <Add_album_container set_album_list ={set_album_list} album_list = {album_list} 
      entered_name={entered_name} set_entered_name={set_entered_name} 
      album_name_dictionary={album_name_dictionary}/>
      <Album_list album_list={album_list} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#fff'
  }
});
