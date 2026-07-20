import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const icons = {
  contact: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaklEQVR4nO2a+2uOYRjHP9jGjJm1XxxCk+NCJEVSyj9Aw2bzkx8soyXllMRPKMnwE4U0yWHI+Uzvi5XktDGHpuQ0pNCwOWy667t6sufZ+77b+7zPvXo/9fyw57qf677u977v67ru6x4kSWI9g4G5wBagErgH1AEf9NTp3TG1yQcGYQnDgY3AI6DF4/mix0v+ANgA5AYxgOnAOeCvwyDza28HCoFJQJbLd1mSmTblwH3H90bXGWBqIgZgfrXTjs7NclkJDO2EzmHAauClQ+9JvY873YAy4Ls6eqr90D2OfRhdBcAz9dEAlMZRPxnAYSn/AawCUvCPVGAt8FN9HpINnaI/UOWYhbEkjnHAc/V9y2PPRUUf4K4UXQMySTz9gBuy4U5HZqaHPIhRcAHoRXCkA5dly6lY9+UafWjcY1+CJxN4KJuMl4yK8cAv4JsCni2MkCdrAvKi+eCSRl6CfSyVbecjNZyhhtXaJ7aRAjyWjSa78OSoGi2IoDDcTu7U2Sccoe9iR3zx3FBmb9QDaQEOJBSh757AR6BRIaIN+VK0B/vZK1vnuAm3STgP+ymQrVvdhK1BZxT2M0a2XnQT1kpokjbbSZOtT9yE7xRw/Nzc4Q7oDnvYZI4Ub90Eb5Sm+zmQUAd0h2IdSLU+DDJBjMvSat3sJqfp0pt9s4RF2E9he+53toS7sZ99stXY3IYMea3PAaco4ShSlE8607umKIaDUlZoca61UO2MrZ6Y4lmzCg02pvGpjsA9LVLjE2q4DPsok21no60mNijgjMQeRsumRrnfqCjVyKtVkgmaLKBGNq2ItUS631HTMiWZoOgtG1q07GMu0xoXfEUKbgLZBDMTIdlQpUF1iHRH9d0UlyeSOCYALxyxJTMeLm+XFDYloEyUCqzTpjZ9VnRmJtyYL8Um3fcDE7eKHLNgCoSL/ehooDq4HWe9ubpGeCX9zbqDHILPB/6dHvISFTAWAZOBHJdjc7ZkxdLjvHv8o5uqKfhMa3V+lkv1r7yd3MkEsa/tyM3d43q/rtr+ZwDwW9Pv9OMm8l+XQe9VSjLV8gPyNDU6jtbrvtHccRwBNikFN3oTyg4Zu0R/5+hQ06T3tUohrCZPBpslshw47nCNrem057nAJq66rOtmLamZdCEqgNf6D4VKzUpXqEYmSUIc+Af+05ebWLVawwAAAABJRU5ErkJggg==",
  twitter: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+klEQVR4nO2ZSWhUQRCGP424K24J7oiCOyoeBAUVPAQEEQlxuehBD4ogBD3pyZjcNOjJmwt6EEXwIgriRUGiYkxEQVDcUC+iMZt7kpaCP9CMSd6bl2ReT5wfipmp6aqpf17339XvQQEFFNAXlADVQD3QBrgcWxvwGKhSLYmwFWhJoXjXg1kt5UlIdAZQvMuwzmzIlAR2JVyGNQPFcYhUB1Csi7BjcYg0BFCoizATgEi0BlCoizCb+pFweWKR+K+IVETkOJdFQV+A+Yo7kGsiP4FlveQYC7yIkec3sEExG4E/aUytZ8BIYAhww/NvV541QHvE5rZLY5cATWmukeOKmQ58lu8rMFv+qhh7wTTgXVprxMk6vKmxxfPfAYYCw4D73cRd0ZUcBTxIQML1NxGzD8AkxZ71/Aflm5exNz0ERovotYQk3EAQMbuq2DHeIjdBWC7/PvneeO14TR9IuIEiYrZT8as99XkqQTBcABbp/d4+knADScRUZ45yHPX8JzPyl2Ypsy7XRMzuAkVa5LWezFrxhvEJZNalQcTssPLM9c41H4HJ8p/OFyJ/gFXKtcfzm0IhxXqeD0ScCrWCDZc9/275VgK/8oHIW09mp2hqOe0ntq8YjoROpBlYqlwT9Vrq3cyolRgUSRyCJNIObFKedcB7YKo+n/LGmTwbZgGNIRLZrxwLvQJvqq8aATzxBME2TtQBB0WkRvEmsy8zvrOdvKtd/yHfK2Cc/JdCIXJdc97akXvdfP8NWKD8hzz/GfkmJGjlI5EtiTo1izZ9LvYy7hEwXF3vbc+/zVtTHWkRMVmdGeMQ1WU2xjDDO4g1atEbTqRBxPaEFYrZEfNesf3j6xVT5vlveYLQkEsiJrObNX6tzh5x/4DXah57wmLge66I2G2brsbwU4J1dT6ihopcr5E0LRKDhkhLAEW6GP1cJOoDKNT1x2OFOPtB2lY5GB69NemMEwvlAT8MLYtLwifTHNiVKCMhinWzuS6lR3Kt+u3KbKZTAQUUwD/4C68XAvRNax0sAAAAAElFTkSuQmCC",
  threads: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADRElEQVR4nO2ZSWxNYRTHf2YqhAUpIRZYlChCDKEWtZGoiEREWDbmjYRuiWgMMSy7sBGRVDcigkQMLStjUkPUWISkFhZFi0rxyUn+L/m8vPfufTftvZe8k5zFu+ec757//c7wfedBiUpUoqi0CmgBugGXMHcDzUBNsSAOpMB5l4fri9kJl3KuCQOkJQWOugC+HgZIVwocdQH8JQwQ949wICXtoEsLkAfAfqAaqADGAMOBycAioBY41wdlPZCiLnwRmEV4GgnUKd5TAaQX2OrZl+v3BeAp8AnoAd4Bt4BDwBJPfwrwJGkgv4B1shsB7AW+hrS1Mj9HtuMVki4pIEe9MGmO8FW/e81tItCZBJA3AoDyI2pu/QCqtM7mJIBskv7GAjptwFngFHAT+JxH7xkwDBhQRL70CRArnaP04pc55PeBBTnWtjzapV3Ittkmnbo4gTRJtypPEg+VfBywVrs2X8AzB9PfWXZ3JauIE8hO6R7MITsNjAa2q+z6stuSIb1s2zvAzziBZPrA1TzyDzm+eIYbZLs45LtcfwKxpmfUEcEBK7GDgMFF9BzXX0CswpAnaTP8Sg1yBTAPmApUAqtVKIxakwTyVXplBXTsqjwkxLvseHImKSDfAoCclNwq1HqgEXisc9cNJfmErHfWFpHkrj9CK7sqGU+XrKGAfaZyHfbWCts/Ykl2a5Soj/TmsX0onUn6fQ0YqALQFjeQpdK9kvW81ztqvM9ja2GE+kz2s31xAynUENdIZmDbvec9ujkisM89mR06jarjBtLkOZste+2FnoXLNJVdKw5ot07k6OhGlXED6VbCmlMvcsgtrDZ4iYzyYGGOcDS+JJ1lcQNxujsghwtdnB7p9ldo2LBFa+1OAsjbPrpYtXth15oEEONjsinTGLNYEB3e5KXQzsYyfLDujWZXe4o4CF7WPd1opqYtLikgmd6xw7MvV8yfV4Pr1OHSvv494LiO8Hgl92OE9wZS1Fi3Lzyb8GQjoCMFTgAuKSD+EcQa33JgBjBWZdjCaK6GFo1pHpm6mDmQ/hsgXSlw0gWwzccCKcroM5V/vdWkwFEXwCsJSfUpcNbl4cxVIDTVaAvTkDNd8iX0TpSoRCXiL/oDR+nkkSyq6rgAAAAASUVORK5CYII=",
}

export const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <span className={`${styles.btn_show}`}>...</span>
      <footer className={`${styles.footer}`}>
        <Link href="#" className={styles.link}>
          <Image src={icons.contact} width={40} height={40} alt="" className={styles.icon} />
          <span>Reach Out</span>
        </Link>
        <Link href="#" className={styles.link}>
          <Image src={icons.twitter} width={40} height={40} alt="" className={styles.icon} />
          <span>Twitter(X)</span>
        </Link>
        <Link href="#" className={styles.link}>
          <Image src={icons.threads} width={40} height={40} alt="" className={styles.icon} />
          <span>Threads</span>
        </Link>
        <span className={`${styles.footer_copy_right}`}>All Rights Reserved</span>
      </footer>
    </div>
  )
}
