/* eslint-disable react/prop-types */

import HomeCard from "./HomeCard";


const HomeCardContainer = ({ allData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center py-12 w-11/12 md:w-10/12 mx-auto">
            {
                allData.map(item => <HomeCard key={item.id} item={item}></HomeCard>)
            }
            
        </div>
    );
};

export default HomeCardContainer;