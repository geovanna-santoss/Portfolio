// Funções para atualizar o DOM com conteúdo carregado dinamicamente.
export function setTextById(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = text;
    }
}

// Renderiza a lista de habilidades dentro de um container específico.
export function renderSkills(containerId, skills) {
    const container = document.getElementById(containerId);
    if (!container) {
        return;
    }

    const title = document.createElement("h3");
    title.innerText = "Habilidades";

    const list = document.createElement("ul");
    skills.forEach(skill => {
        const item = document.createElement("li");
        item.innerText = skill;
        list.appendChild(item);
    });

    container.innerHTML = "";
    container.appendChild(title);
    container.appendChild(list);
}

// Renderiza os cards dos projetos no modal de projetos.
export function renderProjects(containerId, projects) {
    const container = document.getElementById(containerId);
    if (!container) {
        return;
    }

    const title = document.createElement("h3");

    const projectList = document.createElement("div");
    projectList.className = "projects-list";

    projects.forEach(project => {
        const projectCard = document.createElement("article");
        projectCard.className = "project-card";

        const projectTitle = document.createElement("h4");
        projectTitle.innerText = project.nome;

        const projectDescription = document.createElement("p");
        projectDescription.innerText = project.descricao;

        const techList = document.createElement("p");
        techList.innerText = `Tecnologias: ${project.tecnologias.join(", ")}`;

        const knowledge = document.createElement("p");
        knowledge.innerText = `Conhecimentos: ${project.conhecimentos}`;

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(techList);
        projectCard.appendChild(knowledge);

        projectList.appendChild(projectCard);
    });

    container.innerHTML = "";
    container.appendChild(title);
    container.appendChild(projectList);
}

// Renderiza a lista de links externos no modal de links.
export function renderLinks(containerId, links) {
    const container = document.getElementById(containerId);
    if (!container) {
        return;
    }

    const list = document.createElement("ul");
    list.className = "links-list";

    links.forEach(link => {
        const item = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.innerText = link.nome;
        anchor.target = "_blank";
        anchor.rel = "noreferrer noopener";
        item.appendChild(anchor);
        list.appendChild(item);
    });

    container.innerHTML = "";
    container.appendChild(list);
}

// Renderiza os contatos no modal de contato.
export function renderContacts(containerId, contacts) {
    const container = document.getElementById(containerId);
    if (!container) {
        return;
    }

    const list = document.createElement("ul");
    list.className = "contact-list";

    contacts.forEach(contact => {
        const item = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = contact.url;
        anchor.innerText = `${contact.descricao} \n ${contact.tipo}: ${contact.valor}`;
        anchor.target = "_blank";
        anchor.rel = "noreferrer noopener";
        item.appendChild(anchor);
        list.appendChild(item);
    });

    container.innerHTML = "";
    container.appendChild(list);
}
