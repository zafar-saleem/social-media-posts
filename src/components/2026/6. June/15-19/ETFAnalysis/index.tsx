import styles from "./styles.module.css";
import { WorldMap } from "./WorldMap";
import { ETF_ANALYSIS } from "./data";

export const ETFAnalysis = () => {
  return (
    <div className={styles.etf_analysis}>
      <h1 className={styles.analysis_title}>Countries</h1>
      <WorldMap data={ETF_ANALYSIS} />
      <Tooltips tooltip={ETF_ANALYSIS.trending_countries} />
      <AnalysisTable trending={ETF_ANALYSIS.trending_countries} />
    </div>
  )
}

const Tooltips = ({ tooltip }) => {
  return (
    <div className={styles.tooltips}>
      <Tooltip tooltip={tooltip} country="united_states" />
      <Tooltip tooltip={tooltip} country="japan" />
      <Tooltip tooltip={tooltip} country="united_kingdom" />
      <Tooltip tooltip={tooltip} country="canada" />
      <Tooltip tooltip={tooltip} country="switzerland" />
      <Tooltip tooltip={tooltip} country="france" />
      <Tooltip tooltip={tooltip} country="germany" />
      <Tooltip tooltip={tooltip} country="australia" />
      <Tooltip tooltip={tooltip} country="ireland" />
      <Tooltip tooltip={tooltip} country="other" />
    </div>
  )
}

const Tooltip = ({ tooltip, country }) => {
  return (
    <div className={`${styles.tooltip} ${styles[country]}`}>
      <table>
        <thead>
          <tr>
            <th>Volatility</th>
            <th>Expense Ratio</th>
            <th>Sharpe Ratio</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tooltip[country].volatility}</td>
            <td>{tooltip[country].expense_ratio}</td>
            <td>{tooltip[country].sharpe_ration}</td>
            <td>{tooltip[country].volume}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const AnalysisTable = ({ trending }) => {
  return (
    <div className={styles.analysis_table}>
      <div className={styles.table_column}>
        <TableRow
          country={ETF_ANALYSIS.trending_countries.united_states}
        />
        <TableRow
          country={ETF_ANALYSIS.trending_countries.japan}
        />
        <TableRow
          country={ETF_ANALYSIS.trending_countries.united_kingdom}
        />
        <TableRow
          country={ETF_ANALYSIS.trending_countries.canada}
        />
        <TableRow
          country={ETF_ANALYSIS.trending_countries.switzerland}
        />
      </div>
      <div className={styles.table_column}>
        <TableRow
          country={ETF_ANALYSIS.trending_countries.france}
        />
        <TableRow
          country={ETF_ANALYSIS.trending_countries.germany}
        />
        <TableRow
          country={ETF_ANALYSIS.trending_countries.australia}
        />
        <TableRow
          country={ETF_ANALYSIS.trending_countries.ireland}
        />
        <TableRow
          country={ETF_ANALYSIS.trending_countries.other}
        />
      </div>
    </div>
  )
}

const TableRow = ({ ...props }) => {
  return (
    <div className={`${styles.table_row} ${styles[props.country.label.split(" ").join("_")]}`} style={{ "--width": props.country.value }}>
      <div className={styles.column_flag}>{props.country.flag}</div>
      <div>
        <span className={styles.column_label}>{props.country.label}</span>
        <span className={styles.column_value}>{props.country.value}</span>
      </div>
    </div>
  )
}
