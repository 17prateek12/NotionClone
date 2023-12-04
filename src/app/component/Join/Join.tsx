import React from 'react'
import './Join.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image';


const Join = () => {
    return (
        <div>
            <p className='join'>Join a global movement.</p>
            <p className='crea'> Unleash your creativity.</p>
            <p className='un'>Our vibrant community produces content, teaches courses, and leads events all over the world</p>
            <div className='more'>
                <p className='learn'>Learn more </p><ArrowRightAltIcon sx={{ fontSize: 40 }} />
            </div>
            <Image
                src='/avatars.png'
                height={200}
                width={1280}
                alt='...'
                className='imgpos'
            />
            <div className='more2'>
                <div className='place'>
                    <p className='main'>1M+</p>
                    <p className='sub'>community members</p>
                </div>
                <div className='place'>
                    <p className='main'>150+</p>
                    <p className='sub'>community groups</p>
                </div>
                <div className='place'>
                    <p className='main'>50+</p>
                    <p className='sub'>countries represented</p>
                </div>
            </div>
            <div className='more2'>
                <div className='cardss'>
                    <p className='main2'>An always-on support network</p>
                    <p className='sub2'>Swap setups and share tips in over 149 online communities.</p>
                    <Image
                        src='/community-icons-V2.png'
                        height={546}
                        width={568}
                        alt='...'
                    />
                </div>
                <div className='cardss'>
                    <p className='main2'>Choose your language</p>
                    <p className='sub2'>Notion currently supports English, Korean, Japanese, French,
                        German, Spanish, and Portuguese. With more to come!</p>
                    <Image
                        src='/welcome-to-notion.png'
                        height={350}
                        width={696}
                        alt='...'
                        className='imgpo'
                    />
                </div>
            </div>

        </div>
    )
}

export default Join