/* eslint-disable react/prop-types */

import HomeCard from "./HomeCard";



const HomeCardContainer = ({ allData }) => {

    

    return (
        <div>
            <div className="py-12 my-6 w-11/12 md:w-10/12 mx-auto flex justify-center items-center bg-gradient-to-l from-slate-200 rounded-2xl">
                <h3 className="text-centre text-3xl md:text-4xl font-bold text-yellow-500">Available Deals</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mb-6 w-11/12 md:w-10/12 mx-auto">
                {
                    allData.map(item => <HomeCard key={item.id} item={item}></HomeCard>)
                }

            </div>
        </div>
    );
};

export default HomeCardContainer;