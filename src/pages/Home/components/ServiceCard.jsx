/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-lg">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/appointment/${_id}`} className="btn btn-primary">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
