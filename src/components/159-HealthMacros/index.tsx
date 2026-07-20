import Link from "next/link";
import styles from "./styles.module.css";

export const HealthMacros = async () => {
  const data = await import("./data.json", {
    with: {
      type: "json",
    }
  });

  return (
    <section className={styles.container}>
      <label className={styles.button}>
        <input type="checkbox" />
        <span className={styles.button_label}>Today's Macros</span>
        <section className={styles.macros}>
          <header className={styles.header}>
            <span className={styles.title}>Today's Target Macros</span>
            <Link href="#" className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(36 36 36)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
          </header>
          <main className={styles.contents}>
            <div
              className={styles.macros_pie}
              style={{
                "--cal-progress": `${data.cals.consumed / data.cals.total * 100}%`
              }}>
              <svg width="24" height="24" viewBox="0 0 20 20" fill="rgb(240 80 47)" stroke="none" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame-kindling-icon lucide-flame-kindling"><path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"/><path d="m5 22 14-4"/><path d="m5 18 14 4"/></svg>
              <h3 className={styles.pie_label}>{data.cals.consumed} cal</h3>
              <span className={styles.support_text}>of 2000 cal</span>
            </div>
          </main>
          <footer className={styles.footer}>
            {
              data.items.map((item, index) => (
                <div
                  className={styles.box}
                  key={index}
                >
                  <span
                    className={styles.box_bar}
                    style={{
                      "--progress": `${item.consumed / item.total * 100}%`
                    }}
                  />
                  <div className={styles.box_labels}>
                    <span className={styles.label_text}>{item.label}</span>
                    <span className={styles.states}>
                      <span>{item.consumed}</span> / <span>{item.total}{item.unit}</span>
                    </span>
                  </div>
                </div>
              ))
            }
          </footer>
        </section>
      </label>
    </section>
  )
}
