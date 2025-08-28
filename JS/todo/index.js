const doc = document;
const body = doc.body;
let _id = 0;

doc.querySelector("#taskInput").addEventListener("keydown", (event) => {
    // console.log(event)
    if (event.key === "Enter") {
        console.log("✅entered");
        addTask();
    }
})

const addTask = () => {
    const task = doc.querySelector("#taskInput").value;
    const newTaskUI = taskUI(task)
    const taskList = doc.querySelector("#taskList");
    taskList.innerHTML += newTaskUI
    console.log("✅ New Task Added : ", task);
}


const deleteTask = (e) => {
    console.log(e);
}


const taskUI = (value) => {
    const id = _id++;
    return `<li class="task">
          <input id="${id}" type="text" readonly value="${value.toString()}" />
          <div class="btns">
            <button id="${id}">Edit</button>
            <button id="${id}" class="delete" onclick="${deleteTask(this)}">Delete</button>
          </div>
        </li>`
}






// const a = {
//     name: "abc",
//     getName: () => {
//         return this
//     }
// }

// const a = {
//     name: "abc",
//     getName: function () {
//         return this
//     }
// }

// const a = {
//     name: "abc",
//     getName: function name() {
//         return this
//     }
// }

// console.log(this);
// console.log(a.getName());