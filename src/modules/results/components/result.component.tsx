import { Card } from 'antd';
import { FC } from 'react';

interface IProps {
  name:string
  value:string
}

const Result: FC<IProps> = ({name,value}) => {
  return (
    <Card title={name} size="small">
      <p>{value}</p>
    </Card>
  );
};

export default Result;
