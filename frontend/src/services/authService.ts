import axios from "../api/axios";

interface LoginResponse {
  access_token: string;
}

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  let response;
  try {
    response = await axios.post<LoginResponse>("/auth/login", {
      username,
      password,
    });
  } catch (e) {
    console.log("e: ", e);
  }
  const token = response.data.access_token;
  localStorage.setItem("token", token);
  return token;
};
