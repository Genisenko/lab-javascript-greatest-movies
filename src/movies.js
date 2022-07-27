// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*function getAllDirectors(moviesArray) {
    const moviesDirectors = moviesArray.map((element, index) => {
        return element.director
    })
       return moviesDirectors
       

}*/


function getAllDirectors(moviesArray) {
    const moviesDirectors = moviesArray.map(element => element.director)
       return moviesDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    const spielberg = moviesArray.filter(element => element.director === 'Steven Spielberg')
    const spielbergDramas = spielberg.filter(drama => drama.genre.includes('Drama'))
    return spielbergDramas
  
  }
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const scores = moviesArray.map(number => number.score)
    const allScores = scores.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
    const average = allScores / scores.length
  
    return (Math.round(average).toFixed(2))
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(drama => drama.genre.includes('Drama'))
    const scores = dramaMovies.map(number => number.score)
    const allScores = scores.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
    const average = allScores / scores.length
      
    return (Math.round(average).toFixed(2))
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const ordered = ((moviesArray).sort((a, b) => a.year - b.year))
   
   return ordered
   }
   
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (moviesArray) => {

    const aplhabeticOrder = moviesArray.sort((movie, titles) => {
        var textA = movie.title.toUpperCase();
        var textB = titles.title.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
    
    return aplhabeticOrder.splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
