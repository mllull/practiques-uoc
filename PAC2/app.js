const MIN = 1;
const MAX = 50;

const isNumber = (val) => !isNaN(val)

const isValidNum = (nombre) => {
    if (!isNumber(nombre)) return false;
    if (nombre < MIN || nombre > MAX) return false;
    return true;
}

const demanaNum = () => {
    const num = prompt("Introdueix el nombre:");

    // Si cancel·lam, sortim.
    if (num === null) return;

    if (!isValidNum(num)) {
        alert("Vosté ha d'introduïr nombres positius que estiguin entre 1 i 50.");
        demanaNum();
    }

    return parseInt(num);
}

const checkNombrePrimer = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

const checkNombreParell = (num) => num % 2 == 0;

const ristraNums = (num1, num2) => {
    let cadena = '';

    if (num1 < num2) {
        // num1 menor que num2
        for (let i = num1; i < num2; i++) {
            if (checkNombreParell(i)) cadena += `${i} `;
        }
    }
    else {
        if (num1 > num2) {
            // num1 major que num2
            for (let i = num1; i >= num2; i--) {
                if (!checkNombreParell(i)) cadena += `${i} `;
            }
        } else {
            // Els nombres són iguals
            cadena = `${num1}`;
        }
    }

    return cadena;
}



const main = () => {
    num1 = demanaNum();
    if (!num1) return;
    num2 = demanaNum();
    if (!num2) return;

    sum = num1 + num2;

    num1Primer = `El ${num1} ` + (checkNombrePrimer(num1) ? "és primer" : "no és primer");
    num2Primer = `el ${num2} ` + (checkNombrePrimer(num2) ? "és primer" : "no és primer");

    num1Parell = `El ${num1} ` + (checkNombreParell(num1) ? "és parell" : "és imparell");
    num2Parell = `el ${num2} ` + (checkNombreParell(num2) ? "és parell" : "és imparell");


    cadena = ristraNums(num1, num2);

    missatge = `La suma és: ${sum}\n` +
        `${num1Primer} i ${num2Primer}\n\n` +
        `${num1Parell} i ${num2Parell}\n\n` +
        `${cadena}`;

    alert(missatge);
}

main()