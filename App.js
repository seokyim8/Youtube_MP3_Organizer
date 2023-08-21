import { StyleSheet, TextInput, View, Button} from 'react-native';
import { useState } from 'react';
import Add_album_container from "./components/Add_album_container.js"
import Album_list from "./components/Album_list.js"

export default function App() {
  const [entered_name, set_entered_name] = useState('');
  const [album_list, set_album_list] = useState([]);

  return (
    <View style={styles.app}>
      <Add_album_container set_album_list ={set_album_list} album_list = {album_list} 
      entered_name={entered_name} set_entered_name={set_entered_name} />
      <Album_list album_list={album_list} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#fff',
    justifyContent: 'column',
  }
});
