const body = document.querySelector('body');

//open Modal-in Button-u
const open = document.createElement('button');
body.appendChild(open);
open.innerHTML = 'Open Modal';
open.style.width = '160px'
open.style.height = '60px'
open.style.color = 'black'
open.style.borderRadius = '17px'
open.style.fontSize = '18px'
open.style.color = 'white'
open.style.border = '3px solid rgb(97, 97, 218)'
open.style.backgroundColor = 'rgb(164, 164, 207)'

//Umumi divdi
const div = document.createElement('div')
body.appendChild(div)
div.style.width = '500px'
div.style.height = '300px'
div.style.backgroundColor = 'rgb(110, 155, 101)'
div.style.margin = 'auto'
div.style.borderRadius = '17px'
div.style.transition = 'transform 2s '
div.style.transform = 'translateY(-400px)'

//Modal sozunun divi
const divh1 = document.createElement('div');
div.appendChild(divh1)
const h1 = document.createElement("h1")
divh1.appendChild(h1)
divh1.style.height = '80px'
h1.innerHTML = 'Modal'
h1.style.color = 'white'
h1.style.paddingLeft = '40px'
h1.style.paddingTop = '20px'
divh1.style.borderBottom = '2px solid rgb(198, 195, 195)'

//Modal-title 
const div2 = document.createElement('div')
div.append(div2)
const h2 = document.createElement('h2')
const p = document.createElement('p')
div2.append(h2)
div2.append(p)
h2.innerHTML = 'Modal Title'
div2.style.height = '100px'
h2.style.color = 'white'
h2.style.textAlign = 'start'
h2.style.paddingLeft = '40px'
p.innerHTML = 'Woohoo, you are reading this text in a modal!'
p.style.paddingLeft = '40px'
p.style.color = 'white'
div2.style.borderBottom = '2px solid rgb(198, 195, 195)'

//Close button-u
const close = document.createElement('button')
div.append(close)
close.innerHTML = 'Close'
close.style.width = '120px'
close.style.height = '50px'
close.style.fontSize = '18px'
close.style.border = '2px solid red'
close.style.backgroundColor = 'white'
close.style.color = 'red'
close.style.marginLeft = '340px'
close.style.marginTop = '20px'



//open ve close buttonlarina esasen funksiyani yazaq
open.addEventListener('click', function () {
    div.style.transform = 'translateY(0px)'
    body.style.backgroundColor = 'rgb(199, 199, 199)'
})

close.addEventListener('click', function () {
    div.style.transform = 'translateY(-450px)'
    body.style.backgroundColor = 'white'
})













