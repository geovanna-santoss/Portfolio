// Definindo variáveis globais 
const NOME             = "Geovanna Santos";
let TituloProfissional = "Desenvolvedor Júnior";
let MinhaBio           = "";
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
document.getElementById("TempoRestanteFormatura").innerText = `Tempo restante para minha formatura:\n ${AnoFormatura - AnoAtual} anos, ${MesFormatura - MesAtual} meses e ${DiaFormatura - DiaAtual} dias.`;
document.getElementById("TempoPercorrido").innerText = `Tempo de curso percorrido:\n ${AnoAtual - AnoIngresso} anos, ${MesAtual - MesIngresso} meses e ${DiaAtual - DiaIngresso} dias.`;
document.getElementById("TempoPorcentagemFormatura").innerText = `Porcentagem de conclusão: ${Math.round(((AnoAtual - AnoIngresso) + (MesAtual - MesIngresso) / 12 + (DiaAtual - DiaIngresso) / 365) / ((AnoFormatura - AnoIngresso) + (MesFormatura - MesIngresso) / 12 + (DiaFormatura - DiaIngresso) / 365) * 100)}%`;