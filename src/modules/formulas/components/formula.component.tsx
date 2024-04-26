import { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Card, Flex, Select } from 'antd';
import { IFormula, IInput } from '../../store/store.types';
import useFormula from '../../store/formula.store';

interface IProps extends IFormula {
  inputs: Array<IInput>;
  id: number;
}

const Formula: FC<IProps> = ({ name, result, value, inputs, id }) => {
  const { deleteFormula } = useFormula();
  const [selectedItems, setSelectedItems] = useState([]);
  const onHandleDelete = (): void => deleteFormula(id);
  const handleChange = (values: any) => {
    setSelectedItems(values);
  };
  
  return (
    <Card
      title={name}
      extra={
        <Flex gap={16} align="center">
          <p>{result}</p>
          <Button onClick={onHandleDelete}>Delete</Button>
        </Flex>
      }
    >
      <Select
        mode="tags"
        size="large"
        placeholder="Please select"
        onChange={handleChange}
        style={{ width: '100%' }}
        value={selectedItems}
      >
        {inputs.map(({ name, value }) => {
          return (
            <Select.Option title={name} key={nanoid()}>
              {name}
            </Select.Option>
          );
        })}
      </Select>
    </Card>
  );
};

export default Formula;
