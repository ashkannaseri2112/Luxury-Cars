let $ = document
let headerItems = $.querySelectorAll('.header-Item')

headerItems.forEach((item) => {
  item.addEventListener('mouseenter',() => {
    item.classList.add('active')
  })
  item.addEventListener('mouseleave',() => {
    item.classList.remove('active')
  })
})

function _id(element){
    $.getElementById(element)
}

function _selector(element){
    $.querySelector(element)
}