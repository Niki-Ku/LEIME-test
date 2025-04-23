"use client";

import { useDisclosure } from "@heroui/modal";
import { useCallback, useEffect, useState } from "react";

import { title } from "@/components/primitives";
import { columns } from "@/config/tableColumns";
import { IMeme } from "@/types";
import { validateTitle, validateImgUrlError } from "@/utils/inputsValidation";
import MemeTable from "@/components/MemeTable";
import EditMemeModal from "@/components/EditMemeModal";
import { useMemesFromLocal } from "@/hooks/useMemesFromLocal";

const TablePage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { memes, setMemes, updateLocalStorageMemes } = useMemesFromLocal();
  const [editedMemeObj, setEditedMemeObj] = useState<IMeme>({
    id: 0,
    title: "",
    imgUrl: "",
    likes: 0,
    link: "",
  });
  const [fieldsErrors, setFieldsErrors] = useState<{
    title: boolean;
    imgUrl: boolean;
  }>({ title: false, imgUrl: false });
  const [editedMemeId, setEditedMemeId] = useState<number>(0);
  const editedMeme = memes.find((m) => m.id === editedMemeId);

  const onEditPress = useCallback((id: number) => {
    setEditedMemeId(id);
    onOpen();
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent, id: number) => {
      e.preventDefault();
      const isTitleError = validateTitle(editedMemeObj.title);
      const isImgUrlError = validateImgUrlError(editedMemeObj.imgUrl);

      setFieldsErrors({ title: isTitleError, imgUrl: isImgUrlError });
      if (!isImgUrlError && !isTitleError) {
        if (editedMemeObj.title && editedMemeObj.imgUrl) {
          const updatedMemes = memes.map((m) =>
            m.id === id
              ? {
                  ...m,
                  title: editedMemeObj.title,
                  imgUrl: editedMemeObj.imgUrl,
                }
              : m,
          );

          setMemes(updatedMemes);
          updateLocalStorageMemes(updatedMemes);
          onOpenChange();
        }
      }
    },
    [editedMemeObj],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (fieldsErrors.imgUrl)
        setFieldsErrors({ ...fieldsErrors, imgUrl: false });
      if (fieldsErrors.title)
        setFieldsErrors({ ...fieldsErrors, title: false });

      setEditedMemeObj({
        ...editedMemeObj,
        [e.target.name]: e.target.value,
      });
    },
    [fieldsErrors],
  );

  useEffect(() => {
    if (editedMeme) setEditedMemeObj({ ...editedMeme });
    setFieldsErrors({ title: false, imgUrl: false });
  }, [editedMemeId]);

  return (
    <div className="text-center">
      <h1 className={title()}>Table Page</h1>
      <MemeTable columns={columns} memes={memes} onEditPress={onEditPress} />
      <EditMemeModal
        editedMemeObj={editedMemeObj}
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
