import React from 'react'
import ProfileImg from '../../assets/img/profile-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function AboutSection() {
    return (
        <div className="h-dvh flex items-center" id='abtMove'>
            <div className="container mx-auto">
                <div className="aboutProfile">
                    <h2 className='text-6xl font-semibold'>About</h2>
                    <div className="mt-5 w-[5rem] border-4 border-b-2 border-[#000] border-solid"></div>
                    <p className='my-4'>Magnam dolores commodi suscipit. Necessitatibus eius
                        consequatur ex aliquid fuga eum quidem. Sit sint
                        consectetur velit. Quisquam quos quisquam cupiditate.
                        Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                        in iste officiis commodi quidem hic quas.</p>
                    <div className="flex items-center">
                        <div className="w-1/3">
                            <img className='w-full' src={ProfileImg} alt='' />
                        </div>
                        <div className="w-2/3">
                            <div className="contentProfile px-5">
                                <h2 className='text-4xl font-semibold'>UI/UX Designer & Web Developer.</h2>
                                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="flex">
                                    <div className="w-1/2">
                                        <div className="flex items-center mb-5 text-xl">
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                className='mr-2'
                                            />
                                            <strong className='mr-2'>Birthday</strong>
                                            <span>15 May 1990</span>
                                        </div>
                                        <div className="flex items-center mb-5 text-xl">
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                className='mr-2'
                                            />
                                            <strong className='mr-2'>Birthday</strong>
                                            <span>15 May 1990</span>
                                        </div>
                                        <div className="flex items-center mb-5 text-xl">
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                className='mr-2'
                                            />
                                            <strong className='mr-2'>Birthday</strong>
                                            <span>15 May 1990</span>
                                        </div>
                                        <div className="flex items-center mb-5 text-xl">
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                className='mr-2'
                                            />
                                            <strong className='mr-2'>Birthday</strong>
                                            <span>15 May 1990</span>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="flex items-center mb-5 text-xl">
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                className='mr-2'
                                            />
                                            <strong className='mr-2'>Birthday</strong>
                                            <span>15 May 1990</span>
                                        </div>
                                        <div className="flex items-center mb-5 text-xl">
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                className='mr-2'
                                            />
                                            <strong className='mr-2'>Birthday</strong>
                                            <span>15 May 1990</span>
                                        </div>
                                        <div className="flex items-center mb-5 text-xl">
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                className='mr-2'
                                            />
                                            <strong className='mr-2'>Birthday</strong>
                                            <span>15 May 1990</span>
                                        </div>
                                        <div className="flex items-center mb-5 text-xl">
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                className='mr-2'
                                            />
                                            <strong className='mr-2'>Birthday</strong>
                                            <span>15 May 1990</span>
                                        </div>
                                    </div>
                                </div>
                                <p className='my-4'>Officiis eligendi itaque
                                    labore et dolorum mollitia officiis optio vero.
                                    Quisquam sunt adipisci omnis et ut. Nulla
                                    accusantium dolor incidunt officia tempore.
                                    Et eius omnis. Cupiditate ut dicta maxime officiis
                                    quidem quia. Sed et consectetur qui quia
                                    repellendus itaque neque. Aliquid amet quidem ut
                                    quaerat cupiditate. Ab et eum qui repellendus
                                    omnis culpa magni laudantium dolores.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}