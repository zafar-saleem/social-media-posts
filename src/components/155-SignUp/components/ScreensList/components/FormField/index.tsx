import styles from "../../../../SignUp.module.css";
import { FormFieldProps } from "./types";

export const FormField = ({
  label,
  placeholder,
  type,
  inputMode = "text",
  info,
  name,
  setForm,
  form,
}: FormFieldProps) => {
  return (
    <section className={styles.form_group}>
      <label className={styles.input_container}>
        <span className={styles.input_label}>{label}</span>
        <input
          type={type}
          className={styles.input}
          placeholder={placeholder}
          inputMode={inputMode}
          name={name}
          onChange={(event) => {
            setForm({
              ...form,
              [name]: event.target.value,
            })
          }}
        />
        <span className={styles.info}>{info}</span>
      </label>
    </section>
  )
}
