"use client";
import { useEffect } from "react";

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
        <span className="text-4xl">Memes&nbsp;</span>
        <span className="text-violet-600 text-4xl">test task&nbsp;</span>
      </div>
    </section>
  );
};

export default Home;
