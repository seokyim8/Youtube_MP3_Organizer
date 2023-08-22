import { StyleSheet, TextInput, View, Button} from 'react-native';
import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main_screen from './components/Main_screen';
import Album_screen from './components/Album_screen';

export default function App() {
  //States
  const [entered_name, set_entered_name] = useState<string>('');
  const [album_list, set_album_list] = useState<Array<string>>([]);//TODO: Array value has to change later
  const [album_name_dictionary, set_album_name_dictionary] = useState<Object>({});

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Main_screen" component={Main_screen}/>
        <Stack.Screen options={{headerShown: false}} name="Album_screen" component={Album_screen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#fff',
    flex: 1
  }
});
