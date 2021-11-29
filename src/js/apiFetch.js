const BASE_URL = 'https://api.themoviedb.org';
const MY_KEY = '0b0ab544c51d0aec96512431b6d0c332';
export {Api, BASE_URL, MY_KEY};
export default class Api {

  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.language = 'en-US';
    // 'en-US'
    // 'ru-RU'
    this.id = null;
    
  }
  
//запрос данных для фильмов (возвращает массив объектов с свойствами фильмов)
  async fetchMovie() {
    const response = await fetch(`${BASE_URL}/3/trending/all/day?api_key=${MY_KEY}&page=${this.page}&language=${this.language}`);
    const data = await response.json();
    return data;
  }
  
  //запрос данных для жанров (возвращает массив объектов с свойствами жанров)
  async fetchGenres() {
    const response = await fetch(`${BASE_URL}/3/genre/movie/list?api_key=${MY_KEY}&language=${this.language}`);
    const data = await response.json();
    return data.genres;
  }
  
  //запрос данных для поиска фильмов поключевому слову
  async fetchSearch() {
    const response = await fetch(`${BASE_URL}/3/search/movie?api_key=${MY_KEY}&language=${this.language}&query=${this.searchQuery}&page=${this.page}&include_adult=false`);
    const data = await response.json();
    return data;
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

  async fetchDescribeMovie() {
   const response = await fetch(`${BASE_URL}/3/movie/${this.id}?api_key=${MY_KEY}&language=${this.language}`); 
    // tv
    const data = await response.json();
    console.log(data);
    return data;
    
   }
}

