import { getFollowersCtx } from "../context/FollowersContext";

const FollowersList = () => {
  const followersCtx = getFollowersCtx();
  console.log(followersCtx.followersList);
  return (
    <>
      <ul>
        {followersCtx.followersList.map((follower) => {
          return (
            <li
              key={follower.login}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={follower.avatar_url}
                style={{
                  maxWidth: "80px",
                  borderRadius: "50%",
                  marginRight: "25px",
                }}
              />
              {follower.login}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FollowersList;
