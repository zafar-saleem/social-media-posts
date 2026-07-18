import styles from "./styles.module.css";

export const ContactSection = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contact_title}>Get in touch</h1>
      <article className={styles.contact_address}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
        <div className={styles.block}>
          <span className={styles.block_title}>Our Office</span>
          <div className={styles.group}>
            <p className={styles.block_text}>
              1234 Round-About Boulevard, Suite 3245, Engineering Valley,
            </p>
            <p className={styles.block_text}>
              Los Angeles, A43-D3E, United States
            </p>
          </div>
        </div>
      </article>
      
      
      <article className={`${styles.contact_address} ${styles.contacts}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-reply-icon lucide-message-square-reply"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="m10 8-3 3 3 3"/><path d="M17 14v-1a2 2 0 0 0-2-2H7"/></svg>
        <div className={styles.block}>
          <span className={styles.block_title}>Contact Details</span>
          <p className={`${styles.block_text} ${styles.contact_details}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg> <span>+1 (555) 123-4567</span>
          </p>
          <p className={`${styles.block_text} ${styles.contact_details}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg> <span>support@jumero.com</span>
          </p>
        </div>
      </article>



      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12445.184912457384!2d-9.245302749999999!3d38.7569092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spt!4v1784369840348!5m2!1sen!2spt" width="600" height="450" styles="border:0" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className={styles.map}></iframe>





      <form className={styles.contact_form}>
        <label className={styles.form_label}>
          <span className={styles.label_text}>First Name</span>
          <input type="text" name="fname" className={styles.label_field} placeholder="First Name" />
        </label>
        <label className={styles.form_label}>
          <span className={styles.label_text}>Last Name</span>
          <input type="text" name="fname" className={styles.label_field} placeholder="Last Name" />
        </label>
        <label className={`${styles.form_label} ${styles._label_phone}`}>
          <span className={styles.label_text}>Phone Number</span>
          <div>
            <select className={styles.country_codes}>
              <option>US</option>
              <option>CA</option>
            </select>
            <input type="text" name="fname" className={styles.label_field} placeholder="+1 (555) 123-1234" />
          </div>
        </label>
        <label className={styles.form_label}>
          <span className={styles.label_text}>Message</span>
          <textarea className={`${styles.label_textarea} ${styles.label_field}`} placeholder="Your message" />
        </label>
        <button className={styles.form_button}>
          Get in touch
        </button>
      </form>
    </div>
  )
}