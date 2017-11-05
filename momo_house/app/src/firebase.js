import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBKEdiyDGzYY0mHnOQlC091-HX4kOV2k3Q",
  authDomain: "momohouse-b1b7f.firebaseapp.com",
  databaseURL: "https://momohouse-b1b7f.firebaseio.com",
  projectId: "momohouse-b1b7f",
  storageBucket: "momohouse-b1b7f.appspot.com",
  messagingSenderId: "764409496142"
};
firebase.initializeApp(config);

export default firebase;
