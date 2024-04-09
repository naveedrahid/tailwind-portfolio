import React, { useEffect, useState } from 'react'
import { apiService } from '../../services/ApiServices'
import { configVariable } from '../../../sample.config'

export default function SkillsSection() {
    const [skills, setSkills] = useState([])

    const getSkillsData = async () => {
        try {
            const results = await apiService.get(`${configVariable.basUrl}profile`)
            setSkills(results?.data)
            // console.log(results?.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSkillsData()
    }, []);

    return (
        <div className="h-dvh flex items-center">
            <div className="container mx-auto">
                <h2 className='text-6xl font-semibold'>Skills</h2>
                <div className="mt-5 w-[5rem] border-4 border-b-2 border-[#000] border-solid"></div>
                <div className="flex mt-8">
                    <div className="w-1/2 pr-14">
                        {
                            skills?.slice(0, 5).map((item, index) => (
                                <div className="mb-5" key={index}>
                                    <span>{item.skills_title}</span>
                                    <span className='float-right'>{item.skills_percentage}</span>
                                    <div className="bg-stroke bg-[#dce8f8] relative h-2.5 w-full">
                                        <div
                                            className={`bg-primary bg-[red] absolute top-0 left-0 h-full ${item.skills_percentage == 100 ? 'w-full' : `w-[${item.skills_percentage}%]`}`}

                                        ></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-1/2 pr-14">
                        {
                            skills?.slice(5, 10).map((item, index) => (
                                <div className="mb-5" key={index}>
                                    <span>{item.skills_title}</span>
                                    <span className='float-right'>{item.skills_percentage}</span>
                                    <div className="bg-stroke bg-[#dce8f8] relative h-2.5 w-full">
                                        <div
                                            className={`bg-primary bg-[red] absolute top-0 left-0 h-full ${item.skills_percentage == 100 ? 'w-full' : `w-[${item.skills_percentage}%]`}`}

                                        ></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
