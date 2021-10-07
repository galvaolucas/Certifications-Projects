let a = [1, 2, 3, 4, 3, 2, 1];
let b = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];
let c = [0, 0, 1, 2, 1]

function lonelyInteger(a) {

    var vetCont = [];
    let search = 0;
    let contador = 0;
    let posicao = 1;
    let atri = 0;

    for (let i = 0; i < a.length; i++) {
        search = a[i];
        for (j = 0; j < a.length; j++) {
            if (search === a[j]) {
                contador++;
            }
        }
        console.log(contador);
        vetCont[i] = contador;
        contador = 0;
    }

    for (var x = 0; x <= vetCont.length; x++) {
        if (posicao === vetCont[x]) {
            atri = x;
        }
    }

    return a[atri];
}

lonelyInteger(c);