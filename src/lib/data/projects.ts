export type Project = {
    id: string;
    title: string;
    subtitle?: string;
    text: string;
    link: string;
    image?: string;
    imageAlt?: string;
    year: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: "dev-001",
        title: "max-workspace",
        text: "max-workspace is a set of devices made with max msp. it is still in development. the goal of this project is to provide open source dsp material to anyone for free.",
        link: "https://github.com/op-a-l/Max-workspace",
        year: "2024-now",
        tags: ["dsp", "programming", "audio"]
    },
    {
        id: "sound-001",
        title: "music",
        subtitle: "mainly unreleased music",
        text: "sometimes i do music out of any context. sometimes i don't even finish songs. sometimes i am still working on it. ",
        link: "https://soundcloud.com/tournesol-840734247/sets/the-center-of-it-all/s-KBxNkBWnJ6l?si=ed7eb5816a164b19a4992136111c93a5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        year: "2020-now",
        tags: ["music", "wip", "soundcloud"]
    },
    {
        id: "sound-002",
        title: "le fait du prince",
        subtitle: "an audio series",
        text: "i cut and edit samples for this french audio series on the first season.",
        link: "https://www.youtube.com/@LeFaitduPrince",
        year: "2024",
        tags: ["series", "audio", "sound-design"]
    },
    {
        id: "dev-002",
        title: "this-website",
        subtitle: "very cool",
        text: "i made this website myself. i am probably not a great developer but i am having a good time doing it.",
        link: "https://github.com/op-a-l/my-app",
        year: "2024",
        tags: ["programming", "sveltekit", "cool"]
    },
    // {
    //     id: "",
    //     title: "",
    //     subtitle: "",
    //     text: "",
    //     link: "",
    //     year: "",
    //     image: "",
    //     imageAlt: "",
    //     tags: ["", "", ""]
    // },
]