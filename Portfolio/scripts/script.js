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

const habilidades = [
    "Python",
    "HTML e CSS básicos",
    "JavaScript",
    "GitHub e Git",
    "Mysql",
    "Lógica de programação",
];
//  Funçaõ para mostrar as habilidades com o loop do while
function mostrarHabilidades() {
    const container = document.getElementById("Habilidades");
    if (!container) return;
    // Lista para exibir no HTML
    const lista = document.createElement("ul");
    let i = 0;
    do {
        const item = document.createElement("li");
        item.innerText = habilidades[i];
        lista.appendChild(item);
        i++;
    } while (i < habilidades.length);

    container.innerHTML = "<h3>Habilidades</h3>";
    container.appendChild(lista);
}

// console.log para exibir informações no console/terminal
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof AnoFormatura);git 
console.log(typeof MinhaBio);
console.log(typeof TituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

// buscando elementos no index.html pelo id e definindo as variáveis que correspondem a eles no js
document.getElementById("MeuNome").innerText = NOME;
document.getElementById("TituloProfissional").innerText = TituloProfissional;
document.getElementById("MinhaBio").innerText = MinhaBio;
mostrarHabilidades();
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

projetos = [
    {nome :"Aplicação de Estacionamento",
     tecnologias :["Python", "Tkinter","fpdf2"],
     conhecimentos :"VsCode, GtiHub, pip, PyInstaller, PyPDF2",
     descricao :"Aplicação desktop para controle de estacionamento, com geração de recibos em PDF e interface gráfica para cadastro de veículos e controle de vagas.",
    },

    {nome:"Site de buscar de letras musicais",
     tecnologias :["HTML", "CSS", "JavaScript", "GitHub", "NodeJS", "API local"], 
     conhecimentos :"VsCode, GitHub, npm, Express, API local, Fetch API",
     descricao :"Site para buscar letras de músicas, utilizando uma API local para armazenar as letras e tecnologias web para criar a interface do usuário, permitindo a busca de letras, visualição de artistas e álbuns.",
    },

    {nome:"Calculadora Web básica",
     tecnologias:["HTML", "CSS", "JavaScript","GitHub"],
     conhecimentos:"VsCode, GitHub, HTML, CSS, JavaScript",
     descricao:"Site de calculadora básica, com interface simples e funcional, permitindo a realização de operações matemáticas básicas.",
    }
];
// Teste de exibição no console
console.log("Projetos definidos:", projetos);
console.table(projetos);
