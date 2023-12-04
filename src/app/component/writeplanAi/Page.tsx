"use client";
import React, { useState, useEffect } from 'react';
import './Page.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Page = () => {
  const slides = [
    { title: 'AI', butt: <button className='nut'>Now with Q&A</button>, image: '/ai.png', logo: <AutoAwesomeSharpIcon sx={{ backgroundColor: 'rgb(240, 168, 240)', fill: 'purple' }} className='iccon' />, des: 'As literally anything. Notion will answer.', text: 'Learn more ->', textcolor: 'purple' },
    { title: 'Wikis', image: '/engineering.png', logo: <ImportContactsIcon sx={{ backgroundColor: 'rgb(241, 142, 142)', fill: 'red' }} className='iccon' />, des: 'Centralize your knowledge. No more hunting for answer.', text: 'Learn more ->', textcolor: 'red' },
    { title: 'Projects', image: '/projects.png', logo: <AdsClickIcon sx={{ backgroundColor: 'lightblue', fill: 'blue' }} className='iccon' />, des: 'Manage your complex project without choas.', text: 'Learn more ->', textcolor: 'blue' },
    { title: 'Docs', image: '/meeting.png', logo: <TextSnippetOutlinedIcon sx={{ backgroundColor: 'lightyellow', fill: 'yellow' }} className='iccon' />, des: 'Simple, powerful, beautiful. Next-gen notes & docs.', text: 'Learn more ->', textcolor: 'yellow' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {

    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);


  return (
    <div>
      <div>
        <p className='ai'>Write, plan, share.</p>
        <p className='aiii'>With AI at your side.</p>
        <p className='text'>Notion is the connected workspace where better, faster work happens.</p>
        <button className='getnotion' >
          Get Notion free <ArrowForwardIcon className='arrow' />
        </button>
      </div>
      <div>
        <Image
          src='/home-hero.png'
          width={1000}
          height={375}
          alt='...'
          className='hero'
        />
        <div>
          <div className='cardset'>
            {slides.map((item, index) => (
              <div key={index} style={{ cursor: 'pointer' }} onClick={() => goToSlide(index)} className='cardsz' >
                <div className='title'>
                  {item.logo}
                  <p>{item.title}</p>{item.butt}
                </div>
                <p className='des'>{item.des}</p>
                <p className='tt' style={{ color: item.textcolor }}>{item.text}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ArrowCircleLeftIcon onClick={prevSlide} sx={{ fontSize: 40, fill: 'grey' }} />
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              height={1000}
              width={1600}
              className='imagebox'
            />
            <ArrowCircleRightIcon onClick={nextSlide} sx={{ fontSize: 40, fill: 'grey' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page