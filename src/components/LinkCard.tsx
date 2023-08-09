import { Link } from "@/models/link.model";

// import css
import styles from "./LinkCard.module.css";

import Image from "react-bootstrap/Image";

type LinkCardProps = { link: Link };

const LinkCard = ({ link }: LinkCardProps) => {
  return (
    <div
      className="card p-3 shadow mb-3"
      style={{
        backgroundColor: "#222222ff",
        aspectRatio: 4 / 1,
        width: 450,
        height: "auto",
      }}
    >
      <Image
        src={link.image}
        alt={link.title}
        width={"100%"}
        className="rounded"
      />
      <div className="py-2 mb-0 pb-0">
        <h3 className="m-0 p-0">{link.title}</h3>
      </div>
    </div>
  );
};

export default LinkCard;
