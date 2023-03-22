# Fizz Buzz or FizzBuzz? 

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.  

---
## Procedimento:
---
 #### CREAZIONE DEL CICLO
- Creo un ciclo for e assegno alla variabile `i` un valore uguale a `0`.
- Imposto la condizione da verificare per far si che il codice venga eseguito, nonchè verifico che il contatore sia <= a 100.
- Per far si che il valore di `i` incrementi ad ogni `"ciclo"` imposto l'incremento del suo valore ala fine del ciclo.
---
#### VERIFICA DEI MULTIPLI 

- Utilizzo il `modulo %` per verificare se un numero può essere o meno multiplo di `3` e di `5`
- Utilizzo un `istruzione condizionale` per "stampare" nei multipli di `3` la parola `Fizz`, e nei multipli di `5` `Buzz`.
- Utilizzando un `operatore logico` stampo sia `Fizz` che `Buzz` nel momento in cui entrambe le condizioni siano verificate.
---

#### CREAZIONE E INTERAZIONE CON IL DOM DEGLI "ELEMENTI"
- Seleziono il container che mi sono precedentemente creato.
- Ad ogni "ciclo" creo un elemento (div) e gli assegno una classe preimpostata da css.
- In base al numero, e ai requisiti dell'operatore logico dichiarato in precedenza, decido il contenuto da stampare all'interno del (div) che di "aggiungera" `append` al suo genitore.

