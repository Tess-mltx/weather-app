export function getDayOfWeek(date) {
    const daysOfWeek = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];

    let dateNbr = new Date(date);
    let dayIndex = dateNbr.getDay();

    return daysOfWeek[dayIndex];
}