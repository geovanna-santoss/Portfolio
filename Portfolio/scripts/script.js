import { DATA, academicDates } from "./data.js";
import { getCurrentDate, getTimeElapsed, getCompletionPercentage, getRemainingTime } from "./timer.js";

// Configações globais das janelas/modais
const WINDOWS_CONFIG = {
    aboutModal:    { title: "sobre mim",   sub: "Quem sou eu",  w: 400, h: 420, ox: 40,  oy: 30  },
    projectsModal: { title: "projetos",    sub: "Meus projetos", w: 400, h: 420, ox: 200, oy: 50  },
    linksModal:    { title: "links",       sub: "Minhas redes sociais",  w: 300, h: 200, ox: 100, oy: 100 },
    contactModal:  { title: "contato",     sub: "Fale comigo!",  w: 100, h: 80, ox: 300, oy: 180 },
    uselessModal:  { title: "Fun fact", w: 180, h: 120, ox: 100, oy: 50 }
};

const state = {
    windows: {},   
    zCounter: 10,
    dragging: null
};
  
// Função de busca rápida para setar texto em um elemento filho por ID dentro de um container
function setTextById(container, id, text) {
    const el = container.querySelector(`#${id}`);
    if (el) el.textContent = text;
}

// Função para abrir uma janela
function openWindow(id) {
    if (state.windows[id]) {
        bringToFront(state.windows[id]);
        return;
    }

    const cfg  = WINDOWS_CONFIG[id];
    const tpl  = document.getElementById(`tpl-${id}`);
    if (!cfg || !tpl) return;

    // Calcula offset para não sobrepor janelas já abertas
    const openCount = Object.keys(state.windows).length;
    const x = cfg.ox + openCount * 22;
    const y = cfg.oy + openCount * 22;

    const win = document.createElement("div");
    win.className = "win spawning";
    win.dataset.winId = id;
    win.style.cssText = `left:${x}px;top:${y}px;width:${cfg.w}px;height:${cfg.h}px`;

    win.innerHTML = `
        <div class="win-titlebar">
            <button class="wbtn close" aria-label="fechar"></button>
            <button class="wbtn min"   aria-label="minimizar"></button>
            <button class="wbtn maxbtn" aria-label="maximizar"></button>
            <span class="win-title">${cfg.title}</span>
            <span class="win-subtitle">${cfg.sub}</span>
        </div>
        <div class="win-body"></div>
        <div class="win-resize" aria-hidden="true"></div>
    `;

    // Injeta conteúdo do template
    const body = win.querySelector(".win-body");
    body.appendChild(tpl.content.cloneNode(true));

    // Preenche dados dinamicamente
    populateWindow(id, body);
    // Adiciona ao DOM e ao estado da janela aberta
    document.getElementById("windows-container").appendChild(win);
    state.windows[id] = win;

    // Eventos dos botões da titlebar
    win.querySelector(".wbtn.close").addEventListener("click", () => closeWindow(id));
    win.querySelector(".wbtn.min").addEventListener("click",   () => closeWindow(id));
    win.querySelector(".wbtn.maxbtn").addEventListener("click",() => toggleMaximize(win));

    // Drag & Resize
    makeDraggable(win, win.querySelector(".win-titlebar"));
    makeResizable(win, win.querySelector(".win-resize"));

    // Bring to front ao clicar em qualquer parte
    win.addEventListener("mousedown", () => bringToFront(win));

    // Dock indicator
    document.querySelector(`[data-modal="${id}"]`)?.classList.add("is-open");

    // Anima entrada
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            win.classList.remove("spawning");
        });
    });

    bringToFront(win);
}

// Função para fechar uma janela
function closeWindow(id) {
    const win = state.windows[id];
    if (!win) return;

    win.classList.add("closing");
    setTimeout(() => {
        win.remove();
        delete state.windows[id];
        document.querySelector(`[data-modal="${id}"]`)?.classList.remove("is-open");
    }, 180);
}

// Função para alternar a visibilidade de uma janela
function toggleWindow(id) {
    if (state.windows[id]) {
        closeWindow(id);
    } else {
        openWindow(id);
    }
}

// Função para trazer uma janela para frente
function bringToFront(win) {
    win.style.zIndex = ++state.zCounter;
    document.querySelectorAll(".win").forEach(w => w.classList.remove("is-active"));
    win.classList.add("is-active");
}

// Função para maximizar/restaurar uma janela
function toggleMaximize(win) {
    if (win._maximized) {
        win.style.left   = win._prevStyle.left;
        win.style.top    = win._prevStyle.top;
        win.style.width  = win._prevStyle.width;
        win.style.height = win._prevStyle.height;
        win._maximized = false;
    } else {
        win._prevStyle = {
            left: win.style.left, top: win.style.top,
            width: win.style.width, height: win.style.height
        };
        win.style.left   = "4px";
        win.style.top    = "4px";
        win.style.width  = "calc(100% - 8px)";
        win.style.height = "calc(100% - 8px)";
        win._maximized = true;
    }
}

// Função para tornar uma janela arrastável 
function makeDraggable(win, handle) {
    let sx, sy, ox, oy, active = false;
    // Ignora arrastar ao clicar nos botões da titlebar ou se já estiver maximizada 
    handle.addEventListener("mousedown", e => {
        if (e.target.classList.contains("wbtn")) return;
        if (win._maximized) return;
        active = true;
        sx = e.clientX; sy = e.clientY;
        ox = parseInt(win.style.left) || 0;
        oy = parseInt(win.style.top)  || 0;
        bringToFront(win);
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup",   onUp);
    });
    // Calcula nova posição com limites da tela
    function onMove(e) {
        if (!active) return;
        const desk = document.getElementById("desktop");
        const dw = desk.offsetWidth, dh = desk.offsetHeight;
        const nx = Math.max(0, Math.min(ox + e.clientX - sx, dw - 60));
        const ny = Math.max(0, Math.min(oy + e.clientY - sy, dh - 36));
        win.style.left = nx + "px";
        win.style.top  = ny + "px";
    }
    // Encerra arrastar
    function onUp() {
        active = false;
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup",   onUp);
    }
}

// Função para tornar uma janela redimensionável 
// Limita tamanho mínimo e impede de redimensionar além da borda da tela
function makeResizable(win, handle) {
    let sx, sy, sw, sh, active = false;

    handle.addEventListener("mousedown", e => {
        e.stopPropagation();
        active = true;
        sx = e.clientX; sy = e.clientY;
        sw = win.offsetWidth;
        sh = win.offsetHeight;
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup",   onUp);
    });

    function onMove(e) {
        if (!active) return;
        const nw = Math.max(260, sw + e.clientX - sx);
        const nh = Math.max(140, sh + e.clientY - sy);
        win.style.width  = nw + "px";
        win.style.height = nh + "px";
    }

    function onUp() {
        active = false;
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup",   onUp);
    }
}

// Função para preencher o conteúdo das janelas com base no ID
function populateWindow(id, body) {
    // Troca o conteúdo de acordo com o ID da janela
    switch (id) {
        case "aboutModal":    populateAbout(body);    break;
        case "projectsModal": populateProjects(body); break;
        case "linksModal":    populateLinks(body);    break;
        case "contactModal":  populateContact(body);  break;
        case "uselessModal":  populateUseless(body);  break;
    }
}

function populateAbout(body) {
    setTextById(body, "name", DATA.name);
    setTextById(body, "jobTitle", DATA.jobTitle);
    setTextById(body, "bio", DATA.bio);

    const skillsEl = body.querySelector("#skills");
    if (skillsEl) {
        skillsEl.innerHTML = DATA.skills
            .map(s => `<span class="skill-tag">${s}</span>`)
            .join("");
    }


    // Info de formação/tempo
    const elapsed = getTimeElapsed(academicDates.ingresso, getCurrentDate());
    setTextById(body, "gradYear", `Previsão de formatura: ${DATA.gradYear}`);
    setTextById(body, "timeElapsed", `Tempo desde ingresso: ${elapsed.years} anos, ${elapsed.months} meses e ${elapsed.days} dias`);
    setTextById(body, "completionRate", `Progresso estimado: ${getCompletionPercentage(academicDates.ingresso, academicDates.formatura, getCurrentDate())}%`);
    // Condicional de dias restantes para formatura
    const tempoRestante = getRemainingTime(getCurrentDate(), academicDates.formatura);
    if (tempoRestante.completed) {
         setTextById(body, "timeLeft", `Já formada! 🎉`);
    } else {
    // Calcula total de dias a partir do objeto
         const totalDias = (tempoRestante.years * 365) + (tempoRestante.months * 30) + tempoRestante.days;
         setTextById(body, "timeLeft", `${totalDias} dias até a formatura`);
    };
}

function populateProjects(body) {
    const el = body.querySelector("#projects");
    if (!el) return;
    el.innerHTML = DATA.projects.map(p => `
        <div class="project-card">
            <div class="project-header">
                <span class="project-name">${p.name}</span>
                ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">ver →</a>` : ""}
            </div>
            <p class="project-desc">${p.desc}</p>
            <div class="project-tags">
                ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
            </div>
        </div>
    `).join("");
}

function populateLinks(body) {
    const el = body.querySelector("#linkList");
    if (!el) return;
    el.innerHTML = DATA.links.map(l => `
        <a class="link-item" href="${l.url}" target="_blank" rel="noopener">
            <span class="link-icon">${l.icon}</span>
            <div>
                <div class="link-name">${l.name}</div>
                <div class="link-handle">${l.handle}</div>
            </div>
        </a>
    `).join("");
}

function populateContact(body) {
    const el = body.querySelector("#contactList");
    if (!el) return;
    el.innerHTML = DATA.contact.map(c => `
        <div class="contact-item">
            <div class="contact-icon-wrap">${c.icon}</div>
            <div>
                <div class="contact-label">${c.label}</div>
                <div class="contact-val">${c.value}</div>
            </div>
        </div>
    `).join("");
}

// Função para buscar e exibir um fato inútil usando a API
function populateUseless(body) {
  const el = body.querySelector("#fato");
  
  if (!el) {
    console.error("Elemento #fato não encontrado no modal");
    return;
  }
  
  // Buscar o fato quando o modal abrir
  el.textContent = 'Carregando curiosidade inútil :P ...';
  
  fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(fato => {
      el.textContent = fato.text;
    })
    .catch(error => {
      console.error('Erro:', error);
      el.textContent = 'Erro ao carregar fato :( Tente novamente.';
    });
}

// Topbar — relógio + data atual
function updateClock() {
    const el = document.getElementById("today");
    if (!el) return;
    const now  = new Date();
    const dia  = now.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric", month: "short" });
    const hora = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    el.textContent = `${dia} · ${hora}`;
}

// Modo escuro — alterna classe no body e salva preferência no localStorage
function initDarkMode() {
    const btn  = document.getElementById("dm-toggle");
    const body = document.body;

    // Detecta preferência do sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) body.classList.add("dm");

    btn?.addEventListener("click", () => {
        body.classList.toggle("dm");
        const icon = btn.querySelector(".dm-icon");
        if (icon) icon.textContent = body.classList.contains("dm") ? "○" : "◐";
    });
}

// Adiciona evento de clique para abrir/fechar janelas correspondentes(Dock)
function initDock() {
    document.querySelectorAll(".dock-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.modal;
            if (id) toggleWindow(id);
        });
    });
}

// Evento de ínicio para configurar relógio, modo escuro e dock após o DOM estar carregado
document.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 30000);

    initDarkMode();
    initDock();
});
