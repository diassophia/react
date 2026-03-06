import OrcamentoCalc from "./Components/OrcamentoCalc";
import OrcamentoTable from "./Components/OrcamentoTable";
import data from ".data/ProjetoData";
import { useState } from "react";
import "./App.css";

function App() {
  const calculateBudget = (e, valorHora, estimativaProjeto, urgente = false) => {
    e.preventDefault();

    if (!estimativaProjeto || !valorHora) return;

    const valorHoraFloat = +valorHora.replace(",", ".");
    const estimativaProjetoFloat = +estimativaProjeto.replace(",", ".");

    let total = estimativaProjetoFloat * valorHoraFloat;
    if (urgente) total *= 1.2;
    const totalOrcamento = total.toFixed(1);

    setTotal(totalOrcamento);
    setUrgency(urgente);

    // find matching classification
    projetoData.forEach((item) => {
      if (totalOrcamento >= item.min && totalOrcamento <= item.max) {
        setCategory(item.classification);
        setInfoClass(item.infoClass);
      }
    });
  };

  // reset calculator
  const resetCalc = (e) => {
    e.preventDefault();
    setTotal("");
    setCategory("");
    setInfoClass("");
    setUrgency(false);
  };

  const [total, setTotal] = useState("");
  const [category, setCategory] = useState("");
  const [infoClass, setInfoClass] = useState("");
  const [urgency, setUrgency] = useState(false);

  return (
    <div className="container">
      {/* Na primeira parte ir até os parentes amarelo */}
      {!total ? (
        <OrcamentoCalc onCalculate={calculateBudget} />
      ) : (
        <OrcamentoTable
          data={projetoData}
          total={total}
          category={category}
          complexity={
            category === "Econômico"
              ? "Baixa"
              : category === "Profissional"
              ? "Média"
              : "Alta"
          }
          urgent={urgency}
          resetCalc={resetCalc}
        />
      )}
    </div>
  );
}

export default App;