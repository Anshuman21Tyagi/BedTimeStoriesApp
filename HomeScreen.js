import * as  React from "react";
import {StyleSheet,Text,TouchableOpacity,View,Image,ImageBackground} from "react-native";
import { Header } from 'react-native-elements';

const image={uri:"https://cdn.freebiesbug.com/wp-content/uploads/2013/03/free-psd-wood-pattern-580x360.jpg"}

export default class HomeScreen extends React.Component
{
    goToStartScreen = () => {
        this.props.navigation.navigate('StartScreen');
      };
    goToHPScreen = () =>{
        this.props.navigation.navigate('HPScreen');
    }
    goToHGScreen = () =>{
        this.props.navigation.navigate('HGScreen');
    }
    goToDWKScreen = () =>{
        this.props.navigation.navigate('DWKScreen');
    }
    goToDScreen = () =>{
        this.props.navigation.navigate('DScreen');
    }
    goToCLScreen = () =>{
        this.props.navigation.navigate('CLScreen');
    }
    render()
    {
        return(
            <View style={styles.container}>

            <ImageBackground source={image} style={styles.image}>

            <Header
          backgroundColor={'#F28705'}
          centerComponent={{
            text: 'Stories Port',
            style: { color: '#050259', fontSize: 40 },
          }}
        />
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity
            onPress={this.goToHPScreen}>
                    <Image source={require("../assets/HarryPotter.jpg")} style={styles.book1}/>
                    <Text>Harry Potter</Text>
             </TouchableOpacity>

            <TouchableOpacity>
                    <Image source={require("../assets/W.png")} style={styles.book}/>
            </TouchableOpacity>

            <TouchableOpacity>
                    <Image source={require("../assets/HG.png")} style={styles.book}/>
            </TouchableOpacity>
            
           <TouchableOpacity>
                    <Image source={require("../assets/D.jpg")} style={styles.book2}/>
            </TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
                    <Image source={require("../assets/39.jpg")} style={styles.book1}/>
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
            onPress={()=>this.goToStartScreen()}>
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
        width:1300,
        height:1300
      },
      container: {
        flex: 1,
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

