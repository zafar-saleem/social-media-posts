import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

// https://images.pexels.com/photos/33575697/pexels-photo-33575697.jpeg

export const PropertyCard = () => {
  return (
    <div className={styles.card}>
      <span className={`${styles.absolute} ${styles.location}`}>
        Frosted Valley Estate, Norway
      </span>
      <Image
        src="https://images.pexels.com/photos/33575697/pexels-photo-33575697.jpeg"
        width={3000}
        height={3000}
        alt=""
        className={styles.media}
      />
      <div className={styles.property_features}>
        <span className={styles.title}>Property Features</span>
        <ul className={styles.features_list}>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi-icon lucide-wifi"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>
            <span className={styles.label}>Wifi</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2-icon lucide-building-2"><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>
            <span className={styles.label}>City Skyline Views</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brick-wall-fire-icon lucide-brick-wall-fire"><path d="M16 3v2.107"/><path d="M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"/><path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938"/><path d="M3 15h5.253"/><path d="M3 9h8.228"/><path d="M8 15v6"/><path d="M8 3v6"/></svg>
            <span className={styles.label}>Outdoor Patio</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-ladder-icon lucide-waves-ladder"><path d="M19 5a2 2 0 0 0-2 2v11"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M7 13h10"/><path d="M7 9h10"/><path d="M9 5a2 2 0 0 0-2 2v11"/></svg>
            <span className={styles.label}>Outdoor Pool</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-parking-icon lucide-circle-parking"><circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>
            <span className={styles.label}>Free Parking</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heater-icon lucide-heater"><path d="M11 8c2-3-2-3 0-6"/><path d="M15.5 8c2-3-2-3 0-6"/><path d="M6 10h.01"/><path d="M6 14h.01"/><path d="M10 16v-4"/><path d="M14 16v-4"/><path d="M18 16v-4"/><path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"/><path d="M5 20v2"/><path d="M19 20v2"/></svg>
            <span className={styles.label}>Indoor Fireplace</span>
          </li>
        </ul>


        <Link href="#" className={styles.button}>
          <span>View all 24 features</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
  )
}