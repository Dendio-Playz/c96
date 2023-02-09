import React,{Component} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,SafeAreaView,Platform,StatusBar,TextInput} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize' 
import {Header} from 'react-native-elements'
export default class LoginScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:"",
      userSignedIn:false,
      fontLoaded:false
    }
  }
  render(){
    return(
      <View style = {styles.container}>
      
      <Header
      backgroundColor = {'blue'}
      centerComponent = {{
        text: 'Welcome to Shopping Reminders',
        style:styles.appHeader
      }}
      />
       <Text style = {styles.appTitle}>
        Sign in below
      </Text>
      <View>
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
          <TouchableOpacity style = {[styles.button,{}]} 
          onPress = {()=>
          this.signIn(email,password)
          }
          >
            <Text> 
              Log In
            </Text>
          </TouchableOpacity>
           <TouchableOpacity style = {[styles.button,{backgroundColor:"red"}]}
           onPress = {()=>
           
           this.props.navigation.navigate("RegisterScreen")}
           >
            <Text> 
              Register
            </Text>
          </TouchableOpacity>
      </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"LightBlue",
    
  },
  
  appHeader:{
    fontSize:RFValue(8),
    color:"red",
    justifyContent:'center',
    alignItems:'center'
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


