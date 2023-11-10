import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig={
apiKey:"AIzaSyAEJ-k61bwoy_8JkYCSoq96g9Eh8p8QnKc",
authDomain:"capgemini-asturias-pablo.appspot.com",
projectId:"capgemini-asturias-pablo",
storageBucket:"capgemini-asturias-pablo.appspot.com",
messagingSenderId:"392955523631",
appId:"1:392955523631:android:a7379d15764d36a6d30cda"
}

const app=initializeApp(firebaseConfig);
export const firestore=getFirestore(app);