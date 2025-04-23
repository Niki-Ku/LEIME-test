"use client";
import { Input } from "@heroui/input";

import CardComponent from "@/components/CardComponent";
import { title } from "@/components/primitives";
import { useMemesFromLocal } from "@/hooks/useMemesFromLocal";
import { useSearchMemes } from "@/hooks/useSearchMemes";

// TODO:
// make add meme button
// make pagination

const TablePage = () => {
  const { memes } = useMemesFromLocal();
  const { search, setSearch, filteredMemes } = useSearchMemes(memes);

  return (
    <div className="text-center">
      <h1 className={title()}>List Page</h1>
      <div className="mt-6">
        <Input
          label="Search"
          placeholder="Type to search meme by name..."
          radius="lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-3 my-6">
        {filteredMemes.map((m) => (
          <CardComponent
            key={m.id}
            imgUrl={m.imgUrl}
            likes={m.likes}
            link={m.link}
            title={m.title}
          />
        ))}
      </div>
    </div>
  );
};

export default TablePage;
