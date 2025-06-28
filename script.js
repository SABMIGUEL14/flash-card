const container = document.querySelector(".container");
const addQuestioncard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
const question = document.getElementById("question");
let editBool = false;

addQuestion.addEventListener("click", () => {
    container.classList.add("hide");
    question.value = "";
    answer.value = "";
    addQuestioncard.classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
    editBool = false;
    addQuestioncard.classList.add("hide");
    container.classList.remove("hide");
});

cardButton.addEventListener("click", () => {
    const tempQuestion = question.value.trim();
    const tempAnswer = answer.value.trim();
    if (!tempQuestion || !tempAnswer) {
        errorMessage.classList.remove("hide");
    } else {
        errorMessage.classList.add("hide");
        viewlist(tempQuestion, tempAnswer);
        question.value = "";
        answer.value = "";
        addQuestioncard.classList.add("hide");
        container.classList.remove("hide");
    }
});


function viewlist(q, a) {
    const listCard = document.getElementsByClassName("card-list-container");
    const div = document.createElement("div");
    div.classList.add("card");
    const questionDiv = document.createElement("p");
    questionDiv.classList.add("question-div");
    questionDiv.innerText = q;
    div.appendChild(questionDiv);

    const displayAnswer = document.createElement("p");
    displayAnswer.classList.add("answer-div", "hide");
    displayAnswer.innerText = a;

    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.setAttribute("class", "show-hide-btn");
    link.innerHTML = "Afficher/Masquer";
    link.addEventListener("click", (e) => {
        e.preventDefault();
        displayAnswer.classList.toggle("hide");
    });

    div.appendChild(link);
    div.appendChild(displayAnswer);

    let buttonsCon = document.createElement("div");
    buttonsCon.classList.add("buttons-con");
    var editButton = document.createElement("button");
    editButton.setAttribute("class", "edit");
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editButton.addEventListener("click", () => {
        editBool = true;
        modifyElement(editButton, true);
        addQuestioncard.classList.remove("hide");
    });

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener("click", () => {
        div.remove();
    });

    buttonsCon.appendChild(editButton);
    buttonsCon.appendChild(deleteButton);
    div.appendChild(buttonsCon);
    listCard[0].appendChild(div);
}

function modifyElement(element, edit = false) {
    let parentDiv = element.parentElement.parentElement;
    let parentQuestion = parentDiv.querySelector(".question-div").innerText;
    if (edit) {
        let parentAns = parentDiv.querySelector(".answer-div").innerText;
        answer.value = parentAns;
        question.value = parentQuestion;
        disableButtons(true);
        parentDiv.remove();
    }
}

const disableButtons = (value) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
        element.disabled = value;
    });
};