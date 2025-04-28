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
        <h1>
          <span className="text-4xl">Memes&nbsp;</span>
          <span className="text-violet-600 text-4xl">test task&nbsp;</span>
        </h1>
        <div className="text-start">
          <p className="mt-6 text-lg">
            This project is a responsive React application built using the
            HeroUI component library. The app provides a simple meme directory
            with functionality to view memes as a list or in a table format.
          </p>

          <p className="mt-6 text-lg">
            Users can browse, edit, and add new memes, search memes by name, and
            switch between different display modes via a navigation bar. The
            application also includes performance optimization for large lists
            and ensures a smooth user experience on both desktop and mobile
            devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
