import { useState } from "react";
import "./App.css";
import Header from "../components/header";
import Search from "../components/searchbar";
import TransactionForm from "../components/form";
import TransactionTable from "../components/topTable";

function App() {
  const items = [
    {
      date: "2024-12-01",
      description: "Opera",
      category: "Entertainment",
      Amount: "$20",
    },

    {
      date: "2024-19-01",
      description: "Live concert",
      category: "Entertainment",
      Amount: "$50",
    },

    {
      date: "2024-21-02",
      description: "Gym membership",
      category: "Gym",
      Amount: "$50",
    },

    {
      date: "2024-24-02",
      description: "Netflix membership",
      category: "Entertainment",
      Amount: "$14",
    },

    {
      date: "2024-28-02",
      description: "Clothes",
      category: "Clothing",
      Amount: "$10",
    },
    {
      date: "2024-10-03",
      description: "Horse Race",
      category: "Entertainment",
      Amount: "$120",
    },
    {
      date: "2024-09-04",
      description: "KFC",
      category: "Food",
      Amount: "$10",
    },
    {
      date: "2024-08-05",
      description: "Toiletries",
      category: "Shopping",
      Amount: "$20",
    },
    {
      date: "2024-12-05",
      description: "Surgery",
      category: "Health",
      Amount: "$300",
    },
  ];
  const [transactions, setTransactions] = useState(items);
  return (
    <div >
      <Header />
      <Search
        transactions={transactions}
        setTransactions={setTransactions}
        items={items}
      />
      <TransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
