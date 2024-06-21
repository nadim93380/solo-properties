/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const HomeCard = ({item}) => {
    return (
        <div className="card h-96 shadow-xl image-full">
            <figure><img src={item.image} className="object-cover w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-yellow-400">{item.estate_title}</h2>
                <p>{item.description}</p>
                <p><span className="font-bold">Property Type : </span>{item.segment_name}</p>
                <p><span className="font-bold">Location : </span>{item.location}</p>
                <p><span className="font-bold">Area : </span>{item.area} </p>
                <div className="card-actions justify-between">
                    <button className="btn btn-outline btn-warning">Price : {item.price}$</button>
                    <Link to={`/details/${item.id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;