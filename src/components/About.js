import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Fade from './Fade'
import A from './buttons/A'
import Button from './buttons/Button'
import resume from '../assets/resume.pdf'

export default function About() {
  const p = 'py-2 md:text-lg lg:text-xl text-center lg:text-left'

  return (
    <div className='grid grid-cols-1 gap-12 justify-items-center lg:grid-cols-2 lg:gap-32 lg:justify-items-end'>
      <Fade from='left'>
        <div>
          <StaticImage
            src='../assets/images/ewalter-11-700.jpg'
            alt='about-image'
            width={350}
          />
        </div>
      </Fade>
      <Fade from='right'>
        <div className='self-center'>
          <p className={p}>
            Full Stack Engineer with 3+ years of experience specializing in
            Node.js, Next.js, React.js, TypeScript, and GraphQL. Enjoy building
            scalable web infrastructure with excellent user interfaces.
            Passionate about open source and developer tooling.
          </p>
          <p className={p}>
            I am currently a full time Web Developer at{' '}
            <A
              h='https://ghostbed.com'
              addClassName='hover:text-tertiary italic'
            >
              GhostBed
            </A>{' '}
            building our headless e-commerce store with Next.js, React,
            TypeScript, GraphQL, Tailwind, and Craft CMS. I am proud and excited
            to be part of this fun and thriving team!
          </p>
          <div className='mt-4 text-center lg:text-left'>
            <A h={resume}>
              <Button text='Resume' BgS />
            </A>
          </div>
        </div>
      </Fade>
    </div>
  )
}
