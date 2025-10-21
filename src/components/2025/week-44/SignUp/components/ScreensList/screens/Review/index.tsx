"use client";

import React from "react";
import styles from "../../../../SignUp.module.css";
import { ScreenLabel } from "../../components/ScreenLabels";
import { TypeForm } from "../types";

export const ScreenReview = React.memo(({ ...props }: TypeForm) => {
  const {
    fname,
    lname,
    email,
    phone,
  } = props;

  return (
    <section className={`${styles.step_section} ${styles.step_review}`}>
        
        <ScreenLabel
          label="Review"
          short="Review your details"
          screen_name="review"
        />
        
        <div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
          <span>First name</span>
          <span>{fname}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        
        <div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round-icon lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
          <span>Last name</span>
          <span>{lname}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        
        <div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-open-icon lucide-mail-open"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
          <span>Email</span>
          <span>{email}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        
        <div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
          <span>Phone</span>
          <span>{phone}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        
        <div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rectangle-ellipsis-icon lucide-rectangle-ellipsis"><rect width="20" height="12" x="2" y="6" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>
          <span>password</span>
          <span>Password Entered</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        </div>

        <button type="button" className={styles.button_continue}>Submit</button>
      </section>
  )
})
