import LaunchpadItem from "@/modules/LaunchpadDetail/LaunchpadItem";
import ProposalItem from "@/modules/ProposalList/ProposalItem";
import { Divider } from "antd";
import { Book } from "iconsax-react";
import type { NextPage } from "next";
import { useAccount, useNetwork } from "wagmi";

const Main: NextPage = () => {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  console.log(address, isConnected, chain);

  return (
    <div style={{ minHeight: 400 }}>
      <div>
        <LaunchpadItem />
      </div>
      <Divider />
      <div className="mx-6">
        <div className="flex items-center mb-3">
          <Book size={40} />
          <span className="ml-2 text-3xl font-bold">Proposal List</span>
        </div>
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((data, index) => {
            return <ProposalItem key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
