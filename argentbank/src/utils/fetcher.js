import axios from 'axios';

class Fetcher {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3001/api/v1/',
      timeout: 1000,
      headers: {'autorization': 'Bearer'},
    });
  }

  post(url, body) {
    return this.instance
      .post(url, body)
      .then(res => res.data.body)
  }

}

export default new Fetcher()
