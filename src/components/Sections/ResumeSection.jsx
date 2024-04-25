import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { apiService } from '../../services/ApiServices';
import { configVariable } from '../../../sample.config';

export default function ResumeSection() {
    const [resume, setResume] = useState([]);

    const resumeDataHandler = async () => {
        try {
            const results = await apiService.get(`${configVariable.basUrl}experience`)
            setResume(results?.data?.add_experience)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        resumeDataHandler();
    }, []);

    return (
        <div className="h-dvh flex items-center">
            <div className="container mx-auto">
                <h2 className='text-6xl font-semibold'>{resume?.section_title}</h2>
                <div className="mt-5 w-[5rem] border-4 border-b-2 border-[#000] border-solid"></div>
                <p className='mt-4 mb-10'>{resume?.section_content}</p>
                <div className="flex flex-wrap">
                    {
                        resume.map((item, index) => (
                            <div className="w-1/2" key={index}>
                                <div className="experience">
                                    <div className="experienceItem pe-16 mt-10">
                                        <h3 className='text-2xl font-semibold mb-2'>{item?.company_name}</h3>
                                        <div className="joiningInfo">
                                            <button className="mt-4 rounded block border border-[#000] py-3 px-8 capitalize">
                                                <span className="relative flex h-3 w-3 float-right">
                                                    <span className="animate-ping absolute inline-flex right-[-35px] top-[-20px] h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 right-[-35px] top-[-20px] bg-sky-500"></span>
                                                </span>
                                                Present
                                            </button>
                                        </div>
                                        <h4 className='text-xl font-semibold capitalize py-5'><u>responsibilities</u></h4>
                                        {item.job_role && Array.isArray(item.job_role) && (
                                            <ul className='mt-5'>
                                                {item.job_role.map((role, roleIndex) => (
                                                    <li key={roleIndex}>
                                                        <FontAwesomeIcon icon={faCircleDot} className='mr-2' />
                                                        <span>{role.job_list}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}
