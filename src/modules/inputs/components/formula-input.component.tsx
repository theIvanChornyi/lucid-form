import { Button, Card, Input, Space } from 'antd';
import React, { FC, useState } from 'react';
import useInput from '../../store/input.store';

interface IProps {
  id: number;
  name: string;
  value: string;
}

const FormulaInput: FC<IProps> = ({ id, name, value: defaultValue }) => {
  const { deleteInput, updateValue } = useInput();
  const [value, setValue] = useState(defaultValue);
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setValue(e.target.value);
  const onHandleDelete = (): void => deleteInput(id);
  const onHandleBlur = () => updateValue(id, value);
  return (
    <Space direction="vertical" size={16}>
      <Card
        title={name}
        extra={<Button onClick={onHandleDelete}>Delete</Button>}
        style={{ width: 300 }}
      >
        <Input onChange={onHandleChange} value={value} onBlur={onHandleBlur} />
      </Card>
    </Space>
  );
};

export default FormulaInput;
