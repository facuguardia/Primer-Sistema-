//Vamos a generar un mini sistema que permita indicarle a los personajes citados, que helado pueden comprar con la plata que tienen. A tener en cuenta, Facu tiene $3, Roberto $1.7 y Pedro $1.5. Tambien vamos a indicar el vuelto que le correspode a Facu.


dineroFacu = prompt("Cuanto dinero tienes Facu ?");
dineroRoberto = prompt("Cuanto dinero tienes Roberto ?");
dineroPedro = prompt("Cuanto dinero tienes Pedro ?");

dineroFacu = parseInt(dineroFacu); //Transformamos el texto incresado por teclado en int

if (dineroFacu >= 0.6 && dineroFacu < 1) {
    alert("Facu, comprate el helado de agua");
    alert("y te sobran" + (dineroFacu - 0.6));
}

else if (dineroFacu >= 1 && dineroFacu < 1.6) {
    alert("Facu, comprate el helado de crema");
    alert("y te sobran" + (dineroFacu - 1));
}

else if (dineroFacu >= 1.6 && dineroFacu < 1.7) {
    alert("Facu, comprate el helado marca Grido");
    alert("y te sobran" + (dineroFacu - 1.6));
}

else if (dineroFacu >= 1.7 && dineroFacu < 1.8) {
    alert("Facu, comprate el helado de marca 5/25");
    alert("y te sobran" + (dineroFacu - 1.7));
}

else if (dineroFacu >= 1.8 && dineroFacu < 2.9) {
    alert("Facu, comprate el helado de marca Lomoro");
    alert("y te sobran" + (dineroFacu - 1.8));
}

else if (dineroFacu >= 2.9) {
    alert("Facu, comprate helado con confites o pote de 1/4kg.");
    alert("y te sobran" + (dineroFacu - 2.9));
}

else {
    alert("Lo siento Facu, pero no te alcanza para nada");
}



if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, comprate el helado de crema");
}   

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, comprate el helado marca Grido");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, comprate el helado de marca 5/25");
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, comprate el helado de marca helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("Roberto, comprate helado con confites o pote de 1/4kg.");
}

else {
    alert("Lo siento Roberto, pero no te alcanza para nada");
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, comprate el helado de crema");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, comprate el helado marca Grido");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, comprate el helado de marca 5/25");
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, comprate el helado de marca Lomoro");
}

else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate helado con confites o pote de 1/4kg.");
}

else {
    alert("Lo siento Pedro, pero no te alcanza para nada");
}
