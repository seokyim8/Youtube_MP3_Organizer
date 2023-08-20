import { StyleSheet, TextInput, View, Button} from 'react-native';
import Album from "./components/Add_album_container.js"

export default function App() {
  return (
    <View style={styles.app}>
      <Album />
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
