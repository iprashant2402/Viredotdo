import React from 'react';
import {Routes} from './routes/routes';
import  firebase from 'firebase';
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDAm0defRR2u-1mezFGCcnGCQUSOMQLWXw",
    authDomain: "utasks-bef4a.firebaseapp.com",
    databaseURL: "https://utasks-bef4a.firebaseio.com",
    projectId: "utasks-bef4a",
    storageBucket: "utasks-bef4a.appspot.com",
    messagingSenderId: "950921186485",
    appId: "1:950921186485:web:7f881a03f48ba199"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.auth().signInAnonymously().catch(function(error){
  var error = error;
});

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      uid : '',
      tasks : []
    };
  }

  /*componentDidMount(){
    
    let itemsRef = firebase.database().ref();
    var root = this;
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        root.setState(previousState=>({
          uid : user.uid,
          tasks : previousState.tasks       
        }));
      }
    });
    itemsRef.on('value',(snap)=>{
      var items = [];
      snap.forEach((child)=>{
        items.push({
          tid : child.key,
          task : child.val().title,
          priority : child.val().priority,
          date : child.val().date
        });
      });

      this.setState(previousState=>({
        uid : previousState.uid,
        tasks : items
      }));

    });

  }*/

  render() {
    return (
        <Routes/>
      );
  }
}

