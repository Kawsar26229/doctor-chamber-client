import { FaGithub, FaGoogle } from 'react-icons/fa';
const SocialLinks = () => {
  return (
    <div className="mb-6 text-center">
      <div className="divider">OR</div>
      <button className="btn btn-circle mr-4">
      <FaGoogle />
      </button>
      <button className="btn btn-circle">
      <FaGithub />
      </button>
    </div>
  );
};

export default SocialLinks;
