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
            // console.log(aboutData.about_self_content)
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
                    <h2 className='text-6xl font-semibold'>{aboutData.section_title}</h2>
                    <div className="mt-5 w-[5rem] border-4 border-b-2 border-[#000] border-solid"></div>
                    <SanitizedHtml sanitizedHtmlField={aboutData.about_self_content} />
                    <div className="flex items-center">
                        <div className="w-1/3">
                            <img className='w-full' src={ProfileImg} alt='' />
                        </div>
                        <div className="w-2/3">
                            <div className="contentProfile px-5">
                                <h2 className='text-4xl font-semibold mb-5'>{aboutData.designation}</h2>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}