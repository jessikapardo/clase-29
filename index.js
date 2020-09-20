// const button = document.querySelector("#filtrar")
// const cards = document.querySelectorAll(".card") // selecciono todas las tarjetas


// // button.onclick = () => {
// //     for (let card of cards) { // recorro cada una de las tarjetas
// //         // console.log(card.dataset.nombre) // aca me muestra cual es el data-nombre que puse en cada uno en html
// //         if (card.dataset.nombre === "pepo") { // dataset es el valor que di en el data de HTML
// //             card.classList.add("hidden")
// //         }
// //     }
// // }
// // filtrar.onclick = () => {

// //     //buscar en mis tarjeta quien tiene de nombre pepo
// //     card.classList.add("hidden")
// // }

const cards = document.querySelectorAll(".card")
const botonesFiltro = document.querySelectorAll(".filtro-boton")
const filtro = document.querySelector("#name")
const filtroSexo = document.querySelectorAll(".filtro-sexo")



for (let boton of botonesFiltro) {
    boton.onclick = () => {
        
       
        for (let card of cards) {
            if (boton.dataset.color === card.dataset.color){ 
                card.classList.remove('hidden')
            }
            else if (boton.dataset.color === "todos"){
                card.classList.remove('hidden')
            }
            else{
                card.classList.add('hidden')
            }
        }
    }
}

filtro.oninput = () => {
    
    for (let card of cards) { 
      const titulo = card.dataset.nombre.toLowerCase();
      const busqueda = filtro.value.toLowerCase(); 
      if (titulo.includes(busqueda)) {
        card.classList.remove('hidden');
      } else {
       
        card.classList.add('hidden');
      }
    }
};


for (let checkSexo of filtroSexo) {
    checkSexo.onclick = () => {
        for (let card of cards) {
            if (checkSexo.dataset.sexo === card.dataset.sexo){ 
                card.classList.remove('hidden')
             }
             else if (checkSexo.dataset.sexo === "indistinto"){
                card.classList.remove('hidden') 
            }
            else{
                card.classList.add('hidden')
            }
        }
    }
}
