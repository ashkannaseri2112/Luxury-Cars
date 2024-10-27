let $ = document
let headerItems = $.querySelectorAll('.header-Item')
let navListItems = $.querySelectorAll('.navList_Item')

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