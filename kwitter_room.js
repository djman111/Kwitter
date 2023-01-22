const firebaseConfig = {
      apiKey: "AIzaSyAIUuF0M3x8WNicCDO7JrowwuajLHGR5XM",
      authDomain: "kwitter-9f0d2.firebaseapp.com",
      databaseURL: "https://kwitter-9f0d2-default-rtdb.firebaseio.com",
      projectId: "kwitter-9f0d2",
      storageBucket: "kwitter-9f0d2.appspot.com",
      messagingSenderId: "708326302559",
      appId: "1:708326302559:web:b117d3311eb8f1df5e8cea",
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome" +user_name+ "!!";
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("romm_name" , room_name);
      window.location = "kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name-" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML +=row
      });});}
getData();
function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html";
}