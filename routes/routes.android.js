import React from 'react';
import {AddNewTask} from '../screens/addNewTask';
import {Home} from '../screens/home';
import {Font} from 'expo';
import * as Expo from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator(
    {
      Home : Home,
      NewTask : AddNewTask
    },
    {
      initialRouteName : "Home",
      defaultNavigationOptions : {
        headerStyle : {
          backgroundColor : '#2980b9',
          borderBottomWidth: 0,
          shadowOpacity: 0,
          shadowOffset: {
                height: 0,
              },
          shadowRadius: 0,
          elevation: 0
        },
        title : "Vire.Do",
        headerTintColor : '#fff',
        headerTitleStyle : {
          fontWeight : 'normal',
          fontFamily : 'montserrat',
          textAlign : 'center',

        }
      },
    }
  );
  
  const AppContainer = createAppContainer(AppNavigator);

  export class Routes extends React.Component{

    constructor(){
        super();
        this.state = {
          isFontReady : false,
        };
      }
      async componentWillMount(){
        await Font.loadAsync({
          'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
          'montserrat' : require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
          'rubicon-icon-font' : require('../assets/fonts/rubicon-icon-font.ttf'),
        });
    
        this.setState({
          isFontReady : true,
        });
      }
     

      render() {
        if(!this.state.isFontReady){
          return <Expo.AppLoading/>
        }
        return (
            <AppContainer/>
          );
      }  }