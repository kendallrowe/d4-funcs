// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, actionWhenFound) {
  names.forEach(function(name, index) {
    if (name === "Waldo") {
      actionWhenFound(index);   // execute callback
    }
  });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found Waldo at index " + index + "!");
});