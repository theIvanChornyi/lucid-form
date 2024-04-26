import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_INPUTS, STORE_KEYS } from './store.const';
import { IInputStore } from './store.types';

const useInput = create<IInputStore>()(
  persist((set) => {
  return {
    inputs: DEFAULT_INPUTS,
    addInput: data => {
      set(store => {
        return {
          inputs: [...store.inputs, data],
        };
      });
    },
    deleteInput: id => {
      set(store => {
        return {
          inputs: [
            ...store.inputs.filter((_, i) => {
              return i !== id;
            }),
          ],
        };
      });
    },
    updateValue: (id, value) => {
      set(store => {
        return {
          inputs: [
            ...store.inputs.map((inputData, i) => {
              if (i === id) {
                return { ...inputData, value };
              }
              return inputData;
            }),
          ],
        };
      });
    },
  };
}, {
  name:STORE_KEYS.INPUT
})
);

export default useInput;
