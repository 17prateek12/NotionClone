import React from 'react';
import './Patner.css'
import Image from 'next/image';

const Patner = () => {
    return (
        <div>
            <p className='aii'>Millions run on Notion every day</p>
            <p className='power'>Powering the world’s best teams, from next-generation startups</p>
            <p className='power'>to established enterprises.</p>
            <p className='read'>Read customers stories</p>
            <div className='logo'>
                <Image src='/figma-logo.png' width={180} height={45} alt='...' />
                <Image src='/pixar.png' width={180} height={45} alt='...' />
                <Image src='/doordash.png' width={180} height={45} alt='...' />
                <Image src='/nike.png' width={180} height={45} alt='...' />
                <Image src='/amazon.png' width={180} height={45} alt='...' />
                <Image src='/pinterest.png' width={180} height={45} alt='...' />
            </div>
            <div className='logo'>
                <Image src='/General_Electric_logo.svg__1_.png' width={60} height={60} alt='...' />
                <Image src='/uber.png' width={150} height={45} alt='...' />
                <Image src='/plaid.png' width={150} height={60} alt='...' />
                <Image src='/toyota.png' width={150} height={45} alt='...' />
                <Image src='/snowflake.png' width={180} height={45} alt='...' />
                <Image src='/headspace__1_.png' width={180} height={45} alt='...' />
            </div>
            <div className='logo'>
                <Image src='/angel-list.png' width={150} height={40} alt='...' />
                <Image src='/robinhood_logo.png' width={150} height={40} alt='...' />
            </div>
            <div>
                <p className='tools'>Consolidate tools.</p>
                <p className='cut'>Cut costs.</p>
                <Image
                    src='/giant-pencil-illustration.png'
                    width={300}
                    height={300}
                    alt='...'
                    className='pencil'
                />

                <Image
                    src='/strike.png'
                    height={100}
                    width={1000}
                    alt='...'
                    className='merge'
                />
            </div>
            <div className='lastdiv'>
                <p className='text2'>"We got rid of nearly a dozen different tools because of</p>
                <p className='text2'> what Notion does for us."</p>
                <div className='final'>
                    <Image
                        src='/metalab.png'
                        width={200}
                        height={60}
                        alt='...'
                    />
                    <div>
                        <p className='justin'>Justin Watt</p>
                        <p className='dic'>Director of Ops & Marketing, MetaLab</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patner