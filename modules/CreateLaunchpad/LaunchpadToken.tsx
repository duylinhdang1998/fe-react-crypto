import { Button, Col, Form, FormInstance, Input, Row } from "antd";
import { InfoCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/common/redux/hooks";
import { openModal } from "@/common/redux/actions/modalAction";
import types from "@/common/redux/types";

const LaunchpadToken = ({ form }: { form: FormInstance }) => {
  const dispatch = useAppDispatch();

  const handleOpenCreateToken = () => {
    dispatch(openModal(types.modalCreateToken));
  };

  return (
    <div>
      <Button type="primary" size="large" onClick={handleOpenCreateToken}>
        <PlusOutlined />
        Create new token
      </Button>

      <div className="mt-6">
        <Form form={form} layout="vertical">
          <Form.Item
            name="token_address"
            label={
              <span className="text-base">
                <span className="mr-2">Import existing token</span>
                <InfoCircleOutlined />
              </span>
            }
            rules={[{ required: true, message: "Please input your token" }]}
            required
          >
            <Input placeholder="e.g. 0xA4be8904F173679431038fEf4E7" size="large" />
          </Form.Item>
          <Row gutter={[24, 12]}>
            <Col span={5}>
              <span className="text-base text-[#707070]">Token name:</span>
            </Col>
            <Col span={10}>
              <span className="text-base">SF</span>
            </Col>
            <Col span={9}></Col>
            <Col span={5}>
              <span className="text-base text-[#707070]">Token symbol:</span>
            </Col>
            <Col span={10}>
              <span className="text-base">SF</span>
            </Col>
            <Col span={9}></Col>
            <Col span={5}>
              <span className="text-base text-[#707070]">Token decimals:</span>
            </Col>
            <Col span={10}>
              <span className="text-base">18</span>
            </Col>
            <Col span={9}></Col>
            <Col span={5}>
              <span className="text-base text-[#707070]">Supply amount:</span>
            </Col>
            <Col span={10}>
              <span className="text-base">100,000 SF</span>
            </Col>
            <Col span={9}></Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default LaunchpadToken;
