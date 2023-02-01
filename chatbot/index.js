let namePrompt = 'Hello, what is your name?'
let username = prompt(namePrompt)

let currContent = document.createElement('p')

// not working while going between prompts and alerts
currContent.innerText = namePrompt
document.body.appendChild(currContent)
currContent.innerText = username
document.body.appendChild(currContent)

// manipulations to DOM only seem to appear at end of sequence (so currContext paragraph is only added once at the end)
// let testItem = document.createElement('h2')
// testItem.innerText = 'DUMMY TEXT'
// document.body.appendChild(testItem)

let moodPrompt = `Nice to meet you, ${username}! How are you?`
let mood = prompt(moodPrompt)

// works between prompts and alerts
// console.log('TEST')

// not working while going between prompts and alerts
currContent.innerText = 'TEST'
document.body.appendChild(currContent)

// not working while going between prompts and alerts
currContent.innerText = moodPrompt
document.body.appendChild(currContent)
currContent.innerText = mood
document.body.appendChild(currContent)

alert(`Great! I'm glad to hear you're ${mood}! (unless that's not good...)`)


// only one item is being created, and altering innerText alters what is already on the page
// currContent.innerText = 'TEST'
// document.body.appendChild(currContent)
// currContent.innerText = 'NEW TEST'
// document.body.appendChild(currContent)
