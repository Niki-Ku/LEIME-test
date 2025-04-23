"use client";
import { useEffect } from "react";

import { title } from "@/components/primitives";
import { memes } from "@/config/memes";
import {
  setItemToLocalStorage,
  getItemFromLocalStorage,
} from "@/utils/localStorageUtils";

const Home = () => {
  useEffect(() => {
    const checkStorage = () => {
      if (!getItemFromLocalStorage("memes")) {
        setItemToLocalStorage("memes", memes);
      }
    };

    checkStorage();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "violet" })}>Memes&nbsp;</span>
        <span className={title()}>test task&nbsp;</span>
      </div>
    </section>
  );
};

export default Home;
