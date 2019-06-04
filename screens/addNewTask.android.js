import React, { Component } from 'react';
import {View,Text,Picker,ScrollView } from 'react-native';
import {Button} from '../Components/Button';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase';
import {DropDownMenu} from '@shoutem/ui';
export class AddNewTask extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      text : '',
      priority : 'Very high',
      menuOptions : [{
        optionKey : 'Very high',
        optionValue : 'Very high'
      },
      {
        optionKey : 'High',
        optionValue : 'High'
      }
      ,{
        optionKey : 'Medium',
        optionValue : 'Medium'
      }
      ,{
        optionKey : 'Low',
        optionValue : 'Low'
      }
      ,{
        optionKey : 'Very low',
        optionValue : 'Very low'
      }] 
    };
    this.itemRef = firebase.database();
  }

handleSubmit(){
   var root = this;
    if(this.state.text == ''){
      return null;
    }
    const uid = this.props.navigation.getParam('uid');
    router = this.props.navigation;
    let task = this.state.text;
    let priority = this.state.priority;
    let dateObj = new Date();
    let currDate = dateObj.getDate();
    let currMonth = dateObj.getMonth() +1;
    let currYear = dateObj.getFullYear();
    this.itemRef.ref('users/'+uid+'/tasks').push({title : task, priority : priority,date : {dd:currDate,mm:currMonth,yy:currYear}}).then(function(){
      root.itemRef.ref('users/'+uid+'/count').once('value').then(function(snap){
        if(snap.val()){
          var tasksCount = snap.val().taskCount + 1;
          var completed = snap.val().completed;
          root.itemRef.ref('users/'+uid+'/count').set({
            taskCount : tasksCount,
            completed : completed
          },function(error){
            if(error){

            }
            else{
              
            }
          });
        }
        else{
          root.itemRef.ref('users/'+uid+'/count').set({
            taskCount : 1,
            completed : 0
          },function(error){
            if(error){

            }
            else{
              
            }
          });
        }
      });
      router.navigate('Home');
    });
  }

  static navigationOptions = () => {
    return{
    title: 'Add task',
    }
  };

  render() {
    const selectedOption = this.state.selectedOption || this.state.menuOptions[0];
    return (
      <ScrollView style={{flex : 1, padding : 10}}>
      <Text style={{fontSize : 32, color: '#004d61' ,padding: 20, fontWeight:'normal', fontFamily : "Rubik-Regular"}}>
        What do you want to do?
      </Text>
      <View style={{ padding : 10}}>
      <TextInput placeholder="Type here..." onChangeText={(text)=>this.setState(previousState=>({
        text:text,
        priority:previousState.priority,
        menuOptions : previousState.menuOptions
      }))} style={{padding:5,borderWidth:2,borderColor:'#004d61',height:45}}></TextInput>
      </View>
      <Text style={{fontSize : 32, color: '#004d61' ,padding: 20, fontWeight:'normal', fontFamily : "Rubik-Regular"}}>
        Set priority 
      </Text>
      <View style={{ padding : 10}}>
        <DropDownMenu options={this.state.menuOptions} selectedOption={selectedOption ? selectedOption : this.state.menuOptions[0]}
        titleProperty="optionKey"
        valueProperty="optionValue"
        onOptionSelected={(itemValue)=>this.setState(previousState=>({
          text:previousState.text,
          priority:itemValue.optionValue,
          menuOptions : previousState.menuOptions,
          selectedOption : itemValue
        }))}
        />
      </View>
      <View style={{ padding : 10}}>
        <Button color='#0984e3' title="Add" onClick={this.handleSubmit.bind(this)}/>
      </View>
      </ScrollView>
    );
  }
}