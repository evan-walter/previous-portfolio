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
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `I love building things with people. Whether we showcase a business, an individual, or great products, I leverage my skills and experience to serve clients.`, // Whether we showcase a business, an individual, or great products, I bring creativity and excellence to every project.
  paragraphTwo: `I obtained a Bachelor's of Science in Electrical Engineering. After working in the field for several years, I grew interested in the software side of the field. As I continued to explore software development, I found myself building projects in my spare time, especially websites. I found opportunities to connect with others and build websites with them and for them. And I loved it.`,
  paragraphThree: `With my education and 11+ years of experience providing technical solutions, I am confident in my ability to work with clients to deliver quality results.`,
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
    url: 'https://1g56iv3d2f1qdbnx-57198936253.shopifypreview.com',
    video: 'https://www.loom.com/share/431ae330190442f29b4b8c8585f7195d',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Connect',
  email: '',
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
