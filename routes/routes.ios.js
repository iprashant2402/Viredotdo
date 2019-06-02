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
      // initialRouteName : "Home",
      defaultNavigationOptions : {
        headerStyle : {
          backgroundColor : '#fff',
          borderBottomWidth: 0,
        },
        title : "Vire.Do",
        headerTintColor : '#000',
        headerTitleStyle : {
          fontWeight : 'bold',
          fontFamily : 'rubik-regular'
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
          'rubik-regular': require('../assets/fonts/Rubik-Regular.ttf'),
          'montserrat' : require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
          'oswald' : require('../assets/fonts/Oswald/Oswald[wght].ttf'),
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