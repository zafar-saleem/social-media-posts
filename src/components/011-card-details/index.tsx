import { Field, Form, Formik } from "formik";
import { validationSchema } from "./schema";
import { initialValues } from "./form-values";
import styles from "./styles.module.css";
import Image from "next/image";
import master from "./assets/mastercard.png";
import visa from "./assets/visa.png";

export const CreditCardDetails = () => {
  return (
    <div className="cc_container">
      <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={(values, { setSubmitting }) => {
          console.log(values);
       }}
     >
       {({ errors, touched }) => {
          return (
            <Form className={`${styles.flex} ${styles.column}`}>
              <h1 className={styles.page_title}>Address & Payment Details</h1>
              <span className={styles.form_section_title}>Basic Details</span>
              <div className={styles.flex}>
                <section className={`${styles.form_field_flex}`}>
                  <Field
                    className={`${styles.form_field} ${styles.form_field_flex}`}
                    type="email" name="email" placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                    <p className={styles.form_error}>{errors.email}</p>
                  ) : null}
                </section>
              </div>
              <div className={styles.flex}>
                <section className={styles.form_field_flex}>
                  <Field
                    className={styles.form_field}
                    type="text" name="fname" placeholder="Firstname"
                  />
                  {errors.fname && touched.fname ? (
                    <p className={styles.form_error}>{errors.fname}</p>
                  ) : null}
                </section>
                <section className={styles.form_field_flex}>
                  <Field
                    className={styles.form_field}
                    type="text" name="lname" placeholder="Lastname"
                  />
                  {errors.lname && touched.lname ? (
                    <p className={styles.form_error}>{errors.lname}</p>
                  ) : null}
                </section>
              </div>
              <div className={styles.flex}>
                <section className={styles.form_field_flex}>
                  <Field
                    className={styles.form_field}
                    type="number" name="zip" placeholder="Zip Code"
                  />
                  {errors.zip && touched.zip ? (
                    <p className={styles.form_error}>{errors.zip}</p>
                  ) : null}
                </section>
                <section className={styles.form_field_flex}>
                  <Field
                    className={styles.form_field}
                    type="text" name="country" placeholder="Country"
                  />
                  {errors.country && touched.country ? (
                    <p className={styles.form_error}>{errors.country}</p>
                  ) : null}
                </section>
              </div>
              <span className={styles.form_section_title}>Payment Details</span>
              <div className={`${styles.flex} ${styles.column} ${styles.gap_0}`}>
                <section className={styles.relative}>
                  <Field
                    className={`${styles.form_field} ${styles.form_field_flex} ${styles.form_field_card}`}
                    type="number"
                    name="cc_number"
                    placeholder="Credit Card Number"
                    inputMode="numric"
                  />
                  <Image
                    src={visa}
                    width={30}
                    height={26}
                    alt="Visa card icon"
                    className={`${styles.m_r} ${styles.absolute} ${styles.visa_position}`}
                  />
                  <Image
                    src={master}
                    width={30}
                    height={30}
                    alt="Master card icon"
                    className={`${styles.absolute} ${styles.master_position}`}
                  />
                </section>
                {errors.cc_number && touched.cc_number ? (
                  <p className={styles.form_error}>{errors.cc_number}</p>
                ) : null}
              </div>
              <div className={styles.flex}>
                <section>
                  <Field
                    className={styles.form_field}
                    type="text"
                    name="cc_month"
                    placeholder="Expiry month"
                  />
                  {errors.cc_month && touched.cc_month ? (
                    <p className={styles.form_error}>{errors.cc_month}</p>
                  ) : null}
                </section>
                <section>
                  <Field
                    className={styles.form_field}
                    type="year"
                    name="cc_year"
                    placeholder="Expiry year"
                  />
                  {errors.cc_year && touched.cc_year ? (
                    <p className={styles.form_error}>{errors.cc_year}</p>
                  ) : null}
                </section>
                <section>
                  <div className={styles.relative}>
                    <Field
                      className={styles.form_field}
                      type="number"
                      name="cc_security"
                      placeholder="CVC"
                      inputMode="numeric"
                    />
                    <button
                      type="button"
                      popoverTarget="info"
                      className={`${styles.tooltip_button}
                      ${styles.absolute}`}>?</button>
                    <p
                      popover="auto"
                      id="info"
                      className={styles.tooltip_target}>
                        CVC is at the back of your card with 3 digits.
                    </p>
                  </div>
                  {errors.cc_security && touched.cc_security ? (
                    <p className={styles.form_error}>{errors.cc_security}</p>
                  ) : null}
                </section>
              </div>
              <button type="submit" className={styles.form_button}>Submit</button>
            </Form>
          )
        }}
     </Formik>
    </div>
  )
}