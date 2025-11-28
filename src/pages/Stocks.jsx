import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import ChartFrame from "../components/ChartFrame";

export default function Stocks() {
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [chart, setChart] = useState("");

  async function fetchChart() {
    const res = await fetch(`http://localhost:8000/stocks/${t1}/${t2}`);
    const blob = await res.blob();
    setChart(URL.createObjectURL(blob));
  }

  return (
  <MainLayout>
    <div className="w-full min-h-screen bg-gray-100 flex p-6 gap-6">

      {/* LEFT CONTENT */}
      <div className="flex-1 bg-white rounded-xl shadow p-8 flex flex-col">

        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Comparação de Ações
        </h1>

        {/* INPUT CONTAINER IGUAL AO CRIPTO */}
        <div className="space-y-4 mb-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              label="Ativo 1"
              value={t1}
              onChange={(e) => setT1(e.target.value)}
              placeholder="Ex: AAPL"
            />

            <Input 
              label="Ativo 2 (opcional)"
              value={t2}
              onChange={(e) => setT2(e.target.value)}
              placeholder="Ex: MSFT"
            />
          </div>

          <button
            onClick={fetchChart}
            className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Gerar
          </button>
        </div>

        {/* GRAPH FRAME */}
        <div className="flex-1">
          <ChartFrame src={chart} alt="Gráfico de ações" />
        </div>
      </div>


      {/* RIGHT SIDEBAR */}
      <div className="w-[32%] hidden lg:flex flex-col bg-white rounded-xl shadow p-6">
        
        <h2 className="text-2xl font-bold mb-4">Discussões</h2>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-sm text-gray-600">
              🔥 <strong>BTC</strong> deve romper 100k ainda esse ano?
            </p>
            <span className="text-xs text-gray-500">42 respostas</span>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-sm text-gray-700">
              ETH vai se beneficiar mais que BTC no próximo ciclo?
            </p>
            <span className="text-xs text-gray-500">12 respostas</span>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-sm text-gray-700">
              Qual altcoin vocês estão comprando agora?
            </p>
            <span className="text-xs text-gray-500">19 respostas</span>
          </div>
        </div>

        <div className="mt-6">
          <textarea
            rows="3"
            className="w-full p-3 border rounded-lg bg-gray-50 resize-none"
            placeholder="Compartilhe algo..."
          />
          <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Postar
          </button>
        </div>
      </div>

    </div>
  </MainLayout>
);
}
