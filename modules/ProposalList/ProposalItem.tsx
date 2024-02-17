import { Badge, Button, Col, Divider, Progress, Row, Typography } from "antd";
import { ArrowCircleRight2, Dislike, Like1, Slash } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";

const ProposalItem = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="rounded-2xl bg-[#FFFFFF] shadow-[0px_4px_12px_rgba(0,0,0,0.16)] w-full min-h-[100px] py-4 px-6">
      <div className="flex items-center justify-between">
        <Link href="/proposal/123132">
          <div className="text-xl font-semibold cursor-pointer">Buy Azuki #5412 on Opensea at 6.3 ETH</div>
        </Link>
        <div>
          <span className="mr-4">
            <span className="mr-2">Proposal Starts In:</span>
            <span className="font-semibold">08 : 08 : 10 : 11</span>
          </span>
          <span className="px-2 py-1 bg-[#ECF8F2] rounded-[100px]">
            <Badge status="success" text={<span className="text-xs text-green-500">Proposal Live</span>} />
          </span>
        </div>
      </div>
      <Divider className="my-3" />
      <div>
        <Row gutter={[40, 20]}>
          <Col span={!showMore ? 10 : 24}>
            <Typography.Paragraph ellipsis={!showMore ? { rows: 3, expandable: false } : false}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, et doloribus omnis consectetur accusamus nobis nam cum ut
              mollitia tempore quibusdam, magni rem at consequatur quisquam distinctio. Dicta, suscipit vel. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Odit, distinctio.
            </Typography.Paragraph>
          </Col>
          {showMore ? (
            <Col span={10}>
              <div>
                <Row gutter={[40, 14]}>
                  <Col span={8}>
                    <div className="text-[#707070]">Voting power:</div>
                    <div className="text-[#282828]">1 vote = 1 SF</div>
                  </Col>
                  <Col span={8}>
                    <div className="text-[#707070]">Start date:</div>
                    <div className="text-[#282828]">2023.10.08</div>
                  </Col>
                  <Col span={8}>
                    <div className="text-[#707070]">End date:</div>
                    <div className="text-[#282828]">2023.10.08</div>
                  </Col>
                  <Col span={24}>
                    <div className="flex items-center">
                      <span className="text-[#707070] mr-1">Your SF:</span>
                      <span className="text-[#282828]">100 SF</span>
                      <ArrowCircleRight2 color="#282828" size={20} className="mx-3" />
                      <span className="text-[#707070] mr-1">Your voting power:</span>
                      <span className="text-[#282828]">100 votes</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          ) : null}
          <Col span={14}>
            <Row gutter={[24, 24]}>
              <Col span={8}>
                <div className="flex items-center">
                  <Like1 color="#3E74FF" size={24} />
                  <span className="text-[#707070] ml-1">614 agree</span>
                </div>
                <Progress showInfo={false} percent={70} status="normal" strokeColor="#3E74FF" size="small" className="mb-0" />
                {showMore ? (
                  <Button block type="primary" className="bg-[#3E74FF] hover:!bg-[#5886f8] mt-1">
                    Agree
                  </Button>
                ) : null}
              </Col>
              <Col span={8}>
                <div className="flex items-center">
                  <Dislike color="#EB5757" size={24} />
                  <span className="text-[#707070] ml-1">614 disagree</span>
                </div>
                <Progress showInfo={false} percent={70} status="exception" size="small" className="mb-0" />
                {showMore ? (
                  <Button block type="primary" danger className="mt-1">
                    Disagree
                  </Button>
                ) : null}
              </Col>
              <Col span={8}>
                <div className="flex items-center">
                  <Slash color="#707070" size={24} />
                  <span className="text-[#707070] ml-1">120 abstain</span>
                </div>
                <Progress showInfo={false} percent={70} status="normal" strokeColor="#707070" size="small" className="mb-0" />
                {showMore ? (
                  <Button block type="primary" className="bg-[#707070] hover:!bg-[#878787] mt-1">
                    Abstain
                  </Button>
                ) : null}
              </Col>
            </Row>
          </Col>
          {showMore ? (
            <>
              <Col span={24}>
                <Divider className="my-4 mt-2" />
                <Row>
                  <Col span={9}>
                    <div className="text-[#707070]">Recipient address</div>
                    <div className="text-[#282828]">0x1F43fe8b1bBc245E6C476B2820f6532931E5A2eb</div>
                  </Col>
                  <Col span={3}>
                    <div className="text-[#707070]">Amount</div>
                    <div className="text-[#282828]">1,000 ETH</div>
                  </Col>
                </Row>
              </Col>
            </>
          ) : null}
        </Row>
      </div>
      <div className="mt-3">
        <Button type="primary" onClick={() => setShowMore((pre) => !pre)}>
          {showMore ? "See less" : "View details"}
        </Button>
      </div>
    </div>
  );
};

export default ProposalItem;
