// react imports
import { useState } from "react";

// next imports
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// models
import { Link as LinkModal, ILink } from "@/models/link.model";

// data
import { linkData } from "@/data/linkData";

// helpers
import { getScreenshot, faviconToBase64 } from "@/helpers/getScreenshot";

// mui
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Chip from "@mui/joy/Chip";

// images
import logo from "@/images/logo.png";

// components
import LinkCard from "@/components/LinkCard";

// lib imports
import { compareAsc } from "date-fns";
import { Container } from "@mui/joy";

export default function Home({ links }: { links: ILink[] }) {
  const [filter, setFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const tags = links
    .reduce((acc, link): any => [...acc, ...link.tags], [])
    .filter((tag, index, self) => self.indexOf(tag) === index)
    .sort();

  return (
    <>
      <Head>
        <title>Teolink</title>
        <meta
          name="description"
          content="A collection of useful links for developers, made by @teobot."
        />
      </Head>
      <Box
        sx={{
          bgcolor: "background.surface",
        }}
      >
        {/* <Input
          endDecorator={<ClearIcon onClick={() => setSearch("")} />}
          size="lg"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}
        <Box sx={{ p: 3 }}>
          <Image src={logo} alt="logo" width={45} height={45} />
        </Box>
        <Container
          sx={{
            pb: 2,
          }}
        >
          <Stack
            direction="row"
            flexWrap={"wrap"}
            rowGap={1}
            columnGap={1}
            justifyContent={"center"}
          >
            {tags.map((tag) => {
              const isSelected = filter === tag;
              return (
                <Chip
                  key={tag}
                  onClick={() => setFilter(isSelected ? "" : tag)}
                  variant={isSelected ? "solid" : "outlined"}
                >
                  {tag}
                </Chip>
              );
            })}
          </Stack>
        </Container>
        <Box sx={{ px: 2, my: 1 }}>
          <Divider />
        </Box>
        <Stack
          direction="row"
          flexWrap={"wrap"}
          rowGap={2}
          columnGap={2}
          justifyContent={"space-evenly"}
          sx={{ p: 2 }}
        >
          {links
            .sort((a: ILink, b: ILink) => {
              // b.uploadedDate and a.uploadedDate will always have a value, force it with !
              return compareAsc(
                new Date(b.uploadedDate!),
                new Date(a.uploadedDate!)
              );
            })
            .filter((link) => {
              if (filter === "") return true;
              return link.tags.includes(filter);
            })
            .filter((link) => {
              if (search === "") return true;

              // search in tags
              if (
                link.tags.some((tag) =>
                  tag.toLowerCase().includes(search.toLowerCase())
                )
              )
                return true;

              // search in title
              if (link.title!.toLowerCase().includes(search.toLowerCase()))
                return true;
            })
            .map((link: ILink, index) => (
              <LinkCard key={index} link={link} />
            ))}
          {/* </Sheet> */}
        </Stack>
        <Box sx={{ p: 2 }}>
          <Typography level="title-md" sx={{ textAlign: "center" }}>
            Made with ❤️ by{" "}
            <Link
              href="https://github.com/teobot"
              target="_blank"
              style={{
                textDecoration: "underline",
              }}
            >
              @teobot
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export const getStaticProps = async () => {
  let links = [];

  const FROM = 0;
  const TO = linkData.length;

  for (let i = FROM; i < TO; i++) {
    const link = linkData[i];
    const { screenshot, description, title, favicon } = await getScreenshot(
      link.href
    );
    console.log(`Current Progress: ${i + 1}/${TO}`);
    links.push(
      new LinkModal({
        ...link,
        image: screenshot,
        title: link.title ? link.title : title,
        description: link.description ? link.description : description,
        favicon: favicon,
      })
    );
  }

  return {
    props: {
      links: JSON.parse(JSON.stringify(links)),
    },
  };
};
