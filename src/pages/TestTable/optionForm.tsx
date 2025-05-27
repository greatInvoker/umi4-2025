import { Button, Col, Form, Input, Row } from 'antd';
import type { OptionFormProps } from './customer';

const OptionForm: React.FC<OptionFormProps> = (props) => {
  const { add: pAdd } = props;
  const [form] = Form.useForm();

  const add: () => void = () => {
    pAdd(form.getFieldsValue());
  };

  const resetForm = () => {
    form.resetFields();
  };

  return (
    <Form className="bgc-white" form={form}>
      <Row className="pt-24 pl-16 pr-16">
        <Col span={8}>
          <Form.Item
            label="名称"
            name="name"
            tooltip="真实姓名"
            wrapperCol={{ span: 16 }}
          >
            <Input placeholder="请输入名称" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="昵称" name="nickname" wrapperCol={{ span: 16 }}>
            <Input placeholder="请输入昵称" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <div className="ml-16">
              <Button className="mr-16" type="primary" onClick={add}>
                新建
              </Button>
              <Button type="dashed" onClick={resetForm}>
                重置
              </Button>
            </div>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
export default OptionForm;
