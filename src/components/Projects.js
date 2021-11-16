import React from 'react';
import heyfioImg from '../images/heyfio-1000.png';
import puppyFinderImg from '../images/heyfio-1000.png';
import confcoImg from '../images/confco-1000.png';
import w3Img from '../images/w3-1000.png';

export default function Projects() {
  return (
    <div>
      <h2>React Projects</h2>
      <h3>Client Projects and Personal Projects</h3>
      {reactProjects.map(
        ({ id, title, desc1, desc2, img, video, website, repo }) => {
          return (
            <div>
              <h3 key={id}>{title}</h3>
              <p key={id}>{desc1}</p>
              <p key={id}>{desc2}</p>
              <div className=''>
                <img src={img} alt={title + ' image'} />
              </div>
            </div>
          );
        }
      )}
      <h2>Shopify Projects</h2>
      <h3>Client Projects</h3>
      {shopifyProjects.map(
        ({ id, title, desc1, desc2, img, video, website, repo }) => {
          return (
            <div>
              <h3 key={id}>{title}</h3>
              <p key={id}>{desc1}</p>
              <p key={id}>{desc2}</p>
              <div className=''>
                <img src={img} alt={title + ' image'} />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

const reactProjects = [
  {
    id: 1,
    title: 'HeyFIO',
    desc1: 'A Full Stack Software Engineering Part-Time Contract',
    desc2: 'React + MySQL + NodeJS + ExpressJS',
    img: heyfioImg,
    video: '',
    website: '',
    repo: '',
  },
  {
    id: 2,
    title: 'Puppy Finder',
    desc1: '',
    desc2: '',
    img: puppyFinderImg,
    video: '',
    website: '',
    repo: '',
  },
];

const shopifyProjects = [
  {
    id: 1,
    title: 'Confidence Co',
    desc1:
      'A new design for a health and wellness Shopify store involving theme customization and theme creation',
    desc2: '',
    img: confcoImg,
    video: 'https://www.loom.com/embed/505d28067eb3491a8e27dc222c21ad12',
    website: '',
    repo: '',
  },
  {
    id: 2,
    title: 'W3 Sales',
    desc1:
      'A Shopify website for a food services factory and distributor group with a large inventory of products',
    desc2: '',
    img: w3Img,
    video: 'https://www.loom.com/embed/3b0aa0cd448b4e41964e8e2cb5cffdf1',
    website: '',
    repo: '',
  },
];
