import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// import admin from 'firebase-admin'
import {firebaseConfig} from './config.js'

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const FirebaseTimestamp = firebase.firestore.Timestamp

import 'firebase/functions'
export let db = firebase.firestore()

// import functions from 'firebase-functions'
// admin.initializeApp(functions.config().firebase);
// export let db = admin.firestore();

