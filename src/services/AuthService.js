import API from './API';

class AuthService {
  constructor() {
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  async signup(firstName, lastName, email, password) {
    return await fetch({
      method: 'POST',
      url: `${API}/auth/signup`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: firstName,
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
    return await fetch({
      method: 'POST',
      url: `${API}/auth/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: email,
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
