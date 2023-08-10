import { LinkTypes } from "../models/link.model";

export const linkData = [
    {
        title: "Realtime Colours",
        description:
            "A realtime colour picker for seeing how colours look together on a realtime website.",
        href: "https://realtimecolors.com/",
        type: LinkTypes.COLOURS,
        tags: ["colours", "palette"],
    },
    {
        title: "Coolors",
        description:
            "A colour palette generator for creating colour palettes for websites.",
        href: "https://coolors.co/",
        type: LinkTypes.COLOURS,
        tags: ["colours", "palette"],
    },
    {
        title: "Excalidraw",
        description:
            "A whiteboard for drawing diagrams and sharing them with others.",
        href: "https://excalidraw.com/",
        type: LinkTypes.DRAWING,
        tags: ["drawing", "diagrams", "whiteboard", "wire framing"],
    },
    {
        title: "Figma",
        description:
            "A design tool for creating designs and sharing them with others.",
        href: "https://www.figma.com/",
        type: LinkTypes.DRAWING,
        tags: ["drawing", "diagrams", "whiteboard", "wire framing", "prototype",],
    },
    {
        title: "Phind",
        description:
            "A AI powered search engine for finding answers to software development questions.",
        href: " https://www.phind.com/",
        type: LinkTypes.HELPER,
        tags: ["search", "questions", "answers"],
    },
    {
        title: "Tiny PNG",
        description:
            "A tool for compressing images to make them smaller in size.",
        href: "https://tinypng.com/",
        type: LinkTypes.HELPER,
        tags: ["images", "compress"],
    },
    {
        title: "Can I Use",
        description:
            "A tool for checking browser support for HTML, CSS and JavaScript features.",
        href: "https://caniuse.com/",
        type: LinkTypes.HELPER,
        tags: ["browser", "support"],
    },
    {
        title: "MDN",
        description:
            "A tool for checking browser support for HTML, CSS and JavaScript features.",
        href: "https://developer.mozilla.org/en-US/",
        type: LinkTypes.HELPER,
        tags: ["browser", "support"],
    },
    {
        title: "Stack Sorted",
        description:
            `A tool for finding elements and getting inspiration for your next website.`,
        href: "https://stacksorted.com/",
        type: LinkTypes.INSPIRATION,
        tags: ["inspiration", "website", "elements"],
    },
];