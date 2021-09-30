var count = 10;
var a = 2;
var Nprimos = [];

for (; a < count; a++) {

    if (primo(a)) {
        Nprimos.push(a);
    }

}

console.log(Nprimos);

function primo(numero) {

    for (var i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }

    }

    return numero !== 1;

}