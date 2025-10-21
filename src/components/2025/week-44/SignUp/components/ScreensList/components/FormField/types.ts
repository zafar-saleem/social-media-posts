import { TypeForm } from "../../screens/types";

export type FormFieldProps = {
  label: string,
  placeholder: string,
  type: string,
  inputMode?: string,
  info: string,
  name: string,
  setForm: (arg: any) => void,
  form: TypeForm,
}
