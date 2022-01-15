function calcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = precio * porcentajeConDescuento / 100;

    return precioConDescuento;
}

function onClickCalcularPrecioConDescuento(){
    const inputPrice = document.getElementById("InputPrecio");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDescuento");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultadoP = document.getElementById("resultado-p");
    resultadoP.innerText = `El precio final con descuento es: $ ${precioConDescuento}`;
}