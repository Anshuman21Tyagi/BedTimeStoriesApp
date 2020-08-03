import * as  React from "react";
import {StyleSheet,Text,TouchableOpacity,View,Image,ImageBackground} from "react-native";
import { Header } from 'react-native-elements';

const image={uri:"https://cdn.freebiesbug.com/wp-content/uploads/2013/03/free-psd-wood-pattern-580x360.jpg"}

export default class StartScreen extends React.Component
{
    goToHomeScreen = () => {
        this.props.navigation.navigate('HomeScreen');
      };
      
    render()
    {
        return(
            <View>
                <ImageBackground source={image} style={styles.image}>
                <Text style={styles.t}>Welcome To Stories Port</Text>
                <Image source={require("../assets/Logo.png")} style={styles.ig}/>
                <TouchableOpacity 
                style={styles.button}
                onPress={()=>this.goToHomeScreen()}>
                    <Text style={styles.bt}>Continue</Text>
                </TouchableOpacity>
                </ImageBackground>
             </View>
        )
    }
}

const styles=StyleSheet.create({
    t:{
       color:"purple",
       fontSize:80,
       marginBottom:10,
       marginLeft:300
      },
    button:{
        backgroundColor:'#12cad6',
        borderRadius:120,
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:589
        },
    bt:{
        color:"white",
        fontSize:18
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width:1300,
        height:1300
      },
    ig:{
        height:170,
        width:170,
        marginLeft:580,
        marginBottom:30
    }

})

