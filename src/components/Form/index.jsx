import { useState } from "react";
import { toast } from "react-toastify";
import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState("");
  const [id, setId] = useState(0);

  function inserirTransacao(event) {
    event.preventDefault();
    if (descricao === "" || valor === 0 || tipo === "opções") {
      toast.error("Formulário incompleto");
    } else {
      let transacao = {
        descricao: descricao,
        tipo: tipo,
        id: id,
      };
      if (tipo === "Entrada") {
        transacao["valor"] = valor;
      } else {
        transacao["valor"] = valor * -1;
      }

      setListTransactions([...listTransactions, transacao]);
      setId(id + 1);
      setDescricao("");
      setValor(0);
      toast.success("Transação adicionada com sucesso");
    }
  }

  return (
    <div>
      <form>
        <label className="text-label">
          Descrição
          <input
            className="input-descricao"
            type="text"
            name="descriçao"
            placeholder="Digite aqui sua descrição"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
          />
        </label>
        <h6>Ex. Compra de roupas</h6>
        <div className="div-principal">
          <label className="label-valor">
            Valor
            <input
              className="input-valor"
              type="number"
              name="valor"
              value={valor}
              placeholder="RS"
              onChange={(event) => setValor(event.target.value)}
            />
          </label>
          <label className="label-select">Tipo de valor</label>

          <select
            className="input-select"
            onChange={(event) => setTipo(event.target.value)}
          >
            <option>opções</option>
            <option value="Entrada" name="entrada">
              Entrada
            </option>
            <option value="Saida" name="saida">
              Saida
            </option>
          </select>
        </div>
        <button
          className="button-inserir-valor"
          onClick={(event) => {
            inserirTransacao(event);
          }}
        >
          Inserir valor
        </button>
      </form>
    </div>
  );
};

export default Form;
