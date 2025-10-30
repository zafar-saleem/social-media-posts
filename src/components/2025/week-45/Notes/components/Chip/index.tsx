import styles from "../../Note.module.css";
import { TypeItem } from "../../types";
import { Chip } from "./components";

export const ChipContainer = ({ ...item }: TypeItem) => {
  return (
    <>
      <Chip {...item} type="time" />
      <Chip {...item} type="status" />
    </>
  )
}
