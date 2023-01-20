// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(item => item.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray
        .filter(item => item.director == "Steven Spielberg" 
                && item.genre
                .map(item => item.toLowerCase())
                .includes("drama"))
        .length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    return Number((
        moviesArray
        .map(item => item.score ? Number(item.score) : 0)
        .reduce((acc, score) => acc + score, 0) / moviesArray.length)
        .toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesScores = moviesArray
    .filter(item => item.genre
        .map(genre => genre.toLowerCase())
        .includes("drama"))
    .map(drama => drama.score ? Number(drama.score) : 0)

    if (dramaMoviesScores.length === 0) {
        return 0;
    }

    const scoreSum = dramaMoviesScores.reduce((acc, score) => acc + score, 0)

    return Number((scoreSum / dramaMoviesScores.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const shallowCopy = [...moviesArray]

    return shallowCopy
    .sort((a,b) => a.title === b.title ? 0 : a.title < b.title ? -1 : 1)
    .sort((a, b) => a.year - b.year)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
