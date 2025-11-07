import styles from "../../styles.module.css";

export const Dropdown = ({ setTeamName }: { setTeamName: (args: any) => void }) => {
  return (
    <select
      className={styles.contents_dropdown}
      onChange={(event) => setTeamName(event?.target.value)}
    >
        <option value={`product`}>Product Team</option>
        <option value={`engineering`}>Engineering Team</option>
        <option value={`design`}>Design Team</option>
        <option value={`ux`}>UX Team</option>
        <option value={`data`}>Data Team</option>
        <option value={`business`}>Business Team</option>
    </select>
  )
}