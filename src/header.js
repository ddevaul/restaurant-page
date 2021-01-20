function loadHeader(body) {
    // creates html elements
    const headerContainer = document.createElement('div')
    const logo = document.createElement('div')
    const title = document.createElement('h1')
    // give elements css classes
    logo.classList.add('logo')
    headerContainer.classList.add('header')
    title.classList.add('title')
    // make the heading actually have the title
    title.textContent = "The Krusty Krab"
    // add elements to the DOM, adding the heading container before
    // all other child nodes of the body so the header is at the top
    headerContainer.appendChild(logo)
    headerContainer.appendChild(title)
    body.insertBefore(headerContainer, body.childNodes[0])
}

export {loadHeader}