import { Badge, Button, Col, Progress, Row, Tag } from "antd";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const LaunchpadItem = () => {
  return (
    <div className="rounded-2xl bg-[#FFFFFF] shadow-[0px_4px_12px_rgba(0,0,0,0.16)] w-full min-h-[400px] py-6 px-5">
      <div className="flex items-center justify-between">
        <div>
          <Image src="/images/jotaro.png" width={58} height={58} alt="default-image" />
        </div>
        <div>
          <div className="mb-3">
            <span className="px-2 py-1 bg-[#8359F9] rounded-[100px] mr-2 text-white">PancakeSwap</span>
            <span className="px-2 py-1 bg-[#ECF8F2] rounded-[100px]">
              <Badge status="success" text={<span className="text-green-500">Sale Live</span>} />
            </span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Image src="/images/discord.png" width={24} height={24} alt="discord" />
            <Image src="/images/telegram.png" width={24} height={24} alt="telegram" />
            <Image src="/images/web.png" width={24} height={24} alt="web" />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="text-xl font-bold">Jotaro</div>
        <div className="text-[#707070] font-semibold">1 ETH = 1 SF</div>
      </div>
      <div className="mb-3">
        <div className="font-medium">Hard Cap</div>
        <div className="text-[#0979A6] text-xl font-semibold">100,000 ETH</div>
      </div>
      <div className="mb-3">
        <div className="font-medium">Progress (10%)</div>
        <Progress showInfo={false} success={{ percent: 60 }} className="mb-0" />
        <div className="flex items-center justify-between">
          <div className="text-[#707070] text-xs">10,000 ETH</div>
          <div className="text-[#707070] text-xs">10,000 ETH</div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span>Minimum deposit:</span>
          <span className="text-[#707070]">10 ETH</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span>Maxium deposit:</span>
          <span className="text-[#707070]">100 ETH</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Start date:</span>
          <span className="text-[#707070]">2023.03.08</span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[#707070]">Sale Ends In:</div>
            <div className="text-[#34C77B] font-semibold">08:08:08:08</div>
          </div>
          <Link href="/launchpad/123123">
            <Button type="primary">View</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Listing = () => {
  return (
    <div>
      <Row gutter={[32, 32]}>
        {[1, 2, 3, 4].map((data, index) => {
          return (
            <Col key={index} span={8}>
              <LaunchpadItem />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default memo(Listing);
