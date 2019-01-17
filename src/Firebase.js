import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import Secrets from './secrets/secrets';


const config = {
  apiKey: Secrets.apiKey,
  authDomain: Secrets.authDomain,
  databaseURL: Secrets.databaseURL,
  projectId: Secrets.projectId,
  storageBucket: Secrets.storageBucket,
  messagingSenderId: Secrets.messagingSenderId
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;