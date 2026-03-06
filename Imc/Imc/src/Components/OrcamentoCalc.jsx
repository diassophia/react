import Button from "./Button"
import "./OrcamentoCalc.css"
import { useState } from "react"

const OrcamentoCalc = ({ onCalculate }) => {

    const [valorHora, setvalorHora] = useState("");
    const [estimativaProjeto, setEstimativaProjeto] = useState("");
    const [urgente, setUrgente] = useState(false);

    const clearForms = (e) => {
        e.preventDefault();

        setvalorHora("");
        setEstimativaProjeto("");
        setUrgente(false);
    };

    // 10. Validar dados, só números e virgula
    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleValorHoraChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setvalorHora(updatedValue)
    };

    const handleEstimativaChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setEstimativaProjeto(updatedValue)
    };

    return (
        <div id="calc-container">
            <h2>Calculadora de Orçamento</h2>
            <form id="orcamento-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="valorHora">Valor da Hora (R$): </label>
                        <input type="text"
                            name="valorHora"
                            id="valorHora"
                            placeholder="Ex: 50"
                            onChange={(e) => handleValorHoraChange(e)}
                            value={valorHora} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="estimativaProjeto">Horas estimadas: </label>
                        <input type="text"
                            name="estimativaProjeto"
                            id="estimativaProjeto"
                            placeholder="Ex: 40"
                            onChange={(e) => handleEstimativaChange(e)}
                            value={estimativaProjeto} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="urgente">
                            <input type="checkbox"
                                id="urgente"
                                checked={urgente}
                                onChange={() => setUrgente(!urgente)}
                            /> Urgência (+20%)
                        </label>
                    </div>
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" action={(e) => onCalculate(e, valorHora, estimativaProjeto, urgente)} />
                    <Button id="clear-btn" text="Limpar" action={clearForms} />
                </div>
            </form>
        </div>
    )
}

export default OrcamentoCalc