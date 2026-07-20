import styles from "../../../../SignUp.module.css";
import { FormField } from "../../components/FormField";
import { ScreenLabel } from "../../components/ScreenLabels";
import { ScreenProps } from "../types";

export const ScreenSecurity = ({
  step,
  setStep,
  setForm,
  form,
}: ScreenProps) => {
  return (
    <section className={`${styles.step_section} ${styles.step_security}`}>

        <ScreenLabel
          label="Security setup"
          short="Create a secure password"
          screen_name="security"
        />

        <FormField
          label="Password"
          type="password"
          placeholder="Write your password"
          info="Use letters, spaces, hyphens or apostrophes"
          name="password"
          setForm={setForm}
          form={form}
        />
        
        <FormField
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          info="Use letters, spaces, hyphens or apostrophes"
          name="confirm_password"
          setForm={setForm}
          form={form}
        />

        <p className={styles.additional_info}>
          We use this information only to create your account. You can update it later in settings.
        </p>

        <button
          type="button"
          className={styles.button_continue}
          onClick={() => {
            setStep(() => ({
              ...step,
              label: "review",
            }))
          }}
        >Continue</button>
      </section>
  )
}
