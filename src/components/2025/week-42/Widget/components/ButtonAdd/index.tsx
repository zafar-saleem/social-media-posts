import styles from "../../Widget.module.css";
import { setYAxis, scaleValues } from "../../utils";

export type ButtonProps = {
  index: number;
}

export const ButtonAdd = ({ index }: ButtonProps) => {
  return (
    <button
      className={styles.button_add}
      style={{
        "--zIndex": 1,
        "--positionY": `${setYAxis(index + 0.85)}rem`,
        "--scale": scaleValues[index + 1],
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
    </button>
  )
}