import { useLoaderData, useParams } from "react-router-dom";


const PropertyDetails = () => {
    const {id}=useParams()
    const allData = useLoaderData()
    return (
        <div className="h-[50vh] flex justify-center items-center">
            <h2>This Is Property Deatils Page {allData.length}{id}</h2>
        </div>
    );
};

export default PropertyDetails;