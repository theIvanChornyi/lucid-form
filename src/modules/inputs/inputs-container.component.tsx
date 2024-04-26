import { Space } from 'antd';
import { FC } from 'react';
import useInput from '../store/input.store';
import AddInput from './components/add-input.component';
import FormulaInput from './components/formula-input.component';

const InputsContainer: FC = () => {
  const { inputs } = useInput();
  return (
    <Space direction="vertical" size={16}>
      <AddInput />
      {inputs.map(({ name, value }, id) => (
        <FormulaInput name={name} value={value} id={id} key={id} />
      ))}
    </Space>
  );
};

export default InputsContainer;
