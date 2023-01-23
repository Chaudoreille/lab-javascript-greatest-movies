// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(item => item.director)
}

function getCleanDirectors(moviesArray) {
    const noDuplicates = [];

    getAllDirectors(moviesArray).forEach(element => {
        if (!noDuplicates.includes(element)) {
            noDuplicates.push(element);
        }
    });
    return noDuplicates;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray
        .filter(item => item.director == "Steven Spielberg" 
                && item.genre.includes("Drama"))
        .length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    return Number((
        moviesArray
        .reduce((acc, movie) => acc + (movie.score || 0), 0) / moviesArray.length)
        .toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray
    .filter(item => item.genre.includes("Drama"));

    if (dramaMovies.length === 0) return 0;

    const scoreSum = dramaMovies.reduce((acc, movie) => acc + (movie.score || 0), 0)

    return Number((scoreSum / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const shallowCopy = [...moviesArray]

    return shallowCopy
    .sort((a,b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title, 'en', {sensitivity: 'base' })
        } else {
            return a.year - b.year;
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
    .map(item => item.title)
    .sort((a,b) => a.localeCompare(b, 'en', {sensitivity: 'base' }))
    .slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return structuredClone(moviesArray)
    .map(movie => {
        const hoursMn = movie.duration.split(" ")
        const hours = parseInt(hoursMn[0])
        const mn = hoursMn.length > 1 ? parseInt(hoursMn[1]) : 0

        movie.duration = hours * 60 + mn
        return movie
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) {
        return null;
    }

    let bestRate = 0
    let bestYear = 0

    const yearlyAvg = moviesArray
    .reduce((acc, movie) => {
        if (!acc[movie.year]) {
            acc[movie.year] = {
                score: movie.score ? Number(movie.score) : 0,
                count: 1
            }
        } else {
            acc[movie.year].score += (movie.score ? Number(movie.score) : 0)
            acc[movie.year].count += 1
        }
        return acc
    }, {})

    for (year in yearlyAvg) {
        const avg = yearlyAvg[year].count ? yearlyAvg[year].score / yearlyAvg[year].count : 0

        if (bestRate < avg) {
            bestRate = avg
            bestYear = year
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestRate}`;
}
