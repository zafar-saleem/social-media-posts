import React from "react";
import { EVENTS } from "../../../../data";
import styles from "./styles.module.css";
import Link from "next/link";
import { truncateText } from "../../../../utils";
import { Tooltip } from "../../../Tooltip";

export const EventChip = ({ timeformat }) => {
  const currentHour = new Date().getTime();

  return (
    <>
      {
        EVENTS.map((task, i) => (
          <React.Fragment key={i}>
            {
              (
                new Date(task.time).getHours() === Number(timeformat) && 
                new Date(task.date).getDate() === new Date().getDate()
              ) && <>
                <Link
                  href={task.href}
                  className={`
                    ${styles.chip}
                    ${styles[task.priority]}
                    ${task.time < currentHour && styles.past}
                    ${(currentHour > task.time && currentHour < task?.endTime) ? styles.pulse : ""}
                  `}
                  key={i}
                  style={{
                    "--bottom-pos": `${i}rem`,
                    "--anchor-name": `--chip-${i}`,
                    "--chip-width": 2,
                  }}>
                    {truncateText(task.title, 8)}
                </Link>
                <Tooltip data={task} positionAnchor={`--chip-${i}`} />
              </>
            }
          </React.Fragment>
        ))
      }
    </>
  )
}
