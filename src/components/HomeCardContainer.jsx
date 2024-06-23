/* eslint-disable react/prop-types */

// import { useEffect } from "react";
import HomeCard from "./HomeCard";
// import AOS from 'aos';
// import 'aos/dist/aos.css';


const HomeCardContainer = ({ allData }) => {

    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh()
    // }, [])

    return (
        <div>
            <div className="py-12 my-6 w-11/12 md:w-10/12 mx-auto flex justify-center items-center bg-gradient-to-l from-slate-200 rounded-2xl">
                <h3 className="text-centre text-4xl font-bold text-yellow-400">Available Deals</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mb-6 w-11/12 md:w-10/12 mx-auto">
                {
                    allData.map(item => <HomeCard key={item.id} item={item}></HomeCard>)
                }

            </div>
        </div>
    );
};

export default HomeCardContainer;