`use strict`

window.onload = () => {
  update()
  console.log('window load')
}

let fetchFox = () => {
  fetch(`https://randomfox.ca/floof/`) 
    .then(res => res.json())
    .then(img => img)
    .catch(err => console.log(err))
}

  console.log(fox)

let fetchAdvice = () => {
  fetch(`https://api.adviceslip.com/`)
    .then(res => res.json())
    .then(data => data)
    .then(err => console.log(err))
}

  console.log(fox)

let update = () => {
  fetchFox()
  fetchAdvice()

  let foxImg = document.querySelectorAll('#foxImage')
  let adviceId = document.querySelectorAll('#advice')

  advice.setAttribute('class', `${data.id}`)

  foxImg.src = img.image
  adviceId.innerText = data.advice
}