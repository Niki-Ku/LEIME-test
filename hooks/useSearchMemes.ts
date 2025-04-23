import { useMemo, useState } from "react";

import { useDebounce } from "./useDebounce";

import { IMeme } from "@/types";

export const useSearchMemes = (memes: IMeme[]) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const filteredMemes = useMemo(() => {
    return memes.filter((m) =>
      m.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [memes, debouncedSearch]);

  return { search, setSearch, filteredMemes };
};
