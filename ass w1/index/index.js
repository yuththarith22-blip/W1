// DOM element references
const maker_box = document.getElementById("maker")
const adder_box = document.querySelector("#quizBox")
const adder = document.querySelector("#adderContainer")
const adderbtn = document.querySelector("#addButton")
const editBtn = document.querySelector("#edit")
const deleteBtn = document.querySelector("#delete")
const question_box = document.querySelector(".questionBox")
const create_Question = document.getElementById("createQuestion")
const question_form = document.querySelector("#quizForm")

// Store all quiz questions
let question = [{
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
},]
// function showQuestionAdded(){
//     show(adder_box)
// }
let Qnum = 0;

// Create overlay for modal background
const overlay = document.createElement('div')
overlay.id = "overlay"
overlay.className = "fixed inset-0 bg-black/50 hidden z-40"
document.body.appendChild(overlay)

// Open the quiz maker modal when clicked
maker_box.addEventListener("click", startMaker)
function startMaker(){
    show(overlay)
   show(adder_box)

}

// Switch from quiz box to question creation form
adderbtn.addEventListener("click", function addquestion(){
    hide(adder_box);
    show(create_Question);
   
})

// Handle form submission and store new question
question_form.addEventListener("submit", function dataCollector(e){
    e.preventDefault()
    const formData = new FormData(question_form)
    
    // Build question object from form inputs
    const questionData = {
        title: formData.get("question"),
        choiceA: formData.get("choiceA"),
        choiceB: formData.get("choiceB"),
        choiceC: formData.get("choiceC"),
        choiceD: formData.get("choiceD"),
        correct: formData.get("correct"),
    }
    question.push(questionData)
    Qnum++
    hide(create_Question)
    createQuestionBox(question);
    show(adder_box)
    
    question_form.reset() 

})

function createQuestionBox() {
    const currentIndex = Qnum  // Capture current index
    
    // Create container
    const questionBox = document.createElement("div")
    questionBox.className = "questionBox bg-white rounded w-[50%]"
    
    // Create inner wrapper
    const wrapper = document.createElement("div")
    wrapper.className = "flex gap-8 items-center justify-between px-5"
    
    // Create question text
    const questionDiv = document.createElement("div")
    questionDiv.className = "Question rounded h-auto text-xl p-3"
    questionDiv.textContent = question[currentIndex].title
    
    // Create buttons container
    const btnContainer = document.createElement("div")
    btnContainer.className = "flex justify-center gap-10"
    
    // Create delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "cursor-pointer w-8"
    deleteBtn.innerHTML = '<img src="../images /trash.png">'
    deleteBtn.addEventListener("click", function() {
        deleteQuestion(question[currentIndex])
    })
    
    // Create edit button
    const editBtn = document.createElement("button")
    editBtn.className = "cursor-pointer w-8"
    editBtn.innerHTML = '<img src="../images /edit.svg">'
    editBtn.addEventListener("click", function() {
        editQuestion(question[currentIndex])
    })
    
    // Assemble everything
    btnContainer.appendChild(deleteBtn)
    btnContainer.appendChild(editBtn)
    wrapper.appendChild(questionDiv)
    wrapper.appendChild(btnContainer)
    questionBox.appendChild(wrapper)
    
    // Append to the correct container
    adder.appendChild(questionBox)  // or adder_box, depending on your HTML structure
}

// Utility: show element by removing hidden class
function show(element){
    element.classList.remove("hidden")
}

// Utility: hide element by setting display to none
function hide(element){
    element.classList.add("hidden")
}