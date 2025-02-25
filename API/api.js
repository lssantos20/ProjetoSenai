import axios from "axios";

const api = axios.create({
  baseURL: "https://prova-tecnico.azurewebsites.net",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (email, senha) => {
  try {
    const response = await api.post("/login", { email, senha });
    
    const token = response.data.token;
    localStorage.setItem("token", token); // Salva o token no armazenamento local
    
    api.defaults.headers.Authorization = `Bearer ${token}`; // Define o token no Axios
    return response.data;
  } catch (error) {
    console.error("Erro no login", error);
    return null;
  }
};
