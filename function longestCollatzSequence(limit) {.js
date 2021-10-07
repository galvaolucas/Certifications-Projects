function longestCollatzSequence(limit) {

    let contador = 1;
    let operador = 0;
    let contadores = [];
    let maximo = 0;
    contadores[0] = 0;
    contadores[1] = 0;

    for (var i = 2; i <= limit; i++) {
        operador = i;
        do {
            if (operador % 2 === 0) {
                contador++;
                operador = operador / 2;

            }
            else {
                contador++;
                operador = (3 * operador) + 1;
            }
        }
        while (operador != 1);

        contadores[i] = contador;
        contador = 1; //reinicializar o contador
    }

    for (var x = 0; x <= contadores.length; x++) {
        if (contadores[x] > maximo) {
            maximo = contadores[x];
        }

    }

    for (var j = 0; j < contadores.length; j++) {
        if ((contadores[j]) === maximo) {
            console.log(j);
            return j;
        }
    }

}

longestCollatzSequence(1000000);