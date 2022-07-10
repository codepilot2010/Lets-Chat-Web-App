
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
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    function addroom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="letchat_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirecttoroomname(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="letchat_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
