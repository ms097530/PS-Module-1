// Tasks 1.0 - 1.3
let mainEl = document.querySelector('main')

mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
mainEl.classList.add('flex-ctr')

// Tasks 2.0 - 2.3
let topMenuEl = document.querySelector('#top-menu')

topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

// Tasks 3.0 - 3.1
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

menuLinks.forEach(link =>
{
    let anchor = document.createElement('a')
    anchor.setAttribute('href', link.href)
    anchor.innerText = link.text
    topMenuEl.appendChild(anchor)
})