import { useState } from "react";

import { Link as LinkModal, ILink } from "@/models/link.model";

// data
import { linkData } from "@/data/linkData";

// helpers
import { getScreenshot } from "@/helpers/getScreenshot";

// mui
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";

// images
import logo from "@/images/logo.png";

// components
import LinkCard from "@/components/LinkCard";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home({ links }: { links: ILink[] }) {
  const [filter, setFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");

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
        <Box sx={{ p: 3 }}>
          <Image src={logo} alt="logo" width={45} height={45} />
        </Box>
        <Grid container>
          <Grid xs={2}>
            <Sheet
              sx={{
                borderRight: "1px solid",
                borderColor: "background.level1",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                flex: 1,
                p: 3,
              }}
            >
              <Sheet
                sx={{
                  borderBottom: "1px solid",
                  borderColor: "background.level1",
                  pb: 2,
                }}
              >
                <Input
                  endDecorator={<ClearIcon onClick={() => setSearch("")} />}
                  size="lg"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Sheet>
              {links
                .reduce((acc, link): any => [...acc, ...link.tags], [])
                .filter((tag, index, self) => self.indexOf(tag) === index)
                .sort()
                .map((tag) => {
                  const isSelected = filter === tag;
                  return (
                    <Card
                      key={tag}
                      variant={isSelected ? "soft" : "outlined"}
                      sx={{
                        width: "100%",
                        // on hover
                        "&:hover": {
                          backgroundColor: "background.level2",
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => setFilter(isSelected ? "" : tag)}
                    >
                      <Typography
                        level="title-md"
                        sx={{
                          //  capitalize
                          textTransform: "capitalize",
                        }}
                      >
                        {tag}
                      </Typography>
                    </Card>
                  );
                })}
            </Sheet>
          </Grid>
          <Grid xs={10}>
            <Sheet sx={{ display: "flex", gap: 5, flexWrap: "wrap", p: 2 }}>
              {links
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
                  if (link.title.toLowerCase().includes(search.toLowerCase()))
                    return true;
                })
                .map((link, index) => (
                  <LinkCard key={index} link={link} />
                ))}
            </Sheet>
          </Grid>
        </Grid>
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

  for (let i = 0; i < linkData.length; i++) {
    const link = linkData[i];
    const screenshot = await getScreenshot(link.href);
    links.push(new LinkModal({ ...link, image: screenshot }));
  }

  return {
    props: {
      links: JSON.parse(JSON.stringify(links)),
    },
  };
};
