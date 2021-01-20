function loadContact(content) {
    // creates html elements
    const contactContainer = document.createElement('div')
    const header = document.createElement('h2')
    const email = document.createElement('p')
    const phone = document.createElement('p')
    const hoursHeader = document.createElement('h2')
    const weekdayHours = document.createElement('p')
    const weekendHours = document.createElement('p')
    // gives DOM elements propert text content
    header.textContent = "Contact: "
    email.textContent = "Email: eugene.krabs@seamail.com"
    phone.textContent = "Phone: 111-111-1111"
    hoursHeader.textContent =  "Hours:"
    weekdayHours.textContent = "Mon.-Thurs. 5pm-10pm"
    weekendHours.textContent = "Fri & Sat. 5pm-1am,"
    + " Sunday 11am-3pm (brunch) 5pm-1am (dinner)"
    // adds elements to their container, and then the container 
    // to the DOM
    contactContainer.appendChild(header)
    contactContainer.appendChild(email)
    contactContainer.appendChild(phone)
    contactContainer.appendChild(hoursHeader)
    contactContainer.appendChild(weekdayHours)
    contactContainer.appendChild(weekendHours)
    content.appendChild(contactContainer)
}

export {loadContact}