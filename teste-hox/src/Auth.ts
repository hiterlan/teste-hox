interface LoginProps {
  email: string;
  password: string;
}

export function setToken(token: string) {
  window.localStorage.setItem("token", token);
}

export function getToken() {
  const token = window.localStorage.getItem("token");
  return token || "";
}

export function verifyLogin(props: LoginProps) {
  if (props.email != "teste@hox.com" || props.password != "testehox123")
    return null;

  const token = "webcafezin";
  setToken(token);

  return token;
}
