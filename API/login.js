import { useState } from "react";
import { login } from "./api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    const userData = await login(email, senha);
    if (userData) {
      alert("Login bem-sucedido!");
      // Redirecionar ou carregar a página necessária
    } else {
      alert("Erro ao fazer login!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default LoginPage;
