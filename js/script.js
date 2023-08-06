const userEmail = document.querySelector('input')
const subscribeBtn = document.querySelector('.subscribe')
const emailToSend = document.querySelector('.send-email')
const errorAlert = document.querySelector('.error')
const mainCard = document.querySelector('.card')
const successCard = document.querySelector('.succes-card')
const closeBtn = document.querySelector('.close')
const inputForm = document.querySelector('form')

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

inputForm.addEventListener('submit', event => {
  event.preventDefault()
})

subscribeBtn.addEventListener('click', function() {
  if (EMAIL_REGEXP.test(userEmail.value) == false) {
    errorAlert.classList.remove('none')
    userEmail.classList.add('err-input')
  }
  else {
    errorAlert.classList.add('none')
    userEmail.classList.remove('err-input')
    mainCard.classList.add('none')
    successCard.classList.remove('none')
    emailToSend.innerText = userEmail.value 
  }
})

closeBtn.addEventListener('click', function() {
  successCard.classList.add('none')
})

//now press enter start validation too
userEmail.addEventListener( 'keyup', event => {
  if(event.code === 'Enter') {
    if (EMAIL_REGEXP.test(userEmail.value) == false) {
      errorAlert.classList.remove('none')
      userEmail.classList.add('err-input')
    }
    else {
      errorAlert.classList.add('none')
      userEmail.classList.remove('err-input')
      mainCard.classList.add('none')
      successCard.classList.remove('none')
      emailToSend.innerText = userEmail.value 
    }
  }
})