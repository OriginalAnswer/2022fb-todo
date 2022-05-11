import {saveTodo, getTodo, onGetTodo, deleteTodo } from './firebase.js'

// --------------레퍼런스-------------------------------------------------------------------------------
const printView = document.getElementById('print-view');
const todoForm = document.getElementById('todo-form');
// ---------------------------------------------------------------------------------------------


window.addEventListener('DOMContentLoaded', async () => {

    onGetTodo((querySnapshot) => {
        let html = '';
    
        querySnapshot.forEach(doc => {
            const todoInfo = doc.data();
            html += `
                <div>
                <span>${todoInfo.text}</span>
                <button class="delete-btn" data-id="${doc.id}">Delete</button>
                </div>
            `
        });

        printView.innerHTML = html;

        const deleteBtns = document.querySelectorAll('.delete-btn');

        deleteBtns.forEach(btn => {
            btn.addEventListener("click", ({target:{dataset}}) => {
                deleteTodo(dataset.id)
            })
        })
    });
});

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoInput = todoForm['todo-input']
    saveTodo(todoInput.value)
    todoForm.reset();
})
