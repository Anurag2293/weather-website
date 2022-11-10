console.log('Client side Javascript is loaded')

const ele = document.getElementById('message')
if (ele) {
    console.log(ele.innerText)
}


const para = document.createElement('p')
para.textContent = 'This is a dynamically created element for about page'

if (document.title === 'About'){
    document.body.appendChild(para)
}
