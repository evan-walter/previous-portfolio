import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import A from './buttons/A';
import Button from './buttons/Button';
import heyfioImg from '../images/heyfio-1000.png';
import confcoImg from '../images/confco-1000.png';
import w3Img from '../images/w3-1000.png';

export default function Projects(props) {
  const sub1CName = 'pt-4 pb-4 lg:pt-12 lg:pb-4 text-3xl font-bold text-center';
  const sub2CName = 'pb-4 lg:pb-8 text-2xl font-bold text-center';
  const btnB = 'py-2 mr-4 px-4';
  const btnNoB = 'mr-4 transform hover:translate-x-1 transition duration-300 ease-in';
  const p = 'text-center px-0 md:px-16 lg:px-0 lg:text-left';

  const [showModal, setShowModal] = useState(false);
  const [whichVideo, setWhichVideo] = useState(null);

  function handleModal(video) {
    setShowModal(s => !s);
    setWhichVideo(video);
  }
  
  return (
    <div>
      {showModal ?
        <div className='z-30 px-16 w-screen fixed inset-0 bg-black bg-opacity-60'>
          {/* <div onClick={handleModal}>
            <div className='z-40 w-screen h-16 fixed inset-x-0 top-0 bg-transparent'></div>
            <div className='z-40 h-screen w-36 fixed inset-y-0 right-0 bg-transparent'></div>
            <div className='z-40 w-screen h-16 fixed inset-x-0 bottom-0 bg-transparent'></div>
            <div className='z-40 h-screen w-36 fixed inset-y-0 left-0 bg-transparent'></div>
          </div> */}
          {/* <div className='grid grid-rows-3'>
            <div className='row-span-1'>1</div>
            <div className='flex items-center'>
              <div className='z-50 w-full border-2 border-black'>
                <div className='p-2 m-auto bg-white flex items-center justify-end border-b border-gray-400'>
                  <button onClick={handleModal}>
                    <i className='fa fa-times' aria-hidden='true' />
                  </button>
                </div>
                <div className='flex justify-center'>
                  <div className='video-container'>
                    <iframe
                      className='responsive-iframe'
                      src={whichVideo}
                      ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className=''>3</div>
          </div> */}
          <div className='relative video-padding'>
            <iframe className='absolute inset-0 w-full h-full' src={whichVideo} frameborder='0' />
          </div>
        </div> : null
      }
      <div className='pb-12'>
        {projects.map(
          ({ type, subtitle1, subtitle2, items }) => {
            return (
              <div key={type}>
                <h2 id={type} className={sub1CName}>{subtitle1}</h2>
                <h3 className={sub2CName}>{subtitle2}</h3>
                {items.map(
                  ({ number, id, title, desc1, desc2, img, video, website, repo }) => {
                    return (
                      <div id={id} className='py-4 lg:py-12 grid grid-cols-1 lg:grid-cols-5' key={number}>
                        <div className='py-4 lg:py-8 lg:pr-16 grid-cols-1 lg:col-start-1 lg:col-end-3'>
                          <h3 className='pb-4 font-bold text-xl text-center lg:text-left'>{title}</h3>
                          <p className={p}>{desc1}</p>
                          <p className={p}>{desc2}</p>
                          <div className='my-4 flex items-center justify-center lg:justify-start'>
                            {video ?
                              <div onClick={() => handleModal(video)}>
                                <Button textB='Demo Video' addClassName={btnB} />
                              </div> : null
                            }
                            {website ?
                              <A h={website}>
                                <Button textNoB='See Live' addClassName={btnNoB} />
                              </A> : null
                            }
                            {repo ?
                              <A h={repo}>
                                <Button textNoB='Source Code' addClassName={btnNoB} />
                              </A> : null
                            }
                          </div>
                        </div>
                        <Tilt className='lg:col-start-3 lg:col-end-6'>
                          <img src={img} alt={title + ' image'} width='1000' />
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
        id: 'heyfio',
        title: 'HeyFIO',
        desc1: 'A Full Stack Software Engineering Contract building a Blockchain web application',
        desc2: 'React + MySQL + NodeJS + ExpressJS',
        img: heyfioImg,
        video: null,
        website: 'https://beta.heyfio.com',
        repo: null,
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
        id: 'confco',
        title: 'Confidence Co',
        desc1: 'Custom theme development to implement a new design for a health and wellness Shopify store',
        desc2: null,
        img: confcoImg,
        video: 'https://www.loom.com/embed/505d28067eb3491a8e27dc222c21ad12',
        website: 'https://www.theconfidence.co/',
        repo: null,
      },
      {
        number: 2,
        id: 'w3sales',
        title: 'W3 Sales',
        desc1: 'Custom Shopify development for a food services factory and distributor group with a large inventory of products',
        desc2: null,
        img: w3Img,
        video: 'https://www.loom.com/embed/3b0aa0cd448b4e41964e8e2cb5cffdf1',
        website: 'https://w3salesonline.com/',
        repo: null,
      },
    ]
  },
];
