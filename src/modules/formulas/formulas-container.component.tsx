import { FC } from 'react';
import { Button, Space } from 'antd';
import useFormula from '../store/formula.store';
import Formula from './components/formula.component';
import useInput from '../store/input.store';

const FormulasContainer: FC = () => {
  const { formulas, addFormula } = useFormula();
  const { inputs } = useInput();

  return (
    <Space direction="vertical" size={16} style={{ flexGrow: 1 }}>
      <Button onClick={addFormula} style={{ width: '100%' }}>
        Add new formula
      </Button>
      {formulas.map((formula, id) => (
        <Formula inputs={inputs} {...formula} id={id} key={id} />
      ))}
    </Space>
  );
};

export default FormulasContainer;
