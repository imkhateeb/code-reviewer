import { useEffect, useState } from "react";
import { blackLogo, logout, support } from "../../../assets";
import { CaretDown, List, X } from "@phosphor-icons/react";
import dashboardNavigations from "../../../utils/dashboardNavigations";
import { Link } from "react-router-dom";
import errorToast from "../../shared/toasters/error-toast";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [activePath, setActivePath] = useState(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);
  return (
    <div className="flex items-center justify-between w-full px-4 border-b border-gray-200 border-[1.5px]">
      <div className="w-full flex items-center justify-between">
        <Link to={"/"} className="flex gap-2 items-center">
          <img src={blackLogo} alt="logo" className="w-[35px] h-[35px]" />
          <p className="text-xl medium-poppins">CodeAnt AI</p>
        </Link>
        <div onClick={() => setToggleNavbar(true)} className="cursor-pointer">
          <List size={26} weight="bold" />
        </div>
      </div>

      {toggleNavbar && (
        <div className="fixed fade-up inset-0 bg-gray-800 bg-opacity-50 flex flex-col z-50">
          <div className="bg-white slight-up w-full h-2/3 flex flex-col p-4 gap-4">
            {/* Topbar */}
            <div className="w-full flex items-center justify-between">
              <Link
                onClick={() => setHovered(null)}
                to={"/"}
                className="flex gap-2 items-center"
              >
                <img src={blackLogo} alt="logo" className="w-[35px] h-[35px]" />
                <p className="text-xl medium-poppins">CodeAnt AI</p>
              </Link>
              <div
                onClick={() => setToggleNavbar(false)}
                className="cursor-pointer shrink-effect"
              >
                <X size={26} weight="bold" />
              </div>
            </div>

            {/* Navigations */}
            <Link
              onClick={() => {
                setHovered(null);
                setToggleNavbar(false);
              }}
              to={"/dashboard"}
              className="p-2.5 shrink-effect border-[2px] border-gray-200 rounded-lg flex justify-between items-center cursor-pointer text-gray-600"
            >
              <p className="medium-poppins">@imkhateeb</p>
              <CaretDown size={20} weight="bold" />
            </Link>
            <div className="flex flex-col gap-1.5 w-full">
              {dashboardNavigations.map((item, index) => (
                <Link
                  to={item.to}
                  key={index}
                  onClick={() => {
                    setActivePath(item.to), setToggleNavbar(false);
                  }}
                  onMouseEnter={() => setHovered(item.title)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex shrink-effect gap-2 items-center p-2.5 bold-poppins rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer ${
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
              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setToggleNavbar(false),
                      errorToast("Feature not available yet");
                  }}
                  className="flex gap-1 items-center p-2.5 hover:bg-gray-100 cursor-pointer rounded-lg"
                >
                  <img src={support} alt="support" />
                  <p className="bold-poppins text-gray-600">Support</p>
                </div>
                <div
                  onClick={() => {
                    setToggleNavbar(false);
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
