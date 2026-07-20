import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const data = {
  id: 1,
  title: "urban luxury penthouse",
  subtitle: "(3 bed 3 bath)",
  address: "1644 Nanton Ave, NY, US",
  ratings: {
    value: 4.97,
    reviews: 210,
  },
  image: {
    src: "https://images.pexels.com/photos/33575697/pexels-photo-33575697.jpeg",
    width: 3000,
    height: 3000,
    alt: "",
  },
  images: [
    {
      src: "https://images.pexels.com/photos/12720671/pexels-photo-12720671.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
    },
    {
      src: "https://images.pexels.com/photos/2294125/pexels-photo-2294125.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
    },
    {
      src: "https://images.pexels.com/photos/28962897/pexels-photo-28962897.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
    },
    {
      src: "https://images.pexels.com/photos/35069536/pexels-photo-35069536.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
    },
    {
      src: "https://images.pexels.com/photos/33575697/pexels-photo-33575697.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
    },
    {
      src: "https://images.pexels.com/photos/13194252/pexels-photo-13194252.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
    },
    {
      src: "https://images.pexels.com/photos/33976205/pexels-photo-33976205.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
    },
  ],
  about: "Stunning New York Penthouse featuring 3 bedrooms, 3 bathrooms and panaromic city skyviews, blending modern luxury with sophisticated living.",
  features: [
    {
      label: "Sleeps 6",
      value: 6,
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(217 217 217)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>,
    },
    {
      label: "3 Bed",
      value: 3,
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(217 217 217)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed-double-icon lucide-bed-double"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></svg>,
    },
    {
      label: "3 Bath",
      value: 3,
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(217 217 217)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shower-head-icon lucide-shower-head"><path d="m4 4 2.5 2.5"/><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"/><path d="M15 5 5 15"/><path d="M14 17v.01"/><path d="M10 16v.01"/><path d="M13 13v.01"/><path d="M16 10v.01"/><path d="M11 20v.01"/><path d="M17 14v.01"/><path d="M20 11v.01"/></svg>,
    },
    {
      label: "2200 sqft",
      value: 2200,
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(217 217 217)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-ruler-icon lucide-pencil-ruler"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>,
    },
  ],
  ameneties: [
    {
      label: "free wifi",
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi-icon lucide-wifi"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>,
    },
    {
      label: "fireplace",
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heater-icon lucide-heater"><path d="M11 8c2-3-2-3 0-6"/><path d="M15.5 8c2-3-2-3 0-6"/><path d="M6 10h.01"/><path d="M6 14h.01"/><path d="M10 16v-4"/><path d="M14 16v-4"/><path d="M18 16v-4"/><path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"/><path d="M5 20v2"/><path d="M19 20v2"/></svg>,
    },
    {
      label: "parking",
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-parking-meter-icon lucide-parking-meter"><path d="M11 15h2"/><path d="M12 12v3"/><path d="M12 19v3"/><path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"/><path d="M9 9a3 3 0 1 1 6 0"/></svg>,
    },
    {
      label: "city views",
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2-icon lucide-building-2"><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>,
    },
  ]
}

export const Booking = () => {
  return (
    <section className={styles.booking}>
      <header className={`${styles.uppercase} ${styles.booking_header}`}>
        <h1 className={styles.header_title}>{data.title} <span className={`${styles.secondary_text} ${styles.header_subtitle}`}>{data.subtitle}</span></h1>
        <span className={`${styles.ter_text} ${styles.header_address}`}>{data.address}</span>
        <div className={`${styles.ter_text} ${styles.header_ratings}`}>
          <span className={styles.ratings_label}>Rating</span> <span className={styles.ratings_value}>({data.ratings.value} reviews)</span>
        </div>
      </header>



      <main className={styles.booking_contents}>
        <div className={styles.contents}>
          <Image
            src={data.image.src}
            width={data.image.width}
            height={data.image.height}
            alt={data.image.alt}
            className={styles.contents_image}
          />
          <div className={styles.contents_info}>
            <h2 className={styles.info_about}>About Property</h2>
            <div className={styles.features_list}>
              {
                data.features.map((feature, index) => (
                  <div key={index} className={`${styles.secondary_text} ${styles.feature}`}>
                    {feature.icon}
                    <span>{feature.label}</span>
                  </div>
                ))
              }
            </div>
            <p className={`${styles.contents_text} ${styles.secondary_text}`}>{data.about}</p>
            <div>
              <Link href="#" className={`${styles.more_link} ${styles.secondary_text}`}>
                <span>More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>




          <div className={styles.controls}>
            <div className={styles.price}>
              <span className={styles.currency}>$</span>
              <span className={styles.amount}>1280</span>
              <span className={`${styles.secondary_text} ${styles.price_info}`}>Tax included</span>
            </div>
            <button className={styles.button_edit}>Edit Trip</button>
            <div className={`${styles.secondary_text} ${styles.guests}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(95 95 95)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
              <span>6 guests</span>
            </div>
            <span className={`${styles.secondary_text} ${styles.reservation_dates}`}>Dec 9 - Dec 12</span>
            <span className={`${styles.secondary_text} ${styles.cancellation}`}>No cancellation</span>
            <div className={styles.reserve}>
              <Link href="#" className={`${styles.secondary_text} ${styles.button_reserve}`}>Reserve</Link>
            </div>
          </div>





        </div>
        <aside className={styles.aside}>
          {
            data.images.map((image, index) => (
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt=""
                key={index}
              />
            ))
          }
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12445.184912457384!2d-9.245302749999999!3d38.7569092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spt!4v1769414061179!5m2!1sen!2spt"
            width="100%" height="100px"
            styles={{ border: "none" }} allowFullScreen=""
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className={styles.location}>
          </iframe>
          <div className={styles.aside_ameneties}>
            <Link href="#" className={`${styles.link} ${styles.secondary_text}`}>Amenities ({data.ameneties.length})</Link>
            {
              data.ameneties.map((item, index) => (
                <div key={index} className={`${styles.secondary_text} ${styles.amenety}`}>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))
            }
          </div>
        </aside>
      </main>
    </section>
  )
}