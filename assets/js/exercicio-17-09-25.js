// Criar uma lista de 7 carros com os atributos (marca, placa, modelo, data de emplacamento, cor).
function listaCarros() {

    let listaCarros = [];

    let dadosCarro1 = {
        marca: "Renault",
        placa: "abc-1234",
        modelo: "Fluence",
        dataEmplacamento: "05-11-2000",
        cor: "Prata"
    };

    let dadosCarro2 = {
        marca: "Renault",
        placa: "ccd-4234",
        modelo: "Sandero",
        dataEmplacamento: "19-03-2024",
        cor: "Azul"
    };

    let dadosCarro3 = {
        marca: "Chevrolet",
        placa: "ggj-4545",
        modelo: "Onix",
        dataEmplacamento: "11-10-2011",
        cor: "Vermelho"
    };

    let dadosCarro4 = {
        marca: "Hyundai",
        placa: "lkj-0912",
        modelo: "HB20",
        dataEmplacamento: "05-10-2025",
        cor: "Branco"
    };

    let dadosCarro5 = {
        marca: "Fiat",
        placa: "nse-1985",
        modelo: "Mobi",
        dataEmplacamento: "10-10-2010",
        cor: "Amarelo"
    };

    let dadosCarro6 = {
        marca: "Volkswagen",
        placa: "pkx-6894",
        modelo: "Polo",
        dataEmplacamento: "17-12-2018",
        cor: "Verde"
    };

    let dadosCarro7 = {
        marca: "Fiat",
        placa: "zue-4313",
        modelo: "Argo",
        dataEmplacamento: "11-05-2015",
        cor: "Preto"
    };
    listaCarros.push(dadosCarro1, dadosCarro2, dadosCarro3, dadosCarro4, dadosCarro5, dadosCarro6, dadosCarro7);

    // a) Criar uma lista de string com as marcas a partir da lista de carros (utilizar map)
    const listaMarcas = listaCarros.map(marcas => marcas.marca);
    // console.log(listaMarcas);

    // b) Criar uma lista de objetos com placa, modelo da lista de carros (utilizar map)
    const placaModelo = listaCarros.map(listaCarros => {
        return {
            placa: listaCarros.placa,
            modelo: listaCarros.modelo
        };
    });
    //console.log(placaModelo);

    // c) Criar uma lista de string com os modelos filtrando por marca Fiat.
    const listaFiat = listaCarros
        .filter(modelosFiat => modelosFiat.marca === "Fiat")
        .map(listaDeFiat => listaDeFiat.marca + " " + listaDeFiat.modelo);;
    // console.log(listaFiat);

    // d) Criar uma lista de (marca, modelo) filtrando por Azul
    const listaAzul = listaCarros
        .filter(corAzul => corAzul.cor === "Azul")
        .map(carroAzul => carroAzul.marca + " " + carroAzul.modelo);
    // console.log(listaAzul);

    // e) Criar uma lista filtrando por ano de emplacamento 2025
    const ano2025 = listaCarros.filter(emplacamento2025 => {
        dataEmplacamento = new Date(emplacamento2025.dataEmplacamento);

        if (dataEmplacamento.getFullYear() === 2025) {
            return true
        } else {
            return false
        };
    })
    // console.log(ano2025);
}



// LISTA DE EXERCICIO 2 DO SITE DO PROFESSOR: 
//Criar uma lista de 2 alunos com os seguintes atributos (id, nome, sobrenome, número matricula, turma, notas (lista com 3 notas))

function listaAlunos() {
    let alunos = [];

    let aluno1 = {
        id: crypto.randomUUID(),
        nome: "Lucas",
        sobrenome: "Benevenutti",
        numeroMatricula: 10011,
        turma: "Sup 07",
        notas: {
            nota1: 7.5,
            nota2: 8,
            nota3: 9.3
        }
    };

    let aluno2 = {
        id: crypto.randomUUID(),
        nome: "Thiago",
        sobrenome: "Ventura",
        numeroMatricula: 10012,
        turma: "Sup 05",
        notas: {
            nota1: 9.5,
            nota2: 5,
            nota3: 7.3
        }
    };

    alunos.push(aluno1, aluno2);
    // console.log(alunos);

    // a) Adicionar um aluno com id, nome, sobrenome, notas (lista vazia)
    let aluno3 = {
        id: crypto.randomUUID(),
        nome: "Lidiane",
        sobrenome: "Silva",
        notas: []
    };

    alunos.push(aluno3);
    // console.log(alunos);

    // b) Adicionar um aluno com id, nome, sobrenome, número da matrícula, turma, notas
    let aluno4 = {
        id: crypto.randomUUID(),
        nome: "Joao",
        sobrenome: "Martins",
        numeroMatricula: 10013,
        turma: "sup 06",
        notas: {
            nota1: 5.3,
            nota2: 8,
            nota3: 9.9
        }
    };
    alunos.push(aluno4);
    // console.log(alunos);

    // c) Adicionar um aluno com id, nome, sobrenome, número da matricula, notas
    let aluno5 = {
        id: crypto.randomUUID(),
        nome: "Carlos",
        sobrenome: "Pedroso",
        numeroMatricula: 10014,
        turma: "Sup 07",
        notas: {
            nota1: 10,
            nota2: 8,
            nota3: 6.6
        }
    };

    alunos.push(aluno5);
    // console.log(alunos);

    // d) Adicionar um aluno preenchendo id, nome, sobrenome, notas
    let aluno6 = {
        id: crypto.randomUUID(),
        nome: "Ana",
        sobrenome: "Sens",
        notas: {
            nota1: 8,
            nota2: 4.5,
            nota3: 6.9
        }
    };
    alunos.push(aluno6);
    // console.log(alunos);

    // e) Criar uma lista com os ids dos alunos

    const listaID = alunos.map(alunoID => alunoID.id);
    // console.log(listaID);

    // f) Criar uma lista com os ids dos alunos filtrando pela turma Sup 07
    const listaAlunosTurma07 = alunos
    .filter(turma07 => turma07.turma === "Sup 07")
    .map(aluno => aluno.id + " " + aluno.turma);
    // console.log(listaAlunosTurma07);

    // g) Criar uma lista filtrando por alunos com nome menor que 10
    const listaAlunos10 = alunos.filter(aluno10 => {
        let diferença = "aaaaaaaaaa";
        let nomeCompleto = aluno10.nome + " " +  aluno10.sobrenome;
        
        if (nomeCompleto.length < diferença.length) {
            return true;
        } else {
            return false;
        };
    })
    .map(aluno10 => aluno10.nome + " " + aluno10.sobrenome);
    // console.log(listaAlunos10);
}




