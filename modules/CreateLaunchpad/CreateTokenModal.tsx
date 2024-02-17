import { closeModal } from "@/common/redux/actions/modalAction";
import { useAppDispatch } from "@/common/redux/hooks";
import types from "@/common/redux/types";
import { selectValue } from "@/common/redux/utils";
import { Button, Form, Input, Modal } from "antd";
import { memo } from "react";
import { useSelector } from "react-redux";

const CreateTokenModal = () => {
  const dispatch = useAppDispatch();
  const { open } = useSelector(selectValue(types.modalCreateToken));
  const [form] = Form.useForm();

  const handleCancel = () => {
    dispatch(closeModal(types.modalCreateToken));
    form.resetFields();
  };

  return (
    <Modal
      title={<div className="text-lg">Create Token</div>}
      open={open}
      onCancel={handleCancel}
      footer={
        <div className="flex items-center justify-center gap-2">
          <Button size="large" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="primary" size="large">
            Create
          </Button>
        </div>
      }
    >
      <div className="text-[#EB5757] mb-4 text-base">(*) is required field.</div>
      <Form form={form} layout="vertical">
        <Form.Item
          name="token_name"
          label={<span className="text-base">Token name</span>}
          rules={[{ required: true, message: "Please input your token name" }]}
          required
          help={<span className="text-[#DC9E00]">Token name must be at least 2 characters.</span>}
        >
          <Input placeholder="E.g. SPINEL" size="large" />
        </Form.Item>
        <Form.Item
          name="token_symbol"
          label={<span className="text-base">Token symbol</span>}
          rules={[{ required: true, message: "Please input your token symbol" }]}
          required
          help={<span className="text-[#DC9E00]">Token symbol must be at least 2 characters.</span>}
        >
          <Input placeholder="E.g. SPN" size="large" />
        </Form.Item>
        <Form.Item
          name="token_decimals"
          label={<span className="text-base">Token decimals</span>}
          rules={[{ required: true, message: "Please input your token decimals" }]}
          required
          help={
            <span className="text-[#DC9E00]">Token decimals must be greater than or equal to 2 and must be less than or equal to 64.</span>
          }
        >
          <Input placeholder="E.g. 18" size="large" />
        </Form.Item>
        <Form.Item
          name="total_supply"
          label={<span className="text-base">Total supply</span>}
          rules={[{ required: true, message: "Please input your total supply" }]}
          required
        >
          <Input placeholder="E.g. 1,000,000,000" size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default memo(CreateTokenModal);
