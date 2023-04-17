import { useDispatch } from "react-redux";
import { allProfilesThunk, profileThunk } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(profileThunk("Gabriele"));
  };

  const handleAll = () => {
    dispatch(allProfilesThunk());
  };

  return (
    <div>
      <button onClick={handleClick}>GET PROFILE</button>
      <button onClick={handleAll}>GET ALL</button>
    </div>
  );
};

export default Home;
