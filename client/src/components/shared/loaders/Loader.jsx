import { MagnifyingGlass } from "react-loader-spinner";

const Loader = ({ text }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white py-3 rounded-2xl max-w-sm w-[180px] relative flex flex-col items-center justify-center text-black">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#fafafa"
        color="black"
      />
      <p className="text-center font-semibold">{text || "Loading..."}</p>
    </div>
  </div>
);

export default Loader;
