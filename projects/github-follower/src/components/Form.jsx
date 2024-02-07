import { useState } from "react";
import axios from "axios";

import { getFollowersCtx } from "../context/FollowersContext";

const Form = () => {
  const [username, setUsername] = useState("");

  const followersCtx = getFollowersCtx();
  console.log(followersCtx);

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const getFollowers = async (pageNo) => {
    const followersList = await axios.get(`
    https://api.github.com/users/${username}/followers?page=${pageNo}`);
    return followersList.data;
  };

  let hasMoreData = true;
  let pageNo = 1;
  const onFormSubmit = async (e) => {
    e.preventDefault();
    let followersList = [];
    while (hasMoreData) {
      let list = await getFollowers(pageNo);
      followersList = followersList.concat(list);
      if (list.length < 30) {
        hasMoreData = false;
      }
      pageNo++;
    }

    followersCtx.setFollowersList(followersList);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        onChange={onUsernameChange}
        type="text"
        placeholder="Enter your name"
      />
      <input type="submit" value="Get Unfollowers" />
    </form>
  );
};

export default Form;
