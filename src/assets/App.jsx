import { useState } from "react";
import "./App.css";
import Header from "../components/header";
import Search from "../components/searchbar";
import TransactionForm from "../components/form";
import TransactionTable from "../components/topTable";

function App() {
  const items = [
    {
      date: "2024-01-11",
      description: "Opera",
      category: "Entertainment",
      Amount: "$20",
    },

    {
      date: "2024-01-19",
      description: "Live concert",
      category: "Entertainment",
      Amount: "$50",
    },

    {
      date: "2024-02-21",
      description: "Gym membership",
      category: "Gym",
      Amount: "$50",
    },

    {
      date: "2024-02-24",
      description: "Netflix membership",
      category: "Entertainment",
      Amount: "$14",
    },

    {
      date: "2024-02-28",
      description: "Clothes",
      category: "Clothing",
      Amount: "$10",
    },
    {
      date: "2024-03-10",
      description: "Horse Race",
      category: "Entertainment",
      Amount: "$120",
    },
    {
      date: "2024-04-9",
      description: "KFC",
      category: "Food",
      Amount: "$10",
    },
    {
      date: "2024-05-8",
      description: "Toiletries",
      category: "Shopping",
      Amount: "$20",
    },
    {
      date: "2024-05-12",
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
