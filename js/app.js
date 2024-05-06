let amigos = [];


function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    if(amigo.value == ''){
        alert('Informe o nome do amigo');
        return;
    }
    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado');
        amigo.value = '';
        return;
    }

    let lista = document.getElementById('lista-amigos');



    amigos.push(amigo.value);


    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }


    amigo.value = '';


    atualizarLista();
    atualizarSorteio();
}


function sortear() {

    if(amigos.length < 4){
        alert('Insira mais que 3 amigos!');
        return;
    }

    embaralhar(amigos);


    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}


function excluirAmigo(index) {
    amigos.splice(index);
    atualizarLista();
    atualizarSorteio();
    
}


function embaralhar(lista) {

    //algoritmo de fisher yates
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
        
    }
}


function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {

    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){

        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function(){
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }


}


function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

























/*let primeiraLista = [];
primeiraLista.push(1, 2, 3);

let segundaLista = [];
segundaLista.push(4, 5, 6);

let concatenado = primeiraLista.concat(segundaLista);
console.log(concatenado);

 console.log(concatenado.pop());

 function embaralharConcatenado(concatenado) {
    for (let i = concatenado.length; i > 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [concatenado[i], concatenado[j]] = [concatenado[j], concatenado[i]];
    }
    return concatenado;
}

concatenado = embaralharConcatenado(concatenado);
console.log(concatenado);

function removerDuplicatas(concatenado){
    return [...new Set(concatenado)];
}
 let concacatenadoSemDuplicatas = removerDuplicatas(concatenado);
 console.log(concacatenadoSemDuplicatas);

*/