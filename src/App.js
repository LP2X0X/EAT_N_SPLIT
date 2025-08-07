// Step 1: Build static app
// Step 2: Add states:
//  + Problem: Need to show FormAddFriend when click Add friend button
//             => Add showAddFriendForm state to handle it at parent (App)
//             => Use a function at parent to set
//
//  + Problem: Create new friend data
//             => Create 2 states to handle user input
//             => With these 2 states, make the 2 inputs in AddFriendForm controlled input
//
//  + Problem: Add functionality to FromAddFriend
//             => Must use a handle function at parent since it related to other component (FriendList)
//             => Add new friend to existing state object friends by using spread syntax
//
//  + Problem: Show FormSplitBill when click on button of Friend component
//             => Create SelectedFriend state which has several benefit
//                  + Can point out what Friend component select it
//                    => Switch selectedFriend to null when needed to hide FormSplitBill
//                  + Can also be passed to FormSplitBill
//                  + If is not null then show FormSplitBill
//                    => Switch selectedFriend to null when needed to hide FormSplitBill
//
//  + Problem: Change the button text from Select to Close on selectedFriend
//                    => Check if selectedFriend.id === friend.id, if it's true then the text is Select.
//
//  + Problem: Select another friend when selectedFriend already represent a friend
//
// Tip: Write structure in one file before move to seperate file for each component

import { useState } from "react";
import Button from "./components/Button";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

const dummyData = {
  id: 1,
  name: "GOD",
  avatar: "https://i.pravatar.cc/48",
  balance: 0,
};

export default function App() {
  const [friends, setFriends] = useState([dummyData]);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriendForm() {
    setShowAddFriendForm(!showAddFriendForm);
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => (friends = [...friends, newFriend]));
    setShowAddFriendForm(!showAddFriendForm);
  }

  function handleShowFormSplitBill(friend) {
    setSelectedFriend(friend);
    setShowAddFriendForm(false);
  }

  function handleSplitBill(expense) {
    // DON'T DO THIS - THIS IS MODIFY STATE DIRECTLY AT ITS FINEST
    // friends.map((friend) =>
    //   friend.id === selectedFriend.id
    //     ? { ...friend, balance: friend.balance + Number(expense) }
    //     : friend
    // );
    // setFriends(friends);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + Number(expense) }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <main className="app">
      <section className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onClick={handleShowFormSplitBill}
        />
        {showAddFriendForm && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriendForm}>
          {showAddFriendForm ? "Close" : "Add friend"}
        </Button>
      </section>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </main>
  );
}
