import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
const config = {
	apiKey: 'AIzaSyAIHVUC1GSeLmbrMOxR_OibC8vv1cqwGxc',
	authDomain: 'test-project-31d5e.firebaseapp.com',
	databaseURL: 'https://test-project-31d5e.firebaseio.com',
	projectId: 'test-project-31d5e',
	storageBucket: 'test-project-31d5e.appspot.com',
	messagingSenderId: '593608522488'
};
firebase.initializeApp(config);

export { firebase };