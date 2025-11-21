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
};

export const projects: Project[] = [
	{
		id: 'dev-001',
		title: 'max-workspace',
		text: 'max-workspace is a set of devices made with max msp. it is still in development and not always up to date. the goal of this project is to provide open source dsp material to anyone for free.',
		link: 'https://github.com/op-a-l/max-workspace',
		year: '2024-now',
		tags: ['dsp', 'programming', 'audio']
	},
	{
		id: 'sound-001',
		title: 'music',
		subtitle: 'mainly unreleased music',
		text: "sometimes i do music. sometimes i finish songs. sometimes i release unfinished ones.",
		link: 'https://soundcloud.com/underscore-opal/tracks',
		year: '2020-now',
		tags: ['music', 'wip', 'soundcloud']
	},
	{
		id: 'sound-002',
		title: 'le fait du prince',
		subtitle: 'an audio series',
		text: 'i cut and clean samples for editing on the first season of this incredible audio series.',
		link: 'https://www.youtube.com/@LeFaitduPrince',
		year: '2024',
		tags: ['series', 'audio', 'sound-design']
	},
	{
		id: 'dev-002',
		title: 'this-website',
		subtitle: 'very cool',
		text: 'i made this website myself. i am probably not a great developer but i am having a good time doing it.',
		link: 'https://github.com/op-a-l/opal-sounds',
		year: '2024',
		tags: ['programming', 'sveltekit', 'cool']
	},

	{
	    id: "sound-003",
	    title: "pigments 6 presets",
	    subtitle: "sound design for Arturia",
	    text: "i made some presets for a pigments 6 expansion for Arturia. i had the chance to work with some talented sound designers. that made me very happy.",
	    link: "https://www.instagram.com/reel/DN54GOuiO0h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
	    year: "2025",
	    image: "",
	    imageAlt: "",
	    tags: ["sound-design", "arturia", "presets"]
	}

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
];
