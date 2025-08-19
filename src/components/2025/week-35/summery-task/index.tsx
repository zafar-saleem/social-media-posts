import Link from "next/link";
import styles from "./task.module.css";

export const SummaryTask = () => {
  return (
    <div className={styles.container}>
      <header className={styles.task_header}>
        <section className={styles.header_greetings}>
          <span className={styles.greetings}>Good Morning</span>
          <span className={styles.header_name}>Zafar Saleem</span>
        </section>
        <section className={styles.header_controls}>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
          </button>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-fading-icon lucide-clock-fading"><path d="M12 2a10 10 0 0 1 7.38 16.75"/><path d="M12 6v6l4 2"/><path d="M2.5 8.875a10 10 0 0 0-.5 3"/><path d="M2.83 16a10 10 0 0 0 2.43 3.4"/><path d="M4.636 5.235a10 10 0 0 1 .891-.857"/><path d="M8.644 21.42a10 10 0 0 0 7.631-.38"/></svg>
          </button>
        </section>
        <section className={styles.header_search}>
          <span className={styles.search_icon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
          </span>
          <input type="search" className={styles.search_field} placeholder="Search" />
          <button className={styles.button_filter}>
            <span className={styles.filter_icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-filter-plus-icon lucide-list-filter-plus"><path d="M10 18h4"/><path d="M11 6H3"/><path d="M15 6h6"/><path d="M18 9V3"/><path d="M7 12h8"/></svg>
            </span>
            <span className={styles.button_label}>Filter</span>
          </button>
        </section>
      </header>
      
      
      
      
      <main className={styles.contents}>
        <button className={styles.button_refresh}>
          <span className={styles.refresh_icon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          </span>
          <span className={styles.button_label}>
            Last update Sat, 15 Mar 2025
          </span>
        </button>




        <div className={styles.task_meeting}>
          <section className={styles.meeting_title}>
            <span className={styles.meeting}>
              <span className={styles.meeting_name}>Meeting with BOD</span>
              <span className={styles.meeting_timestamp}>
                <span className={styles.timestamp_icon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(144 159 173)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                </span>
                <span className={styles.timestamp_label}>Jan 4, 2025</span>
              </span>
            </span>
            <span className={styles.meeting_control}>
              <button className={styles.join_button}>
                <span className={styles.join_icon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(99 115 130)" stroke="rgb(99 115 128)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                </span>
                <span className={styles.button_label}>Join</span>
              </button>
            </span>
          </section>
          <section className={styles.task_collaborators}>
            <div className={styles.collaborators}>
              <span />
              <span />
              <span />
            </div>
            <p className={styles.collaborator_text}>
              Collaborate with <span>
                <Link href="#">Miguel</Link>, <Link href="#">Jhon</Link>, <Link href="#">Hana</Link></span>
            </p>
          </section>
        </div>






        <div className={styles.team_members}>
          <section className={styles.section_title}>
            <span className={styles.title}>Team Members</span>
            <Link href="#" className={styles.see_action}>See all</Link>
          </section>
          <section className={styles.members_carousel}>
            <Link href="#" className={styles.member}>
              <span className={styles.avatar} />
              <span className={styles.name}>Jay</span>
            </Link>
            <Link href="#" className={styles.member}>
              <span className={styles.avatar} />
              <span className={styles.name}>Jane</span>
            </Link>
            <Link href="#" className={styles.member}>
              <span className={styles.avatar} />
              <span className={styles.name}>Sofie</span>
            </Link>
            <Link href="#" className={styles.member}>
              <span className={styles.avatar} />
              <span className={styles.name}>John</span>
            </Link>
            <Link href="#" className={styles.member}>
              <span className={styles.avatar} />
              <span className={styles.name}>Mig</span>
            </Link>
            <Link href="#" className={styles.member}>
              <span className={styles.avatar} />
              <span className={styles.name}>Jane</span>
            </Link>
            <Link href="#" className={styles.member}>
              <span className={styles.avatar} />
              <span className={styles.name}>Sofie</span>
            </Link>
            <Link href="#" className={styles.member}>
              <span className={styles.avatar} />
              <span className={styles.name}>John</span>
            </Link>
          </section>
        </div>



        <div className={styles.ticket_list}>
          <span className={styles.title}>Tickets List</span>
          <div className={styles.card_list}>
            <div className={styles.ticket_card}>
              <div className={styles.card_contents}>
                <span className={styles.title_container}>
                  <span className={styles.title}>Competitive Research</span>
                  <span className={styles.status}>
                    <span className={styles.status_progress}>In Progress</span>
                    <span className={styles.project_type}>BOD Project</span>
                  </span>
                </span>
                <span className={styles.control}>
                  <button>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                  </button>
                </span>
              </div>
              <div className={styles.meta}>
                <div className={styles.timestamp}>
                  <span className={styles.icon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    
                  </span>
                  <span>Jan 4, 2025</span>
                </div>
                <span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-icon lucide-message-square"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>
                  <span>4</span>
                </span>
                <span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  <span>2</span>
                </span>
              </div>
            </div>
            
            
            
            
            
            <div className={styles.ticket_card}>
              <div className={styles.card_contents}>
                <span className={styles.title_container}>
                  <span className={styles.title}>User Testing</span>
                  <span className={styles.status}>
                    <span className={styles.status_pending}>Pending</span>
                    <span className={styles.project_type}>BOD Project</span>
                  </span>
                </span>
                <span className={styles.control}>
                  <button>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                  </button>
                </span>
              </div>
              <div className={styles.meta}>
                <div className={styles.timestamp}>
                  <span className={styles.icon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    
                  </span>
                  <span>Jan 4, 2025</span>
                </div>
                <span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-icon lucide-message-square"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>
                  <span>4</span>
                </span>
                <span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  <span>2</span>
                </span>
              </div>
            </div>
            
            
            
            
            
            <div className={styles.ticket_card}>
              <div className={styles.card_contents}>
                <span className={styles.title_container}>
                  <span className={styles.title}>Competitive Research</span>
                  <span className={styles.status}>
                    <span className={styles.status_progress}>In Progress</span>
                    <span className={styles.project_type}>BOD Project</span>
                  </span>
                </span>
                <span className={styles.control}>
                  <button>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                  </button>
                </span>
              </div>
              <div className={styles.meta}>
                <div className={styles.timestamp}>
                  <span className={styles.icon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    
                  </span>
                  <span>Jan 4, 2025</span>
                </div>
                <span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-icon lucide-message-square"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>
                  <span>4</span>
                </span>
                <span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  <span>2</span>
                </span>
              </div>
            </div>
            
            
            
            
            <div className={styles.ticket_card}>
              <div className={styles.card_contents}>
                <span className={styles.title_container}>
                  <span className={styles.title}>Competitive Research</span>
                  <span className={styles.status}>
                    <span className={styles.status_progress}>In Progress</span>
                    <span className={styles.project_type}>BOD Project</span>
                  </span>
                </span>
                <span className={styles.control}>
                  <button>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                  </button>
                </span>
              </div>
              <div className={styles.meta}>
                <div className={styles.timestamp}>
                  <span className={styles.icon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    
                  </span>
                  <span>Jan 4, 2025</span>
                </div>
                <span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-icon lucide-message-square"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>
                  <span>4</span>
                </span>
                <span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 128)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  <span>2</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>



      <footer>
        <button className={`button_three ${styles.button}`}>+ Create New Meeting</button>
      </footer>
    </div>
  )
}