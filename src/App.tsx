import FormulasContainer from './modules/formulas/formulas-container.component';
import InputsContainer from './modules/inputs/inputs-container.component';
import { Flex } from 'antd';
import ResultsContainer from './modules/results/results-container.component';


function App() {
  return (
    <Flex gap={16} align='start' style={{padding:16}}>
      <InputsContainer/>
      <FormulasContainer />
      <ResultsContainer/>
    </Flex>
  );
}

export default App;
