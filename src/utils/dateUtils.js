export const monthMap = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Okt': 9, 'Nov': 10, 'Dec': 11, 'Dez': 11
};

export function getDecimalYear(monthStr, yearStr) {
    if (!yearStr || yearStr.toLowerCase() === 'now' || yearStr.toLowerCase() === 'present') {
        const now = new Date();
        return now.getFullYear() + (now.getMonth() / 12);
    }
    const y = parseInt(yearStr);
    if (isNaN(y)) {
        const now = new Date();
        return now.getFullYear() + (now.getMonth() / 12);
    }
    const m = monthMap[monthStr ? monthStr.slice(0, 3) : ''] || 0;
    return y + (m / 12);
}

export function parseDates(dateStr) {
    // e.g. "Feb 2024 – Now | 2y" -> cleanStr = "Feb 2024 - Now"
    if (!dateStr) {
        const now = new Date();
        const yval = now.getFullYear() + (now.getMonth() / 12);
        return { start: yval, end: yval };
    }

    const cleanStr = dateStr.split('|')[0].trim().replace(/–/g, '-');
    const parts = cleanStr.split('-');

    if (parts.length >= 2) {
        const p1 = parts[0].trim().split(' ');
        const p2 = parts[1].trim().split(' ');

        // Sometimes string is "Aug 2014" -> length 2. Sometimes "2010" -> length 1.
        const startM = p1.length === 2 ? p1[0] : null;
        const startY = p1.length === 2 ? p1[1] : p1[0];

        const endM = p2.length === 2 ? p2[0] : null;
        const endY = p2.length === 2 ? p2[1] : p2[0];

        return {
            start: getDecimalYear(startM, startY),
            end: getDecimalYear(endM, endY)
        };
    } else {
        // Single year or format like "2010"
        const val = getDecimalYear(null, cleanStr);
        return { start: val, end: val + 1 };
    }
}
