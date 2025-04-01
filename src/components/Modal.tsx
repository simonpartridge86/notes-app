import { useEffect, useRef } from "react";
import { IconButton } from "./IconButton";
import { CrossIcon } from "./icons/CrossIcon";

type ModalProps = {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  title: string;
};

export const Modal = ({
  openModal,
  closeModal,
  children,
  title,
}: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (openModal) {
        ref.current.showModal();
      } else {
        ref.current.close();
      }
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal}>
      <div className="modal-content">
        <header>
          <h4 className="modal-title">{title}</h4>
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
