const BASE_URL = 'https://api.themoviedb.org';
const MY_KEY = '0b0ab544c51d0aec96512431b6d0c332';

export default class Api {

  constructor() {
    this.page = 1;
  }
  
  async fetchMovie() {
    const response = await fetch(`${BASE_URL}/3/trending/all/day?api_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.results)
    console.log(data.total_pages)
    console.log(data.total_results)
    this.page += 1;
    return data.results;
  }
}
