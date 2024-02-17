import React, { memo } from "react";
import Image from "next/image";
import { Button, Divider } from "antd";

const SectionCreateLaunchpad = ({ setOpen, open }: { setOpen: (open: boolean, tab: string) => void; open: any }) => {
  const handleContinue = () => {
    setOpen(false, "tab1");
    setOpen(true, "tab2");
  };

  return (
    <div id="create-proposal-launchpad" className="rounded-2xl bg-[#FFFFFF] shadow-[0px_4px_12px_rgba(0,0,0,0.16)] w-full py-6 px-5 mb-4">
      <div className="flex justify-between">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-[35px] w-[35px] rounded bg-[#E0F6FF] flex items-center justify-center font-semibold text-base">
            01
          </div>
          <div className="ml-3 max-w-[70%]">
            <div className="text-base font-semibold ">Create Launchpad</div>
            <div className="text-sm text-gray-700 dark:text-gray-dark">
              First, you have to create a launchpad to raise fund. Next, create proposals to clarify your project’s strategies and goals of
              using fund.
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-12 h-12">
          <Image src="/svg/step1.svg" width={48} height={48} alt="" />
        </div>
      </div>
      <Divider />
      <Button type="primary" size="large" onClick={handleContinue} disabled={!open?.tab1}>
        {open.tab1 ? "Create Launchpad" : "Launchpad Created"}
      </Button>
    </div>
  );
};

export default memo(SectionCreateLaunchpad);
