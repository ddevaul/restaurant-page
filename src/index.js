import {loadHome} from './home'
import {loadMenu} from './menu'
import {loadContact} from './contact'
import {loadHeader} from './header'
import {loadFooter } from './footer'

const page = (function(){
    // instance variables
    const content = document.querySelector('#content')
    const menuBtn = document.querySelector('#menu')
    const contactBtn = document.querySelector('#contact')
    const homeBtn = document.querySelector('#home')
    const body = document.querySelector('body')
    // callled to give buttons proper event listeners
    const initializeButons = () => {
        menuBtn.addEventListener('click', menuBtnEventHandler)
        contactBtn.addEventListener('click', contactBtnEventHandler)
        homeBtn.addEventListener('click', homeBtnEventHandler)
    }
    // called to initialize the page
    const load = () => {
        loadHeader(body)
        loadFooter(body)
        loadHome(content)
        initializeButons()
        highlightButton(homeBtn)
    }
    return{
        content, body, menuBtn, contactBtn, homeBtn, load
    }
})()
// these three functions clear the current content, add the right
// content to the DOM and highlight the clicked button
function menuBtnEventHandler(e){
    clearContent()
    loadMenu(page.content)
    highlightButton(e.target)

}
function contactBtnEventHandler(e){
    clearContent()
    loadContact(page.content)
    highlightButton(e.target)

}
function homeBtnEventHandler(e){
    clearContent()
    loadHome(page.content)
    highlightButton(e.target)
}
// called when a button is pressed that changes the content div
function clearContent(){
    while(page.content.hasChildNodes()){
        page.content.removeChild(page.content.firstChild)
    }
}
// called to highlight the button that was just pressed
function highlightButton(btn){
    page.menuBtn.classList.remove('selectedButton')
    page.contactBtn.classList.remove('selectedButton')
    page.homeBtn.classList.remove('selectedButton')
    btn.classList.add('selectedButton')
}
// initialize the page
page.load()



