// DATI
const fizz = "FIZZ";
const buzz = "BUZZ";
const fizzBuzz = "FIZZBUZZ";

// STAMPA I NUMERI DA 1 A 100

for (let i = 1; i <= 100; i++) {

    // SE MULTIPLO DI 3 E DI 5
    if (i % 3 == 0 && i % 5 == 0) {
        // sostituisci il numero con fizzBuzz
        console.log(fizzBuzz);
    }
    // SE MULTIPLO DI 3
    else if (i % 3 == 0) {
        // sostituisci il numero con "fizz"
        console.log(fizz);
    }
    // SE MULTIPLO DI 5
    // sostituici il numero con "buzz"
    else if (i % 5 == 0) {
        console.log(buzz);
    }
    else {
        console.log(i);
    }
}
// 