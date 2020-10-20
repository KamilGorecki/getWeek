let week

const findLastSunday = (year) => {
    const d = new Date(year, 0, 1, 1, 0, 0, 0)
    d.setDate(d.getDate() - d.getDay())
    return d
}

const findNextSunday = year => {
    const d = new Date(year, 0, 1, 1, 0, 0, 0)
    while (d.getDay() !== 0) {
        d.setDate(d.getDate() + 1)
    }
    return d
}

const createWeekArray = (lastSunday, howManyWeeks) => {
    let weeks = []
    for (let i = 0; i < howManyWeeks; i++) {
        const d1 = new Date(lastSunday)
        d1.setDate(d1.getDate() + i * 7)
        let week = []
        for (let i = 0; i < 7; i++) {
            const d2 = new Date(d1)
            d2.setDate(d2.getDate() + i)
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            week = [...week, d2.toLocaleDateString('pt-BR', options)]
        }
        weeks = [...weeks, week]
    }
    return weeks
}

// @desc returns an array of weeks given specific year. First day of a week is SUNDAY!

const getWeeks = (year) => {
    const d = new Date(year, 0, 1)
    if (d.getDay() < 5) {
        return createWeekArray(findLastSunday(year), 53)
    } else {
        return createWeekArray(findNextSunday(year), 52)
    }
}

// @desc returns an array of days given specific week of a year. First day of a week is SUNDAY!

const getWeek = (year, weekNum) => {
    const weeks = getWeeks(year)
    if (weekNum < 1 || weekNum > weeks.length) return
    week = weeks[weekNum - 1]
    return week
}

module.exports = { getWeeks, getWeek }