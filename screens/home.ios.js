import React, { Component } from 'react';
import {AsyncStorage,View,Text,ScrollView}  from 'react-native';
import {Button} from '../Components/Button';
import {HeaderIconButton} from '../Components/headerIconButton';
import { FlatList } from 'react-native-gesture-handler';
export  class Home extends Component {
  
constructor(props){
    super(props);
    this.state={
        tasks:[]
    };
}

  static navigationOptions = ({navigation}) => {
    return {
      headerRight : (<HeaderIconButton icon="ios-add" color="#000" title="Add Task" onClick={() => navigation.navigate('NewTask')}></HeaderIconButton>),
    };
  };
  
  render() {
        return (
          <ScrollView style={{flex : 1, padding : 10}}>
          
          </ScrollView>
        )
    }
}
