//const precioOriginal = 120;
//const descuento = 18;



function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioCondescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioCondescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio con descuento son: " + precioConDescuento + "€";
}



/*
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioCondescuento,
    precioConDescuento,
});
*/