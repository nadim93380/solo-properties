/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const HomeCard = ({ item }) => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh()
    }, [])

    
    return (
        <div className="card h-96 shadow-xl image-full" data-aos="fade-up" data-aos-once="false">
            <figure><img src={item.image} className="object-cover w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-yellow-400">{item.estate_title}</h2>
                <p>{item.description.slice(0,80)}</p>
                <p><span className="font-bold">Property Type : </span>{item.segment_name}</p>
                <p><span className="font-bold">Location : </span>{item.location}</p>
                <p><span className="font-bold">Area : </span>{item.area} </p>
                <div className="card-actions justify-between">
                    <button className="btn btn-outline btn-warning">Price : {item.price}$</button>
                    <Link to={`/details/${item.id}`} className="btn btn-primary">View Property</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;