import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import A from './buttons/A';
import Button from './buttons/Button';
import Modal from './Modal';
import heyfioImg from '../images/heyfio-1000.png';
import confcoImg from '../images/confco-1000.png';
import w3Img from '../images/w3-1000.png';

export default function Projects() {
  const sub1CName = 'pt-4 pb-4 lg:pt-12 lg:pb-4 text-3xl font-bold text-center';
  const sub2CName = 'pb-4 lg:pb-8 text-2xl font-bold text-center'; // pb-4
  const btnB = 'py-2 mr-4 px-4 text-lg'; // lg:text-md
  const btnNoB = 'mr-4 text-lg transform hover:translate-x-1 transition duration-300 ease-in'; // lg:text-md
  const p = 'text-center px-0 md:px-16 lg:px-0 lg:text-left';

  const [showModal, setShowModal] = useState(false);
  const [whichVideo, setWhichVideo] = useState('');
  const [whichTitle, setWhichTitle] = useState('');

  function handleModal(e, video, title) {
    e.preventDefault();
    setShowModal(s => !s);
    setWhichVideo(video);
    setWhichTitle(title);
  }
  
  return (
    <div>
      <div className={showModal ? 'block' : 'hidden'}>
        {/* <Modal {...props} showModal={showModal} whichVideo={whichVideo} title={whichTitle} /> */}
      </div>
      <div className='pb-12'>
        {projects.map(
          ({ type, subtitle1, subtitle2, items }) => {
            return (
              <div>
                <h2 id={type} className={sub1CName} key={type}>{subtitle1}</h2>
                <h3 className={sub2CName} key={type}>{subtitle2}</h3>
                {items.map(
                  ({ number, id, title, desc1, desc2, img, video, website, repo }) => {
                    return (
                      <div key={number}>
                        <div className={showModal ? 'block' : 'hidden'} key={number}>
                          <div className='m-0 w-full z-50 absolute bg-gray-300' key={number}>
                            <div key={number}>
                              <iframe src={whichVideo} title={whichTitle} className='video-modal' webkitAllowFullScreen mozAllowFullScreen allowFullScreen key={number} />
                            </div>
                            <div key={number}>{whichVideo}hello</div>
                          </div>
                        </div>

                        <div id={id} className='py-4 lg:py-12 grid grid-cols-1 lg:grid-cols-5' key={number}>
                          <div className='py-4 lg:py-8 lg:pr-16 grid-cols-1 lg:col-start-1 lg:col-end-3' key={number}>
                            <h3 className='pb-4 font-bold text-xl text-center lg:text-left' key={number}>{title}</h3>
                            <p className={p} key={number}>{desc1}</p>
                            <p className={p} key={number}>{desc2}</p>
                            <div className='my-4 flex items-center justify-center lg:justify-start' key={number}>
                              {video ? <div onClick={handleModal} key={number}><Button textB='Demo Video' addClassName={btnB} /></div> : ''}
                              {website ?
                                <A h={website} key={number}>
                                  <Button textNoB='See Live' addClassName={btnNoB} key={number} />
                                </A> : ''}
                              {repo ?
                                <A h={repo} key={number}>
                                  <Button textNoB='Source Code' addClassName={btnNoB} key={number} />
                                </A> : ''}
                            </div>
                          </div>
                          <Tilt className='lg:col-start-3 lg:col-end-6' key={number}>
                            <img src={img} alt={title + ' image'} width='1000' key={number} />
                          </Tilt>
                        </div>
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
        video: 'https://www.loom.com/embed/505d28067eb3491a8e27dc222c21ad12',
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
        id: 'confco',
        title: 'Confidence Co',
        desc1: 'Custom theme development to implement a new design for a health and wellness Shopify store',
        desc2: '',
        img: confcoImg,
        video: 'https://www.loom.com/embed/505d28067eb3491a8e27dc222c21ad12',
        website: 'https://www.theconfidence.co/',
        repo: '',
      },
      {
        number: 2,
        id: 'w3sales',
        title: 'W3 Sales',
        desc1: 'Custom Shopify development for a food services factory and distributor group with a large inventory of products',
        desc2: '',
        img: w3Img,
        video: 'https://www.loom.com/embed/3b0aa0cd448b4e41964e8e2cb5cffdf1',
        website: 'https://w3salesonline.com/',
        repo: '',
      },
    ]
  },
];
