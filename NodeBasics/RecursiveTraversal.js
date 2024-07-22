let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }],
        development: {
            sites: [{
                name: 'Peter',
                salary: 2
            }, {
                name: 'Alex',
                salary: 1
            }],
    
            internals: [{
                name: 'Jack',
                salary: 1
            }]
        }
    }
};

// for (const subDept of Object.values(company)) {
//  console.log(subDept, Array.isArray(subDept))       
// }

var sumSalary = (dept) => {

    if (Array.isArray(dept)) {
        return dept.reduce((acc, val) => acc + val.salary, 0)
    }
    let sum = 0
    for (const subDept of Object.values(dept)) {
        sum += sumSalary(subDept)
    }
    return sum
}

console.log(sumSalary(company))