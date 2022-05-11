import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAuebheyVUbKc5DzVI4XqcybuY_zx1QWtQ",
    authDomain: "todo-669ab.firebaseapp.com",
    projectId: "todo-669ab",
    storageBucket: "todo-669ab.appspot.com",
    messagingSenderId: "476614684921",
    appId: "1:476614684921:web:0ad46063a872b856713228"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const saveTodo = (text) =>
    addDoc(collection(db, 'todo-list'), { text });
export const getTodo = () => getDocs(collection(db,'todo-list'));
export const onGetTodo = (callback) => onSnapshot(collection(db, 'todo-list'), callback);
export const deleteTodo = id => deleteDoc(doc(db, 'todo-list', id));