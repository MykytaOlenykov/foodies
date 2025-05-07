class TokenStorage {
  #TOKEN_LS_KEY = "token";

  set token(token) {
    localStorage.setItem(this.#TOKEN_LS_KEY, token);
  }

  get token() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTc0NjUyOTE3MiwiZXhwIjoxNzQ2NTYxNTcyfQ.Owk8nTPds7Mv4TBGQgPUnZcvOEctbJaL8Q7s97eR8VU';
    // return localStorage.getItem(this.#TOKEN_LS_KEY);
  }
}

export const tokenStorage = new TokenStorage();
