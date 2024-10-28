let $ = document
let headerItems = $.querySelectorAll('.header-Item')
let navListItems = $.querySelectorAll('.navList_Item')
let menuBtn = $.getElementById('menu-btn')
let navBtn = $.getElementById('nav-Btn')
let navMenu = $.getElementById('nav-Menu')

headerItems.forEach((item) => {
  item.addEventListener('mouseenter',() => {
    item.classList.add('active')
  })
  item.addEventListener('mouseleave',() => {
    item.classList.remove('active')
  })
})


navListItems.forEach((listItem) => {
  listItem.addEventListener('mouseenter',(event)=>{
   event.target.classList.add('active')
  })
  listItem.addEventListener('mouseleave',(event)=> {
    event.target.classList.remove('active')
  })
})


function _id(element){
    $.getElementById(element)
}

function _selector(element){
    $.querySelector(element)
}

function openNav(){
  navBtn.classList.add('active')
  navMenu.classList.remove('-left-[280px]')
  navMenu.classList.add('left-0')
  overlay.classList.remove('hidden')
}

function closeNavBtn(){
  navBtn.classList.remove('active')
  navMenu.classList.add('-left-[280px]')
  navMenu.classList.remove('left-0')
  overlay.classList.add('hidden')
}

menuBtn.addEventListener('click',openNav)