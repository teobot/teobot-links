import { useState } from "react";

import { Link, LinkTypes } from "@/models/link.model";

import { getScreenshot } from "@/helpers/getScreenshot";
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";

import LinkCard from "@/components/LinkCard";

export default function Home({ links }: { links: Link[] }) {
  const [filter, setFilter] = useState<string>("");

  const handleFilterPress = () => {};

  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={8}>Hello World!</Grid>
      <Grid xs={4}>
        {[...links, ...links, ...links].map((link, index) => (
          <Card key={index} />
        ))}
      </Grid>
    </Grid>
  );
}

export const getStaticProps = async () => {
  // const links = [
  //   new Link({
  //     title: "Realtime Colours",
  //     description:
  //       "A realtime colour picker for seeing how colours look together on a realtime website.",
  //     href: "https://realtimecolors.com/",
  //     image: await getScreenshot("https://realtimecolors.com/"),
  //     type: LinkTypes.COLOURS,
  //     tags: ["colours", "palette"],
  //   }),
  //   new Link({
  //     title: "Coolors",
  //     description:
  //       "A colour palette generator for creating colour palettes for websites.",
  //     href: "https://coolors.co/",
  //     image: await getScreenshot("https://coolors.co/"),
  //     type: LinkTypes.COLOURS,
  //     tags: ["colours", "palette"],
  //   }),
  //   new Link({
  //     title: "Excalidraw",
  //     description:
  //       "A whiteboard for drawing diagrams and sharing them with others.",
  //     href: "https://excalidraw.com/",
  //     image: await getScreenshot("https://excalidraw.com/"),
  //     type: LinkTypes.DRAWING,
  //     tags: ["drawing", "diagrams", "whiteboard", "wire framing"],
  //   }),
  //   new Link({
  //     title: "Figma",
  //     description:
  //       "A design tool for creating designs and sharing them with others.",
  //     href: "https://www.figma.com/",
  //     image: await getScreenshot("https://www.figma.com/"),
  //     type: LinkTypes.DRAWING,
  //     tags: ["drawing", "diagrams", "whiteboard", "wire framing"],
  //   }),
  //   new Link({
  //     title: "Phind",
  //     description:
  //       "A AI powered search engine for finding answers to software development questions.",
  //     href: " https://www.phind.com/",
  //     image: await getScreenshot("https://www.phind.com/"),
  //     type: LinkTypes.HELPER,
  //     tags: ["search", "questions", "answers"],
  //   }),
  // ];

  const fake_links = require("../data/links.data.json");

  return {
    props: {
      links: JSON.parse(JSON.stringify(fake_links)),
    },
  };
};
