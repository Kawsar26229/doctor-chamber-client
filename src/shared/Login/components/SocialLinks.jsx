import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLinks = () => {
  const {googleSignIn, githubSignIn } = useContext(AuthContext)
  const navigate = useNavigate()
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(userCredential => {
      const user = userCredential.user;
      navigate(from, { replace: true });
      if(user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  }
  const handleGithubSignIn = () => {
    githubSignIn()
    .then(userCredential => {
      const user = userCredential.user;
      navigate(from, { replace: true });
      if(user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  }

  return (
    <div className="mb-6 text-center">
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn btn-circle mr-4">
      <FaGoogle />
      </button>
      <button onClick={handleGithubSignIn} className="btn btn-circle">
      <FaGithub />
      </button>
    </div>
  );
};

export default SocialLinks;
