import axios from 'axios';
import { API } from './API_URL';
class AuthService {
  constructor() {
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  signup(firstName, lastName, email, password) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${API}/auth/signup`, {
          firstName,
          lastName,
          email,
          password
        })
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }

  async login(email, password) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${API}/auth/login`, {
          email,
          password
        })
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
}

export default AuthService;
