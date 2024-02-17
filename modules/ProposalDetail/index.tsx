import { Badge, Button, Col, Divider, Pagination, Progress, Row } from "antd";
import { ArrowLeft2, DiscountShape, Dislike, Flash, Like1, Profile2User, Slash, Timer1 } from "iconsax-react";
import CountDown from "./Countdown";
import VoterList from "./VoterList";

const ProposalDetail = () => {
  return (
    <div className="mx-6">
      <div className="flex justify-center items-center text-[#8F8C9C] mb-3">
        <ArrowLeft2 size={20} />
        <span className="text-base">All proposals</span>
      </div>
      <div className="text-4xl text-[#2B1C50] mb-6 text-center font-semibold">Buy Azuki #5412 on Opeasea at 6.3 ETH</div>
      <div className="mb-12 text-lg text-center">
        <span className="text-[#6C6684] font-medium">Proposed by</span> <span className="text-[#2B1C50] font-semibold">0x01...6DA7</span>
      </div>
      <div className="rounded-2xl bg-[#FFFFFF] shadow-[0px_4px_12px_rgba(0,0,0,0.16)] py-6 px-5 mb-5">
        <Row gutter={[110, 30]}>
          <Col span={14}>
            <div className="flex items-center justify-start mb-4">
              <span className="mr-5 text-lg font-semibold">Proposal details</span>
              <span className="px-3 py-1 bg-[#ECF8F2] rounded-[100px]">
                <Badge status="success" text={<span className="text-xs text-green-500">Proposal Live</span>} />
              </span>
            </div>
            <div className="font-medium">
              Azuki is a digital brand mostly associated with its collection of 10,000 avatars released by a Los Angeles-based group of
              artists on January 12, 2022. These avatars have unique characteristics based on anime-themed drawing, which has caught the
              attention of NFT enthusiasts around the world. Owning an Azuki grants the user access to exclusive NFT drops, streetwear
              collabs, live events, and more as they become members of The Garden.
            </div>
          </Col>
          <Col span={10}>
            <div className="sm:min-w-xs">
              <div className="mb-5">
                <span className="text-[#6C6684]">Ends in</span> <CountDown countDownDistance={1000000} />
              </div>
              <div className="break-all">
                <span className="flex items-center mb-2 text-sm text-gray-600">
                  <DiscountShape size={18} className="mr-1" />
                  <span>Min participation percentage</span>
                </span>
                <span className="text-lg font-bold">1%</span>
              </div>
              <div className="grid grid-cols-2 pt-8 gap-x-4 gap-y-6 sm:pt-4">
                <div className="break-all">
                  <span className="flex items-center mb-2 text-sm text-gray-600">
                    <Timer1 size={18} className="mr-1" />
                    <span>Created</span>
                  </span>
                  <span className="text-base font-medium">Feb 18, 2022</span>
                </div>
                <div className="break-all">
                  <span className="flex items-center mb-2 text-sm text-gray-600">
                    <Timer1 size={18} className="mr-1" />
                    <span>Closing in</span>
                  </span>
                  <span className="text-base font-medium">Feb 18, 2022</span>
                </div>
                <div className="break-all">
                  <span className="flex items-center mb-2 text-sm text-gray-600">
                    <Like1 size={18} className="mr-1" />
                    <span>Current votes</span>
                  </span>
                  <span className="text-base font-semibold">
                    <span>250</span>/<span className="text-[#625DF5]">500</span>
                  </span>
                </div>
                <div className="break-all">
                  <span className="flex items-center mb-2 text-sm text-gray-600">
                    <Flash size={18} className="mr-1" />
                    <span>Your voting power</span>
                  </span>
                  <span className="text-base font-medium">2%</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Divider />
        <Row gutter={[110, 30]}>
          <Col span={14}>
            <Row gutter={[24, 24]}>
              <Col span={8}>
                <div className="flex items-center">
                  <Like1 color="#3E74FF" size={24} />
                  <span className="text-[#707070] ml-1">614 agree</span>
                </div>
                <Progress showInfo={false} percent={70} status="normal" strokeColor="#3E74FF" size="small" className="mb-0" />
              </Col>
              <Col span={8}>
                <div className="flex items-center">
                  <Dislike color="#EB5757" size={24} />
                  <span className="text-[#707070] ml-1">614 disagree</span>
                </div>
                <Progress showInfo={false} percent={70} status="exception" size="small" className="mb-0" />
              </Col>
              <Col span={8}>
                <div className="flex items-center">
                  <Slash color="#707070" size={24} />
                  <span className="text-[#707070] ml-1">120 abstain</span>
                </div>
                <Progress showInfo={false} percent={70} status="normal" strokeColor="#707070" size="small" className="mb-0" />
              </Col>
            </Row>
          </Col>
          <Col span={10}>
            <Row gutter={[12, 12]}>
              <Col span={8}>
                <Button size="large" block type="primary" className="bg-[#3E74FF] hover:!bg-[#5886f8]">
                  Agree
                </Button>
              </Col>
              <Col span={8}>
                <Button size="large" block type="primary" danger>
                  Reject
                </Button>
              </Col>
              <Col span={8}>
                <Button size="large" block type="primary" className="bg-[#707070] hover:!bg-[#878787]">
                  Abstain
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="rounded-2xl bg-[#FFFFFF] shadow-[0px_4px_12px_rgba(0,0,0,0.16)] py-6 px-5">
        <div className="flex items-center mb-2 font-semibold sm:mb-0">
          <Profile2User className="mr-2" size={24} />
          <span className="text-base">20 Voters</span>
        </div>
        <VoterList
          voterList={[
            {
              _id: "123",
              name: "0x1f...aBCe",
              percent_weight: "0",
              vote_type: 0,
            },
            {
              _id: "123",
              name: "0x1f...aBCe",
              percent_weight: "0",
              vote_type: 1,
            },
            {
              _id: "123",
              name: "0x1f...aBCe",
              percent_weight: "0",
              vote_type: 2,
            },
          ]}
        />
        <div className="flex items-center justify-center mt-6">
          <Pagination total={10} pageSize={2} current={1} />
        </div>
      </div>
    </div>
  );
};

export default ProposalDetail;
