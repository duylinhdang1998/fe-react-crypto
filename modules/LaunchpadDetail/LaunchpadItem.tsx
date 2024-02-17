import { Badge, Button, Col, Input, Progress, Row, message } from "antd";
import { Copy, Heart, Notification } from "iconsax-react";

import CopyToClipboard from "react-copy-to-clipboard";
import Image from "next/image";

const LaunchpadItem = () => {
  return (
    <div className="mx-5 launchpad-detail">
      <Row gutter={[32, 32]}>
        <Col span={16}>
          <div className="rounded-2xl bg-[#FFFFFF] shadow-[0px_4px_12px_rgba(0,0,0,0.16)] w-full min-h-[200px] py-6 px-5">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center justify-start gap-6">
                <div>
                  <Image src="/images/jotaro.png" width={78} height={78} alt="default-image" />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <div className="mb-3 text-3xl font-bold">Jotaro</div>
                  <div className="flex items-center justify-end gap-2">
                    <Image src="/images/discord.png" width={24} height={24} alt="discord" />
                    <Image src="/images/telegram.png" width={24} height={24} alt="telegram" />
                    <Image src="/images/web.png" width={24} height={24} alt="web" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-end justify-center">
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-[#8359F9] rounded-[100px] mr-2 text-white">PancakeSwap</span>
                    <span className="px-2 py-1 bg-[#ECF8F2] rounded-[100px]">
                      <Badge status="success" text={<span className="text-green-500">Sale Live</span>} />
                    </span>
                  </div>
                  <div>
                    <span className="p-2 bg-[#EFEFEF] rounded-full inline-flex justify-center items-center">
                      <Notification size={16} color="#707070" />
                    </span>
                    <span className="p-2 bg-[#E0F6FF] rounded-full inline-flex justify-center items-center">
                      <Heart size={16} color="#0979A6" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-base">
              <div className="flex justify-between items-start border-b border-solid border-[#D9D9D9] py-2">
                <div className="text-[#707070]">Project address:</div>
                <div className="inline-flex items-center">
                  <span className="mr-1">0x08fD3F0AA4B006dF68b4e2E4693306c34aAf142E</span>
                  <CopyToClipboard
                    text={"0x08fD3F0AA4B006dF68b4e2E4693306c34aAf142E"}
                    onCopy={() => message.success("0x08fD3F0AA4B006dF68b4e2E4693306c34aAf142E")}
                  >
                    <Copy className="cursor-pointer icon" size="20" />
                  </CopyToClipboard>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-solid border-[#D9D9D9] py-2">
                <div className="text-[#707070]">Token name:</div>
                <div className="inline-flex items-center">SF</div>
              </div>
              <div className="flex justify-between items-start border-b border-solid border-[#D9D9D9] py-2">
                <div className="text-[#707070]">Token symbol:</div>
                <div className="inline-flex items-center">SF</div>
              </div>
              <div className="flex justify-between items-start border-b border-solid border-[#D9D9D9] py-2">
                <div className="text-[#707070]">Token decimals:</div>
                <div className="inline-flex items-center">18</div>
              </div>
              <div className="flex justify-between items-start border-b border-solid border-[#D9D9D9] py-2">
                <div className="text-[#707070]">Token address:</div>
                <div>
                  <div className="inline-flex items-center">
                    <span className="mr-1">0x08fD3F0AA4B006dF68b4e2E4693306c34aAf142E</span>
                    <CopyToClipboard
                      text={"0x08fD3F0AA4B006dF68b4e2E4693306c34aAf142E"}
                      onCopy={() => message.success("0x08fD3F0AA4B006dF68b4e2E4693306c34aAf142E")}
                    >
                      <Copy className="cursor-pointer icon" size="20" />
                    </CopyToClipboard>
                  </div>
                  <div className="text-right text-[#EB5757] text-sm">Do not send BNB to the token address!</div>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-solid border-[#D9D9D9] py-2">
                <div className="text-[#707070]">Hard cap:</div>
                <div className="inline-flex items-center">100,000 ETH</div>
              </div>
              <div className="flex justify-between items-start border-b border-solid border-[#D9D9D9] py-2">
                <div className="text-[#707070]">Minimum deposit:</div>
                <div className="inline-flex items-center">10 ETH</div>
              </div>
              <div className="flex justify-between items-start border-b border-solid border-[#D9D9D9] py-2">
                <div className="text-[#707070]">Maximum deposit:</div>
                <div className="inline-flex items-center">100,000 ETH</div>
              </div>
              <div className="flex justify-between items-start border-b border-solid border-[#D9D9D9] py-2">
                <div className="text-[#707070]">Start time:</div>
                <div className="inline-flex items-center">2023.03.08 18:00 (UTC)</div>
              </div>
              <div className="flex items-start justify-between py-2">
                <div className="text-[#707070]">End time:</div>
                <div className="inline-flex items-center">2023.03.08 18:00 (UTC)</div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="rounded-2xl bg-[#FFFFFF] shadow-[0px_4px_12px_rgba(0,0,0,0.16)] w-full min-h-[200px] py-6 px-5">
            <div className="flex flex-col items-center justify-center gap-2 mb-3">
              <div className="font-medium">Project Starts In</div>
              <div className="flex items-center justify-center gap-2 text-[#0979A6] font-semibold">
                <span className="bg-[#E0F6FF] rounded px-2 py-1 text-center w-8 h-8">00</span>
                <span className="bg-[#E0F6FF] rounded px-2 py-1 text-center w-8 h-8">01</span>
                <span className="bg-[#E0F6FF] rounded px-2 py-1 text-center w-8 h-8">03</span>
                <span className="bg-[#E0F6FF] rounded px-2 py-1 text-center w-8 h-8">04</span>
              </div>
            </div>
            <div className="mb-3">
              <Progress showInfo={false} success={{ percent: 60 }} className="mb-0" />
              <div className="flex items-center justify-between">
                <div className="text-[#707070] text-xs">10,000 ETH</div>
                <div className="text-[#707070] text-xs">10,000 ETH</div>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <span className="font-semibold">Amount</span> <span className="text-[#707070]">(min: 10 SF / max: 100 SF)</span>
              </div>
              <Input placeholder="0.0" suffix={<span className="text-xs text-[#0979A6] cursor-pointer">MAX</span>} />
              <div className="mt-6">
                <Button type="primary" size="large">
                  Connect wallet
                </Button>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#EFEFEF] my-4" />
            <div className="flex items-start justify-between">
              <div className="text-[#707070]">You purchased:</div>
              <div className="inline-flex items-center">0 SF</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LaunchpadItem;
