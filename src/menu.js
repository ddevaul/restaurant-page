// super class for dishes and drinks
class menuItem{
    constructor(title, description, price){
        this.title = title
        this.description = description
        this.price = price
    }
    // creates and returns an HTML item
    createItem(){
        const dishContainer = document.createElement('div')
        const titleEl = document.createElement('h3')
        const descriptionEl = document.createElement('p')
        const priceEl = document.createElement('p')
        titleEl.textContent = this.title
        descriptionEl.textContent = this.description
        priceEl.textContent = this.price 
        dishContainer.appendChild(titleEl)
        dishContainer.appendChild(descriptionEl)
        dishContainer.appendChild(priceEl)
        
        return dishContainer
    }
}

class Dish extends menuItem{
    constructor (title, description, price){
        super(title, description, price)
    }
}

class Drink extends menuItem{
    constructor (title, description, price){
        super(title, description, price)
    }
}

// returns an array of dishes
const dishesObj = (function(){
    const krabbyPatty = new Dish("Krabby Patty", "Our World Famous Burger" +
    " made with our secret formula. Comes with fries.", "1.25")
    const krabbyMeal = new Dish("Krabby Meal", "Our world famous Krabby Patty" 
    + " and a side salad or a bowl of soup. Also comes with fries.", "3.50")
    const saltySeaDog = new Dish("Salty Sea Dog", "Our famous sea dog.", "1.25")
    const sailorsSuprise = new Dish("Sailors Surpsie", "Good luck finding out" +
    " what's in this stew.", "3.00")
    const goldenLoaf = new Dish("Golden Loaf", "Our beautiful golden loaf." +
    " Comes with mashed potatoes.", "2.50")
    const dishesArray = [krabbyPatty, krabbyMeal, saltySeaDog, sailorsSuprise, goldenLoaf]
    return{dishesArray}
})()

// returns an array of drinks
const drinksObj = (function(){
    const kelpShake = new Drink("Kelp Shake", "Delicious Shake", "1.00")
    const seaWeedWine = new Drink("Sea Weed Wine", "Finely Aged", "2.50")
    const coralJuice = new Drink("Coral Juice", "Squeezed Fresh Daily", "0.75")
    const drinksArray = [kelpShake, seaWeedWine, coralJuice]
    return {drinksArray}
})()


// returns a function that appends titles and drink elements to the input
// container div
const menuObj = (function () {
    const dishes = dishesObj.dishesArray
    const drinks = drinksObj.drinksArray
    const title = document.createElement('h1')
    const dishTitle = document.createElement('h2')
    const drinksTitle = document.createElement('h2')

    const createMenu = (container) => {
        // gives headings appropriate text
        title.textContent = "Menu"
        dishTitle.textContent = "Entrees"
        drinksTitle.textContent = "Drinks"
        // adds elements to the DOM
        container.appendChild(title)
        container.appendChild(dishTitle)
        // calls createItem on each dish to return an html element
        // that is then added to the DOM
        dishes.forEach(dish => {
            container.appendChild(dish.createItem())
        })
        // calls createItem on each drink to return an html element
        // that is then added to the DOM
        container.appendChild(drinksTitle)
        drinks.forEach(drink => {
            container.appendChild(drink.createItem())
        })
    }
    return {createMenu}
})()
// creates container to format menu better, then creates a menu inside the
// container, and adds the container to the DOM
function loadMenu(content) {
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')
    menuObj.createMenu(menuContainer)
    content.appendChild(menuContainer)
}

export {loadMenu}