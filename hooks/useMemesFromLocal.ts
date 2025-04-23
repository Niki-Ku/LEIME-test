import { useState, useEffect } from "react";

import { IMeme } from "@/types";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "@/utils/localStorageUtils";

export const useMemesFromLocal = () => {
  const [memes, setMemes] = useState<IMeme[]>([]);

  useEffect(() => {
    setMemes(getItemFromLocalStorage("memes") || []);
  }, []);

  const updateMemes = (updatedMemes: IMeme[]) => {
    setItemToLocalStorage("memes", updatedMemes);
  };

  return { memes, setMemes, updateLocalStorageMemes: updateMemes };
};
