import { signing, signout } from "./../api/authAPI";

const TOKEN_KEY = "userInfo";
const USER_KEY = "userData";

export const auth = {
  isAuthenticated,
  getToken,
  login,
  logout,
};

function isAuthenticated() {
  return !!getToken();
}

function getToken() {
  return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
}

async function login({ email, password, rememberMe }) {
  const { token, user } = await signing({ email, password });
  if (rememberMe) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  return { token, user };
}

async function logout() {
  await signout();
  sessionStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_KEY);
}
