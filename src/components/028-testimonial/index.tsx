import Image from "next/image";
import styles from "./testimonial.module.css";
import client from "./assets/avatar.jpg";

const ICONS = {
  hoverStarBG: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADc0lEQVR4nO2aTYhcRRDHexM/comfoPHjIgTF6O5O1dvEECFzEVzcqdpZZAQxiqDmoIJ6UcTDgiKIh0gOEQRBDXgTRQwKfhwUMRoED35ghHhQTAQPUVyjxJif9MtExriz82bz+u0b8A91fN39666q113dIfyvwWo2WSPOXnHeC4GxMKpqGLeqQzRxtoZRlThv94C8EEZR43NcLsaxkyDqLGya5pwwalJnvgcit2yWu8NoiTFxDpwKos5HYZTUcG5YBCK3hrMhjIrEeLkfiBhPh1FQ1uFccX7rC+L8mG3nzFB3qXNfP4h/gr5FO9Rdanw6CESN10Odlc0yPhDihHv9mc1xSairxNhZBKQb9A+HOmpDh7PE+akoiBr7a7mRVOOWwhAng964PtRN6rw1LIg6z1c6yMlZzss3gW2uztpsin9uaXGzGneKcb84j52yQSzqXr+K8Yi2uLfh3KHOXN62MzXlXDU5w2WFN5rq3KPObjFeVeOdmD7F+FqNH8T5ZRmznMTE+FmN79X4Sp19+VidV8R5MXM6EWRhpQd52pDOgZgyp3PaGgxIl7tSs9yYu5cY69X4cqUHpcPbNzFu/xUrW5y14rxWg8FR0N6MSahP6DOWZxHjrxoMlD52XJ2nwjyrBmaymAXqmATE+V2MbWEYiTGhzre1gTC+0zZZWI42trlQnXdrAPHBxBwXhdNRs8kZ0SdXEOS5Uk+U6twmxpEKAf5oGHeFFMpaaO6r6V3poBqbQ0qJc2m+10kHsi/2kRSiB+aZZCDGjlCV1PkimVs5n1cCsfEm1nX/rqlc63glhYnuAShtsLe4PTlIPISlBlHjpcQY+abyYPIVcQ4lrbBMzXBt8tXwEzZpXJMMRI0HqwJR54FkIGLsGcpFjKPiPJmbcXTIb/ckqyTG8s0QAftZ77Y71oXF+GQImIX105xdOkijRbPgTB6Jp8xOh9X/aWSeVWpsLzohkuJKW40nCqzC+xNtrhzU1oRxRe/V9RIgj5cOIsbHSwAcjjM9bMqMR+qlCt/i7C0VIlYr+pVExXkjljaX2/Z1xsX9frJiHBuf4fzSQGJNdhGAQ7H+W1YfmTOz2Fmn1Gs6cZ7taTxuGHdv7nBBSHGRauzsLUeJs6u0DsT5sBsL+6t4HCPO1thX6Y8Mug0/Gp8thWqfSD0U035VfdZCfwOlGCUUs8xTUQAAAABJRU5ErkJggg==",
  regularStarBG: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADkUlEQVR4nO2aTYhURxDHW2NiLn5F0PhxCYiSD3OIEgRhvQQUvChBIahJyMdkp2om6iWLeOipmjF+HJQ9KAhCVMhFgiKKQj4OCSEaCeSQRGJADwZdIYdE1nGnatSWntlsZnVn5806/eY9yB8K3qm7f6+q61VXP2P+V2u9Y92zQHIBSL4xzk0yaRUU5C1kdd6gqD0mrQKWL/8FQdLPTBqVt+WFSHJvxCMkd/LWTTdpE7DaEW+MmHxgUiXnJiHr1UdBgOUHkyblitU3HvdG3fK28pJJi4D082YgSLLPpEGZPW4GspSbgQDJrcxh97RJurCo2NQbw5bjyjqTdCHrT61AgPS0SbKQZWkriOHsVc2U3DyTVCFLfxSQWniRfmKSKGvdM8jyV1QQYL2SyEISWDZGhWjwykqTNCHJ+XZBgPVIrIvcat1MXwRmufJirqSv177cVHkTWN4F0hyy7mwsEKObDCJrX5YUsixvI1XW18Yu6fJeriz5qFReELnQhIJ8iKzHgfUkkHxVS5+kvwPrDWC53f7iAhnJP8D6J5JeRpZLfq3A+gWwHs2RbDC+vO76Ip/crhooVtd42gQsZsKeQqquroeXHVoErL91fVHcngHpH37fjtor7+1104D0VGogWM75JDTegagPWO4nOJQeAMkea93klpnMZ4FkJgEZyrFsNu0oa+VVIL2WHE/o9SzrMjMR4aduNrJ83W0IYPmu17o55klkrZviY7J7EHq4oydKKMgmILkbGwBJJVeQ900IoZXXfKyG3w9ys7ekK4JA/AdTnu9rnXAgcsnPYeIQsBwI6I39Ji4h6a8BQ+uXWCDAuuf91zWgRx7E0pioHYACb3YoyJbgIP4QFhoESY+FpfBFJcnN4CAsA0E7LL1WXgkPofXwYnk5GAiSbosLBFm3hgNhOdterIsiy66a1Z7bCq+zITuJg20s5ufGstv3hYHkx8ihRXIn3++mdhwkS7oq4gJ8Ydm34YR7aoyXMRlZM1FfCIS40kaWYoRQ+hZtZXGrsXLFoRdGXV03H49DgFwcJ8P87d90uynTH6nHa3wDyYWOQvhuRbOWKJCc8a3NiY798S43t+lHluRedreb1TEQ35MdI6sM+P5vp+bIUnXtWGedjl7TIcmhhrfkC8bj2617zoS5SO0f3Y6Sgx2bAFi+r+8FvRLHzzFQ1B4/V8d/MvADI+sO/9uSifMXKdbtPu3HNWci9BD9aeKTCTPZRQAAAABJRU5ErkJggg==",
};

export const Testimonial = () => {
  return (
    <div className={styles.testimonial_container}>
      <div className={styles.testimonial_client_container}>
        <div className={styles.client_dp_container}>
          <Image
            src={client}
            width={50}
            height={50}
            alt=""
            className={styles.client_dp}
          />
        </div>
        <div className={styles.client_info}>
          <span className={styles.client_name}>Zafar S.</span>
          <span className={styles.client_profession}>Manager</span>
        </div>
      </div>

      <div className={`${styles.client_rating} ${styles.client_rating_regular}`}>
        <Image
          src={ICONS.regularStarBG}
          width={20}
          height={20}
          alt=""
        />
        <Image
          src={ICONS.regularStarBG}
          width={20}
          height={20}
          alt=""
        />
        <Image
          src={ICONS.regularStarBG}
          width={20}
          height={20}
          alt=""
        />
        <Image
          src={ICONS.regularStarBG}
          width={20}
          height={20}
          alt=""
        />
        <Image
          src={ICONS.regularStarBG}
          width={20}
          height={20}
          alt=""
        />
      </div>

      <div className={`${styles.client_rating} ${styles.client_rating_hover}`}>
        <Image
          src={ICONS.hoverStarBG}
          width={20}
          height={20}
          alt=""
        />
        <Image
          src={ICONS.hoverStarBG}
          width={20}
          height={20}
          alt=""
        />
        <Image
          src={ICONS.hoverStarBG}
          width={20}
          height={20}
          alt=""
        />
        <Image
          src={ICONS.hoverStarBG}
          width={20}
          height={20}
          alt=""
        />
        <Image
          src={ICONS.hoverStarBG}
          width={20}
          height={20}
          alt=""
        />
      </div>
      <article className={styles.client_quote}>
        <q className={styles.client_quote_title}>The best all in one platform available</q>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum veritatis amet at quasi, saepe ad ab sunt asperiores. Nisi, dolore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, at.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure aliquid nostrum debitis illo, vero minus?</p>
      </article>
    </div>
  )
}