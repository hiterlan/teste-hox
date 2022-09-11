import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { verifyLogin } from "../Auth";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const token = await verifyLogin({ email, password });

    if (!token) {
      setErrorLogin(false);
      setEmail("");
      setPassword("");
      return;
    }

    navigate("/");
  }

  return (
    <>
      <div className="w-3/5 h-4/5 bg-[url('src/images-icons/cartshop.png')] bg-contain bg-no-repeat drop-shadow-md flex justify-end  mx-auto mt-10 forms">
        <div className="font-main w-full text-[#D13429] p-10 bg-white flex flex-col md:w-1/2 h-4/5">
          <h1 className="text-4xl font-bold"> Bem vindo</h1>
          <p className="mb-4">Realize o login para prosseguir</p>
          <form onSubmit={handleLogin}>
            <input
              className="my-4"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o email"
            />
            <input
              className="my-4"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite a senha"
            />
            <br />
            <button
              type="submit"
              className="bg-[#D13429] w-full my-10 p-2 text-white rounded-md drop-shadow-md focus:border-[#D13429]  focus:outline-none transition focus:ring-[#D13429] focus:ring-2 focus:ring-offset-2 "
            >
              LOGIN
            </button>

            <div className="flex justify-between h-36">
              <label className="text-stone-400 h-6">
                <input
                  className="w-4 h-4 p-1 border border-stone-300 bg-transparent appearance-none align-middle m-2  focus:outline-none transition focus:ring-[#D13429] focus:ring-1 focus:ring-offset-1 checked:bg-[#D13429] checked:bg-[url('src/images-icons/check.png')] bg-[length:0.75em_0.75em] bg-no-repeat bg-center"
                  type="checkbox"
                  value="remember"
                  id="ck-remember"
                  name="ck-remember"
                />
                Lembre de mim
              </label>
              {errorLogin ? (
                <small className="flex justify-center text-sm text-red-600">
                  Senha e/ou e-mail incorretos
                </small>
              ) : (
                ""
              )}
              <a
                href=""
                className="text-black focus:ring-2 focus:ring-[#D13429] h-5 focus:outline-none"
              >
                Esqueceu a senha?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
