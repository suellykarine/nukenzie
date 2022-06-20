import "./style.css";
const Inicio = ({ setPaginaInicial }) => {
  return (
    <div className="mobile">
      <div className="containerPaginaInicial">
        <div>
          <img id="divMobile" className="img1" src="1.png" alt="" />
        </div>
        <div className="div-img2">
          <img className="img2Mobile" src="2.png" alt="" />
        </div>
        <div>
          <img className=" img3mobile" src="3.png" alt="" />
        </div>
        <div>
          <img className="img4Mobile" src="4.png" alt="" />
        </div>
        <div className="div-botao">
          <button
            className="botao-pagina-principal"
            onClick={() => setPaginaInicial(false)}
          >
            Iniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
