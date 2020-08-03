import * as  React from "react";
import {StyleSheet,Text,TouchableOpacity,View,Image,TextInput, KeyboardAvoidingView} from "react-native";

export default class SearchScreen extends React.Component{
    render()
    {
        return(
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput
        style={styles.inputBox}/>
        </KeyboardAvoidingView>

        );
    }
}

const styles=StyleSheet.create({
    inputBox: {
        marginTop: 50,
        width:800,
        textAlign:"center",
        height:30,
        borderWidth: 1,
        borderRadius:100,
        backgroundColor:"#bc7348"
  },
    container: {
        flex: 1,
        marginRight:150,
        backgroundColor:'#9c5518'
        
  },
})