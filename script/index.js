
const lista = document.querySelector('#lista');
const iconeMenu = document.querySelector('.imagem-menu')


iconeMenu.addEventListener("click", () => {

    if(lista.style.display === 'block') {
        lista.style.display = 'none';
    }else {
        lista.style.display = 'block';
    }
    
})

