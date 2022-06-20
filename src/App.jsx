import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form/index";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import Inicio from "./pages/inicio";

function App() {
  const [listTransactionsFiltrada, setListTransactionsFiltrada] = useState([]);
  const [listTransactions, setListTransactions] = useState([]);
  const [paginaInicial, setPaginaInicial] = useState(true);

  useEffect(() => {
    setListTransactionsFiltrada(listTransactions);
  }, [listTransactions]);

  function filtrar(filtro) {
    let novaListaTransacoes = [];

    if (filtro === "E") {
      novaListaTransacoes = listTransactions.filter(
        (valorAtual) => valorAtual.tipo === "Entrada"
      );
    } else if (filtro === "S") {
      novaListaTransacoes = listTransactions.filter(
        (valorAtual) => valorAtual.tipo === "Saida"
      );
    } else if (filtro === "T") {
      novaListaTransacoes = listTransactions;
    }

    setListTransactionsFiltrada(novaListaTransacoes);
  }

  return (
    <div>
      {paginaInicial ? (
        <Inicio setPaginaInicial={setPaginaInicial} />
      ) : (
        <div className="containerCadastro">
          <div className="div-header">
            <img src="./NuKenzie.png" alt="" />
            <button
              className="btn-pagina-inicial"
              onClick={() => setPaginaInicial(true)}
            >
              Início
            </button>
          </div>

          <div>
            <aside>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </aside>
          </div>
          <div className="div-img">
            {listTransactions.length === 0 ? (
              <div className="divSemDados">
                <img className="img-inicio" src="textoImg.png" alt="sss" />
                <img className="img-inicio2 " src="NoCard.png" alt="ddd" />
              </div>
            ) : (
              <div className="divComDados">
                <div className="divBotoesTransacao">
                  <p>Resumo financeiro</p>
                  <button
                    className="botao-todos"
                    onClick={() => {
                      filtrar("T");
                    }}
                  >
                    Todos
                  </button>
                  <button
                    className="botao-entrada"
                    onClick={() => {
                      console.log("entrada");
                      filtrar("E");
                    }}
                  >
                    Entradas
                  </button>
                  <button
                    className="botao-saida"
                    onClick={() => {
                      filtrar("S");
                    }}
                  >
                    Despesas
                  </button>
                </div>

                <List
                  listTransactions={listTransactionsFiltrada}
                  setListTransactions={setListTransactions}
                />
              </div>
            )}
          </div>
          <footer>
            <div>
              <TotalMoney listTransactions={listTransactions} />
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
