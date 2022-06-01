/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

*/

// WELCOME

alert('Ciao! Qui puoi comprare un biglietto per viaggiare ovunque tu voglia!');

// KNOWN DATA
const priceKm = 0.21;

// USERDATA
const userAge = parseInt(prompt('Quanti anni hai?'));
const userKm = parseInt(prompt('Quanti KM vuoi viaggiare?'));

// TRIP PRICE CALCULATION
let userPrice = userKm * priceKm;
const kidspPriceDiscount = userPrice * 20 / 100;
const agedPriceDiscount = userPrice * 40 / 100;

// DISCOUNT LOGICS
if (userAge < 18) {
    userPrice = userPrice - kidspPriceDiscount;
} else if (userAge >= 65) {
    userPrice = userPrice - agedPriceDiscount;
}

// FINAL PRICE
let finalPrice = userPrice.toFixed(2)

// PRINT
document.getElementById('user-final-price').innerHTML = 'Il tuo biglietto costa ' + finalPrice + '€';
