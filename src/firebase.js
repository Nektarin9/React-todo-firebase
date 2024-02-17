import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyB7ccUTsSaDwX27mmf8HxjmVgqyGJVXo78',
	authDomain: 'todolist-1a38b.firebaseapp.com',
	projectId: 'todolist-1a38b',
	storageBucket: 'todolist-1a38b.appspot.com',
	messagingSenderId: '599191022393',
	appId: '1:599191022393:web:76762dcbc3263fe5e7d6e8',
	databaseURL: 'https://todolist-1a38b-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
