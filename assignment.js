
let formContainer = document.getElementById("submitForm");
let taskTitleElement = document.getElementById("taskTitle")

let tasksList = [];

formContainer.addEventListener("submit", function(event) {
    event.preventDefault();
    taskTitleElement.value = "";

})
