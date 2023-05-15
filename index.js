// Code your solutions in this file
const people = ["abc", 'bcd', 'cbd'];

function writeCards(people, type) {
    const message = [];
    for ( let i = 0; i < people.length ; i++ ) {
    message[i] = `Thank you, ${people[i]}, for the wonderful ${type} gift!`;
    // console.log(`Thank you, ${people[i]}, for the wonderful ${type} gift!`);
    }
    console.log(message);
    return message;
}

// writeCards(['charlie', 'samip', 'ali'], "birthday");

function countDown(number) {
    while (number >= 0 ) {
        
        console.log(number);
        number--;
        debugger;
    }
}

countDown(10);