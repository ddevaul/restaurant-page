// employee placard with picture and name of Spongebob
const employeeofMonthPlacard = (function(){
    // instance variables
    const empOfMonthDiv = document.createElement('div')
    const empTitle = document.createElement('h3')
    const empName = document.createElement('h2')
    const spongebobImg = document.createElement('img')
    // styling
    empOfMonthDiv.classList.add('employeeOfMonth')
    // modifying content
    spongebobImg.src = "spongebob.png"
    empTitle.textContent = "Employee of the Month:"
    empName.textContent = "SpongeBob Squarepants"
    // adding to DOM
    empOfMonthDiv.appendChild(spongebobImg)
    empOfMonthDiv.appendChild(empTitle)
    empOfMonthDiv.appendChild(empName)
    
    return{empOfMonthDiv}
})()

function loadHome(content) {
    // instance variables
    const container = document.createElement('div')
    const empOfMonth = employeeofMonthPlacard.empOfMonthDiv
    const specialNotice = document.createElement('div')
    const reservation = document.createElement('button')
    const giftcard = document.createElement('button')
    // event listeners
    reservation.addEventListener('click', () => {
        alert("Reservation Unsuccessful: We are not taking reservations due to" 
        + " Covid-19")
    })
    giftcard.addEventListener('click', () => {
        alert("Gift Card Ordered!")
    })
    // styling
    container.classList.add("home-container")
    specialNotice.classList.add("special-notice")
    reservation.classList.add('reservation')
    giftcard.classList.add('giftcard')
    // text
    specialNotice.textContent = "We will be closed during the holidays. We open for" 
    + " take-out January 20th. We are not seating people due to Covid-19"
    reservation.textContent = "Make a Reservation"
    giftcard.textContent = "Order a Gift Card"
    // adding to DOM
    container.appendChild(empOfMonth)
    container.appendChild(specialNotice)
    container.appendChild(reservation)
    container.appendChild(giftcard)
    content.appendChild(container)
}

export {loadHome}