/*
1.) map is a method built to do exactly that. It's defined on Array.prototype,
    so you can call it on any array, and it accepts a callback as its first argument.
2.) Using map, you don't have to manage the state of the for loop yourself.
3.) You can operate on the element directly, rather than having to index into the array.
4.) You don't have to create a new array and push into it. map returns the finished 
    product all in one go, so we can simply assign the return value to a new variable.
5.) You do have to remember to include a return statement in your callback. If you don't,
    you'll get a new array filled with undefined. 
*/

var tasks = [{
        'name': 'Write for Envato Tuts+',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on Duolingo',
        'duration': 240
    }
];

// for loop
var task_names = [];
for (var i = 0, max = tasks.length; i < max; i += 1) {
    task_names.push(tasks[i].name);
}
console.log('for Loop: ', task_names)

// forEach
var task_names = [];
tasks.forEach((task, index, array) => {
    task_names.push(task.name);
});
console.log('forEach Loop: ', task_names)

// map
// var task_names = tasks.map((task, index, array) =>  task.name);   for one liner we can omit return
var task_names = tasks.map((task, index, array) => {
    return [task.name, task.duration];
});
console.log('map: ', task_names)