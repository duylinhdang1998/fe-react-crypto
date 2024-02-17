import { Form, FormInstance, Input, Radio, Space } from "antd";

const LaunchpadInfo = ({ form }: { form: FormInstance }) => {
  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item
          name="project_name"
          label={<span className="text-base">Project name</span>}
          rules={[{ required: true, message: "Please input your project name" }]}
          required
        >
          <Input placeholder="e.g SPINEL PROJECT" size="large" />
        </Form.Item>
        <Form.Item
          name="project_description"
          label={<span className="text-base">Project description</span>}
          rules={[{ required: true, message: "Please input your project description" }]}
          required
        >
          <Input placeholder="Detail your project here..." size="large" />
        </Form.Item>
        <Form.Item
          name="token_logo"
          label={<span className="text-base">Token logo</span>}
          rules={[{ required: true, message: "Please input your token logo" }]}
          required
        >
          <Input placeholder="Enter a valid URL starting with “https://” and ending in “.jpeg”, “.jpg” or “.png”." size="large" />
        </Form.Item>
        <Form.Item
          name="project_on"
          label={<span className="text-base">List your project on</span>}
          rules={[{ required: true, message: "Please select your project on" }]}
          required
        >
          <Radio.Group size="large">
            <Space direction="vertical">
              <Radio value="PancakeSwap">
                <span className="text-base">PancakeSwap</span>
              </Radio>
              <Radio value="Uniswap">
                <span className="text-base">Uniswap</span>
              </Radio>
              <Radio value="SushiSwap">
                <span className="text-base">SushiSwap</span>
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="website" label={<span className="text-base">Website</span>}>
          <Input placeholder="Enter your project's website here" size="large" />
        </Form.Item>
        <Form.Item name="telegram" label={<span className="text-base">Telegram</span>}>
          <Input placeholder="Enter your project's Telegram here" size="large" />
        </Form.Item>
        <Form.Item name="discord" label={<span className="text-base">Discord</span>}>
          <Input placeholder="Enter your project's Discord here" size="large" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default LaunchpadInfo;
