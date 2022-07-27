

function howManyMovies(moviesArray) {
    const spielberg = moviesArray.filter(element => element.director === 'Steven Spielberg')
    const spielbergDramas = spielberg.filter(drama => drama.genre.includes('Drama'))
    return spielbergDramas
  
  }
  
  console.log(howManyMovies(movies))


