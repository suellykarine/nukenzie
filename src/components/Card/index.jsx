import "./style.css";

const Card = ({ transaction, setListTransactions, listTransactions }) => {
  const remover = (id) => {
    setListTransactions(listTransactions.filter((item) => item.id !== id));
  };

  return (
    <div
      className={
        transaction.tipo === "Entrada"
          ? "div-card-principal-entrada"
          : "div-card-principal-saida"
      }
    >
      <span className="span-card-descriçao"> {transaction.descricao} </span>
      <span className="span-valor"> R$ {transaction.valor}</span>
      <p className="p-tipo"> {transaction.tipo}</p>
      <div className="div-lixeira">
        <img
          className="lixeira"
          src="trash.png"
          alt="lixo"
          onClick={() => remover(transaction.id)}
        />
      </div>
    </div>
  );
};

export default Card;
