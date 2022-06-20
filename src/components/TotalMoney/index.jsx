import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce(
    (acumulador, valorAtual) => acumulador + Number(valorAtual.valor),
    0
  );
  return (
    <div className="div-total">
      <span>Valor total: </span>
      <span className="span2">$ {total}</span>
      <h6>O valor se refere ao saldo</h6>
    </div>
  );
};
export default TotalMoney;
