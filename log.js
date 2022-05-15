const BOTON_ENCRIPTAR = document.querySelector("#btn-encriptar");
const BOTON_DESENCRIPTAR = document.querySelector("#btn-desencriptar");

const imgMun = document.querySelector("#panel-munheco");
const txtLeyenda = document.querySelector("#panel-leyenda");
const TextoDecifrado = document.querySelector(".panel__texto-cifrado");

let cifrado = document.getElementById("cifrado");
let texto = "";
let cadena = "";

BOTON_ENCRIPTAR.addEventListener("click", function () {
    texto = document.getElementById("texto").value.trim();

    if (texto.length > 0) {
        cadena = texto.replaceAll(/e/gm, "enter")
            .replaceAll(/i/gm, "imes")
            .replaceAll(/a/gm, "ai")
            .replaceAll(/o/gm, "ober")
            .replaceAll(/u/gm, "ufat");

        imgMun.classList.add("panel__muneco-quitar");
        txtLeyenda.classList.add("panel__leyenda-quitar");
        TextoDecifrado.classList.add("panel__texto-altura");
        cifrado.value = cadena;
    } else {
        alert("Ingrese un texto.");
    }
});

BOTON_DESENCRIPTAR.addEventListener("click", function () {
    texto = document.getElementById("texto").value.trim();

    if (texto.length > 0) {
        cadena = texto.replaceAll(/enter/gm, "e")
            .replaceAll(/imes/gm, "i")
            .replaceAll(/ai/gm, "a")
            .replaceAll(/ober/gm, "o")
            .replaceAll(/ufat/gm, "u");

        imgMun.classList.add("panel__muneco-quitar");
        txtLeyenda.classList.add("panel__leyenda-quitar");
        TextoDecifrado.classList.add("panel__texto-altura");
        cifrado.value = cadena;

    } else {
        alert("Ingrese un texto.");
    }
});
function copiarTexto() {
    let cifrado = document.querySelector("#cifrado");
    texto = document.querySelector("#texto");
    cifrado.select();
    if (document.execCommand("copy")) {
    } else {
        console.error("No se ha podido copiar el texto");
    }
}