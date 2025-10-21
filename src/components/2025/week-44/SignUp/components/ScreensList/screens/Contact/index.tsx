import styles from "../../../../SignUp.module.css";
import { FormField } from "../../components/FormField";
import { ScreenLabel } from "../../components/ScreenLabels";
import { ScreenProps } from "../types";

export const ScreenContact = ({
  step,
  setStep,
  setForm,
  form,
}: ScreenProps) => {
  return (
    <section className={`${styles.step_section} ${styles.step_contact}`}>

        <ScreenLabel
          label="Contact details"
          short="How can we reach you?"
          screen_name="contact"
        />

        <FormField
          label="Email"
          type="email"
          placeholder="Write your email"
          info="Use letters, spaces, hyphens or apostrophes"
          name="email"
          setForm={setForm}
          form={form}
        />
        
        <FormField
          label="Phone number"
          type="number"
          placeholder="Write your phone number"
          info="Use letters, spaces, hyphens or apostrophes"
          inputMode="tel"
          name="phone"
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
              label: "security",
            }))
          }}
        >Continue</button>
      </section>
  )
}
