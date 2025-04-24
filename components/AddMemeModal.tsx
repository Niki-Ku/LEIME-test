import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";

import ModalComponent from "./ModalComponent";

import { IMeme } from "@/types";

const AddMemeModal = ({
  isOpen,
  onOpenChange,
  onSubmit,
  addMemeObj,
  fieldsErrors,
  handleInputChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  onSubmit: (e: React.FormEvent) => void;
  addMemeObj: IMeme;
  fieldsErrors: {
    title: boolean;
    imgUrl: boolean;
    likes: boolean;
    link: boolean;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange}>
      <form onSubmit={onSubmit}>
        <ModalHeader>Add Meme</ModalHeader>
        <ModalBody>
          <Input
            errorMessage="Title should be from 3 to 100 symbols length"
            isInvalid={fieldsErrors.title}
            label="Title"
            name="title"
            type="text"
            value={addMemeObj.title}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            errorMessage="Url is not valid jpg"
            isInvalid={fieldsErrors.imgUrl}
            label="Image Url"
            name="imgUrl"
            type="text"
            value={addMemeObj.imgUrl}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            errorMessage="Url is not valid"
            isInvalid={fieldsErrors.link}
            label="Link"
            name="link"
            placeholder="https://www.google.com"
            type="text"
            value={addMemeObj.link}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            errorMessage="Likes should be a number from 0 to 99"
            isInvalid={fieldsErrors.likes}
            label="Likes"
            name="likes"
            type="number"
            value={addMemeObj.likes}
            onChange={(e) => handleInputChange(e)}
          />
        </ModalBody>
        <ModalFooter>
          <Button className="w-full" color="secondary" type="submit">
            Submit
          </Button>
        </ModalFooter>
      </form>
    </ModalComponent>
  );
};

export default AddMemeModal;
