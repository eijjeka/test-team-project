import axios from 'axios';

const API_KEY = 'cd00d8c55831cbeec8ccdad1db16d6d2';

export default class apiService {
  constructor() {
    this.name = '';
    this.API_KEY = API_KEY;
  }

  async fetchArticles() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.name}&page=1&include_adult=false`,
      );
      const articles = await response.data;
      console.log(articles);
      return articles;
    } catch (error) {
      console.error(error);
    }
  }

  set searchName(newName) {
    this.name = newName;
  }
}
