// Funções do timer para cálculo de tempo de formatura e data atual
export function getCurrentDate() {
    return new Date();
}

export function getDateParts(date) {
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        dayOfWeek: date.getDay()
    };
}

function buildDate({ ano, mes, dia }) {
    return new Date(ano, mes - 1, dia);
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

export function getTimeElapsed(startDate, currentDate) {
    const start = buildDate(startDate);
    const end = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
        months -= 1;
        const previousMonth = getDaysInMonth(end.getFullYear(), end.getMonth());
        days += previousMonth;
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { years, months, days };
}

export function getCompletionPercentage(startDate, endDate, currentDate) {
    const start = buildDate(startDate).getTime();
    const end = buildDate(endDate).getTime();
    const current = currentDate.getTime();
    const totalDuration = end - start;
    const elapsed = Math.max(0, Math.min(current - start, totalDuration));

    if (totalDuration <= 0) {
        return 100;
    }

    return Math.round((elapsed / totalDuration) * 100);
}

export function getRemainingTime(currentDate, endDate) {
    const end = buildDate(endDate);
    const current = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    if (current >= end) {
        return { completed: true, years: 0, months: 0, days: 0 };
    }

    let years = end.getFullYear() - current.getFullYear();
    let months = end.getMonth() - current.getMonth();
    let days = end.getDate() - current.getDate();

    if (days < 0) {
        months -= 1;
        const previousMonth = getDaysInMonth(end.getFullYear(), end.getMonth());
        days += previousMonth;
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { completed: false, years, months, days };
}

export function getDayName(dayIndex) {
    const names = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    return names[dayIndex] || "Dia inválido";
}