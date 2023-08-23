import { StyleSheet, TextInput, View, Button} from 'react-native';
import { useState, ReactElement, useEffect} from 'react';
import Add_album_container from "./Add_album_container"
import Album_list from "./Album_list"
import { Album } from "../classes/Album"
import { Recording } from "../classes/Recording"
import { DeviceEventEmitter } from 'react-native';

type Prop = {
    navigation: any
}

type Albums = {
    [key: string]: Album
}

export default function Main_screen(prop: Prop):ReactElement {
  //States
  const [entered_name, set_entered_name] = useState<string>('');
  const [album_list, set_album_list] = useState<Array<Album>>([]);
  const [album_name_dictionary, set_album_name_dictionary] = useState<Albums>({});

  useEffect(()=>{
    DeviceEventEmitter.addListener("delete_album", (event_data)=> delete_album(event_data.album));
    DeviceEventEmitter.addListener("add_recording", (event_data)=> add_recording(event_data.album, event_data.recording));
  }, []);

  function delete_album(event_data: Album): void {
    set_album_list((prev: Array<Album>): Array<Album> =>{
      return prev.filter((elem)=> elem.name !== event_data.name);
    });
    set_album_name_dictionary((prev: Albums): Albums =>{
      delete prev[event_data.name];
      return prev;
    });
  }
  function add_recording(album: Album, recording: Recording): void {
    set_album_name_dictionary((prev: Albums): Albums=>{
      prev[album.name].add_recording(recording);
      return prev;
    });
  }

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
