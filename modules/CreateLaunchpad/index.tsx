import { Button, Card, Form, FormInstance, Steps, message } from "antd";
import { useState } from "react";
import LaunchpadToken from "./LaunchpadToken";
import LaunchpadInfo from "./LaunchpadInfo";
import AdditionalInfo from "./AdditionalInfo";
import CreateTokenModal from "./CreateTokenModal";

const steps = [
  {
    title: "Launchpad Token",
    content: (form: FormInstance) => <LaunchpadToken form={form} />,
  },
  {
    title: "Launchpad Info",
    content: (form: FormInstance) => <LaunchpadInfo form={form} />,
  },
  {
    title: "Addtional Info",
    content: (form: FormInstance) => <AdditionalInfo form={form} />,
  },
];

const items = steps.map((item) => ({ key: item.title, title: item.title }));

const CreateLaunchpad = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleDone = () => {
    console.log(form.getFieldsValue());
  };

  return (
    <div className="w-[800px] mx-auto">
      <div className="mb-10 text-3xl font-bold text-center">Create Launchpad</div>
      <div>
        <Steps current={current} items={items} />
        <Card className="mt-10">
          <div className="text-[#EB5757] mb-8 text-base">(*) is required field.</div>
          <div>
            {steps.map((stepItem, index) => {
              return (
                <div key={index} style={{ display: index === current ? "block" : "none" }}>
                  {stepItem.content(form)}
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3 mt-8">
            {current > 0 && (
              <Button size="large" onClick={() => prev()}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" size="large" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" size="large" onClick={handleDone}>
                Done
              </Button>
            )}
          </div>
        </Card>
        <CreateTokenModal />
      </div>
    </div>
  );
};

export default CreateLaunchpad;
