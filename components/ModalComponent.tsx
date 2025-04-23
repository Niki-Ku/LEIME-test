import { Modal, ModalContent } from "@heroui/modal";

const ModalComponent = ({
  children,
  isOpen,
  onOpenChange,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} size="xl" onOpenChange={onOpenChange}>
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};

export default ModalComponent;
