import styles from "./styles.module.css";
import { SEATS_DATA } from "./data";

export const AirlineSeatSelection = () => {
  return (
    <div className={styles.seats}>
      <h1 className={styles.title}>Seat Selection</h1>
      <div className={styles.box}>
        <div className={styles.group}>
          <span className={styles.text_large}>JFK</span>
          <span className={styles.text_secondary}>New York</span>
          <div className={styles.pill}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(187 186 193)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-clock9-icon lucide-clock-9"><circle cx="12" cy="12" r="10"/><path d="M12 6v6H8"/></svg>
            <span className={styles.text}>13:12</span>
          </div>
        </div>


        <div className={styles.group}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(141 141 149)" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-plane-icon lucide-plane"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
          <span className={`${styles.text_secondary} ${styles.duration}`}>6h 10m</span>
        </div>


        <div className={styles.group}>
          <span className={styles.text_large}>LAX</span>
          <span className={styles.text_secondary}>Los Angeles</span>
          <div className={styles.pill}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(187 186 193)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-clock9-icon lucide-clock-9"><circle cx="12" cy="12" r="10"/><path d="M12 6v6H8"/></svg>
            <span className={styles.text}>19:22</span>
          </div>
        </div>
      </div>








      <div className={styles.seats_list}>
        <div className={styles.header}>
          <div className={styles.block}>
            <span className={`${styles.seat_available} ${styles.seat_status}`} />
            <span className={styles.label}>Available</span>
          </div>
          <div className={styles.block}>
            <span className={`${styles.seat_premium} ${styles.seat_status}`} />
            <span className={styles.label}>Premium</span>
          </div>
          <div className={styles.block}>
            <span className={`${styles.seat_taken} ${styles.seat_status}`} />
            <span className={styles.label}>Taken</span>
          </div>
        </div>








        <div className={`${styles.seats_premium}`}>



          <div className={styles.seats_section}>
            <div className={`${styles.separator} ${styles._title_section}`}>
              <span className={styles._title}>Premium</span>
              <div className={styles.available_seats}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="rgb(175 175 179)" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-armchair-icon lucide-armchair"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
                <span>{SEATS_DATA.premium.available_seats}</span>
                <span className={styles.label}>Available</span>
              </div>
            </div>

            <div>
              <span className={styles.row_label}>1</span>
              <SEAT seats={SEATS_DATA.premium.row_one} type={`seat_premium`} />
              <span className={styles.row_label}>1</span>
            </div>
            <div>
              <span className={styles.row_label}>2</span>
              <SEAT seats={SEATS_DATA.premium.row_two} type={`seat_premium`} />
              <span className={styles.row_label}>2</span>
            </div>
            <div>
              <span className={styles.row_label}>3</span>
              <SEAT seats={SEATS_DATA.premium.row_three} type={`seat_premium`} />
              <span className={styles.row_label}>3</span>
            </div>



            <div className={`${styles.separator} ${styles.even} ${styles._title_section}`}>
              <span className={styles._title}>Extra LegRoom</span>
              <div className={styles.available_seats}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="rgb(175 175 179)" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-armchair-icon lucide-armchair"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
                <span>{SEATS_DATA.extra_room.available_seats}</span>
                <span className={styles.label}>Available</span>
              </div>
            </div>
            <div>
              <span className={styles.row_label}>4</span>
              <SEAT seats={SEATS_DATA.extra_room.row_one} type={`seat_extra`} />
              <span className={styles.row_label}>4</span>
            </div>
            <div>
              <span className={styles.row_label}>5</span>
              <SEAT seats={SEATS_DATA.extra_room.row_two} type={`seat_extra`} />
              <span className={styles.row_label}>5</span>
            </div>



            <div className={`${styles.separator} ${styles._title_section}`}>
              <span className={styles._title}>Economy</span>
              <div className={styles.available_seats}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="rgb(175 175 179)" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-armchair-icon lucide-armchair"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
                <span>{SEATS_DATA.economy.available_seats}</span>
                <span className={styles.label}>Available</span>
              </div>
            </div>
            <div>
              <span className={styles.row_label}>6</span>
              <SEAT seats={SEATS_DATA.economy.row_one} type={`seat_economy`} />
              <span className={styles.row_label}>6</span>
            </div>
            <div>
              <span className={styles.row_label}>7</span>
              <SEAT seats={SEATS_DATA.economy.row_two} type={`seat_economy`} />
              <span className={styles.row_label}>7</span>
            </div>
          </div>
        </div>







      </div>





      <button className={styles.button_confirm}>
        <span className={styles.button_label}>Confirm Selected Seat</span>
      </button>
    </div>
  )
}


const SEAT = ({ seats, type }) => {
  return (
    <>
      {
        seats.map(item => (
          <label className={
              `${styles.seat}
              ${styles[type]}
              ${styles[item.avalibility]}
              ${styles[item.ally_seat]}
            `} key={item.id}>
            {item.avalibility === "available" && <span>{item.seat}</span>}
            {
              item.avalibility === "taken" && <svg
                width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="rgb(180 180 182)"
                strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            }
            {item.avalibility === "available" && <input
              type="checkbox"
              className={styles.input} />
            }
          </label>
        ))
      }
    </>
  )
}