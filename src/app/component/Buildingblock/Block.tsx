'use client';
import React, { useState, useEffect } from 'react';
import './Block.css'
import Image from 'next/image'
import Box from '@mui/material/Box';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const Block = () => {
    const slides = [
        { title: 'Board', image: '/kanban.png' },
        { title: 'Table', image: '/table.png' },
        { title: 'Timeline', image: '/timeline.png' },
        { title: 'Calender', image: '/calendar.png' },
        { title: 'Gallery', image: '/gallery.png' },
        { title: 'List', image: '/list.png' },
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
        // Set up an interval to automatically change the image every second
        const intervalId = setInterval(() => {
            nextSlide();
        }, 2000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [currentIndex]);


    return (
        <div>
            <div className='block'>
                <Image
                    src='/topPeekI.png'
                    width={300}
                    height={250}
                    alt='...'
                />
                <p className='build'>Powerful building blocks</p>
            </div>
            <div className='bocc'>
                <CloseOutlinedIcon className='xx' />
                <p className='text3'>Visualize, filter & sort any way you want</p>
                <p className='text4'>Show only tasks assigned to you, or items marked as urgent. Break</p>
                <p className='text4'>down any project in the way that’s most helpful to you.</p>
                <div>
                    <div>
                        <Image
                            src={slides[currentIndex].image}
                            alt={slides[currentIndex].title}
                            height={1000}
                            width={1600}
                            className='imagebox'
                        />
                    </div>
                    <div className='buttons'>
                        {slides.map((item, index) => (
                            <button key={index} onClick={() => goToSlide(index)} className='buttom'>
                                <h2>{item.title}</h2>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block