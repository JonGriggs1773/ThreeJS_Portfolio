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
	springboot
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
		iconUrl: pricewise,
		theme: 'btn-back-red',
		name: 'Amazon Price Tracker',
		description:
			'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
		link: 'https://github.com/adrianhajdin/pricewise'
	},
	{
		iconUrl: threads,
		theme: 'btn-back-green',
		name: 'Full Stack Threads Clone',
		description:
			'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
		link: 'https://github.com/adrianhajdin/threads'
	},
	{
		iconUrl: car,
		theme: 'btn-back-blue',
		name: 'Car Finding App',
		description:
			'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
		link: 'https://github.com/adrianhajdin/project_next13_car_showcase'
	},
	{
		iconUrl: snapgram,
		theme: 'btn-back-pink',
		name: 'Full Stack Instagram Clone',
		description:
			'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
		link: 'https://github.com/adrianhajdin/social_media_app'
	},
	{
		iconUrl: estate,
		theme: 'btn-back-black',
		name: 'Real-Estate Application',
		description:
			'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
		link: 'https://github.com/adrianhajdin/projects_realestate'
	},
	{
		iconUrl: summiz,
		theme: 'btn-back-yellow',
		name: 'AI Summarizer Application',
		description:
			'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
		link: 'https://github.com/adrianhajdin/project_ai_summarizer'
	}
]
