import React from 'react';
import userAvatar from '../../assets/img/userAvata.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link as RouterLink, Outlet } from 'react-router-dom'; // Rename Link to RouterLink
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Rename Link to ScrollLink
import { NavigationConstant } from '../../lib/MenuConstant';

function Layouts() {
    const handleScroll = () => {
        scroll.scrollTo('abtMove', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <div className="flex">
            <div className="w-1/4">
                <div className='h-full mainSideBar bg-[#000] fixed top-0 left-0 w-1/4'>
                    <div className="userAvatar my-3">
                        <img
                            className='m-auto rounded-full border-4 border-[#c92020] size-40'
                            src={userAvatar}
                            alt=""
                        />
                    </div>
                    <div className="profileIcons flex justify-center my-3">
                        <div className="bg-[#212431] rounded-full w-10 h-10 text-[#fff] mx-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="bg-[#212431] rounded-full w-10 h-10 text-[#fff] mx-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="bg-[#212431] rounded-full w-10 h-10 text-[#fff] mx-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                    <div className="menuList flex flex-col items-center mt-20">
                        <div className="menuItem flex items-center mb-2">
                            <div className="menuIcon">
                                <FontAwesomeIcon className='text-[#fff] text-xl' icon={faHouse} />
                            </div>
                            <div className="menuLink ml-2">
                                <RouterLink className='text-[#fff] text-xl' to={NavigationConstant.HOME}>Home</RouterLink>
                            </div>
                        </div>
                        <div className="menuItem flex items-center mb-2">
                            <div className="menuIcon">
                                <FontAwesomeIcon className='text-xl text-[#fff]' icon={faHouse} />
                            </div>
                            <div className="menuLink ml-2">
                                <ScrollLink className='text-[#fff] text-xl' to='abtMove' smooth={true} duration={800} onClick={handleScroll}>
                                    About Us
                                </ScrollLink>
                                {/* <a href="#" className='text-[#fff] text-xl'>Home</a> */}
                            </div>
                        </div>
                        <div className="menuItem flex items-center mb-2">
                            <div className="menuIcon">
                                <FontAwesomeIcon className='text-xl text-[#fff]' icon={faHouse} />
                            </div>
                            <div className="menuLink ml-2">
                                <a href="#" className='text-[#fff] text-xl'>Home</a>
                            </div>
                        </div>
                        <div className="menuItem flex items-center mb-2">
                            <div className="menuIcon">
                                <FontAwesomeIcon className='text-xl text-[#fff]' icon={faHouse} />
                            </div>
                            <div className="menuLink ml-2">
                                <a href="#" className='text-[#fff] text-xl'>Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/4">
                <Outlet />
            </div>
        </div>
    );
}

export default Layouts;
