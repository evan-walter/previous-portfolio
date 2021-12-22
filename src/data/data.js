import heyfioImg from '../assets/images/heyfio-1000.png';
import wineImg from '../assets/images/wine-pairing-1000.png';
import confcoImg from '../assets/images/confco-1000.png';
import w3Img from '../assets/images/w3-1000.png';

export const projectsData = [
  {
    type: 'react',
    subtitle1: 'React Projects',
    subtitle2: 'Client Project',
    items: [
      {
        number: 1,
        id: 'heyfio',
        navtext: 'HeyFIO (React)',
        title: 'HeyFIO',
        desc1: 'A Full Stack Software Engineering Contract for a Blockchain web application',
        desc2: 'React + MySQL + NodeJS + ExpressJS',
        img: heyfioImg,
        video: null,
        website: 'https://beta.heyfio.com',
        repo: null,
      },
    ],
  },
  {
    type: 'js',
    subtitle1: 'Vanilla JavaScript',
    subtitle2: 'Personal Project',
    items: [
      {
        number: 1,
        id: 'wine',
        navtext: 'Wine Pairing App (Vanilla JS)',
        title: 'Wine Pairing App',
        desc1: 'A custom API app to pair wines with popular dishes, developed with the Spoonacular API',
        desc2: null,
        img: wineImg,
        video: 'https://www.loom.com/embed/b65b0fb0d9a94902a272216645706fb4',
        website: 'https://evan-walter.github.io/wine-pairing',
        repo: 'https://github.com/Evan-Walter/wine-pairing',
      },
    ],
  },
  {
    type: 'webshopify',
    subtitle1: 'Web Development and Shopify Development',
    subtitle2: 'Client Projects',
    items: [
      {
        number: 1,
        id: 'confco',
        navtext: 'The Confidence Co (Web Development)',
        title: 'Confidence Co',
        desc1: 'Custom web development and theme development to implement a new design for a health and wellness Shopify store',
        desc2: null,
        img: confcoImg,
        video: 'https://www.loom.com/embed/505d28067eb3491a8e27dc222c21ad12',
        website: 'https://www.theconfidence.co/',
        repo: null,
      },
      {
        number: 2,
        id: 'w3sales',
        navtext: 'W3 Sales — (Web Development)',
        title: 'W3 Sales',
        desc1: 'Custom web development and Shopify development for a food services factory and distributor group with a large inventory of products',
        desc2: null,
        img: w3Img,
        video: 'https://www.loom.com/embed/3b0aa0cd448b4e41964e8e2cb5cffdf1',
        website: 'https://w3salesonline.com/',
        repo: null,
      },
    ]
  },
];
