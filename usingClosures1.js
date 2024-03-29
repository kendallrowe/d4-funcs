// Exercise 1 Loaded Die
const makeLoadedDie = function() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = -1;

  return function() {
    index = index === (list.length - 1) ? index = 0 : index += 1;
    return list[index];
  };
};

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

// Exercise 2 Countdown
const countdownGenerator = function(x) {
  return function() {
    if (x < 0) {
      console.log("Rockets already gone, bub!");
    } else if (x === 0) {
      console.log("Blast Off!");
    } else {
      console.log(`T-minus ${x}...`);
    }
    x--;
  };
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


// // Examples
// function makeIdGenerator() {
//   let id = 0;

//   // The following is the closure function
//   return function() {
//     // This inner function accesses and assigns the value of
//     // the variable id, which was defined in the parent function
//     id += 1;
//     return id;
//   }
// }

// // makeIdGenerator returns a function which is assigned to
// // the variable nextId
// const nextId = makeIdGenerator();

// console.log(nextId()); // Logs: 1
// console.log(nextId()); // Logs: 2
// console.log(nextId()); // Logs: 2
// console.log(nextId()); // Logs: 2
// console.log(nextId()); // Logs: 2
// console.log(nextId()); // Logs: 2
// console.log(nextId()); // Logs: 2
