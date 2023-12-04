'use client';
import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Image from 'next/image'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    const [language, setLanguage] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
    };

    return (
        <div>
            <p className='get'>Get started for free</p>
            <p className='textt1'>Play around with it first. Pay and add your team later.</p>
            <div className='contains'>
                <button className='button'>Try Notion free</button>
                <p className='link'>Request a demo</p>
            </div>
            <Image
                src='/notion-parade.png'
                height={330}
                width={770}
                alt='...'
                className='imageps'
            />
            <div className='foot'>
                <div className='col1'>
                    <div className='notionlogo'>
                        <Image
                            src='/Notionapplogo.png'
                            width={55}
                            height={55}
                            alt='...'
                        />
                        <p className='notion'>Notion</p>
                    </div>
                    <div className='iconn'>
                        <InstagramIcon className='iconsize' />
                        <TwitterIcon className='iconsize' />
                        <LinkedInIcon className='iconsize' />
                        <FacebookIcon className='iconsize' />
                        <YouTubeIcon className='iconsize' />
                    </div>
                    <div>
                        <FormControl className='form'>
                            <Select
                                value={language}
                                onChange={handleChange}
                                displayEmpty
                                sx={{ fontSize: 24 }}
                            >
                                <MenuItem value="" >
                                    <em>English</em>
                                </MenuItem>
                                <MenuItem>English (US)</MenuItem>
                                <MenuItem>French</MenuItem>
                                <MenuItem >German</MenuItem>
                                <MenuItem>Japanese</MenuItem>
                                <MenuItem>Korean</MenuItem>
                                <MenuItem>Spanish</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='col1'>
                    <p className='imp'>Product</p>
                    <p className='rest'>Wikis</p>
                    <p className='rest'>Projects </p>
                    <p className='rest'>Docs</p>
                    <p className='rest'>Notion AI</p>
                    <p className='imp'>Solutions</p>
                    <p className='rest'>Enterprise</p>
                    <p className='rest'>Small business</p>
                    <p className='rest'>Personal use</p>
                    <p className='rest'>Remote work</p>
                    <p className='rest'>Startups</p>
                    <p className='rest'>Education</p>
                    <p className='rest'>Nonprofits</p>
                    <p className='rest'>Engineering</p>
                    <p className='rest'>Product</p>
                    <p className='rest'>Design</p>
                    <p className='rest'>managers</p>
                    <p className='do'>Do Not Sell or Share My Info</p>
                    <p className='rest'>© 2023 Notion Labs, Inc.</p>
                </div>
                <div className='col1'>
                    <p className='imp'>Download</p>
                    <p className='rest'>iOs & Android</p>
                    <p className='rest'>Mac & Windows</p>
                    <p className='rest'>Web Clipper</p>
                    <p className='imp'>Build</p>
                    <p className='rest'>Integrations</p>
                    <p className='rest'>Templates</p>
                    <p className='rest'>API docs</p>
                    <p className='rest'>Guides and tutorials</p>
                    <p className='rest'>Hire a consultant</p>
                    <p className='rest'>Become an affiliate</p>
                    <p className='imp'>Learn</p>
                    <p className='rest'>Customer stories</p>
                    <p className='rest'>Help center</p>
                    <p className='rest'>Webinars</p>
                    <p className='rest'>Blog</p>
                    <p className='rest'>Community</p>
                </div>
                <div className='col1'>
                    <p className='imp'>Get started</p>
                    <p className='rest'>Switch from Confluence</p>
                    <p className='rest'>Switch from Asana</p>
                    <p className='rest'>Switch from Evernote</p>
                    <p className='rest'>Compare vs Monday</p>
                    <p className='rest'>Compare vs Clickup</p>
                    <p className='rest'>Compare vs Jira</p>
                    <p className='imp'>Resources</p>
                    <p className='rest'>Pricing</p>
                    <p className='rest'>About us</p>
                    <p className='rest'>Careers</p>
                    <p className='imp'>Media kit</p>
                    <p className='rest'>Email us</p>
                    <p className='rest'>Security</p>
                    <p className='rest'>Cookie settings</p>
                    <p className='rest'>Terms & privacy</p>
                    <p className='rest'>California Privacy Notice</p>
                    <p className='rest'>Status</p>
                </div>
            </div>
        </div>
    )
}

export default Footer