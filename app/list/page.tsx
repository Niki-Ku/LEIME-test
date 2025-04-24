"use client";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { useState, useCallback } from "react";
import { Pagination } from "@heroui/pagination";

import AddMemeModal from "@/components/AddMemeModal";
import { useMemesFromLocal } from "@/hooks/useMemesFromLocal";
import { useSearchMemes } from "@/hooks/useSearchMemes";
import { IMeme, InputField } from "@/types";
import {
  validateTitle,
  validateImgUrlError,
  validateLikes,
  validateLink,
} from "@/utils/inputsValidation";
import SearchInput from "@/components/SearchInput";
import DisplayMemeCards from "@/components/DisplayMemeCards";

const TablePage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { memes, setMemes, updateLocalStorageMemes } = useMemesFromLocal();
  const { search, setSearch, filteredMemes } = useSearchMemes(memes);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredMemes.length / itemsPerPage);
  const [page, setPage] = useState<number>(1);
  const displayMemes = page * itemsPerPage;
  const [addMemeObj, setAddMemeObj] = useState<IMeme>({
    id: 0,
    title: "",
    imgUrl: "",
    likes: "",
    link: "",
  });
  const [fieldsErrors, setFieldsErrors] = useState<{
    title: boolean;
    imgUrl: boolean;
    link: boolean;
    likes: boolean;
  }>({ title: false, imgUrl: false, likes: false, link: false });

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const isTitleError = validateTitle(addMemeObj.title);
      const isImgUrlError = validateImgUrlError(addMemeObj.imgUrl);
      const isLinkError = validateLink(addMemeObj.link);
      const isLikesError = validateLikes(addMemeObj.likes);

      setFieldsErrors({
        title: isTitleError,
        imgUrl: isImgUrlError,
        likes: isLikesError,
        link: isLinkError,
      });
      if (!isImgUrlError && !isTitleError && !isLinkError && !isLikesError) {
        if (
          addMemeObj.title &&
          addMemeObj.imgUrl &&
          addMemeObj.likes &&
          addMemeObj.link
        ) {
          const newMemesArr = [
            { ...addMemeObj, id: memes.length + 1 },
            ...memes,
          ];

          setMemes(newMemesArr);
          updateLocalStorageMemes(newMemesArr);
          onOpenChange();
        }
      }
    },
    [addMemeObj],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name as InputField;

      if (fieldsErrors[name])
        setFieldsErrors((prev) => {
          return { ...prev, [name]: false };
        });

      setAddMemeObj((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    },
    [fieldsErrors],
  );

  const onPaginationClick = useCallback((page: number) => {
    setPage(page);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl">List Page</h1>
      <Button
        className="w-full mt-10"
        color="secondary"
        variant="light"
        onPress={onOpen}
      >
        Add Meme
      </Button>
      <SearchInput search={search} setSearch={setSearch} />
      <DisplayMemeCards
        memesArr={filteredMemes.slice(
          displayMemes - itemsPerPage,
          displayMemes,
        )}
      />
      <Pagination
        classNames={{
          wrapper: "mx-auto",
        }}
        initialPage={1}
        total={totalPages}
        onChange={onPaginationClick}
      />
      <AddMemeModal
        addMemeObj={addMemeObj}
        fieldsErrors={fieldsErrors}
        handleInputChange={handleInputChange}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default TablePage;
