import { DatePicker, Form, FormInstance, Input, Radio, Space } from "antd";
import dayjs from "dayjs";

const AdditionalInfo = ({ form }: { form: FormInstance }) => {
  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item
          name="pay_currency"
          label={<span className="text-base">Currency user will pay with for your token</span>}
          rules={[{ required: true, message: "Please select your currency" }]}
          required
        >
          <Radio.Group size="large">
            <Space direction="vertical">
              <Radio value="ETH">
                <span className="text-base">ETH</span>
              </Radio>
              <Radio value="HEX">
                <span className="text-base">HEX</span>
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item noStyle shouldUpdate={(prevValues, curValues) => prevValues.pay_currency !== curValues.pay_currency}>
          {() => {
            const payCurrency = form.getFieldValue("pay_currency");
            return (
              <>
                <Form.Item
                  name="token_amount"
                  label={<span className="text-base">Amount of tokens allocated in this project</span>}
                  rules={[{ required: true, message: "Please input your token amount" }]}
                  required
                >
                  <Input placeholder="0" size="large" prefix={<span className="mr-2">{payCurrency}</span>} />
                </Form.Item>
                <Form.Item
                  name="token_price"
                  label={<span className="text-base">Token price</span>}
                  rules={[{ required: true, message: "Please input your token price" }]}
                  required
                >
                  <Input placeholder="0.00" size="large" prefix={<span className="mr-2">{payCurrency}</span>} />
                </Form.Item>
              </>
            );
          }}
        </Form.Item>
        <Form.Item
          name="whitelist"
          label={<span className="text-base">Who can deposit in your project?</span>}
          rules={[{ required: true, message: "Please select your whitelist" }]}
          required
        >
          <Radio.Group size="large">
            <Space direction="vertical">
              <Radio value="Everyone">
                <span className="text-base">Everyone</span>
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item noStyle shouldUpdate={(prevValues, curValues) => prevValues.pay_currency !== curValues.pay_currency}>
          {() => {
            const payCurrency = form.getFieldValue("pay_currency");
            return (
              <>
                <Form.Item
                  name="minimum_amount"
                  label={<span className="text-base">Minimum deposit each user can make</span>}
                  rules={[{ required: true, message: "Please input your minimum amount" }]}
                  required
                >
                  <Input placeholder="0" size="large" prefix={<span className="mr-2">{payCurrency}</span>} />
                </Form.Item>
                <Form.Item
                  name="maximum_amount"
                  label={<span className="text-base">Maximum deposit each user can make</span>}
                  rules={[{ required: true, message: "Please input your maximum amount" }]}
                  required
                >
                  <Input placeholder="0" size="large" prefix={<span className="mr-2">{payCurrency}</span>} />
                </Form.Item>
              </>
            );
          }}
        </Form.Item>
        <Form.Item
          name="duration"
          label={<span className="text-base">Duration</span>}
          rules={[{ required: true, message: "Please input your duration" }]}
          required
        >
          <DatePicker.RangePicker size="large" style={{ width: "100%" }} disabledDate={(date) => date.isBefore(dayjs())} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdditionalInfo;
