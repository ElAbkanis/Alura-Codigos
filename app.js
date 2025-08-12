let amigos = [];
function agregaramigo(){
    let nombreamigo = document.getElementById('amigo').value.trim();
    if (nombreamigo !== ""){
        amigos.push(nombreamigo);
        limpiarCaja();
        actualizarLista();
        console.log(amigos);
    } else {
        alert("Inserte un Nombre");
        return;
    }
} 
function actualizarLista(){
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    for ( let i=0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
function sortearAmigo(){
    if (amigos-length === 0) {
        alert("No hay datos, favor ingresar nombres");
        return;
    }
    const nombreAleatorio = Math.floor(Math.random() * amigos.legth);
    const sorteado = amigos[nombreAleatorio];
        resultado.innerHTML = <li> <strong> Amigo Sorteado </strong> ${sorteado} </li> ;
}

function limpiar() {
    document.getElementById("amigo").value = "";
}





