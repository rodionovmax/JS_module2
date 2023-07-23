let salaries = {
    John: 1000,
    Ann: 1600,
    Pete: 1300,
    month: 'December',
    currency: 'USD',
    isPayed: false
}

/*export function sumSalary(salaries) {
    let sum = 0;
    for (let key in salaries) {
        if (typeof (salaries[key]) == "number") {
            if (salaries[key] !== "NaN" || salaries[key] !== "Infinity" || salaries[key] !== "-Infinity")
                sum += salaries[key]
        }
    }
    return sum
}*/

export function sumSalary(salaries) {
    let total = 0;
    for (let salary of Object.values(salaries)) {
        if (isFinite(salary)) {
            total += salary;
        }
    }
    return total;
}

sumSalary(salaries)
