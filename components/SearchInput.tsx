import { Input } from "@heroui/input";
import { SetStateAction } from "react";

const SearchInput = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="mt-6">
      <Input
        label="Search"
        placeholder="Type to search meme by name..."
        radius="lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
