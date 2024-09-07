let numeroHTML = document.querySelector(".numero")
let numeroValor = 0

const botaoAdicionar = document.querySelector("#btn-aumentar")
botaoAdicionar.addEventListener("click", ()=>{
    numeroValor++
    numeroHTML.textContent = numeroValor
})

const botaoRemover = document.querySelector("#btn-diminuir")
botaoRemover.addEventListener("click", ()=>{
    numeroValor--
    numeroHTML.textContent = numeroValor
})

const botaoResete = document.querySelector("#btn-reset")
botaoResete.addEventListener("click", ()=>{
    numeroValor = 0
    numeroHTML.textContent = numeroValor
})