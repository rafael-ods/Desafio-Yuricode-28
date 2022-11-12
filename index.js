const botaoMenu =  document.querySelector(".btn__menu-lateral")
const menu = document.querySelector(".menu__lista")

botaoMenu.addEventListener("click", ()=>{
    menu.classList.toggle('menu__lista--ativa')
})

botaoMenu.addEventListener("blur", ()=>{
    menu.classList.toggle("menu__lista--ativa")
})