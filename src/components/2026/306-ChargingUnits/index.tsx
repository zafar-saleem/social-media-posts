import Link from "next/link";
import styles from "./styles.module.css";

const UNITS_DATA = {
  units: {
    total_units: 10,
    available_units: 8,
    online_units: 10,
  },
  chargers: {
    total_chargers: 24,
    available: {
      value: 12,
      chart: 50,
      color: "rgb(73 215 135)",
      label: "Available",
    },
    occupied: {
      value: 6,
      chart: 25,
      label: "Occupied",
      color: "rgb(237 179 63)",
    },
    charging:  {
      value: 2,
      chart: 8.33,
      label: "Charging",
      color: "rgb(59 173 236)",
    },
    charged: {
      value: 2,
      chart: 8.33,
      label: "Charged",
      color: "rgb(135 104 233)",
    },
    unavailable: {
      value: 1,
      chart: 4.16,
      label: "Unavailable",
      color: "rgb(214 214 214)",
    },
    faulted: {
      value: 1,
      chart: 4.16,
      label: "Faulted",
      color: "rgb(228 77 75)",
    },
  }
}

export const ChargingUnits = () => {
  return (
    <div className={styles.units}>
      <div className={styles.units_header}>
        <h1 className={styles.header_title}>Charging units</h1>
        <Link href="#" className={styles.header_link}>View units</Link>
      </div>



      <div className={styles.units_box}>
        <h2 className={styles.box_title}>{UNITS_DATA.units.total_units} <span className={styles.text}>Units</span></h2>
        <div className={styles.box_available}>
          <div
            className={styles.available_bar}
            style={{
              "--available_w": `${UNITS_DATA.units.available_units * 10}%`,
              "--unavailable_w": `${(UNITS_DATA.units.total_units - UNITS_DATA.units.available_units) * 10}%`,
            }}
          />
          <div className={styles.bar_labels}>
            <span>{UNITS_DATA.units.available_units} Available</span>
            <span>{UNITS_DATA.units.total_units - UNITS_DATA.units.available_units} Unavailable</span>
          </div>
        </div>
        
        
        
        
        <div className={styles.box_available}>
          <div
            className={styles.available_bar}
            style={{
              "--available_w": `${UNITS_DATA.units.online_units * 10}%`,
              "--unavailable_w": `${(UNITS_DATA.units.total_units - UNITS_DATA.units.online_units) * 10}%`,
            }}
          />
          <div className={styles.bar_labels}>
            <span>{UNITS_DATA.units.online_units} Online</span>
            <span>{UNITS_DATA.units.total_units - UNITS_DATA.units.online_units} Offline</span>
          </div>
        </div>





      </div>





      <div className={styles.units_chart}>
        <div
          className={styles.chart_pie}
          style={{
            "--av-color": UNITS_DATA.chargers.available.color,
            "--av-angle": `${UNITS_DATA.chargers.available.chart}%`,
            "--oc-color": UNITS_DATA.chargers.occupied.color,
            "--oc-angle": `${UNITS_DATA.chargers.occupied.chart}%`,
            "--ch-color": UNITS_DATA.chargers.charging.color,
            "--ch-angle": `${UNITS_DATA.chargers.charging.chart}%`,
            "--cd-color": UNITS_DATA.chargers.charged.color,
            "--cd-angle": `${UNITS_DATA.chargers.charged.chart}%`,
            "--un-color": UNITS_DATA.chargers.unavailable.color,
            "--un-angle": `${UNITS_DATA.chargers.unavailable.chart}%`,
            "--fa-color": UNITS_DATA.chargers.faulted.color,
            "--fa-angle": `${UNITS_DATA.chargers.faulted.chart}%`,
          }}
        >
          <span className={styles.large}>{UNITS_DATA.chargers.total_chargers}</span>
          <span className={styles.text}>Chargers</span>
        </div>
        <ul className={styles.units_charger}>
          <li className={styles.charger}>
            <div className={styles.charger_color} style={{ "--color": UNITS_DATA.chargers.available.color }} />
            <span className={styles.charger_label}>{UNITS_DATA.chargers.available.label}</span>
            <span className={styles.charger_value}>{UNITS_DATA.chargers.available.value}</span>
          </li>
          <li className={styles.charger}>
            <div className={styles.charger_color} style={{ "--color": UNITS_DATA.chargers.occupied.color }} />
            <span className={styles.charger_label}>{UNITS_DATA.chargers.occupied.label}</span>
            <span className={styles.charger_value}>{UNITS_DATA.chargers.occupied.value}</span>
          </li>
          <li className={styles.charger}>
            <div className={styles.charger_color} style={{ "--color": UNITS_DATA.chargers.charging.color }} />
            <span className={styles.charger_label}>{UNITS_DATA.chargers.charging.label}</span>
            <span className={styles.charger_value}>{UNITS_DATA.chargers.charging.value}</span>
          </li>
          <li className={styles.charger}>
            <div className={styles.charger_color} style={{ "--color": UNITS_DATA.chargers.charged.color }} />
            <span className={styles.charger_label}>{UNITS_DATA.chargers.charged.label}</span>
            <span className={styles.charger_value}>{UNITS_DATA.chargers.charged.value}</span>
          </li>
          <li className={styles.charger}>
            <div className={styles.charger_color} style={{ "--color": UNITS_DATA.chargers.unavailable.color }} />
            <span className={styles.charger_label}>{UNITS_DATA.chargers.unavailable.label}</span>
            <span className={styles.charger_value}>{UNITS_DATA.chargers.unavailable.value}</span>
          </li>
          <li className={styles.charger}>
            <div className={styles.charger_color} style={{ "--color": UNITS_DATA.chargers.faulted.color }} />
            <span className={styles.charger_label}>{UNITS_DATA.chargers.faulted.label}</span>
            <span className={styles.charger_value}>{UNITS_DATA.chargers.faulted.value}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}