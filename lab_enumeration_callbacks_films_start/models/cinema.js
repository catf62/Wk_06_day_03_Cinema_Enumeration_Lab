const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function () {
  const result = this.films.map((film) =>{
    const filmTitle = film.title;
    return filmTitle;
  });
  return result;
};
// could be shortened, see solution

Cinema.prototype.findFilmByTitle = function (filmTitle) {
  const result = this.films.filter((film) => {
    return film.title === filmTitle;
  });
  return result;
};
//  could us find instead of filter

Cinema.prototype.findFilmByGenre = function (filmGenre) {
  const result = this.films.filter((film) => {
    return film.genre === filmGenre;
  });
  return result;
};
//  could be shortened, see solution

Cinema.prototype.isThereFilmThisYear = function (year) {
  return this.films.some(film => film.year === year)
};

Cinema.prototype.noFilmsThisYear = function (year) {
  return this.films.every(film => film.year !== year)
};

Cinema.prototype.overTime = function (length) {
  return this.films.every(film => film.length === length)
};


  // Cinema.prototype.totalRunTime = function () {
  //   this.films.length.reduce((accum, length) => {
  //     return accum + length;
  //   }, 0);
  //   return total;
  // };

module.exports = Cinema;
