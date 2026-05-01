// Definindo variáveis globais 
const NOME             = "Geovanna Santos";
let TituloProfissional = "Desenvolvedor Júnior";
let MinhaBio           = "";
let AnoFormatura       = 2026;
let AnoIngresso        = 2025;
let nulo               = null;
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
document.getElementById("MeuNome").innerText            = NOME;
document.getElementById("TituloProfissional").innerText = TituloProfissional;
document.getElementById("MinhaBio").innerText           = MinhaBio;
document.getElementById("AnoFormatura").innerText       = AnoFormatura;