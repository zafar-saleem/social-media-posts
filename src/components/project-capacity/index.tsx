"use client";

import React from "react";
import styles from "./capacity.module.css";
import Image from "next/image";

const ICONS = {
  calendar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNjMgMTYzIDE2MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYWxlbmRhci1pY29uIGx1Y2lkZS1jYWxlbmRhciI+PHBhdGggZD0iTTggMnY0Ii8+PHBhdGggZD0iTTE2IDJ2NCIvPjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeD0iMyIgeT0iNCIgcng9IjIiLz48cGF0aCBkPSJNMyAxMGgxOCIvPjwvc3ZnPg==",
  active: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNjMgMTYzIDE2MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hY3Rpdml0eS1pY29uIGx1Y2lkZS1hY3Rpdml0eSI+PHBhdGggZD0iTTIyIDEyaC0yLjQ4YTIgMiAwIDAgMC0xLjkzIDEuNDZsLTIuMzUgOC4zNmEuMjUuMjUgMCAwIDEtLjQ4IDBMOS4yNCAyLjE4YS4yNS4yNSAwIDAgMC0uNDggMGwtMi4zNSA4LjM2QTIgMiAwIDAgMSA0LjQ5IDEySDIiLz48L3N2Zz4=",
  update: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNjMgMTYzIDE2MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zcGFya2xlcy1pY29uIGx1Y2lkZS1zcGFya2xlcyI+PHBhdGggZD0iTTkuOTM3IDE1LjVBMiAyIDAgMCAwIDguNSAxNC4wNjNsLTYuMTM1LTEuNTgyYS41LjUgMCAwIDEgMC0uOTYyTDguNSA5LjkzNkEyIDIgMCAwIDAgOS45MzcgOC41bDEuNTgyLTYuMTM1YS41LjUgMCAwIDEgLjk2MyAwTDE0LjA2MyA4LjVBMiAyIDAgMCAwIDE1LjUgOS45MzdsNi4xMzUgMS41ODFhLjUuNSAwIDAgMSAwIC45NjRMMTUuNSAxNC4wNjNhMiAyIDAgMCAwLTEuNDM3IDEuNDM3bC0xLjU4MiA2LjEzNWEuNS41IDAgMCAxLS45NjMgMHoiLz48cGF0aCBkPSJNMjAgM3Y0Ii8+PHBhdGggZD0iTTIyIDVoLTQiLz48cGF0aCBkPSJNNCAxN3YyIi8+PHBhdGggZD0iTTUgMThIMyIvPjwvc3ZnPg==",
  close: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNjMgMTYzIDE2MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS14LWljb24gbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+",
  increase: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNjMgMTYzIDE2MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wbHVzLWljb24gbHVjaWRlLXBsdXMiPjxwYXRoIGQ9Ik01IDEyaDE0Ii8+PHBhdGggZD0iTTEyIDV2MTQiLz48L3N2Zz4=",
  decrease: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNjMgMTYzIDE2MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1taW51cy1pY29uIGx1Y2lkZS1taW51cyI+PHBhdGggZD0iTTUgMTJoMTQiLz48L3N2Zz4=",
  user: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNjMgMTYzIDE2MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyLWljb24gbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+",
  status: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig4MiA3NSAyMTQpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtaGFuZC1pY29uIGx1Y2lkZS1oYW5kIj48cGF0aCBkPSJNMTggMTFWNmEyIDIgMCAwIDAtMi0yYTIgMiAwIDAgMC0yIDIiLz48cGF0aCBkPSJNMTQgMTBWNGEyIDIgMCAwIDAtMi0yYTIgMiAwIDAgMC0yIDJ2MiIvPjxwYXRoIGQ9Ik0xMCAxMC41VjZhMiAyIDAgMCAwLTItMmEyIDIgMCAwIDAtMiAydjgiLz48cGF0aCBkPSJNMTggOGEyIDIgMCAxIDEgNCAwdjZhOCA4IDAgMCAxLTggOGgtMmMtMi44IDAtNC41LS44Ni01Ljk5LTIuMzRsLTMuNi0zLjZhMiAyIDAgMCAxIDIuODMtMi44Mkw3IDE1Ii8+PC9zdmc+",
}

export const ProjectCapacity = () => {
  let [counter, setCounter] = React.useState(0);
  const [skills, setSkills] = React.useState([]);

  return (
    <form className={styles.container}>
      <button className={styles.btn_close} />
      <div className={styles.user_container}>
        <Image
          src={ICONS.user}
          width={36}
          height={36}
          alt=""
          className={styles.avatar}
        />
        <div className={styles.user_info}>
          <span className={styles.username}>Zafar Saleem</span>
          <select className={styles.user_role}>
            <option>Designer</option>
            <option>Developer</option>
            <option>Manager</option>
          </select>
        </div>
        <div>
          <span className={`${styles.status_badge} ${styles.badge}`}>
            <Image
              src={ICONS.status}
              width={12}
              height={12}
              alt=""
            />
            <span>Available</span>
          </span>
        </div>
      </div>



      <div className={styles.recent_activity}>
        <ul>
          <li>
            <Image
              src={ICONS.calendar}
              width={15}
              height={15}
              alt=""
            />
            <span className={styles.activity_label}>Next Availability Date</span>
            <span className={styles.activity_value}>Available</span>
          </li>

          <li>
            <Image
              src={ICONS.active}
              width={15}
              height={15}
              alt=""
            />
            <span className={styles.activity_label}>Last Active</span>
            <span className={styles.activity_value}>Today, 1:35 PM</span>
          </li>

          <li>
            <Image
              src={ICONS.update}
              width={15}
              height={15}
              alt=""
            />
            <span className={styles.activity_label}>Last Update Sent</span>
            <span className={styles.activity_value}>Yesterday, 8:12 PM</span>
          </li>
        </ul>
      </div>


      <div className={styles.workload_container}>
        <span className={styles.workload_title}>Workload Settings</span>
        <div className={styles.workload}>
          <div className={styles.workload_item}>
            <span className={styles.workload_label}>Project Capacity</span>
            <div className={styles.counter}>
              <button onClick={() => {
                if (counter >= 0) {
                  setCounter(counter--);
                }
              }}>
                <Image
                  src={ICONS.decrease}
                  width={15}
                  height={15}
                  alt=""
                />
              </button>
              <span>{counter}</span>
              <button onClick={() => {
                if (counter <= 10) {
                  setCounter(counter++);
                }
              }}>
                <Image
                  src={ICONS.increase}
                  width={15}
                  height={15}
                  alt=""
                />
              </button>
            </div>
          </div>


          <div className={styles.workload_item}>
            <span className={styles.workload_label}>Skillset</span>
            <div className={styles.skillset_container}>
              <input type="text" name="skillset" onKeyDown={(event) => {
                console.log(event.currentTarget.value);
                if (event.code === "Enter") {
                  // setSkills((prev) => [...prev, event.currentTarget.value]);
                }
              }} />
              <input type="hidden" defaultValue={skills} />
              <div className={styles.skills_list}>
                {skills.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.projects_container}>
        <span className={styles.projects_title}>
          <span className={styles.projects_counter}>1</span>
          <span className={styles.title_label}>Assigned Projects</span>
        </span>
        <ul className={styles.projects_list}>
          <li>
            <span className={styles.list_name}>Project Name</span>
            <div>
              <select className={styles.user_role}>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
              <input className={styles.list_action} type="checkbox" name="" />
            </div>
          </li>
          <li>
            <span>Project Name</span>
            <div>
              <select className={styles.user_role}>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
              <input type="checkbox" name="" />
            </div>
          </li>
          <li>
            <span>Project Name</span>
            <div>
              <select className={styles.user_role}>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
              <input type="checkbox" name="" />
            </div>
          </li>
          <li>
            <span>Project Name</span>
            <div>
              <select className={styles.user_role}>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
              <input type="checkbox" name="" />
            </div>
          </li>
          <li>
            <span>Project Name</span>
            <div>
              <select className={styles.user_role}>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
              <input type="checkbox" name="" />
            </div>
          </li>
          <li>
            <span>Project Name</span>
            <div>
              <select className={styles.user_role}>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
              <input type="checkbox" name="" />
            </div>
          </li>
          <li>
            <span>Project Name</span>
            <div>
              <select className={styles.user_role}>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
              <input type="checkbox" name="" />
            </div>
          </li>
          <li>
            <span>Project Name</span>
            <div>
              <select className={styles.user_role}>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
              <input type="checkbox" name="" />
            </div>
          </li>
          <li>
            <span>Project Name</span>
            <div>
              <select className={styles.user_role}>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
              <input type="checkbox" name="" />
            </div>
          </li>
          <li>
            <span>Project Name</span>
            <div>
              <select className={styles.user_role}>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
              <input type="checkbox" name="" />
            </div>
          </li>
          <li>
            <span>Project Name</span>
            <div>
              <select className={styles.user_role}>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
              <input type="checkbox" name="" />
            </div>
          </li>
        </ul>
      </div>

    </form>
  )
}