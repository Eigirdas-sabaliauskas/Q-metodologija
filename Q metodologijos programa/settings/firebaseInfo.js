// Initialize Firebase
var config = {
	apiKey: "AIzaSyBzxi47RcaKx3BTxIMnlQFNEN10FHFCSLc",
    authDomain: "q-metodologija.firebaseapp.com",
    databaseURL: "https://q-metodologija.firebaseio.com",
    projectId: "q-metodologija",
    storageBucket: "q-metodologija.appspot.com",
    messagingSenderId: "23427119463",
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();