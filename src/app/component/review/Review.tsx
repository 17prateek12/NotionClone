'use client';
import React, { useState } from 'react'
import './Review.css';
import Image from 'next/image';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Review = () => {
    const slides = [
        { des: 'Community meet-up in Tokyo', image: '/community-slide-01.png' },
        { des: 'Notion ambassador event in New York', image: '/community-slide-02.png' },
        { des: 'Sharing Notion setups in San Francisco', image: '/community-slide-03.png' },
        { des: 'Coffee pop-up in London', image: '/community-slide-04.png' },
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


    return (
        <div className='diss'>
            <div className='big'>
                <div>
                    <div>
                        <div className='grid'>
                            <ArrowCircleLeftIcon onClick={prevSlide} sx={{ fontSize: 40, fill: 'grey' }} />
                            <Image
                                src={slides[currentIndex].image}
                                alt={slides[currentIndex].des}
                                height={820}
                                width={1060}
                                className='imageboxs'
                            />
                            <ArrowCircleRightIcon onClick={nextSlide} sx={{ fontSize: 40, fill: 'grey' }} />
                        </div>
                        <p className='dess'>{slides[currentIndex].des}</p>
                    </div>
                    <div className='switch'>
                        {slides.map((item, index) => (
                            <CircleIcon key={index} onClick={() => goToSlide(index)} className='dot' />
                        ))}
                    </div>
                </div>
            </div>
            <div className='small'>
                <div className='smallbox'>
                    <div className='profile'>
                        <Image
                            src='/twitter-avatar-deborah.png'
                            height={60}
                            width={60}
                            alt='...'
                        />
                        <div>
                            <p style={{ fontSize: 24, fontWeight: 'bold' }}>Deborah Mecca</p>
                            <p style={{ fontSize: 24, color: 'gray' }}>@DebMecca</p>
                        </div>
                    </div>
                    <p className='desss'>I used to HATE documenting things. And then I started
                        using<span style={{ color: 'blue' }}> @NotionHQ </span> and I document a lot. A LOT A LOT.
                        Now I just realize that it wasn't that I hated
                        documenting, I just hated Google Docs.</p>
                </div>
                <div className='smallbox'>
                    <div className='profile'>
                        <Image
                            src='/twitter-avatar-andre.png'
                            height={60}
                            width={60}
                            alt='...'
                        />
                        <div>
                            <p style={{ fontSize: 24, fontWeight: 'bold' }}>André Blackman</p>
                            <p style={{ fontSize: 24, color: 'gray' }}>@mindofandre</p>
                        </div>
                    </div>
                    <p className='desss'>One of the most incredible things about
                        <span style={{ color: 'blue' }}> @NotionHQ </span>  is the dynamic
                        community being built - creating and sharing at its best.</p>
                </div>
                <div className='smallbox'>
                    <div className='profile'>
                        <Image
                            src='/twitter-avatar-oliver.png'
                            height={60}
                            width={60}
                            alt='...'
                        />
                        <div>
                            <p style={{ fontSize: 24, fontWeight: 'bold' }}>Oliver Peyre</p>
                            <p style={{ fontSize: 24, color: 'gray' }}>@opeyre</p>
                        </div>
                    </div>
                    <p className='desss'><span style={{ color: 'blue' }}> @NotionHQ </span> Truly
                        impressed by the velocity and quality of your work. Making using
                        Notion even more fun week after week!</p>
                </div>
            </div>

        </div>
    )
}

export default Review