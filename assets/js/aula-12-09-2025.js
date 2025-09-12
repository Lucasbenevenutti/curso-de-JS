let body = document.getElementsByTagName("body")[0];
let ol = document.createElement("ol");
ol.id = "lista-tarefas";


function criarTitulo() {
    let h1 = document.createElement("h1");
    h1.innerText = "Minhas tarefas do Curso SuperDev";
    h1.classList.add("titulo");

    body.appendChild(h1);
}

function criarParagrafo() {
    let p = document.createElement("p");
    p.innerText = `O que é o SuperDev? SuperDev é um curso da proway, completasssooooooo sobre programação,
     nesse curso tem um dos melhores professores que ja tive na vida. O cara alem de ensinar, consegue nos incentivar e ainda ser nosso amigo.
     SUPER RECOMENDO O CURSO, "mas podia dar um descontinho pq é caro pra dedel"`;
    p.classList.add("paragrafo");

    body.appendChild(p);
}

function criarListaOrdenada() {
    body.appendChild(ol);
}

function criarCampos() {
    let input = document.createElement("input");
    input.id = "campo-tarefa";
    input.setAttribute("type", "text");
    input.addEventListener("keyup", processarEventoTecla);

    let label = document.createElement("label");
    label.setAttribute("for", "campo-tarefa");
    label.innerText = "Titulo da tarefa:";

    let labelData = document.createElement("label");
    labelData.setAttribute("for", "campo-data");
    labelData.innerText = "Data para realizar a tarefa:";

    let inputData = document.createElement("input");
    inputData.id = "campo-data";
    inputData.setAttribute("type", "date");
    inputData.addEventListener("keyup", processarEventoTecla);

    body.appendChild(label);
    body.appendChild(input);
    body.appendChild(labelData);
    body.appendChild(inputData);

}

function criarBotaoRegistrar() {

    let botao = document.createElement("button");
    botao.setAttribute("type", "button");
    botao.innerText = "Registrar";

    botao.addEventListener("click", registrar);

    body.appendChild(botao);

}

function registrar() {
    let input = document.getElementById("campo-tarefa");
    let tarefa = input.value;
    let inputData = document.getElementById("campo-data");
    let data = inputData.value;
    const [ano, mes, dia] = data.split("-");
    let dataFormatada = `${dia}/${mes}/${ano}`

    if (input.value.trim() === "") {
        alert("Sem tarefa descrita");
        input.focus(); 
        return;
    } else if (inputData.value === "") {
        alert("sem data escolhida, por favor selecione uma data");
        inputData.focus();
        return;
    } else {
        criarItemNaOL(tarefa, dataFormatada);
            input.value = "";
            inputData.value = "";
        }
        input.focus();
}

function criarItemNaOL(nomeTarefa, data) {
    let li = document.createElement("li");
    li.innerText = `${nomeTarefa} no dia ${data}`;
    ol.appendChild(li);
}

function processarEventoTecla(e) {
    if (e.key === "Enter") {
        registrar();
    }
}



criarTitulo()
criarParagrafo()
criarCampos()
criarBotaoRegistrar()
criarListaOrdenada()