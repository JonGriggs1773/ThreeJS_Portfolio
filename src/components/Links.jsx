import React from 'react'
import { socialLinks } from '../constants'

const Links = () => {
	return (
		<div className="fixed top-1/2 right-0 transform -translate-y-1/2">
			{socialLinks.map((links) => (
				<a href={links.link}>
					<img src={links.iconUrl} alt={links.name} />
				</a>
			))}
		</div>
	)
}

export default Links
