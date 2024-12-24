import { blackLogo, logout, support } from "../../../assets";
import { CaretDown } from "@phosphor-icons/react";
import dashboardNavigations from "../../../utils/dashboardNavigations";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activePath, setActivePath] = useState(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);
  return (
    <div className="p-5 border-r h-full flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Link to={"/"} className="flex gap-2 items-center">
          <img src={blackLogo} alt="logo" />
          <p className="text-2xl">CodeAnt AI</p>
        </Link>

        <Link
          to={"/dashboard"}
          className="w-full flex gap-2 border-[1px] border-gray-300 rounded-lg p-2 justify-between items-center cursor-pointer"
        >
          <p className="text-lg">@imkhateeb</p>
          <CaretDown size={25} weight="bold" />
        </Link>
        <div className="flex flex-col gap-2">
          {dashboardNavigations.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              onClick={() => setActivePath(item.to)}
              onMouseEnter={() => setHovered(item.title)}
              onMouseLeave={() => setHovered(null)}
              className={`flex gap-2 items-center p-2.5 bold-poppins rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer ${
                activePath === item.to
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              {activePath === item.to || hovered === item.title ? (
                <img src={item.activeIcon} alt="icon" />
              ) : (
                <img src={item.Icon} alt="icon" />
              )}{" "}
              <p className="text-nowrap">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-1 items-center p-2.5 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img src={support} alt="support" />
          <p className="bold-poppins text-gray-600">Support</p>
        </div>
        <div
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
          className="flex gap-1 items-center p-2.5 hover:bg-gray-100 cursor-pointer rounded-lg"
        >
          <img src={logout} alt="logout" />
          <p className="bold-poppins text-gray-600">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
