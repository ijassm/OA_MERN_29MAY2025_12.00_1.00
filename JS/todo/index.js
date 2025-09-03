const doc = document;
const body = doc.body;
let _id = 0;

const clearInput = () => {
    doc.querySelector("#taskInput").value = "";
}

doc.querySelector("#taskInput").addEventListener("keydown", (event) => {
    // console.log(event)
    if (event.key === "Enter") {
        console.log("✅entered");
        addTask();
        clearInput();
    }
})

const addTask = () => {
    const task = doc.querySelector("#taskInput").value;
    if (task.length > 0) {
        const newTaskUI = taskUI(task)
        console.log(newTaskUI);

        const taskList = doc.querySelector("#taskList");
        taskList.innerHTML += newTaskUI
        clearInput();
        console.log("✅ New Task Added : ", task);
    } else {
        alert("Task is required")
    }
}


const deleteTask = (id) => {
    const taskList = doc.querySelector("#taskList");
    const task = doc.getElementById(`task_${id}`);
    taskList.removeChild(task);
    console.log("✅ Task Deleted : ", task);
}


const editTask = (id) => {
    const taskInput = doc.querySelector(`#task_${id} > input`);
    const editBtn = doc.querySelector(`#task_${id} > .btns > .edit`);
    if (editBtn.textContent === "Update") {
        // taskInput.value = taskInput.value.trim();
        taskInput.setAttribute("value", doc.querySelector(`#task_${id} > input`).value);

        taskInput.setAttribute("readonly", true);
        editBtn.textContent = "Edit";
    } else {
        taskInput.removeAttribute("readonly");
        editBtn.textContent = "Update";
    }

    console.log(editBtn);

    // editBtn.setAttribute("onclick", `saveTask(${id})`);
}


const taskUI = (value) => {
    _id++;
    return `<li class="task" id="task_${_id}">
          <input id="${_id}" type="text" readonly value="${value.toString()}" />
          <div class="btns">
            <button class="edit" onclick="editTask(${_id})">Edit</button>
            <button class="delete" onclick="deleteTask(${_id})">Delete</button>
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