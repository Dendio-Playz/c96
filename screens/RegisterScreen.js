import React,{Component} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,TextInput,} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize' 
export default class RegisterScreen extends Component{


render(){
  return(

 
<View style = {styles.container}>
      <Text style = {styles.appTitle}>
        Enter First Name:
      </Text>

        <TextInput
       style = {styles.textBox}
       onChangeText = {text => this.setState({email:text})}
       placeholder = {"Enter First Name"}
       placeholderTextColor = {'grey'}
       autoFocus
      />

        <Text style = {styles.appTitle}>
        Enter Last Name:
      </Text>
        <TextInput
       style = {styles.textBox}
       onChangeText = {text => this.setState({email:text})}
       placeholder = {"Enter Last Name"}
       placeholderTextColor = {'grey'}
       autoFocus
      />

      <Text style = {styles.appTitle}>
        Enter Email:
      </Text>
      
      <TextInput
       style = {styles.textBox}
       onChangeText = {text => this.setState({email:text})}
       placeholder = {"Enter Email"}
       placeholderTextColor = {'grey'}
       autoFocus
      />
      <Text style = {styles.appTitle}>
        Enter Password:
      </Text>
       <TextInput
       style = {styles.textBox}
       onChangeText = {text => this.setState({email:text})}
       placeholder = {"Enter Password"}
       placeholderTextColor = {'grey'}
       autoFocus
      />
      <Text style = {styles.appTitle}>
        Confirm Password:
      </Text>

      <TextInput
       style = {styles.textBox}
       onChangeText = {text => this.setState({email:text})}
       placeholder = {"Confirm Password"}
       placeholderTextColor = {'grey'}
       autoFocus
      />
         <TouchableOpacity style = {[styles.button,{backgroundColor:"red"}]}
           onPress = {()=>
           
           this.props.navigation.navigate("LoginScreen")}
           >
            <Text> 
              Create Account
            </Text>
          </TouchableOpacity>
      
      </View>
       )
}
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"LightBlue",
    
  },
  
  
  appTitle:{
    fontSize:RFValue(15),
    marginTop:RFValue(90),
    alignItems:'center',
    justifyContent:'center'
  },
  textBox:{
    borderColor:"black",
    width:RFValue(235),
    height:RFValue(30),
    borderWidth:RFValue(2),
    marginTop:RFValue(10),
    color:"red",
    fontSize:RFValue(20)
  },
  button:{
    width:RFValue(150),
    height:RFValue(50),
    flexDirection:"row",
    justifyContent:" space-evenly",
    borderRadius:RFValue(30),
    backgroundColor:'lightblue',
    marginTop:RFValue(30),
    alignItems:'center'
  }
})