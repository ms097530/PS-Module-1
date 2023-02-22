// Adding event listener
const button = document.querySelector('button')
button.addEventListener('click', (e) =>
{
    console.log(e)
    console.log(e.target)
    const li = document.createElement('li')
    const input = document.querySelector('input')
    li.textContent = input.value
    document.querySelector('ul').append(li)
    input.value = ''
    input.focus()
})

// Event delegation
const ul = document.querySelector('ul')
ul.addEventListener('click', (e) =>
{
    console.log(e.target)
})

// Stopping event bubbling
const li = document.querySelector('li')
li.addEventListener('click', (e) =>
{
    e.stopPropagation()
    console.log('li got clicked')
})