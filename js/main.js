const contenedorCards = document.getElementById("menu_cards"); 
let cardsHTML = ""; 
for (let producto in menu) 
{
    cardsHTML += crearCards(producto); 
}

contenedorCards.innerHTML = cardsHTML;

function crearCards(producto)
{
    let card = document.createElement('div');
    card.classList.add('card'); 

    let numero = document.createElement('div');
    let nombre = document.createElement('p'); 
    let image = document.createElement('img'); 

    numero.innerText = menu[producto].numero;

    nombre.innerText = menu[producto].nombre;

    image.src = menu[producto].image;

    card.append(numero, nombre, image);

    return card.outerHTML;
}