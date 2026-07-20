"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";
import Image from "next/image";

export const DATA = [
  {
    id: 1,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-platter-icon lucide-hand-platter"><path d="M12 3V2"/><path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"/><path d="M2 14h12a2 2 0 0 1 0 4h-2"/><path d="M4 10h16"/><path d="M5 10a7 7 0 0 1 14 0"/><path d="M5 14v6a1 1 0 0 1-1 1H2"/></svg>,
    category: "dining",
    promotion: "-20% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://cdn.dribbble.com/userupload/19152509/file/original-0880b06a47cae8b7a33fc49f7ee1a788.jpg",
  },
  {
    id: 2,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-film-icon lucide-film"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>,
    category: "entertainment",
    promotion: "-10% off",
    title: "Marriot Bonvoy",
    supporting_text: "American Express",
    image: "https://cdn.dribbble.com/userupload/17426172/file/original-3c233ffcc68705c4dac6d3c1624df028.png",
  },
  {
    id: 3,
    icon:  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fuel-icon lucide-fuel"><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"/><path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"/><path d="M2 21h13"/><path d="M3 9h11"/></svg>,
    category: "gas",
    promotion: "-25% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://cdn.dribbble.com/userupload/41731788/file/original-34597651d00caf1843d1da048a1f15ed.png",
  },
  {
    id: 4,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell-icon lucide-dumbbell"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/></svg>,
    category: "health",
    promotion: "-15% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://cdn.dribbble.com/userupload/22031111/file/original-b0bc0226c8c32f8b7b44f7d558e7d170.png",
  },
  {
    id: 5,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
    category: "home",
    promotion: "-5% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://cdn.dribbble.com/userupload/15112062/file/original-f7d12ede9eb72e6b71298cb130abeb2e.png",
  },
  {
    id: 6,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane-takeoff-icon lucide-plane-takeoff"><path d="M2 22h20"/><path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"/></svg>,
    category: "travel",
    promotion: "-30% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://as1.ftcdn.net/jpg/05/74/43/12/1000_F_574431210_icdpLDlDxAfsNacnV56vIWb4pCRnaNBA.jpg",
  },
  {
    id: 7,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-cent-icon lucide-badge-cent"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M12 7v10"/><path d="M15.4 10a4 4 0 1 0 0 4"/></svg>,
    category: "utilities",
    promotion: "-35% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://as2.ftcdn.net/jpg/04/47/11/07/1000_F_447110700_Jx7IGAei14C6bSGxtjwsQwidnn0p4RFD.jpg",
  },
  {
    id: 8,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket-icon lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>,
    category: "shopping",
    promotion: "-15% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://as2.ftcdn.net/jpg/00/26/65/61/1000_F_26656122_7oA4wM33d6tA9BqWEDDyeub1LhxKOcbM.jpg",
  },
  {
    id: 10,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket-icon lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>,
    category: "shopping",
    promotion: "-10% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://as2.ftcdn.net/jpg/10/14/58/91/1000_F_1014589191_CDjGQe9ZCGCCFGtuPJr5X7UwKbbVx9XZ.jpg",
  },
  {
    id: 11,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket-icon lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>,
    category: "dining",
    promotion: "-10% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://as2.ftcdn.net/jpg/05/74/95/29/1000_F_574952945_gafk3Mdl63SbL0gncpXXP1qwEYwcJBZO.jpg",
  },
  {
    id: 12,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket-icon lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>,
    category: "entertainment",
    promotion: "-25% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://as2.ftcdn.net/jpg/01/99/87/43/1000_F_199874348_cdXnU0m7FYr44luRuq7Ab4ECcbpjyacR.jpg",
  },
  {
    id: 13,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket-icon lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>,
    category: "home",
    promotion: "-25% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://as2.ftcdn.net/jpg/02/24/55/15/1000_F_224551527_uIv3FsxBMblasYXl52yHRVbuXwRObY5M.jpg",
  },
  {
    id: 14,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket-icon lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>,
    category: "travel",
    promotion: "-25% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://as2.ftcdn.net/jpg/01/11/06/85/1000_F_111068557_MOJBdg8IiTj1uUbPK7zFvl98DtbJwsQ9.jpg",
  },
  {
    id: 14,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket-icon lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>,
    category: "utilities",
    promotion: "-25% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://as2.ftcdn.net/jpg/01/11/06/85/1000_F_111068557_MOJBdg8IiTj1uUbPK7zFvl98DtbJwsQ9.jpg",
  },
  {
    id: 14,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket-icon lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>,
    category: "gas",
    promotion: "-25% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://as2.ftcdn.net/jpg/01/99/87/43/1000_F_199874348_cdXnU0m7FYr44luRuq7Ab4ECcbpjyacR.jpg",
  },
  {
    id: 15,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
    category: "health",
    promotion: "-5% off",
    title: "Marriot Bonvoy",
    supporting_text: "Premier Credit Card",
    image: "https://cdn.dribbble.com/userupload/15112062/file/original-f7d12ede9eb72e6b71298cb130abeb2e.png",
  },
]

const FILTERS_LIST = [
  {
    id: 1,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-platter-icon lucide-hand-platter"><path d="M12 3V2"/><path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"/><path d="M2 14h12a2 2 0 0 1 0 4h-2"/><path d="M4 10h16"/><path d="M5 10a7 7 0 0 1 14 0"/><path d="M5 14v6a1 1 0 0 1-1 1H2"/></svg>,
    category: "dining",
  },
  {
    id: 2,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-film-icon lucide-film"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>,
    category: "entertainment",
  },
  {
    id: 3,
    icon:  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fuel-icon lucide-fuel"><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"/><path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"/><path d="M2 21h13"/><path d="M3 9h11"/></svg>,
    category: "gas",
  },
  {
    id: 4,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell-icon lucide-dumbbell"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/></svg>,
    category: "health",
  },
  {
    id: 5,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
    category: "home",
  },
  {
    id: 6,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane-takeoff-icon lucide-plane-takeoff"><path d="M2 22h20"/><path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"/></svg>,
    category: "travel",
  },
  {
    id: 7,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-cent-icon lucide-badge-cent"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M12 7v10"/><path d="M15.4 10a4 4 0 1 0 0 4"/></svg>,
    category: "utilities",
  },
  {
    id: 8,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket-icon lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>,
    category: "shopping",
  },
]

export const BestCardWidget = () => {
  const [cards, setCards] = React.useState(DATA);

  return (
    <div className={styles.widget}>
      <div className={styles.widget_header}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
        <h1 className={styles.widget_title}>My best cards by category</h1>
        <Link href="#" className={styles.widget_link}>
          <span className={styles.link_text}>View all</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(41 48 58)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </Link>
      </div>


      <div className={styles.widget_filter}>
        <div className={styles.widget_scroll}>
          {
            FILTERS_LIST.map(filter => (
              <label className={`${styles.filter_label} ${styles[filter.category]}`} key={filter.id}>
                <input type="radio" className={styles.input_field} name="filter" defaultChecked={filter.id === 1 && true} />
                {filter.icon}
                <span className={styles.filter_text}>{filter.category}</span>
              </label>
            ))
          }
        </div>
      </div>


      <div className={styles.widget_cards}>
        <div className={styles.cards_scroll}>
        {
          cards.map(card => (
            <Link href="#" className={`${styles.card} ${styles[card.category]}`} key={card.id}>
              <Image
                src={card.image}
                width="2000"
                height="2000"
                alt=""
                className={styles.card_media}
              />
              <span className={styles.card_promotion}>{card.promotion}</span>
              <span className={styles.card_title}>{card.title}</span>
              <span className={styles.card_supporting_text}>{card.supporting_text}</span>
            </Link>
          ))
        }
        </div>
      </div>
    </div>
  )
}
