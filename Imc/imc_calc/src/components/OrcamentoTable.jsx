import Button from './Button'
import "./OrcamentoTable.css"

const OrcamentoTable = ({ data, total, category, complexity, urgent, resetCalc }) => {
    return (
        <div id="result-container">
            <p id="total-value">Valor total: <span className={urgent ? 'high' : ''}>R$ {total}</span></p>
            <p id="project-category">Categoria: <span className={urgent ? 'high' : ''}>{category}</span></p>
            <p id="project-complexity">Complexidade: <span className={urgent ? 'high' : ''}>{complexity}</span></p>
            {urgent && <p id="urgency-note">*Orçamento aumentado em 20% por urgência</p>}

            <h3>Tabela de faixas:</h3>
            <div className="orcamento-table">
                <div className="table-header">
                    <h4>Min R$</h4>
                    <h4>Máx R$</h4>
                    <h4>Categoria</h4>
                </div>
                {data.map((item) => (
                    <div className="table-data" key={item.classification}>
                        <p>{item.min}</p>
                        <p>{item.max}</p>
                        <p>{item.classification}</p>
                    </div>
                ))}
            </div>
            <Button id="back-btn" text="voltar" action={resetCalc} />
        </div>
    )
}

export default OrcamentoTable