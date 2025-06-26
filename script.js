const container = document.querySelector(".container");
const addQuestioncard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
let editBool = flase;

addQuestion.addEventListener("click", () => {
    container.classList.add("hide")
    addQuestion.value = "";
    answer.value = "";
    addQuestioncard.classList.remove("hide")
})

closeBtn.addEventListener