import { ArrowsClockwise, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import errorToast from "../components/shared/toasters/error-toast";
import SingleRepo from "../components/features/repositories/SingleRepo";
import { useDispatch, useSelector } from "react-redux";
import getUserRepositories from "../redux/reducers/getUserRepositories";

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const navigate = useNavigate();
  const userGithubData = JSON.parse(localStorage.getItem("github_user_data"));
  const dispatch = useDispatch();
  const { repositories, repoLoading } = useSelector((state) => state.repos);

  const handleSearchTerm = (value) => {
    if (value) {
      const filteredRepos = repositories.filter((repo) =>
        repo?.name.toLowerCase().includes(value.toLowerCase())
      );
      setRepos(filteredRepos);
    } else {
      setRepos(repositories);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("github_user_token") && userGithubData) {
      dispatch(getUserRepositories());
    } else {
      navigate("/auth");
    }
  }, []);

  useEffect(() => {
    if (repositories?.length > 0) {
      setRepos(repositories);
    }
  }, [repositories]);

  return (
    <div className="p-5 max-sm:p-0 h-full w-full">
      <div className="border-[2px] border-gray-200 w-full h-full rounded-2xl flex flex-col bg-white max-sm:border-0">
        {/* Header */}
        <div className="p-5 max-sm:p-2 flex flex-col gap-4 w-full medium-poppins border-b">
          {/* Main Header */}
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-2xl bold-poppins">Repositories</p>
              {repoLoading ? (
                <p className="w-[200px] h-6 bg-gray-200 rounded-lg animate-pulse" />
              ) : repos?.length > 0 ? (
                <p className="text-md text-gray-500">
                  {repos?.length} total repositories
                </p>
              ) : (
                <p className="text-md text-gray-500">No repositories</p>
              )}
            </div>
            <div className="flex gap-2">
              <button
                disabled={repoLoading}
                onClick={() => {
                  dispatch(getUserRepositories());
                }}
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
          {repoLoading ? (
            <div className="flex flex-col gap-4  p-5 max-sm:p-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div
                  key={item}
                  className="w-full h-[100px] bg-gray-200 rounded-lg animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div>
              {repos?.length > 0 ? (
                <div className="flex flex-col">
                  {repos?.map((repo) => (
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
