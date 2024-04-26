import { Space } from 'antd';
import { FC } from 'react';
import useFormula from '../store/formula.store';
import Result from './components/result.component';

const ResultsContainer: FC = () => {
  const { formulas } = useFormula();
  return (
    <Space direction="vertical" size={16}>
      {formulas.map(({ name, result }, i) => (
        <Result name={name} value={result} key={i } />
      ))}
    </Space>
  );
};

export default ResultsContainer;
