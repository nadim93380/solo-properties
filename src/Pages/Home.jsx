import { useLoaderData } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import HomeCardContainer from "../components/HomeCardContainer";


const Home = () => {

    const allData = useLoaderData()
    return (
        <div>

            <HomeBanner></HomeBanner>
            <div className='bg-slate-100'>
                <HomeCardContainer allData={allData}></HomeCardContainer>
            </div>
        </div>
    );
};

export default Home;