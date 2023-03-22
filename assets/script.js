// Verifico il corretto funzionamento dello script 
console.log(document)

//Intercetto il container padre e lo inizializzo in una var
const container = document.querySelector(".container");
console.log(container)
//Predispongo il messaggio finale
let message = document.createElement("p")
console.log(message)

//Creo il ciclo for da 1 a 100
for (let i = 1; i <= 100; i++) {
  console.log('numero che si incrementa da 1 a 100 -->', i)

  //Ad ogni ciclo creo un elemento DIV senza classe
  const square = document.createElement("div");
  console.log(square);


  //Ora assegno una classe preimpostata da css
  square.classList.add("square");
  console.log(square.classList);

  //Creo un istruzione condizionale
  if (i % 3 === 0 && i % 5 === 0){
    square.classList.add("fizzBuzz")
    container.appendChild(square);
    square.append(message = `${i} FizzBuzz`) 

  }else if (i % 3 === 0){
    square.classList.add("fizz")
    container.appendChild(square)
    square.append(message = `${i} Fizz`)

  }else if (i % 5 === 0) {
    square.classList.add("buzz")
    container.appendChild(square)
    square.append(message = `${i} Buzz`)

  }else {
    square.classList.add("number")
    container.appendChild(square)
    square.append(message= `${i}`)
  }
}
