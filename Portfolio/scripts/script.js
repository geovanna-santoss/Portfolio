// Definindo variáveis globais 
const NOME             = "Geovanna Santos";
let TituloProfissional = "Técnico em Dev de Sistemas";
let MinhaBio           = "Estudante de Técnico em Desenvolvimento de Sistemas. \n Construindo meu primeiro portfólio, buscancando a solução de problemas com lógica e tecnologia.";
let AnoFormatura       = 2026;

// Definindo variáveis para calculo de tempo restante para formatura
let MesFormatura = 12;
let DiaFormatura = 31;
let AnoIngresso  = 2025;
let MesIngresso  = 1;
let DiaIngresso  = 1;

const DATAATUAL = new Date(); // Data atual, data completa, biblioteca de data do JavaScript
let MesAtual = DATAATUAL.getMonth() + 1; // Mês atual (0-11, por isso +1)
let AnoAtual = DATAATUAL.getFullYear(); // Ano atual
let DiaAtual = DATAATUAL.getDate(); // Dia atual

let nulo = null;
let indefinido;

let curso = {
    nome: "Desenvolvimento de Sistemas",
    semestre: 3,
    disciplinaAtual: "Linguagem de programação"
};

// console.log para exibir informações no console/terminal
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof AnoFormatura);
console.log(typeof MinhaBio);
console.log(typeof TituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

// buscando elementos no index.html pelo id e definindo as variáveis que correspondem a eles no js
document.getElementById("MeuNome").innerText = NOME;
document.getElementById("TituloProfissional").innerText = TituloProfissional;
document.getElementById("MinhaBio").innerText = MinhaBio;
document.getElementById("AnoFormatura").innerText = "Ano de formatura: " + AnoFormatura;
document.getElementById("TempoPercorrido").innerText = `Tempo de curso percorrido:\n ${AnoAtual - AnoIngresso} anos, ${MesAtual - MesIngresso} meses e ${DiaAtual - DiaIngresso} dias.`;
document.getElementById("TempoPorcentagemFormatura").innerText = `Porcentagem de conclusão: ${Math.round(((AnoAtual - AnoIngresso) + (MesAtual - MesIngresso) / 12 + (DiaAtual - DiaIngresso) / 365) / ((AnoFormatura - AnoIngresso) + (MesFormatura - MesIngresso) / 12 + (DiaFormatura - DiaIngresso) / 365) * 100)}%`;


let DiasRestantes  = DiaFormatura - DiaAtual;
let MesesRestantes = MesFormatura - MesAtual;
let AnosRestantes  = AnoFormatura - AnoAtual;

// Se anos para formatura for 0 ou < 0 não que imprima os anos (correções de escrita)
if (AnoFormatura - AnoAtual === 1 ) {
    document.getElementById("TempoRestanteFormatura")
    .innerText = `Tempo restante para minha formatura:\n ${AnoFormatura - AnoAtual} ano, ${MesFormatura - MesAtual} meses e ${DiaFormatura - DiaAtual} dias.`;
} else if (AnoFormatura - AnoAtual <= 0) {
    document.getElementById("TempoRestanteFormatura")
    .innerText = `Tempo restante para minha formatura:\n ${MesFormatura - MesAtual} meses e ${DiaFormatura - DiaAtual} dias.`;
} else {
    document.getElementById("TempoRestanteFormatura")
    .innerText = `Tempo restante para minha formatura:\n ${AnoFormatura - AnoAtual} anos, ${MesFormatura - MesAtual} meses e ${DiaFormatura - DiaAtual} dias.`;
};

// Condição quando o curso for concluído
if (DiasRestantes <= 0 && MesesRestantes <= 0 && AnosRestantes <= 0) {
    document.getElementById("TempoRestanteFormatura").innerText = `Curso Concluído!`;
};

//  Condição para exibir a data 
let DiaSemana = DATAATUAL.getDay() + 1; 

let DiaEscrito;
switch (DiaSemana) {
    case 1: DiaEscrito  = "Domingo"; break;
    case 2: DiaEscrito  = "Segunda-feira"; break;
    case 3: DiaEscrito  = "Terça-feira"; break;
    case 4: DiaEscrito  = "Quarta-feira"; break;
    case 5: DiaEscrito  = "Quinta-feira"; break;
    case 6: DiaEscrito  = "Sexta-feira"; break;
    case 7: DiaEscrito  = "Sábado"; break;
    default: DiaEscrito = "Dia inválido";
}
document.getElementById("DiaSemana").innerText = `Hoje é ${DiaEscrito}, ${DiaAtual}/${MesAtual}/${AnoAtual}.`;