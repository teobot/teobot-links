import { Link } from "@/models/link.model";

import Head from "next/head";

import { Container } from "react-bootstrap";

import LinkCard from "@/components/LinkCard";

export default function Home({ links }: { links: Link[] }) {
  return (
    <Container>
      <div className="d-flex gap-5 py-5">
        {links.map((link) => {
          return <LinkCard key={link.title} link={link} />;
        })}
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const links = [
    new Link({
      title: "Google",
      href: "https://google.com",
    }),
    new Link({
      title: "Facebook",
      href: "https://facebook.com",
    }),
  ];
  return {
    props: {
      links: JSON.parse(JSON.stringify(links)),
    },
  };
};
