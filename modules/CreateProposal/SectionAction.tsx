import React, { memo } from "react";
import Image from "next/image";
import { Button, Col, Divider, FormInstance, Row } from "antd";
import { Add, Shuffle } from "iconsax-react";

const SectionAction = ({ setOpen, open, form }: { setOpen: (open: boolean, tab: string) => void; open: any; form: FormInstance }) => {
  const handleContinue = () => {
    setOpen(false, "tab3");
    setOpen(true, "tab4");
  };

  const handleBack = () => {
    setOpen(true, "tab2");
    setOpen(false, "tab3");
  };

  return (
    <div id="create-proposal-action" className="rounded-2xl bg-[#FFFFFF] shadow-[0px_4px_12px_rgba(0,0,0,0.16)] w-full py-6 px-5 mb-4">
      <div className="flex justify-between">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-[35px] w-[35px] rounded bg-[#E0F6FF] flex items-center justify-center font-semibold text-base">
            03
          </div>
          <div className="ml-3">
            <div className="text-base font-semibold ">Add actions</div>
            <div className="text-sm text-gray-700 dark:text-gray-dark">
              Actions support you to automatically execute the ratified proposal.
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-12 h-12">
          <Image src="/svg/step3.svg" width={48} height={48} alt="" />
        </div>
      </div>
      {open?.tab3 ? (
        <>
          <Divider />
          <div>
            <Row gutter={[24, 24]}>
              <Col span={12}>
                <Button
                  type="primary"
                  size="large"
                  block
                  className="!bg-[#E0F6FF] hover:!bg-[#e7f7fe] text-[#282828] hover:!text-[#282828] !h-[44px]"
                >
                  <div className="flex items-center justify-center">
                    <Shuffle size="24" />
                    <span className="ml-2">Transfer token</span>
                  </div>
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  type="primary"
                  size="large"
                  block
                  className="!bg-[#E0F6FF] hover:!bg-[#e7f7fe] text-[#282828] hover:!text-[#282828] !h-[44px]"
                >
                  <div className="flex items-center justify-center">
                    <Add size="24" />
                    <span className="ml-2">Add custom action</span>
                  </div>
                </Button>
              </Col>
            </Row>
          </div>
          <Divider />
          <div className="flex items-center gap-2">
            <Button type="default" size="large" onClick={handleBack}>
              Back
            </Button>
            <Button type="primary" size="large" onClick={handleContinue}>
              Skip
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default memo(SectionAction);
