import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from "./Screens/StartScreen";
import HomeScreen from "./Screens/HomeScreen";
import HPScreen from "./Screens/HPScreen";
import HGScreen from "./Screens/HGScreen";
import DWKScreen from "./Screens/DWKScreen";
import DScreen from "./Screens/DScreen";
import CLScreen from "./Screens/CLScreen";
import SearchScreen from "./Screens/SearchScreen";
import {createSwitchNavigator,createAppContainer} from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';


export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
     <AppContainer/>
     <AppContainer1/>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

var AppNavigator=createSwitchNavigator({
  StartScreen:StartScreen,
  HomeScreen:HomeScreen,
  })

const AppContainer=createAppContainer(AppNavigator);

var AppNavigator1=createSwitchNavigator({
  HomeScreen:HomeScreen,
  HPScreen:HPScreen,
  })

var AppContainer1=createAppContainer(AppNavigator1)

/*var AppNavigator2=createSwitchNavigator({
  HomeScreen:HomeScreen,
  DWKScreen:DWKScreen,
  })

var AppContainer2=createAppContainer(AppNavigator2)

var AppNavigator3=createSwitchNavigator({
  HomeScreen:HomeScreen,
  HGScreen:HGScreen,
  })

var AppContainer3=createAppContainer(AppNavigator3)

var AppNavigator4=createSwitchNavigator({
  HomeScreen:HomeScreen,
  DScreen:DScreen,
  })

var AppContainer4=createAppContainer(AppNavigator4)

var AppNavigator5=createSwitchNavigator({
  HomeScreen:HomeScreen,
  ClScreen:CLScreen,
  })

var AppContainer5=createAppContainer(AppNavigator5);

const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Search: {screen: SearchScreen},
})

const AppContainer6=createAppContainer(TabNavigator);*/


