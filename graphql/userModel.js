import axios from 'axios';

class User {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:4000/',
    });
  }

  list() {
    return this.api.get('/users').then((res) => res.data);
  }

  find(id) {
    return this.api.get(`/users/${id}`).then((res) => res.data);
  }

  create(data) {
    return this.api.post('/users', data).then((res) => res.data);
  }

  updata(id, data) {
    return this.api.patch(`/users/${id}`, data).then((res) => res.data);
  }

  delete(id) {
    return this.api.delete(`/users/${id}`).then((res) => res.data);
  }
}

export default new User();
