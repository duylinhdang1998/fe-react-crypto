import { AutoComplete, Button, Checkbox, Col, Form, Popover, Row, Select } from "antd";
import { memo, useState } from "react";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const SearchList = () => {
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const getPanelValue = (searchText: string) => (!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]);

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  return (
    <Form.Item label=" ">
      <AutoComplete
        options={options}
        style={{ width: "100%", background: "#ffffff" }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="Enter token name or token symbol"
      />
    </Form.Item>
  );
};

const SelectPoolType = ({ value, onChange }: { value?: string[]; onChange?: (data: string[]) => void }) => {
  return (
    <Popover
      content={
        <Checkbox.Group style={{ width: "100%", background: "#ffffff" }} value={value} onChange={onChange}>
          <Row gutter={[8, 4]}>
            <Col span={24}>
              <Checkbox value="presale">Presale</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="fair_launch">Fair Launch</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="manual_list">Manual List</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="auction">Auction</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="subcription">Subcription</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      }
      trigger="click"
      arrow={false}
      overlayStyle={{ width: 150 }}
    >
      <Button type="default" block>
        {value?.length} Types
      </Button>
    </Popover>
  );
};

const Filter = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      layout="vertical"
      colon={false}
      initialValues={{
        filter_by: "",
        pool_ype: "",
        sort_by: "",
        chain_id: "",
      }}
    >
      <Row gutter={[20, 20]}>
        <Col span={12}>
          <SearchList />
        </Col>
        <Col span={12}>
          <Row gutter={[20, 20]}>
            <Col span={6}>
              <Form.Item name="filter_by" label="Filter By">
                <Select
                  style={{ width: "100%", background: "#ffffff" }}
                  options={[
                    { value: "", label: "No filter" },
                    { value: "upcoming", label: "Upcoming" },
                    { value: "live", label: "Live" },
                    { value: "ended", label: "Ended" },
                    { value: "canceled", label: "Canceled" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="pool_ype" label="Pool Type">
                <SelectPoolType />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="sort_by" label="Sort By">
                <Select
                  style={{ width: "100%", background: "#ffffff" }}
                  options={[
                    { value: "", label: "No filter" },
                    { value: "hard_cap", label: "Hard cap" },
                    { value: "soft_cap", label: "Soft cap" },
                    { value: "lp_percent", label: "LP percent" },
                    { value: "start_time", label: "Start time" },
                    { value: "end_time", label: "End time" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="chain_id" label="Chain">
                <Select
                  style={{ width: "100%", background: "#ffffff" }}
                  options={[
                    { value: "", label: "No filter" },
                    { value: "bsc", label: "BSC" },
                    { value: "ether", label: "Ether" },
                    { value: "polygon", label: "Polygon" },
                    { value: "avalanche", label: "Avalanche" },
                    { value: "arbitrum", label: "Arbitrum" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default memo(Filter);
