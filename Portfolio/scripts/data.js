//  Variáveis com dados pessoais e acadêmicos do perfil
export const DATA = {
    name: "Geovanna Santos Silva",
    avatar: "/Portfolio/img/profile.jpeg",
    jobTitle: "Desenvolvedora de Sistemas Júnior",
    bio: "Estudante de Técnico em Desenvolvimento de Sistemas.\n Fascinada por tecnologia, especialmente por análise, manipulação e interpretação de dados. Além das habilidades técnicas, sou uma pessoa que valoriza a criatividade, colaboração, inclusão e aprendizado contínuo. \n Fora do código, você me encontra lendo, fazendo crochê ou explorando diferentes formas de arte. Acredito que meus hobbies me auxiliam a desenvolver abordagens criativas para resolução de problemas, além de reforçar a atenção aos detalhes que busco aplicar em todos os meus projetos, sejam eles pessoais ou profissionais.",
    gradYear: 2026,
    skills: ["Python", "HTML e CSS básicos", "JavaScript", "GitHub e Git", "Mysql", "Lógica de programação", "Conhecimento em programação modular","Figma"],
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
      icon:"fa-brands fa-github",
      iconColor: "hsl(21, 72%, 56%)",
      name: "GitHub",
      handle: "@geovanna-santoss",
      url: "https://github.com/geovanna-santoss" 
    },
    { icon: "fa-brands fa-linkedin",
      iconColor: "hsl(21, 72%, 56%)",
      name: "LinkedIn", 
      handle: "@geovanna-santos",
      url: "https://www.linkedin.com/in/geovanna-santos-221552411"
    },
    { icon: "fa-brands fa-instagram",
      iconColor: "hsl(21, 72%, 56%)",
      name: "Instagram", 
      handle: "@adliin.n",
      url: "https://www.instagram.com/adliin.n/"
    }],

    contact: [
    {   icon: "fa-solid fa-envelope-open-text",
        iconColor: "hsl(21, 72%, 56%)",
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