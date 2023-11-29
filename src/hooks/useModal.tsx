import { useState, useEffect, createContext } from "react";

import Image from "next/image";

import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import ModalDialog from "@mui/joy/ModalDialog";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";

import { ILink } from "@/models/link.model";

const IMAGE_SIZE = 500;
const RATIO = [16, 9];

export const ModalContext = createContext<{
  open: boolean;
  openModal: (link: ILink) => void;
  closeModal: () => void;
}>({ open: false, openModal: () => {}, closeModal: () => {} });

const useModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [clickedLink, setClickedLink] = useState<ILink | null>(null);

  const openModal = (_link: ILink) => {
    setClickedLink(_link);
  };

  const closeModal = () => {
    setClickedLink(null);
  };

  useEffect(() => {
    if (clickedLink) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [clickedLink]);

  const MyModal = () => {
    if (!clickedLink) return <></>;
    return (
      <Modal open={open} onClose={closeModal}>
        <ModalDialog
          layout="center"
          sx={{
            p: 5,
            width: "min-content",
          }}
          variant="plain"
        >
          <ModalClose />
          <Typography level="title-lg" sx={{ mb: 2 }}>
            {clickedLink.title}
          </Typography>
          <Image
            style={{ cursor: "pointer" }}
            onClick={() => window.open(clickedLink.href, "_blank")}
            src={clickedLink.image as string}
            alt={clickedLink.title}
            width={IMAGE_SIZE}
            height={(IMAGE_SIZE / RATIO[0]) * RATIO[1]}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {clickedLink.tags.map((tag: string) => (
              <Chip
                key={tag}
                sx={{ mt: 2, mr: 1 }}
                variant="outlined"
                size="sm"
              >
                {tag}
              </Chip>
            ))}
          </Box>
          <Typography level="body-md" sx={{ mt: 2 }}>
            {clickedLink.description}
          </Typography>
        </ModalDialog>
      </Modal>
    );
  };

  const ModalProvider = ({ children }: { children: JSX.Element }) => {
    return (
      <ModalContext.Provider
        value={{
          open,
          openModal,
          closeModal,
        }}
      >
        {children}
        <MyModal />
      </ModalContext.Provider>
    );
  };

  return {
    ModalProvider,
  };
};

export default useModal;
