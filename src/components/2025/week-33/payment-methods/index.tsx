import Image from "next/image";
import styles from "./payment.module.css";

export const PaymentMethods = () => {
  return (
    <div className={styles.payment_methods}>
      <span className={styles.payment_title}>Payment Methods</span>
      <ul className={styles.card_list}>
        <li className={styles.card_list_item}>
          <span className={styles.card_media}>
            <Image
              src="data:image/png;base64,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"
              width={64}
              height={64}
              alt=""
              className={styles.media}
            />
          </span>
          <p className={styles.card_contents}>
            <span className={styles.card_name_container}>
              <span className={`${styles.card_default} ${styles.card_name}`}>Visa ending in 8806</span>
            </span>
            <span className={styles.card_expiration}>Expires 03/27</span>
          </p>
          <div className={styles.card_actions}>
            <button className={styles.btn_delete}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(120 120 120)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </li>
        <li className={styles.card_list_item}>
          <span className={styles.card_media}>
            <Image
              src="data:image/png;base64,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"
              width={64}
              height={64}
              alt=""
              className={styles.media}
            />
          </span>
          <p className={styles.card_contents}>
            <span className={styles.card_name_container}>
              <span className={styles.card_name}>Mastercard ending in 3319</span>
            </span>
            <span className={styles.card_expiration}>Expires 03/27</span>
          </p>
          <div className={styles.card_actions}>
            <button className={styles.btn_delete}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(120 120 120)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </li>
        <li className={styles.card_list_item}>
          <span className={styles.card_media}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJ/ElEQVR4nO2di3NU1R3HfyRCgYKkIsW2CFVHyjDVysBMSyk4I8jDIZB7Q3DE1ghWCpZRIMGgIC/BQnkVwhtCQvYGx0juDWGIpaCIUBAMYSqFkLAbdjfkxcLmbgjZPHbz61y6dGIMSsn+9pzNPZ+Z7x9wf5855977O/ecCyAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQcIWs4duyhshVVLwlq+iUNTwra5gtq/iOvA+HxWViJ9b1CjtkDbOYC9XuLZKGtbKGmbKGYwCxA+vahQWyiqWsxcn3I1vFf0nZOIF1/bgmLgf7shYltz25E7Lxp6xrySWxKk7mQBAGIddjVRzNup7cIau4jgM5GJSo2Chr+CrrmnKFrOFJ5mK04EXS0B+r4kus68oFY3PxB7KKdaylyMGX3BCj4lAwO7HZ+GvWMmQqySoW//4Q/hDMjKThbNYiZMqouBLMjKzhh+1ccJ2pX5+MaYy5BE2MYhKkLPwx8+Jr9JE0LI/LxEgwGzEqTmRdfDlUycYRYDaMqYt54bUQRcVFYDYkFY8yL7wWmkgqHgQzYdyTJA1vmkjwZTATsdk4iHXR5VAK1tBrqrXjGBVnUBa05zJfI8xD5Cl77Hq9xelxW5x6gcWpH1CcnuUZJZ4XMisru0F7Q9IwjXA6xA6JDXWshULzJPr9itODrcXi0GsVh2efIRvbyyiXVLxEJXjErprrzIXOaynYV3c3wd+Q7dQLMhx6HIQzEzWMklVsohL85IpyK3Oh876ZiATvjXsR3GxUH8tw6I9DOBKj4jjK+2+PtyuKWAuFFumcWFX2/wgOxGOxV02CcEPScCml4MjZnkrWQqFFei/35d2HYGMkN1kcnrkQTkgaHqKSG53pa4BEfxNrodAiv0qu/+J+BP8vDn0GhAWIHWQV3VSCBye7S1jLhFYSt6/mZFsEWxx6Y4ZDHwW8E5eNAymn558tLCtkLRNayfrznvI2jeDb0csyHPqPgGdiVZxGKbjL3GvFrGVCizyQhMVtl3tnqvZsBp6RNNxOKbjDHG81a6HQIk9t9B0NmmCn3rCn1N0XeMXY6kEld+SeWg9rmdBK3jtdcyF4gm83Q9YBj0zIxu6Shj4qwQNXXbNxNz3PR1sw5d65Fy9GjADekLLwOcrpuWcSfw9YL+yt+zz4gj2Y4aj+HfCGpOG7lII7zq66ylooNEuHeejeafXUUAi2OPR3gTckFXOo5E7c5/dDQiNXS4S/3dUQxIerb+Uj4A1ZxQoqwUO36eWshUKzRCRh+W5b9S0qwRaH/jXwRIyKT1BOzz9fwtf9d8r+ujZ1rr43Dv0q8ISUhS9TCu6WUHGZtVQIpNcy32lSucYItus1wBOyihspBUfM4WORPyIJy7cUVrupBafb3XXAE7KGZ6jkjt1bX8taLBhJRO+CUzWXqeUaSbO5bgAvxKdiZ0nDeirBT691XWEudx764g/U5odCrpGUS2WlwAvG2VKU03PvBWUFrOW+tN97NlRyjWzKK+LnKVrWMIFScKc5LjtDud5pud5/h1KukRW5x/8OvCCr+DGVXEnFJkhgcw+OTELXwlM3r4ZarpG3dii7gRdkDUuoBI9IueliIfcnf/EVbrzoaWAh18iEWXPnAw8Yu9spp+cnl1eEtMHRcT66ph70OliJNbLHet3bpVuPGOABKRsnUQqOSgxNBytyPlaPttTbUmzVzMTeyfqTX+cDwHPAA7KKqykFR86m7UE/uMhfEafWle/iQOydzExO2QEAQ4AHZA2PU8kd/3Gj8YmsP8hSm3ou9VeMTKurfD/vZhNrmS2Tbnc39uk/4I8A0J+1W5i+HTvePnOZSPDwre7S+5puk7C+03z0dl/kr+q70ucavKXBNSnLeyvpxC3cVsTPSG0ta46dPQMAxil6D/OwB3gI5fSc9A9bAeuCKyHO+BmzFwOAsZ2F/Sc7soqzKAWv+bLYyrrgSgizOa/ocmD0Pgs8IGuoUApOKazQWRddCWFiExd8EBD8BPCArKGVSu4UrcZUctceP5cXkPsiALD/Z8T4HHyYcg/wGzlO00zPabbrtc+MHPNmQDAfX1PKGkZTTs9LPrOa5gHrT2u3bg3INdILeEDScDml4ORzdifrwishyMrDp441k/s88IKk4hE6wX7/nis36lkXXyFOcl7hpa5RD73STPAjwAOLF2OEpKKHSnC8dqOUdfEV4mzOt1oDHas7cocDL0zU8CnK6Xluru1Sux65ZwoKevd7bFozuUZjg5+ztGJUfJ1S8MoT1kLWEhSirDpy+nhUr0fim8k18hjwhKRhCqXgHRdKr7EWoQQ5abbrt2Zu2Lm9hVgjvwHekFS8QCV3suatNU6eYS1ECWLWfnHuq4HDhv+5FbmjuOg5NycuE3sY/w2iEjw9p4xgv62H2VNy9Mw5S1oRa2Q0Fx2rlhi/dqOcnt85bL3IWozShhivdyuPnD4xZtqMhXcRa2QkAHQEHjFONqcUvP6r4rAbwbuLKqpWH807+dqqjZt69ekz9TvEGjF+psXv/x2Mk82p5Maq2JRqdZFtyVTuM+lX3HWpVlfNzoLSa5vPFhWuOZb/5cLM3OypH6zfODR6UsL3CG3+KvR4OBxy5qIS/LJaRfr0vPPi1cp7lBHsGE2MrsA7MSr2p5ye3zxgJ33/XfXpmRMhFjuKm8WDe0HKxlcoBS87RruC9NYOJS0EUicH7rM9IdyQNNxCKXjL+aukPehR8a8vIJIqAcAwAOgHAA9AuCKpmE/2gKU11Kfb3T7K15eu3aP+0IZRGWts5Ags6RmL8k8DgHEi3YPQHhifg12Nf+ZSCX5tf4WTuukAANGs68gtsRoOp5yekw7TfiK7KOvQgcC9UdAakoaJlILXnikO3omtzm8n/v2/ruNitwDnDKF4SImIiJiSermymlLwgKG3m/0PsS4g74ylEGx0gyjlphSUuwIPSnyt3HBGZOCb3aALnvG3HdsoBa8+mncy0HQQfAe9qJoDKz458Sml4Dk796YDwDOsC8g7A6gEbztvL6EUPG76rPcA4FHWBTQlqVeqohSHftf//rU16XZ3Q+DT1C6sr9WUKCWecZSjd1NeUVGgAyVggeLwLKMUvGT/kYOBPrGABYrTc4RS8Ksr1m0AgF+wvk5TkokYafygkVLwL4c/Oyssl+7aA3uvVA2ilJtSWO4OvLuLBgcLLE79DUrBaz7PP83Vjj2zoTh0C6XghNTMDAAYxPo6TYvF6bGF4MSavqyv05Tstd3sTSk33e72BTZ58f81Y3tEKamSKQVvOWezGh+Csr5O02Jx6KspBS898Nkn3BxoYkYUp/5PSsHTVm1IDiyQCBgSTbVCBf9N+Hx03g7pTCz3Ra43eZmAR4kFj2Z9gWZnELHgwawv0Ow8Tyy4H+sLFAgEAoFAIBAIBAKBQCAQQNv4DwQlQLDd5GfaAAAAAElFTkSuQmCC"
              width={64}
              height={64}
              alt=""
              className={styles.media}
            />
          </span>
          <p className={styles.card_contents}>
            <span className={styles.card_name_container}>
              <span className={styles.card_name}>PayPal</span>
            </span>
            <span className={styles.card_expiration}>zafarsaleem@email.com</span>
          </p>
          <div className={styles.card_actions}>
            <button className={styles.btn_delete}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(120 120 120)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </li>
      </ul>
      <button className={`${styles.button_add} button_five`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(4 5 7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        <span>Add Payment Method</span>
      </button>
    </div>
  )
}
