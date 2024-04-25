import React, { useState, useEffect } from 'react';
import { apiService } from '../../services/ApiServices';
import { configVariable } from '../../../sample.config';

const Tab = ({ label, onClick, isActive }) => (
    <li className={`tabs cursor-pointer px-5 ${isActive ? "active-tabs" : ""}`} onClick={onClick}>
        {label}
    </li>
);

export default function PortfolioSection() {
    const [activeTab, setActiveTab] = useState(0); 
    const [portfolio, setPortfolio] = useState([]);
    const [addPortfolio, setAddPortfolio] = useState([]);

    const portfolioHandler = async () => {
        try {
            const result = await apiService.get(`${configVariable.basUrl}website_portfolio`)
            setPortfolio(result)
            const addPortfolioData = result?.data?.add_portfolio;
            setAddPortfolio(addPortfolioData);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        portfolioHandler();
    }, []);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="h-dvh flex items-center">
            <div className="container mx-auto">
                <h2 className='text-6xl font-semibold'>{portfolio?.data?.portfolio_title}</h2>
                <div className="mt-5"><p className='my-4'>{portfolio?.data?.portfolio_content}</p></div>
                <ul className="tab-list flex justify-center">
                    {addPortfolio.map((category, index) => (
                        <Tab
                            key={index}
                            label={category.portfolio_title}
                            onClick={() => handleTabClick(index)}
                            isActive={activeTab === index}
                        />
                    ))}
                </ul>
                <div className="content-container">
                    {addPortfolio.map((category, index) => (
                        <div key={index} className={`content ${activeTab === index ? "active-content" : ""}`}>
                            <div className="flex">
                                {category.portfolio_gallery.map((image, imgIndex) => (
                                    <div key={imgIndex} className="w-1/3">
                                        <img src={`${image}`} alt={image} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
