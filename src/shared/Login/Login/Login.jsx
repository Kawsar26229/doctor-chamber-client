import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";

const Login = () => {
  return (
    <div className="hero min-h-[800px] bg-base-200 rounded">
      <div className="card shrink-0 w-96 shadow-2xl bg-base-100">
      <h3 className="text-center text-3xl font-semibold mt-4 mb-0">Login</h3>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent">Login</button>
          </div>
        </form>
        <p className="text-center">
          Not Account Yet? <Link className="text-yellow-500" to="/register">Regiser</Link>
        </p>
        <SocialLinks></SocialLinks>
      </div>
    </div>
  );
};

export default Login;
