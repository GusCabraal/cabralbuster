import { useState } from "react";
import httpRequest from "../axios/config";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios, { AxiosError } from "axios";
import locadora from "../images/locadora.jpg";

const MIN_PASSWORD_LENGTH = 6;
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    mutation.mutate();
  };

  const mutation = useMutation({
    mutationFn: () => {
      return httpRequest
        .post("/login", { email, password })
        .then((response) => response.data);
    },
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/movies");
    },
    onError: (err: Error | AxiosError) => {
      if (axios.isAxiosError(err)) {
        setLoginError(true);
      }
    },
  });
  return (
    <div className="flex min-h-screen">
      <img src={locadora} alt="locadora" className="w-2/5 object-cover" />
      <main className="bg-gray-200 w-full flex items-center justify-center">
        <div className="bg-white max-w-lg p-10 rounded-xl shadow-xl ">
          <h1 className="text-4xl text-center mb-10">Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-sm">
              Email
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                className="block bg-gray-200 rounded p-2 mb-3 text-lg"
              />
            </label>
            <label htmlFor="password" className="text-sm">
              Senha
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="block bg-gray-200 rounded p-2 text-lg"
              />
            </label>
            <button
              type="submit"
              disabled={
                !(
                  email.match(/\S+@\S+\.\S+/) &&
                  password.length > MIN_PASSWORD_LENGTH
                )
              }
              className="mt-10 bg-green-700 w-full p-2 rounded text-white font-bold hover:bg-green-900 disabled:bg-gray-500 "
            >
              Entrar
            </button>
          </form>
          {loginError && <p className="text-center pt-2 text-red-600">Usuario não encontrado</p>}
        </div>
      </main>
    </div>
  );
}

export default Login;
