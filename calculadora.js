let pantallaNumero ="0";
let memoriaCuenta;
let memoriaNumero;
const pantalla = document.querySelector(".result");

document.querySelector(".calculator-buttons").addEventListener("click",function(event){
    clickBoton(event.target.innerText);
});

document.addEventListener("keyup",function(event){
    tecladoNumero(event.key)
});

function tecladoNumero(tecla){
    clickBoton(tecla);
};

function clickBoton(value) {

    if (isNaN(parseInt(value))){
        botonOperadores(value);
    }
    else{
        botonNumeros(value);
    }
    actualizar();
};

function actualizar() {
    pantalla.innerText = pantallaNumero;
}

function botonNumeros(value){
    if (pantallaNumero === "0"){
        pantallaNumero = value;
    }
    else {
        pantallaNumero += value;
    }

}

function botonOperadores(value) {
    switch(value){
        case "C":
            memoriaNumero = undefined;
            memoriaCuenta = undefined;
            pantallaNumero = "0";
            break;
        case "←":
            if (pantallaNumero.length === 1){
                pantallaNumero="0";
            }
            else {
                pantallaNumero = pantallaNumero.substring(0, pantallaNumero.length-1);
            }
            break;
        case "=":
            if (memoriaCuenta === undefined){
                return;
            }
            else {
            hacerCuenta(memoriaCuenta);
            }

            break;
        case "%":
        case "*":
        case "-":
        case "+":
            botonCuenta(value);
            break;
    }
}

function botonCuenta(value) {
    const intNumero = parseInt(pantallaNumero);

    if (memoriaCuenta === undefined){
        memoriaNumero = intNumero;
        memoriaCuenta = value;
        pantallaNumero= "0";
    }
    else 
    {
        return;
    };


}

function hacerCuenta(value) {
    const numeroActual = parseInt(pantallaNumero);
    console.log(numeroActual);
    switch(value){
        case "+":
            pantallaNumero =  memoriaNumero + numeroActual;
            memoriaCuenta=undefined;
            break
        case "-":
            pantallaNumero =  memoriaNumero - numeroActual;
            memoriaCuenta=undefined;
            break
        case "%":
            pantallaNumero =  memoriaNumero / numeroActual;
            memoriaCuenta=undefined;
        break
        case "*":
            pantallaNumero =  memoriaNumero * numeroActual;
            memoriaCuenta=undefined;
        break
    }
}