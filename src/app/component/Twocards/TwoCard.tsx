import React from 'react'
import './twocard.css'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Image from 'next/image';



const TwoCard = () => {
    return (
        <div className='dis'>
            <div className='cardsbig'>
                <RemoveRedEyeOutlinedIcon className='eye' />
                <p className='headd'>Customize the info you track</p>
                <p className='bodytext'>Create your own labels, tags, owners, and more, so ev-</p>
                <p className='bodytext'>eryone has context and everything stays organized.</p>
                <Image
                    src='/build-any-page-communicate-any-idea.png'
                    width={708}
                    height={550}
                    alt='...'
                    className='imgposit'
                />
            </div>
            <div className='cardsbig'>
                <ColorLensIcon className='eye' />
                <p className='headd'>Build any page, communicate any idea</p>
                <p className='bodytext'>Everything is drag and drop in Notion — images, toggles,</p>
                <p className='bodytext'>to-do’s, even embedded databases.</p>
                <Image
                    src='/customize-info.png'
                    width={708}
                    height={550}
                    alt='...'
                    className='imgposit'
                />
            </div>
        </div>
    )
}

export default TwoCard