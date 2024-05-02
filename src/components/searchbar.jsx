export default function Search({ transactions, setTransactions, items }) {
    function handleChange(e) {
      const info = e.target.value;
      if (info.length > 0) {
        const filtered = transactions.filter((transaction) => {
          return transaction.description
            .toLowerCase()
            .includes(info.toLowerCase());
        });
        if (filtered.length > 0) {
          setTransactions([...filtered]);
        }
      } else {
        setTransactions([...items]);
      }
    }
  
    return (
      <div>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          placeholder="Search transaction"
        />
      </div>
    );
  }
  
  