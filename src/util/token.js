//存储token
export const saveToken = (access_token, refresh_token) => {
  window.localStorage.setItem(
    "access_token",
    // `Bearer ${loginResult.data.access_token}`
    "Bearer" + " " + access_token
  );
  window.localStorage.setItem("refresh_token", `Bearer ${refresh_token}`);
};

//获取token
export const getToken = (tokenKey) => {
  let token = window.localStorage.getItem(tokenKey);
  return token;
};
