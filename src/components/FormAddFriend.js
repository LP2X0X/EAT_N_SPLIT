import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/48");

  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault(); // Needed this so it does not reload the page

    if (!name || !avatar) return; // Crucial since we handle submit, user might slip and press enter prematurely

    const newFriend = {
      id,
      name,
      avatar: `${avatar}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌆 Image URL</label>
      <input
        type="text"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
