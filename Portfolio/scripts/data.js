//  Variáveis com dados pessoais e acadêmicos do perfil
export const DATA = {
    name: "Geovanna Santos",
    jobTitle: "Desenvolvedora de Sistemas",
    bio: "Estudante de Técnico em Desenvolvimento de Sistemas. Construindo meu primeiro portfólio, buscando soluções de problemas com lógica e tecnologia.",
    gradYear: 2026,
    skills: ["Python", "HTML e CSS básicos", "JavaScript", "GitHub e Git", "Mysql", "Lógica de programação", "Conhecimento em programação modular"],
    projects: [
    {
        name: "Aplicação de Estacionamento",
        tags: ["Python", "Tkinter", "fpdf2", "GitHub", "PyInstaller", "pip", "VsCode"],
        desc: "Aplicação desktop para controle de estacionamento, com geração de recibos em PDF e interface gráfica para cadastro de veículos e controle de vagas."
    },
    {
        name: "Site de buscar de letras musicais",
        tags: ["HTML", "CSS", "JavaScript", "GitHub", "NodeJS", "API local"],
        desc: "Site para buscar letras de músicas, utilizando uma API local para armazenar as letras e tecnologias web para criar a interface do usuário, permitindo a busca de letras, visualização de artistas e álbuns."
    },
    {
        name: "Calculadora Web básica",
        tags: ["HTML", "CSS", "JavaScript", "GitHub"],
        desc: "Site de calculadora básica, com interface simples e funcional, permitindo a realização de operações matemáticas básicas."
    }],
    links: [
    { 
      icon:"",
      name: "GitHub",
      handle: "@geovanna-santoss",
      url: "https://github.com/geovanna-santoss" 
    },
    { icon:"",
      name: "LinkedIn", 
      handle: "Geovanna Santos",
      url: "https://www.linkedin.com/in/geovanna-santoss"
    },
    { icon:"",
      name: "Instagram", 
      handle: "@adliin.n",
      url: "https://www.instagram.com/adliin.n/"
    }],

    contact: [
    {   icon:"",
        label: "Email",
        value: "geosant.dev@gmail.com"
    }
    ],
    };

export const academicDates = {
    anoFormatura: 2026,
    ingresso: { ano: 2025, mes: 1, dia: 1 },
    formatura: { ano: 2026, mes: 12, dia: 31 }
} 