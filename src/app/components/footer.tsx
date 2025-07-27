'use client';

import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className='mt-12 border-t border-neutral-800 py-6 text-center text-sm text-zinc-200'>
            <p className='mb-3'>
                Writing code. Building things. Learning fast. 👩🏽‍💻
            </p>

            <div className='flex justify-center gap-4 mb-3 text-lg text-zinc-200'>
                <a
                    href='https://github.com/ellacmd'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-pink-400 transition-colors'>
                    <i className='ri-github-fill'>
                        <SiGithub />
                    </i>
                </a>
                <a
                    href='https://linkedin.com/in/ella-batubo'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-pink-400 transition-colors'>
                    <i className='ri-linkedin-box-fill'>
                        <SiLinkedin />
                    </i>
                </a>
            </div>

            <p>
                © {new Date().getFullYear()} Emmanuella Batubo. All rights
                reserved.
            </p>
        </footer>
    );
};

export default Footer;
