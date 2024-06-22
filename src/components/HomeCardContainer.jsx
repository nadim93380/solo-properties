/* eslint-disable react/prop-types */

import { useEffect } from "react";
import HomeCard from "./HomeCard";
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomeCardContainer = ({ allData }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh()
    }, [])

    return (
        <div data-aos="fade-up" data-aos-once="true" className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center py-12 w-11/12 md:w-10/12 mx-auto">
            {
                allData.map(item => <HomeCard key={item.id} item={item}></HomeCard>)
            }
            
        </div>
    );
};

export default HomeCardContainer;