import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-6">
      <h5 className="text-warning font-bold text-xl  text-center">Service</h5>
      <h2 className="text-4xl font-bold py-2  text-center">Our Service Area</h2>
      <p className="w-96 mx-auto py-4 text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which dont look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
