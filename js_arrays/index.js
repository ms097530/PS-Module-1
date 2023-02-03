console.log('-------- Exercise 1 --------')

console.log('%c---- Array Methods ----', 'color: yellow;')
const movies = ['The Count of Monte Cristo', 'V for Vendetta', 'Kung Fu Hustle']

console.log('Movies length: ' + movies.length)
console.log('2nd movie: ' + movies[1])

movies[1] = 'Rambo'

console.log('New 2nd movie: ' + movies[1])

// add movie back to array
movies.push('V for Vendetta')
console.log(movies)

movies.unshift('Troy')
console.log(movies)

let poppedMovie = movies.pop()
console.log('Movie popped out: ' + poppedMovie)

let shiftedMovie = movies.shift()
console.log('Movie shifted out: ' + shiftedMovie)

// splice returns deleted elements if there are any
const returnVal = movies.splice(1, 0, 'The Iron Giant', 'Rocky 4')
console.log(movies)
console.log('returnVal from splice: ' + returnVal + ', typeof: ' + typeof returnVal)

// forEach loop
console.log('%c---- For each ----', 'color: yellow;')
movies.forEach((movie) =>
{
    console.log(movie)
})

// for of loop
console.log('%c---- For of ----', 'color: yellow;')
for (let movie of movies)
{
    console.log(movie)
}

// for loop with array
console.log('%c---- For ----', 'color: yellow;')
for (let i = 0; i < movies.length; ++i)
{
    console.log(movies[i])
}


// slice
console.log('%c---- Slice ----', 'color: yellow;')
console.log(movies.slice(0, 2))

// spread operator
console.log('%c---- Spread ----', 'color: yellow;')
const moviesCopy = [...movies]
console.log('moviesCopy: ' + moviesCopy)
// shows arrays are separate - push only affects moviesCopy
moviesCopy.push('Up')
console.log('movies: ' + movies)
console.log('vs')
console.log('moviesCopy: ' + moviesCopy)

// join
console.log('%c---- Join ----', 'color: yellow;')
// const moviesStr = movies.join(' ### ')
const moviesStr = movies.join('\n')
console.log(moviesStr)