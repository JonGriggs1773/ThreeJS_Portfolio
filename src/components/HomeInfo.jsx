import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Jonathen</span>
            <br/>
            A Full-Stack Software engineer from <br/> Tennesse, United States
        </h1>
    ),
    2: (
        <InfoBox
        text="Currently, I work as a Software Engineer at Colorado Technical University"
        link='/about'
        btnText='Learn More'
        />
    ),
    3: (
        <InfoBox 
        text="Feel free to check out projects I have led and assisted with throughout the years!"
        link='/projects'
        btnText='Visit My Portfolio'
        />
    ),
    4: (
        <InfoBox 
        text="Want to collaborate on a project or just simply looking for a dev?"
        link='/contact'
        btnText='Shoot Me A Message!'
        />
    )
}


const HomeInfo = ({currentStage}) => {

    return renderContent[currentStage] || null
}

export default HomeInfo