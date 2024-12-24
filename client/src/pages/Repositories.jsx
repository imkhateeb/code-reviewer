import { ArrowsClockwise, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config/config";
import axios from "axios";
import errorToast from "../components/shared/toasters/error-toast";
import successToast from "../components/shared/toasters/success-toast";
import SingleRepo from "../components/features/repositories/SingleRepo";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [totalRepos, setTotalRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(false);
  const navigate = useNavigate();
  const userGithubData = JSON.parse(localStorage.getItem("github_user_data"));

  const getRepositories = async () => {
    setLoadingRepos(true);
    const url = `${BACKEND_URL}/users/repository?userId=${userGithubData?.login}`;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("github_user_token")}`,
      },
    };

    try {
      const { data } = await axios.get(url, config);
      console.log(data);
      if (data?.success) {
        successToast(`${data?.data?.length} repositories fetched successfully`);
        setRepositories(data?.data);
        setTotalRepos(data?.data);
      }
    } catch (error) {
      console.log(error);
      errorToast(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoadingRepos(false);
    }
  };

  const handleSearchTerm = (value) => {
    if (value) {
      const filteredRepos = totalRepos.filter((repo) =>
        repo?.name.toLowerCase().includes(value.toLowerCase())
      );
      setRepositories(filteredRepos);
    } else {
      setRepositories(totalRepos);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("github_user_token") && userGithubData) {
      getRepositories();
    } else {
      navigate("/auth");
    }
  }, []);

  return (
    <div className="p-5 max-sm:p-0 h-full w-full">
      <div className="border-[2px] border-gray-200 w-full h-full rounded-2xl flex flex-col bg-white max-sm:border-0">
        {/* Header */}
        <div className="p-5 max-sm:p-2 flex flex-col gap-4 w-full medium-poppins border-b">
          {/* Main Header */}
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-2xl bold-poppins">Repositories</p>
              {loadingRepos ? (
                <p className="w-[200px] h-6 bg-gray-200 rounded-lg animate-pulse" />
              ) : repositories?.length > 0 ? (
                <p className="text-md text-gray-500">
                  {repositories?.length} total repositories
                </p>
              ) : (
                <p className="text-md text-gray-500">No repositories</p>
              )}
            </div>
            <div className="flex gap-2">
              <button
                disabled={loadingRepos}
                onClick={getRepositories}
                className="flex gap-2 items-center border-[2px] py-2.5 px-4 max-sm:p-3 max-sm:rounded-full rounded-lg cursor-pointer text-gray-500 shrink-effect"
              >
                <ArrowsClockwise size={20} weight="bold" />
                <p className="max-sm:hidden">Refresh All</p>
              </button>

              <div
                onClick={() => {
                  errorToast("This feature is not available yet");
                }}
                className="flex gap-2 items-center border-[2px] border-blue-600 py-2.5 px-4 max-sm:p-3 max-sm:rounded-full rounded-lg cursor-pointer bg-blue-600 text-white"
              >
                <Plus size={20} weight="bold" />
                <p className="max-sm:hidden">Add Repository</p>
              </div>
            </div>
          </div>
          {/* Search */}
          <div className="border-[2px] w-[300px] max-sm:w-full border-gray-200 rounded-lg flex gap-1 items-center px-2">
            <MagnifyingGlass
              size={20}
              weight="bold"
              className="text-gray-500"
            />
            <input
              type="text"
              placeholder="Search repositories"
              className="py-2 w-full rounded-lg outline-none focus:outline-none active:outline-none"
              onChange={(e) => handleSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Repository rows */}
        <div className="w-full h-full overflow-y-auto">
          {loadingRepos ? (
            <div className="flex flex-col gap-4  p-5 max-sm:p-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="w-full h-[100px] bg-gray-200 rounded-lg animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div>
              {repositories?.length > 0 ? (
                <div className="flex flex-col">
                  {repositories?.map((repo) => (
                    <SingleRepo key={repo?.id} repo={repo} />
                  ))}
                </div>
              ) : (
                <div className="w-full h-[60vh] flex items-center justify-center">
                  <p className="text-center text-lg medium-poppins text-gray-500">
                    No Repositories.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
