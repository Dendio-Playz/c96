import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator()
const StackNav = ()=>{
  return(
    <Stack.Navigator initialRouteName = "LoginScreen" screenOptions = {{
      headerShown:false,
      gestureEnabled:false,
    }}>
    <Stack.Screen name = "Login" component = {LoginScreen}/>
    <Stack.Screen name = "Register" component = {RegisterScreen}/>
    <Stack.Screen name = "Home" component = {HomeScreen}/>
     </Stack.Navigator> 
  )
    
  
}



export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
    <NavigationContainer>
    <HomeScreen
      
    />
    </NavigationContainer>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});
