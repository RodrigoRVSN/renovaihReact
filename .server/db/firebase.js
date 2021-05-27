import * as firebase from 'firebase';

(function () {

    // Your web app's'firebase'configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyCwHqkxEk-fTFkNatgbmZFE3RpKUGT_n8M",
        authDomain: "renovaih.firebaseapp.com",
        projectId: "renovaih",
        storageBucket: "renovaih.appspot.com",
        messagingSenderId: "907045051408",
        appId: "1:907045051408:web:4a855b426b43541857be95",
        measurementId: "G-HVXGFPCKY6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
})()