import { useState } from "react";
import SectionCreateLaunchpad from "./SectionCreateLaunchpad";
import SectionProposalDetail from "./SectionProposalDetail";
import SectionAction from "./SectionAction";
import SectionPreview from "./SectionPreview";
import { Form } from "antd";

const CreateProposal = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState({ tab1: true, tab2: false, tab3: false });

  const expandTab = (value: any, tab: string) => {
    let tabMapping = {
      tab1: "create-proposal-launchpad",
      tab2: "create-proposal-detail",
      tab3: "create-proposal-action",
      tab4: "create-proposal-preview",
    } as { [key: string]: string };

    setOpen((pre) => ({ ...pre, [tab]: value }));

    setTimeout(() => {
      if (value) {
        let scrollId = tabMapping[tab];
        let scrollElement = document.getElementById(scrollId);
        scrollElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="mx-auto w-[800px]">
      <div className="mb-10 text-3xl font-semibold text-center">Create Proposal</div>
      <SectionCreateLaunchpad setOpen={expandTab} open={open} />
      <SectionProposalDetail setOpen={expandTab} open={open} form={form} />
      <SectionAction setOpen={expandTab} open={open} form={form} />
      <SectionPreview setOpen={expandTab} open={open} form={form} />
    </div>
  );
};

export default CreateProposal;
