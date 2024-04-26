import { IInput } from "./store.types"

export const STORE_KEYS = Object.freeze({
  INPUT:"INPUT",
  FORMULA:"FORMULA"
})

export const DEFAULT_INPUTS:Array<IInput> = [
  {
    name: "Customers",
    value:'73'
  },
  {
    name: "Base Salary",
    value:'1000'
  },
]