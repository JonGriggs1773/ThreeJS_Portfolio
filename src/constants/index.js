import { meta, shopify, ctu, homefreehaven } from '../assets/images'
import {
	car,
	contact,
	css,
	estate,
	express,
	git,
	github,
	html,
	pricewise,
	mui,
	javascript,
	linkedin,
	mongodb,
	motion,
	nextjs,
	nodejs,
	java,
	python,
	react,
	threejs,
	sass,
	snapgram,
	summiz,
	tailwindcss,
	threads,
	typescript,
	mysql,
	bootstrap,
	springboot,
	budget,
	pet,
	team,
	agile,
    binary
} from '../assets/icons'

export const skills = [
	{
		imageUrl: css,
		name: 'CSS',
		type: 'Frontend'
	},
	{
		imageUrl: express,
		name: 'Express',
		type: 'Backend'
	},
	{
		imageUrl: git,
		name: 'Git',
		type: 'Version Control'
	},
	{
		imageUrl: github,
		name: 'GitHub',
		type: 'Version Control'
	},
	{
		imageUrl: html,
		name: 'HTML',
		type: 'Frontend'
	},
	{
		imageUrl: javascript,
		name: 'JavaScript',
		type: 'Frontend'
	},
	{
		imageUrl: mongodb,
		name: 'MongoDB',
		type: 'Database'
	},
	{
		imageUrl: nodejs,
		name: 'Node.js',
		type: 'Backend'
	},
	{
		imageUrl: react,
		name: 'React',
		type: 'Frontend'
	},
	{
		imageUrl: python,
		name: 'Python',
		type: 'Backend'
	},
	{
		imageUrl: java,
		name: 'Java',
		type: 'Backend'
	},
	{
		imageUrl: threejs,
		name: 'Three.js',
		type: 'Frontend'
	},
	{
		imageUrl: mysql,
		name: 'MySQL',
		type: 'Database'
	},
	{
		imageUrl: bootstrap,
		name: 'Bootstrap',
		type: 'Frontend'
	},
	{
		imageUrl: springboot,
		name: 'SpringBoot',
		type: 'Backend'
	},
	{
		imageUrl: agile,
		name: 'Agile',
		type: 'Backend'
	},
    {
        imageUrl: tailwindcss,
        name: 'TailwindCSS',
        type: 'Frontend'
    }
]

export const experiences = [
	{
		title: 'Full Stack Software Engineer',
		company_name: 'Colorado Technical University',
		icon: ctu,
		iconBg: '#accbe1',
		date: 'September 2022 - Present',
		points: [
			'Facilitate in-depth code analysis and debugging for student assignments.',
			'Contribute technical expertise to company projects.',
			'Conduct educational lectures and office hours as needed.',
			'Continuously refine personal technical acumen to enhance student support efficacy.'
		]
	},
	{
		title: 'Full Stack Software Engineer',
		company_name: 'HomeFreeHaven',
		icon: homefreehaven,
		iconBg: '#fbc3bc',
		date: 'August 2023 - Present',
		points: [
			'Engineered an informative web platform for the start-up.',
			'Collaborating with cross-functional teams including marketing, project managers, and other amazing people to create high-quality web marketing.',
			'Implementing responsive design and ensuring cross-browser compatibility.'
		]
	}
]

export const socialLinks = [
	{
		name: 'Contact',
		iconUrl: contact,
		link: '/contact'
	},
	{
		name: 'GitHub',
		iconUrl: github,
		link: 'https://github.com/JonGriggs1773'
	},
	{
		name: 'LinkedIn',
		iconUrl: linkedin,
		link: 'https://www.linkedin.com/in/jonathen-griggs-91b717207/'
	}
]

export const projects = [
	{
		iconUrl: budget,
		theme: 'btn-back-yellow',
		name: 'Budget Miracle',
		description:
			'Developed a web application that assists users in tracking their monthly spending. This app teaches people how to live within their means utilizing the famous 50 | 30 | 20 budgeting rule.',
		link: 'http://3.15.196.103'
	},
	{
		iconUrl: pet,
		theme: 'btn-back-blue',
		name: 'Pet Shelter',
		description:
			'Developed a versatile application designed to efficiently manage the tracking of animals entering and leaving pet shelters, streamlining the record-keeping process for these establishments.',
		link: 'http://18.222.134.240'
	},
	{
		iconUrl: team,
		theme: 'btn-back-pink',
		name: 'Team App',
		description:
			'Designed and built a web application used to help coaches configure and manipulate their starting line-ups with incredible ease.',
		link: 'https://github.com/JonGriggs1773/Team_App'
	},
    {
		iconUrl: binary,
		theme: 'btn-back-green',
		name: 'BinaryConverter',
		description:
			'Created a bit arithmatic tool that converts binary numbers to decimal and decimal numbers to binary.',
		link: 'https://binaryconvertionexpert.com'
	}
]
