const mainTodoElem=document.querySelector(".todo-list-elem");
const inputValue=document.getElementById("inputValue");


const getTodoListFromLocal = () =>{
    return JSON.parse(localStorage.getItem("youtubeTodoList"));
}

let localTodoList=getTodoListFromLocal() || [];

const addTododynamicElement = (curElem) =>{
    const divElement=document.createElement("div");

    divElement.classList.add("main_todo_div");

    divElement.innerHTML=`<li>${curElem}</li> <button  class="deleteBtn">Delete</button>`;

    mainTodoElem.append(divElement);   

    const deleteButton = divElement.querySelector('.deleteBtn');
    deleteButton.addEventListener('click', () => {
        const todoItem = divElement.querySelector('li').innerText;
        const index = localTodoList.indexOf(todoItem);
        if (index !== -1) {
            localTodoList.splice(index, 1); // Remove from localTodoList
            localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoList)); // Update local storage
            divElement.remove(); // Remove from UI
        }
    });
}



//****************************ADDTODO FUNCTION***************************************************** */


 const addTodoList = (e) =>{
    e.preventDefault();
    const todoListValue=inputValue.value.trim();
    inputValue.value = "";

if(todoListValue !== " " && !localTodoList.includes(todoListValue)){

    localTodoList.push(todoListValue);

    localTodoList= [...new Set(localTodoList)]

    console.log(localTodoList);

    localStorage.setItem("youtubeTodoList",JSON.stringify(localTodoList));
    // addTododynamicElement(todoListValue);
    // inputValue.value = "";
    

    const divElement=document.createElement("div");

    divElement.classList.add("main_todo_div");

    divElement.innerHTML=`<li>${todoListValue}</li> <button  class="deleteBtn">Delete</button>`;

    mainTodoElem.append(divElement);   
 }
};
 //**********************************************************END***************************************/
 const showTodoList =() =>{
    console.log(localTodoList);
    localTodoList.forEach((curElem) => {

    addTododynamicElement(curElem);
   
    
    })
 };
 showTodoList();
document.querySelector('.btn').addEventListener('click',(e) => {
    addTodoList(e);
});
