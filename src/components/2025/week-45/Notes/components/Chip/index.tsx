import styles from "../../Note.module.css";
import { Chip } from "./components";

export const ChipContainer = ({ item }) => {
  return (
    <>
      <Chip item={item} type="time" />
      <Chip item={item} type="status" />
    </>
  )
}
