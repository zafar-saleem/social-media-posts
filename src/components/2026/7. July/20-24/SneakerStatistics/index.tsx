import styles from "./styles.module.css";
import sneakers from "./assets/sneaker.png";
import Link from "next/link";
import Image from "next/image";

 export const SneakerStatistics = () => {
  return (
    <div className={styles.stats}>
      <span className={styles.stats_pill}>New Arrivals</span>
      <h1 className={styles.stats_title}>Find your perfect sneaker</h1>
      <p className={styles.stats_copy}>
        Discover the latest and most exclusive sneakers from top brands. Whether you're a sneakerhead or just looking for the perfect everyday kicks, we've got you covered. Shop now and step up your style!
      </p>
      <Link href="#" className={styles.stats_button}>
        Explore Shoes
      </Link>
      <Image
        src={sneakers}
        width={1000}
        height={1000}
        alt=""
        className={styles.stats_media}
      />
      <div className={styles.stats_trust}>
        <p className={styles.box}>
          <img
            width={44}
            height={44}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADUklEQVR4nO2YW4hNYRTH97gPaQwPDCKRSzwMcg0lhaLkEpLrAwkRTzSu8aDkkhe3B0oeRMpkXjzIXZgplyTE5JqGXHMZhp9WZ536bPucs8+ZOWafzvrVftn7+9b+1v9be31rbc8zDMMwDMMwDMMwDMNoIID+Xr4CLAB+AJO8fAMoBWqJ8QUY5eUTwBn+5iMw1ssXgNf8y3dghpdrABOBauAtsCzknNsEUwO093IFoDnwxnHgF9A3xLyVAc6/APro8y5AWy/qAAMCHNkWYl4T4LpPuEFOgnwJPAFGe1EGmJkgjItSzGsF3HDmlOv9nsAHnzC7IhsNwJYE37Jk+cIEc4YC93zjy1LYk4jo4UUN4BSJuQvMAjoCxer4QaAuYOwmtbcuga0yJ+dMkE/IiwLAUxqGc2pPxHrme1blOH9C792RRNnY/nvAGGCjOAB8racI49WmREsZ8Fzvi91VQEVARDSLTEQALVWQTRkKItXgFMeeODddbblUOs8bLyKIneWngdXAQP8uBAjyLaQQl4HZQAvHVn9gH/BZe4cVvnJ6/X+PCGApcN9ZxLsUgrQBDqQREa+AzUBnx0aRCv8gIEe4EbEz6wLEAUp0x/YnE8QZv8TpBMMgLfNxtygCCiRnqH2JiuUaEVJDLJbnOk5OnrVAd68hAdqq050SCBJ0nB2N1wbACN3hdLmlDrZ23tcNWAjMifcRWmhtd47c38AVTaYiSgeJmPoIUOos6r5+nyJIiSNCEFWyYB3TGbhKZryXMAd6BaxtXEChFadWG7dLwDFgg25GQboCFGsoyzdd6Qvphyl2tybe+0uiU1Ey5Ze+/xBwOInjwg6gaca7ngx1ZHASUfz8dKLlLNmnQhswuboCI7WPWQPsAU4C17TkXpTUWQFop03KXKBf0LGjWbk3MFVzgghTrl3geR3TXpNcNpGIbKfv2xZi/GMvFcSysBQucT4BF4HdjiiZJ5ksAEzTZJiK92ENVqcwVKsNkZzNWyW0gMnAcOnsNI+0zLrnsbUO000Kw94wBgvTMJgL/NQjVgqv5mEEmE/uUqeReURL6uGJ/l0kE+Am0eWTHrWPgAvqqPQj84AhbhGVMwCtNWcku6L528wwDMMwDMMwDMMwDMMwDC/X+AM7cYzOWrX+DQAAAABJRU5ErkJggg=="
            alt="external-sneaker-clothes-photo3ideastudio-solid-photo3ideastudio"
          />
          <span>50,000+</span>
          <span>Sneakers Sold</span>
        </p>
        <p className={styles.box}>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check-icon lucide-badge-check">
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
            <path stroke="rgb(0 0 0)" d="m9 12 2 2 4-4"/>
          </svg>
          <span>98%</span>
          <span>User Satisfaction</span>
        </p>
        <p className={styles.box}>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="white" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-half-icon lucide-shield-half"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
            <path stroke="rgb(0 0 0)" d="M12 22V2"/>
          </svg>
          <span>100%</span>
          <span>Authenticity Guaranteed</span>
        </p>
        <p className={styles.box}>
          <img
            width={34}
            height={34}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVR4nO2Zy04UQRSGe4GK4TouYauCcSGK7lTiTmIi+gSEiLyAF3QNsiUYlhJ8AS+JKxm87tS9gG4U3CoKiCv5TMlfsTKZ6a7u6Z4ek/mTSTrTVaf+03Xq3CoIGmggfwA9wDiwCCwBW6QHI8vILAI3gcNZKHASeEbtsQj0p6HAHmAW2JHgr8A94KJ2pyWVL7W7VotkDgFzWgutfRdoSiq4ADyXsJ/ABNCeFnGP9duBSWDb2Z3OJDthTemLMa3MGEdzOQZ8EpdXwN44k405GawCXZky9ePTBayJ00ycg70jczoe1AmAEzKz3+bZZ4I1qYmgzgDcEbdi1MAexzvV7GA761/QmTRmNFjmfQfwTRwPhQkywc5gLmvSFdZfc2LIaoUx83p/I0yQiaoGQ1kSrlKRy3q/ECZoRYMSpweKPyPAY2BZqceWnh/pXaHC3EEpY7zl+QjzXw4jsaFBbQkU2A/cBr57pB7rwC2gOcE6bZKxETboLxL6+XcO0afAqE1j9OvVfwvOuLdJ4hRRPJMoIiVW7XYDpz3mnHHMOHbQJW1FZE52J17EyYV0ll5q7ps4ZkYGipgzgeqIeAndP2XszoznoohI2IMdaU4hcgYcB1DIQ5ERe7Bj8I6KX8N5KGJigsGVGJwryboqWQ/yUMTadk8MzpVk9VqvF+SgyKaGt8bgXElWq2Rt/u+KmLLW4Ifn+IZphR320aBKAGN5HvaRyHTaE+qQ5OZ+CwpiBmdj8C6Vc04yjKzOmitSkqKs+EblMh/jQ2TFVwNFmpWKowTQWxngAPC6LpLGMmm8+boDgZ85faybNL5EGfNVLYryREcU7Fr1POYcbLsTmRRWG1WUus3qwlgHEIZ1XR3sy6rUXUmh+dBp3CjwUHXKpn5L+m84Se0St/mQazvIB047qHL5oO3OrUHnA+C+OF6r25ZpFLxbphpsvcpkUGcApiLNyhncr2uFba/2fY3A7nXHL10r9PlOMnd2qH3ZnTnLaD7dTl94Os7EJsfETJv/VKZMw7n0AZ+dQNuUJB5YZbZ1ydKRGePyB3tK5oRarcnij3ZmRnaJPIa5n7ikqq7qMtdZy6QxvYoT8453MmtPJ76eLlnkKPCE2qOYicMxvtvUDdpmm36kBSPrvTr514GDqSvQQANBbPwBcoKh54jkcsgAAAAASUVORK5CYII="
            alt="instagram-new--v1"
          />
          <span>1M+</span>
          <span>Instagram Followers</span>
        </p>
      </div>
    </div>
  )
 }