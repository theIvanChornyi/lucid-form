export interface IInputStore {
  inputs: Array<IInput>;
  addInput: (input: IInput) => void;
  deleteInput: (i: number) => void;
  updateValue: (i: number, newValue: string) => void;
}

export interface IInput {
  value: string;
  name: string;
}

export interface IFormula {
  value: string;
  name: string;
  result: string;
}

export interface IFormulaStore {
  counter: number;
  formulas: Array<IFormula>;
  addFormula: () => void;
  deleteFormula: (id:number) => void;
}
