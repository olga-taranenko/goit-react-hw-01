import Profile from "./components/Profile/Profile";
import "./App.css";
import userData from "./data/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <h2 className="titleTask">Task 1</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2 className="titleTask">Task 2</h2>
      <FriendList friends={friends} />
      <h2 className="titleTask">Task 3</h2>
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
