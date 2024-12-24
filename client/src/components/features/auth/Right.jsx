import { useState } from "react";
import {
  azureDevops,
  bitBucket,
  blackLogo,
  github,
  gitlab,
  sso,
} from "../../../assets";
import { GITHUB_CLIENT_ID } from "../../../config/config";
import errorToast from "../../shared/toasters/error-toast";

const Right = () => {
  const [currentTab, setCurrentTab] = useState("saas");
  function loginWithGithub() {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + GITHUB_CLIENT_ID
    );
  }
  return (
    <div className="p-8 max-sm:p-4 w-full flex items-center h-full justify-center flex-col gap-4">
      <div className="bg-white fade-up rounded-lg border-[1px] border-gray-200 flex flex-col w-full h-[65vh]">
        <div className="p-4 w-full flex flex-col gap-6">
          <div className="flex gap-4 items-center justify-center">
            <img src={blackLogo} alt="logo" />
            <p className="text-2xl text-gray-600">CodeAnt AI</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-center text-2xl medium-poppins">
              Welcome to CodeAnt AI
            </p>
            <div className="w-full bg-[#fafafa] flex rounded-lg border">
              <p
                className={`w-1/2 py-2.5 text-center items-center cursor-pointer font-semibold shrink-effect ${
                  currentTab === "saas"
                    ? "bg-blue-600 rounded-lg text-white "
                    : "text-gray-600"
                }`}
                onClick={() => setCurrentTab("saas")}
              >
                SAAS
              </p>
              <p
                className={`w-1/2 py-2.5 text-center items-center cursor-pointer font-semibold shrink-effect ${
                  currentTab === "self-hosted"
                    ? "bg-blue-600 rounded-lg text-white "
                    : "text-gray-600"
                }`}
                onClick={() => setCurrentTab("self-hosted")}
              >
                Self Hosted
              </p>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-gray-200" />
        {currentTab === "saas" ? (
          <div className="p-4 w-full flex flex-col gap-4 justify-evenly items-center">
            <div
              onClick={loginWithGithub}
              className="flex gap-2 items-center py-2.5 border rounded-lg w-[80%] max-sm:w-full justify-center cursor-pointer shrink-effect"
            >
              <img src={github} alt="github" />
              <p className="font-semibold">Sign in with Github</p>
            </div>

            <div
              onClick={() => {
                errorToast("Try Signing in with Github!");
              }}
              className="flex gap-2 items-center py-2.5 border rounded-lg w-[80%] max-sm:w-full justify-center cursor-pointer shrink-effect"
            >
              <img src={bitBucket} alt="bit" />
              <p className="font-semibold">Sign in with Bitbucket</p>
            </div>

            <div
              onClick={() => {
                errorToast("Try Signing in with Github!");
              }}
              className="flex gap-2 items-center py-2.5 border rounded-lg w-[80%] max-sm:w-full justify-center cursor-pointer shrink-effect"
            >
              <img src={azureDevops} alt="azure" />
              <p className="font-semibold">Sign in with Azure Devops</p>
            </div>

            <div
              onClick={() => {
                errorToast("Try Signing in with Github!");
              }}
              className="flex gap-2 items-center py-2.5 border rounded-lg w-[80%] max-sm:w-full justify-center cursor-pointer shrink-effect"
            >
              <img src={gitlab} alt="gitlab" />
              <p className="font-semibold">Sign in with GitLab</p>
            </div>
          </div>
        ) : (
          <div className="p-4 w-full flex flex-col gap-4 justify-evenly items-center">
            <div
              onClick={() => {
                errorToast("Try Signing in with Github!");
              }}
              className="flex gap-2 items-center py-2.5 border rounded-lg w-[80%] max-sm:w-full justify-center cursor-pointer shrink-effect"
            >
              <img src={gitlab} alt="gitlab" />
              <p className="font-semibold">Self Hosted GitLab</p>
            </div>

            <div
              onClick={() => {
                errorToast("Try Signing in with Github!");
              }}
              className="flex gap-2 items-center py-2.5 border rounded-lg w-[80%] max-sm:w-full justify-center cursor-pointer shrink-effect"
            >
              <img src={sso} alt="sso" />
              <p className="font-semibold">Sign in with SSO</p>
            </div>
          </div>
        )}
      </div>
      <p className="text-gray-600 text-sm font-semibold">
        By Signing up you agree to the{" "}
        <span className="font-bold">Privacy Policy</span>
      </p>
    </div>
  );
};

export default Right;
