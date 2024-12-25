import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaretRight, User, XLogo } from "@phosphor-icons/react";
import CALoader from "../components/shared/loaders/CALoader";
import { useDispatch, useSelector } from "react-redux";
import getUserData from "../redux/reducers/getUserData";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userLoading } = useSelector((state) => state.user);

  console.log(user);
  useEffect(() => {
    if (!localStorage.getItem("github_user_token")) {
      navigate("/auth");
    } else {
      dispatch(getUserData());
    }
  }, [dispatch, navigate]);

  if (userLoading) {
    return (
      <div className="w-full h-[85vh] md:h-screen flex items-center justify-center">
        <CALoader />
      </div>
    );
  }

  return (
    <div className="w-full h-full p-8 max-sm:p-4 flex flex-col gap-4">
      <div className="flex gap-2 items-center text-sm">
        <span className="text-gray-400 medium-poppins">CodeAnt AI</span>
        <CaretRight size={15} weight="bold" />
        <span className="text-gray-400 medium-poppins">Dashboard</span>
        <CaretRight size={15} weight="bold" />
        <span className="text-gray-600 medium-poppins">@{user?.login}</span>
      </div>
      <div className="flex flex-col gap-4">
        <img
          src={user?.avatar_url}
          alt="avatar"
          className="w-[150px] h-[150px] rounded-full"
        />
        <div>
          <p className="text-xl bold-poppins">{user?.name}</p>
          <p className="text-gray-500 medium-poppins">{user?.login}</p>
        </div>
        <p className="w-1/2 max-lg:w-2/3 max-sm:w-[95%]">{user?.bio}</p>
        <Link
          to={user?.html_url}
          target="_blank"
          className="w-[250px] text-center border p-2.5 rounded-xl border-gray-500 text-gray-500 medium-poppins shrink-effect"
        >
          Edit profile
        </Link>
        {user?.public_repos > 0 ? (
          <Link
            to={"https://github.com/" + user?.login + "?tab=repositories"}
            target="_blank"
          >{`${user?.public_repos} Repositor${
            user?.public_repos > 1 ? "ies" : "y"
          }`}</Link>
        ) : (
          <div>No Repositories</div>
        )}
        <div className="flex gap-5 mb-5">
          <div className="flex items-center gap-1">
            {user?.followers}
            <span>Followers</span>
          </div>
          <div className="flex items-center gap-1">
            {user?.following}
            <span>Following</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {user?.blog && (
            <Link
              to={user?.blog}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <User size={20} weight="bold" />
              <p className="">Blogs</p>
            </Link>
          )}
          {user?.twitter_username && (
            <Link
              to={`https://twitter.com/${user?.twitter_username}`}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <XLogo size={20} weight="bold" />
              <p className="">@{user?.twitter_username}</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
