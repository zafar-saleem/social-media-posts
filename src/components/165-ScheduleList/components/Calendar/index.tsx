import { CalendarDaysLabels } from "./components/CalendarDaysLabels";
import { DaysInMonth } from "./components/DaysInMonth";

export const Calendar = () => {
  return (
    <section>
      <CalendarDaysLabels />
      <DaysInMonth />
    </section>
  )
}
