import { create } from 'zustand';
import {
	persist,
} from 'zustand/middleware'
import { STORE_KEYS } from './store.const';
import { IFormulaStore } from './store.types';

const useFormula = create<IFormulaStore>()(persist((set) => {
  return {
    counter: 1,
    formulas: [],
    deleteFormula: (id: number): void => {
      set((store) => {
        return {
          formulas: [...store.formulas.filter((_, i) => {
            return i !== id
          })]
        }
      })
    },
    addFormula: () => {
      set((store) => {
        return {  
          formulas: [
            ...store.formulas,
            {
              name: `New formula ${store.counter + 1 }`,
              result: '0',
              value:''
            }
          ],
          counter: store.counter + 1
        }
      })
    },
  };
}, {
  name:STORE_KEYS.FORMULA
}));

export default useFormula;
