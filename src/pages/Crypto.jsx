import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import ChartFrame from "../components/ChartFrame";

export default function Crypto() {
  const [symbol, setSymbol] = useState("");
  const [chart, setChart] = useState("");

  async function fetchChart() {
    const res = await fetch(`http://localhost:8000/crypto/${symbol}`); // lembrar de mudar pra porta que minha API python estiver rodando
    const blob = await res.blob();
    setChart(URL.createObjectURL(blob));
  }

  return (
    <MainLayout>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex items-center">
        <h1 className="text-2xl font-semibold mb-6">Gráfico de Criptomoedas</h1>

        <div className="flex gap-3 mb-6">
          <Input
            label="Símbolo"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            placeholder="Ex: BTC"
          />

          <button
            onClick={fetchChart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-sm"
          >
            Gerar
          </button>
        </div>

        <ChartFrame src={chart} alt="Gráfico da Cripto" />
      </div>
    </MainLayout>
  );
}
