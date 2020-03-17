import axios from 'axios';
import { API } from './API_URL';
class AuthService {
  constructor() {
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  async signup(firstName, lastName, email, password) {
    await axios
      .post(`${API}/auth/signup `, {
        firstName,
        lastName,
        email,
        password
      })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }

  async login(email, password) {
    await axios
      .post(`${API}/auth/login`, {
        email,
        password
      })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
}

export default AuthService;
