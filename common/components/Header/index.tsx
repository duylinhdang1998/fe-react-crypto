import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="app-header">
      <div className="md:py-3 text-black lg:py-4 px-3 lg:px-[30px] right-0 left-0 z-100 flex items-center lg:justify-between">
        <Image src="/images/jotaro.png" width={70} height={70} alt="logo" />
        <div className="flex items-center justify-center gap-3">
          <Web3NetworkSwitch />
          <Web3Button icon="show" label="Connect Wallet" />
        </div>
      </div>
    </div>
  );
};

export default Header;
