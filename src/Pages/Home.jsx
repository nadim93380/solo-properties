import { useLoaderData } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import HomeCardContainer from "../components/HomeCardContainer";
import { useEffect } from "react";


const Home = () => {

    const allData = useLoaderData()
    useEffect(() => {
        document.title = 'Home - Solo Properties';
    }, []);
    
    return (
        <div>

            <HomeBanner></HomeBanner>
            
            <div>
                <HomeCardContainer allData={allData}></HomeCardContainer>
            </div>
        </div>
    );
};

export default Home;