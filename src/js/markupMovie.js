// import Api from './apiFetch';

// const api = new Api();

// export default class MarkupMovie {


// // перезаписывает значение рейтинга
// onRatingFixedNumber(data) {
//   data.forEach(el => {
//     return (el.vote_average = onFixedNumber(el.vote_average));
//   });
//   // console.log(data);
// }

// //добавляет к одинарному символу знак после запятой
// onFixedNumber (qval) {
//   if (qval.toString().length === 1) {
//     return '.0'.padStart(3, qval);
//   }
//   return qval;
// };

// // перезаписывает значение даты на год 
// onFilmReleaseYear(data) {
//   data.forEach(el => {
//     return ((el.release_date = onSliceNumber(el.release_date)) || (el.first_air_date = onSliceNumber(el.first_air_date)))
//   });
// }

// //отрезает лишние символы и остается год. Так приходит с бека "2021-11-11"
// onSliceNumber(release) {
//   if (release == undefined) {
//     return
//   }
//   return release.slice(0, 4)
// }


//Заменяет значение жанра на строку с именем жанра
// const genreIds = data.map(el => el.genre_ids);
// console.log(genreIds)
// const comparison = genreIds.forEach(element => {
// console.log(api.fetchGenres(element).then(console.log))
// api.fetchGenres(element).then();
// });
// })

// onRemoveGemres()

// function onRemoveGemres() {
  
// }


// function onComparingArrayAndObject() {
  
//  }
// }