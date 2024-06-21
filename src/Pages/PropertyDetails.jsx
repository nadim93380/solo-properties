
import { useLoaderData, useParams } from "react-router-dom";


const PropertyDetails = () => {
    const { id } = useParams()
    const allData = useLoaderData()

    const targetItem = allData.find(item => item.id === parseInt(id))

    return (
        <div className="pt-20 w-11/12 md:w-10/12 mx-auto">
            <div>
                <div className="relative">
                    <img src={targetItem.image} className="w-full object-cover h-[60vh] rounded-lg mb-6" />
                    <div className="absolute left-0 top-6 bg-yellow-400 p-4 text-2xl rounded-r-full font-bold"><h3>For {targetItem.status}</h3></div>
                </div>

                <div className=" text-black space-y-3">
                    <h2 className="text-4xl font-bold border-b-2 pb-3 ">{targetItem.estate_title}</h2>
                    <p className="text-2xl font-bold">Property Type : {targetItem.segment_name}</p>
                    <p>{targetItem.description}</p>
                    <div className="flex justify-between items-center border-b-2">
                        <h3><span className=" text-xl font-bold">Location :</span> {targetItem.location}</h3>
                        <h3><span className=" text-xl font-bold">Area :</span> {targetItem.area}</h3>
                    </div>
                    <div className="border-b-2 pb-3">
                        <h3 className=" text-xl font-bold underline pb-3">Facilities : </h3>
                        <ul className="list-disc list-inside">
                            {
                                targetItem.facilities.map((facility, idx) => <li key={idx}>{facility}</li>)
                            }
                        </ul>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <button className="btn btn-outline">Price : {targetItem.price} $</button>
                        <button className="btn btn-outline btn-primary">Call Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;