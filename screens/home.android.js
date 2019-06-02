import React, { Component } from 'react';
import {View,Text,ScrollView}  from 'react-native';
import {HeaderIconButton} from '../Components/headerIconButton';
export  class Home extends Component {

  constructor(props){
    super(props);
    this.state={
        tasks:[]
    };
}

  static navigationOptions = ({navigation}) => {
    return {
      headerRight : (<HeaderIconButton icon="md-add" color="#fff" title="Add Task" onClick={() => navigation.navigate('NewTask')}></HeaderIconButton>),
    };
  };
  
  render() {
        return (
          <ScrollView style={{flex : 1, padding : 10}}>
          
          </ScrollView>
        )
    }
}
