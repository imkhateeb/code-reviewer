import { useEffect, useState } from "react";
import Left from "../components/features/auth/Left";
import Right from "../components/features/auth/Right";
import { BACKEND_URL } from "../config/config";
import axios from "axios";
import errorToast from "../components/shared/toasters/error-toast";
import successToast from "../components/shared/toasters/success-toast";
import Loader from "../components/shared/loaders/Loader";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetGithubToken = async (code) => {
    const url = `${BACKEND_URL}/users/token?code=${code}`;
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      if (data?.success) {
        successToast("User logged in successfully!");
        localStorage.setItem("github_user_token", data?.data?.access_token);
        navigate("/dashboard");
      }
    } catch (error) {
      localStorage.removeItem("github_user_token");
      errorToast(error?.response?.data?.message || "Failed to get token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("github_user_token")) {
      navigate("/dashboard");
    }
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      handleGetGithubToken(code);
    }
  }, []);

  return (
    <div className="w-screen h-screen flex">
      {loading && <Loader />}
      <div className="w-1/2 h-full flex items-center justify-center bg-[#FFFFFF] max-md:hidden">
        <Left />
      </div>
      <div className="w-1/2 max-md:w-full h-full bg-[#FAFAFA]">
        <Right />
      </div>
    </div>
  );
};

export default Auth;
