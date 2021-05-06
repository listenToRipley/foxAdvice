`use strict`

let fetchFox = () => {
  fetch(`https://randomfox.ca/floof/`) 
    .then(res => res.json())
    .then(item => {
      let img = item.image
      return img
    })
    .then(img => updateImg(img))
    .catch(err => console.log(err))
}

 

let fetchAdvice = () => {
  fetch(`https://api.adviceslip.com/`)
    .then(res => {
      console.log(res.json())
    })
    // .then(data => {
    //   console.log(data)
    // })
    // .then(err => console.log(err))
}


let updateImg = (img) => {
  console.log('finding image : ', img)

  let foxImg = document.querySelectorAll('#foxImage')

  foxImg.src = img.image

}

let updateAdvice = (slip) => {
  let adviceId = document.querySelectorAll('#advice')

  // adviceId.setAttribute('class', `${data.id}`)
  // adviceId.innerText = slip.advice
}

window.onload = () => {
  fetchFox()
  fetchAdvice()
  console.log('window load')
}

console.log('images : ',img)

