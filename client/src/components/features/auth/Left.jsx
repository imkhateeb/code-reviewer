import { blackLogo, grayLogo, pieChart } from "../../../assets";
import { ArrowUp } from "@phosphor-icons/react";

const Left = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col rounded-3xl shadow-even z-10">
        <div className="flex gap-3 p-5 items-center">
          <img src={blackLogo} alt="Logo" />
          <p className="text-[18px] bold-poppins">
            AI to Detect & Autofix Bad Code
          </p>
        </div>
        <div className="w-full h-[0.5px] bg-gray-300" />
        <div className="flex p-5 justify-evenly gap-10">
          <div className="flex flex-col items-center justify-center">
            <p className="text-[18px] font-bold">30+</p>
            <p className="text-gray-600 font-semibold">Language Support</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-[18px] font-bold">10K+</p>
            <p className="text-gray-600 font-semibold">Developers</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-[18px] font-bold">100K+</p>
            <p className="text-gray-600 font-semibold">Hours Saved</p>
          </div>
        </div>
      </div>
      <div className="-mr-6 -mt-3 flex justify-between z-30">
        <div />
        <div className="flex flex-col gap-5 py-3 px-8 rounded-3xl shadow-even bg-white">
          <div className="flex gap-20">
            <div className="p-3 flex items-center justify-center rounded-full bg-[#9D90FA]/25">
              <img src={pieChart} alt="pie" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-blue-700">
                <ArrowUp size={16} weight="bold" />
                <p className="font-semibold">14%</p>
              </div>
              <p className="text-sm text-gray-600 font-semibold">This week</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Issues Fixed</p>
            <p className="text-[32px] bold-poppins">500K+</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0">
        <img src={grayLogo} />
      </div>
    </div>
  );
};

export default Left;
