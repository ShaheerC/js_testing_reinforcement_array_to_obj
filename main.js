testarray = [['Alfonso Cuaron', 'Gravity'], ['Spike Jonze', 'Her'], ['Martin Scorsese', 'The Wolf of Wall Street']]

function arrayToObj(array) {
   let object = {};
   array.forEach((e) => {
      object[e[0]] = e[1];
   });
   return object;
}

console.log(arrayToObj(testarray));

module.exports = arrayToObj;
