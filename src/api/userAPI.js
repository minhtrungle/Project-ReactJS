// const CURRENT_USER = Symbol('CURRENT_USER');

export function getCurrentUser(apiContext = {}) {
  const email = (apiContext.token || "").split(":")[0];
  return getUser(email, apiContext);
}

export function getUser(email, apiContext = {}) {
  const { token } = apiContext;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token) {
        const userLocal = localStorage.getItem("userData");
        const infoUser = JSON.parse(userLocal);
        const user = {
          email: infoUser.email,
          name: infoUser.name,
        };
        resolve(user);
      }

      return reject(
        new Error("Unauthorized User API call: missing auth token.")
      );
    }, 0);
  });
}
