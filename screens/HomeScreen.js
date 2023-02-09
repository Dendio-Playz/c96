import React,{Component} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import {RFValue} from 'react-native-responsive-fontsize'
export default class HomeScreen extends Component{


  constructor(props){
    super(props)
    this.state = {
      dropdownHeight :40,
      day:'Monday'
      
    }
  }

render(){
  return(
    
    <View>
    <Text>
      Hello
    </Text>
  <View  style = {{height:RFValue(this.state.dropdownHeight)}} >
  
    <DropDownPicker
    items={[
        {label: 'Monday', value: 'Monday'},
        {label: 'Tuesday', value: 'Tuesday'},
        {label: 'Wednesday', value: 'Wednesday'},
        {label: 'Thursday', value: 'Thursday'},
        {label: 'Friday', value: 'Friday'},
        {label: 'Saturday', value: 'Saturday'},
        {label: 'Sunday', value: 'Sunday'},
    ]}
    defaultIndex={0}
    defaultValue={this.state.day}
    containerStyle={{height: 40,borderRadius:RFValue(20),marginTop:RFValue(20),marginHorizontal:RFValue(20)}}
    onOpen = {()=>{
      this.setState({dropdownHeight:170})
    }}
    onClose = {()=>{
      this.setState({dropdownHeight:40})
    }}
    style = {{backgroundColor:"orange"}}
    placeholder = "Select a day"
    onChangeItem={items => this.setState({day:items.value})}
/>

    
  
  </View>
    </View>
  )}

}
const styles = StyleSheet.create({
  
})