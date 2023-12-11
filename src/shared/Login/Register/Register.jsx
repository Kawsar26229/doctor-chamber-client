import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";

const Register = () => {
  return (
    <div className="hero min-h-[800px] bg-base-200 rounded">
      <div className="card shrink-0 w-96 shadow-2xl bg-base-100">
        <h3 className="text-center text-3xl font-semibold mt-4 mb-0">Sign Up</h3>
        <form className="card-body mt-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent">Register</button>
          </div>
        </form>
        <p className="text-center">
          Already Have an Account?{" "}
          <Link className="text-yellow-500" to="/login">
            Login
          </Link>
        </p>
        <SocialLinks></SocialLinks>
      </div>
    </div>
  );
};

export default Register;
