import React, { Component } from 'react';
import {Alert, View,Text,Picker,ScrollView,AsyncStorage } from 'react-native';
import {Button} from '../Components/Button';
import { TextInput } from 'react-native-gesture-handler';

export class AddNewTask extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      text : '',
      priority : 'Medium'
    };
  }

handleSubmit(){
    if(this.state.text == ''){
      return null;
    }
    let task = this.state.text;
    let priority = this.state.priority;

    this.props.navigation.navigate('Home');

  }

  static navigationOptions = () => {
    return{
    title: 'Add task',
    }
  };

  render() {
    return (
      <ScrollView style={{flex : 1, padding : 10}}>
      <Text style={{fontSize : 32, color: '#004d61' ,padding: 20, fontWeight:'normal', fontFamily : "rubik-regular"}}>
        What do you want to do?
      </Text>
      <View style={{ padding : 10}}>
      <TextInput placeholder="Type here..." onChangeText={(text)=>this.setState(previousState=>({
        text:text,
        priority:previousState.priority
      }))} style={{padding:5,borderWidth:2,borderColor:'#004d61',height:45}}></TextInput>
      </View>
      <Text style={{fontSize : 32, color: '#004d61' ,padding: 20, fontWeight:'normal', fontFamily : "rubik-regular"}}>
        Set priority 
      </Text>
      <View style={{ padding : 10}}>
        <Picker selectedValue={this.state.priority}
        onValueChange={(itemValue,itemIndex)=>this.setState(previousState=>({
          text:previousState.text,
          priority:itemValue
        }))}
        >
          <Picker.Item label='Very high' value='Very high'/>
          <Picker.Item label='High' value='High'/>
          <Picker.Item label='Medium' value='Medium'/>
          <Picker.Item label='Low' value='Low'/>
          <Picker.Item label='Very low' value='Very low'/>
        </Picker>
      </View>
      <View style={{ padding : 10}}>
        <Button color='#004d61' title="Add" onClick={this.handleSubmit.bind(this)}/>
      </View>
      </ScrollView>
    );
  }
}