class Auth {

  static saveToken(token) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  static currentUser() {
    let token = Auth.getToken();
    if (token) {
        var payload = JSON.parse(window.atob(token.split('.')[1]));

        return payload;
    }
  }

  static logOut() {
    localStorage.removeItem('token');
  }

}

export default Auth;
