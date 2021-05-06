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
  fetch(`https://api.adviceslip.com/`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    }
  })
  .then(async res => {
    try {
      let data = await res.json()
      console.log('data : ',data)
      let results = JSON. parse(data)
      console.log('results : ',results)
    } catch (err) {
      console.log(`is there are err? ${err}`)
    }
  })

  
  //  .then(data => {
  //     console.log(data)
  //    })
    // .then(err => console.log(err))
}


let updateImg = (img) => {
  console.log('finding image : ', img)

  let foxImg = document.querySelectorAll('#foxImage')
  
  console.log(foxImg) //return node list 
  foxImg.src = `${img}`

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

