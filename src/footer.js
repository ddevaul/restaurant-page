function loadFooter(body) {
    // creates html elements
    const container = document.createElement('div')
    const copyright = document.createElement('div')
    const contact = document.createElement('div')
    const email = document.createElement('div')
    const phone = document.createElement('div')
    const location = document.createElement('div')
    // styles elements with css
    container.classList.add('footer')
    location.style.marginRight = '2rem';
    // gives elements appropriate text content
    copyright.textContent = "Copyright Krusty Krab Inc. 2021"
    location.textContent = "1 Main St. Bikini Bottom"
    email.textContent = "email = eugene.krabs@seamail.com" 
    phone.textContent = "phone = 111-111-1111"
    // add elements to the DOM
    // note that this appends the container to the body, which means
    // it will always come after the content div
    contact.appendChild(email)
    contact.appendChild(phone)
    container.appendChild(copyright)
    container.appendChild(contact)
    container.appendChild(location)
    body.appendChild(container)
}


export {loadFooter}