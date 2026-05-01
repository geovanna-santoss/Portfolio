const NOME             = "Geovanna Santos";
let TituloProfissional = "";
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

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof AnoFormatura);
console.log(typeof MinhaBio);
console.log(typeof TituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("MeuNome").innerText = NOME;
document.getElementById("TituloProfissional").innerText = TituloProfissional;