import CardComponent from "./CardComponent";

import { IMeme } from "@/types";

const DisplayMemeCards = ({ memesArr }: { memesArr: IMeme[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
      {memesArr.map((m) => (
        <CardComponent
          key={m.id}
          imgUrl={m.imgUrl}
          likes={m.likes}
          link={m.link}
          title={m.title}
        />
      ))}
    </div>
  );
};

export default DisplayMemeCards;
