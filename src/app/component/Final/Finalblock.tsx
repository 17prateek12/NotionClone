import React from 'react'
import './Final.css'
import Image from 'next/image';
import HouseSharpIcon from '@mui/icons-material/HouseSharp';
import SportsScoreSharpIcon from '@mui/icons-material/SportsScoreSharp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import GradientOutlinedIcon from '@mui/icons-material/GradientOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';

const Finalblock = () => {
  
    return (
        <div>
            <div className='imposs'>
                <p className='end'>Endless ways to use it</p>
                <Image src='/topPeekJ.png'
                    height={300}
                    width={300}
                    alt='...'
                    className='image'
                />
            </div>
            <div className='mainn'>
                <div className='col11'>
                    <HouseSharpIcon sx={{
                        marginTop: 5, marginLeft: 8, fontSize: 50, fill: 'red'
                    }} />
                    <p className='ffontt'>Company wiki</p>
                    <p className='lm'>Learn more </p>
                    <Image
                        src='/company-wiki-template.png'
                        height={640}
                        width={800}
                        alt='...'
                        className='imm'
                    />
                </div>
                <div className='col22'>
                    <div className='gridd'>
                        <div className='container'>
                            <SportsScoreSharpIcon sx={{
                                marginTop: 5, marginLeft: 4, fontSize: 50, fill: 'blue'
                            }} />
                            <p className='ffontt'>Product roadmap</p>
                            <p className='lm'>Learn more</p>
                        </div>

                        <div className='container'>
                            <DescriptionTwoToneIcon sx={{
                                marginTop: 5, marginLeft: 4, fontSize: 50, fill: 'yellow'
                            }} />
                            <p className='ffontt'>Meeting notes</p>
                            <p className='lm'>Learn more</p>
                        </div>

                        <div className='container'>
                            <GradientOutlinedIcon sx={{
                                marginTop: 5, marginLeft: 4, fontSize: 50, fill: 'green'
                            }} />
                            <p className='ffontt'>Editorial notes</p>
                            <p className='lm'>Learn more</p>
                        </div>
                    </div>

                    <div className='gridd'>

                        <div className='container'>
                            <CheckCircleIcon sx={{
                                marginTop: 5, marginLeft: 4, fontSize: 50, fill: 'orange'
                            }} />
                            <p className='ffontt'>OKRs</p>
                            <p className='lm'>Learn more</p>
                        </div>

                        <div className='container'>
                            <AirplanemodeActiveIcon sx={{
                                marginTop: 5, marginLeft: 4, fontSize: 50, fill: 'red'
                            }} />
                            <p className='ffontt'>Vacation planner</p>
                            <p className='lm'>Learn more</p>
                        </div>

                        <div className='container'>
                            <InboxOutlinedIcon sx={{
                                marginTop: 5, marginLeft: 4, fontSize: 50, fill: 'purple'
                            }} />
                            <p className='ffontt'>Habit tracker</p>
                            <p className='lm'>Learn more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finalblock