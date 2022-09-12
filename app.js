const form = document.querySelector('.contact-inputs')
const fullName = document.getElementById('fullname')
const email = document.getElementById('email')
const phone = document.getElementById("number")
const textArea = document.getElementById('message')
const error = document.querySelector('.error')
let emailPattern = /\w{3\@\w{5}/g;


form.addEventListener('submit',(e)=>{
    let messages = []
    if(fullName.value.length < 5){
        messages.push("The name is invalid")
    }
    if(!(email.value.match(emailPattern))){
        messages.push('Invalid email')
    }
    if(messages.length > 0){
        e.preventDefault()
        error.innerText = messages.join(',')
    }
})