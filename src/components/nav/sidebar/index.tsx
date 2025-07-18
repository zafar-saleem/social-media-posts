import Link from "next/link";
import styles from "./sidebar.module.css";

const ICONS = {
  focus: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zY2FuLWV5ZS1pY29uIGx1Y2lkZS1zY2FuLWV5ZSI+PHBhdGggZD0iTTMgN1Y1YTIgMiAwIDAgMSAyLTJoMiIvPjxwYXRoIGQ9Ik0xNyAzaDJhMiAyIDAgMCAxIDIgMnYyIi8+PHBhdGggZD0iTTIxIDE3djJhMiAyIDAgMCAxLTIgMmgtMiIvPjxwYXRoIGQ9Ik03IDIxSDVhMiAyIDAgMCAxLTItMnYtMiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEiLz48cGF0aCBkPSJNMTguOTQ0IDEyLjMzYTEgMSAwIDAgMCAwLS42NiA3LjUgNy41IDAgMCAwLTEzLjg4OCAwIDEgMSAwIDAgMCAwIC42NiA3LjUgNy41IDAgMCAwIDEzLjg4OCAwIi8+PC9zdmc+",
  dashboard: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sYXlvdXQtZGFzaGJvYXJkLWljb24gbHVjaWRlLWxheW91dC1kYXNoYm9hcmQiPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjkiIHg9IjMiIHk9IjMiIHJ4PSIxIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNSIgeD0iMTQiIHk9IjMiIHJ4PSIxIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iOSIgeD0iMTQiIHk9IjEyIiByeD0iMSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjUiIHg9IjMiIHk9IjE2IiByeD0iMSIvPjwvc3ZnPg==",
  tasks: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sYXlvdXQtbGlzdC1pY29uIGx1Y2lkZS1sYXlvdXQtbGlzdCI+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMyIgeT0iMyIgcng9IjEiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB4PSIzIiB5PSIxNCIgcng9IjEiLz48cGF0aCBkPSJNMTQgNGg3Ii8+PHBhdGggZD0iTTE0IDloNyIvPjxwYXRoIGQ9Ik0xNCAxNWg3Ii8+PHBhdGggZD0iTTE0IDIwaDciLz48L3N2Zz4=",
  schedule: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYWxlbmRhci1zeW5jLWljb24gbHVjaWRlLWNhbGVuZGFyLXN5bmMiPjxwYXRoIGQ9Ik0xMSAxMHY0aDQiLz48cGF0aCBkPSJtMTEgMTQgMS41MzUtMS42MDVhNSA1IDAgMCAxIDggMS41Ii8+PHBhdGggZD0iTTE2IDJ2NCIvPjxwYXRoIGQ9Im0yMSAxOC0xLjUzNSAxLjYwNWE1IDUgMCAwIDEtOC0xLjUiLz48cGF0aCBkPSJNMjEgMjJ2LTRoLTQiLz48cGF0aCBkPSJNMjEgOC41VjZhMiAyIDAgMCAwLTItMkg1YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmg0LjMiLz48cGF0aCBkPSJNMyAxMGg0Ii8+PHBhdGggZD0iTTggMnY0Ii8+PC9zdmc+",
  inbox: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbmJveC1pY29uIGx1Y2lkZS1pbmJveCI+PHBvbHlsaW5lIHBvaW50cz0iMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyIi8+PHBhdGggZD0iTTUuNDUgNS4xMSAyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExeiIvPjwvc3ZnPg==",
  analytics: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGFydC1uby1heGVzLWNvbWJpbmVkLWljb24gbHVjaWRlLWNoYXJ0LW5vLWF4ZXMtY29tYmluZWQiPjxwYXRoIGQ9Ik0xMiAxNnY1Ii8+PHBhdGggZD0iTTE2IDE0djciLz48cGF0aCBkPSJNMjAgMTB2MTEiLz48cGF0aCBkPSJtMjIgMy04LjY0NiA4LjY0NmEuNS41IDAgMCAxLS43MDggMEw5LjM1NCA4LjM1NGEuNS41IDAgMCAwLS43MDcgMEwyIDE1Ii8+PHBhdGggZD0iTTQgMTh2MyIvPjxwYXRoIGQ9Ik04IDE0djciLz48L3N2Zz4=",
  more: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1lbGxpcHNpcy1pY29uIGx1Y2lkZS1lbGxpcHNpcyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMTIiIHI9IjEiLz48Y2lyY2xlIGN4PSI1IiBjeT0iMTIiIHI9IjEiLz48L3N2Zz4=",
  settings: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb2ctaWNvbiBsdWNpZGUtY29nIj48cGF0aCBkPSJNMTIgMjBhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZaIi8+PHBhdGggZD0iTTEyIDE0YTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNFoiLz48cGF0aCBkPSJNMTIgMnYyIi8+PHBhdGggZD0iTTEyIDIydi0yIi8+PHBhdGggZD0ibTE3IDIwLjY2LTEtMS43MyIvPjxwYXRoIGQ9Ik0xMSAxMC4yNyA3IDMuMzQiLz48cGF0aCBkPSJtMjAuNjYgMTctMS43My0xIi8+PHBhdGggZD0ibTMuMzQgNyAxLjczIDEiLz48cGF0aCBkPSJNMTQgMTJoOCIvPjxwYXRoIGQ9Ik0yIDEyaDIiLz48cGF0aCBkPSJtMjAuNjYgNy0xLjczIDEiLz48cGF0aCBkPSJtMy4zNCAxNyAxLjczLTEiLz48cGF0aCBkPSJtMTcgMy4zNC0xIDEuNzMiLz48cGF0aCBkPSJtMTEgMTMuNzMtNCA2LjkzIi8+PC9zdmc+",
  help: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtaGVscC1pY29uIGx1Y2lkZS1jaXJjbGUtaGVscCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiLz48cGF0aCBkPSJNMTIgMTdoLjAxIi8+PC9zdmc+",
  arrow: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24taWNvbiBsdWNpZGUtY2hldnJvbi1kb3duIj48cGF0aCBkPSJtNiA5IDYgNiA2LTYiLz48L3N2Zz4=",
  add: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wbHVzLWljb24gbHVjaWRlLXBsdXMiPjxwYXRoIGQ9Ik01IDEyaDE0Ii8+PHBhdGggZD0iTTEyIDV2MTQiLz48L3N2Zz4=",
  close: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYW5lbC1yaWdodC1vcGVuLWljb24gbHVjaWRlLXBhbmVsLXJpZ2h0LW9wZW4iPjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeD0iMyIgeT0iMyIgcng9IjIiLz48cGF0aCBkPSJNMTUgM3YxOCIvPjxwYXRoIGQ9Im0xMCAxNS0zLTMgMy0zIi8+PC9zdmc+",
  open: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYW5lbC1yaWdodC1jbG9zZS1pY29uIGx1Y2lkZS1wYW5lbC1yaWdodC1jbG9zZSI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSIzIiByeD0iMiIvPjxwYXRoIGQ9Ik0xNSAzdjE4Ii8+PHBhdGggZD0ibTggOSAzIDMtMyAzIi8+PC9zdmc+",
  search: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZWFyY2gtaWNvbiBsdWNpZGUtc2VhcmNoIj48cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjwvc3ZnPg==",
  command: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzMgMTczIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb21tYW5kLWljb24gbHVjaWRlLWNvbW1hbmQiPjxwYXRoIGQ9Ik0xNSA2djEyYTMgMyAwIDEgMCAzLTNINmEzIDMgMCAxIDAgMyAzVjZhMyAzIDAgMSAwLTMgM2gxMmEzIDMgMCAxIDAtMy0zIi8+PC9zdmc+",
  full_signals: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyNTUgNDggOTgpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtc2lnbmFsLWljb24gbHVjaWRlLXNpZ25hbCI+PHBhdGggZD0iTTIgMjBoLjAxIi8+PHBhdGggZD0iTTcgMjB2LTQiLz48cGF0aCBkPSJNMTIgMjB2LTgiLz48cGF0aCBkPSJNMTcgMjBWOCIvPjxwYXRoIGQ9Ik0yMiA0djE2Ii8+PC9zdmc+",
  half_signals: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyNDEgMTk1IDQwKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNpZ25hbC1sb3ctaWNvbiBsdWNpZGUtc2lnbmFsLWxvdyI+PHBhdGggZD0iTTIgMjBoLjAxIi8+PHBhdGggZD0iTTcgMjB2LTQiLz48L3N2Zz4=",
  signals: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNCAyMTMgMzQpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtc2lnbmFsLXplcm8taWNvbiBsdWNpZGUtc2lnbmFsLXplcm8iPjxwYXRoIGQ9Ik0yIDIwaC4wMSIvPjwvc3ZnPg==",
}

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <header className={`${styles.sidebar_header}`}>
        <div>
          <span className={styles.logo}>L</span>
          <button className={styles.btn_close} />
          <button className={styles.btn_open} />
        </div>
        <div className={styles.sidebar_search_container}>
          <span className={`${styles.icon} ${styles.search_icon}`} />
          <input type="search" name="search" placeholder="Search..." />
          <div className={styles.sidebar_icons}>
            <span className={`${styles.icon} ${styles.sidebar_icon_cmd}`} />
            <span className={`${styles.icon} ${styles.sidebar_icon_key}`}>F</span>
          </div>
        </div>
      </header>





      <nav className={`${styles.gutter_inline} ${styles.sidebar_nav}`}>
        <ul className={styles.sidebar_list}>
          <li className={`${styles.sidebar_list_item}`}>
            <Link href="#" className={`${styles.active} ${styles.sidebar_item_link}`}>
              <span className={`${styles.icon} ${styles.sidebar_link_icon}`} />
              <span className={styles.sidebar_label}>Focus</span>
            </Link>
          </li>
          <li className={`${styles.sidebar_list_item}`}>
            <Link href="#" className={styles.sidebar_item_link}>
              <span className={`${styles.icon} ${styles.sidebar_link_icon}`} />
              <span className={styles.sidebar_label}>Dashboard</span>
            </Link>
          </li>
          <li className={`${styles.sidebar_list_item}`}>
            <Link href="#" className={styles.sidebar_item_link}>
              <span className={`${styles.icon} ${styles.sidebar_link_icon}`} />
              <span className={styles.sidebar_label}>Tasks</span>
            </Link>
          </li>
          <li className={`${styles.sidebar_list_item}`}>
            <Link href="#" className={styles.sidebar_item_link}>
              <span className={`${styles.icon} ${styles.sidebar_link_icon}`} />
              <span className={styles.sidebar_label}>Schedule</span>
            </Link>
          </li>
          <li className={`${styles.sidebar_list_item}`}>
            <Link href="#" className={styles.sidebar_item_link}>
              <span className={`${styles.icon} ${styles.sidebar_link_icon}`} />
              <span className={styles.sidebar_label}>Inbox</span>
            </Link>
          </li>
          <li className={`${styles.sidebar_list_item}`}>
            <Link href="#" className={styles.sidebar_item_link}>
              <span className={`${styles.icon} ${styles.sidebar_link_icon}`} />
              <span className={styles.sidebar_label}>Analytics</span>
            </Link>
          </li>
          <li className={`${styles.sidebar_list_item}`}>
            <Link href="#" className={styles.sidebar_item_link}>
              <span className={`${styles.icon} ${styles.sidebar_link_icon}`} />
              <span className={styles.sidebar_label}>More</span>
            </Link>
          </li>
        </ul>



        <ul>
          <li className={`${styles.sidebar_list_item} ${styles.sidebar_item_block}`}>
            <span className={styles.sidebar_block_label}>My Team</span>
            <button className={`${styles.icon} ${styles.btn_add}`} />
          </li>
          <li className={`${styles.sidebar_list_item}`}>
            <Link href="#" className={styles.sidebar_item_link}>
              <span className={`${styles.team_avatar} ${styles.avatar}`} />
              <span className={styles.sidebar_label}>Olivia R</span>
              <span className={`${styles.regular_member} ${styles.sidebar_user_icon} ${styles.icon}`} />
            </Link>
          </li>

          <li className={`${styles.sidebar_list_item}`}>
            <Link href="#" className={styles.sidebar_item_link}>
              <span className={`${styles.team_avatar} ${styles.avatar}`} />
              <span className={styles.sidebar_label}>Dan D</span>
              <span className={`${styles.partime_member} ${styles.sidebar_user_icon} ${styles.icon}`} />
            </Link>
          </li>

          <li className={`${styles.sidebar_list_item}`}>
            <Link href="#" className={styles.sidebar_item_link}>
              <span className={`${styles.team_avatar} ${styles.avatar}`} />
              <span className={styles.sidebar_label}>Ethan Hunt</span>
              <span className={`${styles.irregular_member} ${styles.sidebar_user_icon} ${styles.icon}`} />
            </Link>
          </li>
        </ul>
      </nav>







      <footer className={`${styles.gutter_top} ${styles.sidebar_footer}`}>
        <div>
          <ul className={styles.sidebar_list}>
            <li className={`${styles.sidebar_list_item}`}>
              <Link href="#" className={styles.sidebar_item_link}>
                <span className={`${styles.icon} ${styles.sidebar_link_icon}`} />
                <span className={styles.sidebar_label}>Settings</span>
              </Link>
            </li>
            <li className={`${styles.sidebar_list_item}`}>
              <Link href="#" className={styles.sidebar_item_link}>
                <span className={`${styles.icon} ${styles.sidebar_link_icon}`} />
                <span className={styles.sidebar_label}>Help center</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.sidebar_help_container}>
          <span className={`${styles.user_avatar} ${styles.avatar}`} />
          <div className={styles.sidebar_user}>
            <span className={styles.sidebar_username}>Zafar Saleem</span>
            <span className={styles.sidebar_role}>Admin</span>
          </div>
          <span className={`${styles.sidebar_user_icon} ${styles.icon}`} />
        </div>
      </footer>
    </aside>
  )
}