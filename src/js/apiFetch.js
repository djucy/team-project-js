const BASE_URL = 'https://api.themoviedb.org';
const MY_KEY = '0b0ab544c51d0aec96512431b6d0c332';

export default class Api {

  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.language = 'ru-RU'
    // 'en-US'
  }
  
//запрос данных для фильмов (возвращает массив объектов с свойствами фильмов)
  async fetchMovie() {
    const response = await fetch(`${BASE_URL}/3/trending/all/day?api_key=${MY_KEY}&language=${this.language}`);
    const data = await response.json();
    // console.log(data.results)
    // console.log(data.total_pages)
    // console.log(data.total_results)
    // this.page += 1;
    return data.results;
  }

//запрос данных для жанров (возвращает массив объектов с свойствами жанров)
  async fetchGenres() {
    const response = await fetch(`${BASE_URL}/3/genre/movie/list?api_key=${MY_KEY}&language=${this.language}`);
    const data = await response.json();
    return data.genres;
  }

//запрос данных для поиска фильмов поключевому слову
  async fetchSearch() {
    const response = await fetch(`${BASE_URL}/3/search/movie?api_key=${MY_KEY}&language=${this.language}&query=${qwery}&page=${this.page}&include_adult=false`);
    const data = await response.json();
    // data.total_pages += 1;
    // console.log()
    return data.results;
  }
    resetPageNumber() {
    this.pageNumber = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newSearchQuery) {
    // console.log(newSearchQuery)
    this.searchQuery = newSearchQuery;
    // console.log(this.searchQuery)
  }
}

