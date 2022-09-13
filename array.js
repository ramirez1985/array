const listaBar = [];
let cantidad = 5;

do{
    let entrada = prompt("Identifiquese, Gracias!!!");
listaBar.push(entrada.toUpperCase());
}while (listaBar.length != cantidad)
const nuevaLista = listaBar.concat (["Diego", "Ruben"]);
alert(nuevaLista.join("\n"));
