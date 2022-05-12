import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getFirestore,
    collection,
    // addDoc,
    setDoc,
    // getDocs,
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

export const saveTodo = (text, statu, when) => setDoc(doc(db, "todo-list", when), {text,statu,when});
// export const getTodo = () => getDocs(collection(db,'todo-list'));
export const onGetTodo = (callback) => onSnapshot(collection(db, 'todo-list'), callback);
export const deleteTodo = id => deleteDoc(doc(db, 'todo-list', id));

// const todoForm = document.getElementById('todo-form');
// async function saveTodos(e){
//     e.preventDefault()
//     const todoInput = todoForm['todo-input']
//     const date = new Date();
//     const y = date.getFullYear();
//     const m = date.getMonth()+1;
//     const d = String(date.getDate()).padStart(2,"0");
//     const hr = String(date.getHours()).padStart(2,"0");
//     const mn = String(date.getMinutes()).padStart(2,"0");
//     const sc = String(date.getSeconds()).padStart(2,"0");
//     let createTime = y+m+d+hr+mn+sc; 
//     await setDoc(doc(db, "todo-list", createTime), {
//         text: todoInput.value,
//         statu: "active",
//         when:createTime
//     });
//     todoForm.reset();
// }
// todoForm.addEventListener("submit", saveTodos);