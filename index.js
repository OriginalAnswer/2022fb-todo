// --------------레퍼런스-------------------------------------------------------------------------------
const printView = document.getElementById('print-view');
const todoForm = document.getElementById('todo-form');
// ---------------------------------------------------------------------------------------------


import { 
    saveTodo,
    onGetTodo, 
    deleteTodo 
} from './firebase.js'


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
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth()+1;
    const d = String(date.getDate()).padStart(2,"0");
    const hr = String(date.getHours()).padStart(2,"0");
    const mn = String(date.getMinutes()).padStart(2,"0");
    const sc = String(date.getSeconds()).padStart(2,"0");
    let createTime = y+m+d+hr+mn+sc; 
    const statu = "active";
    saveTodo(todoInput.value,statu,createTime);
    todoForm.reset();
})
