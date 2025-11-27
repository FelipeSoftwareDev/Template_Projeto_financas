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
      <h1 className="text-xl font-bold mb-4">Comparação de Ações</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <Input label="Ativo 1" value={t1} onChange={(e) => setT1(e.target.value)} />
        <Input label="Ativo 2 (opcional)" value={t2} onChange={(e) => setT2(e.target.value)} />

        <button
          onClick={fetchChart}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Gerar
        </button>
      </div>

      <ChartFrame src={chart} alt="Gráfico de ações" />
    </MainLayout>
  );
}
