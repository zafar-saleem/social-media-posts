"use client";

import globals from "./page.module.css";
import callback from "./callback.module.css";
import { ChildComponent } from "./ChildComponent";
import React from "react";
import { IEvent } from "./IEvent";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div className={`${globals.center}`}>
      <h1>Git basics</h1>
      <article>
        <h2>Feature branch and rebase</h2>
      </article>
    </div>
  );
}
