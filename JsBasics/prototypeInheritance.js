let animal = {
    eats: true,
    name(name) {
        console.log(name)
        this.sleep = true;
    },
    firstName: 'vikas',
    lastName: 'mishra',

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ")
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let rabbit = {
    jumps: true,
    __proto__: animal
}

console.log('returns own keys', Object.keys(rabbit))

for (const prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`); // Our
    } else {
        console.log(`Inherited: ${prop}`); // Inherited
    }
}

rabbit.name('rabbit')

console.log(rabbit.sleep)

rabbit.name = (name) => console.log(`Hello ${name}`)

rabbit.name('eagle')

console.log(rabbit.fullName)

rabbit.fullName = 'tom cruise'

console.log(rabbit.fullName)

console.log(animal.fullName)