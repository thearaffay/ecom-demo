import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAU1MIwghiUTmONn3HP_rMfUpGmoTOmAAQ",
    authDomain: "ecomm-decd2.firebaseapp.com",
    projectId: "ecomm-decd2",
    storageBucket: "ecomm-decd2.appspot.com",
    messagingSenderId: "358453104410",
    appId: "1:358453104410:web:e83e2475d119651245a6a3"
  };

  !firebase.apps.length ? firebase.initailizeapp(firebaseConfig) : firebase.app()

  export default firebase