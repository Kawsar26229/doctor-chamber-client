import { Link } from "react-router-dom";

const NavBar = () => {
  const navMenus = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About Us",
      link: "/about",
    },
    {
      id: 3,
      title: "Services",
      link: "/services",
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact",
    },
    {
      id: 5,
      title: "Login",
      link: "/login"
    }
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenus.map((nav) => (
              <li key={nav.id}>
                <Link to={nav.link}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Doctor Chamber</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navMenus.map((nav) => (
            <li key={nav.id}>
              <Link to={nav.link}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/appointment' className="btn btn-accent">Appointment</Link>
      </div>
    </div>
  );
};

export default NavBar;
