import styles from "./actions.module.css";

export const Actions = () => {
  return (
    <div className={styles.table_container}>
      <div className={styles.table_header}>
        <button className={`${styles.button} button_two`}>
          <div>
            <span>+</span> <span>Add</span> <span>Contact</span>
          </div>
          <div>
            <span>+</span> <span>Add</span> <span>Contact</span>
          </div>
        </button>
      </div>
      <div className={styles.table_title}>Contacts</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Listing</th>
            <th>Last contacted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem Ipsum</td>
            <td>Lisboa</td>
            <td>Luxury Villas</td>
            <td>
              <span className={styles.date}>10 Jul, 2025</span>
              <span className={styles.actions}>
                <button popoverTarget="popover_edit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil">
                    <path className={styles.icon_edit} d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
                    <path className={styles.icon_edit} d="m15 5 4 4"/>
                  </svg>
                  <span className={styles.popover}>Edit</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-archive-icon lucide-archive">
                    <rect className={styles.icon_top} width="20" height="5" x="2" y="3" rx="1"/>
                    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/>
                    <path d="M10 12h4"/>
                  </svg>
                  <span className={styles.popover}>Archive</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip-icon lucide-paperclip">
                    <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>
                  </svg>
                  <span className={styles.popover}>Attachment</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers-icon lucide-layers">
                    <path className={`${styles.icon_copy} ${styles.icon_copy_top}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                    <path className={`${styles.icon_copy} ${styles.icon_copy_middle}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                    <path className={`${styles.icon_copy} ${styles.icon_copy_bottom}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                  </svg>
                  <span className={styles.popover}>Copy link</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(144 33 57)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2">
                    <path d="M10 11v6"/>
                    <path d="M14 11v6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>

                    <path className={styles.trash} d="M8 -3v1"/>
                    <path className={styles.trash} d="M9 -5v1"/>
                    <path className={styles.trash} d="M12 -2v1"/>
                    <path className={styles.trash} d="M14 -6v1"/>

                    <path className={styles.icon_trash} d="M3 6h18"/>
                    <path className={styles.icon_trash} d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg>
                  <span className={styles.popover}>Delete</span>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td>Dolor Sit</td>
            <td>Porto</td>
            <td>Bayview Loft</td>
            <td>
              <span className={styles.date}>17 Aug, 2025</span>
              <span className={styles.actions}>
                <button popoverTarget="popover_edit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil">
                    <path className={styles.icon_edit} d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
                    <path className={styles.icon_edit} d="m15 5 4 4"/>
                  </svg>
                  <span className={styles.popover}>Edit</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-archive-icon lucide-archive">
                    <rect className={styles.icon_top} width="20" height="5" x="2" y="3" rx="1"/>
                    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/>
                    <path d="M10 12h4"/>
                  </svg>
                  <span className={styles.popover}>Archive</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip-icon lucide-paperclip">
                    <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>
                  </svg>
                  <span className={styles.popover}>Attachment</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers-icon lucide-layers">
                    <path className={`${styles.icon_copy} ${styles.icon_copy_top}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                    <path className={`${styles.icon_copy} ${styles.icon_copy_middle}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                    <path className={`${styles.icon_copy} ${styles.icon_copy_bottom}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                  </svg>
                  <span className={styles.popover}>Copy link</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(144 33 57)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2">
                    <path d="M10 11v6"/>
                    <path d="M14 11v6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>

                    <path className={styles.trash} d="M8 -3v1"/>
                    <path className={styles.trash} d="M9 -5v1"/>
                    <path className={styles.trash} d="M12 -2v1"/>
                    <path className={styles.trash} d="M14 -6v1"/>

                    <path className={styles.icon_trash} d="M3 6h18"/>
                    <path className={styles.icon_trash} d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg>
                  <span className={styles.popover}>Delete</span>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td>Amet Consectetur</td>
            <td>Coimbra</td>
            <td>Farmhouse</td>
            <td>
              <span className={styles.date}>14 Oct, 2025</span>
              <span className={styles.actions}>
                <button popoverTarget="popover_edit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil">
                    <path className={styles.icon_edit} d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
                    <path className={styles.icon_edit} d="m15 5 4 4"/>
                  </svg>
                  <span className={styles.popover}>Edit</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-archive-icon lucide-archive">
                    <rect className={styles.icon_top} width="20" height="5" x="2" y="3" rx="1"/>
                    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/>
                    <path d="M10 12h4"/>
                  </svg>
                  <span className={styles.popover}>Archive</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip-icon lucide-paperclip">
                    <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>
                  </svg>
                  <span className={styles.popover}>Attachment</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers-icon lucide-layers">
                    <path className={`${styles.icon_copy} ${styles.icon_copy_top}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                    <path className={`${styles.icon_copy} ${styles.icon_copy_middle}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                    <path className={`${styles.icon_copy} ${styles.icon_copy_bottom}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                  </svg>
                  <span className={styles.popover}>Copy link</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(144 33 57)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2">
                    <path d="M10 11v6"/>
                    <path d="M14 11v6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>

                    <path className={styles.trash} d="M8 -3v1"/>
                    <path className={styles.trash} d="M9 -5v1"/>
                    <path className={styles.trash} d="M12 -2v1"/>
                    <path className={styles.trash} d="M14 -6v1"/>

                    <path className={styles.icon_trash} d="M3 6h18"/>
                    <path className={styles.icon_trash} d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg>
                  <span className={styles.popover}>Delete</span>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className={styles.last_first_cell}>Adipisicing Elit</td>
            <td>Lisboa</td>
            <td>Woodlands</td>
            <td className={styles.last_cell}>
              <span className={styles.date}>13 Sep, 2025</span>
              <span className={styles.actions}>
                <button popoverTarget="popover_edit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil">
                    <path className={styles.icon_edit} d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
                    <path className={styles.icon_edit} d="m15 5 4 4"/>
                  </svg>
                  <span className={styles.popover}>Edit</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-archive-icon lucide-archive">
                    <rect className={styles.icon_top} width="20" height="5" x="2" y="3" rx="1"/>
                    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/>
                    <path d="M10 12h4"/>
                  </svg>
                  <span className={styles.popover}>Archive</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip-icon lucide-paperclip">
                    <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>
                  </svg>
                  <span className={styles.popover}>Attachment</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" stroke="rgb(105 105 108)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers-icon lucide-layers">
                    <path className={`${styles.icon_copy} ${styles.icon_copy_top}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                    <path className={`${styles.icon_copy} ${styles.icon_copy_middle}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                    <path className={`${styles.icon_copy} ${styles.icon_copy_bottom}`} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
                  </svg>
                  <span className={styles.popover}>Copy link</span>
                </button>
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(144 33 57)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2">
                    <path d="M10 11v6"/>
                    <path d="M14 11v6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>

                    <path className={styles.trash} d="M8 -3v1"/>
                    <path className={styles.trash} d="M9 -5v1"/>
                    <path className={styles.trash} d="M12 -2v1"/>
                    <path className={styles.trash} d="M14 -6v1"/>

                    <path className={styles.icon_trash} d="M3 6h18"/>
                    <path className={styles.icon_trash} d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg>
                  <span className={styles.popover}>Delete</span>
                </button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
   </div>
  )
}
