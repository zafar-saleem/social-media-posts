import styles from "./Filters.module.css";

export const Filters = () => {
  return (
    <form className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Filter</h1>
        <button className={styles.button_close}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </header>
      <section>
        <label className={styles.form_group}>
          <span className={styles.group_label}>Data source</span>
          <input type="text" placeholder="Search for data sources..." className={styles.input} />
        </label>
        <div className={styles.form_group}>
          <span className={styles.group_label}>Node type</span>
          <div>
          <label>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-input-icon lucide-folder-input"><path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"/><path d="M2 13h10"/><path d="m9 16 3-3-3-3"/></svg>
            <span className={styles.label}>Input</span>
            <input type="checkbox" name="node_type" />
          </label>
          <label>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-output-icon lucide-file-output"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"/><path d="M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"/><path d="m5 11-3 3"/><path d="m5 17-3-3h10"/></svg>
            <span className={styles.label}>Output</span>
            <input type="checkbox" name="node_type" />
          </label>
          <label>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-terminal-icon lucide-square-terminal"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
            <span className={styles.label}>LLM Prompt</span>
            <input type="checkbox" name="node_type" />
          </label>
          <label>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic-vocal-icon lucide-mic-vocal"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"/><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"/><circle cx="16" cy="7" r="5"/></svg>
            <span className={styles.label}>Voice AI</span>
            <input type="checkbox" name="node_type" />
          </label>
          <label>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hat-glasses-icon lucide-hat-glasses"><path d="M14 18a2 2 0 0 0-4 0"/><path d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"/><path d="M2 11h20"/><circle cx="17" cy="18" r="3"/><circle cx="7" cy="18" r="3"/></svg>
            <span className={styles.label}>Agent</span>
            <input type="checkbox" name="node_type" />
          </label>
          <label>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-library-big-icon lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>
            <span className={styles.label}>Knowledge</span>
            <input type="checkbox" name="node_type" />
          </label>
          <label>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate3d-icon lucide-rotate-3d"><path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"/><path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"/></svg>
            <span className={styles.label}>Transform</span>
            <input type="checkbox" name="node_type" />
          </label>
          <label>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scan-eye-icon lucide-scan-eye"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="1"/><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/></svg>
            <span className={styles.label}>Logic</span>
            <input type="checkbox" name="node_type" />
          </label>
          <label>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-cog-icon lucide-monitor-cog"><path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/></svg>
            <span className={styles.label}>System</span>
            <input type="checkbox" name="node_type" />
          </label>
          </div>
        </div>
        <div className={styles.form_group}>
          <span className={styles.group_label}>AI Capabilities</span>
          <label>
            <span className="">Uses LLM</span>
            <input type="checkbox" />
          </label>
          <label>
            <span className="">Uses External APIs</span>
            <input type="checkbox" />
          </label>
          <label>
            <span className="">Uses Embeddings</span>
            <input type="checkbox" />
          </label>
        </div>
      </section>
      <footer className={styles.footer}>
        <button>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-save-icon lucide-save"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
          <span>Save as preset</span>
        </button>
        <button>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hard-drive-download-icon lucide-hard-drive-download"><path d="M12 2v8"/><path d="m16 6-4 4-4-4"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h.01"/><path d="M10 18h.01"/></svg>
          <span>Load preset</span>
        </button>
        <button>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eraser-icon lucide-eraser"><path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"/><path d="m5.082 11.09 8.828 8.828"/></svg>
          <span>Clear All</span>
        </button>
      </footer>
    </form>
  )
}
