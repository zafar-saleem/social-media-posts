"use client"

import styles from "./page.module.css";
import { ChildComponent } from "@/components/child/child";
import callback from "./callback.module.css";
import React, { Suspense } from "react";
import { IEvent } from "./IEvent";
import { text } from "stream/consumers";
import Link from "next/link";
import Image from "next/image";
import Logo from "./assets/logo.jpg";
// import { Contents } from "@/components/contents";
import { Button } from "@/components/button";
import { serverAction } from "./serverAction";
import { StyleRegistry } from "styled-jsx";
import image1 from "./assets/image-1.webp";
import image2 from "./assets/image-2.webp";
import image3 from "./assets/image-3.webp";
import image4 from "./assets/image-4.webp";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "./input";
import { usePathname } from 'next/navigation';
import { Title } from "@/components/title";
import dynamic from "next/dynamic";
import { CardMediaAnimation } from "@/components/cards/card_media_animation";
import { ShareButton } from "@/components/buttons/share";
import { DeleteMessageBox } from "@/components/dialogs/delete";
import { CreditCardDetails } from "@/components/card-details";
import { Perspective } from "@/components/cards/perspective";
import { Reviewers } from "@/components/reviewers";
import { CardMenu } from "@/components/cards/card-menu";

export default function Home() {
  return (
    <main className={styles.center}>
      <CardMenu />
    </main>
  );
}
