import * as Firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCtXi8eNe2ZZNho3dwRDZswSwnYmOTCIPM",
    authDomain: "nativeapp-6d25a.firebaseapp.com",
    databaseURL: "https://nativeapp-6d25a.firebaseio.com",
    projectId: "nativeapp-6d25a",
    messagingSenderId: "109029343120"
  };
  export const firebaseRef = Firebase.initializeApp(config);
  export var provider = new Firebase.auth.FacebookAuthProvider();
