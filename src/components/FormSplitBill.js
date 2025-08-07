import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState(""); // This makes the input box clear instead of 0
  const [userExpense, setUserExpense] = useState("");
  const [whoPay, setWhoPay] = useState("user");

  const friendExpense = bill ? Number(bill) - Number(userExpense) : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userExpense) return;

    onSplitBill(whoPay === "user" ? friendExpense : -Number(userExpense));
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend.name.toUpperCase()}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) =>
          setBill(Number(e.target.value) > 0 ? Number(e.target.value) : "")
        }
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) <= bill
              ? Number(e.target.value)
              : userExpense
          )
        }
      />

      <label>👬 {selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>🤑 Who is paying the bill</label>
      <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
        <option value="user">You</option>
        <option value={selectedFriend.name}> {selectedFriend.name} </option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
