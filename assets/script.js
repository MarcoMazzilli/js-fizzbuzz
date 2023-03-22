// Verifico il corretto funzionamento dello script 
console.log(document)

//Intercetto il container padre e lo inizializzo in una var
const container = document.querySelector(".container");
console.log(container)

//Creo il ciclo for da 1 a 100
for (let i = 1; i <= 100; i++) {
  console.log('numero che si incrementa da 1 a 100 -->', i)

  //Ad ogni ciclo creo un elemento DIV senza classe
  const square = document.createElement("div");
  console.log(square);

  //Ora assegno una classe preimpostata da css
  square.classList.add("square");
  console.log(square.classList);

  //Provo ad inserirla nel Dom
  container.appendChild(square);
}
