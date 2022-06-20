import Card from "../Card/index";
import "./style.css";

const List = ({ listTransactions, setListTransactions }) => {
  return (
    <div>
      <ul>
        {listTransactions.map((transaction, index) => {
          return (
            <li key={index}>
              <Card
                transaction={transaction}
                setListTransactions={setListTransactions}
                listTransactions={listTransactions}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
