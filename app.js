const form = document.querySelector('.contact-inputs')
const fullName = document.getElementById('fullname')
const email = document.getElementById('email')
const phone = document.getElementById("number")
const textArea = document.getElementById('message')
const error = document.querySelector('.error')

let emailPattern = /\w{3,}\@\w{5,}/g;
let phonePattern1 = /961[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g
let phonePattern2 = /961[1-9][0-9][0-9][0-9][0-9][0-9][0-9]/g
let textPattern = /\S{100,}/

// error.style.backgroundColor='red'
// form.addEventListener('submit',(e)=>{
//     let messages = []
//     if(fullName.value.length < 5){
//         messages.push("The name is invalid")
//     }
//     if(!(email.value.match(emailPattern))){
//         messages.push('Invalid email')
//     }
//     if (!(phone.value.match(phonePattern1) || phone.value.match(phonePattern2))){
//         messages.push('Invalid Phone')
//     }
//     if(!(textArea.value.match(textPattern))){
//         messages.push("Invalid message")
//     }
//     if(messages.length > 0){
//         e.preventDefault()
//         error.innerText = messages.join(',')
//     }
// })