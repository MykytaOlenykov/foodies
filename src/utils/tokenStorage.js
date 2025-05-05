class TokenStorage {
  #TOKEN_LS_KEY = "token";

  set token(token) {
    localStorage.setItem(this.#TOKEN_LS_KEY, token);
  }

  get token() {
    return localStorage.getItem(this.#TOKEN_LS_KEY);
  }

  clear() {
    localStorage.removeItem(this.#TOKEN_LS_KEY);
  }
}

export const tokenStorage = new TokenStorage();
