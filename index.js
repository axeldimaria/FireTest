var mainText =document.getElementById('mainText');
var submitBtn = document.getElementById('submitBtn');
var fireHeading = document.getElementById('fireHeading');
var thingsDiv = document.getElementById('things');


var firebaseHeadingRef = firebase.database().ref().child("Heading");
firebaseHeadingRef.on('value', function(datasnapshot){
	//datasnapshot is an object
	fireHeading.innerText = datasnapshot.val();
});


var thingsRef = firebase.database().ref().child("Things");
thingsRef.on('value', function(snapshot){

	var list = document.createElement('ul');	

	snapshot.forEach(function(childSnapshot) {
	    var childKey = childSnapshot.key;
	    var childData = childSnapshot.val();
	    console.log(childData);

	    // Create the list item:
	    var item = document.createElement('p');

	    // Set its contents:
	    item.append(childData);

	    // Add it to the list:
        list.appendChild(item);
	    
  	});

	// Add the contents of Things:
	thingsDiv.appendChild(list);

});


function submitClick(){

	var firebaseRef = firebase.database().ref().child("Things");

	var messageText = mainText.value;

	firebaseRef.push().set(messageText);
}