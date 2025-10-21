import { TypeSteps } from "../../../types"

export type TypeForm = {
  fname: string;  
  lname: string;
  email: string;
  password?: string;
  phone: string;
}

export type ScreenListProps = {
  step: TypeSteps;
  setStep: (args: any) => void;
}

export type ScreenProps = ScreenListProps & {
  setForm: (args: any) => void,
  form: TypeForm,
}
