import { profile, academicDates, habilidades, projetos, links, contatos } from "./data.js";
import { setTextById, renderSkills, renderProjects, renderLinks, renderContacts } from "./dom.js";
import { getCurrentDate, getDateParts, getTimeElapsed, getCompletionPercentage, getRemainingTime, getDayName } from "./timer.js";

// Cria texto legível para o tempo restante até a formatura.
function buildRemainingText(remaining) {
    if (remaining.completed) {
        return "Curso concluído!";
    }

    const yearsText = remaining.years > 0 ? `${remaining.years} ${remaining.years === 1 ? "ano" : "anos"}, ` : "";
    return `Tempo restante para minha formatura: ${yearsText}${remaining.months} meses e ${remaining.days} dias.`;
}

// Alterna a visibilidade de um modal e do overlay.
function toggleModal(modalId, isOpen) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById("modalOverlay");

    if (!modal || !overlay) {
        return;
    }

    modal.classList.toggle("hidden", !isOpen);
    overlay.classList.toggle("hidden", !isOpen);
    modal.setAttribute("aria-hidden", String(!isOpen));
}

// Fecha todos os modais abertos e oculta o fundo escuro.
function closeAllModals() {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.classList.add("hidden");
        modal.setAttribute("aria-hidden", "true");
    });

    const overlay = document.getElementById("modalOverlay");
    if (overlay) {
        overlay.classList.add("hidden");
    }
}

// Configura event listeners para abrir e fechar os modais.
function setupModalHandlers() {
    document.querySelectorAll("[data-modal]").forEach(button => {
        button.addEventListener("click", () => {
            toggleModal(button.dataset.modal, true);
        });
    });

    document.querySelectorAll(".modal-close").forEach(closeButton => {
        closeButton.addEventListener("click", closeAllModals);
    });

    const overlay = document.getElementById("modalOverlay");
    if (overlay) {
        overlay.addEventListener("click", closeAllModals);
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeAllModals();
        }
    });
}

// Inicializa o portfólio preenchendo os textos e renderizando listas.
function initializePortfolio() {
    const currentDate = getCurrentDate();
    const currentParts = getDateParts(currentDate);

    setTextById("name", profile.nome);
    setTextById("jobTitle", profile.tituloProfissional);
    setTextById("bio", profile.bio);
    setTextById("gradYear", `Ano de formatura: ${academicDates.anoFormatura}`);

    renderSkills("skills", habilidades);
    renderProjects("projects", projetos);
    renderLinks("linkList", links);
    renderContacts("contactList", contatos);

    const elapsed = getTimeElapsed(academicDates.ingresso, currentDate);
    setTextById("timeElapsed", `Tempo de curso percorrido: ${elapsed.years} anos, ${elapsed.months} meses e ${elapsed.days} dias.`);
    setTextById("completionRate", `Porcentagem de conclusão: ${getCompletionPercentage(academicDates.ingresso, academicDates.formatura, currentDate)}%`);

    const remaining = getRemainingTime(currentDate, academicDates.formatura);
    setTextById("timeLeft", buildRemainingText(remaining));
    setTextById("today", ` ${currentParts.day}/${currentParts.month}/${currentParts.year} \n  ${getDayName(currentParts.dayOfWeek)}`);
    
    setupModalHandlers();
}

document.addEventListener("DOMContentLoaded", initializePortfolio);
