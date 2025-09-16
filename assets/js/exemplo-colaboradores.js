let colaboradores = [
    {
        "nome": "Lucas",
        "sobrenome": "Ferreira",
        "valor_hora": 32.5,
        "quantidade_horas": 160,
        "valor_auxilio": 300.0,
        "valor_descontos": 120.0,
        "data_nascimento": "1998-07-14"
    },
    {
        "nome": "Ana",
        "sobrenome": "Silva",
        "valor_hora": 28.0,
        "quantidade_horas": 150,
        "valor_auxilio": 250.0,
        "valor_descontos": 100.0,
        "data_nascimento": "1992-05-21"
    },
    {
        "nome": "Bruno",
        "sobrenome": "Oliveira",
        "valor_hora": 35.0,
        "quantidade_horas": 170,
        "valor_auxilio": 320.0,
        "valor_descontos": 150.0,
        "data_nascimento": "1995-11-30"
    },
    {
        "nome": "Juliana",
        "sobrenome": "Santos",
        "valor_hora": 30.0,
        "quantidade_horas": 155,
        "valor_auxilio": 280.0,
        "valor_descontos": 110.0,
        "data_nascimento": "2001-03-08"
    },
    {
        "nome": "Rafael",
        "sobrenome": "Souza",
        "valor_hora": 33.5,
        "quantidade_horas": 165,
        "valor_auxilio": 310.0,
        "valor_descontos": 140.0,
        "data_nascimento": "1990-09-19"
    },
    {
        "nome": "Camila",
        "sobrenome": "Almeida",
        "valor_hora": 29.0,
        "quantidade_horas": 148,
        "valor_auxilio": 260.0,
        "valor_descontos": 95.0,
        "data_nascimento": "1999-12-02"
    },
    {
        "nome": "Felipe",
        "sobrenome": "Gomes",
        "valor_hora": 31.0,
        "quantidade_horas": 160,
        "valor_auxilio": 295.0,
        "valor_descontos": 125.0,
        "data_nascimento": "1997-06-10"
    },
    {
        "nome": "Marina",
        "sobrenome": "Lima",
        "valor_hora": 34.0,
        "quantidade_horas": 162,
        "valor_auxilio": 305.0,
        "valor_descontos": 135.0,
        "data_nascimento": "2003-01-27"
    },
    {
        "nome": "Diego",
        "sobrenome": "Moura",
        "valor_hora": 27.5,
        "quantidade_horas": 145,
        "valor_auxilio": 240.0,
        "valor_descontos": 90.0,
        "data_nascimento": "2005-10-15"
    },
    {
        "nome": "Tatiane",
        "sobrenome": "Carvalho",
        "valor_hora": 30.5,
        "quantidade_horas": 158,
        "valor_auxilio": 290.0,
        "valor_descontos": 115.0,
        "data_nascimento": "2000-08-05"
    }
]

/*
gerar uma lista de colaboradores no formato json com nome, sobrenome, valor hora, quantidade de horas, valor auxilio, valor descontos, data de nascimento.
Gerar um JSON com 10 colaboradores com idades entre 18 e 35 anos
*/


// Criar uma nova lista de string com os nomes dos colaboradores
let colaboradoresNomes = colaboradores.map(colaborador => {
    return colaborador.nome;
});
console.log(colaboradoresNomes.sort());

// Criar uma nova lista com os nomes completos dos colaboradores
// Tenho uma lista de objetos, gerar uma lista de string
let colaboradoresNomesCompletos = colaboradores.map(colaborador => {
    return {"nome": colaborador.nome + " " + colaborador.sobrenome};
});

// Criar uma nova lista  com o nome e salário bruto dos colaboradores
let colaboradoresSalariosBrutos = colaboradores.map(colaborador => {
    let salarioBruto = colaborador.valor_hora * colaborador.quantidade_horas;

    return {salarioBruto: salarioBruto, nome: colaborador.nome};
});

// Criar uma lista com o nome e calcular a idade do colaborador
let colaboradoresIdades = colaboradores.map(colaborador => {
    // Pegando a data e hora atual do navegador
    let dataHoje = new Date();
    // Pegar o ano atual
    let anoAtual = dataHoje.getFullYear();

    // Colaborador.data_nascimento => "1992*02*03"
    let dataNascimento = new Date(colaborador.data_nascimento);

    let idade = anoAtual - dataNascimento.getFullYear();
    return {
        "nome": colaborador.nome,
        "idade": idade,
        "dataNascimento": dataNascimento
    };
});

// Descobrir colaboradores desconto abaixo de R$ 100
let colaboradoresDescontosAbaixo100 = colaboradores.filter(colaborador => colaborador.valor_descontos < 100);

console.log(colaboradoresDescontosAbaixo100);

