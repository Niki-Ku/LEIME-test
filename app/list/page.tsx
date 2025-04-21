import CardComponent from "@/components/CardComponent";
import { title } from "@/components/primitives";
import { memes } from "@/config/memes";

const TablePage = () => {
  return (
    <div className="text-center">
      <h1 className={title()}>List Page</h1>
      <div className="grid grid-cols-4 gap-3 my-6">
        {memes.map(m => (
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
