'use client';
import React, { useState, useEffect } from 'react';
import './Team.css'
import Image from 'next/image'

const Team = () => {

    const slides = [
        { title: 'Engineering', image: '/engineering.png', logo: '/engineering-v2.png' },
        { title: 'Design', image: '/design.png', logo: '/design-v2.png' },
        { title: 'Product', image: '/product(1).png', logo: '/product.png' },
        { title: 'Marketing', image: '/marketing(1).png', logo: '/marketing.png' },
        { title: 'Operations', image: '/operations(1).png', logo: '/operations.png' },
        { title: 'HR', image: '/hr.png', logo: '/hr-v2.png' },
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
        }, 2000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);



    return (
        <div>
            <div>
                <p className='heading'>Notion adapts to your needs. It’s as minimal or as</p>
                <p className='heading2'> powerful as you need it to be.</p>
                <div className='ceo'>
                    <Image
                        src='/match-group.png'
                        width={50}
                        height={50}
                        alt='...'
                    />
                    <div>
                        <p className='rahim'>Rahim Makani</p>
                        <p className='dicc'>Director of Product, Matchgroup</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='every'>Every team, side-by-side</p>
                <div>
                    <div className='buttons'>
                        {slides.map((item, index) => (
                            <div key={index} onClick={() => goToSlide(index)} className='cardb'>
                                <Image
                                    src={item.logo}
                                    height={150}
                                    width={150}
                                    alt='...'
                                />
                                <h2>{item.title}</h2>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Image
                            src={slides[currentIndex].image}
                            alt={slides[currentIndex].title}
                            height={1000}
                            width={1600}
                            className='imagebox'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team