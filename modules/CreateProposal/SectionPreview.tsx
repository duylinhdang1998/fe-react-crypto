import React, { memo } from "react";
import Image from "next/image";
import { Button, Col, Divider, FormInstance, Row } from "antd";

const SectionPreview = ({ setOpen, open, form }: { setOpen: (open: boolean, tab: string) => void; open: any; form: FormInstance }) => {
  const handleBack = () => {
    setOpen(true, "tab3");
    setOpen(false, "tab4");
  };

  return (
    <div id="create-proposal-preview" className="rounded-2xl bg-[#FFFFFF] shadow-[0px_4px_12px_rgba(0,0,0,0.16)] w-full py-6 px-5 mb-4">
      <div className="flex justify-between">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-[35px] w-[35px] rounded bg-[#E0F6FF] flex items-center justify-center font-semibold text-base">
            04
          </div>
          <div className="ml-3 max-w-[70%]">
            <div className="text-base font-semibold ">Review proposal</div>
            <div className="text-sm text-gray-700 dark:text-gray-dark">
              Please check your proposal thoroughly before you submit it. The proposal cannot be editted once being submitted.
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-12 h-12">
          <Image src="/svg/step4.svg" width={48} height={48} alt="" />
        </div>
      </div>
      {open?.tab4 ? (
        <>
          <Divider />
          <div>
            <div className="mb-3 text-xl font-semibold">Buy Azuki #5412 on Opensea at 6.3 ETH</div>
            <div className="mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, et doloribus omnis consectetur accusamus nobis nam cum ut
              mollitia tempore quibusdam, magni rem at consequatur quisquam distinctio. Dicta, suscipit vel. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Odit, distinctio.
            </div>
            <Row gutter={[40, 14]}>
              <Col span={5}>
                <div className="text-[#707070]">Voting power:</div>
                <div className="text-[#282828]">1 vote = 1 SF</div>
              </Col>
              <Col span={5}>
                <div className="text-[#707070]">Start date:</div>
                <div className="text-[#282828]">2023.10.08</div>
              </Col>
              <Col span={5}>
                <div className="text-[#707070]">End date:</div>
                <div className="text-[#282828]">2023.10.08</div>
              </Col>
            </Row>
            <Divider />
            <div>
              <div className="mb-3 text-[#0979A6] text-base font-semibold">#Action 1</div>
              <Row gutter={[12, 12]}>
                <Col span={24}>
                  <div className="text-[#707070]">Recipient address</div>
                  <div className="text-[#282828]">0x1F43fe8b1bBc245E6C476B2820f6532931E5A2eb</div>
                </Col>
                <Col span={24}>
                  <div className="text-[#707070]">Amount</div>
                  <div className="text-[#282828]">1,000 ETH</div>
                </Col>
              </Row>
            </div>
          </div>
          <Divider />
          <div className="flex items-center gap-2">
            <Button type="default" size="large" onClick={handleBack}>
              Back
            </Button>
            <Button type="primary" size="large">
              Create
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default memo(SectionPreview);
