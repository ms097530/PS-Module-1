// get title by ID
const titleEl = document.getElementById('title')
titleEl.style.color = 'green'
console.log(titleEl)

// styles with JS
const h2 = document.querySelector('h2')
h2.style.textDecoration = 'line-through'
h2.style.textDecorationThickness = '3px'
h2.style.textDecorationStyle = 'dotted'
h2.style.textShadow = '0px 20px red, 0px -20px orange'
h2.style.width = 'max-content'
h2.style.rotate = '5deg'

// loop through array returned by querySelectorAll
const h2_List = document.querySelectorAll('h2')
h2_List.forEach(el =>
{
    el.style.backgroundColor = '#ddd'
})

// target paragraph
let para = document.querySelector('p')
para.style.columnCount = 2
// innerText vs innerHTML vs textContent
console.log(para.innerText)
console.log(para.innerHTML)
console.log(para.textContent)

para.innerHTML = '<h2>' + para.innerHTML + '</h2>'

// Shopping List
const lis = document.querySelectorAll('li')
for (el of lis)
{
    console.log(el)
}

lis[0].classList.add('selected')

// --------- trying to inject scripts ---------
let newScriptNode = document.createElement('li')
newScriptNode.innerHTML = 'hello' + '<script>function hacked(){alert("Hello HACKED")}</script>'

// lis[1].innerHTML += '<script>console.log("Hello HACKED")</script>'
// lis[1].parentNode.replaceChild(newScriptNode, lis[1])
lis[0].parentNode.appendChild(newScriptNode)

let script = document.createElement('script')
script.innerHTML = 'alert("AHHH")'
// lis[0].parentNode.appendChild(script)

// ----------------------------------------------

let ulLis = document.querySelectorAll('ul > li')
console.log(ulLis)

let ulLisArr = Array.from(ulLis)
console.log(ulLisArr)

// create element and add attributes
const btn = document.createElement('button')
btn.innerText = 'Click me!'
btn.onclick = () => console.log('CLICKED')
document.body.appendChild(btn)

console.log(titleEl.hasAttribute('class'))
console.log(titleEl.getAttribute('class'))

// add element at same level (sibling)
let test = document.createElement('h3')
test.innerText = 'TEST'
btn.insertAdjacentElement("beforebegin", test)