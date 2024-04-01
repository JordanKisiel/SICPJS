const TOLERANCE = 0.001

function sqrt(x) {
    return sqrt_iter(1, x)
}

//newton's method for finding square roots
//recursively iterative
function sqrt_iter(guess, x) {
    console.log(guess)
    return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x)
}

function is_good_enough(guess, x) {
    return abs(square(guess) - x) < TOLERANCE
}

function abs(x) {
    return x > 0 ? x : x * -1
}

function square(x) {
    return x * x
}

function improve(guess, x) {
    return average(guess, guess / x)
}

function average(x, y) {
    return (x + y) / 2
}

//current this leads to an infinite loop
//TODO: figure out why

console.log(sqrt(9))
