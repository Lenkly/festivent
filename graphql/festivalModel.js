import axios from 'axios';

class Festival {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:4000/',
    });
  }

  list() {
    return this.api.get('/festivals').then((res) => res.data);
  }
}

export default new Festival();
