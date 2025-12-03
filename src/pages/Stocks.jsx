import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import ChartFrame from "../components/ChartFrame";

export default function Stocks() {
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [chart, setChart] = useState("");

  async function fetchChart() {
    if (!t1.trim()) {
      alert("Adicione pelo menos um ativo para comparar.");
      return;
    }

    const cleanT1 = t1.toUpperCase().replace(/[^A-Z0-9.\-]/g, "");
    const cleanT2 = t2.toUpperCase().replace(/[^A-Z0-9.\-]/g, "");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/stock-chart/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          t1: cleanT1,
          t2: cleanT2 || null,
        }),
      });

      const data = await res.json();

      if (data.error) {
        alert(data.error);
        return;
      }

      setChart(`data:image/png;base64,${data.chart}`);
    } catch (err) {
      console.error(err);
      alert("Erro ao carregar o gráfico.");
    }
  }

  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-gray-100 flex p-6 gap-6">

        {/* LEFT CONTENT */}
        <div className="flex-1 bg-white rounded-xl shadow p-8 flex flex-col">

          <h1 className="text-4xl font-bold mb-8 text-gray-900">
            Comparação de Ações
          </h1>

          {/* INPUT CONTAINER */}
          <div className="space-y-4 mb-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                label="Ativo 1"
                value={t1}
                onChange={(e) => setT1(e.target.value)}
                placeholder="Ex: AAPL"
                onEnter={fetchChart}
              />

              <Input 
                label="Ativo 2 (opcional)"
                value={t2}
                onChange={(e) => setT2(e.target.value)}
                placeholder="Ex: MSFT"
                onEnter={fetchChart}
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
          
          
          <h2 className="text-2xl font-bold mb-4 text-black">Discussões</h2>

          <div className="flex-1 overflow-y-auto space-y-4">

            {/* Exemplo de post */}
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

          {/* Caixa de nova publicação */}
          <div className="mt-6 border-black text-gray-700">
            <textarea
              className="border-black border-0.5 w-full p-3 border rounded-lg bg-gray-50 resize-none"
              rows="3"
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
