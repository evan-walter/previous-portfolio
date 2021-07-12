import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Evan Walter | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Evan Walter',
  subtitle: 'I connect with people and build software.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `I specialize in Shopify development and front end development.  Whether store set-up, migration, or custom features, I aim to join my clients to serve their vision together.`,
  paragraphTwo: `Prior to development, I obtained a Bachelor's of Science in Electrical Engineering and built a career in the field.  As I explored the software side of the field, I applied communication and problem solving skills I learned along the way.  I found opportunities to serve clients with fast websites and a seamless user experience.`,
  paragraphThree: ``,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'drummond-home-1000.png',
    title: `Drummond's Clothing`,
    info: 'A dynamic clothing store with a mega menu and premium Shopify features',
    info2: 'Password: trends',
    tags: ['Store Setup', 'Premium Shopify Theme', 'Mega-Menu', 'Advanced Filter'],
    url: 'https://1vejgeqytc0pok6g-56525095117.shopifypreview.com',
    video: 'https://www.loom.com/share/7e5eec45f0d047689af2eff7c8d9fc66',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'galaxy-home-1000.png',
    title: 'Galaxy Box',
    info: `A showcase for new electronics, featuring a customized affiliate product page built in Shopify liquid code`,
    info2: 'Password: newtech',
    tags: ['Store Setup', 'Theme Customization', 'Affiliate Functionality', 'HTML/CSS/LIQUID'],
    url: 'https://1g56iv3d2f1qdbnx-57198936253.shopifypreview.com',
    video: 'https://www.loom.com/share/431ae330190442f29b4b8c8585f7195d',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to get in touch?',
  btn: 'Connect',
  email: 'evan.walter.software@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/evan-walter-101bb739',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Evan-Walter',
    },
  ],
};
