import React, { useEffect, useState } from 'react'
import ProfileImg from '../../assets/img/profile-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { apiService } from '../../services/ApiServices'
import { configVariable } from '../../../sample.config'
import SanitizedHtml from '../../lib/SanitizedHtml'

export default function AboutSection() {

    const [aboutData, setAboutData] = useState([]);

    const getAboutData = async () => {
        try {
            const result = await apiService.get(`${configVariable.basUrl}personal`)
            setAboutData(result?.data || [])
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAboutData()
    }, []);
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
                                <h2 className='text-4xl font-semibold'>{aboutData.section_title}</h2>
                                <p className='my-4'>
                                {/* {
                                    <SanitizedHtml sanitizedHtmlField={aboutData?.about_self_content?.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')} />
                                aboutData?.about_self_content..replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                                } */}
                                </p>
                                <div className="flex">
                                    <div className="w-1/2">
                                        {Array.isArray(aboutData?.personal_detail) && aboutData?.personal_detail.length > 0 ? (
                                            aboutData.personal_detail.map((item, index) => (
                                                <div className="flex items-center mb-5 text-xl" key={index}>
                                                    <FontAwesomeIcon icon={faChevronRight} className='mr-2' />
                                                    <strong className='mr-2'>{item?.profile_title}</strong>
                                                    <span>{item?.profile_info}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No data available</p>
                                        )}
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