// react
import { useContext } from "react";

// next
import Image from "next/image";

// hooks
import { ModalContext } from "@/hooks/useModal";

// models
import { Link } from "@/models/link.model";

// mui
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button, Sheet } from "@mui/joy";

type LinkCardProps = { link: Link };

const IMAGE_SIZE = 300;
const RATIO = [16, 9];

const LinkCard = ({ link }: LinkCardProps) => {
  const { openModal } = useContext(ModalContext);

  const openHref = () => {
    //: open link in new tab
    window.open(link.href, "_blank");
  };

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "min-content",
        height: "min-content",
        float: "left",
      }}
    >
      <Image
        style={{ cursor: "pointer" }}
        onClick={() => openModal(link)}
        src={link.image as string}
        alt={link.title}
        width={IMAGE_SIZE}
        height={(IMAGE_SIZE / RATIO[0]) * RATIO[1]}
      />
      <Sheet
        sx={{
          display: "flex",
          flexDirection: "col",
          justifyContent: "space-between",
        }}
      >
        <Typography level="title-lg">{link.title}</Typography>
        <Button
          aria-label="Like"
          variant="outlined"
          color="neutral"
          size="sm"
          onClick={openHref}
        >
          <OpenInNewIcon />
        </Button>
      </Sheet>
    </Card>
  );
};

export default LinkCard;
