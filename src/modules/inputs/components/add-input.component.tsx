import { Button, Card, Form, Input, Space } from 'antd';
import { FC } from 'react';
import useInput from '../../store/input.store';

const AddInput: FC = () => {
  const { addInput } = useInput();
  return (
    <Space direction="vertical" size={16}>
      <Form onFinish={addInput}>
        <Card
          title="Add new input"
          extra={
            <Button htmlType="submit" type="primary">
              +
            </Button>
          }
          style={{ width: 300 }}
        >
          <Form.Item label="Input Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Value" name="value">
            <Input />
          </Form.Item>
        </Card>
      </Form>
    </Space>
  );
};

export default AddInput;
