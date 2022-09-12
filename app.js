const form = document.querySelector('.contact-inputs')
const fullName = document.getElementById('fullname')
const email = document.getElementById('email')
const phone = document.getElementById("number")
const textArea = document.getElementById('message')
const error = document.querySelector('.error')



form.addEventListener('submit',(e)=>{
    let messages = []
    if(fullName.value.length < 6){
        messages.push("Error")
    }
    if(messages.length > 0){
        e.preventDefault()
        error.innerText = messages.join(',')
    }
})