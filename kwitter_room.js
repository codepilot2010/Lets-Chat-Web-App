
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

      apiKey: "AIzaSyByDVoLpqZ2ubCYXCfo0TSjdI3ZdohuHlk",

  authDomain: "kwitter-6fbbf.firebaseapp.com",

  databaseURL: "https://kwitter-6fbbf-default-rtdb.firebaseio.com",

  projectId: "kwitter-6fbbf",

  storageBucket: "kwitter-6fbbf.appspot.com",

  messagingSenderId: "881787886982",

  appId: "1:881787886982:web:f63b0d6bb0f8dd3ff4a007"

    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
