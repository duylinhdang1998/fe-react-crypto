import { parseEther, smartTrim, formatNumber } from "@/common/utils";
import React, { memo } from "react";
import VoteTypeButton from "./VoteTypeButton";
import { ArrowDown2, ArrowUp2, ProfileCircle, Slash } from "iconsax-react";

export interface IVoterItem {
  _id: string;
  name: string;
  // weight: string;
  vote_type: number;
  percent_weight: string;
}

interface VoterItemProps {
  item: IVoterItem;
}

enum VoteTypeEnum {
  REJECT = 0,
  AGREE = 1,
  ABSTAIN = 2,
}

const VoteItem = ({ item }: VoterItemProps): JSX.Element => {
  const renderVoteButton = ({ vote_type: voteType }: IVoterItem): JSX.Element => {
    switch (voteType) {
      case VoteTypeEnum.REJECT:
        return <VoteTypeButton color="#FF464B" iconSrc={<ArrowDown2 size={16} variant="Bold" />} text="Reject" />;
      case VoteTypeEnum.AGREE:
        return <VoteTypeButton color="#3E74FF" iconSrc={<ArrowUp2 size={16} variant="Bold" />} text="Agree" />;
      case VoteTypeEnum.ABSTAIN:
        return <VoteTypeButton color="#6A7285" iconSrc={<Slash size={16} />} text="Abstain" />;
      default:
        return null;
    }
  };

  return (
    <>
      <tr className="border-b-0.5 dark:border-b-0.5 border-[#EAE8F1] first:border-t-0">
        <td className="flex items-center py-4">
          <ProfileCircle variant="Bulk" size={20} />
          <div className="ml-2 font-semibold">{smartTrim(item.name ?? "", 12)}</div>
        </td>

        <td className="">
          <span className="font-semibold">{item.percent_weight ? parseFloat(item.percent_weight) : 0}%</span>
        </td>

        {/* <td className="">
          <span className="font-semibold">{formatNumber(parseEther(item.weight.toString(), 0))}</span>
        </td> */}

        <td className="">{renderVoteButton(item)}</td>
      </tr>
    </>
  );
};

export default memo(VoteItem);
