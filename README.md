# 🧾 Eat N Split — React Practice Project

This is a small React project built for learning and practicing state management, component communication, and forms in React. It simulates a simple bill-splitting app among friends.

---

## 🚀 Features

- Add a friend with a name and avatar.
- Select a friend to split a bill with.
- Dynamically update each friend's balance based on bill split.
- Controlled form components.
- Clean component structure and separation of concerns.
- Toggle forms for adding friends and splitting bills.

---

## 🧠 Concepts Practiced

- `useState` for managing component state
- Passing data and event handlers between parent and child components
- Controlled form inputs
- Lifting state up
- Conditional rendering
- Reusable components
- Simple `id` generation using `crypto.randomUUID()`

---

## 🗂️ Project Structure
```
src/
│
├── components/
│   ├── Button.js           # Reusable button component
│   ├── FriendList.js       # Friend list UI and logic
│   ├── FormAddFriend.js    # Form to add new friends
│   └── FormSplitBill.js    # Form to split bills with a selected friend
│
└── App.js                  # Main component with all state logic
```
---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/eat-n-split.git
cd eat-n-split
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm start
```

Open http://localhost:3000 in your browser to see the app.

⸻

📸 Preview

<img width="2381" height="1276" alt="image" src="https://github.com/user-attachments/assets/14b1ab6d-964e-447f-b4a2-495f8d0b8486" />

⸻

📚 Future Improvements (Optional Ideas)
	•	Add animations for form transitions
	•	Add error messages for invalid input
	•	Create a dark mode toggle
	•	Integrate with a backend or Firebase

⸻

🙋‍♂️ Author

Long Pham
Feel free to reach out or fork the project for your own practice.

⸻

🧼 License

This project is licensed for personal or educational use.
