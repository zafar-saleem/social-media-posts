import styles from "../../../../SignUp.module.css";
import { FormField } from "../../components/FormField";
import { ScreenLabel } from "../../components/ScreenLabels";
import { ScreenProps } from "../types";

export const ScreenInfo = ({
  setStep,
  step,
  setForm,
  form,
}: ScreenProps) => {
  return (
    <section className={`${styles.step_section} ${styles.step_info}`}>

        <ScreenLabel
          label="Personal Information"
          short="Tell us about yourself"
          screen_name="info"
        />

        <FormField
          label="First name"
          type="text"
          placeholder="Write your first name"
          info="Use letters, spaces, hyphens or apostrophes"
          name="fname"
          setForm={setForm}
          form={form}
        />

        <FormField
          label="Last name"
          type="text"
          placeholder="Write your last name"
          info="Use letters, spaces, hyphens or apostrophes"
          name="lname"
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
              label: "contact",
            }))
          }}
        >Continue</button>
      </section>
  )
}
