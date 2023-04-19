import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ShowPost from "./ShowPost";

const ProfilePost = ({ user }) => {
  const [myPosts, setMyPosts] = useState([]);
  const allPosts = useSelector((state) => state.home.allPosts);
  console.log(allPosts);
  useEffect(() => {
    allPosts[0].forEach((el) => {
      if (el.username === user) {
        setMyPosts([...myPosts, el]);
      }
    });
  }, []);

  console.log(myPosts);

  return (
    <div>
      {myPosts.length > 0 &&
        myPosts.map((el, i) => <ShowPost key={el._id + i} post={el} />)}
    </div>
  );
};

export default ProfilePost;