import Button from "./Button";

export default function Friend({ friend, selectedFriend, onClick }) {
  /* We use optional chaining here since selectedFriend might be null */
  const isSelected = selectedFriend?.id === friend.id;

  function handleClick() {
    // In case the friend user select is the same
    if (isSelected) {
      onClick(null); // Set it as null to close the Form and change the button
    } else {
      // Else change the selected friend
      onClick(friend);
    }
  }

  return (
    <li>
      <img src={friend.avatar} alt="avatar" />
      <h3>{friend.name}</h3>
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      <Button onClick={handleClick}>{isSelected ? "Close" : "Select"}</Button>
    </li>
  );
}
