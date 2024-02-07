import { createContext, useState, useContext } from "react";

const FollowersContextComponent = createContext({});

const FollowersContext = (props) => {
  const [followersList, setFollowersList] = useState([]);
  return (
    <>
      <FollowersContextComponent.Provider
        value={{ followersList, setFollowersList }}
      >
        {props.children}
      </FollowersContextComponent.Provider>
    </>
  );
};

export const getFollowersCtx = () => {
  const ctx = useContext(FollowersContextComponent);
  return ctx;
};

export default FollowersContext;
