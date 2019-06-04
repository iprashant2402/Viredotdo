import React, { Component } from 'react';
import {StyleSheet,Text,ScrollView,ActivityIndicator,Alert}  from 'react-native';
import {Button} from '../Components/Button';
import {HeaderIconButton} from '../Components/headerIconButton';
import {DateComponent} from '../Components/DateComponent';
import firebase from 'firebase';
import {Caption,GridRow,Heading,Tile,Title,Subtitle,Divider,Card,View, ListView,Row} from '@shoutem/ui';
import {PriorityTag} from '../Components/priorityTag';
import {LinearGradient} from 'expo';


export  class Home extends Component {
  
constructor(props){
    super(props);
    this.state={
        tasks:[],
        uid : '',
        loggedIn : false,
        dataLoaded : false,
        tasksCreated : 0,
        tasksCompleted : 0
    };
    this.renderRow = this.renderRow.bind(this);
    this.itemsRef = firebase.database();
}

completeTask(tid,uid){
  var dBref = firebase.database();
  var updates = {};
  updates['/users/'+uid+'/tasks/'+tid] = null;
  dBref.ref().update(updates,function(err){
    if(err){ return null;}
    else{
      dBref.ref('users/'+uid+'/count').once('value').then(function(snap){
        
          var tasksCount = snap.val().taskCount;
          var completed = snap.val().completed + 1;
          dBref.ref('users/'+uid+'/count').set({
            taskCount : tasksCount,
            completed : completed
          },function(error){
            if(error){

            }
            else{
              
            }
          });
        
      });
    }
  });
}

/*static navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <HeaderIconButton
        onClick={() => navigation.navigate('NewTask',{
        uid : this.state.uid
        })}
        icon="add"
        color="#000"
      ></HeaderIconButton>
    ),
  };
};*/

componentDidMount(){
    var root = this;
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        root.setState(previousState=>({
          uid : user.uid,
          tasks : previousState.tasks,
          loggedIn: true,
          dataLoaded : previousState.dataLoaded,
          tasksCreated : previousState.tasksCreated,
          tasksCompleted : previousState.tasksCompleted       
        }));
    root.itemsRef.ref('users/'+root.state.uid+'/tasks').on('value',(snap)=>{
      var items = [];
      snap.forEach((child)=>{
        items.push({
          tid : child.key,
          task : child.val().title,
          priority : child.val().priority,
          date : child.val().date
        });
      });
      root.itemsRef.ref('users/'+root.state.uid+'/count').on('value',(snap)=>{
        let taskCompleted = 0;
        let taskCreated = 0;
        if(snap.val()){
          taskCompleted = snap.val().completed;
          taskCreated = snap.val().taskCount;
        }

        root.setState(previousState=>({
          uid : previousState.uid,
          tasks : previousState.tasks,
          loggedIn : previousState.loggedIn,
          dataLoaded : previousState.dataLoaded,
          tasksCreated : taskCreated,
          tasksCompleted : taskCompleted
        }));
      });
      items = items.reverse();
      root.setState(previousState=>({
        uid : previousState.uid,
        tasks : items,
        loggedIn : previousState.loggedIn,
        dataLoaded : true,
        tasksCreated : previousState.tasksCreated,
        tasksCompleted : previousState.tasksCompleted
      }));

    }); 
      } 
    });

  }

  renderRow(task) {

    let colorsMapping = {
      'Very low' : '#2e86de',
      'Low' : '#01a3a4',
      'Medium' : '#feca57',
      'High' : '#ff9f43',
      'Very high' : '#ee5253'
  };
    return (
      <View>
          <Row>
            <HeaderIconButton icon="check-box-outline-blank" color="green" onClick={()=>this.completeTask(task.tid,this.state.uid)}></HeaderIconButton>
            <Subtitle style={{color:colorsMapping[task.priority]}}>{task.task} 
             <Caption> (Priority : {task.priority})</Caption>
            <Caption> ({task.date.dd}/{task.date.mm}/{task.date.yy})</Caption></Subtitle>
          </Row>
          <Divider styleName='line' />
      </View>
    );
  }


  render() {
    const tasks = this.state.tasks;
    if(this.state.dataLoaded){
        return (
          <ScrollView>
            <View style={{padding : 5,backgroundColor: '#3498db'}}>
            <LinearGradient colors={['#3498db','#3498db']} style={{padding : 10,borderRadius : 5}}>
            <View>
            <DateComponent/>
            <GridRow columns={2}>
            <Tile style={styles.gradientCard}>
            <View styleName="content">
              <Heading style={{color: '#fff',textAlign : 'center'}}>{this.state.tasksCreated}</Heading>
              <Subtitle style={{color: '#fff',textAlign : 'center'}}>Tasks Created</Subtitle>
            </View>
            </Tile>
            <Tile style={styles.gradientCard}>
            <View styleName="content">
              <Heading style={{color: '#fff',textAlign : 'center'}}>{this.state.tasksCompleted}</Heading>
              <Subtitle style={{color: '#fff',textAlign : 'center'}}>Tasks Completed</Subtitle>
            </View>
            </Tile>
            </GridRow>
            <Button color="#27ae60" title="Add new task" onClick={() => this.props.navigation.navigate('NewTask',{
        uid : this.state.uid
      })}></Button>
            </View>
            </LinearGradient>
          </View>
          <ListView data={tasks} renderRow={this.renderRow} />
          </ScrollView>
        )
      }
      else{
        return (
          <ScrollView>
          <View style={{padding:20}}>
          <ActivityIndicator size='small' color="#10316b"/> 
          </View>    
          </ScrollView>
        );
      }
    }
}

const styles = StyleSheet.create({
  listItem : {
    flexDirection : 'row',
    padding : 10,
    borderBottomWidth : 1,
    borderBottomColor :  '#f1f1f1'
  },
  listText : {
    flex : 3,
    fontFamily : 'Rubik-Regular',
    fontSize : 15
  },
  listButtonPrimary : {
    flex : 1
  },
  row :{
    flexDirection : 'row',
    padding : 10
  },
  gradientCard:{
    backgroundColor : 'rgba(0, 0, 0, 0.0)',
    color: '#fff'
  }
});
