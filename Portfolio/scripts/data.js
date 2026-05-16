//  Variáveis com dados pessoais e acadêmicos do perfil
export const profile = {
    nome: "Geovanna Santos",
    tituloProfissional: "Técnico em Dev de Sistemas",
    bio: "Estudante de Técnico em Desenvolvimento de Sistemas. Construindo meu primeiro portfólio, buscando soluções de problemas com lógica e tecnologia."
};

export const academicDates = {
    anoFormatura: 2026,
    ingresso: { ano: 2025, mes: 1, dia: 1 },
    formatura: { ano: 2026, mes: 12, dia: 31 }
};

export const habilidades = [
    "Python",
    "HTML e CSS básicos",
    "JavaScript",
    "GitHub e Git",
    "Mysql",
    "Lógica de programação",
    "Conhecimento em programação modular"
];

export const projetos = [
    {
        nome: "Aplicação de Estacionamento",
        tecnologias: ["Python", "Tkinter", "fpdf2"],
        conhecimentos: "VsCode, GitHub, pip, PyInstaller, FPDF2",
        descricao: "Aplicação desktop para controle de estacionamento, com geração de recibos em PDF e interface gráfica para cadastro de veículos e controle de vagas."
    },
    {
        nome: "Site de buscar de letras musicais",
        tecnologias: ["HTML", "CSS", "JavaScript", "GitHub", "NodeJS", "API local"],
        conhecimentos: "VsCode, GitHub, npm, Express, API local, Fetch API",
        descricao: "Site para buscar letras de músicas, utilizando uma API local para armazenar as letras e tecnologias web para criar a interface do usuário, permitindo a busca de letras, visualização de artistas e álbuns."
    },
    {
        nome: "Calculadora Web básica",
        tecnologias: ["HTML", "CSS", "JavaScript", "GitHub"],
        conhecimentos: "VsCode, GitHub, HTML, CSS, JavaScript",
        descricao: "Site de calculadora básica, com interface simples e funcional, permitindo a realização de operações matemáticas básicas."
    }
];

export const links = [
    { nome: "GitHub",
      url: "https://github.com/geovanna-santoss" 
    },
    { nome: "LinkedIn", 
      url: "https://www.linkedin.com/in/geovanna-santoss"
 },
    { nome: "Instagram", 
      url: "https://www.instagram.com/adliin.n/"
 }
];

export const contatos = [
    { descricao: "Entre em contato comigo por email!",
      tipo: "Email",  
      valor: "geosant.dev@gmail.com", 
      url: "mailto:geosant.dev@gmail.com" 
    },
];
