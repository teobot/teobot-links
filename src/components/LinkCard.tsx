import { Link } from "@/models/link.model";

// import css
import styles from "./LinkCard.module.css";

type LinkCardProps = { link: Link };

const LinkCard = ({ link }: LinkCardProps) => {
  return (
    <div
      className="card p-5"
      style={{
        backgroundColor: "#222222ff",
      }}
    >
      <h2>{link.title}</h2>
      <p>{link.href}</p>
    </div>
  );
};

export default LinkCard;
