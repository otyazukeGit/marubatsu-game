import firebase from 'firebase'
import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/functions'
import {firebaseConfig} from './config.js'

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const FirebaseTimestamp = firebase.firestore.Timestamp


