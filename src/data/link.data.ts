import { Link, LinkTypes } from "../models/link.model";

import { getScreenshot } from "@/helpers/getScreenshot";

const getLinks = async () => {
    return [
        new Link({
            title: "Realtime Colours",
            description:
                "A realtime colour picker for seeing how colours look together on a realtime website.",
            href: "https://realtimecolors.com/",
            image: await getScreenshot("https://realtimecolors.com/"),
            type: LinkTypes.COLOURS,
            tags: ["colours", "palette"],
        }),
        new Link({
            title: "Coolors",
            description:
                "A colour palette generator for creating colour palettes for websites.",
            href: "https://coolors.co/",
            image: await getScreenshot("https://coolors.co/"),
            type: LinkTypes.COLOURS,
            tags: ["colours", "palette"],
        }),
        new Link({
            title: "Excalidraw",
            description:
                "A whiteboard for drawing diagrams and sharing them with others.",
            href: "https://excalidraw.com/",
            image: await getScreenshot("https://excalidraw.com/"),
            type: LinkTypes.DRAWING,
            tags: ["drawing", "diagrams", "whiteboard", "wire framing"],
        }),
        new Link({
            title: "Figma",
            description:
                "A design tool for creating designs and sharing them with others.",
            href: "https://www.figma.com/",
            image: await getScreenshot("https://www.figma.com/"),
            type: LinkTypes.DRAWING,
            tags: ["drawing", "diagrams", "whiteboard", "wire framing"],
        }),
        new Link({
            title: "Phind",
            description:
                "A AI powered search engine for finding answers to software development questions.",
            href: " https://www.phind.com/",
            image: await getScreenshot("https://www.phind.com/"),
            type: LinkTypes.HELPER,
            tags: ["search", "questions", "answers"],
        }),
        new Link({
            title: "Tiny PNG",
            description:
                "A tool for compressing images to make them smaller in size.",
            href: "https://tinypng.com/",
            image: await getScreenshot("https://tinypng.com/"),
            type: LinkTypes.HELPER,
            tags: ["images", "compress", "size"],
        }),
        new Link({
            title: "Can I Use",
            description:
                "A tool for checking browser support for HTML, CSS and JavaScript features.",
            href: "https://caniuse.com/",
            image: await getScreenshot("https://caniuse.com/"),
            type: LinkTypes.HELPER,
            tags: ["browser", "support", "html", "css", "javascript"],
        }),
        new Link({
            title: "MDN",
            description:
                "A tool for checking browser support for HTML, CSS and JavaScript features.",
            href: "https://developer.mozilla.org/en-US/",
            image: await getScreenshot("https://developer.mozilla.org/en-US/"),
            type: LinkTypes.HELPER,
            tags: ["browser", "support", "html", "css", "javascript"],
        }),
        new Link({
            title: "Stack Sorted",
            description:
                `A tool for finding elements and getting inspiration for your next website.`,
            href: "https://stacksorted.com/",
            image: await getScreenshot("https://stacksorted.com/"),
            type: LinkTypes.INSPIRATION,
            tags: ["inspiration", "website", "elements"],
        }),
    ];
}



export default getLinks;