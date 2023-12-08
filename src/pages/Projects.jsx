import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'
import Links from '../components/Links'

const Projects = () => {
	return (
		<section className="max-container">
			<h1 className="head-text">
				My{' '}
				<span className="blue-gradient_text font-semibold drop-shadow">
					Projects
				</span>
			</h1>
			<div className="mt-5 flex flex-col gap-3 text-slate-500">
				<p>
					In my portfolio, you'll find projects that are key
					milestones in my professional growth. Each one has been a
					stepping stone, improving my skills and expertise. I'm
					constantly evolving, learning new things with every project
					I undertake. This collection isn't just a showcase; it's a
					testament to my commitment to getting better every day. It's
					a journey of progress, where each project adds to my story
					as a professional.
				</p>
			</div>
			<div className="flex flex-wrap my-20 gap-16">
				{projects.map((project) => (
					<div className="lg:w-[400px] w-full" key={project.name}>
						<div className="block-container w-12 h-12">
							<div
								className={`btn-back rounded-xl ${project.theme}`}
							/>
							<div className="btn-front rounded-xl flex justify-center items-center">
								<img
									src={project.iconUrl}
									alt="Project Icon"
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
						</div>
						<div className="mt-5 flex flex-col">
							<h4 className="text-2xl font-poppins font-semibold">
								{project.name}
							</h4>
							<p className="mt-2 text-slate-500">
								{project.description}
							</p>
							<div className="mt-5 flex items-center gap-2 font-poppins">
								<Link
									to={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="font-semibold text-blue-600">
									Live Link
								</Link>
								<img
									src={arrow}
									alt="arrow"
									className="w-4 h-4 object-contain"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
			<hr className="border-slate-200" />
			<CTA />
			<Links />
		</section>
	)
}

export default Projects
