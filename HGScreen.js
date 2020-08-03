import * as  React from "react";
import {StyleSheet,Text,TouchableOpacity,View,Image,ImageBackground} from "react-native";
import { Header } from 'react-native-elements';

const image={uri:"https://cdn.freebiesbug.com/wp-content/uploads/2013/03/free-psd-wood-pattern-580x360.jpg"}

export default class HomeScreen extends React.Component
{
    goToHomeScreen = () => {
        this.props.navigation.navigate('HomeScreen');
      };
    render()
    {
        return(
            <View style={styles.container}>

            <ImageBackground source={image} style={styles.image}>

            <Header
          backgroundColor={'#F28705'}
          centerComponent={{
            text: 'The Hunger Games',
            style: { color: '#050259', fontSize: 40 },
          }}
        />
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
                    <Image source={require("../assets/Harry1.jpg")} style={styles.book1}/>
             </TouchableOpacity>

            <TouchableOpacity>
                    <Image source={require("../assets/Harry2.jpg")} style={styles.book}/>
            </TouchableOpacity>

            <TouchableOpacity>
                    <Image source={require("../assets/Harry3.jpg")} style={styles.book}/>
            </TouchableOpacity>
            
           <TouchableOpacity>
                    <Image source={require("../assets/Harry4.jpg")} style={styles.book2}/>
            </TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
                    <Image source={require("../assets/Harry5.jpg")} style={styles.book1}/>
            </TouchableOpacity>

            <TouchableOpacity>
                    <Image source={require("../assets/Harry6.jpg")} style={styles.book}/>
            </TouchableOpacity>

            <TouchableOpacity>
                    <Image source={require("../assets/Harry7.jpg")} style={styles.book}/>
            </TouchableOpacity>

            <TouchableOpacity>
                    <Image source={require("../assets/Harry8.jpg")} style={styles.book2}/>
            </TouchableOpacity>
            </View>

            <TouchableOpacity 
            style={styles.button}
            onPress={()=>this.goToHomeScreen()}>
                <Text>Back</Text>
            </TouchableOpacity>

            </ImageBackground>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    book:{
        height:220,
        width:150,
        marginLeft:45,
        marginRight:18,
        marginTop:30,

    },
    book2:{
        height:220,
        width:150,
        marginRight:20,
        marginLeft:40,
        marginTop:30,
    },
    book1:{
        height:220,
        width:150,
        marginLeft:280,
        marginRight:10,
        marginTop:30,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width:1300,
        height:1300
      },
      container: {
        flex: 1,
        flexDirection: "column",
        justifyContent:'center',
        alignItems:'center'
      },
      button:{
        backgroundColor:'#12cad6',
        borderRadius:120,
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:589,
        marginTop:20
        },
      
})

