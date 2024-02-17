import React, { memo } from "react";
import VoterItem, { IVoterItem } from "./VoterItem";

interface VoterListProps {
  voterList: IVoterItem[];
}

const VoterList = (props: VoterListProps): JSX.Element => {
  const { voterList = [] } = props;

  return (
    <div>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr>
              <th className="text-left text-base font-medium sm:w-[25%]">Address</th>
              <th className="text-left text-base font-medium sm:w-[25%]">Voting power</th>
              <th className="text-left text-base font-medium sm:w-[25%]">Decision</th>
              <th className="sm:w-[25%]"></th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {voterList.map((item) => (
              <VoterItem key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(VoterList);
