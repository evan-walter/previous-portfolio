import React from 'react';
import Tilt from 'react-parallax-tilt';
import A from './buttons/A';
import Button from './buttons/Button';
import heyfioImg from '../images/heyfio-1000.png';
import confcoImg from '../images/confco-1000.png';
import w3Img from '../images/w3-1000.png';

export default function Projects() {
  const sub1CNames = 'pt-12 pb-4 text-3xl font-bold text-center';
  const sub2CNames = 'pb-8 text-2xl font-bold text-center';
  const btnB = 'py-2 px-4 text-lg';
  const btnNoB = 'text-lg transform hover:translate-x-1 transition duration-300 ease-in';
  
  return (
    <div className='pb-12'>
      {projects.map(
        ({ type, subtitle1, subtitle2, items }) => {
          return (
            <div>
              <h2 id={type} className={sub1CNames} key={type}>{subtitle1}</h2>
              {/* <h3 className={sub2CNames} key={type}>{subtitle2}</h3> */}
              {items.map(
                ({ number, id, title, desc1, desc2, img, video, website, repo }) => {
                  return (
                    <div id={id} className='py-16 grid grid-cols-5' key={number}>
                      <div className='pr-16 col-start-1 col-end-3'>
                        <h3 className='pb-4 text-xl font-bold' key={number}>{title}</h3>
                        <p className='' key={number}>{desc1}</p>
                        <p className='' key={number}>{desc2}</p>
                        <div className='my-4 grid grid-cols-2 items-center'>
                          {video && <Button textB='Demo Video' addClassNames={btnB} />}
                          {website && <A h={website}><Button textNoB='See Live' addClassNames={btnNoB} /></A>}
                          {repo && <A h={repo}><Button textNoB='Source Code' addClassNames={btnNoB} /></A>}
                        </div>
                      </div>
                      <Tilt className='col-start-3 col-end-6' key={number}>
                        <img src={img} alt={title + ' image'} width='1000' key={number} />
                      </Tilt>
                    </div>
                  );
                }
              )}
            </div>
          );
        }      
      )}
    </div>
  );
}

const projects = [
  {
    type: 'react',
    subtitle1: 'React Projects',
    subtitle2: 'Client Projects',
    items: [
      {
        number: 1,
        id: '',
        title: 'HeyFIO',
        desc1: 'A Full Stack Software Engineering Contract',
        desc2: 'React + MySQL + NodeJS + ExpressJS',
        img: heyfioImg,
        video: '#',
        website: 'https://beta.heyfio.com',
        repo: '',
      },
    ],
  },
  {
    type: 'shopify',
    subtitle1: 'Shopify Projects',
    subtitle2: 'Client Projects',
    items: [
      {
        number: 1,
        id: '',
        title: 'Confidence Co',
        desc1:
          'A new design for a health and wellness Shopify store involving theme customization and theme creation',
        desc2: '',
        img: confcoImg,
        video: 'https://www.loom.com/embed/505d28067eb3491a8e27dc222c21ad12',
        website: 'https://www.theconfidence.co/',
        repo: '',
      },
      {
        number: 2,
        id: '',
        title: 'W3 Sales',
        desc1:
          'A Shopify website for a food services factory and distributor group with a large inventory of products',
        desc2: '',
        img: w3Img,
        video: 'https://www.loom.com/embed/3b0aa0cd448b4e41964e8e2cb5cffdf1',
        website: 'https://w3salesonline.com/',
        repo: '',
      },
    ]
  },
];
