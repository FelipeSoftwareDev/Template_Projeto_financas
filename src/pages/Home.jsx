import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center m-20 -mt-56 gap-8">
      <h1 className="text-3xl font-bold  mb-10">Selecione uma Seção</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-full">
        
        <Link
          to="/crypto"
          className="bg-white p-6 rounded-xl text-gray-600 shadow-sm border border-gray-200 hover:shadow-md transition hover:bg-zinc-700 hover:text-white"
        >
          <h2 className="text-xl font-semibold mb-2">Criptomoedas</h2>
          <p className="">Veja gráficos BTC, ETH e mais.</p>
        </Link>

        <Link
          to="/stocks"
          className="bg-white p-6 rounded-xl text-gray-600 shadow-sm border border-gray-200 hover:shadow-md transition hover:bg-zinc-700 hover:text-white"
        >
          <h2 className="text-xl font-semibold mb-2">Ações</h2>
          <p className="">
            Compare o desempenho de uma ou duas empresas.
          </p>
        </Link>

               <Link
          to="/guides"
          className="bg-white p-6 rounded-xl text-gray-600 shadow-sm border border-gray-200 hover:shadow-md transition hover:bg-zinc-700 hover:text-white"
        >
          <h2 className="text-xl font-semibold mb-2">Tutoriais</h2>
          <p className="">
            Aprenda como funciona nossa plataforma e extraia seu melhor.
          </p>
        </Link>

      </div>
    </div>
  );
}
