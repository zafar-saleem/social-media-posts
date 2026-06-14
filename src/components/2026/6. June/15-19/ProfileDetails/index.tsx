"use client";

import React from "react";
import styles from "./styles.module.css";

const PROFILE_DATA = {
  avatar: "",
  name: "",
  role: "",
  company: "",
  email: "",
  location: "",
  bio: "",
  theme: "",
}

export const ProfileDetails = () => {
  const [userProfile, setUserProfile] = React.useState(PROFILE_DATA);
  
  return (
    <div className={styles.container}>
      <Form setUserProfile={setUserProfile} />
      <ProfilePreview userProfile={userProfile} />
    </div>
  )
}


const ProfilePreview = ({ userProfile }) => {
  if (Object.values(userProfile).every(value => value === '')) {
    return (
      <div className={styles.profile_preview}>
        <div className={styles.preview_contents}>
          <h1 className={styles.empty_state}>Enter your information</h1> 
        </div>
      </div>
    )
  }

  return (
    <div className={styles.profile_preview}>
      <div className={styles.preview_contents}>
        {
          userProfile.name && <div className={styles.form_avatar} style={{ "--color": userProfile.theme }}>
          {userProfile.name.split(" ")[0][0]}{userProfile.name.split(" ")[1] && userProfile.name.split(" ")[1][0]}
        </div>
        }
        <h1 className={styles.form_name}>{userProfile.name}</h1>
        <p className={styles.form_role}>
          <span>{userProfile.role}</span> {userProfile.company && <span>&bull; {userProfile.company}</span>}
        </p>
        {
          userProfile.location && <p className={`${styles.preview} ${styles.form_location}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(109 109 109)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            {userProfile.location}
          </p>
        }
        {
          userProfile.email && 
          <p className={`${styles.preview} ${styles.form_email}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(109 109 109)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            {userProfile.email}
          </p>
        }
        <p className={styles.form_bio}>{userProfile.bio}</p>
      </div>
    </div>
  )
}

const Form = ({ setUserProfile }) => {
  return (
    <form className={styles.profile_form}>
      <h1 className={styles.profile_title}>Profile details</h1>
      <div className={styles.box}>
        <FormField
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera-icon lucide-camera"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>}
          label="Avatar" type="file" setUserProfile={setUserProfile} name="avatar" />
        <FormField
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round-icon lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>}
          label="Fullname" type="text" setUserProfile={setUserProfile} name="name" />
        <FormField
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business-icon lucide-briefcase-business"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="18" height="14" x="2" y="6" rx="2"/></svg>}
          label="Role" type="search" setUserProfile={setUserProfile} name="role" />
        <FormField
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-school-icon lucide-school"><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M18 4.933V21"/><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"/><path d="M6 4.933V21"/><circle cx="12" cy="9" r="2"/></svg>}
          label="Company" type="text" setUserProfile={setUserProfile} name="company" />
        <FormField
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>}
          label="Email" type="email" setUserProfile={setUserProfile} name="email" />
        <FormField
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>}
          label="Location" type="text" setUserProfile={setUserProfile} name="location" />
        <FormField
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-text-align-start-icon lucide-text-align-start"><path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/></svg>}
          label="Bio" type="text" setUserProfile={setUserProfile} name="bio" />
        <Theme setUserProfile={setUserProfile} />
      </div>
      <div className={styles.form_actions}>
        <button type="button" className={`${styles.button_cancel} ${styles.button}`}>Cancel</button>
        <button type="button" className={`${styles.button_save} ${styles.button}`}>Save Changes</button>
      </div>
    </form>
  )
}

const FormField = ({ setUserProfile, ...rest }) => {
  const updateUser = (event) => {
    setUserProfile(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }

  return (
    <label className={styles.form_field}>
      <span className={styles.field_icon}>{rest.icon}</span>
      <span className={styles.field_label}>{rest.label}</span>
      <input className={styles.form_input} onChange={updateUser} {...rest} />
    </label>
  )
}

const Theme = ({ setUserProfile }) => {
  const updateTheme = (event) => {
    setUserProfile(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }

  return (
    <div className={styles.theme_box}>
      <label className={styles.form_theme}>
        <span className={styles.form_icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>
        </span>
        <span className={styles.form_label}>Theme</span>
      </label>
      <input type="radio" name="theme" className={styles.form_input} value="rgb(219 219 219)" style={{ "--color": "rgb(219 219 219)" }} onChange={updateTheme} />
      <input type="radio" name="theme" className={styles.form_input} value="rgb(255 196 196)" style={{ "--color": "rgb(255 196 196)" }} onChange={updateTheme} />
      <input type="radio" name="theme" className={styles.form_input} value="rgb(223 161 42)" style={{ "--color": "rgb(223 161 42)" }} onChange={updateTheme} />
      <input type="radio" name="theme" className={styles.form_input} value="rgb(126 203 188)" style={{ "--color": "rgb(126 203 188)" }} onChange={updateTheme} />
      <input type="radio" name="theme" className={styles.form_input} value="rgb(94 146 223)" style={{ "--color": "rgb(94 146 223)" }} onChange={updateTheme} />
      <input type="radio" name="theme" className={styles.form_input} value="rgb(211 146 211)" style={{ "--color": "rgb(211 146 211)" }} onChange={updateTheme} />
    </div>
  )
}