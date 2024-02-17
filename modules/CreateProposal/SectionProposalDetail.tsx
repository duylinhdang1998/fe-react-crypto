import React, { memo } from "react";
import Image from "next/image";
import { Button, Col, DatePicker, Divider, Form, FormInstance, Input, Row } from "antd";
import dynamic from "next/dynamic";
import dayjs from "dayjs";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"];

const SectionProposalDetail = ({
  setOpen,
  open,
  form,
}: {
  setOpen: (open: boolean, tab: string) => void;
  open: any;
  form: FormInstance;
}) => {
  const handleContinue = () => {
    setOpen(false, "tab2");
    setOpen(true, "tab3");
  };

  const handleBack = () => {
    setOpen(true, "tab1");
    setOpen(false, "tab2");
  };

  return (
    <div id="create-proposal-detail" className="rounded-2xl bg-[#FFFFFF] shadow-[0px_4px_12px_rgba(0,0,0,0.16)] w-full py-6 px-5 mb-4">
      <div className="flex justify-between">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-[35px] w-[35px] rounded bg-[#E0F6FF] flex items-center justify-center font-semibold text-base">
            02
          </div>
          <div className="ml-3 max-w-[70%]">
            <div className="text-base font-semibold ">Proposal details</div>
            <div className="text-sm text-gray-700 dark:text-gray-dark">
              You should detail your project’s strategies and goals of using fund to convince your investors.
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-12 h-12">
          <Image src="/svg/step2.svg" width={48} height={48} alt="" />
        </div>
      </div>
      {open?.tab2 ? (
        <>
          <Divider />
          <div>
            <div className="text-[#EB5757] mb-4 text-base">(*) is required field.</div>
            <Form form={form} layout="vertical" colon={false}>
              <Form.Item
                name="proposal_name"
                label={<span className="text-base">Proposal name</span>}
                rules={[{ required: true, message: "Please input your proposal name" }]}
                required
              >
                <Input placeholder="e.g. Buy Azuki #5412 on Opensea at 6.3 ETH" size="large" />
              </Form.Item>
              <Form.Item name="proposal_description" label={<span className="text-base">Proposal description</span>}>
                <ReactQuill theme="snow" modules={modules} formats={formats} placeholder="Describe your proposal here" />
              </Form.Item>
              <Row gutter={[8, 8]}>
                <Col span={6}>
                  <Form.Item
                    name="voting_power"
                    label={<span className="text-base">Voting power</span>}
                    rules={[{ required: true, message: "Please input your voting power" }]}
                    required
                  >
                    <Input placeholder="0" size="large" suffix="votes" />
                  </Form.Item>
                </Col>
                <Col span={2}>
                  <div className="flex items-center justify-center h-full">
                    <div className="bg-[#F9F3E6] rounded-full p-2 text-[#DC9E00] text-2xl w-8 h-8 flex justify-center items-center">
                      <span className="mb-1">=</span>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <Form.Item label=" ">
                    <Input placeholder="0" size="large" suffix="SF" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="duration"
                label={<span className="text-base">Duration</span>}
                rules={[{ required: true, message: "Please input your duration" }]}
                required
              >
                <DatePicker.RangePicker allowClear size="large" style={{ width: "100%" }} disabledDate={(date) => date.isBefore(dayjs())} />
              </Form.Item>
            </Form>
          </div>
          <Divider />
          <div className="flex items-center gap-2">
            <Button type="default" size="large" onClick={handleBack}>
              Back
            </Button>
            <Button type="primary" size="large" onClick={handleContinue}>
              Continue
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default memo(SectionProposalDetail);
