const TOLERANCE = 0.001

function sqrt(x) {
    console.log(`finding sqrt of: ${x}`)
    return sqrt_iter(1, x)
}

//newton's method for finding square roots
//recursively iterative
function sqrt_iter(guess, x) {
    console.log(`guess: ${guess}`)
    return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x)
}

function is_good_enough(guess, x) {
    console.log(`is good enough? ${abs(square(guess) - x) < TOLERANCE}`)
    return abs(square(guess) - x) < TOLERANCE
}

function abs(x) {
    console.log(`absolute value is: ${x > 0 ? x : x * -1}`)
    return x > 0 ? x : x * -1
}

function square(x) {
    console.log(`square is: ${x * x}`)
    return x * x
}

function improve(guess, x) {
    console.log(`improvement is: ${average(guess, x / guess)}`)
    return average(guess, x / guess)
}

function average(x, y) {
    console.log(`average is: ${(x + y) / 2}`)
    return (x + y) / 2
}

console.log(sqrt(9))
