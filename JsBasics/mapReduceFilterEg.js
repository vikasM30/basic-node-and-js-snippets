/*
Collect two days' worth of tasks.      ->  reduce
Convert the task durations to hours, instead of minutes.    -> map
Filter out everything that took two hours or more.     -> filter
Sum it all up.    -> reduce
Multiply the result by a per-hour rate for billing.  -> map
Output a formatted dollar amount.  -> reduce
*/


var monday = [{
        'name': 'Write a tutorial',
        'duration': 180
    },
    {
        'name': 'Some web development',
        'duration': 120
    }
];

var tuesday = [{
        'name': 'Keep writing that tutorial',
        'duration': 240
    },
    {
        'name': 'Some more web development',
        'duration': 180
    },
    {
        'name': 'A whole lot of nothing',
        'duration': 240
    }
];

var tasks = [monday, tuesday];

var result = tasks.reduce((prev, curr) => {
    return prev.concat(curr)
})
.map((tasks) => {
    return (tasks.duration / 60)
})
.filter((duration) => {
    return duration >= 2
})
.reduce((prev, curr) => {
    return [(+prev) + (+curr)]
})
.map((duration) => {
    return duration * 25
})
.map((dollarValue) => {
    return '$' + dollarValue.toFixed(2)
})
.reduce((formattedValue) => {
    return formattedValue
})
console.log(result)