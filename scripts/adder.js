//from the foreward
//expressed more succinctly as x => y => x + y
//create a function that, when called, adds
//whatever was passed into the original function
//ex. if you pass in 3, returns a function that adds 3 to
//whatever you pass in for that function
//in other words, it's an adder function
function adder(x) {
    return function f(y) {
        return x + y
    }
}

const addThree = adder(3)

for (let i = 0; i < 5; i++) {
    console.log(addThree(i))
}
