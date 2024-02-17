import { Pagination } from "antd";
import ProposalItem from "./ProposalItem";

const ProposalList = () => {
  return (
    <div className="mx-6">
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4].map((data, index) => {
          return <ProposalItem key={index} />;
        })}
      </div>
      <div className="flex items-center justify-center mt-6">
        <Pagination total={10} pageSize={2} current={1} />
      </div>
    </div>
  );
};

export default ProposalList;
