import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/features/dashboard/Sidebar";
import Repositories from "./Repositories";
import UserProfile from "./UserProfile";
import Navbar from "../components/features/dashboard/Navbar";
import UnderDevelopment from "../components/features/dashboard/UnderDevelopment";

const Dashboard = () => {
  return (
    <div className="w-full h-screen flex max-md:flex-col">
      <div className="w-[300px] max-md:hidden bg-white">
        <Sidebar />
      </div>
      <div className="hidden max-md:flex max-md:h-[10vh] w-full bg-white">
        <Navbar />
      </div>
      <div className="w-full h-full max-md:h-[90vh] bg-[#FAFAFA]">
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/code-review" element={<UnderDevelopment />} />
          <Route path="/cloud-security" element={<UnderDevelopment />} />
          <Route path="/how-to-use" element={<UnderDevelopment />} />
          <Route path="/settings" element={<UnderDevelopment />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
