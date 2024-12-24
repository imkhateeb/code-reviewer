import { Database } from "@phosphor-icons/react";
import formatRelativeTime from "../../../utils/formatRelativeTime";

const SingleRepo = ({ repo }) => {
  return (
    <div className="p-5 max-sm:p-2 border-b flex flex-col gap-2 hover:bg-[#fafafa] cursor-pointer transition-all duration-200 ease-in-out">
      <div className="flex gap-4 items-center">
        <p className="bold-poppins text-gray-600">{repo?.name}</p>
        <p className="py-0.5 px-2 bg-blue-50 text-blue-500 border border-blue-500 medium-poppins text-sm rounded-full">
          {repo?.visibility[0]?.toUpperCase() + repo?.visibility?.slice(1)}
        </p>
      </div>
      <div className="flex gap-10 max-sm:gap-8 text-sm medium-poppins max-sm:flex-col max-sm:gap-2">
        <div className="flex gap-1 items-center">
          <p>{repo?.language || "JavaScript"}</p>
          <span className="w-[8px] h-[8px] rounded-full bg-blue-600" />
        </div>
        <div className="flex gap-6">
          <div className="flex gap-1 items-center">
            <Database size={16} weight="bold" />
            <p>{repo?.size || 0} MB</p>
          </div>
          <p>{formatRelativeTime(repo?.updated_at)}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRepo;
