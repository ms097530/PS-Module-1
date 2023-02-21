const titleEl = document.getElementById('title')
titleEl.style.color = 'green'
console.log(titleEl)

const h2 = document.querySelector('h2')
h2.style.textDecoration = 'line-through'
h2.style.textDecorationThickness = '3px'
h2.style.textDecorationStyle = 'dotted'
h2.style.textShadow = '0px 20px red, 0px -20px orange'
h2.style.width = 'max-content'
h2.style.rotate = '5deg'

const h2_List = document.querySelectorAll('h2')
h2_List.forEach(el =>
{
    el.style.backgroundColor = '#ddd'
})

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