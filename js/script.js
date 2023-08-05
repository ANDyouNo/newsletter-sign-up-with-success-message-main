const inp = document.querySelector('input')
const subscribeBtn = document.querySelector('.subscribe')
const emailSend = document.querySelector('.send-email')
const errMsg = document.querySelector('.error')
const mainCard = document.querySelector('.card')
const succesCard = document.querySelector('.succes-card')
const closeBtn = document.querySelector('.close')

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

subscribeBtn.addEventListener('click', function() {
  if (EMAIL_REGEXP.test(inp.value) == false) {
    errMsg.classList.remove('none')
    inp.classList.add('err-input')
  }
  else {
    errMsg.classList.add('none')
    inp.classList.remove('err-input')
    mainCard.classList.add('none')
    succesCard.classList.remove('none')
    emailSend.innerText = inp.value 
  }
})
closeBtn.addEventListener('click', function() {
  succesCard.classList.add('none')
})