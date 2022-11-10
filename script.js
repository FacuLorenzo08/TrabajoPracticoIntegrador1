let boton = document.getElementById('resumen')
let total = document.getElementById('total-pagar')
let borrar = document.getElementById('borrar')
let elemento = document.getElementById("invalidCheck");
let mensaje = document.getElementById("mensaje");

boton.addEventListener('click', hacerSuma)
function hacerSuma(){
    let numero = parseFloat(document.getElementById('cantidad').value)
    let categoria = parseFloat(document.getElementById('sub').value)
    let suma = numero * 200
    let descuento = (suma/100) * categoria
    let sumaTotal = suma - descuento
    
    if(isNaN(suma) || suma === 0 ) {
        alert('[ERROR] Debe seleccionar al menos 1 cantidad');
        return false;
    } else if (isNaN(categoria) || categoria === 0 ) {
        alert('[ERROR] Debe seleccionar una categoría');
        return false;
    } else if (!elemento.checked){
        // mensaje.innerHTML = "Debe estar de acuerdo antes de enviar."
        alert('[ERROR] Debe aceptar los términos y condiciones antes de enviar');
        return false;
    } else {
        total.innerHTML= `Total a Pagar: $ ${sumaTotal},00`
    }
}

borrar.addEventListener('click', limpiar)
function limpiar() {
    let formulario = document.getElementById('formul');
    formulario.reset();
    total.innerHTML= `Total a Pagar: $ 0,00`
}