// given the following array, randomize it.

var students = [
    'Dan', 'Brack', 'Erin', 'Geordyn', 'Jess', 'Sarah', 'Andrew', 'Ryan', 'Tim', 'Stephen', 'David', 'Mark'
];

function randomArray(arr) {
    function randomNumber() {
        return Math.floor(Math.random() * arr.length);
    }
    console.log(randomNumber());
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[randomNumber()]);
    }
    return newArr;
}

console.log(randomArray(students));
