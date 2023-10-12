import Image from "next/image";
import React from "react";
import TobiasVintage from "/public/tobias_vintage_sm.webp";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center bg-fixed  bg-zinc-950 ">
      <div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex p-5 lg:p-0">
          <div className=" max-w-sm bg-white rounded-t-lg lg:rounded-l-lg lg:rounded-r-none">
            {/* <img src={process.env.PUBLIC_URL + "/tobias_vintage_sm.webp"}></img> */}
            <Image alt="tobias" src={TobiasVintage} className="p-1 m-auto" />
          </div>

          <div className="p-8 flex flex-col justify-evenly items-center bg-white relative rounded-b-lg lg:rounded-r-lg lg:rounded-l-none">
            <form
              // onSubmit={doLogin}
              className="flex flex-col items-center justify-evenly "
            >
              <input
                className="input-login"
                id="username"
                type="text"
                placeholder="Usuário"
                // onChange={({ target }) => setUsername(target.value)}
              />

              <input
                className="input-login"
                id="password"
                type="password"
                placeholder="Senha"
                // onChange={({ target }) => setPassword(target.value)}
              />

              <button
                className="mt-6 bg-neutral-700 hover:bg-neutral-900 text-white font-bold py-2  min-w-full rounded outline-none"
                type="submit"
              >
                Entrar
              </button>
              <button
                type="button"
                className="mt-2 bg-neutral-700 hover:bg-neutral-900 text-white font-bold py-2 min-w-full rounded outline-none"
                // onClick={() => navigate("/register")}
              >
                Criar conta
              </button>
            </form>
            <div className="flex justify-center absolute bottom-2 inset-x-0">
              <p className="text-gray-500 text-xs">
                &copy;2024 Tobias's Corp. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center min-w-fit lg:h-96 bg-white rounded-lg lg:flex-row ">
        <div className="flex ">
          <Image alt="tobias" src={TobiasVintage} className="w-auto p-1" />
        </div>
        <div className="text-black  w-72 flex flex-col items-center justify-center relative ">
          <form
            // onSubmit={doLogin}
            className="bg-white flex flex-col items-center justify-evenly"
          >
            <input
              className="input-login"
              id="username"
              type="text"
              placeholder="Usuário"
              // onChange={({ target }) => setUsername(target.value)}
            />

            <input
              className="input-login"
              id="password"
              type="password"
              placeholder="Senha"
              // onChange={({ target }) => setPassword(target.value)}
            />

            <button
              className="mt-6 bg-neutral-700 hover:bg-neutral-900 text-white font-bold py-2  min-w-full rounded outline-none"
              type="submit"
            >
              Entrar
            </button>
            <button
              type="button"
              className="mt-2 bg-neutral-700 hover:bg-neutral-900 text-white font-bold py-2 min-w-full rounded outline-none"
              // onClick={() => navigate("/register")}
            >
              Criar conta
            </button>
          </form>
          <div className="flex justify-center absolute bottom-2 inset-x-0">
            <p className="text-gray-500 text-xs">
              &copy;2024 Tobias's Corp. All rights reserved.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
