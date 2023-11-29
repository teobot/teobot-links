// next
import Image from "next/image";

// models
import { ILink } from "@/models/link.model";

// mui
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import LanguageIcon from "@mui/icons-material/Language";
import IconButton from "@mui/joy/IconButton";

type LinkCardProps = { link: ILink };

const IMAGE_SIZE = 375;
const RATIO = [16, 9];
const DESCRIPTION_LENGTH = 100;
const ICON_SIZE = 35;

const LinkCard = ({ link }: LinkCardProps) => {
  // const { openModal } = useContext(ModalContext);

  const openHref = () => {
    //: open link in new tab
    window.open(link.href, "_blank");
  };

  return (
    <Card
      variant="outlined"
      sx={{
        position: "relative",
        maxWidth: IMAGE_SIZE,
        minWidth: IMAGE_SIZE,
      }}
    >
      <CardOverflow>
        <AspectRatio ratio={RATIO.join("/")}>
          {/* new icon */}
          <Image
            style={{
              cursor: "pointer",
              minWidth: IMAGE_SIZE,
              maxWidth: IMAGE_SIZE,
              objectFit: "contain",
            }}
            onClick={openHref}
            src={link.image as string}
            alt={link.title!}
            width={IMAGE_SIZE}
            height={(IMAGE_SIZE / RATIO[0]) * RATIO[1]}
          />
        </AspectRatio>

        {link.favicon ? (
          <Image
            onClick={openHref}
            src={link.favicon! as string}
            alt={link.title!}
            width={ICON_SIZE}
            height={ICON_SIZE}
            style={{
              filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 1))",
              position: "absolute",
              zIndex: 2,
              borderRadius: "50%",
              right: "1rem",
              bottom: 0,
              transform: "translateY(50%)",
            }}
          />
        ) : (
          <IconButton
            aria-label="Like minimal photography"
            size="md"
            variant="solid"
            color="primary"
            sx={{
              position: "absolute",
              zIndex: 2,
              borderRadius: "50%",
              right: "1rem",
              bottom: 0,
              transform: "translateY(50%)",
              width: ICON_SIZE,
              height: ICON_SIZE,
            }}
          >
            <LanguageIcon />
          </IconButton>
        )}
      </CardOverflow>
      <CardContent>
        {link.isNew && (
          <Button
            color="success"
            variant="solid"
            size="sm"
            sx={{
              position: "absolute",
              top: "0.1rem",
              right: "0.1rem",
            }}
          >
            NEW
          </Button>
        )}

        <Typography level="title-lg">
          <Link
            onClick={openHref}
            underline="hover"
            sx={{
              width: "95%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            {link.title!}
          </Link>
        </Typography>
        <Typography level="body-sm">
          {link.description!.substring(0, DESCRIPTION_LENGTH)}
          {link.description!.length > DESCRIPTION_LENGTH && "..."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LinkCard;
