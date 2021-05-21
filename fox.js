`use strict`;

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

let updateImg = (img) => {
  console.log('finding image : ', img)

  let foxImg = document.querySelectorAll('#foxImage')
  
  console.log(foxImg) //return node list 
  foxImg.src = `${img}`

}


export default foxAdvice 