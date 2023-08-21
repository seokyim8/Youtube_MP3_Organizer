import { StyleSheet, TextInput, View, Button} from 'react-native';
import { useState } from 'react';
import Album from "./components/Add_album_container.js"

export default function App() {
  const [entered_name, set_entered_name] = useState('');
  const [album_list, set_album_list] = useState([]);

  return (
    <View style={styles.app}>
      <Album set_album_list ={set_album_list} album_list = {album_list} 
      entered_name={entered_name} set_entered_name={set_entered_name} />
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#fff',
    justifyContent: 'column',
  }
});
