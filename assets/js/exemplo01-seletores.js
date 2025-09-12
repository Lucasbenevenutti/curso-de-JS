function somar() {
    // pegar um elemento da tela por id
    // <elemento id="numero1">
    let campoNumero1 = document.getElementById("numero1");
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero2");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    console.log(numero1);

    let numero2 = parseFloat(campoNumero2.value);
    console.log(numero2);

    let soma = numero1 + numero2;
    alert("Soma: " + soma);
};

// Subtrair
function subtrair() {
    let campoNumero1 = document.getElementById("numero1");

    let campoNumero2 = document.getElementById("numero2");

    let numero1 = parseFloat(campoNumero1.value);

    let numero2 = parseFloat(campoNumero2.value);

    let subtracao = numero1 = numero2;
    console.log("Subtração: " + subtracao);
};

// Multiplicar

function multiplicar() {
    let campoNumero1 = document.getElementById("numero1");

    let campoNumero2 = document.getElementById("numero2");

    let numero1 = parseFloat(campoNumero1.value);

    let numero2 = parseFloat(campoNumero2.value);

    let multiplicar = numero1 * numero2;

    console.log("Multiplicação: " + multiplicar);
};

// Dividir
function dividir() {
    let campoNumero1 = document.getElementById("numero1");

    let campoNumero2 = document.getElementById("numero2");

    let numero1 = parseFloat(campoNumero1.value);

    let numero2 = parseFloat(campoNumero2.value);

    let dividir = numero1 / numero2;

    console.log("Divisão: " + dividir);
};

// function definirCorAzul() {
//     let itens = document.getElementsByClassName("item");

//     for(let i = 0; i < itens.length; i = i + 1) {
//         let item = itens[i];
//         item.style.backgroundColor = "#34b4de";
//     }

//     // itens[1].style.backgroundColor = "#34b4de";
//     // itens[2].style.backgroundColor = "#34b4de";
//     // itens[3].style.backgroundColor = "#34b4de";
//     console.log(itens);
// };

function definirCor(nomeCor) {
    let itens = document.getElementsByClassName("item");

    let cor = "";
    if (nomeCor === "azul") {
        cor = "#34b4de";
    } else if (nomeCor === "roxo") {
        cor = "#a034deff"
    } else if (nomeCor === "verde") {
        cor = "#34de64ff"
    } else if (nomeCor === "vermelho") {
        cor = "#ff0000"
    } else if (nomeCor === "preto") {
        cor = "#000"
    }

    for (let i = 0; i < itens.length; i = i + 1) {
        let item = itens[i];
        item.style.backgroundColor = cor;
    }
};

function alterarVisibilidade() {
    let iframes = document.getElementsByTagName("iframe");
    // sei que na nossa tela só tem um iframe, n vou fazer um for,
    // porém se tiver mais do que é necessario utilizar for
    if (iframes[0].style.display === "inline") {
        iframes[0].style.display = "none";
    } else {
        iframes[0].style.display = "inline";
    }
};

function limparCampos() {
    let campoNome = document.getElementsByName("nome")[0];
    campoNome.value = "";

    let campoSobrenome = document.getElementsByName("sobrenome")[0];
    campoSobrenome.value = "";

    let resultado = document.getElementById("resultadoNomes");
    resultado.innerText = "";
};

function apresentarNomeCompleto() {
    let campoNome = document.getElementsByName("nome")[0];
    let nome = campoNome.value;

    let campoSobrenome = document.getElementsByName("sobrenome")[0];
    let sobrenome = campoSobrenome.value;

    let nomeCompleto = `${nome} ${sobrenome}`;

    let resultado = document.getElementById("resultadoNomes");
    resultado.innerText = `Nome completo: ${nomeCompleto}`;
};

function exemploQuerySelector() {
    let paragrafo = document.querySelector("div#jogos p")
    // Adicionar uma classe ao elemento
    paragrafo.classList.add("alternativo");
}

function exemploQuerySelectorAll() {
    let paragrafos = document.querySelectorAll("div#jogos p ");

    for (let i = 0; i < paragrafos.length; i += 1) {
        let paragrafo = paragrafos[i];
        if (i % 2 === 0) {
            // Adicionar uma classe 'destaque' ao elemento
            paragrafo.classList.add("destaque");
        } else {
            paragrafo.classList.add("elegante");
        }
    }
}

function reset() {
    let paragrafos = document.querySelectorAll("div#jogos p");
    for (let i = 0; paragrafos.length; i += 1) {
        let paragrafo = paragrafos[i];
        // Aqui, o ... (spread) expande todas as classes atuais do elemento, removendo todas de uma vez.
        paragrafo.classList.remove(...paragrafo.classList);
    }
}