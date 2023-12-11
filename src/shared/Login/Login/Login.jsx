import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password).then((userCredential) => {
      const user = userCredential.user;
      form.reset();
      navigate(from, { replace: true });
      if (user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="hero min-h-[800px] bg-base-200 rounded">
      <div className="card shrink-0 w-96 shadow-2xl bg-base-100">
        <h3 className="text-center text-3xl font-semibold mt-4 mb-0">Login</h3>
        <form onSubmit={handleLogin} className="card-body">
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
            <button className="btn btn-accent">Login</button>
          </div>
        </form>
        <p className="text-center">
          Not Account Yet?{" "}
          <Link className="text-yellow-500" to="/register">
            Regiser
          </Link>
        </p>
        <SocialLinks></SocialLinks>
      </div>
    </div>
  );
};

export default Login;
