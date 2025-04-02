import { useEffect, useRef } from "react";
import { IconButton } from "./IconButton";
import { CrossIcon } from "./icons/CrossIcon";

type ModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  title: string;
};

export const Modal = ({
  isModalOpen,
  closeModal,
  children,
  title,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;

    const handleOutsideClick = (e: MouseEvent) => {
      if (dialogElement && e.target === dialogElement) {
        closeModal();
      }
    };

    if (isModalOpen) {
      dialogElement?.showModal();
      dialogElement?.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      dialogElement?.close();
    }

    return () => {
      dialogElement?.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [isModalOpen, closeModal]);

  return (
    <dialog ref={dialogRef} onCancel={closeModal}>
      <div className="modal-content">
        <header>
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close">
            <IconButton onClick={closeModal} label="Close Form">
              <CrossIcon />
            </IconButton>
          </span>
        </header>
        {children}
      </div>
    </dialog>
  );
};
