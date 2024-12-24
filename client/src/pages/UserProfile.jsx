import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config/config";
import axios from "axios";
import errorToast from "../components/shared/toasters/error-toast";
import { CaretRight, User, XLogo } from "@phosphor-icons/react";
import CALoader from "../components/shared/loaders/CALoader";

const UserProfile = () => {
  const navigate = useNavigate();
  const [userGithubData, setUserGithubData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(false);

  const getUsersGithubData = async () => {
    setLoadingUserData(true);
    const url = `${BACKEND_URL}/users`;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("github_user_token")}`,
      },
    };

    try {
      const { data } = await axios.get(url, config);
      if (data?.success) {
        localStorage.setItem("github_user_data", JSON.stringify(data?.data));
        setUserGithubData(data?.data);
      }
    } catch (error) {
      console.log(error);
      errorToast(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoadingUserData(false);
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("github_user_token")) {
      navigate("/auth");
    } else {
      getUsersGithubData();
    }
  }, []);

  if (loadingUserData) {
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
        <span className="text-gray-600 medium-poppins">
          @{userGithubData?.login}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <img
          src={userGithubData?.avatar_url}
          alt="avatar"
          className="w-[150px] h-[150px] rounded-full"
        />
        <div>
          <p className="text-xl bold-poppins">{userGithubData?.name}</p>
          <p className="text-gray-500 medium-poppins">
            {userGithubData?.login}
          </p>
        </div>
        <p className="w-1/2 max-lg:w-2/3 max-sm:w-[95%]">
          {userGithubData?.bio}
        </p>
        <Link
          to={userGithubData?.html_url}
          target="_blank"
          className="w-[250px] text-center border p-2.5 rounded-xl border-gray-500 text-gray-500 medium-poppins shrink-effect"
        >
          Edit profile
        </Link>
        {userGithubData?.public_repos > 0 ? (
          <Link
            to={
              "https://github.com/" +
              userGithubData?.login +
              "?tab=repositories"
            }
            target="_blank"
          >{`${userGithubData?.public_repos} Repositor${
            userGithubData?.public_repos > 1 ? "ies" : "y"
          }`}</Link>
        ) : (
          <div>No Repositories</div>
        )}
        <div className="flex gap-5 mb-5">
          <div className="flex items-center gap-1">
            {userGithubData?.followers}
            <span>Followers</span>
          </div>
          <div className="flex items-center gap-1">
            {userGithubData?.following}
            <span>Following</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {userGithubData?.blog && (
            <Link
              to={userGithubData?.blog}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <User size={20} weight="bold" />
              <p className="">Blogs</p>
            </Link>
          )}
          {userGithubData?.twitter_username && (
            <Link
              to={`https://twitter.com/${userGithubData?.twitter_username}`}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <XLogo size={20} weight="bold" />
              <p className="">@{userGithubData?.twitter_username}</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
