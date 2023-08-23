import { StyleSheet, View, Modal, TextInput } from 'react-native'
import { ReactElement } from 'react'
import Custom_button from './Custom_button'


type Prop = {
    modal_visible: boolean,
    set_modal_visible: any,
    onPress: any,
    entered_name: string,
    entered_url: string,
    set_entered_name: any,
    set_entered_url: any
}

export default function Add_recording_modal(props: Prop): ReactElement {
    return (
        <View style={styles.container}>
            <Modal visible={props.modal_visible} style={styles.widget_container}>
                <TextInput style={styles.add_box} placeholder='Recording name' 
                onChangeText={(text)=>props.set_entered_name(()=>text)}></TextInput>
                <TextInput style={styles.add_box} placeholder='Youtube URL' onChangeText={(text)=>props.set_entered_url(()=>text)}></TextInput>
                <Custom_button text="Add Recording" onPress={props.onPress}/>
                <Custom_button text="Cancel" onPress={()=>{
                    props.set_entered_name(()=>'');
                    props.set_entered_url(()=>'');
                    props.set_modal_visible(()=>false);
                }} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        margin: 10,
        padding: 10
    },
    widget_container: {
        margin: 5,
        padding: 5,
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    add_box : {
        margin: 5,
        padding: 5,
        flex: 3,
        borderWidth: 0.5,
        borderColor: "gray"
    }
});