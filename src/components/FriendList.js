import Friend from "./Friend";

export default function FriendList({ friends, selectedFriend, onClick }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          key={friend.id}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
