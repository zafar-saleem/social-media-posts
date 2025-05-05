import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export const CardMenu = () => {
  return (
    <div className={styles.menu}>
      <button className={styles.menu_button} popoverTarget="menu_drawer">...</button>
      <nav className={styles.menu_drawer} id="menu_drawer" popover="auto">
        <div className={`${styles.group_assigment}`}>
          <span className={styles.group_title}>Assign Status</span>
          <ul className={styles.list}>
            <li>
              <Link href="#" className={styles.item}>
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkYTI5MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaGllbGQtYWxlcnQtaWNvbiBsdWNpZGUtc2hpZWxkLWFsZXJ0Ij48cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiLz48cGF0aCBkPSJNMTIgOHY0Ii8+PHBhdGggZD0iTTEyIDE2aC4wMSIvPjwvc3ZnPg=="
                  width={20}
                  height={20}
                  alt="" />
                <span>Urgent</span>
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.item}>
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjcyMDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jbG9jazktaWNvbiBsdWNpZGUtY2xvY2stOSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cG9seWxpbmUgcG9pbnRzPSIxMiA2IDEyIDEyIDcuNSAxMiIvPjwvc3ZnPg=="
                  width={20}
                  height={20}
                  alt="" />
                <span>Low priority</span>
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.item}>
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMxMGE1NGMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGVjay1pY29uIGx1Y2lkZS1jaGVjayI+PHBhdGggZD0iTTIwIDYgOSAxN2wtNS01Ii8+PC9zdmc+"
                  width={20}
                  height={20}
                  alt="" />
                <span>Done</span>
              </Link>
            </li>
          </ul>
        </div>


        <div className={`${styles.group_integration}`}>
          <span className={styles.group_title}>Integrate with</span>
          <ul className={styles.list}>
            <li>
              <Link href="#" className={styles.item}>
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHElEQVR4nO2Z20tjVxSH0760pf9BoQ+F9qEPpQ+FIn1oXOucxGi8JSrBYMV7EMELCtI8mEAjfTBUVCqISkalWFCRahUh1Vy8DhrNtF6w1EsjmsFJSJXaqNHsskMcMiYOTs4xGvAH+yXsvc76TtZee5+1BIJHPepRvEkoFL7LsuwHLMt+xjBMIgDIAaAMAL4FAD0AGBDxFwCYBoBnALCMiD2I+KXgLiQSiT4SCoUJiYmJUgD4BhGrEfE7RPwRAH5GxN8QcQUAHADwLyKSaAYAXCLiD/QF8OI4AHyFiHvROhQcXpZlnRKJ5M/MzMwVpVI5X15eblWr1Sa9Xm/u7Oy0Njc3m+Vy+XLImj8A4HPOAPSthjrDsqwrKSlpKz09/XeFQvG0uLh4ura21tzY2Gjq6OiwDA0NzVmt1uW1tbVNp9O57/V6T8gbaGxs7CnDMIfBf+MUAOo0Gs3bXADOr5yvrq42kxjI5XIdZmdnL4aE1ZRYLP4wWoDQUPDX1NRYfD6f764hLi8v/a2trRb6LwQh/kHEPK4AgZGVlWXzeDxuvpw9Ozs7dbvdL7a3t3fsdvua2Wy20VDs7u620mdd2+RPEhIS3uMEQIdIJNofHh6epyBHR0ceh8PhWF1d3ZidnV0ZHR1d6Ovrm2lra7PodDpTXV2dWaVSWfPy8ubkcrlNKpWuicXinWCse6PIVEbOAPc5AODy3gAA4IxhGLdYLP5bKpWu09SpVCoXSkpKpmmSaGhoCKTWrq4uKw0jk8lks9lsq3Nzc3aWZZ9f2eENgOZ2lUoVSKVardZE87nBYJim4UVj2W63r9PYppnF6/X+x2WvFBQUzPANcEw3IImRysrKpnkFoGEQK+cfNMDx8TFZWFggk5OTZGRkhPT395POzk4yPz8fe4D9/X3S09NDWlpaiE6nI/X19aSiooLk5+cTo9EY5rzf7ydKpTLMdnp6OrFYLLEHKC0tvXF+RkYGcbvdYQBWq5UMDAy8nKdWqwO/X1dMAJaWlsjExAQ96CKu0Wg0EcPI5/O9nKPVau9/DyQlJd24zmw2xzeATCYjHo8nPgDEYjFJS0sLW9vY2BgfACkpKWR0dDTi+pmZmfgA8Pv9pKqqKmx9Tk5O4Ax48ABUe3t79N4UZkOv18cHAFVvb2+YDYZhyOLiYnwAUCeLiorC7OTm5gZC6cEDUK2vrwfe+nVbzc3N8QFARe9JkUIJ4wXg5OSEKBSKG+1q+QQIlvp4BaCiZ0BMABBx5y4AqKijsQBQ3xWAy+UK3PvvFEAikbwDAJu3BTg/Pyc2m+2V63R2djZpaGggDocjzKmpqamwrKTlE4AKAL6IVICKBFBeXv7KnNTU1MAXV1NTEzk9jfz9Pz4+TgoLC4lKpSLt7e3k4OCAX4AgROltAHZ3d4nT6QwcTJG+qriopKTkzcsq1yCe3HYP8K2Li4uL5OTkDU4AtKhK20GhvQIuTtHeweHh4fOtra3t0KKuwWAINDxooYwWzGjhTCKRbIZW9wTRSigUfhwsdQeM0QfQBxuNxsXBwcE52m1pamoy0+5LZWWlpaioaCY3N3dBJpOtpKSkbIhEIgciuhHR97pDEl8/7AIuQkQZ7RVwcCDqAQD7APC1gKsAQMfRGdr5eYGIfyHiUrBJOIiI3bTJh4gaRKxCxAL6wgAAWZb9RCAQvCXgS4hYHGyVGhHxV0T8CRHbEfF7RKynbVWGYRQMw0hoh5Nl2U9p61UkEr3PmxOPetSjBFf6H8ZIyejnR0XEAAAAAElFTkSuQmCC"
                  width={20}
                  height={20}
                  alt="" />
                <span>Notion</span>
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.item}>
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1naXRodWItaWNvbiBsdWNpZGUtZ2l0aHViIj48cGF0aCBkPSJNMTUgMjJ2LTRhNC44IDQuOCAwIDAgMC0xLTMuNWMzIDAgNi0yIDYtNS41LjA4LTEuMjUtLjI3LTIuNDgtMS0zLjUuMjgtMS4xNS4yOC0yLjM1IDAtMy41IDAgMC0xIDAtMyAxLjUtMi42NC0uNS01LjM2LS41LTggMEM2IDIgNSAyIDUgMmMtLjMgMS4xNS0uMyAyLjM1IDAgMy41QTUuNDAzIDUuNDAzIDAgMCAwIDQgOWMwIDMuNSAzIDUuNSA2IDUuNS0uMzkuNDktLjY4IDEuMDUtLjg1IDEuNjUtLjE3LjYtLjIyIDEuMjMtLjE1IDEuODV2NCIvPjxwYXRoIGQ9Ik05IDE4Yy00LjUxIDItNS0yLTctMiIvPjwvc3ZnPg=="
                  width={20}
                  height={20}
                  alt="" />
                <span>Github</span>
              </Link>
            </li>
          </ul>
        </div>




        <div className={`${styles.group_options}`}>
          <span className={styles.group_title}>More options</span>
          <ul className={styles.list}>
            <li>
              <Link href="#" className={styles.item}>
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTY2NWYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zcXVhcmUtcGVuLWljb24gbHVjaWRlLXNxdWFyZS1wZW4iPjxwYXRoIGQ9Ik0xMiAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTciLz48cGF0aCBkPSJNMTguMzc1IDIuNjI1YTEgMSAwIDAgMSAzIDNsLTkuMDEzIDkuMDE0YTIgMiAwIDAgMS0uODUzLjUwNWwtMi44NzMuODRhLjUuNSAwIDAgMS0uNjItLjYybC44NC0yLjg3M2EyIDIgMCAwIDEgLjUwNi0uODUyeiIvPjwvc3ZnPg=="
                  width={20}
                  height={20}
                  alt="" />
                <span>Edit</span>
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  )
}