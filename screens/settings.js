import React, { Component } from 'react';
import { View,Text } from 'react-native';
import {Button} from '../Components/Button';

export class Settings extends Component {
  
  static navigationOptions = () => {
    return{
    header: null,
    }
  };

  render() {
    return (
      <View style={{flex : 1, padding : 10}}>
      <Text style={{flex : 1, fontSize : 32, color: '#004d61' ,padding: 20, fontWeight:'bold', fontFamily : "rubik-regular"}}>
        Settings
      </Text>
      </View>
    );
  }
}