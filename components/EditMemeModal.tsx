import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";

import ModalComponent from "./ModalComponent";

import { IMeme } from "@/types";

const EditMemeModal = ({
  isOpen,
  onOpenChange,
  onSubmit,
  editedMemeObj,
  fieldsErrors,
  handleInputChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  onSubmit: (e: React.FormEvent, id: number) => void;
  editedMemeObj: IMeme;
  fieldsErrors: { title: boolean; imgUrl: boolean };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange}>
      <form onSubmit={(e) => onSubmit(e, editedMemeObj.id)}>
        <ModalHeader>Edit Meme</ModalHeader>
        <ModalBody>
          <span>Edited meme id: {editedMemeObj.id}</span>
          <Input
            errorMessage="Title should be from 3 to 100 symbols length"
            isInvalid={fieldsErrors.title}
            label="Title"
            name="title"
            type="text"
            value={editedMemeObj.title}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            errorMessage="Url is not valid jpg"
            isInvalid={fieldsErrors.imgUrl}
            label="Image"
            name="imgUrl"
            type="text"
            value={editedMemeObj.imgUrl}
            onChange={(e) => handleInputChange(e)}
          />
        </ModalBody>
        <ModalFooter>
          <Button type="submit">Submit</Button>
        </ModalFooter>
      </form>
    </ModalComponent>
  );
};

export default EditMemeModal;
