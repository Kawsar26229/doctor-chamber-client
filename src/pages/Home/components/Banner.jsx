import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-[500px] bg-base-200 rounded">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold">Doctor Chamber</h1>
          <p className="py-6">
          Doctors appointments are crucial healthcare interactions ensuring proper diagnoses, treatments, and preventive care. These appointments enable patients to discuss concerns, receive expert medical advice, and access tailored treatments. They encompass routine check-ups, specialized consultations, and essential screenings, fostering individual health and well-being.
          </p>
          <Link to='/appointment' className="btn btn-accent">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
