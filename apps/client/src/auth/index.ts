const TOKEN = "token";

export const getAuthorizationToken = () => {
  return localStorage.getItem(TOKEN);
};

export const setAuthorizationToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

export const removeAuthorizationToken = () => {
  localStorage.removeItem(TOKEN);
};
