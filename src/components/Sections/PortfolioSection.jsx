import React, { useState, useEffect } from 'react';
import portfolio1 from '../../assets/img/portfolio-1.jpg'
import portfolio2 from '../../assets/img/portfolio-2.jpg'
import portfolio3 from '../../assets/img/portfolio-3.jpg'
import portfolio4 from '../../assets/img/portfolio-4.jpg'
import portfolio5 from '../../assets/img/portfolio-5.jpg'
import portfolio6 from '../../assets/img/portfolio-6.jpg'
import portfolio7 from '../../assets/img/portfolio-7.jpg'
import portfolio8 from '../../assets/img/portfolio-8.jpg'
import portfolio9 from '../../assets/img/portfolio-9.jpg'

const Tab = ({ label, onClick, isActive }) => (
    <li className={`tabs cursor-pointer px-5 ${isActive ? "active-tabs" : ""}`} onClick={onClick}>
        {label}
    </li>
);

export default function PortfolioSection() {
    const [activeTab, setActiveTab] = useState(0); 
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriesData = [
            { name: 'WordPress', images: [portfolio1, portfolio2, portfolio3] },
            { name: 'React JS', images: [portfolio4, portfolio5, portfolio6] },
            { name: 'Laravel', images: [portfolio7, portfolio8, portfolio9] },
        ];
        setCategories(categoriesData);
    }, []);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="h-dvh flex items-center">
            <div className="container mx-auto">
                <h2 className='text-6xl font-semibold'>Portfolio</h2>
                <div className="mt-5 w-[5rem] border-4 border-b-2 border-[#000] border-solid"></div>
                <p className='my-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <ul className="tab-list flex justify-center">
                    {categories.map((category, index) => (
                        <Tab
                            key={index}
                            label={category.name}
                            onClick={() => handleTabClick(index)}
                            isActive={activeTab === index}
                        />
                    ))}
                </ul>
                <div className="content-container">
                    {categories.map((category, index) => (
                        <div key={index} className={`content ${activeTab === index ? "active-content" : ""}`}>
                            <div className="flex">
                                {category.images.map((image, imgIndex) => (
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
