import "./App.css";
import FollowersList from "./components/FollowersList";
import Form from "./components/Form";
import FollowersContext from "./context/FollowersContext";

function App() {
  return (
    <>
      <FollowersContext>
        <>
          <h1>GitHub Unfollowers Checker</h1>
          <Form />
          <FollowersList />
        </>
      </FollowersContext>
    </>
  );
}

export default App;
