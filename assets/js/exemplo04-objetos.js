function functionDadosPaciente() {
    // Utilizando múltiplas variáveis
    let tipoSanguineo = "A+";
    let cpf = "102.123.129-20";
    let idade = 20;
    let nome = "Maria";
    console.log(`Nome: ${nome}
        Tipo Sanguíneo: ${tipoSanguineo}
        Idade: ${idade}
        CPF: ${cpf}`);

    // Criando um objeto para armazenar várias características

    let pacienteMaria = {
        tipoSanguineo: "A+",
        cpf: "102.123.129-20",
        idade: 20,
        nome: "Maria"
    };
    // Alterar a idade da maria
    pacienteMaria.idade = 21;
    console.log(`Nome: ${pacienteMaria.nome}
    Tipo Sanguíneo: ${pacienteMaria.tipoSanguineo}
    Idade: ${pacienteMaria.idade}
    CPF: ${pacienteMaria.cpf}`);

}

/*
 Criar uma função exercicioDadosJogo
    Criar as seguintes variáveis: nome, genero, dataLancamento (string)
    Apresentar as variáveis
    Criar um objeto chamado jogo com os atributos (nome, genero, dataLancamento)
    Apresentar o objeto por completo
    Adicionar os seguintes atributos no objeto do jogo (categoria, preco)
    Apresentar o objeto por completo
*/

function exercicioDadosJogo() {

    let nome = "Age of empires 4";
    let genero = "RTS";
    let dataLancamento = "2023";

    console.log(`Nome do jogo : ${nome}
            genero: ${genero}
            data de lançamento: ${dataLancamento}`);


    let jogo = {
        nome: "Age of empires 4",
        genero: "RTS",
        dataLancamento: 2023
    };

    console.log(`Nome do jogo: ${jogo.nome}
        genero: ${jogo.genero}
        data de lançamento: ${jogo.dataLancamento}`);

    jogo.publisher = "Xbox Game studios";
    jogo.preco = 189.00

    console.log(`Nome do jogo: ${jogo.nome}
        genero: ${jogo.genero}
        data de lançamento: ${jogo.dataLancamento}
        publisher: ${jogo.publisher}
        preço: R$${parseFloat(jogo.preco).toFixed(2)}`)
}

function exemploObjetoEmVetor() {
    let alunos = [];

    let aluno1 = {};
    aluno1.nome = prompt("Digite o nome do Aluno");
    aluno1.nota1 = parseFloat(prompt("Digite a nota 1"));
    aluno1.nota2 = parseFloat(prompt("Digite a nota 2"));
    aluno1.nota3 = parseFloat(prompt("Digite a nota 3"));
    // aluno1.media = (aluno1.nota1 + aluno1.nota2 + aluno1.nota3) / 3;
    aluno1.media = calcularMedia(aluno1).toFixed(2);
    alunos.push(aluno1);

    let aluno2 = {};
    aluno2.nome = prompt("Digite o nome do Aluno");
    aluno2.nota1 = parseFloat(prompt("Digite a nota 1"));
    aluno2.nota2 = parseFloat(prompt("Digite a nota 2"));
    aluno2.nota3 = parseFloat(prompt("Digite a nota 3"));
    // aluno2.media = (aluno2.nota1 + aluno2.nota2 + aluno2.nota3) / 3;
    aluno2.media = calcularMedia(aluno2).toFixed(2);
    alunos.push(aluno2);

    console.table(alunos);

}

function calcularMedia(aluno) {
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    return media
}

/* Ex. 2: Criar uma lista de colaboradores
    Solicitar os dados armazenando em objetos
    Atributos: nome, valor hroa, quantidade de horas
    Criar uma função para calcular o salario Bruto, armazenando no objeto
    Apresentar os objetos com o console.table
*/

function CadastroColaboradores() {
    let colaborador = [];

    let colaborador1 = {};
    colaborador1.nome = prompt("Digite o nome do colaborador");
    colaborador1.valorHora = parseFloat(prompt("Digite o valor da hora"));
    colaborador1.quantidadeHora = parseFloat(prompt("Digite a quantidade de horas"));

    colaborador1.salarioBruto = salarioBruto(colaborador1).toFixed(2);
    colaborador.push(colaborador1);

    let colaborador2 = {};
    colaborador2.nome = prompt("Digite o nome do colaborador");
    colaborador2.valorHora = parseFloat(prompt("Digite o valor da hora"));
    colaborador2.quantidadeHora = parseFloat(prompt("Digite a quantidade de horas"));

    colaborador2.salarioBruto = salarioBruto(colaborador2).toFixed(2);
    colaborador.push(colaborador2);

    console.table(colaborador);

}

function salarioBruto(colaborador) {
    const salario = colaborador.valorHora * colaborador.quantidadeHora;
    return salario
}

